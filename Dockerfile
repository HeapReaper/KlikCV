FROM oven/bun:1 AS builder

WORKDIR /app

COPY package*.json bun.lockb* ./

RUN bun install --frozen-lockfile

COPY . .

RUN bun run build

FROM oven/bun:1

WORKDIR /app

RUN bun add -g serve

COPY --from=builder /app/dist ./dist

EXPOSE 3000

CMD ["bunx", "serve", "-s", "dist", "-l", "3000"]
