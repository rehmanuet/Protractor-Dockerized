FROM node:10
WORKDIR /app
ADD ./scripts/wait-for-it.sh ./
RUN chmod 755 wait-for-it.sh
ADD ./scripts/run.sh ./
RUN chmod 755 run.sh
COPY package*.json ./
RUN npm ci
COPY . /app
CMD [ "./run.sh"]

