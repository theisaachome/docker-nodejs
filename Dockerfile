# base image
FROM node:15
# working directory

WORKDIR /app

# copy current project dependencies into docker 
COPY package.json .
RUN npm install
COPY . ./
EXPOSE 3000
CMD [ "node","index.js" ]