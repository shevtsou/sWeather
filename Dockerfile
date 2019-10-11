# base image
FROM node:12.2.0-alpine

# set working directory
WORKDIR /app


# install and cache app dependencies
COPY package.json /app/package.json
RUN yarn

# start app
CMD ["yarn", "start"]