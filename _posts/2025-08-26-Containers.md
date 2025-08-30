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



## Creando una aplicación web compleja con Docker

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ sudo apt install docker-compose-plugin -y
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
docker-compose-plugin is already the newest version (2.39.1-1~ubuntu.24.04~noble).
The following package was automatically installed and is no longer required:
  nvidia-firmware-550-550.144.03
Use 'sudo apt autoremove' to remove it.
0 upgraded, 0 newly installed, 0 to remove and 198 not upgraded.
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ docker compose version
Docker Compose version v2.39.1
(base) rtxmsi1@rtxmsi1-MS-7E06:~$ 
```
Instale docker-compose:
Cree un directorio llamado Myapp
Dentro del directorio cree archivos de contraseña con valores aleatorios:


---

### (13) ¿En qué consisten los *secrets*?

Los **secrets** en Docker Compose permiten almacenar información sensible como contraseñas, tokens o llaves de acceso de forma segura y separada de la configuración del contenedor.
En lugar de escribir las contraseñas directamente en el archivo `docker-compose.yml` (lo cual sería inseguro), se guardan en archivos externos (`db_password.txt`, `db_root_password.txt`) y se pasan al contenedor a través del mecanismo de *secrets*.
Esto protege la información confidencial, facilita la rotación de contraseñas y evita que queden expuestas en repositorios o configuraciones públicas.

---

### (14) ¿Por qué se crea un directorio llamado “db\_data” y para qué se usa?

El volumen `db_data` se crea para **persistir los datos de la base de datos**.
Cuando un contenedor se elimina, por defecto también se pierde toda la información que contiene. Sin embargo, con un volumen asociado (`db_data:/var/lib/mysql`), los datos de MySQL se guardan fuera del ciclo de vida del contenedor, permitiendo que:

* Si se reinicia o elimina el contenedor, los datos no se pierden.
* Se pueda actualizar la imagen de MySQL sin perder la información almacenada en las tablas.

En este caso, `db_data` es un volumen gestionado por Docker que asegura la persistencia de la base de datos.

---

### (15) ¿Por qué la definición de puertos del servidor web se establece como “80:80”? ¿Qué significa?

La sintaxis `HOST:CONTENEDOR` significa:

* **El primer número (80)** → es el puerto del host (tu máquina local o servidor).
* **El segundo número (80)** → es el puerto interno del contenedor donde escucha el servicio (en este caso, Nginx).

Por lo tanto, `80:80` indica que cuando accedemos a `http://localhost:80` en nuestra máquina, la petición se redirige al puerto `80` dentro del contenedor Nginx.
De manera similar, `443:443` se usa para tráfico HTTPS.

---

### (16) Si ejecutamos la imagen `mysql:5.7` desde `docker run`, ¿cómo le enviaríamos las variables de ambiente?

Cuando usamos `docker run`, las variables de entorno se envían con la opción `-e`. Por ejemplo:

```bash
docker run -d \
  --name Mysqldb \
  -p 3306:3306 \
  -v db_data:/var/lib/mysql \
  -e MYSQL_ROOT_PASSWORD=root_secret \
  -e MYSQL_DATABASE=wordpress \
  -e MYSQL_USER=wordpress \
  -e MYSQL_PASSWORD=wp_secret \
  mysql:5.7
```

Aquí cada `-e` define una variable de entorno que MySQL usará en la configuración inicial.
La diferencia es que con `docker run` no tenemos *secrets* de Docker Compose, entonces se colocan directamente en la línea de comandos (menos seguro).

---

### (17) ¿Cuál es la diferencia entre correr un `docker-compose up` y un `docker run`?

* **`docker run`**:

  * Sirve para ejecutar **un solo contenedor**.
  * Requiere escribir manualmente las opciones (`-e`, `-v`, `-p`, etc.).
  * No maneja dependencias entre contenedores (por ejemplo, que la base de datos inicie antes que el servidor web).

* **`docker-compose up`**:

  * Permite definir y levantar **múltiples contenedores** en un archivo `docker-compose.yml`.
  * Maneja dependencias, redes, volúmenes y *secrets* de manera automática.
  * Es mucho más conveniente para aplicaciones complejas (ej. webserver + base de datos + cache).

`docker run` es más útil para pruebas rápidas o contenedores individuales, mientras que `docker-compose up` es la herramienta indicada para aplicaciones completas que requieren varios servicios trabajando juntos.



```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Documents/Myapp$ sudo docker compose up
WARN[0000] /home/rtxmsi1/Documents/Myapp/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
[+] Running 21/21
 ✔ db Pulled                                                                                 10.7s 
   ✔ 20e4dcae4c69 Pull complete                                                               4.0s 
   ✔ 1c56c3d4ce74 Pull complete                                                               4.0s 
   ✔ e9f03a1c24ce Pull complete                                                               4.1s 
   ✔ 68c3898c2015 Pull complete                                                               4.1s 
   ✔ 6b95a940e7b6 Pull complete                                                               4.2s 
   ✔ 90986bb8de6e Pull complete                                                               4.2s 
   ✔ ae71319cb779 Pull complete                                                               4.4s 
   ✔ ffc89e9dfd88 Pull complete                                                               4.4s 
   ✔ 43d05e938198 Pull complete                                                               8.9s 
   ✔ 064b2d298fba Pull complete                                                               8.9s 
   ✔ df9a4d85569b Pull complete                                                               8.9s 
 ✔ webserver Pulled                                                                           8.2s 
   ✔ 9824c27679d3 Already exists                                                              0.0s 
   ✔ 6bc572a340ec Pull complete                                                               4.6s 
   ✔ 403e3f251637 Pull complete                                                               4.7s 
   ✔ 9adfbae99cb7 Pull complete                                                               5.0s 
   ✔ 7a8a46741e18 Pull complete                                                               5.0s 
   ✔ c9ebe2ff2d2c Pull complete                                                               5.4s 
   ✔ a992fbc61ecc Pull complete                                                               5.5s 
   ✔ cb1ff4086f82 Pull complete                                                               6.4s 
[+] Running 4/4
 ✔ Network myapp_default   Created                                                            0.1s 
 ✔ Volume "myapp_db_data"  Created                                                            0.0s 
 ✔ Container Mysqldb       Created                                                            0.2s 
 ✔ Container webserver     Created                                                            0.2s 
Attaching to Mysqldb, webserver
Mysqldb  | 2025-08-30 23:47:07+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 5.7.44-1.el7 started.
webserver  | /docker-entrypoint.sh: /docker-entrypoint.d/ is not empty, will attempt to perform configuration
webserver  | /docker-entrypoint.sh: Looking for shell scripts in /docker-entrypoint.d/
webserver  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/10-listen-on-ipv6-by-default.sh
webserver  | 10-listen-on-ipv6-by-default.sh: info: Getting the checksum of /etc/nginx/conf.d/default.conf
webserver  | 10-listen-on-ipv6-by-default.sh: info: Enabled listen on IPv6 in /etc/nginx/conf.d/default.conf
webserver  | /docker-entrypoint.sh: Sourcing /docker-entrypoint.d/15-local-resolvers.envsh
webserver  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/20-envsubst-on-templates.sh
webserver  | /docker-entrypoint.sh: Launching /docker-entrypoint.d/30-tune-worker-processes.sh
webserver  | /docker-entrypoint.sh: Configuration complete; ready for start up
webserver  | 2025/08/30 23:47:07 [notice] 1#1: using the "epoll" event method
webserver  | 2025/08/30 23:47:07 [notice] 1#1: nginx/1.29.1
webserver  | 2025/08/30 23:47:07 [notice] 1#1: built by gcc 14.2.0 (Alpine 14.2.0) 
webserver  | 2025/08/30 23:47:07 [notice] 1#1: OS: Linux 6.14.0-28-generic
webserver  | 2025/08/30 23:47:07 [notice] 1#1: getrlimit(RLIMIT_NOFILE): 1048576:1048576
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker processes
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 30
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 31
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 32
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 33
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 34
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 35
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 36
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 37
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 38
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 39
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 40
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 41
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 42
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 43
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 44
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 45
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 46
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 47
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 48
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 49
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 50
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 51
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 52
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 53
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 54
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 55
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 56
webserver  | 2025/08/30 23:47:07 [notice] 1#1: start worker process 57
Mysqldb    | 2025-08-30 23:47:07+00:00 [Note] [Entrypoint]: Switching to dedicated user 'mysql'
Mysqldb    | 2025-08-30 23:47:07+00:00 [Note] [Entrypoint]: Entrypoint script for MySQL Server 5.7.44-1.el7 started.
Mysqldb    | 2025-08-30 23:47:07+00:00 [Note] [Entrypoint]: Initializing database files
Mysqldb    | 2025-08-30T23:47:07.478938Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
Mysqldb    | 2025-08-30T23:47:07.557048Z 0 [Warning] InnoDB: New log files created, LSN=45790
Mysqldb    | 2025-08-30T23:47:07.579866Z 0 [Warning] InnoDB: Creating foreign key constraint system tables.
Mysqldb    | 2025-08-30T23:47:07.635993Z 0 [Warning] No existing UUID has been found, so we assume that this is the first time that this server has been started. Generating a new UUID: a3971a56-85fb-11f0-9451-22b7f10cfb84.
Mysqldb    | 2025-08-30T23:47:07.637597Z 0 [Warning] Gtid table is not ready to be used. Table 'mysql.gtid_executed' cannot be opened.
Mysqldb    | 2025-08-30T23:47:07.754852Z 0 [Warning] A deprecated TLS version TLSv1 is enabled. Please use TLSv1.2 or higher.
Mysqldb    | 2025-08-30T23:47:07.754855Z 0 [Warning] A deprecated TLS version TLSv1.1 is enabled. Please use TLSv1.2 or higher.
Mysqldb    | 2025-08-30T23:47:07.755048Z 0 [Warning] CA certificate ca.pem is self signed.
Mysqldb    | 2025-08-30T23:47:07.768543Z 1 [Warning] root@localhost is created with an empty password ! Please consider switching off the --initialize-insecure option.
Mysqldb    | 2025-08-30 23:47:09+00:00 [Note] [Entrypoint]: Database files initialized
Mysqldb    | 2025-08-30 23:47:09+00:00 [Note] [Entrypoint]: Starting temporary server
Mysqldb    | 2025-08-30 23:47:09+00:00 [Note] [Entrypoint]: Waiting for server startup
Mysqldb    | 2025-08-30T23:47:09.637033Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
Mysqldb    | 2025-08-30T23:47:09.637697Z 0 [Note] mysqld (mysqld 5.7.44) starting as process 127 ...
Mysqldb    | 2025-08-30T23:47:09.639097Z 0 [Note] InnoDB: PUNCH HOLE support available
Mysqldb    | 2025-08-30T23:47:09.639106Z 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
Mysqldb    | 2025-08-30T23:47:09.639108Z 0 [Note] InnoDB: Uses event mutexes
Mysqldb    | 2025-08-30T23:47:09.639109Z 0 [Note] InnoDB: GCC builtin __atomic_thread_fence() is used for memory barrier
Mysqldb    | 2025-08-30T23:47:09.639110Z 0 [Note] InnoDB: Compressed tables use zlib 1.2.13
Mysqldb    | 2025-08-30T23:47:09.639111Z 0 [Note] InnoDB: Using Linux native AIO
Mysqldb    | 2025-08-30T23:47:09.639212Z 0 [Note] InnoDB: Number of pools: 1
Mysqldb    | 2025-08-30T23:47:09.639271Z 0 [Note] InnoDB: Using CPU crc32 instructions
Mysqldb    | 2025-08-30T23:47:09.639937Z 0 [Note] InnoDB: Initializing buffer pool, total size = 128M, instances = 1, chunk size = 128M
Mysqldb    | 2025-08-30T23:47:09.643158Z 0 [Note] InnoDB: Completed initialization of buffer pool
Mysqldb    | 2025-08-30T23:47:09.644003Z 0 [Note] InnoDB: If the mysqld execution user is authorized, page cleaner thread priority can be changed. See the man page of setpriority().
Mysqldb    | 2025-08-30T23:47:09.654796Z 0 [Note] InnoDB: Highest supported file format is Barracuda.
Mysqldb    | 2025-08-30T23:47:09.672216Z 0 [Note] InnoDB: Creating shared tablespace for temporary tables
Mysqldb    | 2025-08-30T23:47:09.672248Z 0 [Note] InnoDB: Setting file './ibtmp1' size to 12 MB. Physically writing the file full; Please wait ...
Mysqldb    | 2025-08-30T23:47:09.717080Z 0 [Note] InnoDB: File './ibtmp1' size is now 12 MB.
Mysqldb    | 2025-08-30T23:47:09.718348Z 0 [Note] InnoDB: 96 redo rollback segment(s) found. 96 redo rollback segment(s) are active.
Mysqldb    | 2025-08-30T23:47:09.718358Z 0 [Note] InnoDB: 32 non-redo rollback segment(s) are active.
Mysqldb    | 2025-08-30T23:47:09.719717Z 0 [Note] InnoDB: 5.7.44 started; log sequence number 2768291
Mysqldb    | 2025-08-30T23:47:09.720080Z 0 [Note] InnoDB: Loading buffer pool(s) from /var/lib/mysql/ib_buffer_pool
Mysqldb    | 2025-08-30T23:47:09.720363Z 0 [Note] Plugin 'FEDERATED' is disabled.
Mysqldb    | 2025-08-30T23:47:09.723227Z 0 [Note] InnoDB: Buffer pool(s) load completed at 250830 23:47:09
Mysqldb    | 2025-08-30T23:47:09.725961Z 0 [Note] Found ca.pem, server-cert.pem and server-key.pem in data directory. Trying to enable SSL support using them.
Mysqldb    | 2025-08-30T23:47:09.725965Z 0 [Note] Skipping generation of SSL certificates as certificate files are present in data directory.
Mysqldb    | 2025-08-30T23:47:09.725967Z 0 [Warning] A deprecated TLS version TLSv1 is enabled. Please use TLSv1.2 or higher.
Mysqldb    | 2025-08-30T23:47:09.725968Z 0 [Warning] A deprecated TLS version TLSv1.1 is enabled. Please use TLSv1.2 or higher.
Mysqldb    | 2025-08-30T23:47:09.726194Z 0 [Warning] CA certificate ca.pem is self signed.
Mysqldb    | 2025-08-30T23:47:09.726205Z 0 [Note] Skipping generation of RSA key pair as key files are present in data directory.
Mysqldb    | 2025-08-30T23:47:09.756425Z 0 [Warning] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
Mysqldb    | 2025-08-30T23:47:09.767265Z 0 [Note] Event Scheduler: Loaded 0 events
Mysqldb    | 2025-08-30T23:47:09.767677Z 0 [Note] mysqld: ready for connections.
Mysqldb    | Version: '5.7.44'  socket: '/var/run/mysqld/mysqld.sock'  port: 0  MySQL Community Server (GPL)
Mysqldb    | 2025-08-30 23:47:10+00:00 [Note] [Entrypoint]: Temporary server started.
Mysqldb    | '/var/lib/mysql/mysql.sock' -> '/var/run/mysqld/mysqld.sock'
Mysqldb    | 2025-08-30T23:47:10.529430Z 3 [Note] InnoDB: Stopping purge
Mysqldb    | 2025-08-30T23:47:10.531892Z 3 [Note] InnoDB: Resuming purge
Mysqldb    | 2025-08-30T23:47:10.533320Z 3 [Note] InnoDB: Stopping purge
Mysqldb    | 2025-08-30T23:47:10.535808Z 3 [Note] InnoDB: Resuming purge
Mysqldb    | 2025-08-30T23:47:10.537275Z 3 [Note] InnoDB: Stopping purge
Mysqldb    | 2025-08-30T23:47:10.539852Z 3 [Note] InnoDB: Resuming purge
Mysqldb    | 2025-08-30T23:47:10.541631Z 3 [Note] InnoDB: Stopping purge
Mysqldb    | 2025-08-30T23:47:10.544419Z 3 [Note] InnoDB: Resuming purge
Mysqldb    | Warning: Unable to load '/usr/share/zoneinfo/iso3166.tab' as time zone. Skipping it.
Mysqldb    | Warning: Unable to load '/usr/share/zoneinfo/leapseconds' as time zone. Skipping it.
Mysqldb    | Warning: Unable to load '/usr/share/zoneinfo/tzdata.zi' as time zone. Skipping it.
Mysqldb    | Warning: Unable to load '/usr/share/zoneinfo/zone.tab' as time zone. Skipping it.
Mysqldb    | Warning: Unable to load '/usr/share/zoneinfo/zone1970.tab' as time zone. Skipping it.
Mysqldb    | 2025-08-30 23:47:11+00:00 [Note] [Entrypoint]: Creating database wordpress
Mysqldb    | 2025-08-30 23:47:11+00:00 [Note] [Entrypoint]: Creating user wordpress
Mysqldb    | 2025-08-30 23:47:11+00:00 [Note] [Entrypoint]: Giving user wordpress access to schema wordpress
Mysqldb    | 
Mysqldb    | 2025-08-30 23:47:11+00:00 [Note] [Entrypoint]: Stopping temporary server
Mysqldb    | 2025-08-30T23:47:11.354763Z 0 [Note] Giving 0 client threads a chance to die gracefully
Mysqldb    | 2025-08-30T23:47:11.354825Z 0 [Note] Shutting down slave threads
Mysqldb    | 2025-08-30T23:47:11.354837Z 0 [Note] Forcefully disconnecting 0 remaining clients
Mysqldb    | 2025-08-30T23:47:11.354850Z 0 [Note] Event Scheduler: Purging the queue. 0 events
Mysqldb    | 2025-08-30T23:47:11.354931Z 0 [Note] Binlog end
Mysqldb    | 2025-08-30T23:47:11.355763Z 0 [Note] Shutting down plugin 'ngram'
Mysqldb    | 2025-08-30T23:47:11.355786Z 0 [Note] Shutting down plugin 'partition'
Mysqldb    | 2025-08-30T23:47:11.355792Z 0 [Note] Shutting down plugin 'BLACKHOLE'
Mysqldb    | 2025-08-30T23:47:11.355798Z 0 [Note] Shutting down plugin 'ARCHIVE'
Mysqldb    | 2025-08-30T23:47:11.355801Z 0 [Note] Shutting down plugin 'PERFORMANCE_SCHEMA'
Mysqldb    | 2025-08-30T23:47:11.355846Z 0 [Note] Shutting down plugin 'MRG_MYISAM'
Mysqldb    | 2025-08-30T23:47:11.355854Z 0 [Note] Shutting down plugin 'MyISAM'
Mysqldb    | 2025-08-30T23:47:11.355863Z 0 [Note] Shutting down plugin 'INNODB_SYS_VIRTUAL'
Mysqldb    | 2025-08-30T23:47:11.355867Z 0 [Note] Shutting down plugin 'INNODB_SYS_DATAFILES'
Mysqldb    | 2025-08-30T23:47:11.355871Z 0 [Note] Shutting down plugin 'INNODB_SYS_TABLESPACES'
Mysqldb    | 2025-08-30T23:47:11.355875Z 0 [Note] Shutting down plugin 'INNODB_SYS_FOREIGN_COLS'
Mysqldb    | 2025-08-30T23:47:11.355878Z 0 [Note] Shutting down plugin 'INNODB_SYS_FOREIGN'
Mysqldb    | 2025-08-30T23:47:11.355881Z 0 [Note] Shutting down plugin 'INNODB_SYS_FIELDS'
Mysqldb    | 2025-08-30T23:47:11.355884Z 0 [Note] Shutting down plugin 'INNODB_SYS_COLUMNS'
Mysqldb    | 2025-08-30T23:47:11.355886Z 0 [Note] Shutting down plugin 'INNODB_SYS_INDEXES'
Mysqldb    | 2025-08-30T23:47:11.355889Z 0 [Note] Shutting down plugin 'INNODB_SYS_TABLESTATS'
Mysqldb    | 2025-08-30T23:47:11.355892Z 0 [Note] Shutting down plugin 'INNODB_SYS_TABLES'
Mysqldb    | 2025-08-30T23:47:11.355895Z 0 [Note] Shutting down plugin 'INNODB_FT_INDEX_TABLE'
Mysqldb    | 2025-08-30T23:47:11.355899Z 0 [Note] Shutting down plugin 'INNODB_FT_INDEX_CACHE'
Mysqldb    | 2025-08-30T23:47:11.355904Z 0 [Note] Shutting down plugin 'INNODB_FT_CONFIG'
Mysqldb    | 2025-08-30T23:47:11.355909Z 0 [Note] Shutting down plugin 'INNODB_FT_BEING_DELETED'
Mysqldb    | 2025-08-30T23:47:11.355914Z 0 [Note] Shutting down plugin 'INNODB_FT_DELETED'
Mysqldb    | 2025-08-30T23:47:11.355919Z 0 [Note] Shutting down plugin 'INNODB_FT_DEFAULT_STOPWORD'
Mysqldb    | 2025-08-30T23:47:11.355925Z 0 [Note] Shutting down plugin 'INNODB_METRICS'
Mysqldb    | 2025-08-30T23:47:11.355930Z 0 [Note] Shutting down plugin 'INNODB_TEMP_TABLE_INFO'
Mysqldb    | 2025-08-30T23:47:11.355936Z 0 [Note] Shutting down plugin 'INNODB_BUFFER_POOL_STATS'
Mysqldb    | 2025-08-30T23:47:11.355941Z 0 [Note] Shutting down plugin 'INNODB_BUFFER_PAGE_LRU'
Mysqldb    | 2025-08-30T23:47:11.355945Z 0 [Note] Shutting down plugin 'INNODB_BUFFER_PAGE'
Mysqldb    | 2025-08-30T23:47:11.355949Z 0 [Note] Shutting down plugin 'INNODB_CMP_PER_INDEX_RESET'
Mysqldb    | 2025-08-30T23:47:11.355953Z 0 [Note] Shutting down plugin 'INNODB_CMP_PER_INDEX'
Mysqldb    | 2025-08-30T23:47:11.355958Z 0 [Note] Shutting down plugin 'INNODB_CMPMEM_RESET'
Mysqldb    | 2025-08-30T23:47:11.355963Z 0 [Note] Shutting down plugin 'INNODB_CMPMEM'
Mysqldb    | 2025-08-30T23:47:11.355969Z 0 [Note] Shutting down plugin 'INNODB_CMP_RESET'
Mysqldb    | 2025-08-30T23:47:11.355974Z 0 [Note] Shutting down plugin 'INNODB_CMP'
Mysqldb    | 2025-08-30T23:47:11.355980Z 0 [Note] Shutting down plugin 'INNODB_LOCK_WAITS'
Mysqldb    | 2025-08-30T23:47:11.355983Z 0 [Note] Shutting down plugin 'INNODB_LOCKS'
Mysqldb    | 2025-08-30T23:47:11.355988Z 0 [Note] Shutting down plugin 'INNODB_TRX'
Mysqldb    | 2025-08-30T23:47:11.355993Z 0 [Note] Shutting down plugin 'InnoDB'
Mysqldb    | 2025-08-30T23:47:11.356122Z 0 [Note] InnoDB: FTS optimize thread exiting.
Mysqldb    | 2025-08-30T23:47:11.356280Z 0 [Note] InnoDB: Starting shutdown...
Mysqldb    | 2025-08-30T23:47:11.456628Z 0 [Note] InnoDB: Dumping buffer pool(s) to /var/lib/mysql/ib_buffer_pool
Mysqldb    | 2025-08-30T23:47:11.457589Z 0 [Note] InnoDB: Buffer pool(s) dump completed at 250830 23:47:11
Mysqldb    | 2025-08-30T23:47:12.569021Z 0 [Note] InnoDB: Shutdown completed; log sequence number 12219253
Mysqldb    | 2025-08-30T23:47:12.569781Z 0 [Note] InnoDB: Removed temporary tablespace data file: "ibtmp1"
Mysqldb    | 2025-08-30T23:47:12.569800Z 0 [Note] Shutting down plugin 'MEMORY'
Mysqldb    | 2025-08-30T23:47:12.569801Z 0 [Note] Shutting down plugin 'CSV'
Mysqldb    | 2025-08-30T23:47:12.569803Z 0 [Note] Shutting down plugin 'sha256_password'
Mysqldb    | 2025-08-30T23:47:12.569803Z 0 [Note] Shutting down plugin 'mysql_native_password'
Mysqldb    | 2025-08-30T23:47:12.569854Z 0 [Note] Shutting down plugin 'binlog'
Mysqldb    | 2025-08-30T23:47:12.570617Z 0 [Note] mysqld: Shutdown complete
Mysqldb    | 
Mysqldb    | 2025-08-30 23:47:13+00:00 [Note] [Entrypoint]: Temporary server stopped
Mysqldb    | 
Mysqldb    | 2025-08-30 23:47:13+00:00 [Note] [Entrypoint]: MySQL init process done. Ready for start up.
Mysqldb    | 
Mysqldb    | 2025-08-30T23:47:13.527450Z 0 [Warning] TIMESTAMP with implicit DEFAULT value is deprecated. Please use --explicit_defaults_for_timestamp server option (see documentation for more details).
Mysqldb    | 2025-08-30T23:47:13.528115Z 0 [Note] mysqld (mysqld 5.7.44) starting as process 1 ...
Mysqldb    | 2025-08-30T23:47:13.529576Z 0 [Note] InnoDB: PUNCH HOLE support available
Mysqldb    | 2025-08-30T23:47:13.529586Z 0 [Note] InnoDB: Mutexes and rw_locks use GCC atomic builtins
Mysqldb    | 2025-08-30T23:47:13.529587Z 0 [Note] InnoDB: Uses event mutexes
Mysqldb    | 2025-08-30T23:47:13.529588Z 0 [Note] InnoDB: GCC builtin __atomic_thread_fence() is used for memory barrier
Mysqldb    | 2025-08-30T23:47:13.529589Z 0 [Note] InnoDB: Compressed tables use zlib 1.2.13
Mysqldb    | 2025-08-30T23:47:13.529590Z 0 [Note] InnoDB: Using Linux native AIO
Mysqldb    | 2025-08-30T23:47:13.529691Z 0 [Note] InnoDB: Number of pools: 1
Mysqldb    | 2025-08-30T23:47:13.529734Z 0 [Note] InnoDB: Using CPU crc32 instructions
Mysqldb    | 2025-08-30T23:47:13.530398Z 0 [Note] InnoDB: Initializing buffer pool, total size = 128M, instances = 1, chunk size = 128M
Mysqldb    | 2025-08-30T23:47:13.533613Z 0 [Note] InnoDB: Completed initialization of buffer pool
Mysqldb    | 2025-08-30T23:47:13.534633Z 0 [Note] InnoDB: If the mysqld execution user is authorized, page cleaner thread priority can be changed. See the man page of setpriority().
Mysqldb    | 2025-08-30T23:47:13.545397Z 0 [Note] InnoDB: Highest supported file format is Barracuda.
Mysqldb    | 2025-08-30T23:47:13.548834Z 0 [Note] InnoDB: Creating shared tablespace for temporary tables
Mysqldb    | 2025-08-30T23:47:13.548852Z 0 [Note] InnoDB: Setting file './ibtmp1' size to 12 MB. Physically writing the file full; Please wait ...
Mysqldb    | 2025-08-30T23:47:13.566467Z 0 [Note] InnoDB: File './ibtmp1' size is now 12 MB.
Mysqldb    | 2025-08-30T23:47:13.566823Z 0 [Note] InnoDB: 96 redo rollback segment(s) found. 96 redo rollback segment(s) are active.
Mysqldb    | 2025-08-30T23:47:13.566826Z 0 [Note] InnoDB: 32 non-redo rollback segment(s) are active.
Mysqldb    | 2025-08-30T23:47:13.566982Z 0 [Note] InnoDB: Waiting for purge to start
Mysqldb    | 2025-08-30T23:47:13.617158Z 0 [Note] InnoDB: 5.7.44 started; log sequence number 12219253
Mysqldb    | 2025-08-30T23:47:13.617516Z 0 [Note] InnoDB: Loading buffer pool(s) from /var/lib/mysql/ib_buffer_pool
Mysqldb    | 2025-08-30T23:47:13.617559Z 0 [Note] Plugin 'FEDERATED' is disabled.
Mysqldb    | 2025-08-30T23:47:13.622133Z 0 [Note] InnoDB: Buffer pool(s) load completed at 250830 23:47:13
Mysqldb    | 2025-08-30T23:47:13.623847Z 0 [Note] Found ca.pem, server-cert.pem and server-key.pem in data directory. Trying to enable SSL support using them.
Mysqldb    | 2025-08-30T23:47:13.623859Z 0 [Note] Skipping generation of SSL certificates as certificate files are present in data directory.
Mysqldb    | 2025-08-30T23:47:13.623864Z 0 [Warning] A deprecated TLS version TLSv1 is enabled. Please use TLSv1.2 or higher.
Mysqldb    | 2025-08-30T23:47:13.623867Z 0 [Warning] A deprecated TLS version TLSv1.1 is enabled. Please use TLSv1.2 or higher.
Mysqldb    | 2025-08-30T23:47:13.624512Z 0 [Warning] CA certificate ca.pem is self signed.
Mysqldb    | 2025-08-30T23:47:13.624546Z 0 [Note] Skipping generation of RSA key pair as key files are present in data directory.
Mysqldb    | 2025-08-30T23:47:13.624815Z 0 [Note] Server hostname (bind-address): '*'; port: 3306
Mysqldb    | 2025-08-30T23:47:13.624846Z 0 [Note] IPv6 is available.
Mysqldb    | 2025-08-30T23:47:13.624857Z 0 [Note]   - '::' resolves to '::';
Mysqldb    | 2025-08-30T23:47:13.624871Z 0 [Note] Server socket created on IP: '::'.
Mysqldb    | 2025-08-30T23:47:13.626089Z 0 [Warning] Insecure configuration for --pid-file: Location '/var/run/mysqld' in the path is accessible to all OS users. Consider choosing a different directory.
Mysqldb    | 2025-08-30T23:47:13.629981Z 0 [Note] Event Scheduler: Loaded 0 events
Mysqldb    | 2025-08-30T23:47:13.630134Z 0 [Note] mysqld: ready for connections.
Mysqldb    | Version: '5.7.44'  socket: '/var/run/mysqld/mysqld.sock'  port: 3306  MySQL Community Server (GPL)
```


## Liste los servicios
```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Documents/Myapp$ sudo docker compose ps
[sudo] password for rtxmsi1: 
WARN[0000] /home/rtxmsi1/Documents/Myapp/docker-compose.yml: the attribute `version` is obsolete, it will be ignored, please remove it to avoid potential confusion 
NAME        IMAGE          COMMAND                  SERVICE     CREATED         STATUS          PORTS
Mysqldb     mysql:5.7      "docker-entrypoint.s…"   db          2 minutes ago   Up 40 seconds   0.0.0.0:3306->3306/tcp, [::]:3306->3306/tcp, 33060/tcp
webserver   nginx:alpine   "/docker-entrypoint.…"   webserver   2 minutes ago   Up 40 seconds   0.0.0.0:80->80/tcp, [::]:80->80/tcp, 0.0.0.0:443->443/tcp, [::]:443->443/tcp
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Documents/Myapp$ 
```


## Verifique que tiene acceso a MySql (la contraseña se encuentra en el archivo db_root_password.txt)

```bash
(base) rtxmsi1@rtxmsi1-MS-7E06:~/Documents/Myapp$ sudo docker exec -it Mysqldb mysql -u wordpress -p
Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 2
Server version: 5.7.44 MySQL Community Server (GPL)

Copyright (c) 2000, 2023, Oracle and/or its affiliates.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> 
```



### (18) Según las reglas de seguridad vistas en la presentación. Ejemplifique con una implementación, al menos 5 de ellas.

A continuación, 5 **buenas prácticas de seguridad en Docker** aplicadas a este caso:

1. **Uso de secretos en lugar de variables de entorno sensibles**

   * Correcto:

     ```yaml
     environment:
       MYSQL_ROOT_PASSWORD_FILE: /run/secrets/db_root_password
     secrets:
       - db_root_password
     ```
   * Incorrecto:

     ```yaml
     environment:
       MYSQL_ROOT_PASSWORD=root123
     ```

2. **Limitar los puertos expuestos**

   * Solo abrir los puertos necesarios (`80`, `443`, `3306`).
   * No exponer MySQL a internet si no es necesario:

     ```yaml
     ports:
       - "3306:3306"   # inseguro si se expone al público
     ```

     Mejor → exponerlo solo en la red interna de Docker.

3. **Usar imágenes oficiales y ligeras**

   * Ejemplo: `nginx:alpine` en lugar de una imagen desconocida.
   * Esto reduce vulnerabilidades y tamaño del contenedor.

4. **Principio de menor privilegio**

   * Evitar ejecutar contenedores como `root`.
   * Ejemplo para Nginx:

     ```yaml
     user: "1000:1000"
     ```

5. **Mantener los contenedores actualizados**

   * Descargar las últimas versiones estables:

     ```bash
     docker pull mysql:5.7
     docker pull nginx:alpine
     ```
   * Evita vulnerabilidades conocidas en versiones antiguas.

