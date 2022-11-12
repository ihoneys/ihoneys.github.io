---
title: Vue 使用Echarts
date: 2020-12-12
sidebar: 'auto'
tags:
 - vue

---

## 在vue中使用Echarts的步骤

### 1. 安装`echarts`

```shell
npm i  -S echarts vue-echarts
// or
yarn add echarts vue-echarts
```

### 2. 引入项目中

```js
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入echarts
import "echarts/index.js"
// 引入vue-echarts  VEcharts是自定义的
import VEcharts from 'vue-echarts'

// 注册组件 zgj-charts相当于是自定义的组件
Vue.component("zgj-charts", VEcharts)

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')

```

### 3. 在想使用`echarts`的页面使用

```js
<template>
    <div class="echarts">
   <!--引入组件并用 v-bind 绑定 options -->
      <zgj-charts :options="option"></zgj-charts>
    </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      option: {
       //在echarts官网引入想使用的图表配置···
      },
    };
  },
};
</script>
<style >
.echarts {
  width: 100%;
  height: 100vh;
}
</style>
```
