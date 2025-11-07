# @see https://github.com/vercel/next.js/blob/canary/examples/with-docker/Dockerfile

FROM node:24.11.0-alpine AS node-base

# deps stage → Install dependencies
FROM node-base AS deps-stage

# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat

WORKDIR /app

# set registry && proxy
# RUN npm config set registry https://registry.npmmirror.com/
# RUN npm config set proxy http://10.167.23.54:8080/

# Install dependencies based on the preferred package manager
# COPY package.json yarn.lock* package-lock.json* pnpm-lock.yaml* .npmrc* ./
COPY ["package.json","yarn.lock*","package-lock.json*","pnpm-lock.yaml*",".npmrc*","./"]
# COPY ["package.json","pnpm-lock.yaml","./"]

RUN \
    if [ -f yarn.lock ]; then yarn --frozen-lockfile; \
    elif [ -f package-lock.json ]; then npm ci; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm i --frozen-lockfile; \
    else echo "Lockfile not found." && exit 1; \
    fi
# RUN pnpm install --frozen-lockfile

# build stage → build the source
FROM node-base AS build-stage

WORKDIR /app

COPY --from=deps-stage /app/node_modules ./node_modules
COPY . .

# Next.js collects completely anonymous telemetry data about general usage.
# Learn more here: https://nextjs.org/telemetry
# Uncomment the following line in case you want to disable telemetry during the build.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN \
    if [ -f yarn.lock ]; then yarn run build; \
    elif [ -f package-lock.json ]; then npm run build; \
    elif [ -f pnpm-lock.yaml ]; then corepack enable pnpm && pnpm run build; \
    else echo "Lockfile not found." && exit 1; \
    fi
# RUN pnpm run build

# production stage → copy built files then use node to run next
FROM node-base AS production-stage

WORKDIR /app

ENV NODE_ENV=production
# Uncomment the following line in case you want to disable telemetry during runtime.
# ENV NEXT_TELEMETRY_DISABLED=1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

# copy all the files
COPY --from=build-stage /app/public ./public
# Automatically leverage output traces to reduce image size
# https://nextjs.org/docs/advanced-features/output-file-tracing
COPY --from=build-stage --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=build-stage --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT=3000

# server.js is created by next build from the standalone output
# https://nextjs.org/docs/pages/api-reference/config/next-config-js/output
ENV HOSTNAME="0.0.0.0"

CMD ["node", "server.js"]