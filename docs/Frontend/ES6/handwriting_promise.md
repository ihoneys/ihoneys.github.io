---
title: 手写 Promise 函数
date: 2020-06-20
categories:
 - 前端基础
tags:
 - 前端基础
 - ES6
---

# 深入理解异步解决方案



异步几种解决方案

- callbak回调
- 事件监听（发布/订阅）解析
- Promise
- Generator
- Async/await

### [宏任务微任务题目及理解](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/7)

### 简述回调函数

回调函数都清楚，简单来说只是一个函数作为另一个函数的参数。

但是回调函数并不一定是异步，并没有直接关系，它只是一种异步的解决方案，这里得弄清楚。



优点：简单，容易理解和部署。

缺点：回调函数最缺点是不利于代码阅读和维护，各个部分之间高耦合。

```javascript
fun1(() => {
  fun2(() => {
    fun3(() => {
      fun4(() => {
        fun5(() => {
          fun6()
        })
      })
    })
  })
})
```

- 看了事件监听
- 发布订阅模式
- 回顾promise用法
- 手写promise，处理异步回调



明日任务 promise 、、微信小程序撸撸猫





## [Promise原理剖析](https://mp.weixin.qq.com/s?__biz=MzUzNjk5MTE1OQ==&mid=2247484866&idx=1&sn=f6324e0944dfcfa2645508abd74255b0&scene=21#wechat_redirect)

### 第一步处理异步回调，第二步Promise/A+规范

```javascript
// PromiseA+规范三种状态；
const PENDING = 'pending';
const FULFILLED = 'fulfilled';
const REJECTED = 'rejected';
class MyPromise {
    constructor(executor) {
        this._resolveQueue = []; //成功队列，resolve时触发。
        this._rejectQueue = []; // 接收失败回调，reject时触发
        this.state = PENDING // 首先将state设置未pending状态
        // 这里 由于resolve/reject实在executor内部被调用，因此需要使用箭头函数固定this指向，否则找不到this._resolveQueue
        let _resolve = (val) => {
            if (this.state !== PENDING) return // 对应规范中的状态只能由pending到fulfilled或rejected
            this.state = FULFILLED // 变更状态

            // 这里使用队列储存回调，为了实现规范要求’then‘方法可以被同一个promise调用多次
            // 如果使用一个变量而非队列来存储回调，那么及时多次p.then()也只会执行一次回调
            while (this._resolveQueue.length) {
                const callback = this._resolveQueue.shift()
                callback(val)
            }
        }
        let _reject = (reason) => {
            if (this.state !== PENDING) return
            this.state = REJECTED
            while (this._rejectQueue.length) {
                const callback = this._rejectQueue.shift()
                callback(reason)
            }
        }
        executor(_resolve, _reject)
    }
    then(resolveFn, rejectFn) {
        this._resolveQueue.push(resolveFn)
        this._rejectQueue.push(rejectFn)
    }
}
const p = new MyPromise((resolve, reject) => {
    setTimeout(() => {
        resolve(1234)
    }, 1000)
})
p.then(v => console.log(v))
```

### 第三步考虑then链式调用

```javascript
then(resolveFn, rejectFn) {
  // return 一个新的promise
  return new Promise((resolve, reject) => {
    // 把resolveFn重新封装一下，在push到resolve执行队列中，这是为了能够获取回调的返回值进行分类讨论
    const fulfilled = value => {
      try {
        //执行第一个(当前的)Promise的成功回调,并获取返回值
        let x = resolveFn(value);
        //分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
        x instanceof Promise ? x.then(resolve, reject) : resolve(x);
      } catch (error) {
        reject(error);
      }
    }
    this._resolveQueue.push(fulfilled);
    const rejectedFn = error => {
      try {
        let x = rejectFn(error);
        x instanceof Promise ? x.then(resolve, reject) : resolve(x);
      } catch (error) {
        reject(error);
      }
    }
    this._rejectQueue.push(rejectedFn)
  })
}
```

然后就能测试一下链式调用：

```javascript
const p1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(1)
  }, 500);
})

p1
  .then(res => {
    console.log(res)
    return2
  })
  .then(res => {
    console.log(res)
    return3
  })
  .then(res => {
    console.log(res)
  })

//输出 1 2 3
```

### 第四步.值穿透 & 状态已变更的情况



**「值穿透」**：根据规范，如果 then() 接收的参数不是function，那么应该忽略它。如果没有忽略，当then()回调不为function时将会抛出异常，导致链式调用中断

**「处理状态为resolve/reject的情况」**：其实上边 then() 的写法是对应状态为`padding`的情况，但是有些时候，resolve/reject 在 then() 之前就被执行（比如`Promise.resolve().then()`），如果这个时候还把then()回调push进resolve/reject的执行队列里，那么回调将不会被执行，因此对于状态已经变为`fulfilled`或`rejected`的情况，直接执行then回调：



```javascript
// then方法,接收一个成功的回调和一个失败的回调
  then(resolveFn, rejectFn) {
    // 根据规范，如果then的参数不是function，则需要忽略它, 让链式调用继续往下执行
    typeof resolveFn !== 'function' ? resolveFn = value => value : null
    typeof rejectFn !== 'function' ? rejectFn = error => error : null
  
    // return一个新的promise
    returnnewPromise((resolve, reject) => {
      // 把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = value => {
        try {
          // 执行第一个(当前的)Promise的成功回调,并获取返回值
          let x = resolveFn(value)
          // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
          x instanceofPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
  
      // reject同理
      const rejectedFn  = error => {
        try {
          let x = rejectFn(error)
          x instanceofPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
  
      switch (this._status) {
        // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
        case PENDING:
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectedFn)
          break;
        // 当状态已经变为resolve/reject时,直接执行then回调
        case FULFILLED:
          fulfilledFn(this._value)    // this._value是上一个then回调return的值(见完整版代码)
          break;
        case REJECTED:
          rejectedFn(this._value)
          break;
      }
    })
  }
```

测试一波

```javascript
const p = new MyPromise((resolve, reject) => {
    // setTimeout(() => {
    resolve(1)
    // }, 1000)
})
p.then(v => {
    console.log(v)
    return 2
}).then(v => {
    console.log(v)
    return new MyPromise((resolve, reject) => resolve(3))
}).then(res => {
    console.log(res)
    throw new Error('reject测试')
}).then(() => { }, (err) => console.log(err))
// 1
// 2
// 3
// Error: reject测试
```

### 第五步兼容同步任务

完成了then的链式调用以后，再处理一个前边的细节，然后放出完整代码。上文说过，Promise的执行顺序是`new Promise -> then()收集回调 -> resolve/reject执行回调`，这一顺序是建立在**「executor是异步任务」**的前提上的，如果executor是一个同步任务，那么顺序就会变成`new Promise -> resolve/reject执行回调 -> then()收集回调`，resolve的执行跑到then之前去了，为了兼容这种情况，给`resolve/reject`执行回调的操作包一个setTimeout，让它异步执行。

> 这里插一句，有关这个setTimeout，其实还有一番学问。虽然规范没有要求回调应该被放进宏任务队列还是微任务队列，但其实Promise的默认实现是放进了微任务队列，的实现（包括大多数Promise手动实现和polyfill的转化）都是使用setTimeout放入了宏任务队列（当然也可以用MutationObserver模拟微任务）

```javascript
//Promise/A+规定的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._status = PENDING     // Promise状态
    this._value = undefined// 储存then回调return的值
    this._resolveQueue = []    // 成功队列, resolve时触发
    this._rejectQueue = []     // 失败队列, reject时触发

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (val) => {
      //把resolve执行回调的操作封装成一个函数,放进setTimeout里,以兼容executor是同步代码的情况
      const run = () => {
        if(this._status !== PENDING) return// 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = FULFILLED              // 变更状态
        this._value = val                     // 储存当前value

        // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
        // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
        while(this._resolveQueue.length) {
          const callback = this._resolveQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }
    // 实现同resolve
    let _reject = (val) => {
      const run = () => {
        if(this._status !== PENDING) return// 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = REJECTED               // 变更状态
        this._value = val                     // 储存当前value
        while(this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }
    // new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject)
  }

  // then方法,接收一个成功的回调和一个失败的回调
  then(resolveFn, rejectFn) {
    // 根据规范，如果then的参数不是function，则需要忽略它, 让链式调用继续往下执行
    typeof resolveFn !== 'function' ? resolveFn = value => value : null
    typeof rejectFn !== 'function' ? rejectFn = error => error : null
  
    // return一个新的promise
    returnnewPromise((resolve, reject) => {
      // 把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = value => {
        try {
          // 执行第一个(当前的)Promise的成功回调,并获取返回值
          let x = resolveFn(value)
          // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
          x instanceofPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
  
      // reject同理
      const rejectedFn  = error => {
        try {
          let x = rejectFn(error)
          x instanceofPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
  
      switch (this._status) {
        // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
        case PENDING:
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectedFn)
          break;
        // 当状态已经变为resolve/reject时,直接执行then回调
        case FULFILLED:
          fulfilledFn(this._value)    // this._value是上一个then回调return的值(见完整版代码)
          break;
        case REJECTED:
          rejectedFn(this._value)
          break;
      }
    })
  }
}
```

已经实现了Promise主要功能了，下面来实现Promise其他的几个方法。

### Promise.prototype.catch()

*实现catch方法(等同于Promise.prototye.then(undefined,onRejected)),就是执行一下then的第二个回调*

> `finally()方法`返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。在finally之后，还可以继续then。并且会将值原封不动的传递给后面的then

```javascript
// 就是执行一下then的第二个回调
catch(rejectFn){
    return this.then(undefined,rejectFn);
}
```

### Promise.prototype.finally()

`finally()方法`返回一个Promise。在promise结束时，无论结果是fulfilled或者是rejected，都会执行指定的回调函数。在finally之后，还可以继续then。并且会将值原封不动的传递给后面的then

```javascript
//finally方法
finally(callback) {
  return this.then(
    value => MyPromise.resolve(callback()).then(() => value),             // MyPromise.resolve执行回调,并在then中return结果传递给后面的Promise
    reason => MyPromise.resolve(callback()).then(() => { throw reason })  // reject同理
  )
}
```

PS：finally传入的函数 无论成功和失败都执行：

```javascript
Promise.resolve(100).finally(() => {
    // 如果返回的是成功的promise 会采用上一次的结果 resolve(100)
    // 如果返回的是失败的promise，会采用这个失败的结果 reject(2200)
    // 如果都是返回失败的promise，则会采用下一次失败的结果 reject(2000)
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(2200)
        }, 1000)
    })
}).then(data => console.log(data)).catch(err => console.log(err))
```

### **Promise.resolve()**

`Promise.resolve(value)`方法返回一个以给定值解析后的Promise 对象。**如果该值为promise，返回这个promise；****如果这个值是thenable（即带有"then" 方法)），返回的promise会“跟随”这个thenable的对象，采用它的最终状态；**否则返回的promise将以此值完成。此函数将类promise对象的多层嵌套展平。



```javascript
static resolve(value) {
    if (value instanceof MyPromises) return value;
    return new MyPromises(resolve => resolve(value));
}
```

### Promise.reject()

`Promise.reject()`方法返回一个带有拒绝原因的Promise对象。

```javascript
//就是返回一个拒绝的函数
static reject(reason) {
    return new MyPromises((resolve, reject) => reject(reason))
}
```

### Promise.all()

```javascript
//静态的all方法
static all(promiseArr) {
  let index = 0
  let result = []
  returnnew MyPromise((resolve, reject) => {
    promiseArr.forEach((p, i) => {
      //Promise.resolve(p)用于处理传入值不为Promise的情况
      MyPromise.resolve(p).then(
        val => {
          index++
          result[i] = val
          //所有then执行后, resolve结果
          if(index === promiseArr.length) {
            resolve(result)
          }
        },
        err => {
          //有一个Promise被reject时，MyPromise的状态变为reject
          reject(err)
        }
      )
    })
  })
}
```

### Promise.race()

`Promise.race(iterable)`方法返回一个 promise，一旦迭代器中的某个promise解决或拒绝，返回的 promise就会解决或拒绝。

```javascript
static race(promiseArr) {
  returnnew MyPromise((resolve, reject) => {
    //同时执行Promise,如果有一个Promise的状态发生改变,就变更新MyPromise的状态
    for (let p of promiseArr) {
      Promise.resolve(p).then(  //Promise.resolve(p)用于处理传入值不为Promise的情况
        value => {
          resolve(value)        //注意这个resolve是上边new MyPromise的
        },
        err => {
          reject(err)
        }
      )
    }
  })
}
```







完整代码：

```javascript
//Promise/A+规定的三种状态
const PENDING = 'pending'
const FULFILLED = 'fulfilled'
const REJECTED = 'rejected'

class MyPromise {
  // 构造方法接收一个回调
  constructor(executor) {
    this._status = PENDING     // Promise状态
    this._value = undefined// 储存then回调return的值
    this._resolveQueue = []    // 成功队列, resolve时触发
    this._rejectQueue = []     // 失败队列, reject时触发

    // 由于resolve/reject是在executor内部被调用, 因此需要使用箭头函数固定this指向, 否则找不到this._resolveQueue
    let _resolve = (val) => {
      //把resolve执行回调的操作封装成一个函数,放进setTimeout里,以兼容executor是同步代码的情况
      const run = () => {
        if(this._status !== PENDING) return// 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = FULFILLED              // 变更状态
        this._value = val                     // 储存当前value

        // 这里之所以使用一个队列来储存回调,是为了实现规范要求的 "then 方法可以被同一个 promise 调用多次"
        // 如果使用一个变量而非队列来储存回调,那么即使多次p1.then()也只会执行一次回调
        while(this._resolveQueue.length) {
          const callback = this._resolveQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }
    // 实现同resolve
    let _reject = (val) => {
      const run = () => {
        if(this._status !== PENDING) return// 对应规范中的"状态只能由pending到fulfilled或rejected"
        this._status = REJECTED               // 变更状态
        this._value = val                     // 储存当前value
        while(this._rejectQueue.length) {
          const callback = this._rejectQueue.shift()
          callback(val)
        }
      }
      setTimeout(run)
    }
    // new Promise()时立即执行executor,并传入resolve和reject
    executor(_resolve, _reject)
  }

  // then方法,接收一个成功的回调和一个失败的回调
  then(resolveFn, rejectFn) {
    // 根据规范，如果then的参数不是function，则需要忽略它, 让链式调用继续往下执行
    typeof resolveFn !== 'function' ? resolveFn = value => value : null
    typeof rejectFn !== 'function' ? rejectFn = error => error : null
  
    // return一个新的promise
    returnnewPromise((resolve, reject) => {
      // 把resolveFn重新包装一下,再push进resolve执行队列,这是为了能够获取回调的返回值进行分类讨论
      const fulfilledFn = value => {
        try {
          // 执行第一个(当前的)Promise的成功回调,并获取返回值
          let x = resolveFn(value)
          // 分类讨论返回值,如果是Promise,那么等待Promise状态变更,否则直接resolve
          x instanceofPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
  
      // reject同理
      const rejectedFn  = error => {
        try {
          let x = rejectFn(error)
          x instanceofPromise ? x.then(resolve, reject) : resolve(x)
        } catch (error) {
          reject(error)
        }
      }
  
      switch (this._status) {
        // 当状态为pending时,把then回调push进resolve/reject执行队列,等待执行
        case PENDING:
          this._resolveQueue.push(fulfilledFn)
          this._rejectQueue.push(rejectedFn)
          break;
        // 当状态已经变为resolve/reject时,直接执行then回调
        case FULFILLED:
          fulfilledFn(this._value)    // this._value是上一个then回调return的值(见完整版代码)
          break;
        case REJECTED:
          rejectedFn(this._value)
          break;
      }
    })
  }

  //catch方法其实就是执行一下then的第二个回调
  catch(rejectFn) {
    returnthis.then(undefined, rejectFn)
  }

  //finally方法
  finally(callback) {
    returnthis.then(
      value => MyPromise.resolve(callback()).then(() => value),             //执行回调,并returnvalue传递给后面的then
      reason => MyPromise.resolve(callback()).then(() => { throw reason })  //reject同理
    )
  }

  //静态的resolve方法
  static resolve(value) {
    if(value instanceof MyPromise) return value //根据规范, 如果参数是Promise实例, 直接return这个实例
    returnnew MyPromise(resolve => resolve(value))
  }

  //静态的reject方法
  static reject(reason) {
    returnnew MyPromise((resolve, reject) => reject(reason))
  }

  //静态的all方法
  static all(promiseArr) {
    let index = 0
    let result = []
    returnnew MyPromise((resolve, reject) => {
      promiseArr.forEach((p, i) => {
        //Promise.resolve(p)用于处理传入值不为Promise的情况
        MyPromise.resolve(p).then(
          val => {
            index++
            result[i] = val
            if(index === promiseArr.length) {
              resolve(result)
            }
          },
          err => {
            reject(err)
          }
        )
      })
    })
  }

  //静态的race方法
  static race(promiseArr) {
    returnnew MyPromise((resolve, reject) => {
      //同时执行Promise,如果有一个Promise的状态发生改变,就变更新MyPromise的状态
      for (let p of promiseArr) {
        Promise.resolve(p).then(  //Promise.resolve(p)用于处理传入值不为Promise的情况
          value => {
            resolve(value)        //注意这个resolve是上边new MyPromise的
          },
          err => {
            reject(err)
          }
        )
      }
    })
  }
}
```

## async/await实现



### 第一实现一个初步自动迭代的async/await

```javascript
function _run(gen) {
    //由于每次gen()获取到的都是最新的迭代器,因此获取迭代器操作要放在step()之前,否则会进入死循环
    var g = gen() 
    function step(val) {  //封装一个方法, 递归执行next()
        var res = g.next(val)  //获取迭代器对象，并返回resolve的值
        if (res.done) return res.value //递归终止条件
        res.value.then(val => { //Promise的then方法是实现自动迭代的前提
            step(val) //等待Promise完成就自动执行下一个next，并传入resolve的值
        })
    }
    step()
}
```

### **2.返回Promise & 异常处理**

**「需要兼容基本类型」**：这段代码能自动执行的前提是`yield`后面跟Promise，为了兼容后面跟着基本类型值的情况，需要把yield跟的内容(`gen().next.value`)都用`Promise.resolve()`转化一遍

**「缺少错误处理」**：上边代码里的Promise如果执行失败，就会导致后续执行直接中断，需要通过调用`Generator.prototype.throw()`，把错误抛出来，才能被外层的try-catch捕获到

**「返回值是Promise」**：`async/await`的返回值是一个Promise，这里也需要保持一致，给返回值包一个Promise



改造一下_run()方法：

```javascript
function run(gen) {
  //把返回值包装成promise
  returnnewPromise((resolve, reject) => {
    var g = gen()

    function step(val) {
      //错误处理
      try {
        var res = g.next(val)
      } catch(err) {
        return reject(err);
      }
      if(res.done) {
        return resolve(res.value);
      }
      //res.value包装为promise，以兼容yield后面跟基本类型的情况
      Promise.resolve(res.value).then(
        val => {
          step(val);
        },
        err => {
          //抛出错误
          g.throw(err)
        });
    }
    step();
  });
}
```