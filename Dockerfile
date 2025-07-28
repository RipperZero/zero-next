FROM node:22.17.1-alpine AS node-base

# deps stage → Install dependencies
FROM node-base AS deps-stage

WORKDIR /app

# set registry && proxy
# RUN npm config set registry https://registry.npmmirror.com/
# RUN npm config set proxy http://10.167.23.54:8080/
# RUN yarn config set registry https://registry.npmmirror.com/
# RUN yarn config set proxy http://10.167.23.54:8080/

# Install dependencies based on the preferred package manager
# COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* ./
COPY ["package.json","yarn.lock*","package-lock.json*","pnpm-lock.yaml*","./"]

RUN \
    if [ -f yarn.lock ]; then yarn install --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm install; \
    elif [ -f pnpm-lock.yaml ]; then yarn global add pnpm && pnpm install --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    # else npm install; \
    fi

# build stage → build the source
FROM node-base AS build-stage

WORKDIR /app

COPY --from=deps-stage /app/node_modules ./node_modules
COPY . .

RUN yarn run build
# If using npm comment out above and use below instead
# RUN npm run build

# production stage → copy built files then use node to run next
FROM node-base AS production-stage

WORKDIR /app

ENV NODE_ENV production

RUN \
    addgroup --system --gid 1001 nodejs; \
    adduser --system --uid 1001 nextjs

# copy all the files
COPY --from=build-stage /app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build-stage /app/.next/standalone ./
COPY --from=build-stage /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME localhost

CMD ["node", "server.js"]