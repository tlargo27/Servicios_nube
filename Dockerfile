FROM node:14.17.0

LABEL MANTAINER="Jhon Edison Castro"

EXPOSE 3000

WORKDIR /app

ADD package.json /app/

RUN npm install

ADD . /app/

CMD ["node", "server"]