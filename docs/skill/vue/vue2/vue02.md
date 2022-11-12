---
title: vue 中的 watch 和 computed
date: 2019-02-05
sidebar: 'auto'
tags:
 - vue
---

# vue 中的 watch 和 computed

## computed

```js
computed:{
  msg(){
    console.log(this.msg + "123")
  }
}
```

## watch

```js
// 监听
watch：{
  msg:function(){
    console.log(oldval,newold)
  }
}
// 以下是深度监听
watch: {
  "msg.name": function (oldval, newval) {
    console.log(oldval,newval )
  },
},
// 或者
watch: {
  msg: {
    handler: function ( oldval,newval) {
      console.log(oldval.name,newval.name )
    },
    deep: true
  }
},
```

- 区别
  - `computed`
    - 有缓存 ，
    - 有两个函数 `set(){} get(){}`
    - 同步代码
  - `watch`
    - 没有缓存，新旧值替换
    - 可以执行异步代码
    - 监听对象需要`deep` 且拿不到 `oldval`

## $nextTick

[原理](https://github.com/answershuto/learnVue/blob/master/docs/Vue.js%E5%BC%82%E6%AD%A5%E6%9B%B4%E6%96%B0DOM%E7%AD%96%E7%95%A5%E5%8F%8AnextTick.MarkDown#nexttick)
