FROM node:20.11.1 AS build
RUN npm install -g json-server@1.0.0-beta.3
EXPOSE 4200