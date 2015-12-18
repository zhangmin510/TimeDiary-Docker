FROM node:4.2.3
MAINTAINER ZhangMin.name <zhangmin@zhangmin.name>
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install
COPY . /usr/src/app
EXPOSE 8080
ENTRYPOINT node index.js
