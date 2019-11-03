FROM node:10.16.2-alpine

WORKDIR /usr/src/node

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8686

CMD ["npm", "start"]