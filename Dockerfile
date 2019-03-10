FROM node:10.15.0-alpine
WORKDIR /app
COPY . /app
RUN adduser -D myuser
USER myuser
RUN npm install
CMD ["npm", "run", "start"]
