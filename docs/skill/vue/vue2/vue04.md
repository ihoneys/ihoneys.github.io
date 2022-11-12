---
title: Vue 组件
date: 2020-12-05
sidebar: 'auto'
tags:
 - vue
---
## 组件使用

1. 创建组件

`Child1.vue`

```html
<template>
  <div class="Child1">
    Child1
    <button>chlid1 修改</button>
  </div>
</template>
<script>
export default {
  name: "Child1",
  data() {
    return {};
  },
  methods: {

  },
};
</script>
<style scoped>
</style>
```

2. 使用组件

```html
<template>
  <div id="app">
    // 顶级组件
    <Child1 />
    <Child2 />
  </div>
</template>
<script>
  // 引入组件
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
export default {
  name: "app",
  components: {
    Child1,
    Child2,
  },
};
```

## 动态组件

- 父组件中渲染子组件

```html
<template>
  <div id="app">
    顶级组件
    <div v-for="item in componentList" :key="item.id">
      <component :is="item.text"></component>
    </div>
    <!-- 或者使用以下方式 -->
    <component v-for="item in componentList" :key="item.id"
      :is="item.text" ></component>
  </div>
</template>
<script>
import Child1 from "./components/Child1.vue";
import Child2 from "./components/Child2.vue";
export default {
  name: "app",
  data() {
    return {
      componentList: [
        {
          id: 1,
          text: "Child1",
        },
        {
          id: 2,
          text: "Child2",
        },
      ],
    };
  },
  components: {
    Child1,
    Child2,
  },
};
</script>
<style>

</style>

```

## 异步组件

- 异步加载组件(同路由懒加载)

```js
 components: {
    Child1: () => import(/* webpackChunkName: "test" */ './components/Child1.vue'),
    Child2,
  },
```

`/* webpackChunkName: "test" */` : webpack打包分包

## 组件缓存

- 父组件

```html
<button @click="changeone('A')">A</button>
<button @click="changeone('B')">B</button>
<button @click="changeone('C')">C</button>
<keep-alive include="Child1">
  <Child1 v-if="isshow === 'A'"></Child1>
  <Child2 v-if="isshow === 'B'"></Child2>
  <Child3 v-if="isshow === 'C'"></Child3>
</keep-alive>
  <!-- <Child1 v-show="isshow === 'A'"></Child1>
  <Child2 v-show="isshow === 'B'"></Child2>
  <Child3 v-show="isshow === 'C'"></Child3> -->
```

```js
import Child2 from "./components/Child2.vue";
import Child1 from "./components/Child1.vue";
import Child3 from "./components/Child3.vue";
components: {
  Child1,
  Child2,
  Child3,
},
```

- 子组件

```js
<template>
  <div class="Child1">A</div>
</template>
<script>
export default {
  name: "Child1",
  data() {
    return {};
  },

  mounted() {
    console.log("组件A 挂载完成");
  },
  destroyed() {
    console.log("组件A 销毁");
  },
};
</script>
<style scoped>
</style>
```

## `Mixin` 抽离组件公共逻辑

子组件一

```html
<template>
  <div class="Child1">
    <div>A</div>
    {{ aData }}
    {{ commonData }}
    <button @click="aMethods">aMethods</button>
    <button @click="commonMethods">commonMethods</button>
  </div>
</template>
<script>
import mixin from "./mixin";
export default {
  name: "Child1",
  mixins: [mixin],
  data() {
    return {
      aData: "组件A的数据",
    };
  },
  methods: {
    aMethods() {
      console.log("组件A的方法");
    },
  },
  mounted() {
    console.log("组件A 的 mounted");
  },
};
</script>
<style scoped>
</style>
```

子组件二

```js
<template>
  <div class="Child2">
    <div>B</div>
    {{ bData }}
    {{ commonData }}
    <button @click="bMethods">bMethods</button>
    <button @click="commonMethods">commonMethods</button>
  </div>
</template>
<script>
import mixin from "./mixin";
export default {
  name: "Child2",
  mixins: [mixin],
  data() {
    return {
      bData: "组件B的数据",
    };
  },
  methods: {
    bMethods() {
      console.log("组件B的方法");
    },
  },
  mounted() {
    console.log("组件 B 的 mounted");
  },
};
</script>
<style scoped>
</style>
```

`mixin.js`

```js
export default {
  data() {
    return {
      commonData: "公共的数据"
    }
  },
  methods: {
    commonMethods() {
      console.log("公共的方法");
    },
  },
  mounted() {
    console.log("common mounted");
  }
}
```
