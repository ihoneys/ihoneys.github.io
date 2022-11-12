---
title: React 起步
date: 2021-03-26
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - react
publish: true
# 打赏
showSponsor: true
---

# React 介绍

【面试的时候，可能会问到】

1. `react` 是干什么的？

构建用户界面的`javascript`库。

2. `react` 能干什么？

开发网站，单页面应用，手机 `app`

`vue` 和 `react` 几乎在使用上和原理上非常的相似，`vue` 最初就是借鉴的
`react` 思想开发的

- `react` 好处：

`api` 非常少，使用起来很简单，灵活。

`react` 函数式编程思想（声明式编程）

## react 原理

`vue` 单向数据流 `!=` 数据单向绑定

他和 `vue` 不同的地方：数据单向绑定的

- 【数据流例子说明：】

父组件 变量 传递给 子组件 子组件可以修改传递过来的变量吗？不可以，为什么，因为数据流是单向的，也就是说从父级传递过来的数据，子组件只能用，不能改。

- `react`【数据单向绑定】

也就是说，他不能自动的监听到数据的变化，不能自动实现 `vue` 中数据双向绑定
我们在 `react` 中要实现双向绑定，需要手动的设置 `setState`.

1. 数据单向绑定

2. 数据流--单向数据流

3. 基于函数和类运作的【函数组件和类组件】

## 官网的阅读【自学】

1. [中文官网](https://react.docschina.org/)、 [英文官网](https://reactjs.org/)

2. 文档 --> 核心概念【初级的基础知识】-->高级指引【中级】 -->HOOK【高级用法】

## 函数组件&基本布局

函数组件：就是一个函数返回一段 `dom` 片段

### 模块化开发【面试题】

- 好处：解耦，便于维护和开发
- 复用：哪儿用就给它引入到哪儿

### react 里，样式是没有作用域控制的

也就是说，你在任何地方写的样式都会影响到全局样式

- 所以样式类名需要额外的注意
- `jsincss` 【这是一种解决方案】 `module.css` 【官方配置好的一种解决方案】 `scss`【`css`预处理器,利用嵌套的语法避免冲突】

## 创建 react 项目

1. 创建项目前

如果你电脑上安装过 `create-react-app` 脚手架 需要卸载(新版本换了创建命令)

```js
npm unistall -g create-react-app
```

2. 创建项目命令

```js
npx create-react-app myappname
```

【myappname】:项目名称，不可以叫 `react`等（关键字） 也不许有驼峰命名

- `npx`

`npx` 是运行本地 `node_modules` 包里依赖的，如果没找到，就临时下载，使用完之后把下载的依赖删掉，用 `npx` 好处是保证了依赖版本的新鲜度【每次都是最新版本】，`npm` 先运行本地项目，如果没找到去本机全局里找

另一种创建(eject)

```js
npx create-react-app myappname
```

```js
git add --all
```

```js
git commit -m 'sss'
```

```js
yarn eject
```

```js
yarn
//或
npm i // 安装依赖（感觉此项多余）
```

安装`scss`

```js
yarn add node-sass-chokidar
```

```js
yarn add npm-run-all
```

修改`package.json`

```js
 "scripts": {
    "build-css": "node-sass-chokidar src/ -o src/",
    "watch-css": "npm run build-css && node-sass-chokidar src/ -o src/ --watch --recursive",
    "start-js": "node scripts/start.js",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "node scripts/build.js",
    "build": "npm-run-all build-css build-js",
    "test": "node scripts/test.js --env=jsdom"
  },
```

## 项目结构

```js
Project
  ├─── node_modules
  ├─── public
  │      ├── favicom.ico
  │      ├── index.html
  │      └── ...
  ├─── src
  │      ├── index.js
  │      ├── components
  │      └── ...
  ├─── .gitignore
  ├─── package.json
  └─── README.md
```

- `node_modules`:项目依赖包。它是我们项目启动时所需要运行的依赖

- `public` ：静态资源。是我们 `html` 模板所在的公共文件夹，如果你在 `public` 里面放了一个静态资源【`css` 文件，`js` 文件,图片，字体】，那么当打包的时候，这些文件不会被编译;
  - `favicom.ico`:网站标题的图标;
  - `index.html`:渲染的根页面（`root`）;
- `.gitignore`:`git`时忽略的文件。是一份告诉 `git` 提交的筛选名单,里面的`/node_modules` 就是告诉 `git` 存代码的时候把`node_modules` 目录过滤掉，并不提交到`github`.

- `package.json` ：是 `node_modules` 包依赖的清单目录，也就是说我 `npm` 安装的所有的依赖名字都会写入到 `package.json` 里去；还有它包含我们启动项目的脚本（`scitpts`里面的内容），打包项目等命令所在文件。`package.json`的作用：依赖的清单，命令的运行
  - 在`scripts`里，有个`eject` 命令，是为了讲打包配置暴露到项目里的（会在项目根目录里创建一个`config`文件夹），但是运行`eject`命令是不可逆的，慎用，我们可以用`customize-cra`第三方工具库

- `README.md` 项目说明文档，不要删除，为什么？因为在 GitHub `里开启静态服务也没，如果没有这个文件，你开启是不会成功的，而且，GitHub` 他也不会提示你缺这个文件，所以比较坑，一定不要删除

- `src` 是我们开发的源码所在文件夹 【最重要的：`/src`】
    1. `.svg` 矢量图：不会失真，但是色彩值对比 `jpg` 少，色彩不是很丰富
    2. `.svg` 我们前端完全可以手写出来。当然没人那么做，都是用软件生成，比如 ps
    3. `serviceWorker.js` 做离线缓存的，【离线==断网】在断网的情况下，我们的页面还是可以正常打开和访问的，不会出现 404,只是 `ajax` 功能失效。
    4. `src` 下默认的哪些可以删：除了 `index.js`（入口文件是src/index.js） 其他的都可以删。
  - 为什么删？

    因为我们要重构自己的项目结构在公司里开发项目，是有一个项目结构开发规范。

| 目录          | 功能                                 |
| :------------ | :----------------------------------- |
| `/src/`       | 项目主目录                           |
| `/view`       | 存放我们页面级的组件                 |
| `/components` | viwe 组件里公用的一些弹窗之类的      |
| `/api`        | 把整个项目里所有的 ajax 请求写在这   |
| `/tools`      | 转化时间，分割数组，功能性纯 js 文件 |
| `/assets`     | 静态资源                             |
| `/index.js`   | 入口文件 **位置不可变,必须的**       |

## 运行项目

1. 启动本地项目开发环境

```js
npm run start  或 yarn start
```

2. 打包 `src` 源码，变成原始的 `js` 和 `html`

```js
npm run build
```

还是需要使用服务端启动,如下：

```js
npm install -g serve
和
serve -s build
```

3. 释放我们项目**官方**配置文件，且该命令只能运行这一次，操作不可逆。

```js
npm run eject
```

`npm run eject` 一般是用不到的，官网提供了自定义配置接口，如果想改变项目里的官方配置，需要释放配置，再运行这个命令

- 【坑】  `npm run eject` 我们创建项目的时候，官方会给初始化一个 `git` 仓库，这时候使用的时候要先把代码提交到 `git` 里或者，把 `git` 仓库删掉,`react` 才会区分出来这个组件是原生标签还是自定义的

:::warning 注意
当我们拿到一个项目，一般来说都不会给你项目里带着 `node_modules` 包的，那就需要我们自己安装所有依赖。
:::

- 想要运行项目需要先执行以下命令：

```js
npm install 或者 yarn
```

当使用 `npm` 命令的时候，`npm` 就会读取 `package.json`，然后会把你依赖清单里的名字全部下载下来。

## 组件传值

1. 父传子：props
2. 子传父：调用父组件的函数
3. 跨级：context redux

## 其他

`react`引入的库

```js
// render
react-dom
//  路由
react-route-dom
react-route
// redux
react-Redux
redux
```
