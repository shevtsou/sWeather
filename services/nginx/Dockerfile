FROM nginx:alpine

RUN rm /etc/nginx/conf.d/default.conf
COPY sweather.conf /etc/nginx/conf.d/nginx.template

CMD ["/bin/sh","-c", "if [ -n \"${FRONTEND_PORT}\" ] && [ -n \"${BACKEND_PORT}\" ]; then echo FRONTEND PORT: ${FRONTEND_PORT}, BACKEND PORT: ${BACKEND_PORT} && envsubst '${FRONTEND_PORT} ${BACKEND_PORT}' < /etc/nginx/conf.d/nginx.template > /etc/nginx/conf.d/nginx.conf; fi ; nginx -g 'daemon off;'"]
