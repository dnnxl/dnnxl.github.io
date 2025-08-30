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


### Mostrar los contenedores que están corriendo.

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```


### Mostrar todos los contenedores.

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker ps -a
CONTAINER ID   IMAGE         COMMAND     CREATED          STATUS                      PORTS     NAMES
d1dadbcf6de7   alpine        "/bin/sh"   5 minutes ago    Exited (0) 5 minutes ago              practical_booth
7d4fe0fa42eb   alpine        "ls -l"     6 minutes ago    Exited (0) 6 minutes ago              friendly_black
426ddb5e5bb7   hello-world   "/hello"    15 minutes ago   Exited (0) 15 minutes ago             xenodochial_galois
80c366c0ab09   hello-world   "/hello"    7 weeks ago      Exited (0) 7 weeks ago                nostalgic_varahamihira
```

### Utilizar una sesión interactiva
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker run -it alpine /bin/sh
/ # ls
bin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var
/ # uname -a
Linux 78b760c7da3c 6.14.0-28-generic #28~24.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Jul 25 10:47:01 UTC 2 x86_64 Linux
/ # 
```

### EL usuario es root
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker run -it alpine /bin/sh
/ # ls
bin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var
/ # uname -a
Linux 78b760c7da3c 6.14.0-28-generic #28~24.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Jul 25 10:47:01 UTC 2 x86_64 Linux
/ # whoami
root
/ # id
uid=0(root) gid=0(root) groups=0(root),1(bin),2(daemon),3(sys),4(adm),6(disk),10(wheel),11(floppy),20(dialout),26(tape),27(video)
/ # 
```

### Creación del archivo
El archivo se crea correctamente y pertenece al usuario root.
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker run -it alpine /bin/sh
/ # ls
bin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var
/ # uname -a
Linux 78b760c7da3c 6.14.0-28-generic #28~24.04.1-Ubuntu SMP PREEMPT_DYNAMIC Fri Jul 25 10:47:01 UTC 2 x86_64 Linux
/ # whoami
root
/ # id
uid=0(root) gid=0(root) groups=0(root),1(bin),2(daemon),3(sys),4(adm),6(disk),10(wheel),11(floppy),20(dialout),26(tape),27(video)
/ # touch /tmp/miarchivo
/ # ls
bin    dev    etc    home   lib    media  mnt    opt    proc   root   run    sbin   srv    sys    tmp    usr    var
/ # ls -lah /tmp/miarchivo
-rw-r--r--    1 root     root           0 Aug 26 22:27 /tmp/miarchivo
/ # 
```


### Termine la sesión interactiva con el contenedor y verifique el archivo

Para salir:

```bash
exit
```

Luego, si volvemos a iniciar un contenedor nuevo con:

```bash
docker run -it alpine /bin/sh
ls -lah /tmp/miarchivo
```

El archivo ya no está.

Cada vez que ejecutamos `docker run`, se crea un **contenedor nuevo y efímero** a partir de la imagen base (`alpine`).

* La imagen es inmutable.
* El sistema de archivos del contenedor solo existe mientras el contenedor está corriendo.
* Cuando se detiene y se elimina el contenedor, los cambios (como el archivo `/tmp/miarchivo`) se pierden.

Por eso el archivo no aparece cuando iniciamos un nuevo contenedor.

## Crear una aplicación web
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker run -d dockersamples/static-site
Unable to find image 'dockersamples/static-site:latest' locally
latest: Pulling from dockersamples/static-site
fdd5d7827f33: Pull complete 
a3ed95caeb02: Pull complete 
716f7a5f3082: Pull complete 
7b10f03a0309: Pull complete 
aff3ab7e9c39: Pull complete 
Digest: sha256:daa686c61d7d239b7977e72157997489db49f316b9b9af3909d9f10fd28b2dec
Status: Downloaded newer image for dockersamples/static-site:latest
62433324d9f68c5d5291ccc6782860dd543d8ded575033c971eb338cd8c3634f
```

El comando

```bash
sudo docker run -d dockersamples/static-site
```

hizo lo siguiente:

1. **`docker run`** → Le indica a Docker que ejecute un contenedor a partir de una imagen.
2. **`-d` (detached mode)** → El contenedor se ejecuta en segundo plano, no queda la terminal bloqueada.
3. **`dockersamples/static-site`** → Es la imagen que se usará, en este caso una imagen de ejemplo que sirve un sitio web estático (HTML/CSS).

* Docker descarga la imagen `dockersamples/static-site` desde **Docker Hub** (si no estaba ya en tu máquina).
* Crea un **contenedor nuevo** a partir de esa imagen.
* Lo inicia en **modo demonio** (detached), lo que significa que queda corriendo en segundo plano.
* El contenedor levanta un **servidor web simple** con el sitio estático que trae la imagen.

### Verifique los contenedores que se encuentran corriendo
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED         STATUS         PORTS             NAMES
62433324d9f6   dockersamples/static-site   "/bin/sh -c 'cd /usr…"   2 minutes ago   Up 2 minutes   80/tcp, 443/tcp   trusting_wing
```

### Detenga el contenedor y elimínelo

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker stop 62433324d9f6
62433324d9f6
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker rm 62433324d9f6
62433324d9f6
```

### Corra nuevamente la imagen de static-site pero esta vez defina el nombre y los parámetros adicionales.
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker run --name website -e AUTHOR="Danny" -d -P dockersamples/static-site
f16449390e158aca8fe34dca1b740950597c3f16e9d4d90cf0fd3da037b9f8b2
```

Perfecto 🚀 Vamos a desglosar el comando:

```bash
sudo docker run --name website -e AUTHOR="Danny" -d -P dockersamples/static-site
```

1. **`docker run`**
   Indica a Docker que ejecute un nuevo contenedor a partir de una imagen especificada.

2. **`--name website`**
   Le asigna un **nombre identificador** al contenedor (`website`). Esto facilita gestionarlo más adelante (ejemplo: `docker stop website`, `docker rm website`).

   * Si no se usa, Docker le asigna un nombre aleatorio.

3. **`-e AUTHOR="Danny"`**
   Define una **variable de entorno** dentro del contenedor:

   * `AUTHOR` es la clave.
   * `"Danny"` es el valor.
     Esto puede ser usado por la aplicación dentro del contenedor para mostrar información o modificar su comportamiento.

4. **`-d`**
   Modo **detached**: ejecuta el contenedor en segundo plano (no bloquea la terminal).

   * Si no se usa, el contenedor se ejecuta en modo interactivo adjunto.

5. **`-P`**
   Publica los **puertos expuestos** por la imagen en **puertos aleatorios disponibles** del host.

   * Ejemplo: si la imagen expone el puerto 80, Docker puede mapearlo a `32768` en el host.
   * Se puede verificar con `docker ps` qué puerto fue asignado.

6. **`dockersamples/static-site`**
   Es la **imagen de Docker** que se usará para crear el contenedor. En este caso, es una imagen oficial de muestra que levanta un sitio web estático.

---

### Obtenga los puertos del host asociados a los del contenedor

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker port website
80/tcp -> 0.0.0.0:32768
80/tcp -> [::]:32768
443/tcp -> 0.0.0.0:32769
443/tcp -> [::]:32769
```
---

### Corra un segundo webserver, pero especificando los mapeos de puerto
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker run --name sitio2 -e AUTHOR="nombr" -d -p 8888:80 dockersamples/static-site
68b052d03e452046df1898af54bf1dac67882f99a3f7aac961e490aa868e7a17
```
---

### Diferencia entre -p -P
La diferencia está en **cómo se publican los puertos**:

---

### **`-P` (mayúscula)**

* Publica **todos los puertos expuestos** en la imagen **de forma automática**.
* Docker asigna un puerto **aleatorio disponible** en el host a cada puerto expuesto del contenedor.
* Ejemplo:

  ```bash
  docker run -d -P dockersamples/static-site
  ```

  Si la imagen expone el puerto `80`, Docker podría asignarlo al `32768` en el host.
  Se verifica con:

  ```bash
  docker ps
  ```

  → mostrará algo como: `0.0.0.0:32768->80/tcp`.

---

### **`-p` (minúscula)**

* Permite **especificar manualmente** el mapeo de puertos entre el host y el contenedor.
* Sintaxis:

  ```bash
  -p <puerto_host>:<puerto_contenedor>
  ```
* Ejemplo:

  ```bash
  docker run -d -p 8080:80 dockersamples/static-site
  ```

  Aquí el puerto `80` del contenedor queda disponible en `http://localhost:8080`.

---

### Rlimine los sitios creados

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker ps
CONTAINER ID   IMAGE                       COMMAND                  CREATED         STATUS         PORTS                                                                                    NAMES
68b052d03e45   dockersamples/static-site   "/bin/sh -c 'cd /usr…"   6 minutes ago   Up 6 minutes   443/tcp, 0.0.0.0:8888->80/tcp, [::]:8888->80/tcp                                         sitio2
f16449390e15   dockersamples/static-site   "/bin/sh -c 'cd /usr…"   9 minutes ago   Up 9 minutes   0.0.0.0:32768->80/tcp, [::]:32768->80/tcp, 0.0.0.0:32769->443/tcp, [::]:32769->443/tcp   website
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker stop sitio2
sitio2
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker stop website
website
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker rm sitio2
sitio2
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker rm website
website
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES
```

## Imágenes de Docker
Existen muchas tipos de imágenes algunas de ellas son:
- Imágenes Base: Son imágenes que no tienen imágenes padre. Por ejemplo la de ubuntu o debian. 
- Imágenes Hijas: Son imágenes que utilizan una imágen base para agregarle funcionalidad. 
- Imágenes Oficiales: Son imágenes creadas bajo un esquema de revisión y publicación a cargo de un equipo reconocido. 
Ejemplos de imágenes se muestra a continuación:


La bandera **`-f`** en el comando:

```bash
docker rm -f sitio2
```

significa **“force”** (forzar). Su función es:

* **Forzar la eliminación de un contenedor** aunque esté **en ejecución**.
* Sin `-f`, Docker no permite eliminar un contenedor que esté activo; primero tendrías que detenerlo (`docker stop sitio2`).
* Con `-f`, Docker automáticamente **detiene y elimina** el contenedor en un solo paso.

---

🔹 Ejemplo:

```bash
docker ps
# Contenedor "sitio2" está corriendo
docker rm sitio2
# Error: contenedor en ejecución
docker rm -f sitio2
# El contenedor se detiene y se elimina
```

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker rm sitio2
Error response from daemon: cannot remove container "sitio2": container is running: stop the container before removing or force remove
```


(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker rm -f sitio2
sitio2

(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker ps
CONTAINER ID   IMAGE     COMMAND   CREATED   STATUS    PORTS     NAMES








## Imágenes de Docker
Existen muchas tipos de imágenes algunas de ellas son:
Imágenes Base: Son imágenes que no tienen imágenes padre. Por ejemplo la de ubuntu o debian. 
Imágenes Hijas: Son imágenes que utilizan una imágen base para agregarle funcionalidad. 
Imágenes Oficiales: Son imágenes creadas bajo un esquema de revisión y publicación a cargo de un equipo reconocido. 
Ejemplos de imágenes se muestra a continuación:

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker images
REPOSITORY                  TAG       IMAGE ID       CREATED        SIZE
alpine                      latest    9234e8fb04c4   6 weeks ago    8.31MB
muefab/genie                latest    1972e8cfe45e   3 months ago   244MB
hello-world                 latest    74cc54e27dc4   7 months ago   10.1kB
dockersamples/static-site   latest    f589ccde7957   9 years ago    191MB
```

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker pull ubuntu:20.04
20.04: Pulling from library/ubuntu
13b7e930469f: Pull complete 
Digest: sha256:8feb4d8ca5354def3d8fce243717141ce31e2c428701f6682bd2fafe15388214
Status: Downloaded newer image for ubuntu:20.04
docker.io/library/ubuntu:20.04

(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker pull ubuntu
Using default tag: latest
latest: Pulling from library/ubuntu
b71466b94f26: Pull complete 
Digest: sha256:7c06e91f61fa88c08cc74f7e1b7c69ae24910d745357e0dfe1d2c0322aaf20f9
Status: Downloaded newer image for ubuntu:latest
docker.io/library/ubuntu:latest
```




```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo docker search llama
NAME                    DESCRIPTION                                     STARS     OFFICIAL
hariag/llama                                                            0         
mikolatero/llama        ¡Print a llama in your console!                 3         
kristianfoss/llama                                                      0         
dumij/llama                                                             0         
chapizze/llama          Ubuntu 22.04 with build in llama model          1         
azuras/llama                                                            0         
parryparryparry/llama                                                   0         
nelhage/llama           Llama Lambda runtime                            0         
ruian1/llama            llama training, cuda 11.6 python 3.10           1         
stacktic/llama                                                          0         
watchall/llama                                                          0         
michaell404/llama                                                       0         
geraldzeng/llama        WashU NLP LLaMA                                 0         
ranchlai/llama          llama                                           0         
liangleon/llama                                                         0         
alexcb132/llama         obviously not related to the llama cardgame     0         
jaemushim/llama                                                         0         
albanacelepija/llama                                                    0         
hgfkeep/llama                                                           0         
tanisha441/llama                                                        0         
ai/llama3.2             Solid LLaMA 3 update, reliable for coding, c…   17        
paperspace/llama                                                        0         
vyomchara/llama                                                         0         
darren2046/llama                                                        0         
ai/llama3.3             Newest LLama 3 release with improved reasoni…   11        
```



## Creando su primera imágen
1. Descargue una copia del “flask-app” desde 
2. Cree un archivo llamado Dockerfile (dentro del directorio flask-app/) y agregue lo descrito a continuación:
Agregue la imagen base.

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ ls
app.py  Dockerfile  requirements.txt  templates
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ cat Dockerfile 
# Utilizar la imagen base de Python 2.7 con Alpine Linux
FROM python:2.7-alpine(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ 
```

Utilice el comando RUN para instalar y actualizar el paquete PIP .





```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ sudo docker build -t rtxmsi1/myfirstapp  .
[sudo] password for rtxmsi1: 
[+] Building 10.9s (11/11) FINISHED                              docker:default
 => [internal] load build definition from Dockerfile                       0.0s
 => => transferring dockerfile: 523B                                       0.0s
 => [internal] load metadata for docker.io/library/python:2.7-alpine       1.3s
 => [internal] load .dockerignore                                          0.0s
 => => transferring context: 2B                                            0.0s
 => [internal] load build context                                          0.0s
 => => transferring context: 1.72kB                                        0.0s
 => [1/6] FROM docker.io/library/python:2.7-alpine@sha256:724d0540eb56ffa  1.9s
 => => resolve docker.io/library/python:2.7-alpine@sha256:724d0540eb56ffa  0.0s
 => => sha256:10ba96d218d3fd7421879dbfa14bc0d3938be28dc 20.28MB / 20.28MB  1.5s
 => => sha256:724d0540eb56ffaa6dd770aa13c3bc7dfc829dec561 1.65kB / 1.65kB  0.0s
 => => sha256:b9ca0d225d42fd188bd636148229d121586fe7dcf3d 1.16kB / 1.16kB  0.0s
 => => sha256:8579e446340f415fece00398a37dbdc4fff1f16901a 7.51kB / 7.51kB  0.0s
 => => sha256:aad63a9339440e7c3e1fff2b988991b9bfb81280042 2.80MB / 2.80MB  0.4s
 => => sha256:259d822268fbc4235d84b0d1faa8a4ff933c0a9 301.29kB / 301.29kB  0.2s
 => => sha256:44ba9f6a4209726dd57b562c3913b59c103767d1065 1.89MB / 1.89MB  0.8s
 => => extracting sha256:aad63a9339440e7c3e1fff2b988991b9bfb81280042fa7f3  0.1s
 => => extracting sha256:259d822268fbc4235d84b0d1faa8a4ff933c0a92944c91b0  0.0s
 => => extracting sha256:10ba96d218d3fd7421879dbfa14bc0d3938be28dc8209937  0.2s
 => => extracting sha256:44ba9f6a4209726dd57b562c3913b59c103767d1065f54be  0.1s
 => [2/6] RUN apk add --update py2-pip                                     3.0s
 => [3/6] COPY requirements.txt /usr/src/app/                              0.3s 
 => [4/6] RUN pip install --no-cache-dir -r /usr/src/app/requirements.txt  3.6s
 => [5/6] COPY app.py /usr/src/app/                                        0.0s
 => [6/6] COPY templates/index.html /usr/src/app/templates/                0.0s
 => exporting to image                                                     0.6s
 => => exporting layers                                                    0.6s
 => => writing image sha256:c0d00c16568eebab03bf337e5ed4127afe4213225faba  0.0s
 => => naming to docker.io/rtxmsi1/myfirstapp                              0.0s
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ 
```


```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ sudo docker run -p 8888:5000 --name myfirstapp rtxmsi1/myfirstapp
 * Serving Flask app "app" (lazy loading)
 * Environment: production
   WARNING: Do not use the development server in a production environment.
   Use a production WSGI server instead.
 * Debug mode: off
 * Running on http://0.0.0.0:5000/ (Press CTRL+C to quit)
```

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ sudo docker login

USING WEB-BASED LOGIN

i Info → To sign in with credentials on the command line, use 'docker login -u <username>'
         

Your one-time device confirmation code is: KJHF-BKGZ
Press ENTER to open your browser or submit your device code here: https://login.docker.com/activate

Waiting for authentication in the browser…


WARNING! Your credentials are stored unencrypted in '/root/.docker/config.json'.
Configure a credential helper to remove this warning. See
https://docs.docker.com/go/credential-store/

Login Succeeded
```

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ sudo docker push dnnxl/myfirstapp
Using default tag: latest
The push refers to repository [docker.io/dnnxl/myfirstapp]
e2cc4e0e71a1: Pushed 
6062b588f9f5: Pushed 
57fd4b516070: Pushed 
c1ca756d57be: Pushed 
84089413c945: Pushed 
879c0d8666e3: Pushed 
20a7b70bdf2f: Pushed 
3fc750b41be7: Pushed 
beee9f30bc1f: Pushed 
latest: digest: sha256:a879dd3bf1350512425f21d0eb3ed0d93e3af3364f4b88ba2dcf3b8207dbe1fb size: 2205
```

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ sudo docker rm -f myfirstapp
myfirstapp
```

(11) Modificación dentro de la imagen

Acción realizada: Editar el archivo templates/index.html cambiando la palabra “Dog” por “Cat”.

Pasos adicionales requeridos:

Modificar el archivo dentro del proyecto local.

Reconstruir la imagen Docker con el cambio:


(12) Monte un volumen fuera del contenedor asociado al directorio templates. Y cambie el estilo de background de color negro a blanco. ¿Qué diferencia hubo en relación al cambio del punto 11?

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ sudo docker run -d -p 8888:5000 -v $(pwd)/templates:/app/templates --name myfirstapp dnnxl/myfirstapp
975d019abbdd8bb4ec352f6f1529c2b61b6c22659868cf97aff20afe99f31fb1

(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ sudo docker inspect -f '{{range .Mounts}}{{println .Source "->" .Destination}}{{end}}' myfirstapp
/home/rtxmsi1/Downloads/flask-app/templates -> /app/templates
```

Corriendo
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Downloads/flask-app$ sudo docker ps
CONTAINER ID   IMAGE              COMMAND                  CREATED              STATUS              PORTS                                         NAMES
975d019abbdd   dnnxl/myfirstapp   "python /usr/src/app…"   About a minute ago   Up About a minute   0.0.0.0:8888->5000/tcp, [::]:8888->5000/tcp   myfirstapp
```

















