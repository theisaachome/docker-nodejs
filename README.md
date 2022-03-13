# Docker with Nodejs Development

## Table of Content 

- [Docker Set up]()

---

## Create Custom Image

1. Create docker file


```sh
#Dockerfile
FROM node:15
WORKDIR /app
COPY package.json .
RUN npm install
COPY . ./
```
2. Build docker image
- docker file must be in the same level of directory where we run the command line. 
```
$ docker build .
```
- run docker image  with tags  (-t name)
```
$ docker build -t node-app-image .
```

- check image list
``` 
$ docker image ls
```

## Runing docker image 
- run the docker image we just created

```sh
$ docker run (image name or id)
```
Example
```sh
$ docker run node-app-image
```
### runing docker image with custom name

```sh
$ docker run -d --name node-app node-app-image
```

### check runing containers

```sh
$ docker ps
```

### stop runing containers with id
```sh
$ docker stop ca7869d71b32(container_id)
```

### delete container with id
```sh
$ docker rm ca7869d71b32 (container Id or name) -f
```

## Docker PORT Forwarding and Exporting

- p ``` -p 4000:3000 ```

- application port is :3000

- docker container port is :4000

- Map TCP port 3000 in the container to port 4000 on the Docker host. (Local machine).

- ```-p 8080:80```	
- Map TCP port 80 in the container to port 8080 on the Docker host.

![docker port mapping](./images/docker-port-mapping.png)
Example
```sh
docker run -p 3000:3000 -d --name node-app  node-app-image
```


---
##  runing interactive mode into docker container

```sh
$ docker exec -it node-app bash
```

## add docker ignore file

```
node_modules
Dockerfile
.dockerignore
.git
.gitignore
images/
README.md
```