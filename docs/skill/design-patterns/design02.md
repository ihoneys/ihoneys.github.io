---
title: 设计模式之-代理模式
date: 2020-09-23
categories:
  - 前端基础
tags:
  - 设计模式
---

### 代理模式

> 为其他对象提供一种代理，以便控制对这个对象的访问，不能直接访问目标对象。

情景：小明追女生 A

- 非代理模式：小明 买花 => 女生 A
- 代理模式：小明买花 => 让女生 A 的好友 B 帮忙 送花 => 女生 A

再举一个简单的例子

快递大家都知道

![image-20210409104516307](./img/proxy_1.png)

通过菜鸟驿站代收快递。

直接看看下面的代码：

```javascript
class getDelivery {
  constructor() {}
  gets(name) {
    console.log(`领取的快递名是---${name}`);
  }
}

class proxy extends getDelivery {
  constructor() {
    super();
  }
  // 中间过程
  proxyGets(name) {
    const fn1 = () => {
      super.gets("顺丰快递");
    };
    const fn2 = () => {
      super.gets("中通快递");
    };
    const fn3 = () => {
      super.gets("圆通快递");
    };

    const deliver = { 顺丰: fn1, 中通: fn2, 圆通: fn3 };

    return deliver[name]();
  }
}

const proxys = new proxy();
proxys.proxyGets("中通"); // ’获取的快递名是---中通快递'
```

在上面代码中`getDelivery` 类中的 `gets`方法中不关心是什么快递，关心的是接到快递粗发的结果，至于中间的过程，交给`proxy`类中的`proxyGets`方法处理判别

示例二：

图片懒加载：运用代理模式实现图片预加载，通过一张 loading 图占位，再通过异步的方式加载图片，等图片加载好了，再把加载成功的图片放到 img 标签中。

```js
// 图片拉加载

const myImage = function () {
  const imgNode = document.createElement("img");
  document.body.appendChild(imgNode);
  return {
    setSrc(src) {
      imgNode.src = src;
    },
  };
};

const proxyImage = function () {
  const img = new Image();
  img.onload = function () {
    // 网络图片加载完毕才会执行
    myImage.setSrc(this.src);
  };
  return {
    setSrc(src) {
      // 本地 loading 动图
      img.src = src;
      myImage.setSrc("./loading.gif");
    },
  };
};

proxyImage.setSrc("https://img.yzcdn.cn/vant/cat.jpeg");
```
