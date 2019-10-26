# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json /app/package.json
RUN yarn
COPY . /app
RUN yarn build

# production environment
FROM nginx:1.16.0-alpine
COPY --from=build /app/build /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY config/nginx.conf /etc/nginx/conf.d/nginx.template
CMD ["/bin/sh","-c", "if [ -n \"${FRONTEND_PORT}\" ]; then echo FRONTEND PORT: ${FRONTEND_PORT} && envsubst '${FRONTEND_PORT}' < /etc/nginx/conf.d/nginx.template > /etc/nginx/conf.d/nginx.conf; fi ; nginx -g 'daemon off;'"]