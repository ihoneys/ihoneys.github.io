---
title: 设计模式之-单例模式
date: 2020-09-23
categories:
  - 前端基础
tags:
  - 设计模式
---

### 单例模式

单例模式适用于全局只能有一个实例对象的场景，结构如下：

```javascript
function Single() {}

Single.getIntance = function () {
  if (this.instance) {
    return this.instance;
  }

  this.instance = new Single();
  return this.instance;
};
```

上述代码中 `Singleton`类挂载了一个静态方法`getInstance`，如果要获取实例对象只能通过这个方法拿，这个方法会检测是不是有现存的实例对象，如果有就返回，没有就新建一个

#### 单例模式两个条件

- 确保只有一个实例
- 可以全局访问

#### 适用

> 适用于弹窗的实现，全局缓存

#### 弹窗实现

```javascript
/**单例闭包弹窗 */
const createLoginLayer = function () {
    const div = document.createElement('div')
    div.innerHTML = '登入窗口'
    // div.style.display = 'none'
    document.body.appendChild(div)
    return div
}

const getSingle = function (fn) {
    const result
    return function () {
        return result || fn.apply(this, arguments)
    }
}

const createSingleLoginLayer = getSingle(createLoginLayer)


document.getElementById('loginBtn').onclick = function () {
    createSingleLoginLayer()
}
```

#### 全局数据对象

假如有一个需求

> 需要对一个全局的数据对象进行管理，这个对象只能有一个，如果有多个会导致数据不同步。

如果还想支持`store()`直接调用，可以用前面工厂模式用过的方法，检测`this`是不是当前类的实例，如果不是就帮他用`new`调用就行了：

```javascript
function store() {
  // 加一个instanceof检测
  if (!(this instanceof store)) {
    return new store();
  }

  // 下面跟前面一样的
  if (store.instance) {
    return store.instance;
  }

  store.instance = this;
}
```

![image-20210407173404778](./img/singleton_1.png)

#### 实例：vue-router

`vue-router`其实也用到了单例模式，因为如果一个页面有多个路由对象，可能造成状态的冲突，`vue-router`的单例实现方式又有点不一样，[下列代码来自`vue-router`源码](https://github.com/vuejs/vue-router/blob/dev/src/install.js)：

```javascript
let _Vue;

function install(Vue) {
  if (install.installed && _Vue === Vue) return;
  install.installed = true;

  _Vue = Vue;
}
```

每次调用`vue.use(vueRouter)`的时候其实都会去执行`vue-router`模块的`install`方法，如果用户不小心多次调用了`vue.use(vueRouter)`就会造成`install`的多次执行，从而产生不对的结果。`vue-router`的`install`在第一次执行时，将`installed`属性写成了`true`，并且记录了当前的`Vue`，这样后面在同一个`Vue`里面再次执行`install`就会直接`return`了，这也是一种单例模式。
