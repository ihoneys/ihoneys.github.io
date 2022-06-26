---
title: JS 作用域和声明
date: 2019-12-21
 
categories:
- 前端基础
tags:
- JavaScript


---

## 作用域

全局变量(班费) 都可以访问
局部变量(自己的钱) 只在函数内部可以访问 在函数内部使用 var 声明的是局部变量

## let const

- var

```js
// 局部变量和全局变量
var  c = 1  //全部变量
function a(){
    var money = 100  //局部变量  外部无法访问
    console.log(money,'局部变量')
    dd = 1 // 全局变量
}
a()
console.log('变量',c,dd)
```

- var let 的区别

1. 局部作用域里，`var` 是函数作用域，`let`是块作用域
2. `var` 可以多次声明一个变量名，`let`不可以重复声明
3. `let`不会再作用域里被提升，`var`会提升
4. 再全局作用域中，`let`声明的变量不会成为`window`的属性，`var`声明的是`window`的属性

- const

和`let`基本相同，但是声明时必须同时赋值

## 模板字面量

```js
//保持格式一模一样
    let myMultiLineString = 'first line\nsecond line';
    let myMultiLineTemplateLiteral = ` first line
second line `;// 换行也不影响
    console.log(myMultiLineString); // first line // second line"
    console.log(myMultiLineTemplateLiteral); // first line // second line
```
