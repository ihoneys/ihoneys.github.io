---
title: Vue 动态路由
date: 2019-03-06
sidebar: 'auto'
tags:
 - vue
 - 路由
---

## 动态路由匹配

```js
const router = new VueRouter({
  routes: [
      { path: "/user/:id", component: User }
    // 动态路径参数 以冒号开头   例 /:id
  ]
});
```

:::warning 注意
 路由的公共地址是 `/user/` 基于它下面的所有子路由，都会被 `/:id` 匹配到，比如 `/user/app` 、 `/user/blog` 等。

 这是一种匹配策略，一个路由匹配多个地址，呈现同一个页面，页面根据地址关键参数不同，展示不同的数据内容。
:::

这里介绍的是简单的动态路由，动态地址部分`/:id`这个值怎么获取到呢

```js
// 在路由组件里使用
this.$route.params.id
// 这里需要注意的是id名称不是死的，是根据配置路由时命名的变量名，动态路由可以匹配很多个，如:
path: '/user/:id/:age/:job'
// 那获取得时候就得这样写
this.$route.params.id、this.$route.params.age、this.$route.params.job
// 上面获取得就是咱们配置里写的字段名称，不是固定死的，如果是直接在html中，不加this
```

路由配置
`router/index.js`

```js
{
  // 动态路由配置
  path: '/dongtai',
  compoonent: () => import('../views/Dong')
}, {
  path: '/dongtai/:page_id',
  compoonent: () => import('../components/dongtai.vue')
}
// *是通配符，表示匹配所有，/表示根目录，* 通配符优先匹配所有路由规则，如果在规则里没有匹配到符合的规则，会匹配到通配符
// *通配符通常做容错，用户访问不存在的页面时，跳到404页面
```

## 嵌套路由

:::warning 嵌套路由和动态理由的区别

- 动态路由是不用写死子路由的，实际上动态路由也是匹配子路由的一种，
- 动态路由是一个路由模板组件匹配多个不同的路由地址，而嵌套路由是父地址不变，子路由对应各自的模板组件。
- 嵌套路由是需要写死子路由地址的，在 `children` 里； 一般用在类似面包屑导航的路由结构里，还有一些应用的路由数据是后端给的，嵌套的时候多，就需要我们对嵌套有一个深层的了解。
- 嵌套路由不会丢失父页面的内容，动态路由只显示匹配到的子路由内容
:::

路由配置
`router/index.js`

```js
routes: [
  {
    path: "/dongtai",
    component: DongTai
    children: [
      {
        path: "news",
        component: DongTaiNew
      },
      {
        path: "about",
        component: DongTaiObout
      }
    ]
  }
]

// index.vue
<router-link to="/dongtai/news">新闻</router-link>
<router-link to="/dongtai/about">关于</router-link>
<router-view />

// 如果？我想页面一打开就显示其中一个子路由，比如新闻路由
{
  path: "/dongtai",
  // component: DongTai
  component: DongTai,
  children: [
    {
      path: "",// 这里表示的就是当前父级路由
      component: DongTaiNew
    },
    {
      path: "news",
      component: DongTaiNew
    },
    {
      path: "about",
      component: DongTaiObout
    }
  ]
}
```

## 嵌套路由配合动态路由

```js
// 这里需要注意 children 里的地址一定要写全。
const router = new VueRouter({
  routes: [
    {
      path: "/dongtai/:id",
      component: DongTai,
      children: [
        {
          path: "/dongtai/news",
          component: DongTaiNew
        },
        {
          path: "/dongtai/about",
          component: DongTaiObout
        }
      ]
    }
  ]
});
// 你会发现页面跳转到/dongtai里的时候空白页了,因为这还是动态路由，它需要/dongtai/xx 的形式，所以匹配不上，需要在它的上面写一个普通匹配
const router = new VueRouter({
  routes: [
    {
      path: "/dongtai",
      component: DongTai
    },
    {
      path: "/user/:id",
      component: User,
      children: [
        {
          path: "/dongtai/news",
          component: DongTaiNew
        },
        {
          path: "/dongtai/about",
          component: DongTaiObout
        }
      ]
    }
  ]
});
// 小坑
<router-link to="/dongtai/news">新闻</router-link>
<router-link to="/dongtai/about">关于</router-link>
<router-view />// 这里就是渲染出子路由的位置
```

## 监听路由变化

由于动态路由复用的是同一个组件，为了优化性能，所以不会重新加载组件，那么我们需要使用监听或监听路由函数【路由守卫】来获取路由更新的参数

```js
watch: {
    '$route' (to, from) {
      // 对路由变化作出响应...
    }
  }
  // or 使用计算属性也可以
computed: {
  id: function(){
    return this.$route.params.id
  }
}
//  使用v2.2 中引入的 beforeRouteUpdate 导航守卫
beforeRouteUpdate (to, from, next) {
  // react to route changes...
  // don't forget to call next()
}
```
