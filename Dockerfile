FROM node:22.6.0-alpine

RUN mkdir app

WORKDIR /app

COPY ./package.json .

RUN yarn install

COPY ./ .

RUN yarn build:dev

RUN npm i -g http-server

EXPOSE 3003
CMD [ "http-server",  "dist", "-p", "3003"]