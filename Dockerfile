FROM node:alpine

RUN apk add --no-cache tini

WORKDIR /usr/app
COPY . /usr/app

RUN npm install
ENTRYPOINT ["tini","--"]
CMD ["node", "/usr/app/app.js"]