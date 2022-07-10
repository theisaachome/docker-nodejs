FROM node:alpine  as builder

WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
# build react project
RUN npm run build 


FROM nginx
COPY --from=builder /app/build/ /usr/share/nginx/html