---
title: MongoDB 安装(Win10)
date: 2020-10-20
 
categories:
 - 后端技术
tags:
 - MongoDB

---
## MongoDB 安装

### 下载msi

[官网下载](https://www.mongodb.com/try/download/community)

### 安装软件

![安装1](https://s1.ax1x.com/2020/11/09/BH9mkV.png)

### 配置

- 新建 `data` 目录(用来存储你的数据库和日志等文件)
- 在 `data` 目录下添加 `db` 文件夹和 `log` 文件夹
![配置1](https://s1.ax1x.com/2020/11/09/BH9l6J.png)
- 配置环境变量:将你的安装目录添加到环境变量中(例：`D:\Developer\MongoDB\Server\4.4\bin`)

1. 启动`mongodb`

使用管理员模式的 `cmd` 进入安装目录(`D:\Developer\MongoDB\Server\4.4\bin`)

```js
mongod --dbpath "D:\Developer\MongoDB\data\db"
```

`"D:\Developer\MongoDB\data\db"`是存储数据的目录，可以自定义,输入本命令后服务就启动了，可以在浏览器中访问`127.0.0.1:27017`
![启动](https://s1.ax1x.com/2020/11/09/BH9G01.png)
打开这个页面说明成功。
![启动2](https://s1.ax1x.com/2020/11/09/BHAEm4.png)

1. 配置本地`windows mongodb`服务

暂停`cmd`的进程,在安装目录下(比如在`D:\Developer\MongoDB`中)，新建一个`mongd.cfg`文件,文件内容如下:

```js
#数据库数据存储路径，注意改成你自己的存储路径
dbpath=D:\Developer\MongoDB\data\db
#日志输出文件路径
logpath=D:\Developer\MongoDB\data\log\mongo.log
#错误日志采用追加模式
logappend=true
#启用日志文件，默认启用
journal=true
#这个选项可以过滤掉一些无用的日志信息，若需要调试使用请设置为false
quiet=true
#端口号 默认为27017
port=27017
```

![配置2](https://s1.ax1x.com/2020/11/09/BH91X9.png)
在`cmd`中输入以下命令:

```js
mongod.exe --config "D:\Developer\MongoDB\mongod.cfg" --install --serviceName "MongoDB"
```

![配置3](https://s1.ax1x.com/2020/11/09/BH98mR.png)
`"D:\Developer\MongoDB\mongod.cfg"`是`mongod.cfg`文件的路径

- `--config`：依据的配置文件。
- `--install`：创建
- `--serviceName`：服务名称。
- `--prot`:是端口号
更改端口号输入

```js
mongod --dbpath "D:\Developer\MongoDB\data\db" --port 9526
// 本次启动端口是9526 重启后恢复27017
```

## 启动

- 启动命令，执行`net start mongodb`

![start](https://s1.ax1x.com/2020/11/09/BH9Ql4.png)

- 关闭服务，执行`net stop mongodb`

![stop](https://s1.ax1x.com/2020/11/09/BH9nYT.png)

- 测试`mongodb`

```js
mongo
```

![mongo](https://s1.ax1x.com/2020/11/09/BH9ufU.png)
![mongo2](https://s1.ax1x.com/2020/11/09/BH9MpF.png)

`exit` 退出

- `mongodb`服务相关命令：

```js
启动MongoDB服务
net start MongoDB
关闭MongoDB服务
net stop MongoDB
移除 MongoDB 服务
D:\Developer\MongoDB\Server\4.4\bin\mongod.exe --remove
```
