---
title: 小程序 介绍和使用
date: 2019-04-23
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - 前端框架
 - 微信小程序
---
## 学习主要内容

1. 组件化
2. 模块
3. 各种渲染方式，显示隐藏，循环渲染
4. 路由 路由传参
5. 生命周期
6. 数据存储 微信中（全局数据，本地存储）
7. 如何在小程序里使用第三方包插件
8. 组件，页面，全局入口
9. 组件通信

## 目录结构

```sehll
├── app.js
├── app.json
├── app.wxss
├── pages
│   │── index
│   │   ├── index.wxml
│   │   ├── index.js
│   │   ├── index.json
│   │   └── index.wxss
│   └── logs
│       ├── logs.wxml
│       ├── logs.js
│       ├── logs.json
│       └── logs.wxss
└── utils
```

小程序包含一个描述整体程序的 `app` 和多个描述各自页面的 `page`。
一个小程序主体部分由三个文件组成，必须放在项目的根目录，如下

|    文件    | 必须  |      作用      |
| :--------: | :---: | :------------: |
|  `app.js`  |  是   |   小程序逻辑   |
| `app.json` |  是   | 小程序公共配置 |
| `app.wxss` |  否   | 小程序公共样式 |

### 小程序的三大组成部分

- `App` 方法用来注册全局入口
- `Pages` 方法用来注册页面
- `component` 方法用来注册组件--公共模板

## 入口 app

- `App`方法构造入口全局的组件
- 在整个小程序里只能有一个`App`实例
- 配置全局数据
- 路由拦截

每个小程序都需要在 `app.js` 中调用 `App` 方法注册小程序实例，绑定生命周期回调函数、错误监听和页面不存在监听函数等。

```js
// app.js
App({
  onLaunch (options) {
    // Do something initial when launch.
  },
  onShow (options) {
    // Do something when show.
  },
  onHide () {
    // Do something when hide.
  },
  onError (msg) {
    console.log(msg)
  },
  globalData: 'I am global data'
})
```

整个小程序只有一个 `App` 实例，是全部页面共享的。开发者可以通过 `getApp` 方法获取到全局唯一的 `App` 实例，获取`App`上的数据或调用开发者注册在 `App` 上的函数。

```js
// xxx.js
const appInstance = getApp()
console.log(appInstance.globalData) // I am global data
```

## 页面 pages

一个小程序页面由四个文件组成，分别是：

| 文件类型 | 必需 | 作用       |
| :------- | :--- | :--------- |
| js       | 是   | 页面逻辑   |
| wxml     | 是   | 页面结构   |
| json     | 否   | 页面配置   |
| wxss     | 否   | 页面样式表 |

- `page`方法构造页面组件
- 使用组件需要在`json`文件中的：

对于小程序中的每个页面，都需要在页面对应的 `js` 文件中进行注册，指定页面的初始数据、生命周期回调、事件处理函数等

```js
//index.js
Page({
    // 数据
  data: {
    text: "This is page data."
  },
  onLoad: function(options) {
    // 页面创建时执行
  },
  onShow: function() {
    // 页面出现在前台时执行
  },
  onReady: function() {
    // 页面首次渲染完毕时执行
  },
  onHide: function() {
    // 页面从前台变为后台时执行
  },
  onUnload: function() {
    // 页面销毁时执行
  },
  onPullDownRefresh: function() {
    // 触发下拉刷新时执行
  },
  onReachBottom: function() {
    // 页面触底时执行
  },
  onShareAppMessage: function () {
    // 页面被用户分享时执行
  },
  onPageScroll: function() {
    // 页面滚动时执行
  },
  onResize: function() {
    // 页面尺寸变化时执行
  },
  onTabItemTap(item) {
    // tab 点击时执行
    console.log(item.index)
    console.log(item.pagePath)
    console.log(item.text)
  },
  // 事件响应函数
  viewTap: function() {
    this.setData({
      text: 'Set some data for updating view.'
    }, function() {
      // this is setData callback
    })
  },
  // 自由数据
  customData: {
    hi: 'MINA'
  }
})
```

### 全局配置

未指定 `entryPagePath` 时，数组的第一项代表小程序的初始页面（首页）。

## 组件

```js
"usingComponents": {
    "组件名": "../../components/swiper/swiper"
},
```

获取组件传过来的参数，需要点`detail`才能拿到具体的值

- `component`方法构造组件

### 内置的指令

1. `wx:for`
遍历渲染

- 默认在当前作用域里产生`index`和`item`

```wxml
 wx:for-index = ""  //给index别名
 wx:for-item = ""   //给item别名
```

2. `wx:if`
 渲染与销毁（类似`vue`的`v-if`）

- `wx:elif`
- `wx:else`

4. `wx:hidden`
显示与隐藏（类似`v-show`）

## 事件系统

- 绑定事件`bind`

- 绑定自定义事件`bind:eventName`

- 触发自定义事件`triggerEvent('eventName',params）`

- 禁止冒泡：`catch:eventName`

- 互斥绑定：`mut-bind:eventName`

## 模板和引入方式

### template & inculode

1. `template` 加`name` 取名
2. `template` 必须加`is` 我们要使用哪个模板，`data`属性用来传参
3. `import` 标签，用来加载外部 `wxml` 文件的 `template`
4. `include`标签 加载外部的`wxml`文件，除了`template`标签里面的内容，其他内容会全部引入进来
