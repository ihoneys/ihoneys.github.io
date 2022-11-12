---
title: Vue 路由（总结复习）
date: 2019-12-08
sidebar: 'auto'
tags:
 - vue
publish: true
# 打赏
showSponsor: true
---

1. 三大核心

- 跳转
- 传参
- 拦截 【权限控制】

2. 跳转方式

- 常规方法 用<router-link to='path'></router-link>
- js `this.$router.push()`|`replace`| `back` | `go` |

3. `$router`和`$route` 的区别

- `$router` 路由实例，`$route`当前路由信息

4. 传参

```js
query：在router-link标签上 to={path:"/path",query:{name:xxx}} ;to='/path?name=xxx'
js中 this.$router.push({
    path:"./path",
    query:{name:xxx}
})

params 动态路由的传参方式
在router-link标签上， :to ={name:"routerName",params:{id:xxx}}
js中 this.$router.push({
    name:"routerName",
    params:{name:xxx}
})
在route-view标签$router.xxx获取
```

5. 拦截：路由守卫

- `beforeEach` 全局前置守卫，当导航跳转之前拦截
- `afterEach` 全局后置守卫，导航跳转之后拦截
