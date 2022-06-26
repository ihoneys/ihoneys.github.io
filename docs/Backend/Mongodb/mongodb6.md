---
title: MongoDB 项目实践
date: 2020-11-08
 
categories:
 - 后端技术
tags:
 - MongoDB

---

- 在项目中远程操作数据库

```js
// 引入mongoose模块 用来操作数据库
const mongoose = require('mongoose')

// 1. 连接数据库
 //createConnection 是node语法
const app = mongoose.createConnection("mongodb://123.56.171.43:27017/guangju", { useNewUrlParser: true, useUnifiedTopology: true })  // guangju是数据库名
// 连接远程数据库 + 用户名密码
// const app = mongoose.createConnection('mongodb://username:password@123.56.171.43:27017/databasename', { useNewUrlParser: true, useUnifiedTopology: true });

//  2. 开启监听

app.on("open", () => {
    console.log("打开成功");
})
app.on("err", () => {
    console.log("打开失败");
})

// 3.创建或者获取集合

//  3.1 规则 --给前端立规矩，给我数据必须遵守的规则
const Types = mongoose.Schema.Types
const Schema = mongoose.Schema({
    username: Types.String,
    // required: [true, "用户名必须有"],
    age: {
        type: Types.Number,
        default: 20,
    }
}, {
    age: {
        type: Types.Number,
        default: 20,

    }
})
//  3.2 把规则和模型结合后得到一个集合
const User = app.model("lists", Schema)
// 第一个参数：操作的数据库集合名 ，如果原来有就在集合里增加数据，如果没有，会自动创建一个新集合，并且新集合名以s结尾
// 第二个参数：是传入的规则
// 4. 操作集合 -- 增删改查

// 增
const create = (name, age) => {
    User.create({ username: "小组", age: 12 }).then(console.log)
}
create() // 调用创建函数，执行数据创建

// for (i = 0; i < 1000; i++) {
//     let name = i + 1
//     let age = i + 1
//     create(name, age)
// }

// 删
const del = () => {
    User.deleteMany().then(console.log)
}

// del()
// 查
const find = () => {
    User.find({ username: "王明" }).then(console.log)
}

// find()
// 更新

const update = () => {
    User.update({ username: "小明" }, { username: "王明" }).then(console.log)
}

// update()
```
