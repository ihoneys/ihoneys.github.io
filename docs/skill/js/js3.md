---
title: JS 作用域、作用域链
date: 2019-12-23
sidebar: "auto"
categories:
  - 前端基础
tags:
  - JavaScript
---

## 作用域：

作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量进行变量查找**。（**换句话说，作用域决定了代码区块中变量和其他资源的可见性**）**

```javascript
function outFun2() {
  var inVariable = "内层变量2";
}
outFun2(); //要先执行这个函数，否则根本不知道里面是啥
console.log(inVariable); // Uncaught ReferenceError: inVariable is not defined
```

从上面的例子我们体会到作用域的概念，变量 inVariable 在全局作用域中没有声明，所以在全局作用域中取值会报错。我们这可以这样理解作用域：**作用域好比一个独立的地盘，让变量不会泄露，暴露出去，也就是说作用域能起到与外界一种隔离的作用。**
**ES6 之前 JavaScript 没有块级作用域,只有全局作用域和函数作用域**。ES6 的到来，为我们提供了‘块级作用域’,可通过新增命令 let 和 const 来体现

### 全局作用域，函数作用域

> 最外层定义的变量和函数都拥有全局作用域。

```javascript
const a = "global"; // 最外层变量
function side() {
  // 最外层函数变量
}
var outVariable = "我是最外层变量"; //最外层变量
function outFun() {
  //最外层函数
  var inVariable = "内层变量";
  function innerFun() {
    //内层函数
    console.log(inVariable);
  }
  innerFun();
}
console.log(outVariable); //我是最外层变量
outFun(); //内层变量
console.log(inVariable); //inVariable is not defined
innerFun(); //innerFun is not defined
```

- 所有末定义直接赋值的变量自动声明为拥有全局作用域。

```javascript
function outFun2() {
  variable = "未定义直接赋值的变量";
  var inVariable2 = "内层变量2";
}
outFun2(); //要先执行这个函数，否则根本不知道里面是啥
console.log(variable); //未定义直接赋值的变量
console.log(inVariable2); //inVariable2 is not defined
```

- 所有 window 对象的属性拥有全局作用域（window.location、window.top 等）

全局作用域通常容易影响命名的冲突覆盖。

```javascript
var data = {
  name: "global",
};
var data = {
  value: "window",
};
// 会引起变量覆盖
```

因此会有 ES6 中的 const、let。

这里我们可以聊到 jquery 源码中的所有代码都回放在 `(function(){....})()`中 ,因为放在里面的变量不会泄露，暴露出去，不会污染外面的变量。不会对其他 js 脚本造成影响，这是函数作用域的一个提现。

### 函数作用域：

> 是指声明在函数内部的变量，和全局作用域相反，局部作用域只能在固定的一段代码片段内可访问到。

值得注意的是：**块语句（大括号“｛｝”中间的语句），如 if 和 switch 条件语句或 for 和 while 循环语句，不像函数，它们不会创建一个新的作用域**。在块语句中定义的变量将保留在它们已经存在的作用域中。

```javascript
if (true) {
  // 'if' 条件语句块不会创建一个新的作用域
  var name = "Hammad"; // name 依然在全局作用域中
}
console.log(name); // logs 'Hammad'
```

### 块级作用域（let、const）

块级作用域可通过新增命令 let 和 const 声明，所声明的变量在指定块的作用域外无法被访问。块级作用域在如下情况被创建：

1. 在一个函数内部
2. 在一个代码块（由一对花括号包裹）内部

let 声明的语法与 var 的语法一致。你基本上可以用 let 来代替 var 进行变量声明，但会将变量的作用域限制在当前代码块中。块级作用域有以下几个特点：

- let 不会造成变量提升到代码块顶部
- let 会造成暂时性死区
- let 禁止重复声明

```javascript
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```

变量 i 是 var 命令声明的，在全局范围内都有效，所以全局只有一个变量 i，每一次循环，变量的 i 的值都回发生改变，而循环里 console.log(i)里面的 i 指向的是全局的 i，不是 for 循环里面的 i，所以先执行 for 循环完，再调用 `a[6]()`;  时 i 的值已经是 10 了。

如果使用 let，声明的变量仅在块级作用域内有效，最后输出的是 6。

```js
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```

变量 i 是 let 声明的，当前的 i 只在本轮循环有效，所以每一次循环的 i 其实都是一个新的变量，所以最后输出的是 6。你可能会问，如果每一轮循环的变量 i 都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量 i 时，就在上一轮循环的基础上进行计算。
另外，for 循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

```javascript
for (let i = 0; i < 3; i++) {
  let i = "abc";
  console.log(i);
}
// abc
// abc
// abc
```

上面代码正确运行，输出了 3 次 abc。这表明函数内部的变量 i 与循环变量 i 不在同一个作用域，有各自单独的作用域。

## 作用域链

<!-- #### [内容链接](https://juejin.im/post/5c8290455188257e5d0ec64f#heading-8) -->

### 1. 自由变量

> 首先认识下什么是自由变量，就比如说在函数中 console.log(a)，而 a 在函数中当前作用域中没有定义，这时候的 a 就是一个自由变量

```javascript
var a = 100;
function fn() {
  var b = 200;
  console.log(a); // 这里的a在这里就是一个自由变量
  console.log(b);
}
fn();
```

### 2.什么是作用域链

> 首先当函数创建的时候就形成了作用域链，作用域链用来当做查找变量的索引，首先会去当前的父级作用域中查找，如果父级没有找不到，再一层层向上查找，直到找到全局作用域还没有找到，解释器会返回 undefined 结果。这种一层层的关系就叫作用域链

```javascript
var a = 100;
function F1() {
  var b = 200;
  function F2() {
    var c = 300;
    console.log(a); // 自由变量，顺作用域链向父作用域找
    console.log(b); // 自由变量，顺作用域链向父作用域找
    console.log(c); // 本作用域的变量
  }
  F2();
}
F1();
```

```javascript
var x = 10;
function fn() {
  console.log(x);
}
function show(f) {
  var x = 20(function () {
    f(); //10，而不是20
  })();
}
show(fn);
```

在 fn 函数中，取自由变量 x 的值时，要到哪个作用域中取？——要到创建 fn 函数的那个作用域中取，**无论 fn 函数将在哪里调用**。
所以，不要在用以上说法了。相比而言，用这句话描述会更加贴切:**要到创建这个函数的那个域”。 作用域中取值,这里强调的是“创建”，而不是“调用”**，切记切记——其实这就是所谓的"静态作用域"
