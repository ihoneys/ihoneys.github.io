---
title: Node使用
date: 2019-02-06
 
tags:
 - Node.js

---
## 安装

- node 下载

[英文官网](https://nodejs.org/en/)
[中文官网](https://nodejs.org/zh-cn/)

[查看和下载 node 发行的所有版本](https://nodejs.org/dist/)

## 创建一个后台

- `express` : node框架
- `cors` : node用来跨域的模块
- `body-parser` : __

1. 第一种

```js
// express  cors
var express = require('express')
var cors = require('cors')
// const { request } = require("express");

var app = express()
// 使用跨域函数 ，允许所有的跨域请求
app.use(cors())
// post参数解析
app.use(express.urlencoded())

// 开启一个服务器
app.listen(3010, () => console.log("启动--http://localhost:3010"));

```

2. 第二种

```js
// package.json
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "main.mjs",
  "scripts": {
    "dev": "set  PORT=3001&& nodemon main.mjs",
    "serve": "set  PORT=3001&& node main.mjs"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "imageinfo": "^1.0.4",
    "mongoose": "^5.10.17",
    "nodemon": "^2.0.7"
  }
}
```

```js
// index.js
var express = require('express')
var BodyParser = require('body-parser')
var cors = require('cors')

var App = express()
// 允许跨域的地址数组
// App.use(cors({ origin: ["https://xxxx", "https://xxxxxx"] }))
App.listen(3000, () => { console.log("已启动-localhost:3000"); })
App.get('/demo', (req, res) => {
    res.json({ code: 1, msg: ok })
})

```

以上简易后台下载[https://wwa.lanzous.com/i4bZYnu0peh](https://wwa.lanzous.com/i4bZYnu0peh)
