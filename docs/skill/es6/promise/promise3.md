---
title: Promise 高级
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
## promise 的特性、优缺点，内部是如何实现的

### Promise基本特性

1. `Promise`有三种状态：`pending`(进行中)、`fulfilled`(已成功)、`rejected`(已失败)
2. `Promise`对象接受一个回调函数作为参数, 该回调函数接受两个参数，分别是成功时的回调`resolve`和失败时的回调`reject`；另外`resolve`的参数除了正常值以外， 还可能是一个`Promise`对象的实例；`reject`的参数通常是一个`Error`对象的实例。
3. `then`方法返回一个新的`Promise`实例，并接收两个参数`onResolved`(`fulfilled`状态的回调)；`onRejected`(`rejected`状态的回调，该参数可选)
4. `catch`方法返回一个新的`Promise`实例
5. `finally`方法不管`Promise`状态如何都会执行，该方法的回调函数不接受任何参数
6. `Promise.all()`方法将多个多个`Promise`实例，包装成一个新的`Promise`实例，该方法接受一个由`Promise`对象组成的数组作为参数(`Promise.all()`方法的参数可以不是数组，但必须具有`Iterator`接口，且返回的每个成员都是`Promise`实例)，注意参数中只要有一个实例触发`catch`方法，都会触发`Promise.all()`方法返回的新的实例的`catch`方法，如果参数中的某个实例本身调用了`catch`方法，将不会触发`Promise.all()`方法返回的新实例的`catch`方法
7. `Promise.race()`方法的参数与`Promise.all`方法一样，参数中的实例只要有一个率先改变状态就会将该实例的状态传给`Promise.race()`方法，并将返回值作为`Promise.race()`方法产生的`Promise`实例的返回值
8. `Promise.resolve()`将现有对象转为`Promise`对象，如果该方法的参数为一个`Promise`对象，`Promise.resolve()`将不做任何处理；如果参数`thenable`对象(即具有`then`方法)，`Promise.resolve()`将该对象转为`Promise`对象并立即执行`then`方法；如果参数是一个原始值，或者是一个不具有`then`方法的对象，则`Promise.resolve`方法返回一个新的`Promise`对象，状态为`fulfilled`，其参数将会作为`then`方法中`onResolved`回调函数的参数，如果`Promise.resolve`方法不带参数，会直接返回一个`fulfilled`状态的 `Promise` 对象。需要注意的是，立即`resolve()`的 `Promise` 对象，是在本轮`事件循环`（`event loop`）的结束时执行，而不是在下一轮`事件循环`的开始时。
9. `Promise.reject()`同样返回一个新的`Promise`对象，状态为`rejected`，无论传入任何参数都将作为`reject()`的参数

### `Promise`优点

1. 统一异步 `API`
`Promise` 的一个重要优点是它将逐渐被用作浏览器的异步 · ，统一现在各种各样的 · ，以及不兼容的模式和手法。
2. `Promise` 与事件对比
和事件相比较， `Promise` 更适合处理一次性的结果。在结果计算出来之前或之后注册回调函数都是可以的，都可以拿到正确的值。 `Promise` 的这个优点很自然。但是，不能使用 `Promise` 处理多次触发的事件。链式处理是 `Promise` 的又一优点，但是事件却不能这样链式处理。
3. `Promise` 与回调对比
解决了回调地狱的问题，将异步操作以同步操作的流程表达出来。
4. `Promise` 带来的额外好处是包含了更好的错误处理方式（包含了异常处理），并且写起来很轻松（因为可以重用一些同步的工具，比如 · ）。

### `Promise`缺点

1. 无法取消`Promise`，一旦新建它就会立即执行，无法中途取消。
2. 如果不设置回调函数，`Promise`内部抛出的错误，不会反应到外部。
3. 当处于`Pending`状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。
4. `Promise` 真正执行回调的时候，定义 `Promise` 那部分实际上已经走完了，所以 `Promise` 的报错堆栈上下文不太友好。

### 简单代码实现 请看手写 promise

## 案例

### 1. 使用promise 加载图片

```js
function loadimg(src) {
    const promise = new Promise((resolve, reject) => {
    const img = document.createElement("img");
    img.onload = function () {
        resolve(img)
    }
    img.onerror = function () {
        const error = new Error(`图片加载失败，链接是:${src}`)
        reject(error)
    }
    img.src = src
    })
    return promise
}
const url1 = "http://img-arch.pconline.com.cn/images/upload/upc/tx/photoblog/1309/25/c49/26316176_26316176_1380092693834_mthumb.jpg"
const url2 = "http://img-arch.pconline.com.cn/images/upload/upc/tx/photoblog/1303/26/c14/19263745_19263745_1364309047551_mthumb.jpg"
loadimg(url1).then(img1 => {
    console.log(img1);
    return loadimg(url2)
}).then(img2 => {
    console.log(img2);
})
    .catch(err => {
    console.log(err);
})
```

## Promise 的关键问题

### 1.  如果改变`promise`的状态 ❓

- `resolve(value)`:如果当前状态为`pending` 则改变为`resolved`。
- `reject(reason)`:如果当前状态为`pending` 则改变为`rejected`。
- 抛出异常：如果当前是`pending` 则改变为`rejected`。

```js
const p = new Promise((resolve, reject) => {
    // resolve(1); //成功 promise 改变为resolved状态
    // reject(2); //失败 promise 改变为rejected状态
    throw new Error('错误'); //抛出异常 同样为失败 rejected状态 reason为抛出的 error
})
console.log(p); // 打印实例对象，看状态

// 抛出其他值
const p = new Promise((resolve, reject) => {
    throw 3
})
// 输出结果
p.then(
    value => { },
    reason => { console.log('reason1'+reason); }
)
```

### 2.  一个`promise`对象指定多个成功或失败回调函数，都会调用吗 ❓

当promise改变为对应状态是都会调用.

```js
// 成功和失败同理
const p = new Promise((resolve, reject) => {
    throw 3
})
p.then(
    value => { },
    reason => { console.log('reason1' + reason); }
)
p.then(
    value => { },
    reason => { console.log('reason2' + reason); }
)
```

### 3.  改变`promise`状态和执行回调函数，谁先谁后 ❓

都有可能，正常情况下是先指定回调函数在改变状态，但也可以先改变状态再指定回调函数。

- 如何先改状态再指定回调

  - 在执行器中直接掉用`resolve()`和`reject()`方法

  - 延迟更长时间再调用`then()`.

```js
// 常规：先指定回调，再改变状态
new Promise((resolve, reject) => {
setTimeout(() => {
    resolve(1) // 2.后改变的状态（同时指定数据），异步执行回调函数
}, 1000);
}).then( //1.先指定的函数，保存当前指定的回调函数
value => { },
reason => { console.log('reason', reason); })
// 先改状态，再指定回调
// 方法一
new Promise((resolve, reject) => {
resolve(1) // 1.先改变的状态（同时指定数据），异步执行回调函数
}).then( //2.后指定的函数，保存当前指定的回调函数
value => { console.log('value2', value); },
reason => { console.log('reason2', reason); })
// 方法二
const p = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve(1) // 1.先改变的状态（同时指定数据），异步执行回调函数
}, 1000);
})
setTimeout(() => {
p.then( //2.后指定的函数，保存当前指定的回调函数
    value => { console.log('value3', value); },
    reason => { console.log('reason3', reason); })
}, 1100);//设置的定时器比上面的异步回调时间长即可
```

- `.then`和它里的的回调函数是两回事`.then()`会同步执行，但它内部的`value=>{}`,`reason=>{}`是异步执行的

```js
.then(
    value => { console.log('value', value); },
    reason => { console.log('reason', reason); })
```

### 4.  `promise.then()`返回的新`promise`对象的结果状态由什么决定 ❓

```js
new Promise((resolve, reject) => {
// resolve(1)
    reject(2)
}).then(
    value => {
        console.log('onResolved1--' + value); },
    reason => {
        console.log('onRejcected1--' + reason); }
).then(
    value => {
        console.log('onResolved2--' + value); },
    reason => {
        console.log('onRejcected2--' + reason); }
)
// 第一次.then()执行后会返回一个新的promise对象，这个新对象的结果和第一次.then()的结果是成功还是失败相关。
```

（1）简单表述：由`then()`指定的回调函数-执行的结果-决定。

（2）详细表述：

- 如果返回的是另一个新promise，此promise的结果就会变成新promise的结果。

```js
new Promise((resolve, reject) => {
resolve(1) //1. 成功的数据
}).then(
    value => {
        console.log('onResolved1--' + value);
// 2.没有return 值，默认返回的是 undefined ，
        },
    reason => {}
).then(//3.下一个.then 是接收的上一个promise对象的结果-的返回值，所以输出的是 undefined
    value => {
        console.log('onResolved2--' + value); },
    reason => {
        console.log('onRejcected2--' + reason); }
)
```

- 如果返回的是非promise的任意值，新promise变为resolved，value为返回的值。

```js
new Promise((resolve, reject) => {
    // resolve(1)
    reject(1)
}).then(
    value => {
        console.log('onResolved1--' + value);
        // return 2 // 直接 return 一个值
        // return Promise.resolve(2)//成功状态值为2的Promise对象
        // return Promise.reject(2)//失败状态值为3的Promise对象
        throw 5
    },
    reason => {
        console.log('onRejcected1--' + reason);
        // return Promise.resolve(2)//成功状态值为2的Promise对象
        // return Promise.reject(3)//失败状态值为3的Promise对象
        throw 5

    }
).then(
    value => {
        console.log('onResolved2--' + value);
    },
    reason => {
        console.log('onRejcected2--' + reason);
    }
)
```

- 如果抛出异常，新promise变为rejected，reason为抛出的异常。

```js
new Promise((resolve, reject) => {
    resolve(1)
    // reject(2)
}).then(
    value => {
        console.log('onResolved1--' + value);
        // throw 5
        throw new Error('err')
    },
    reason => {
        console.log('onRejcected1--' + reason);
    }
).then(
    value => {
        console.log('onResolved2--' + value);
    },
    reason => {
        console.log('onRejcected2--' + reason);// 5 | err
    }
)
```

### 5.Promise如果串联多个操作任务 ❓

1. promise的.then()返回一个新promise对象，可以看成then()的链式调用
2. 通过.then()的链式调用，串联多个同步或异步任务。

```js
new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('执行任务1（异步）');
        resolve(1)
    }, 1000);
}).then(
    value => {
        console.log('任务一的结果', value);
        console.log('执行任务2（同步）');
        return 2
    },
).then(
    value => {
        console.log('任务二的结果', value);
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                console.log('执行任务3（异步）');
                resolve(3)
            }, 1000)
        })
    }
).then(
    value => {
        console.log('任务三的结果', value);
    })
```

### 6. Preomise 的异常传透 ❓

1. 当使用promise的.then()链式调用时，可以在最后指定失败的回调；
2. 前面任何操作了异常，都会传到最后失败的回调中处理。

```js
// 例子：失败的状态，但时.then中没有定义 reason=>{}
// 会直接传透到最后的.catch()中。
new Promise((resolve, reject) => {
    // resolve(1)
    reject(2)
}).then(
    value => {
        console.log('onResolved', value);
    },
).then(
    value => {
        console.log('onResolved', value);
    },

).then(
    value => {
        console.log('onResolved', value);
    },

).catch(
    reason => {
        console.log('onRejected', reason);
    }
)
```

```js
// 实际内部的操作 reason => { throw reason } or reason => Promise.reject(reason)
new Promise((resolve, reject) => {
    // resolve(1)
    reject(2)
}).then(
    value => {
        console.log('onResolved', value);
    },
    // reason => { throw reason }
    // reason => Promise.reject(reason)
).then(
    value => {
        console.log('onResolved', value);
    },
    // reason => { throw reason }
    // reason => Promise.reject(reason)

).then(
    value => {
        console.log('onResolved', value);
    },
    // reason => { throw reason }
    // reason => Promise.reject(reason)

).catch(
    reason => {
        console.log('onRejected', reason);
    }
)
```

### 7. 中断 promise 链

1. 当使用promise的.then()链式调用时，在中间中断，不在调用后面的回调函数。
2. 办法：在回调函数中返回一个pending状态的promise对象。

```js
new Promise((resolve, reject) => {
    // resolve(1)
    reject(2)
}).then(
    value => {
        console.log('onResolved', value);
    },
    reason => { throw reason }
).then(
    value => {
        console.log('onResolved', value);
    },
    reason => { throw reason }
).then(
    value => {
        console.log('onResolved', value);
    },
    reason => Promise.reject(reason)
).catch(
    reason => {
        console.log('onRejected', reason);
        // throw reason
        // return Promise.reject(reason);
        // 没有throw reason 或者 return Promise.reject(reason) 下一个.then()的值是 resolve ：undefined ，因为返回值是 undefined
        //
        // 中断执行链式调用
        //返回一个新的状态为pending的promise对象即可
        return new Promise(() => { })
    }
).then(
    value => {
        console.log('onResolved2', value);
    },
    reason => {
        console.log('onRejected2', reason);
    }
)
```
