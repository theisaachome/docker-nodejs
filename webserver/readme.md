# Simple Web Server using docker

## create Server.js

```js
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Hi Web Server is Up and Running....");
});
app.listen(8080, () => {
  console.log("App listening on port 8080!");
});
```

## create Dockerfile

```sh
#Specify a  Base Image
FROM node:alpine

# install some dependencies
RUN npm install


# default command
CMD [ "npm","start" ]
```

run this command under the root directory where Dockerfile is there.

```sh
docker build .
```

using tag for image

```sh
docker build -t isaachome/simpleweb .
```

## Running Container

```sh
docker run isaachome/simpleweb
```

## Docker running with Port mapping

Running your image with -d runs the container in detached mode, leaving the container running in the background. The -p flag redirects a public port to a private port inside the container.

```sh
#host machine port : container port
docker run -p 8080:8080 -d isaachome/simpleweb
```
