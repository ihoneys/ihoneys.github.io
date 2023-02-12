---
title: 手写Array数组方法
date: 2019-12-21
sidebar: "auto"
categories:
  - 前端基础
tags:
  - JavaScript
publish: true
# 打赏
showSponsor: true
---

### 手写 filter 方法

`filter()` 方法创建给定数组一部分的浅拷贝，其包含通过所提供函数实现的测试的所有元素。

```js
/**
 *  callbackFn 返回 true，来保留该元素
 */
Array.prototype.myFilter = function (callbackFn) {
  // 边界处理
  if (!Array.isArray(arr) || !arr.length || typeof callbackFn !== "function")
    return [];
  // 定义一个新数组  用来接收返回值为真的项
  const newArr = [];
  // this 就是当前调用的数组  arr
  // 需要拿出arr的每一项出来 那我们就需要遍历数组
  for (let i = 0; i < this.length; i++) {
    // item 应该是数组的每一项
    if (callbackFn(this[i], i)) {
      // 返回true 就放进新数组
      newArr.push(this[i]);
    }
  }
  return newArr;
};

// 测试：
const arr = [1, 2, 3, 4];
const result = Array.prototype.myFilter(arr, (v) => {
  return v > 2;
});
console.log(result); //[ 3, 4 ]
```

### 手写 map 方法

`map()` 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。

```js
/**
 * callbackFn 作为调用处理每一项元素后的返回值
 */
Array.prototype.myMap = function (callbackFn) {
  const newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(callbackFn(this[i], i));
  }
  return newArr;
};

// 测试：
const arr = [1, 2, 3, 4];
const result = Array.prototype.myMap(arr, (v) => {
  return v * 2;
});
console.log(result); //[ 2, 4, 6, 8 ]
```

### 手写 reduce 方法

```js
Array.prototype.myReduce = function (arr, callbackFn, initialValue) {
  // 参数不为数组 直接返回[]
  if (!Array.isArray(arr) || !arr.length || typeof callbackFn !== "function")
    return [];
  // 如果没有将 initialValue 参数传递给该函数。我们将数组的第一项作为 initialValue
  let initialValue = initialValue !== undefined;
  let value = initialValue ? initialValue : arr[0];

  for (let i = isInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
    value = callbackFn(value, arr[i], i, arr); // 传递出去
  }

  return value; // 返回值
};

// 测试：
const arr = [1, 2, 3, 4];
const result = Array.prototype.myReduce(
  arr,
  (pv, cv) => {
    return pv + cv;
  },
  0
);
console.log(result); // 10
```
