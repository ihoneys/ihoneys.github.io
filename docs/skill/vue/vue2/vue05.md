---
title: Vue 组件通信
date: 2019-02-13
sidebar: 'auto'
tags:
 - vue
 - 组件通信
---

## 1.  `props` & `$emit` 父子相互传值(常用方法)

- A、 `props` 父传子

主要传值，可以传方法，但不常用

语法：

父组件使用`v-bind`动态绑定数据 `:自定义属性名="值"`

子组件使用`props` 接收数据

```js
props：["自定义属性名"]
```

或者

```js
props：{
       "自定义属性名"：{
       type：Array，
       default：默认值，
       required：是否必填
      }
  }
```

例子：

```html
<!-- 父组件 -->
<template>
  <div class="father">
      <h2>props/$emit[传统的父子通信]</h2>
    <Son :data_Father="data_one" />  <!--第一步 父组件用 v-bind 向子组件发送数据 -->
  </div>
</template>
<script>
import Son from '../components/ZuJian/zujian/Son_one'
export default {

  name: "father",
  data() {
    return {
      data_one: "我是父组件的数据056"//父组件的数据
    }
  },
  components: {
    Son
  }
}
</script>
```

```html
<!-- 子组件 -->
<template>
  <div class="son">
  <h2>我是子组件</h2>
  组件通信练习{{ data_Father }}</div>  <!-- 使用数据 -->

</template>
<script>
export default {
  name: "son",
  props: ['data_Father']//第二步，用 props ，接收数据
};
</script>
<style>
</style>
```

:::warning 注意：
在父组件的属性名 `data_Father` 和子组件中用来接收的变量要保持一致！`data_one`在父组件一致即可，与子组件无关。
你不应该在子组件内部直接改变 `prop`，具体原因可以直接看官网介绍
:::

- B、`$emit` 子传父

可以传方法或值

语法：

子组件调用`@emit()`方法，这个方法接收两个参数

```js
$emit("自定义事件名称"（必写）,传递的值（可选）)
```

父组件使用`v-on` 简写 `@自定义事件名=""`

例子：

```html
<!-- 子组件 -->
<template>
  <div class="son">
    <h3>我是子组件组件--通信练习</h3>
    <button @click="SonClick">修改父组件数据</button>
    <!-- 子组件用 v-on 绑定一个用来修改父组件数据的函数(函数在父组件里) -->
  </div>
</template>
<script>
export default {
  name: "son",
  methods: {
    SonClick() {
      /*
      调用父组件提供的函数，从而实现父子通信
      $emit有两个参数 ，
      a 父组件提供的函数名(字符串的形式)，
      b 新是数据(传递给父组件里用于修改数据的函数的参数)
      */
     this.$emit('handleSon', '子组件修改了数据')
      // handSon是父组件函数名
    }
  }
};

</script>
<style>
</style>
```

```html
<!-- 父组件 -->
<template>
  <div class="father">
    <h3>props/$emit[传统的父子通信]</h3>
    <!-- 子组件Son用 v-on 绑定的函数修改父组件数据 一般情况下自定义函数名和值是一致的，防止混乱 本例中为了演示，不同-->
    <Son @handleSon="handleFather" />
    {{ data }}
  </div>
</template>
<script>
import Son from '../components/ZuJian/zujian/Son_one'
export default {
  name: "father",
  components: {
    Son
  },
  data() {
    return {
      data: '父组件的数据信息'
    }
  },
  methods: {
    // 声明一个让 子组件 来调用的方法
    handleFather(data_Son) {
      // 拿到了来自子组件传递过来的新的数据
      this.data = data_Son
      console.log(data_Son)
    }
  },
}
</script>
```

:::warning 注意
父组件中的函数 `handleFather` 是子组件上的自定义属性的值；`handleSon`是让子组件通过`$emit` 修改数据的函数名，和父组件里子组件上是自定义属性名一致。
:::

## 2. 父传子 `$attrs` & `$listeners`

**跨组件通信  父传子**

`Vue_2.4` 中新增的 `$attrs/$listeners` 可以进行跨级的组件通信。`$attrs` 包含了父级作用域中不作为 `prop` 的属性绑定（`class` 和 `style` 除外）

### `$attrs`

`attributes`:`属性`的缩写;可以批量向下传递数据 / **只传属性 数据**
`$attrs` 是组件（`vue`实例上）固有的用来描述该组件身上的所有属性集合的对象;如果继续向下传递，在中间组件中 `v-bind = "$attrs"`

1. 顶级组件种定义值 并传递

```js
   <Child :msg="msg" />
 data() {
    return {
      msg: "123",
    };
  },
```

2. 子组件 继续传递

```js
 <GrandChild :msg="msg"></GraChild>
```

3. 最终组件 使用数据

```js
  {{ $attrs.msg }}
```

### `$listeners`

批量向下传递方法 / **只传方法**

`$listeners` 是组件上的属性，用来保存组件身上的方法;如果继续向下传递，使用 `v-on="$listeners"`,

1. 顶级组件 定义数据和方法

```js
  //  顶级组件中将 msg(数据) changeMsgFn (方法) 传递下去
  <About :msg="msg" v-on:changeMsgFn="changeMsgFn" />
  // 向下传递的 数据
  data() {
    return {
      msg: "123",
    };
  },
  // 定义的修改父组件数据的方法， 等待 后代组件调用
  methods: {
    changeMsgFn() {
      this.msg = "abc";
    },
  },
```

2. 子级组件

```html
// 继续向下传递数据和方法
 <Child :msg="msg" v-on="$listeners"></Child>
```

3. 最终子组件

```html
  // 使用父组件 数据
  {{ $attrs.msg }}
  // 调用父组件的方法
  <button @click="$listeners.changeMsgFn">孙组件的按钮</button>
```

## 3. 子修改父 通过 props 传方法

**子组件通过传递的方法 修改父组件**

   1. 父组件

```html
        // 将数据和方法都传递给子组件
    <About :msg="msg" :changeMsgFn="changeMassage" />
<script>

import About from "./components/About.vue";
export default {
    name: "app",
    data() {
      return {
        msg: "123",
      };
    },
// 定义一个修改父组件数据的方法  一会子组件会调用该方法
    methods: {
      changeMassage() {
        this.msg = "abc";
      },
    },
  }
  </script>
```

2. 子组件

接受数据和方法

```js
props: ["msg", "changeMsgFn"],
```

绑定子组件上的事件，调用父组件的方法，达到修改父组件数据的目的

```html
 {{ msg }}
    <button @click="changeMsgFn">about子组件按钮</button>
```

## 3. 父传子 provide / inject

**只能父传子数据  父子跨级通信时**

- 父组件 注入

```js
  provide: {
    message: "123",
  },
```

- 子组件 接收

```js
  inject: ["message"],
```

使用

```js
{{message}}
```

## 4. $refs 父访问子

**父访问子**

1. 父组件使用`ref`绑定子组件，通过`$refs` 获取子组件实例，使用子组件的数据和方法

```js
    <About ref="childref" />
    <button @click="Dosome"></button>

  methods: {
    Dosome() {
      console.log(this.$refs.childref.childdata);
    },

```

2. 子组件的数据

```js
  data() {
    return {
      childdata: "childdata",
    };
  },
```

## 5. `eventBus` 中央事件池(同级通信)

**父子之间 / 同级通信**

### 父子间

1. 定义一个中央事件池 `eventBus.js`

```js
import Vue from 'vue'

const eventBus = new Vue()

export default eventBus
```

2. 需要发送数据的地方 引入`eventBus.js`文件 添加事件和数据

```js
import eventBus from "./eventBus";
 data(){
   return {
     title:""
   }
 }
 methods: {
    add() {
      // 发送方法
      eventBus.$emit("addItem", this.title);
    },
  },
```

3. 在要使用数据的地方引入，并监听数据

```js
import eventBus from "./eventBus";

    // 调用事件发送 使用数据
    methods: {
      handleAddTitle(title) {
        console.log(title);
      },
    },
  mounted() {
    // 监听事件名， 调用事件方法
    eventBus.$on("addItem", this.handleAddTitle);
  },
  // 销毁添加的事件 防止内存泄漏
  beforeDestroy() {
    eventBus.$off("addItem", this.handleAddTitle);
  },

```

### 同级之间

1. 父组件中引入子组件

```js
  // 引入子组件 并传递给子组件
    <Child1 :msg="msg" />
    <Child2 :msg="msg" />
  import Child1 from "./components/Child1.vue";
  import Child2 from "./components/Child2.vue";

  //  定义的数据
  data() {
    return {
      msg: "123",
    };

```

2. 子组件一

```js
    //Child1
    // 使用数据
    {{ myMsg }}
    // 修改数据 调用
    <button @click="changeone">chlid1 修改</button>
    //引入eventBus
    import eventBus from "./eventBus";

  // 将接收的方法赋值到本组件上
  data() {
    return {
      myMsg: this.msg,
    };
  },
  // 接收的数据
  props: ["msg"],
  // 修改用的方法
  methods: {
    changeone() {
      const a = "abc";
      this.myMsg = a;
      console.log(this.myMsg);
      // 向eventBus 中央事件池中添加自定义事件 并带参
      eventBus.$emit("changeone", a);
    },
  },
};
```

子组件二

```js
    //child2
    //使用数据
    {{ myMsg }}

  // 引入eventBus
  import eventBus from "./eventBus";
export default {
  // 将数据赋值到本组件
  data() {
    return {
      myMsg: this.msg,
    };
  },
  // 接收父组件数据
  props: ["msg"],
  // 在create钩子中监听自定义事件
  created() {
    // 接收参数并修改
    eventBus.$on("changeone", (item) => {
      this.myMsg = item;
    });
  },
```

\* 不使用父组件的数据，只从当前兄弟组件中传递给另一个组件数据也是可以的。

## 6. 同级之间通过父组件修改(比较 low )

- 顶级组件

```js
    // 父组件中的两个子组件
    <Child1 :msg="msg" @changeone="changeone" />
    <Child2 :msg="msg" />
  // 父组件中的数据
  data() {
    return {
      msg: "123",
    };
  },
  // 父组件中的修改数据的方法
  methods: {
    changeone(item) {
      this.msg = item;
    },
  },
```

- 子级组件

兄弟组件一

```html
  // 使用数据
  {{ msg }}
  // 调用 发送方法
  <button @click="changeone">chlid1 修改</button>
  //  接收数据
  <script>
  props: ["msg"],

  methods: {
    // 发送方法和数据
    changeone() {
      this.$emit("changeone", "abc");
    },
  },
  </script>
```

兄弟组件二

```js
  // 使用数据
  {{msg}}
  // 接收数据
  props: ["msg"],
```

## 7. vuex 父子/同级 通信

`vuex`仓库文件`store.js`

```js
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    msg: "123"
  },
  mutations: {
    changeone(state, item) {
      state.msg = item
    }
  },
  actions: {
    changeone(content, item) {
      content.commit("changeone", item)
    }
  },
  modules: {
  }
})

```

子组件一

```js
  // 使用仓库中的数据
  {{ $store.state.msg }}

  <button @click="changeone">chlid1 修改</button>

  methods: {
    changeone() {
      const a = "abc";
      this.$store.dispatch("changeone", a);
    },
  },
```

子组件二

```js
 {{ $store.state.msg }}
```
