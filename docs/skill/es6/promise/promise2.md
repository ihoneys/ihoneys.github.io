---
title: Promise 初级
date: 2019-01-13
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - Promise
publish: true
# 打赏
showSponsor: true
---

## Promise 是什么

- 概念
  - 抽象
`promise`是`js`中新的（ES6）异步编程的解决方案（旧的是纯回调，是多层回调，会有回调地狱，`promise`就是为了解决回调地狱）
  - 具体
    1. 从语法上讲，`promise`是一个构造函数
    2. 从功能上讲，`promise`对象用来封装一个异步操作，并可以获得其结果

## Promise Api（语法）

- 语法

```js
// promise 构造函数
new Promise( function(resolve, reject) {...} /* executor */  );
```

- `executor` 构造函数`Promise()`的参数，又叫执行器函数。

  - `executor`函数：同步执行 `（resolve,reject）=>{}`

    `executor`是带有 `resolve` 和 `reject` 两个参数的函数 。`Promise`构造函数执行时立即调用`executor` 函数（executor会在promise内部立即同步回调，异步操作会在执行器中执行）， `resolve` 和 `reject` 两个函数作为参数传递给`executor`（`executor` 函数在Promise构造函数返回所建`promise`实例对象前被调用）。

  - `resolve`函数：内部定义成功时执行的函数 `value => {}`

  - `reject`函数: 内部定义失败时执行的函数 `reason => {}`

    `resolve` 和 `reject` 函数被调用时，分别将`promise`的状态改为`fulfilled（完成）`或`rejected（失败）`。

`executor` 内部通常会执行一些异步操作，一旦异步操作执行完毕(可能成功/失败)，要么调用`resolve`函数来将`promise`状态改成`fulfilled`，要么调用`reject` 函数将`promise`的状态改为`rejected`。如果在`executor`函数中抛出一个错误，那么该`promise` 状态为`rejected`。`executor`函数的返回值被忽略。

- 状态

  - `pending`: 初始状态，既不是成功，也不是失败状态。

  - `fulfilled(resolved)`: 意味着操作成功完成。

  - `rejected`: 意味着操作失败。

- 状态改变

  1. 初始状态是 `pending`，

  2. 从`pending` 转为=> `fulfilled(resolved)`；

  3. 从`pending`  转为=> `rejected`

状态
![promise状态](https://z3.ax1x.com/2021/07/22/W0SptK.jpg)

:::tip 说明:
  只有这两种，且一个`promise`对象只能改变一次，

  无论变为成功还是失败，都会有一个结果数据

  成功的结果数据一般称为`value`,失败的结果数据一般称为`reason`

  `Promise`一旦新建就立刻执行, 此时的状态是`Pending`(进行中)
:::

- `.then`方法：`(onResoled,onRejected)=>{}`

```js
p.then(onFulfilled[, onRejected]);

p.then(value => {
  // fulfillment
}, reason => {
  // rejection
});
```

说明：指定用于得到`value`的成功回调和用于得到失败`reason`的失败回调

## promise 基础使用

```html
<script>
        // promise基础使用

        // 1.创建一个新的promise对象
        const p = new Promise((resolve, reject) => {//执行器函数,用来执行异步操作
            // 2. 执行异步操作任务
            setTimeout(() => {
                const time = Date.now()//如果当前时间是偶数代码成功，否则失败
                if (time % 2 == 0) {
                    // 3.1 如果成功了，调用resolve(value)
                    resolve('成功的数据，time=' + time);
                } else {
                    reject('失败的数据，time=' + time);
                    // 3.2 如果失败了，调用reject(reason)
                }
            }, 1000);
        })
        p.then(
            value => {//接收得到成功的value数据  OnResolved()
                console.log('成功的回调', value);
            },
            reason => {//接收得到失败的reason数据 OnRejected()
                console.log('失败的回调', reason);
            }
        )
    </script>
```

- `then()`
    `then()`方法包含两个参数：`onfulfilled` 和 `onrejected`，它们都是 `Function` 类型。当`Promise`状态为`fulfilled`时，调用 `then` 的 `onfulfilled`方法，当`Promise`状态为`rejected`时，调用 `then` 的 `onrejected` 方法， 所以在异步操作的完成和绑定处理方法之间不存在竞争

## promise 流程图

![](https://s1.ax1x.com/2020/09/01/djcyAs.png)

官方图
![](https://s1.ax1x.com/2020/09/02/dzxvB8.png)

因为 `Promise.prototype.then` 和  `Promise.prototype.catch` 方法返回`promise` 对象， 所以它们可以被链式调用

## 为啥用promise呢

1. 指定回调函数的方式更加灵活(和旧方法纯回调相比)：

    - 旧的：必须在启动异步任务前指定；

    - `promise`：启动异步任务 => 返回`promise`对象 => 给`promise`对象绑定回调函数（甚至可以在异步任务结束后指定）

2. 支持链式调用，可以解决回调地狱的问题

    - 什么是回调地狱？

    回调函数嵌套调用，外部回调函数异步执行的结果是嵌套的回调函数执行的条件。

    - 回调地狱的缺点？

    不便于阅读 / 不便于异常处理。

    - 解决方案？

    `promise`链式调用。

    - 终极解决方案？

    `async` / `await`。

```js
        // 成功的回调函数
        function successCallback(result) {
            console.log('创建成功' + result);
        }
        // 失败的回调函数
        function failureCallback(error) {
            console.log('创建失败' + error)
        }
        // 1.1 使用纯回调函数（伪代码）
        createAudioAsync(audioSettings, successCallback, failureCallback)
        // 1.2 使用promise
        const promise = createAudioAsync(audioSettings);
        setTimeout(() => {
            promise.then(successCallback, failureCallback)
        }, 3000);
```

回调地狱

```js
 // 2.1
        doSomething(function (result) {
            // 第二个请求需要上个请求的结果
            doSomething(result, function (newResult) {
                // 第三个请求需要上个请求的结果 以此类推，层层嵌套，地狱···
                doThirdThing(newResult, function (finalResult) {
                    console.log('got the final result:' + finalResult);
                }, failureCallback)
            }, failureCallback)
        }, failureCallback)
```

解决回调地狱

```js
        // 2.2 使用promise的链式调用解决回调地狱
        doSomething().then(function (result) {
            return doSomething(result)
        })
            .then(function (newResult) {
                return doThirdThing(newResult)
            })
            .then(function (newResult) {
                return doThirdThing(newResult)
            })
            .then(function (finalResult) {
                console.log('got the final result:' + finalResult);
            })
            .catch(failureCallback)
        // 2.3 async / await 回调地狱的终极解决方案
        async function request() {
            try {
                const result = await doSomething();
                const newResult = await doSomethingElse(result);
                const finalResult = await doThirdThing(newResult)
                console.log('got the final result:' + finalResult);

            } catch (err) {
                failureCallback(err)
            }
        }
```

## Promise 的 API

1. `Promise` 的构造函数:`Promise(excutor) => {}`
   - `excutor`函数：同步执行`(resolve,reject) => {}`
   - `resolve`函数：内部定义成功时我们调用的函数 `value =>{}`
   - `reject` 函数：内部定义失败时我们调用的函数 `reason => {}`
   - 说明：`excutor`会在`Promise`内部立即同步回调，异步操作在执行器中执行。
2. `Promise.prototype.then()`方法:`(onResoled,onRejected)=>{}`

   - `onResolved`函数：成功的回调函数 `(value) => {}`
   - `onRejected`函数：失败的回调函数 `(reason) => {}`
   - 说明：指定用于得到成功`value`的成功回调和用于得到失败`reason`的失败回调，返回一个新`promise`对象。

3. `Promise.prototype.catch()`方法：`(onRejected) => {}`
   - onRejected函数：失败的回调函数(reason) => {}
   - 说明：`then()`的语法糖，相当于 `then(undefined,onReaected)`

4. `Promise.prototype.finally()`方法：`p.finally(onFinally)`;
   - `Promise`结束后调用的`Function`。
   - 说明：想在 `promise` 执行完毕后无论其结果怎样都做一些处理或清理时，`finally()` 方法可能是有用的，和`.then(onFinally, onFinally)` 类似，但还是有区别的，`finally`的回调函数中不接收任何参数，它仅用于无论最终结果如何都要执行的情况。[详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Promise/finally)

5. `Promise.resolve()`方法：`(value) => {}`（语法糖）
   - `value`:成功的数据或`promise`对象
   - 说明：返回一个成功或者失败的`promise`对象

6. `Promise.reject()`方法：`(reason) => {}`（语法糖）
   - `reason`:失败的原因
   - 说明：返回一个失败的`promise`对象

7. `Promise.all()`方法：`([promise]) => {}`（`promise`函数对象的方法）
   - `promise`：包含n个`promise`对象的数组
   - 说明：返回一个新的`promise`，当所有的`promise`都成功了才成功，只要有一个失败，就直接失败。

8. `Promise.race` 方法:`([promise]) => {}`
   - `promise`：包含n个`promise`对象的数组
   - 说明：返回一个新的`promise`，当最先完成的`promise`对象的结果状态就是最终的结果状态。

## Promise 使用

- 常规写法

```js
 new Promise((resolve, reject) => {
            // 在这写异步代码
            setTimeout(() => {
                // 成功和失败只会执行一个（pending只转换一次）
                // resolve('成功的数据');
                reject('失败的回调');
            }, 1000);
        }).then(value => {
            console.log('onResolved()1', value);
        }).catch(reason => {
            console.log('onRejected()1', reason);
        })
```

- `Promise` 语法糖

语法糖：就是用简短的代码替换冗余的代码，但功能实现是一样的，使用更方便。

```js
        // 产生一个值为1的promise对象
        const p1 = new Promise((resolve, reject) => {
            resolve(1)
        })
        // 产生一个值为2的promise对象(语法糖)
        const p2 = Promise.resolve(2)
        // 产生要一个值为3的promise对象
        const p3 = Promise.reject(3)

        // 输出结果
        p1.then(value => { console.log('p1' + value); })
        p2.then(value => { console.log('p2' + value); })
        p3.catch(reason => { console.log('p3' + reason); })
        // 其实以下代码等价于上面一行
        p3.then(null, reason => { console.log('p3' + reason); })
```

## Promise 函数对象的方法 `.all()` `.race()`

- 失败的结果

```js
        const p1 = new Promise((resolve, reject) => { resolve(1)  })
        const p2 = Promise.resolve(2)
        const p3 = Promise.reject(3)
        // 所有的请求都成功，返回成功，有一个失败，全部失败
        const pAll = Promise.all([p1, p2, p3]);
        pAll.then(
            reason => { console.log('all onRejected', reason); }
        )
        // 结果是 3 ,返回的是执行失败的promise对象的失败原因
```

- 成功的结果 和 成功后值的顺序情况

```js
        const pAll = Promise.all([p1, p2]);
        pAll.then(
            values => { console.log('all onResolved', values); },
            // values 的顺序和.all([])里数组的顺序有关，和执行完成的先后顺序无关
            // reason => { console.log('all onRejected', reason); }
        )
```

- 完成时间最快的为最终的结果

```js
        // race 看最先执行完成的结果是成功还是失败
        const p1 = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(1)
            }, 100);
        })
        const p2 = Promise.resolve(2)
        const p3 = Promise.reject(3)
        const pRace = Promise.race([p1, p2, p3])
        pRace.then(
            value => { console.log('race onResolved', value); },
            reason => { console.log('race onRejected', reason); }
        )
        // 结果为 2
```

## 链式调用

对请求的结果再次处理

```js
new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('aaa')
      }, 1000)
    }).then(res => {
      // 1.自己处理10行代码
      console.log(res, '第一层的10行处理代码');
      // 2.对结果进行第一次处理
      return new Promise((resolve) => {
        resolve(res + '111')
      })
    }).then(res => {
      console.log(res, '第二层的10行处理代码');
      return new Promise(resolve => {
        resolve(res + '222')
      })
    }).then(res => {
      console.log(res, '第三层的10行处理代码');
    })

```

简写

```js
new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('aaa')
      }, 1000)
    }).then(res => {
      // 1.自己处理10行代码
      console.log(res, '第一层的10行处理代码');
      // 2.对结果进行第一次处理
      return Promise.resolve(res + '111')
    }).then(res => {
      console.log(res, '第二层的10行处理代码');
      return Promise.resolve(res + '222')
    }).then(res => {
      console.log(res, '第三层的10行处理代码');
    })
```

再简写

```js
new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('aaa')
      }, 1000)
    }).then(res => {
      // 1.自己处理10行代码
      console.log(res, '第一层的10行处理代码');
      // 2.对结果进行第一次处理
      return res + '111'
    }).then(res => {
      console.log(res, '第二层的10行处理代码');
      return res + '222'
    }).then(res => {
      console.log(res, '第三层的10行处理代码');
    })
```

## 英文释义

`resolved` adj:下定决心的,解决

`fulfilled` adj:履行；满足

`rejected` adj: 被拒的；不合格的 | v. 拒绝，驳回

`reason` adj:原因,理由

`race` adj:竞赛,这里表示**最快的项**

`throw` adj:抛出
