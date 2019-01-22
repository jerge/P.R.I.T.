from node:latest AS node

RUN mkdir /usr/src/app
WORKDIR /usr/src/app

COPY package.json /package.json

RUN yarn install 
RUN yarn global add react-scripts 
FROM nginx AS n


CMD yarn start
