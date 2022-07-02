# Docker Production Workflow

Development => Testing => Development

---

## Step 1

### Create react project

```sh
npx create-reat-app frontend
```

---

## Step 2

### Creating Dockerfile

noted file name `Dockerfile.dev`

```sh
FROM node:alpine

WORKDIR '/app'

COPY package.json .
RUN npm install

COPY . .

CMD [ "npm","run","start" ]
```

Building the Dockerfile.dev flag `f` mean file.

```
docker build -f Dockerfile.dev
```

---

## Step 3 : Duplicated dependencies

delete node_modules from working directory.

## Step 4 : Running Container and export PORTS

```sh
docker run -p 3000:3000 <container-id>
```

## Mapping Volume

```sh
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app  <container-id>
```

## Docker Compose

Create compose file `docker-compose.yml`

```sh
version: "3"
services:
  web:
    build:
      context: . # Context where current working directory or specific folder.
      dockerfile: Dockerfile.dev
    ports:
      - "3000:3000"
    volumes:
      - /app/node_modules
      - .:/app  # out container folder : inside container folder
```

### Running docker-compose file

```sh
docker-compose up
```

## Docker compose testing file

update docker compose file with the following.

```sh
  tests:
    build:
      context: . # Context where current working directory or specific folder.
      dockerfile: Dockerfile.dev
    volumes:
      - /app/node_modules
      - .:/app  # out container folder : inside container folder
    command: ["npm","run","test"]
```

Run the command

```sh
docker-compose up --build
```

## Shortcomings on Testing
