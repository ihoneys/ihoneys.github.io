---
title: Docker
date: 2021-5-08
 
categories:
 - 后端技术
 - Docker
tags:
 - Docker

---

## 安装

### windows

- 下载
  - 官网下载[Docker-Desktop](https://www.docker.com/products/docker-desktop) 或[下载连接](https://download.docker.com/win/stable/Docker%20for%20Windows%20Installer.exe)

- 安装软件前

  - `inter`
    - 在 `bios` 开启虚拟化 -- `inter - V T`
    - 开启 `Hyper-V`
  - `AMD`
    - 在`bios`开启`AMD-V`

- 安装软件

:::warning
安装完毕后，第一次打开，可能会有错误提示，让你升级WSL2,打开链接，下载升级包安装即可，然后再次打开docker 就可以了。
:::

### 镜像源

- `docker for windows`
软件设置 -> `daemon`

```js
{
    "registry-mirrors":[
        "http://hub-mirror.c.163.com/",
        "https://registry.docker-cn.com",
        "https://3laho3y3.mirror.aliyuncs.com",
        "http://f1361db2.m.daocloud.io",
        "https://mirror.ccs.tencentyun.com"]
}
```

## 使用

### 挂载 vue 或react 、node项目

1. 在项目中先打包

```js
npm run build
// 或
yarn build
```

2. 在项目根目录中创建`Dockerfile`文件,内容如下：

react

```js
FROM node as builder
WORKDIR /app
COPY . .
RUN npm run build

FROM node
RUN npm install -g serve
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "8001", "-s", "."]
```

vue

```js
# 设置基础镜像
FROM nginx
# 定义作者
MAINTAINER jiangyu
# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /usr/share/nginx/html/
```

node

```js
FROM node:13.14-buster-slim
WORKDIR /usr/app
COPY ./ ./
RUN npm install --registry=https://registry.npm.taobao.org
RUN ln -sf /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
ENV NODE_MAX_MEM 4096
ENV NODE_ENV production
ENTRYPOINT ["npm", "run"]
CMD ["start"]
```

node配置详情
:::details

```js
# FROM 表示设置要制作的镜像基于哪个镜像，FROM指令必须是整个Dockerfile的第一个指令，如果指定的镜像不存在默认会自动从Docker Hub上下载。
# 指定我们的基础镜像是node，latest表示版本是最新
FROM node:latest

# 执行命令，创建文件夹
RUN mkdir -p /home/nodeNestjs

# 将根目录下的文件都copy到container（运行此镜像的容器）文件系统的文件夹下
COPY ./nestjs /home/nodeNestjs

# WORKDIR指令用于设置Dockerfile中的RUN、CMD和ENTRYPOINT指令执行命令的工作目录(默认为/目录)，该指令在Dockerfile文件中可以出现多次，如果使用相对路径则为相对于WORKDIR上一次的值，
# 例如WORKDIR /data，WORKDIR logs，RUN pwd最终输出的当前目录是/data/logs。
# cd到 /home/nodeNestjs
WORKDIR /home/nodeNestjs

# 安装项目依赖包
RUN npm install
RUN npm build

# 配置环境变量
ENV HOST 0.0.0.0
ENV PORT 3000

# 容器对外暴露的端口号(笔者的nestjs运行的端口号是3000)
EXPOSE 3000

# 容器启动时执行的命令，类似npm run start
CMD ["node", "/home/nodeNestjs/dist/main.js"]
```

:::
3. 构建镜像，在根目录打开`cmd`(`.`是必须的,`testapp`是测试名)

```js
docker build -t testapp .
// -f Dockerfile 文件的位置 如： -f /path/to/a/Dockerfile
// --tag, -t: 镜像的名字及标签，通常 name:tag 或者 name 格式；-t myimg:0.1 . myimg是镜像名，0.1是tag；可以在一次构建中为一个镜像设置多个标签
//  . 表示当前目录， 即dockerfile所在的目录
```

4. 查看`docker images`

```js
docker images
```

如果有创建的`testapp`表示镜像创建成功。

5. 运行当前 `image` (测试是否能成功)

```js
docker run -p 3000:80 -d --name gentle-vue gentle-vue   // vue
docker run -it -p 8001:8001 testapp    // react
// -p ：配置端口映射，格式是外部访问端口：容器内端口
// -d ：后台运行
// --name : 给容器取名
// 最后有 2 个 gentle-vue,前面一个是给容器取的名字，后面一个是使用的镜像的名字
```

软件`docker`中也会有对应的`images`镜像了

- 修改 `tag` 并 `push` 到远程库(不是必须的)

```js
docker tag hello-app `remote-name`/hello-app
docker push `remote-name`/hello-app:`tag`
```
