FROM node:20-alpine

WORKDIR /app

RUN corepack enable && corepack prepare pnpm@latest --activate

COPY . .

RUN pnpm install

EXPOSE 3000

CMD ["pnpm", "dev"]
