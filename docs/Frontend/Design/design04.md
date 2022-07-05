---
title: 设计模式之-发布订阅模式
date: 2020-09-23
categories:
  - 前端基础
tags:
  - 设计模式
---

### 发布订阅模式

先看下面的需求

> 申请成功后，需要出发对应的订单、消息、审核模块对应逻辑。

<!-- ![image-20210408142132173](/img/design/eventEmit_1.png) -->

看完，机智的我，这不还简单，我会如何做呢？

```js
function applySuccess() {
  // 通知消息中心获取最新内容
  MessageCenter.fetch();

  // 更新订单信息
  Order.update();

  // 通知相关审核
  Checker.alert();
}
```

这样写似乎看不出什么毛病。但是思考一下

比如` MessageCenter.fetch()` 是小明写的，他来大姨夫了，心情不爽，把模块的方法名改了 现在叫` MessageCenter.request()` ，最后这块逻辑也只来对应使用的地方修改。

再比如，这个功能由你和小明开发的，小明负责订单模块，你一气合成 呼呼呼呼的直接给写完了，一运行发现，依赖的订单模块小明今天没空去约妹妹了，本来今天能完成的，推迟一天，那你也就只能注释代码，等依赖的模块开发完，再回来添加这段订单模块逻辑。

还有一点，万一可能涉及不止三个模块，还有很多个模块，申请成功之后还需要再通知其他人，想到的是继续在`applySuccess` 函数中添加咯。

```js
function applySuccess() {
  // 通知消息中心获取最新内容
  MessageCenter.fetch();
  // 更新订单信息
  Order.update();
  // 通知相关方审核
  Checker.alert();

  // maybe 更多
  Ntoice.others();
  ...
}
```

到这里发布订阅模式要出场了

发布-订阅模式是一种消息范式，消息的发布者不会将消息直接发送给特定的`订阅者`，而是通过消息通道广播出去，订阅者通过订阅获取到想要的消息。

优点：在异步变成中更深的解耦

缺点： 如果过多的使用发布订阅模式，会增加维护的难度

接下来使用发布-订阅模式 修改一下上边的代码：

```javascript
const EventEmit = function () {
  this.events = {};
  this.on = function (name, cb) {
    if (this.events[name]) {
      this.events[name].push(cb);
    } else {
      this.events[name] = [cb];
    }
  };

  this.trigger = function (name, ...args) {
    if (this.events[name]) {
      this.events[name].forEach((eventListener) => {
        eventListener(...args);
      });
    }
  };
};
```

上班写好一个 `EventEmit` ,然后的业务代码可以改成这样 ~

```javascript
let event = new EventEmit();
event.trigger('success');

MessageCenter.fetch() {
  event.on('success', () => {
    console.log('更新消息中心');
  });
}
Order.update() {
  event.on('success', () => {
    console.log('更新订单信息');
  });
}
Checker.alert() {
  event.on('success', () => {
    console.log('通知管理员');
  });
}

```

#### 什么情况下适合用发布订阅模式呢？

- 各模块相互独立
- 存在一对多的依赖关系
- 依赖模块不稳定、依赖关系
- 各模块由不同的人员、团队开发
