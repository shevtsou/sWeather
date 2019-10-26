# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
COPY package.json /app/package.json
RUN yarn
COPY . /app

CMD ["node", "./bin/www"]