---
layout: post
title: Containers
date: 2025-08-25 16:40:16
description: march & april, looking forward to summer
tags: unikernel
categories: sample-posts
---

# Contenedores
What is a docker?

To check the Ubuntu version:

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ lsb_release -a
No LSB modules are available.
Distributor ID:	Ubuntu
Description:	Ubuntu 24.04.2 LTS
Release:	24.04
Codename:	noble
```

# Install using the apt repository

Before you install Docker Engine for the first time on a new host machine, you need to set up the Docker apt repository. Afterward, you can install and update Docker from the repository.

---

## 1. Set up Docker's apt repository

### Add Docker's official GPG key:
```bash
sudo apt-get update
sudo apt-get install ca-certificates curl
sudo install -m 0755 -d /etc/apt/keyrings
sudo curl -fsSL https://download.docker.com/linux/ubuntu/gpg -o /etc/apt/keyrings/docker.asc
sudo chmod a+r /etc/apt/keyrings/docker.asc
```

### Add the repository to Apt sources:
```bash
echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.asc] https://download.docker.com/linux/ubuntu \
  $(. /etc/os-release && echo "${UBUNTU_CODENAME:-$VERSION_CODENAME}") stable" | \
  sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update
```

### Install the Docker packages.

To install the latest version, run:
```bash
sudo apt-get install docker-ce docker-ce-cli containe
```

### Verify that the installation is successful by running the hello-world image:
```bash
sudo docker run hello-world
```
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker run hello-world

Hello from Docker!
This message shows that your installation appears to be working correctly.

To generate this message, Docker took the following steps:
 1. The Docker client contacted the Docker daemon.
 2. The Docker daemon pulled the "hello-world" image from the Docker Hub.
    (amd64)
 3. The Docker daemon created a new container from that image which runs the
    executable that produces the output you are currently reading.
 4. The Docker daemon streamed that output to the Docker client, which sent it
    to your terminal.

To try something more ambitious, you can run an Ubuntu container with:
 $ docker run -it ubuntu bash

Share images, automate workflows, and more with a free Docker ID:
 https://hub.docker.com/

For more examples and ideas, visit:
 https://docs.docker.com/get-started/
```

### Obtener la imagen alpine
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ docker pull alpine
Using default tag: latest
permission denied while trying to connect to the Docker daemon socket at unix:///var/run/docker.sock: Post "http://%2Fvar%2Frun%2Fdocker.sock/v1.51/images/create?fromImage=docker.io%2Flibrary%2Falpine&tag=latest": dial unix /var/run/docker.sock: connect: permission denied
```
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker pull alpine
Using default tag: latest
latest: Pulling from library/alpine
9824c27679d3: Pull complete 
Digest: sha256:4bcff63911fcb4448bd4fdacec207030997caf25e9bea4045fa6c8c44de311d1
Status: Downloaded newer image for alpine:latest
docker.io/library/alpine:latest
```
### To show all the images
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker images
REPOSITORY     TAG       IMAGE ID       CREATED        SIZE
alpine         latest    9234e8fb04c4   6 weeks ago    8.31MB
muefab/genie   latest    1972e8cfe45e   3 months ago   244MB
hello-world    latest    74cc54e27dc4   7 months ago   10.1kB
```

### To show the file system
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker run alpine ls -l
total 56
drwxr-xr-x    2 root     root          4096 Jul 15 10:42 bin
drwxr-xr-x    5 root     root           340 Aug 26 22:15 dev
drwxr-xr-x    1 root     root          4096 Aug 26 22:15 etc
drwxr-xr-x    2 root     root          4096 Jul 15 10:42 home
drwxr-xr-x    6 root     root          4096 Jul 15 10:42 lib
drwxr-xr-x    5 root     root          4096 Jul 15 10:42 media
drwxr-xr-x    2 root     root          4096 Jul 15 10:42 mnt
drwxr-xr-x    2 root     root          4096 Jul 15 10:42 opt
dr-xr-xr-x  618 root     root             0 Aug 26 22:15 proc
drwx------    2 root     root          4096 Jul 15 10:42 root
drwxr-xr-x    3 root     root          4096 Jul 15 10:42 run
drwxr-xr-x    2 root     root          4096 Jul 15 10:42 sbin
drwxr-xr-x    2 root     root          4096 Jul 15 10:42 srv
dr-xr-xr-x   13 root     root             0 Aug 26 22:15 sys
drwxrwxrwt    2 root     root          4096 Jul 15 10:42 tmp
drwxr-xr-x    7 root     root          4096 Jul 15 10:42 usr
drwxr-xr-x   11 root     root          4096 Jul 15 10:42 var
```

### Correr un comando desde alpine
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker run alpine /bin/sh
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ 
```

When you run

```bash
docker run alpine /bin/sh
```

and “nothing happens”, that’s actually expected because:

* Docker starts a **container** from the Alpine image.
* `/bin/sh` runs inside that container.
* Since you didn’t tell Docker to attach a terminal, the shell is running but you can’t interact with it.

To get an **interactive shell**, you need to add the interactive (`-i`) and terminal (`-t`) flags:

```bash
docker run -it alpine /bin/sh
```

That will drop you into a shell inside the Alpine container.

---












