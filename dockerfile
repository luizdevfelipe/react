FROM node:20-alpine

WORKDIR /app

# Instala o bash
RUN apk add --no-cache bash

COPY package*.json ./
RUN if [ -f package.json ]; then npm install; fi

COPY . .

CMD ["node"]
