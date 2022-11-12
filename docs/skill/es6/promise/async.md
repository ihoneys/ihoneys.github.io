---
title: async await
date: 2019-01-13
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - async await
---

```js
function a1() {
  return 1
}
function a2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2)
    }, 3000);
  })
}
function a3() {
  return 3
}
async function Dosome() {
  console.log(a1());;
  console.log(await a2());;
  console.log(a3());;

}
Dosome()
```

```js
// 执行async 函数 返回的都是 Promise 对象
async function test1() {
  return 1
}
async function test2() {
  return Promise.resolve(2)
}
const result1 = test1()
const result2 = test2()
console.log(result1);
console.log(result2);

// Promise.then 成功的情况对应 await
// await 后跟一个promise对象
async function test3() {
  const p3 = Promise.resolve(3);
  p3.then(res => {
    console.log("data3", res);
  })
  const data3 = await p3
  console.log("data3", data3);
}
test3()
// await 后跟一个普通值
async function test4() {
  const data4 = await 4
  console.log("data4", data4);
}
test4()
// await 后跟一个函数

async function test5() {
  const data5 = await test1()
  console.log("data5", data5);
}
test5()
// Promise.catch 成功的情况对应 try...catch
async function test6() {
  const p6 = Promise.reject(6)
  try {

    const data6 = await p6
    console.log("data6", data6);
  } catch (e) {
    console.log("err", e);
  }
}
test6()
```
