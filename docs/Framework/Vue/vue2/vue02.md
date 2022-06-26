---
title: Vue & vue 以及基础语法
date: 2019-02-05
 
tags:
 - vue

---
## Vue & vue

- `Vue`是构造函数
- `vue`是实例
 创建`vue`实例对象,用来启动应用函数接收一个对象作为参数，这个对象可以称作选项对象(可以创建多个无数个`vue`实例，但不这么用)
- 创建`vue`实例来启动应用

## 选项对象

- `el(element)`:"CSS选择器"；//大多数用`ID`
- `data`:应用的数据，任意数据类型,以键值对的形式。//是一个对象
- `methods`:写方法
- `computed` :计算属性
- `template` :组件
···

## 小胡子语法（mustache）

- 语法：```{{内容}}```，插值表达式

双大括号 `{{}}`：小胡子语法/`mustache`语法 / 模板语法 / 插值表达式
将`VUE`的实例绑定到`DOM`上，有以下好处：

- 能解析变量，
- 计算
- 能使用`js`对象的方法

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
