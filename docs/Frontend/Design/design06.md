---
title: 设计模式之-适配器模式
date: 2020-09-23
categories:
  - 前端基础
tags:
  - 设计模式
---

### 适配器模式

> 为了解决不兼容的问题，把一个类的接口换成想要的接口，也是解决两个接口之间不匹配的问题。举个

举个:chestnut:我的 mac 电脑需要投屏，直接插线是插不了的，这时候需要转接头，这样才能插上适配投屏。

看看下面的代码段

```javascript
const oldInterface = (function () {
  return [
    {
      name: "adapter",
      id: 21,
    },
    {
      name: "newAdapter",
      id: 22,
    },
  ];
})();

// 新接口要求的格式是

const newInterface = {
  adapter: 21,
  newAdapter: 22,
};

// 这时候需要采用适配器模式 也相当于说的转接头

const adapterMethod = (function () {
  const obj = Object.create(null);
  for (const item of oldInterface) {
    obj[item.name] = item.id;
  }
  return obj;
})();
```
