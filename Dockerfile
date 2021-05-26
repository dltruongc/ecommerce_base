FROM node:14.17.0-alpine3.10

WORKDIR /server

COPY . .

RUN npm install
