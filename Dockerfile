FROM node:8

WORKDIR /app
COPY package*.json ./
RUN npm install
RUN npm ci --only=production
COPY . .
EXPOSE 80
CMD [ "node", "server" ]
