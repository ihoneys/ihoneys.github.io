---
title: 设计模式之-观察者模式
date: 2020-09-23
categories:
  - 前端基础
tags:
  - 设计模式
---

### 观察者模式（**Observer**）

生活中的观察者模式：

小米新款手机，每次都是热销，于是打算去店里购买，店员销售告诉已经卖完没有了，现在没货但是还想购买，不可能每天都跑来店里问，于是留下了我的`电话号码`给店员销售，有货了立马通知我，也不需要自己天天跑去问了，如果你购买到了手机，店员销售也不会通知了你了。

应用场景：

场景 1： 当观察的数据对象发生变化时，自动调用相应的函数。比如 vue 的双向数据绑定。

**数据双向绑定**

利用`Object.definedProperty()`对数据进行劫持，设置一个`Observer`监听器，用来监听属性的变化，如果属性发生变化了，就需要告诉订阅者`Watcher`去更新数据（当然这是根据你是否订阅了某个双向绑定数据属性才回去执行），最后指令解析器`complie`解析对应的指令，进行会执行对应的更新函数，从而更新视图，实现双向绑定。

下面来看一个`Object.definePropety()`简单的例子：

```js
const obj = {
  data: { list: [] },
};

Object.defineProperty(obj, "list", {
  get() {
    return this.data["list"];
  },
  set(val) {
    console.log("值被更改了");
    this.data["list"] = val;
  },
});
obj.data.list = ["66"];
```

熟悉的同学都知道 `obj.data.list`被重新复制会粗发 `set()`方法并执行

**Proxy**

Proxy/Reflect 是 ES6 引入的新特性，也可以使用其完成观察者模式，示例如下（效果如上）：

```js
var obj = {
  value: 0,
};

var proxy = new Proxy(obj, {
  set: function (target, key, value, receiver) {
    // {value: 0}  "value"  1  Proxy {value: 0}
    console.log("调用相应函数");
    Reflect.set(target, key, value, receiver);
  },
});

proxy.value = 1; // 调用相应函数
```
