---
title: JS Error对象(报错的本质)
date: 2019-01-12
categories:
 - 小知识
tags:
 - JavaScript
 - Error
---

:::tip 说明
js中[error的处理](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Error)
:::

- 错误的类型

Error：是所有错误的父类型

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
