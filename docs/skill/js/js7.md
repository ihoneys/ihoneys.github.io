---
title: JS window 对象
date: 2019-12-21
categories:
- 前端基础
tags:
- JavaScript
---

## window 对象
在浏览器中，window对象有双重角色，它既是通过JS访问浏览器窗口的一个接口。又是ES规定的Global对象。这意味着在网页中定义的任何一个对象、变量和函数，都以window作为其Global对象，因此有权访问 parseInt（）等方法。

### 全局作用域
由于 window对象同时扮演着ES中的Global对象的角色，因此所有在全局作用域中声明的变量，函数都会变成window对象的属性和方法。
```js
var age = 29
function sayAge() {
    console.log(this.age)
}
console.log(window.age) // 29
sayAge()    // 29
window.sayAge() // 29
```
:::tip 重点
敲重点：window Mobile 平台的 IE浏览器不允许通过 window.property = value 之类的形式，直接在 window 对象上创建新的属性或方法，可是，在全局作用域中声明的所有变量和函数，照样会变成 window对象的成员。
:::


### 窗口位置
用来确定和修改 window 对象位置的属性和方法很多。IE、Chrome都提供了 `screenLeft` 和 `screenTop` 属性，分别用于表示窗口相对于屏幕左边和上边的位置。

:::tip 重点
敲重点：获取位置的方法在每个浏览器中获取的值也并不一样，需要针对特定的浏览器做特定的判断。
:::


### 窗口的大小
每个不同的浏览器都提供了 `innerWidth` `、innerHeight` `、outerWidth和outerHeight` 。但是在不同的浏览器中，它们获取的值边界也是不一样的。


### 导航和打开窗口
我们可以通过 window.open() 打开一个特定的URL，也可以打开一个新的浏览器窗口。这个方法可以接受四个参数：需要加载的URL、窗口目标、特性字符串和一个表示新页面是否取代浏览器历史记录中当前加载页面的布尔值。通常只需要一个URL参数即可。


### 间歇调用和超时调用

因为 JS是单线程语言，但它允许通过设置超时值和间歇时间值来调度代码在特定的时刻执行。前者是在指定的时间后执行代码，而后者则是每个指定的时间执行一次代码。方法如下

```js
setTimeout('方法名','延迟执行时间')
```

调用setTimeout之后，该方法会返回一个数值ID，表示超时调用。这个ID就是这个延迟执行的唯一标识符，可以通过它来取消超时调用。
```js
clearTimeout(timeoutId)
```

复制代码超时调用的代码都是在全局作用域中执行的，因此函数中this的值通常会指向window对象。

```js
setInterval('方法名','间个时间')

clearInterval(intervalId)
```

### location对象

location 是最有用的BOM对象之一，它提供了与当前窗口中加载的文档有关的信息，还提供了一些导航功能。常用的就是用来打开新页面等。 参数如下：

| 属性名 | 说明
| :--------: | :--------
|   hash  |   返回URL中的hash #在后面，如果URL中没有则返回空字符串
|  host   |   返回服务器端口号
|   hostname   |  返回不带端口号的服务器名称
|  href  |  返回当前页面的URL
|  pathname   |  	返回URL中的目录或文件 
|  port   |  返回URL中指定的端口号
|  protocol  |  返回页面使用的协议
|  search  |  返回URL的查询字符串   


### history 对象

保存着用户上网的历史记录，从窗口被打开的那一刻算起。因为history是window对象的属性，因此每个浏览器窗口、每个标签乃至每个框架，都有自己的history对象与特定的window对象关联。

| 属性名 | 说明
| :--------: | :--------
|   go()  |   可以在用户的历史记录中任意跳转。可以向前或向后。接受一个参数，表示向后或向前跳转的页面数的一个整数值。负数表示向后跳转，正数表示向前跳转。
|  back()   |   可以模仿浏览器的后退操作
|   forward()   |  模仿浏览器的前进按钮

