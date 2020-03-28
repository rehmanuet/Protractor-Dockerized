FROM node:10
ADD . /app
WORKDIR /app
COPY package.json ./
COPY . /app
RUN npm install
