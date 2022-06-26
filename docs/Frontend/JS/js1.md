---
title: JS 简介
date: 2019-12-21
 
categories:
 - 前端基础
tags:
 - JavaScript

---

[javascript详解](https://wangdoc.com/javascript/)

[阮一峰javascript](https://javascript.ruanyifeng.com/)

关注公众号，送新版`JavaScrit`高级程序设计（第四版）

## javascript历史

:::details javascript历史
JavaScript 是面向 Web 的编程语言，获得了所有网页浏览器的支持，是目前使用最广泛的脚本编程语言之一，也是网页设计和 Web 应用必须掌握的基本工具。 JavaScript 历史 1995 年 2 月，Netscape 公司发布 Netscape Navigator 2 浏览器，并在这个浏览器中免费提供了一个开发工具——LiveScript。由于当时 Java 比较流行，Netscape 便把 LiveScript 改名为 JavaScript，这也是最初的 JavaScript 1.0 版本。

由于 JavaScript 1.0 很受欢迎，Netscape 在 Netscape Navigator 3 中又发布了 JavaScript 1.1 版本。不久，微软在 Internet Explorer 3 中也加入了脚本编程功能。为了避免与 Netscape 的 JavaScript 产生纠纷，微软特意将其命名为 JScript。

1997 年，欧洲计算机制造商协会（ECMA）以 JavaScript 1.1 为基础制订了脚本语言标准——ECMA-262，并命名为 ECMAScript。

1998 年，国际标准化组织和国际电工委员会（ISO/IEC）采用了 ECMAScript 标准（即 ISO/IEC-16262）。自此，浏览器厂商就以 ECMAScript 作为各自 JavaScript 实现的规范标准。JavaScript 正式从各自为政走向了规范统一。 ECMAScript 起源 1997 年，ECMA 发布 262 号标准文件（ECMA-262）的第一版，规定了脚本语言的实现标准，并将这种语言命名为 ECMAScript。这个版本就是 ECMAScript 1.0 版。

之所以不叫 JavaScript，主要有以下两个原因： 商标限制。Java 是 Sun 公司的商标，根据授权协议，只有 Netscape 公司可以合法使用 JavaScript 这个名字，而且 JavaScript 己经被 Netscape 公司注册为商标。 体现公益性。该标准的制订者是 ECMA 组织，而不是 Netscape 公司，这样有利于确保规范的开放性和中立性。

简单概括，ECMAScript 是 JavaScript 语言的规范标准，JavaScript 是 ECMAScript 的一种实现。注意，这两个词在一般语境中是可以互换的。 EECMAScript 版本 1998 年 6 月，ECMAScript 2.0 版发布。

1999 年 12 月，ECMAScript 3.0 版发布，并成为 JavaScript 的通用标准，获得广泛支持。

2007 年 10 月，ECMAScript 4.0 版草案发布，对 3.0 版做了大幅升级。由于 4.0 版的目标过于激进，各方对于是否通过这个标准产生了严重分歧。

2008 年 7月，ECMA 中止 ECMAScript 4.0 的开发，将其中涉及现有功能改善的一小部分发布为 ECMAScript 3.1。不久，ECMAScript 3.1 改名为 ECMAScript 5。

2009 年 12 月，ECMAScript 5.0 版正式发布。

2011 年 6 月，ECMAScript 5.1 版发布，并且成为 ISO 国际标准（ISO/IEC 16262:2011）。

2013 年 12 月，ECMAScript 6 版草案发布。

2015 年 6 月，ECMAScript 6 发布正式版本，并更名为 ECMAScript 2015 。Mozilla 在这个标准的基础上推出了 JavaScript 2.0。

从此以后，JavaScript 开始以年份命名，新版本将按照 “ECMAScript+年份” 的形式发布。目前最新 版本为 ECMAScript 2018，于 2018 年 7 月正式发布。 浏览器支持 目前 5 大主流浏览器都支持 ECMAScript 5，具体说明如下： Opera 11.60+ IE 9+ Firefox 4+ Safari 5.1+ Chrome 13+
:::

## javascript 输出

- `document.write` 文档写入
`document` 文档 `write` 写入

- `console.log` 控制台输出

```js
console.log('hello world');
```

- `alert` 弹窗输出内容 有一个确定按钮，弹出的值都是字符串(用toString()转过了)

```js
alert('hello world');
alert(12)
```

- `confirm`(不常用) 确认弹窗 有确认和取消按钮 点击确认按钮会返回 `true` 点击取消按钮会返回 `fasle`.

```js
if (confirm('我是好人')) {
  alert('是的 你是个好人');
} else {
  alert('不是 你不是好人');
}
```

- `prompt`(不常用) 显示可提示用户进行输入的对话框

```js
var name = prompt('请输入姓名');
if (name == 'lilei') {
  alert('输入正确');
} else {
  console.log('输入错误，请重新输入');
}
```

语法

```js
result = window.prompt(text, value);
```

`result` 用来存储用户输入文字的字符串，或者是 `null`。

`text` 用来提示用户输入文字的字符串，如果没有任何提示内容，该参数可以省略不写。

`value` 文本输入框中的默认值，该参数也可以省略不写。不过在`Internet Explorer 7` 和 8 中，省略该参数会导致输入框中显示默认值`"undefined"`。

```js
var sign = prompt("你是什么星座的?");
if (sign == "天蝎座"){
   alert("哇! 我也是天蝎座的耶!");
}
// 有多种使用prompt方法的方式
var sign = window.prompt(); // 打开空的提示窗口
var sign = prompt();       // 打开空的提示窗口
var sign = window.prompt('你觉得很幸运吗?'); // 打开显示提示文本为"你觉得很幸运吗?"的提示窗口
var sign = window.prompt('你觉得很幸运吗?','是的'); // 打开显示提示文本为"你觉得很幸运吗?"并且输入框默认值为"是的"的提示窗口
```

```js
// 这里讲解prompt
// 用一个变量来存放我输入的内容
var name  =  prompt('请输入姓名')
if(name ==10){
   alert('输入正确1')
}else{
 alert('输入错误1')
}
if(name>=10){
 alert('输入正确2')
}else{
 alert('输入错误3')
}
if(name == 'lilei'){
   alert('输入正确3')
}else{
  console.log('输入错误3，请重新输入')
}
// 如果输入的值 大于等于10显示输入正确
// 如果输入的值等于10 显示输入正确

// if(prompt('请输入姓名')){
//   console.log(true)
// }else{
//  console.log(false)
// }
```
