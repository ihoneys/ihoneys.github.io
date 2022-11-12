---
title: Vue 打包部署
date: 2020-12-12
sidebar: 'auto'
tags:
 - vue
---

## vue2.x的打包上线--小记

### vue-cli

1. 用`vue-cli`脚手架构建的项目，可以用内置命令脚本打包项目

```shell
yarn build
# or
npm run builds
```

2. 执行命令后会生成一个打包好的文件夹`dist`(默认)

部署项目就是将这个文件夹的文件部署到服务器

- 如果项目要部署的到主机(服务器)的根目录上直接部署就可以.

- 如果项目是在二级目录中，就要在打包前配置一下路径：

在源码根目录中创建一个`vue.config.js`文件，写以下配置：

```js
// vue.config.js
module.exports = {
    // projectname 就是你要部署的二级目录名称，如果部署到github后gitee，就是你的仓库名
    publicPath: "/projectname/",
    // 或者配置成变量形式，区分生产模式和开发模式
    // publicPath: process.env.NODE_ENV === 'production' ? '/projectname' : '/'
}
```

如果使用了路由`router`,还应配置`base`路径：

```js
// 挂载路由处
const router = new VueRouter({
    mode: 'history',
    // 配置路由基础路径
    base: '/projectname/',
    // base: process.env.BASE_URL,  //默认配置
    routes
})
```

\* 然后重新打包`build`一下，再部署项目即可！
