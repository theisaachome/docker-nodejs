#Specify a  Base Image
FROM node:alpine


WORKDIR /usr/app
# install some dependencies
COPY ./package.json ./
RUN npm install
COPY ./ ./

# default command
CMD [ "npm","start" ]