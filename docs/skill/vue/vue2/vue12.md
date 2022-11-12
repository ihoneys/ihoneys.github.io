---
title: Vue vuex
date: 2019-03-17
sidebar: 'auto'
tags:
 - vue
---
## state

```js
state:{
    count:0,
    obj:{},
    arr:[]
    ...
}
```

Vuex的state状态是响应式，是借助vue的data是响应式，将state存入vue实例组件的data中；Vuex的getters则是借助vue的计算属性computed实现数据实时监听。

## getters

```js
getters:{
  fullname(state,getters){

  }
}
```

- 参数
  - `state` 本`vuex`对象中的`state`
  - `getters` 本`vuex`对象中的`getters`

```js
// moduleA 中的 getters
const moduleA = {
  state: {
    msg: "123456"
  },
  getters:{
  fullname(state,getters,rootState){
      rootState.count
    }
  }
}
```

- 参数
  - `rootState`: 指根对象上的状态

## actions

```js
  actions: {
    changesome(context,payload) {
      context.commit("xxx", payload)
    }
  },
```

- 参数
  - `context`: 上下文(所在对象的)
  - `payload`: 接收的参数

```js
// moduleA 中的 actions
const moduleA = {
  state: {
    msg: "123456"
  },
  actions: {
    changesome(context,payload) {
      context.commit("xxx", payload)
    }
  },
}
```

- 参数
  - `context`: 上下文(指的是`moduleA`的上下文)
    - `commit()`:提交到当前模块
    - `rootGetters`: 根的 `getters`
    - `rootState` : 根的 `state`
    - `state`: 当前模块的 `state`
  - `payload`: 接收的参数

- 可结构出来使用

```js
  actions: {
    changesome({state,commit,rootState}) {
      //...
    }
  },
```

## mutations

```js
const store = new Vuex.Store({
  mutations: {
    updates(state, item) {
      state.info.name = "张" + item
    },

  },
})
```

- 参数
  - `state`:本 `vuex` 对象的 `state`
  - `item`: 传递的数据

## vuex 使用步骤

- 方式一

```html
<!-- 页面中 -->
<button @click="changeone">修改</button>
```

```js
// 组件、页面中的 methods
methods: {
  changeone() {
    let item = "msg";
    this.$store.dispatch("changeone", item); //传递参数
  },
},
```

```js
// store/index.js
const store = new Vuex.Store({
  state: {  },
  getters: {  },
  actions: {
    changeone(context, payload) { // 接受参数 itme
      setTimeout(() => {
        context.commit("updates", payload) // 传递参数
      }, 1000);
    },
  },
})
```

```js
// store/index.js
const store = new Vuex.Store({
  state: {  },
  getters: {  },
  mutations: {
    updates(state, payload) { // 接收参数
      state.info.name = "张" + payload // 使用参数
    },
  }
})
```

- 方式二(主要是传参方式不同)

```html
<!-- 页面中 -->
<button @click="changeone">修改</button>
```

```js
// 组件、页面中的 methods
methods: {
  changeone() {
    let item = "msg";
    this.$store.dispatch("changeone", {
          msg:"我完成了",
          success:()=>{
            console.log("状态是完成了")
        }
    }); //传递参数
  },
},
```

```js
// store/index.js
const store = new Vuex.Store({
  state: {  },
  getters: {  },
  actions: {
    changeone(context, payload) { // 接受参数 itme
      setTimeout(() => {
        context.commit("updates", payload) // 传递参数
        console.log(payload.msg)
        payload.sccess()
      }, 1000);
    },
  },
})
```

```js
// store/index.js
const store = new Vuex.Store({
  state: {  },
  getters: {  },
  mutations: {
    updates(state, payload) { // 接收参数
      state.info.name = "张" + payload // 使用参数
    },
  }
})
```

- 方式三(优雅promise)

```html
<!-- 页面中 -->
<button @click="changeone">修改</button>
```

```js
// 组件、页面中的 methods
methods: {
  changeone() {
    let item = "msg";
    this.$store
    .dispatch("changeone", "状态是完成了")//传递参数
    .then((res,rej)=>{
      console.log("状态是完成了")
      console.log(res)
    })
  },
},
```

```js
// store/index.js
const store = new Vuex.Store({
  state: {  },
  getters: {  },
  actions: {
    changeone(context, payload) { // 接受参数 itme
      return new Promise((resolve,reject)=>{
        setTimeout(() => {
        context.commit("updates", payload) // 传递参数
        console.log(payload)
        resolve("123")
      }, 1000);
      })
    },
  },
})
```

```js
// store/index.js
const store = new Vuex.Store({
  state: {  },
  getters: {  },
  mutations: {
    updates(state, payload) { // 接收参数
      state.info.name = "张" + payload // 使用参数
    },
  }
})
```

## modules

1. 定义`modules`

```js
const moduleA = {
  state: {
    msg: "123456"
  },
}
const moduleB = {
  state: {
    msg: "ABC"
  },
  actions: {

  }
}
const store = new Vuex.Store({
  state: {  },
  getters: {  },
  actions: {  },
  mutations: {  },
  modules: {
    A: moduleA,
    B: moduleB
  }
})
```

2. 使用

:::warning

- `state` 使用时要区别 `moduleA` 和`moduleB`
- `getters` `actions` `mutations` 不区分 模块,只要名字对即可。
- 在模块中使用getters 有第三个参数
:::

- `state` 中的数据使用

```html
  <div>{{ $store.state.A.msg }}</div>
```

- `methods`

```js
methods:{
   changesome() {
      this.$store.dispatch("changesome");
    },
}
```

- `actions`

```js

const moduleA = {
  state: {
    msg: "123456"
  },
  actions: {
    changesome(context) {
      context.commit("changesome")
    }
  },
  mutations: {}
}
```

- `motutions`

```js
const moduleA = {
  state: {
    msg: "123456"
  },
  actions: { },
  mutations: {
    changesome(state) {
      state.msg = "ABC"
    }
  }
}
```
