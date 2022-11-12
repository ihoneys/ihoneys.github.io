---
title: Vue 双向数据绑定原理(2/3)
date: 2020-12-05
sidebar: 'auto'
tags:
 - vue
publish: true
# 打赏
showSponsor: true
---
- vue2 的原理

`Object.defineProperty()`

```js
// 劫持了一层
   const data = {
      name: "zhang",
      age: 20
    }
    observer(data)
    function observer(target) {
      if (typeof target !== "object" || target === null) {
        return target
      }
      for (let key in target) {
        defineReactive(target, key, target[key])
      }
    }
    function defineReactive(target, key, obj) {
      Object.defineProperty(target, key, {
        get() {
          return value
        },
        set(newval) {
          value = newval;
          console.log("更新");
        }
      })
    }
    data.age = 10
```

```js
// 对象
 const data = {
      name: "zhang",
      age: 20
    }
    observer(data)
    function observer(target) {
      if (typeof target !== "object" || target === null) {
        return target
      }
      for (let key in target) {
        defineReactive(target, key, target[key])
      }
    }
    function defineReactive(target, key, value) {
      // 劫持深层次的值 属性值为对象的情况
      observer(value)
      // 添加上一行代码
      Object.defineProperty(target, key, {
        get() {
          return value
        },
        set(newval) {
          value = newval;
          console.log("更新");
        }
      })
    }
    data.age = 10
```

```js
 const data = {
      name: "zhang",
      age: 20
    }
    observer(data)
    function observer(target) {
      if (typeof target !== "object" || target === null) {
        return target
      }
      for (let key in target) {
        defineReactive(target, key, target[key])
      }
    }
    function defineReactive(target, key, value) {
      // 劫持深层次的值 属性值为对象的情况
      observer(value)
      // 添加上一行代码
      Object.defineProperty(target, key, {
        get() {
          return value
        },
        set(newval) {
          observer(newval)
          value = newval;
          console.log("更新");
        }
      })
    }
    // 删除时不响应
    delete data.age
    //  添加时不响应
    data.test = "someing"
```

- push pop 等方法不能响应式

```js
  const data = {
      name: "zhang",
      age: 20,
      color: ["blue", "red"]
    }
    // 获取 原生array 对象的push等方法
    const oldArrayProto = Array.prototype;
    const newArrayProto = Object.create(oldArrayProto);

    ['push', 'pop', 'shift', 'unshift', 'splice'].forEach(methodName => {
      newArrayProto[methodName] = function () {
        console.log("更新");
        oldArrayProto[methodName].call(this, ...arguments);
      }
    })
    observer(data)
    function observer(target) {
      if (typeof target !== "object" || target === null) {
        return target;
      }
      // 添加判断
      if (Array.isArray(target)) {
        target.__proto__ = newArrayProto;
      }
      for (let key in target) {
        defineReactive(target, key, target[key]);
      }
    }
    function defineReactive(target, key, value) {
      // 劫持深层次的值 属性值为对象的情况
      observer(value);
      // 添加上一行代码
      Object.defineProperty(target, key, {
        get() {
          return value;
        },
        set(newval) {
          observer(newval);
          value = newval;
          console.log("更新");
        }
      })
    }
    data.color.push("green")
```

## 区别

- `Object.defineProperty()`
  - 是劫持对象的属性，对象属性的添加和删除，没有响应
  - 兼容低版本浏览器
  - 操作数组不响应

- `Proxy`
  - 是代理的整个对象，对对象属性的添加和删除都有响应
  - 不兼容低版本浏览器
