# base image
FROM node:15
# working directory

WORKDIR /app

# copy current project dependencies into docker 
COPY package.json .
RUN npm install
COPY . ./
ENV PORT 3000
EXPOSE ${PORT}
# CMD [ "node","index.js" ]
CMD [ "npm" ,"run","dev"]