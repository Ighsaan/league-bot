FROM node:8

WORKDIR /app
COPY package*.json ./
COPY . .
EXPOSE 80
CMD [ "npm", "install" ]
CMD [ "npm", "start" ]
