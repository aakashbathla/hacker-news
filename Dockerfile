FROM node:13.12.0
WORKDIR /app
ADD . /app
RUN npm install
RUN npm run build
EXPOSE 30000
CMD npm start