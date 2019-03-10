FROM node:10.15.0-alpine
WORKDIR /app
COPY . /app
RUN ["npm", "install"]
EXPOSE 80
CMD ["npm", "run", "start"]
