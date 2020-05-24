FROM node:13.12.0
WORKDIR /app
ADD . /app
RUN npm install
RUN npm rebuild node-sass
RUN npm run build
EXPOSE 30000
CMD npm start