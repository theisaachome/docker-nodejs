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
