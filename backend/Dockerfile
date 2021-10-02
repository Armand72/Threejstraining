FROM node:alpine

RUN mkdir /app
WORKDIR /app
COPY package.json package.json
RUN npm i --legacy-peer-deps
COPY tsconfig.json tsconfig.json
#COPY .env .env
COPY ./src ./src
CMD npm run server
