FROM node:17.8.0-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci

USER node

COPY . .

CMD [ "npm", "run", "build" ]