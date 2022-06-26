---
title: Vue 请求的流程
date: 2019-12-05
 
tags:
 - vue

---

## 页面发起请求

1. 函数调用接口

```js
mounted() {
   HomeList().then((res)=>{
    this.homelist=res.data.dev
   })
  },
```

2. 页面引入的接口

```js
 import {HomeList} from '../../api/home.js'
```

## api中接口配置

- `home.js`文件

```js
import Axios from './request.js'

// 首页的数据
export function HomeList() {
 return Axios({
  url: '/home',
  method: 'get'
 })
}
```

- `request.js`文件

后台服务地址

```js
import axios from 'axios'
const Axios = axios.create({
 baseURL: 'http://123.56.171.43:27018', // url = base url + request url
 timeout: 5000,
 // http://localhost:27018
 // http://123.56.171.43:27018
})
export default Axios
```

## 服务器中

- package.json

```js
{
  "name": "server",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon index.js"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cookie-parser": "^1.4.5",
    "cors": "^2.8.5",
    "express": "^4.17.1",
    "jsonwebtoken": "^8.5.1",
    "mysql": "^2.18.1",
    "nodemon": "^2.0.7"
  }
}

```

- index.js

主文件

```js
// 1. 启动一个后端服务
var express = require('express')
var bodyParser = require('body-parser')
// 数据库
// 用户登录查找数据库的方法
let myMySQL = require('./mysql.js')
// 用户注册写入数据库的方法
let wirteMySQL = require('./mysql.js')
// 跨域
var cors = require('cors')
// 1.2 配置post请求
var exApp = express()
exApp.use(
  bodyParser.urlencoded({
    extended: true,
  })
)
exApp.use(bodyParser.json())
// 1.3 开启跨域设置
exApp.use(cors())
// 1.4 开启后端服务端口
exApp.listen(27018, () => console.log('http://localhost:27018'))

exApp.use('/', require("./zangang"))



// 获取首页数据
exApp.get('/home', async (req, res) => {
  let sql = 'Select * from homelist'
  myMySQL(sql).then((dev) => {
    res.json({
      code: 1,
      dev
    })
  })
})
// 给课程开启一个新话题
exApp.get('/addht', async (req, res) => {
  let { id } = JSON.parse(req.query.data)
  let sql = 'INSERT INTO vachat(endlist) VALUES(?)';
  let os = []
  os.push(JSON.parse(req.query.data))
  let end = await wirteMySQL(sql, JSON.stringify(os)).then()
  res.json({
    code: 1,
    msg: '成功'
  })
})
// 给id课程评
exApp.get('/addping', async (req, res) => {
  let { id } = JSON.parse(req.query.data)
  let sql = "Select * from thinklist where id='" + id + "'"
  let bos = await myMySQL(sql).then()
  if (bos[0]) {
    // 某条数据评论存在的时候
    let all = JSON.parse(bos[0].list)
    all.push(JSON.parse(req.query.data))
    let modsql = "UPDATE thinklist SET list = ? WHERE id = '" + id + "'"
    let boss = await wirteMySQL(modsql, JSON.stringify(all)).then()
    res.json({
      code: 1,
      msg: '成功'
    })
  } else {
    // 不存在
    let sql = 'INSERT INTO thinklist(list) VALUES(?)';
    let os = []
    os.push(JSON.parse(req.query.data))
    let end = await wirteMySQL(sql, JSON.stringify(os)).then()
    res.json({
      code: 1,
      end
    })
  }
})
// 课程介绍的数据
exApp.get('/detail', async (req, res) => {
  let { id } = req.query
  let sql = "Select * from detailist where id='" + id + "'"
  let sqls = "Select * from homelist where id='" + id + "'"
  let sqlpingjia = "Select * from thinklist where id='" + id + "'"
  let sqlht = "Select * from vachat where id='" + id + "'"
  let dev = await myMySQL(sql).then()
  let devlist = await myMySQL(sqls).then()
  let pingjia = await myMySQL(sqlpingjia).then()
  let huati = await myMySQL(sqlht).then()
  if (dev && devlist) {
    res.json({
      code: 1,
      dev,
      devlist,
      pingjia,
      huati
    })
  }
})
// 给课程开启一个新话题
exApp.get('/addht', async (req, res) => {
  let { id } = JSON.parse(req.query.data)
  let sql = 'INSERT INTO vachat(endlist) VALUES(?)';
  let os = []
  os.push(JSON.parse(req.query.data))
  let end = await wirteMySQL(sql, JSON.stringify(os)).then()
  res.json({
    code: 1,
    msg: '成功'
  })
})
// 给id课程评
exApp.get('/addping', async (req, res) => {
  let { id } = JSON.parse(req.query.data)
  let sql = "Select * from thinklist where id='" + id + "'"
  let bos = await myMySQL(sql).then()
  if (bos[0]) {
    // 某条数据评论存在的时候
    let all = JSON.parse(bos[0].list)
    all.push(JSON.parse(req.query.data))
    let modsql = "UPDATE thinklist SET list = ? WHERE id = '" + id + "'"
    let boss = await wirteMySQL(modsql, JSON.stringify(all)).then()
    res.json({
      code: 1,
      msg: '成功'
    })
  } else {
    // 不存在
    let sql = 'INSERT INTO thinklist(list) VALUES(?)';
    let os = []
    os.push(JSON.parse(req.query.data))
    let end = await wirteMySQL(sql, JSON.stringify(os)).then()
    res.json({
      code: 1,
      end
    })
  }
})
// 登录
exApp.post('/login', async (req, res) => {
  let { username, password } = req.body;
  //查询数据
  let sql = "Select * from user where username='" + username + "' AND password='" + password + "'"
  myMySQL(sql).then((dev) => {
    if (dev.length) {
      res.json({ code: 1, msg: '成功' })
    } else {
      res.json({ code: 0, msg: "账号或密码错误" })
    }
  })
})
// 注册
exApp.post('/reg', async (req, res) => {
  let { username, password } = req.body;
  //查询数据
  let sql = "Select * from user where username='" + username + "'"
  let resuedn = await myMySQL(sql).then()
  if (resuedn.length) {
    res.json({
      code: 0,
      msg: '用户名已经存在'
    })
  } else {
    let sql = 'INSERT INTO user(username,password) VALUES(?,?)';
    let results = await wirteMySQL(sql, [username, password]).then()
    if (results) {
      res.json({
        code: 1,
        msg: '新增用户成功'
      })
    }
  }
})
// 获取课程数据
exApp.get('/corushot', async (req, res) => {
  // let abs = JSON.stringify([{ title: 'ffff' }])
  // let sql = 'INSERT INTO corusehot(ceshi) VALUES(?)';
  // let results = await wirteMySQL(sql, abs).then()
  let corusehot = "Select * from corusehot"
  let dev = await myMySQL(corusehot).then()
  console.log(dev)
  res.json({
    code: 1,
    dev
  })
})
// 课程线上列表数据
exApp.post('/corusonline', async (req, res) => {
  let onlinelist = "Select * from onlinelist"
  let dev = await myMySQL(onlinelist).then()
  console.log(dev)
  res.json({
    code: 1,
    dev
  })
})
// 课程线下列表数据
exApp.post('/corusupline', async (req, res) => {
  let onlinelist = "Select * from coruseupline"
  let dev = await myMySQL(onlinelist).then()
  console.log(dev)
  res.json({
    code: 1,
    dev
  })
})
exApp.get('/quesinfo', async (req, res) => {
  let sql = "Select * from question"
  await myMySQL(sql).then((dev) => {
    res.json({
      code: 1,
      dev
    })
    console.log("请求数据", dev);
  })
})
exApp.get('/getexpert', async (req, res) => {
  let sql = "Select * from expertlist"
  await myMySQL(sql).then((dev) => {
    res.json({
      code: 1,
      dev
    })
    console.log("请求数据", dev);
  })

  let onlinelist = "Select * from coruseupline"
  let dev = await myMySQL(onlinelist).then()
  // console.log(dev)
  res.json({
    code: 1,
    dev
  })
})

// 课程线下详情数据
exApp.post('/corusupdetails', async (req, res) => {
  let relsove = "Select * from corushotdetails"
  let dev = await myMySQL(relsove).then()
  console.log(dev)
  res.json({
    code: 1,
    dev
  })
})
// 课程地区导师查询
exApp.post("/corusfind", async (req, res) => {
  let relsove = "Select * from findteacher"
  let dev = await myMySQL(relsove).then()
  console.log(dev)
  res.json({
    code: 1,
    dev
  })
})

```

- `mysql.js`

数据库操作

```js

let mysql = require('mysql')
// 查询的函数
let myMySQL = function (sql) {
    return new Promise(function (resolve, reject) {
        let connection = mysql.createConnection({
            host: '123.56.171.43',
            user: 'root',
            password: '0000',
            database: 'vuebase',
        })
        // 开启
        connection.connect();
        // 查询
        await connection.query(sql, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
        // 每次都要关闭
        connection.end()
    })
}
// 写入数据库的函数
let wirteMySQL = (sql, end) => {
    return new Promise(async function (resolve, reject) {
        let connection = await mysql.createConnection({
            host: '123.56.171.43',
            user: 'root',
            password: '0000',
            database: 'vuebase',
        })
        // 开启
        connection.connect();
        // 增加
        await connection.query(sql, end, function (err, result) {
            if (err) {
                reject(err)
            } else {
                resolve(result)
            }
        })
        // 每次都要关闭
        connection.end()
    })
}
// module.exports = myMySQL;
// module.exports = wirteMySQL;
module.exports = { myMySQL,wirteMySQL };
```

- yogo
