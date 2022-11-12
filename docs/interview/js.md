---
title: JavaScript
subtitle: JavaScript 相关面试题 # 博客副标题（可选）
date: 2022-04-01
sidebar: 'auto'
categories:
 - 面试题
tags:
 - JavaScript
 - 面试题
---

## 执行上下文？

执行上下文就是**当前 JavaScript 代码被解析和执行时存在的环境。**

执行上下文分为 **全局执行上下文**。不在函数内的代码都位于全局执行上下文之中。**函数执行上下文：**被调用的时候就会被创建。**eval函数执行上下文：**运行在 eval 函数中的代码也会或者自己的执行上下文。

执行上下文也有自己的生命周期：创建阶段 => 执行阶段 =>回收阶段。

**创建阶段：**创建变量对象，比如函数的 arguments 参数对象；创建自己的作用域链，就比如说，函数内部使用了变量值，会通过作用域查找到变量值得所以在地方；还又就是创建 this，也分为多种情况，谁调用 this 就指向谁。

**执行阶段：**执行变量赋值，代码执行。

**回收阶段：**执行上下文出栈，等待虚拟机回收。

## 原型，原型链

- 原型：每一个 JavaScript 对象在创建的时候就会与之对应关联另一个对象，这个对象就是我们所说的原型。每一个对象都会从原型继承属性，其实就是`prototype`。比如说定义了一个 obj 那么会关联 `Object` 对象。继承了 Object 对象原型属性，因此我们创建的 obj 对象就有了 `Object`原型上面的方法。
- 原型链：由相互关联的原型组成的链状结构就是原型链。

## 闭包？

在某个内部函数的执行上下文被创建时。会被父级函数的**活动对象**添加到内部函数`[[scope]]`中，形成作用域。所以即使父级函数的执行上下文被销毁，但是因为其**活动对象**还是实际储存在内存中可被内部函数访问到，从而实现了闭包。

## 垃圾回收机制

[参考地址](https://juejin.cn/post/6981588276356317214)

有两种回收策略：

- **标记清除：**
- **引用计数：**

## let、var和const的区别？如果希望const定义的对象的属性也不能被修改该怎么做？

实现思路：

由于 ES5 环境没有 block 的概念，所以无法百分百实现 const，只能挂在到某个对象上，要么全局 window，要么就是自定义一个 object 当容器。

```js
const _const = function (data, value) {
  window.data = value
  Object.defineProperty(window, data, {
    enumerable: false,
    configurable: false,
    get: function () {
      return value
    },
    set: function (data) {
      if (data !== value) {
        throw new TypeError('Assignment to constant variable.')
      } else {
        return value
      }
    }
  })
}
_const('a', 2)
console.log(a);
for (let key in window) {
  if (key === 'a') { // 不能枚举，所以未执行
    console.log(window[item])
  }
}
a = 3 // error
```

## 如何使用 var 实现 let ？

```js
for (var z = 0; z < 4; z++) {
  (function f(a) {
    setTimeout(function () {
      console.log("var实现let", a);
    }, 1000);
  })(z);
}
```

使用 匿名函数，每次传入 z 是一个新的变量，a 参数会默认被 let a = z，生成局部变量。

## Map 和 Set 的区别，Map 和 Object 的区别？

- Map 和 Set 的区别？

Set 类似于数组成员唯一，没有重复的值。一维数组上，我们可以用它来去重。

Map 对象是键值对的集合，和 JSON 对象类似，但是 key 不仅可以是字符串还可以是其他各种类型的值包括对象都可以成为Map的键。

- Map 和 Object 的区别？

Object：本质上是 Hash 结构键值对集合，只能用字符串，数字，symbol等简单数据类型作为键。

Map： Map 类继承了Object，并对 Object 功能做了一些扩展，Map 键可以是任意数据类型。

- Map中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
- Map的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
- Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

**同名相撞：**

我们知道，对象其实就是在堆开辟了一块内存，其实Map的键存的就是这块内存的地址。只要地址不一样，就是两个不同的键，这就解决了同名属性的碰撞问题，而传统的Object显然做不到这一点。

```js
let m = new Map()
m.set({},1)
m.set({},2)
m.set({},3) //每一次都是开辟新的堆内存作为键
console.log(m) //Map { {} => 1, {} => 2, {} => 3 }

let o = {}
o['a'] = 1
o['a'] = 2
o['a'] = 3

console.log(o) //{ a: 3 }
```

**可迭代：**

Map 有迭代器，可以直接 for...of 循环遍历。而 Object 不行.

![https://cdn.nlark.com/yuque/0/2022/png/1535745/1645710543331-3efeb9ec-4823-45d3-ba5c-d28c721a1082.png](https://cdn.nlark.com/yuque/0/2022/png/1535745/1645710543331-3efeb9ec-4823-45d3-ba5c-d28c721a1082.png)

Object 打印的是 undefined。

**长度：**

Map可以直接拿到长度，而Object不行。

```js
let m = new Map()
m.set({a:1}, 'hello,world')//dom对象作为键
m.set(['username'],'jack')//数组作为键
m.set(true,1)//boolean类型作为键

console.log(m.size)//3
```

**可展开：**

Map 可以通过 ES6 `...` 扩展运算符展开成数组，object 不能。

**有序性：**

填入Map的元素，会保持原有的顺序，而Object无法做到。

```js
let cont = document.getElementById('cont')
let m = new Map()
m.set(cont, 'hello,world')//dom对象作为键
m.set(['username'],'jack')//数组作为键
m.set(true,1)//boolean类型作为键
//可以保持原有顺序打印
for(let [key,value] of m){
  console.log(key)

}

let obj = new Object()
obj['jack'] =  1
obj[0] = 2
obj[5] = 3
obj['tom'] = 4
//填入Object的元素key是自动按照字符串排序的，数字排在前面
for(let k in obj){
  console.log(k) // 0 5 jack tom
}

```

[Map 和 Object 的区别参考地址](https://www.jianshu.com/p/94cf51649517)

## 堆（head）和栈（stack）的区别

栈是**自动分配**相对**固定大小**的内存空间，并由系**统自动释放，**栈**数据结构**遵循**FILO**（first in last out）**先进后出后进先出**的原则。

**堆(heap)：**是堆内存的简称，堆是**动态分配**内存，**内存大小不固定**，也**不会自动释放，**堆**数据结构**是一种无序的树状结构，同时它还满足key-value键值对的存储方式；我们只用知道key名，就能通过key查找到对应的value。

**栈的特点：**开口向上、速度快,容量小**；堆的特点**：速度稍慢、容量比较大；

[参考地址](https://juejin.cn/post/6854573215327617031)

## instanceof 原理

[参考地址](https://juejin.cn/post/6844903613584654344#heading-1)

**null instanceof Obect ？**

**null instanceof null ？**

**isNaN ？**

## 遍历对象的方法？

- for... in
- for...of
- Object.keys/entries/values
- Obejct.getOwnPropertyNames - 拿到所有对象的 key 并返回数组(不包含symbol 属性)
- Object.getOwnPropertySymbols - 拿到对象 key 为 symbol 的键集合数组。
- Reflect.ownKeys() - 同 getOwnPropertyNames 一样。

## 遍历数组方法？

- for
- for...of/in
- forEach
- map
- filter
- reduce
- reduceRight
- every
- some
- find/findIndex
- keys/values/entries

## DOM 事件机制，怎么阻止事件捕获？

[参考地址](https://juejin.cn/post/6844903781969166349)

事件捕获： windows => document => html => body => 一层层最终到达目标元素。addEventListener 的第三个参数设置为 true 表示捕获。

事件冒泡：与事件捕获相反。 addEventListener 的第三个参数设置为 false 表示冒泡。

## Event

event.preventDefailt() 默认事件不触发，比如 a 标签

event.**stopPropagation() 阻止事件冒泡。**

## Event Loop

[参考地址](https://juejin.cn/post/6844903657264136200)

Evenet Loop 就是 js 的事件循环机制。js 是一门单线程语言，它的异步和多线程是通过 event loop 事件循环机制实现的，event loop 有三部分组成，调用栈（call stack）、消息队列（message queue）、微任务（Microtask Queue）。script 标签内的 js 会被一行行执行，遇到函数会被压入到调用栈中，也叫做帧，执行完毕会被弹出（因此栈也是先进后出的原则），比如 fetch，setTimeout，他们的回调函数会放入到消息队列中。promise、async await 会加入到微任务队列中。

**node环境下的 event loop ：**[https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/)

## setTimout 实现 setInterval

[参考地址](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/259)

## Commonjs 和 ES Module 的区别？

commonjs 是值的拷贝，导入值可以修改。

es module 导入值不能修改

## 观察者模式和订阅者模式的区别

[参考地址](https://juejin.cn/post/6961665158309478430)

## 实现一个方法延时一秒阻塞执行？

- promise + await 方法

## **三个请求依次执行？（使用 async await ）**

## **map和对象的区别？**

- 对象只能存在唯一的键
- 对象不能使用**`...`** 扩展运算，打印 obejct 的 iterater 是undefined
- map是有序的，object添加的键并不是
- map能够直接通过 size 或者大小，object 并不能。

## set和数组的区别？

- set 键是唯一的
- set 是伪数组
- set 和数组的操作方式不一样。
- set 只能使用 `new Set`创建定义

## 路由原理？

history -> pullstate

hash -> hashChange

**history 路由这一块有什么要注意的地方吗？**

[https://blog.csdn.net/yivisir/article/details/109672540](https://blog.csdn.net/yivisir/article/details/109672540)

**hash 路由和 history 路由的区别？**

**hash 路由页面之后服务端会带上这个 # 吗？**

[https://blog.csdn.net/lovefengruoqing/article/details/117024141](https://blog.csdn.net/lovefengruoqing/article/details/117024141)

## 深拷贝？

- map 储存已经遍历过的对象，避免循环引用问题。检查已经克隆过的对象。
- 考虑一些边界情况，如果是 null 或者是一个 function 直接return
- 还有一个不可遍历累心，symbol（Symbol.prototype.valueOf.call(targe)）

## Event bus

[https://juejin.cn/post/6844903587043082247](https://juejin.cn/post/6844903587043082247)

## 图片懒加载

[https://juejin.cn/post/6844903768966856717](https://juejin.cn/post/6844903768966856717)

## **怎么判断this指向？不适用 intanceof ？**

## **事件委托？**

**事件代理？**

**async await 原理？**

- genreator * yield

**设计模式？**

[https://segmentfault.com/a/1190000020179009](https://segmentfault.com/a/1190000020179009)

**类继承和原型继承有什么区别？**

[https://ld246.com/article/1548906479269](https://ld246.com/article/1548906479269)

[https://blog.51cto.com/u_15233911/2826326](https://blog.51cto.com/u_15233911/2826326)

**使用原型链有什么好处？**

[https://blog.csdn.net/zimeng303/article/details/112307953](https://blog.csdn.net/zimeng303/article/details/112307953)

**一帧等于多少毫秒？怎么计算的？ 1/60 = 16.6**