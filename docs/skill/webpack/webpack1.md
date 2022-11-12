---
title: Webpack 是什么
date: 2019-06-07
sidebar: 'auto'
categories:
 - Webpack
tags:
 - Webpack
---
## webpack简介

webpack是一个 **模块打包工具**，支持所有的打包语法，比如 `ES Module`、`CommonJS`、`CMD`、`AMD`。初期的webpack是用来模块打包js的，发展到现在，已经可以打包很多种文件类型，比如 `css`、`img` 。

优化打包速度最有效的方法就是保持 `nodejs` 和 `webpack` 为最新版本。

<!-- more -->

### 类似的打包工具

`gulp` ···

## webpack能做什么

代码转换 【es6-es5，less-css】， 文件优化 【代码压缩】 ，代码分割 【公共模块抽离】 ，模块合并，自动刷新【热更新】代码校验，自动发布【发布到服务器】

## webpack和node的关系

 使用webpack前需要了解node的知识...

### nodejs的基础语法

- module.exports 导出一个语法
- require引入一个模块
- path：nodejs内置的路径模块
- __dirname:文件夹的绝对路径

### 1.初始化环境

初始化npm包文件，配置package.json文件 & -y表示所有配置都是yes

```shell
 npm init -y
```

### 2.webpack安装

1. 全局安装

```shell
npm i -g webpack webpack-cli
```

卸载

```shell
npm uninstall -g webpack  webpack-cli
```

2. 局部安装

```shell
npm i -D webpack webpack-cli
```

卸载

```shell
npm uninstall -D/-S webpack  webpack-cli
```

- 优先使用局部，优点是：便于管理版本
【webpack-cli只在v4x版以后可用】

```shell
--save-dev  /  -D    //开发环境
--save      /  -S    //生产环境 （生产环境和开发环境都要用的依赖）
--global    /  -g    //全局安装
```

### 3.webpack 的0配置(就是从0开始一点点自己配置)

- 直接运行webpack就可以进行打包，webpack默认有两个文件夹 src源代码 dist 编译后的代码目录

- 在命令行npx webpack 会自动找目录下的src文件夹，打包出一个dist目录，里面是打包后的代码
- npm v5.2.0 引入的一条命令（npx），npx 会帮你执行依赖包里的二进制文件。引入这个命令的目的是为了提升开发者使用包内提供的命令行工具的体验。

- npx是用来运行本地项目中的依赖，如果本地项目依赖不存在，会自动下载，用完后，会默认删除掉，下载的依赖包
- npm 是运行package.json。 文件中的script命令的，默认会在当前目录的node_modules包中找，找不到就去全局找，直到找到，实在找不到报错给你看

- 五大组成部分(1~5)
    1. 入口 entry
    2. 出口 output
    3. 装载机 module-loader
    4. 插件 plugins
    5. 模式 mode
    6. 优化 optimization
    7. 模块规则 resolve

### webpack 打包

webpack默认就是打包js的，默认只能是编译es6的模块【export import】，【class】不能编译

- 当默认使用webpack命令的时候，它会自动执行node_modules包里 的默认配置文件，webpack.config.js
- 当我们在项目里创建了webpack.config.js后，在使用npx webpacck的话，它会优先执行我们创建的这个配置文件
- 我们可以用命令指定webpack加载别名的配置文件

```shell
npx webpack --config webpack.config.dev.js
```

### webpack-dev-server

- 它是wxpress封装的
- 使用它来启动webpack服务，它会执行编译，编译的文件main.js不会产生物理文件(默认在项目根目录中)，会将编译存到内存条中
- 一般使用它需要使用html-webpack-plugin配合开发

### html-webpack-plugin

- 是一个插件，写在webpack配置中的plugins数组中
- 它是将html模板进行编译，并把webpack编译好的脚本注入到html页面里

## resolve

当一个`js`或`ts`文件作为模块引入另一个文件时，默认不能自己识别是否时模块，要自己配置
例如

```ts
// 导出
export const hi = "你好"
```

```ts
// 引入
import {hi} from './m'
console.log(hi);
```

配置webpack：

```js
module.exports = {
    mode: 'production',
    // 入口文件
    entry: "./src/index.ts",
    // 出口
    output: {},
    // 指定webpack 打包要使用的模块
    module: {},
    // 插件
    plugins: [],
    //用来设置引用模块
    resolve: {
        extensions: [".ts", ".js"] // 告诉 webpack 凡是ts、js文件结尾的文件都可以作为模块使用
    }
}
```
