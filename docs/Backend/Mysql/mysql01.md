---
title: MySQL 安装和启动
date: 2020-11-08
 
categories:
 - 后端技术
tags:
 - MySQL
publish: true
sticky: 8
# 打赏
showSponsor: true
---

## MySQL 安装

- [下载](https://downloads.mysql.com/archives/community/)

下载的时候最好用5.7 之前的版本，听说5.8后的是收费的了

<!-- more -->

## MySQL 启动服务

- windwos

启动

```js
net start MySQL2021  // MySQL2021 是你命名的服务名
```

停止

```js
net stop MySQL2021
```

## 使用数据库系统

1. 使用MySQL 自带的终端 `MySQL 5.5 Command Line Client`，但是这样打开的都是root 用户下的数据库；
2. 使用其他终端，(cmd等),需要输入登录命令

```js
mysql -h localhost -P 3306 -u root -pxxxx
//或
mysql -hlocalhost -P3306 -uroot -pxxxx
// 不想明文输入密码可以直接这样然后回车,在回车后再输入密码
mysql -h localhost -P 3306 -u root -p
// 如果都是默认项使用以下命令
mysql -u root -p
```

- `-h`: 本机地址
- `-P`: 端口号
- `-u`: 用户名
- `-p`: 输入密码(注意密码要和-p连在一起)
- `xxxx`: 密码

## 退出数据库系统

退出系统在终端输入`exit`或者 <kbd>ctrl</kbd> + <kbd>C</kbd>
