---
title: 设计模式之-装饰器模式
date: 2020-09-23
categories:
  - 前端基础
tags:
  - 设计模式
---

### 装饰器模式

> 在不改变对象自身的基础上，动态的给某个对象添加新的功能，同时又不改变其接口

```javascript
class Plane {
  fire() {
    console.log("发送普通子弹");
  }
}
// 装饰过的对象
class Missile {
  constructor(plane) {
    this.plane = plane;
  }
  fire() {
    this.plane.fire();
    console.log("发射导弹");
  }
}
let plane = new Plane();
plane = new Missile(plane);
console.log(plane.fire()); // 依次打印 发送普通子弹 发射导弹
```

利用 AOP 给函数动态添加功能，即 Function 的 after 或者 before

```javascript
Function.prototype.before = function (beforeFn) {
  const _self = this;
  return function () {
    beforeFn.apply(this, arguments);
    return _self.apply(this, arguments);
  };
};

Function.prototype.after = function (afterFn) {
  const _self = this;
  return function () {
    const ret = _self.apply(this, arguments);
    afterFn.apply(this, arguments);
    return ret;
  };
};

let func = function () {
  console.log("2");
};

func = func
  .before(function () {
    console.log("1");
  })
  .after(function () {
    console.log("3");
  });

func();
console.log(func()); // 依次打印 1 2 3
```

应用场景：ES7 装饰器、Vuex 中混入 Vue 时，重写 init 方法、Vue 中数组变异方法实现等
