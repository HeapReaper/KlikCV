FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm ci

COPY . .

RUN npm run build

RUN mkdir -p tmp

RUN node ace migration:run --force

EXPOSE 3333

CMD ["node", "build/bin/server.js"]
