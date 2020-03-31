FROM node:10
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . /app
CMD [ "protractor", "conf/docker_config.js" ]
