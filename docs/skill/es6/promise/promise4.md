---
title: 手写 Promise
date: 2019-01-13
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - Promise
publish: true
sticky: 3
# 打赏
showSponsor: true
---

最简单的`Promise`实现有7个主要属性, `state`(状态), `value`(成功返回值), `reason`(错误信息), `resolve`方法, `reject`方法, `then`方法,`catch`方法.

<!-- more -->

## 面试够用版 Promise

```js
// 定义状态
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
// Promise构造函数
function MyPromise(fn) {
    let _this = this;//用_this保存this，避免后期闭包导致this的指向不对
    _this.value = undefined; //定义状态为resolved的时的状态
    _this.reason = undefined; //定义状态为rejected的时的状态
    _this.status = PENDING; //定义状态改变前的初始状态
        //两个==="pending"，保证了状态的改变是不不可逆的
    function resolve(value) {
        if (_this.status === PENDING) {
            _this.status = FULFILLED;
            _this.value = value;
        }
    }
    function reject(reason) {
        if (_this.status === PENDING) {
            _this.status = REJECTED;
            _this.reason = reason;
        }
    }
    //捕获构造异常
    try {
        fn(resolve, reject);
    } catch (error) {
        reject(error);
    }
}
// 定义原型中的 then 函数
MyPromise.prototype.then = function(onFulfilled, onRejected) {
    let _this = this;
    switch (_this.status) {
        case "fulfilled":
            onFulfilled(_this.value);
            break;
        case "rejected":
            onRejected(_this.reason);
            break;
        default:
    }
};
// 测试
var a = new MyPromise(function(resolve, reject) {
    resolve(1);
});
a.then(console.log);
//输出1
```

## 大厂专供版

```js
const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";
function Promise(excutor) {
  let that = this; // 缓存当前promise实例例对象
  that.status = PENDING; // 初始状态
  that.value = undefined; // fulfilled状态时 返回的信息
  that.reason = undefined; // rejected状态时 拒绝的原因
  that.onFulfilledCallbacks = []; // 存储fulfilled状态对应的onFulfilled函数
  that.onRejectedCallbacks = []; // 存储rejected状态对应的onRejected函数
  function resolve(value) { // value成功态时接收的终值
    if(value instanceof Promise) {
      return value.then(resolve, reject);
    }
    // 实践中要确保 onFulfilled 和 onRejected ⽅方法异步执⾏行行，且应该在 then ⽅方法被调⽤用的那⼀一轮事件循环之后的新执⾏行行栈中执⾏行行。
    setTimeout(() => {
      // 调⽤用resolve 回调对应onFulfilled函数
      if (that.status === PENDING) {
        // 只能由pending状态 => fulfilled状态 (避免调⽤用多次resolve reject)
        that.status = FULFILLED;
        that.value = value;
        that.onFulfilledCallbacks.forEach(cb => cb(that.value));
      }
    });
  }
  function reject(reason) { // reason失败态时接收的拒因
    setTimeout(() => {
      // 调⽤用reject 回调对应onRejected函数
      if (that.status === PENDING) {
        // 只能由pending状态 => rejected状态 (避免调⽤用多次resolve reject)
        that.status = REJECTED;
        that.reason = reason;
        that.onRejectedCallbacks.forEach(cb => cb(that.reason));
      }
    });
  }

  // 捕获在excutor执⾏行行器器中抛出的异常
  // new Promise((resolve, reject) => {
  //     throw new Error('error in excutor')
  // })
  try {
    excutor(resolve, reject);
  } catch (e) {
    reject(e);
  }
}
Promise.prototype.then = function(onFulfilled, onRejected) {
  const that = this;
  let newPromise;
  // 处理理参数默认值 保证参数后续能够继续执⾏行行
  onFulfilled = typeof onFulfilled === "function" ? onFulfilled : value => value;
  onRejected = typeof onRejected === "function" ? onRejected : reason => {
    throw reason;
  };
  if (that.status === FULFILLED) { // 成功态
    return newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try{
          let x = onFulfilled(that.value);
          resolvePromise(newPromise, x, resolve, reject); //新的promise resolve 上⼀一个onFulfilled的返回值
        } catch(e) {
          reject(e); // 捕获前⾯面onFulfilled中抛出的异常then(onFulfilled, onRejected);
        }
      });
    })
  }
  if (that.status === REJECTED) { // 失败态
    return newPromise = new Promise((resolve, reject) => {
      setTimeout(() => {
        try {
          let x = onRejected(that.reason);
          resolvePromise(newPromise, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      });
    });
  }
  if (that.status === PENDING) { // 等待态
// 当异步调⽤用resolve/rejected时 将onFulfilled/onRejected收集暂存到集合中
    return newPromise = new Promise((resolve, reject) => {
      that.onFulfilledCallbacks.push((value) => {
        try {
          let x = onFulfilled(value);
          resolvePromise(newPromise, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      });
      that.onRejectedCallbacks.push((reason) => {
        try {
          let x = onRejected(reason);
          resolvePromise(newPromise, x, resolve, reject);
        } catch(e) {
          reject(e);
        }
      });
    });
  }
};
```
