FROM node:22-slim AS base

WORKDIR /workspace

RUN apt-get update && apt-get install -y curl unzip

RUN curl -fsSL https://bun.sh/install | bash

ENV BUN_INSTALL="/root/.bun"
ENV PATH="${BUN_INSTALL}/bin:${PATH}"

COPY ./package.json ./
RUN bun i

EXPOSE 3000

COPY . .

CMD ["tail", "-f", "/dev/null"]
