FROM node:current-alpine3.10

WORKDIR /opt/web

COPY . .

CMD yarn start