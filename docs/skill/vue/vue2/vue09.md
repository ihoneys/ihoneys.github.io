---
title: Vue 路由传参
date: 2019-02-20
sidebar: 'auto'
tags:
 - vue
 - 路由
---

## 路由传参的方式（三种）

### 1. params 传参

- A

父路由发送

```html
<router-link to="/About/5/6">About</router-link>
<!--占位router.js中写占位符和key-->
```

```js
path:"/About/:aaa:bbb"
```

子路由接

```js
<h4>我是App.vue路由传参params：{{ $route.params.aaa }}{{ $route.params.bbb }}</h4>
```

注：地址栏显示  <http://localhost:8080/#/About/5/6>   to不加冒号 ：

- B

设置路由中的`name`

```js
{
  path: "/user",
  name: "user",
  component: User
},
```

父路由发送

```html
<router-link :to="{ name: 'xiaoming', params: { id: 123 } }" >About</router-link>
<!-- 用params必须用name不能用path -->
```

注：`123`换成`data`中的`key`，可以动态传递参数

子路由接

```html
<h4>我是App.vue路由传参params：{{ $route.params.id }}</h4>
```

注：地址栏中不显示， `http://localhost:8080/#/About`  只有路由名，或别名（安全）to要加冒号：

```js
//params 有两种方式，
to="/About/参数1/参数2"
//通过上面的写法，路由配置中要用占位符
:to="{name:'About',params:{参数1，参数2}}"
//第一种参数暴露在地址栏中，第二中，不暴露参数更安全
//必须用name不用path
```

### 2. `query`传参

A路由发

```html
<router-link :to="{ path: '/Home', query: { ju: 'zhang',gg：'guang' } }">Home</router-link>
```

B路由接

```html
<h4>我是App.vue路由传参query：{{ $route.query.ju }}{{ $route.query.gg }}</h4>
```

注：地址栏`http://localhost:8080/#/Home?ju=zhang&gu=guang`参数显示到地址栏中，参数键值对用`&`分开

```js
:to="{name:'About',query:{参数1，参数2}}"
//拼接在url？后面，多个参数用&符连接
```

### 3. 使用 `router-view` 组件上，动态绑定数据

父路由传

```html
<router-view :mny="mny"></router-view>
```

子路由接

```js
props: {
  mny: { type: [Array, Number] }
},
```

子路由用

```html
<h5>我是App用props传递的数据{{ mny }}</h5>
```

:::warning 注
`v-model` 只在`input`表单中
:::
