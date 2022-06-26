---
title: JS 常用原生操作
date: 2019-12-21
 
categories:
- 前端基础
tags:
- JavaScript
publish: true
sticky: 2
# 打赏
showSponsor: true
---


### 原生js给DOM元素添加一个类名

- 方法一：

使用`DOM.setAttribute("class","类名")`

- 方法二：

`DOM.classList.add("类名")`

```js
    var Demo = document.getElementById("demo");
    Demo.setAttribute("class", "demo");
    Demo.setAttribute("class", "demo2"); //会覆盖替换 最终只有 "class=demo2"
   //
    Demo.classList.add("demo");
    Demo.classList.add("demo2"); //最终会有 "class= demo demo2 "
    console.log(Demo);
```

- 区别
方法一 给`DOM`元素添加类名会覆盖原有的类名

方法二 可以给`DOM`元素添加一个类名后 还可以在继续给`DOM`元素添加新的类名 并且不会覆盖已有的类名

### 原生js 类名的操作

- 原生方法
  `DOM.setAttribute("class","demo")`
- 操作类名（`HTML5`新增`classList`）
  - `classList.add( newClassName )`；添加新的类名，如已经存在，取消添加
  - `classList.contains( oldClassName )`;确定元素中是否包含指定的类名，返回值为`true` 、`false`；
  - `classList.remove( oldClassName )`；移除已经存在的类名;
  - `classList.toggle( className )`；如果`classList`中存在给定的值，删除它，否则，添加它(自动开关灯)；
  - `classList.replace( oldClassName，newClassName )`；类名替换

\* 支持`classList`属性的浏览器有`Firefox3.6+` 和 `chrome`;

