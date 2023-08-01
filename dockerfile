FROM node:18-alpine AS base

# deps stage → Install dependencies
FROM base AS deps-stage

WORKDIR /app

# set registry && proxy
RUN npm config set registry https://registry.npmmirror.com/
# RUN npm config set proxy http://10.167.23.54:8080/
RUN yarn config set registry https://registry.npmmirror.com/
# RUN yarn config set proxy http://10.167.23.54:8080/

# Install dependencies based on the preferred package manager
COPY --link package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./

RUN \
  if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
  elif [ -f package-lock.json ]; then npm ci; \
  elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm i --frozen-lockfile; \
  else echo "Lockfile not found." && exit 1; \
  fi

# build stage → build the source
FROM base AS build-stage

WORKDIR /app

COPY --from=deps-stage --link /app/node_modules ./node_modules
COPY --link . .

RUN yarn run build
# If using npm comment out above and use below instead
# RUN npm run build

# production stage → copy built files then use node to run next
FROM base AS production-stage

WORKDIR /app

ENV NODE_ENV production

RUN \
  addgroup --system --gid 1001 nodejs; \
  adduser --system --uid 1001 nextjs

# copy all the files
COPY --from=build-stage --link /app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build-stage --link /app/.next/standalone ./
COPY --from=build-stage --link /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

CMD ["node", "server.js"]