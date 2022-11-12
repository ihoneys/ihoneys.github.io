---
title: 手写Array数组方法
date: 2019-12-21
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - JavaScript
publish: true
# 打赏
showSponsor: true
---

- 手写`map`方法

```js
Array.prototype.mymap = function (cb) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        newArr.push(cb(this[i], i))
    }
    return newArr
}
```

- 手写`filter`方法

```js
Array.prototype.myfilter = function (cb) {
    let newArr = []
    for (let i = 0; i < this.length; i++) {
        if (cd(this[i], i)) {
            newArr.push(this[i])
        }
    }
    return newArr
}
```

```js
//cb 应该是一个函数
Array.prototype.myfilter = function (cb) {
  let newArr = []; //定义一个新数组  用来接收返回值为真的项
  //this 就是当前调用的数组  arr
  //需要拿出arr的每一项出来 那我们就需要遍历数组
  for (let i = 0; i < this.length; i++) {
  //item 应该是数组的每一项
    if (cb(this[i], i)) { //返回true 就放进新数组
   newArr.push(this[i])
    }
  }
 return newArr
};
```
