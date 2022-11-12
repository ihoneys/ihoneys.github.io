---
title: Promise 前言
date: 2019-01-12
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - Promise
---

## 一、区别实例对象和函数对象

- `.`的左边都是对象
- `()`的左边都是函数
- `.`的左边既是函数又是对象的叫函数对象
- 函数对象，将一个函数作为对象使用时，就是函数对象。一般是在调用方法或属性时

```js
function Fn(){ // Fn函数
}
const fn = new Fn // Fn是构造函数，fn是实例对象（简称对象）
console.log(Fn.prototype) // Fn 是函数对象（Fn是函数，但在这里作为对象使用了，调用了Fn这个对象的prototype属性）
```

## 二、两种类型的回调函数

1. 同步回调

   ​ 理解：立即执行，完全执行完了才结束，不会放入回调队列种

   ​ 例子：数据遍历相关的回调函数   /  `promise`的`excutor`函数

2. 异步回调

   ​ 理解：不会立即执行，会放入回调队列中，将来执行

   ​ 例子：定时器回调  /  `ajax`回调  /  `promise`的成功 | 失败的回调

   ​ `setTimeout` 定时器，会放入异步队列中，等所有同步任务完成以后在再执行

## 三、js中[error的处理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)

- 错误的类型

     `Error`：是所有错误的父类型

ReferenceError(引用错误)： 引用的变量不存在
```js
// 输出不存在的变量
console.log(a); //输出 Uncaught a is not defined
Uncaught // 表示未捕获error，余下的代码没有执行
```
TypeError(类型错误)： 数据类型不正确的错误
```js
let b = null;
console.log(b.xxx); // 输出 Uncaught TypeError: Cannot read property 'xxx' of null
```
```js
let b= {};
b.xxx()  //输出 Uncaught TypeError: b.xxx is not a function
// 以上都是类型错误
```
RangeError： 数据值不在其所允许的范围
```js
 function Fn() {
       Fn()
    }
 Fn() // 递归调用，死循环
 // 输出 Uncaught RangeError: Maximum call stack size exceeded
```
SyntaxError： 语法错误
```js
 const a = """" //输出 Uncaught SyntaxError: Unexpected string
```

- 错误处理

捕获错误：`try ... catch`

```js
try {
   let b
   console.log(b.xxx);
} catch (error) {
   console.log(error);
   console.log(error.message);
   console.log(error.stack);
}
console.log('错误以后继续执行'); //错误被捕获了
```

抛出错误: `throw error`

```js
function something(params) {
      if (Date.now() % 2 === 1) {
         console.log('当前时间为奇数，可以执行任务');
      } else { //如果时间是偶数，则抛出异常，有调用类处理。
         throw new Error('当前时间为偶数，无法执行')
      }
}
try {
      something()
} catch (error) {
      alert(error.message)
}
```

- 错误对象

message属性： 错误相关信息

stach属性： 函数调用栈记录信息
