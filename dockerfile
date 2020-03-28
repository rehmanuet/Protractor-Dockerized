FROM node:10
RUN mkdir -p /app
RUN chmod -R /app
WORKDIR /app
COPY package.json ./
COPY . /app
RUN npm install
