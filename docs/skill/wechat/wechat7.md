---
title: 小程序 数据存储
date: 2019-04-20
sidebar: 'auto'
tags:
 - 微信小程序

---

## 小程序存储数据方式

小程序中存储数据的地方

1. 全局数据:`globalData`

2. 本地数据:`wx.setStorageSync('logs', logs)`

3. 页面数据:`pages`中的`data`里.(在不传递的情况下，只能在当前页使用)

## 全局数据 `globalData`

`globalData` 属于小程序全局的共享数据对象

1. 设置: 写在`app.js` 全局文件中

2. 使用: 一般在`pages`页面中，调用`getApp()`，获取小程序实例对象，用该对象`.globalData`来使用

:::warning 注意:
`globalData`就是你定义的数据的键名，可以自定;

这个`global`书存储在内存中，开发阶段页面刷新会丢失.
:::

设置数据：

```js
// App.js
App({
  onLaunch (options) {
    console.log('App onLaunch')
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
  globalData: 1, //设置全局数据
// globalData: {a:1}
})
```

使用或修改：

```js
// pages/post/post.js
// 在页面中获取全局数据
const text =getApp()
console.log(text.globalData)
let a =text.globalData
```

## 本地数据存储

### storage  微信小程序的本地存储

- 存数据用`setStorageSync` ：同步存储
- 存数据用`setStorage` ：异步存储
- 读取数据`getStorageSync`同步取值
- 读取数据`getStorage`：异步取值
- 清除一条数据`wx.removeStorage({key:'key'})`
- 清除所有数据`wx.clearStorage()`

## 本地数据增删改查 `Storage`

- 设置数据
  - `wx.setStorage(Object object)`
    - `key`:本地缓存中指定的 `key`;
    - `data`:需要存储的内容。只支持原生类型、`Date`、及能够通过`JSON.stringify`序列化的对象.
  - 同步 `wx.setStorageSync(string key, any data)`
    - `string key`:本地缓存中指定的 `key`;
    - `any data`:需要存储的内容。只支持原生类型、`Date`、及能够通过`JSON.stringify`序列化的对象.

```js
    wx.setStorage({
        key:"key",
        data:"value"
    })
    // 同步版本
    wx.setStorageSync('key', 1)
```

- 修改数据：给相同的`key`再设置一个值

```js
wx.setStorage({
    key:"key",
    data:1
})
wx.setStorage({
    key:"key",
    data:2
})
// 同步版本
wx.setStorageSync('key', 1)
wx.setStorageSync('key', 2)
```

- 获取数据
  - `wx.getStorage(key,callback)`
    - `key`:本地缓存中指定的 `key`
    - `callback`:接口调用成功的回调函数
  - 同步 `any wx.getStorageSync(string key)`
    - `string key`:本地缓存中指定的 `key`
    - `any data` `:key`对应的内容

```js
wx.getStorage({
  key: 'key',
  success (res) {
      console.log(res.data)
  }
})
//同步版本
wx.getStorageSync('key')
```

- 清除一条数据
  - `wx.removeStorage({key:'key'})`
    - `key`:本地缓存中指定的 `key`
  - 同步 `wx.removeStorageSync( key)`
    - `key`:本地缓存中指定的 `key`

```js
wx.removeStorage({key: 'key'})
wx.removeStorage({
  key: 'key',
  success (res) {
    console.log(res)
  }
})
// 同步
wx.removeStorageSync('key')
```

- 清除所有数据
  - `wx.clearStorage()`
  - 同步 `wx.clearStorageSync()`

```js
wx.clearStorage()
// 同步版本
wx.clearStorageSync()
```
