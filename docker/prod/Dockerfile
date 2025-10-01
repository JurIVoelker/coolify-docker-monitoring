FROM node:22-slim AS base

WORKDIR /app

RUN apt-get update && apt-get install -y curl unzip

RUN curl -fsSL https://bun.sh/install | bash

ENV BUN_INSTALL="/root/.bun"
ENV PATH="${BUN_INSTALL}/bin:${PATH}"

COPY ./package.json ./
RUN bun i

FROM base AS build

COPY --from=base . ./node_modules
COPY . .

RUN bun run build

EXPOSE 3000

CMD ["bun", "start"]
