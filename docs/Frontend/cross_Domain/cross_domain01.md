---
title: 跨域
date: 2020-12-24
 
categories:
 - 跨域
tags:
 - 跨域

---
## 跨域

非跨域请求

- 同源策略请求

ajax / fetch

- 跨域传输

## 跨域的方式

- `jsonp`

- `window.name` + `iframe`

- `cors` 跨域资源共享

- 反向代理

## window.name + iframe

类似的 `document.domain` `window.postMessage` `location.hash`

- 存储数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- <meta http-equiv="refresh" content="5"> -->
  <title>Document</title>
</head>
<body>
  <script>
    window.name = "var a = 123"
  </script>
</body>
</html>
```

- 读取/使用数据

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- <meta http-equiv="refresh" content="5"> -->
  <title>Document</title>
</head>
<body>
  <script>
    var iframe = document.createElement('iframe')
    iframe.src = "http://127.0.0.1:5500/test/test4.html" //目标地址
    iframe.style.display = 'none'
    document.body.appendChild(iframe)
    iframe.onload = function () {
      var vname = iframe.contentWindow.name
      eval(vname)
      console.log(a);
    }
  </script>
</body>
</html>
```

## jsonp

**需要服务器的支持 只能处理get请求 安全性低**

- `js.js`文件 -- 可以使用`serve`这个工具挂载`js.js`文件(要安装node)，只是为了模拟后台。

```js
// js.js 文件存放在后台服务器
callback({ data: "我的数据" })
```

在页面上定义一个函数体，后台的数据可以通过函数在前端使用，实现了跨域通信

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- <meta http-equiv="refresh" content="5"> -->
  <title>Document</title>
</head>
<body>
  <script>
    function callback(data) {
      console.log(data);
    }
  </script>
  <script src="http://localhost:5000"></script>
</body>
</html>
```

- ajax 实现

html

```js
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <!-- <meta http-equiv="refresh" content="5"> -->
  <title>Document</title>
</head>

<body>
  <script src="jquery.js"></script>
  <script src="jsonp.js"></script>
</body>

</html>
```

jsonp.js

```js
$.ajax({
  url: "http://127.0.0.1:8001/list",
  method: "get",
  dataType: "jsonp",
  success: res => {
    console.log(res);
  }
})
```

server.js

```js
// import { Express } from "express";
let express = require("express"),
  app = express();
app.listen(8001, _ => {
  console.log("OK");
});
app.get("/list", (req, res) => {
  let { callback = Function.prototype } = req.query
  let data = {
    code: 0,
    msg: "zhangguangju"
  }
  res.send(`${callback}(${JSON.stringify(data)})`)
})
```

## `cors` 跨域资源共享

```js

```
