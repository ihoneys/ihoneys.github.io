---
title: MongoDB (Docker安装)
date: 2020-10-25
 
categories:
 - 后端技术
tags:
 - MongoDB

---
## Mongodb 在容器安装

1. 下载镜像

```js
docker pull mongo
```

2. 查看本地是否有镜像文件

```js
docker images
```

3. 运行`mongodb`容器

```js
docker run --name mongodb-server0 -v /data/mongodb0:/data/db -p 27017:27017 -d 镜像ID --auth
// or
docker run -itd --name mongo -p 27017:27017 mongo --auth
// -v后面的参数表示把数据文件挂载到宿主机的路径
// -p把mongo端口映射到宿主机的指定端口
// --auth表示连接mongodb需要授权
```

4. 进入镜像

```js
docker exec -it 镜像名 bash
```

- 进入并为`MongoDB`添加管理员用户

```js
docker exec -it 镜像名 mongo admin
```

- 添加数据库用户

```js
db.createUser({ user: 'guangju', pwd: '123456', roles: [ { role: "userAdminAnyDatabase", db: "admin" } ] });
```

尝试连接

```js
db.auth('admin', '123456')
```

给数据库授权：

```js
db.grantRolesToUser("admin", [ { role:"dbOwner", db:"admin"} ]) ;
```

授权得在用户登录之后才可以

- 验证一下

浏览器中输入 `localhost:27017` ，输出一行文字，代表数据库运行中和暴露出来了

[参考](https://www.cnblogs.com/clwycwxw/p/14030934.html)

## 远程连接数据库

1. 查看`docker`容器的`ip`

```js
docker inspect 容器名
// 输出内容里这个是容器内网ip  "IPAddress": "172.17.0.2",
```

- 查看容器的信息

```js
docker ps
```

2. 修改 `mongod.conf.orig` 文件

```js
vim /etc/mongod.conf.orig
```

```js
// 将文件中的 bindIp:127.0.0.1 注释或修改为
    bindIp:0.0.0.0
```

3. 到这里还是不能用远程工具连接数据库，`mogodb` 不支持`ipv6`
    - 方式一 在容器中的`etc/hosts` 将`::1  localhost ip6-localhost ip6-loopback`这一行删掉
    - 开启`mongodb`的`ipv6`

4. 重启数据库或者`mongodb`容器，就可以在 `Navicat` 连接数据库了，要用容器的内网`ip` 大部分是 `172.17.0.2` ,以查到的为准。
