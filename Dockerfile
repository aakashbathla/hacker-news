FROM node:13.12.0
WORKDIR /app
ADD . /app
# RUN npm install
# RUN npm run build
# EXPOSE 3000
# CMD npm start