FROM oven/bun:1 AS builder

WORKDIR /app

RUN apt-get update && \
    apt-get install -y wget ca-certificates fonts-liberation libnss3 lsb-release \
    xdg-utils libatk-bridge2.0-0 libgtk-3-0 libx11-xcb1 libxcomposite1 libxdamage1 \
    libxrandr2 libgbm1 libasound2 libpangocairo-1.0-0 libxshmfence1 libdrm2 \
    libxfixes3 libxcb1 libxext6 --no-install-recommends && \
    rm -rf /var/lib/apt/lists/*

RUN apt-get update && \
    apt-get install -y chromium && \
    rm -rf /var/lib/apt/lists/*

COPY package*.json bun.lockb* ./
RUN bun install --frozen-lockfile

COPY . .

RUN bunx puppeteer install chrome

RUN bun run build


FROM oven/bun:1 AS runner

WORKDIR /app

RUN apt-get update && \
    apt-get install -y chromium && \
    rm -rf /var/lib/apt/lists/*

COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules

EXPOSE 3000
CMD ["bun", "run", "start"]
