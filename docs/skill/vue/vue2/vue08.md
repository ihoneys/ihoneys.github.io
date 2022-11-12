---
title: Vue 路由生命周期
date: 2019-02-20
sidebar: 'auto'
tags:
 - vue
 - 路由
publish: true
# 打赏
showSponsor: true
---

`Vue-router` 路由生命周期也叫导航守卫

分3块：全局守卫、路由独立守卫、组件内守卫

## 全局守卫 main.js

全局守卫：是指路由实例上直接操作的钩子函数，特点是所有路由配置的组件都会触发，直白点就是触发路由就会触发这些钩子函数

- `beforeEach（to，from， next）`
- `beforeResolve（to，from， next）`
- `afterEach（to，from）`

1. 全局前置守卫（`beforeEach`）: 在路由跳转前触发，这个钩子作用主要是用于登录验证，也就是路由还没跳转提前告知，以免跳转了再通知就为时已晚。

```js
const router = new VueRouter({ ... })
router.beforeEach((to, from, next) => {
  // ...
})
```

2. 全局解析守卫（`beforeResolve`）: 这个钩子和`beforeEach`类似，也是路由跳转前触发，区别是在导航被确认之前，同时在所有组件内守卫和异步路由组件被解析之后，即在 `beforeEach` 和 组件内`beforeRouteEnter` 之后，`afterEach`之前调用。

3. 全局后置钩子（`afterEach`）: 和`beforeEach`相反，它是在路由跳转完成后触发，它发生在`beforeEach`和`beforeResolve`之后，`beforeRouteEnter`（组件内守卫）之前。这些钩子不会接受`next`函数也不会改变导航本身

```js
router.afterEach((to, from) => {
  // ...
})
```

- 例

```js
router.beforeEach((to, from, next) => {
  // 全局前置守卫
  // if(to.fullPath === '/shoppingCart'){
  //   //如果没有登录?对不起先去登录一下
  //   next('/login')
  // }
  console.log('1 beforeEach', to, from)
  next()
})
// 时间触发比 全局前置守卫慢些
router.beforeResolve((to, from, next) => {
  // 全局解析守卫
  console.log('3 beforeResolve', to, from)
  next()
})

router.afterEach((to, from) => {
  // 全局后置守卫、钩子
  console.log('4 afterEach', to, from)

})
```

## 路由独立守卫 router.js

路由独立守卫： 是指在单个路由配置的时候也可以设置的钩子函数

- `beforeEnter（to，from， next）`

路由独享守卫（`beforeEnter`）: 和`beforeEach`完全相同，如果两个都设置了，`beforeEnter`则在`beforeEach`之后紧随执行。在路由配置上直接定义`beforeEnter`守卫

- 例1

```js
  {
    path: '/a',
    name: 'pageA',
    components:{
      default:pageA,
      ppp:Test
    },
    beforeEnter:(to,from,next)=>{
      console.log('2 beforeEnter',to,from)
      next()
    },
  },
```

- 例2

```js
const router = new VueRouter({
  routes: [
    {
      path: '/foo',
      component: Foo,
      beforeEnter: (to, from, next) => {
        // ...
      }
    }
  ]
})
```

## 组件内守卫  xxx.vue

组件守卫：是指在组件内执行的钩子函数，类似于组件内的生命周期，相当于为配置路由的组件添加的生命周期钩子函数。

- `beforeRouteEnter（to，from， next）`
- `beforeRouteUpdadte（to，from， next）`
- `beforeRouteLeave（to，from， next）`

1. `beforeRouteEnter`：该钩子在全局守卫`beforeEach`和独享守卫`beforeEnter`之后，全局`beforeResolve`和全局`afterEach`之前调用，要注意的是该守卫内访问不到组件的实例，也就是`this`为`undefined`。因为它在组件生命周期`beforeCreate`阶段触发，此时的新组件还没有被创建。在这个钩子函数中，可以通过传一个回调给 `next`来访问组件实例。在导航被确认的时候执行回调，并且把组件实例作为回调方法的参数。

```js
beforeRouteEnter (to, from, next) {
  next(vm => {
    // 通过 `vm` 访问组件实例
  })
}
```

2. `beforeRouteUpdadte`：在当前路由改变时，并且该组件被复用时调用，可以通过this访问实例。

3. `beforeRouteLeave`：导航离开该组件的对应路由时调用，可以访问组件实例this。这个离开守卫通常用来禁止用户在还未保存修改前突然离开。该导航可以通过next( false )来取消。

```js
beforeRouteLeave (to, from , next) {
  const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
  if (answer) {
    next()
  } else {
    next(false)
  }
}
```

- 例1

```js
<template>
  ...
</template>
<script>
export default{
  data(){
    //...
  },
  beforeRouteEnter (to, from, next) {
    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
}
</script>
<style>
  ...
</style>
```

- 例2

```js
export default {
  beforeRouteEnter(to,from,next){
    //这里 拿不到this
    // 路由跳转，使用此组件时触发
    console.log('beforeRouteEnter',to,from)
    next()
  },
  beforeRouteUpdate(to,from,next){
    //可以获取 this
    // /a/123 /a/456  当 组件被复用时，触发此方法
    console.log('beforeRouteUpdate',to,from)
    next()
  },
  beforeRouteLeave(to,from,next){
    //可以获取this
    //路由跳转，不适用此组件时触发
    console.log('beforeRouteLeave',to,from)
    next()
  }
}
```

### 路由守卫回调参数

- `to`：即将要进入的目标路由对象；

- `from`：即将要离开的路由对象；

- `next`：涉及到`next`参数的钩子函数，必须调用`next()`方法来`resolve`这个钩子，否则路由会中断在这，不会继续往下执行

`next()`：进行管道中的下一个钩子。如果全部钩子执行完了，则导航的状态就是`confirmed`(确认的)。

`next( false )`中断当前的导航。如果浏览器的 URL 改变了 (可能是用户手动或者浏览器后退按钮)，那么 URL 地址会重置到from路由对应的地址。

`next( ' / ')`或者`next({ paht：' / '  })`：跳转到一个不同的地址。当前的导航被中断，然后进行一个新的导航。可传递的参数可以是`router-link`标签中的`to`属性参数或`router.push`中的选项

`next(error)`：如果传入`next`的参数是一个`Error`实例，则导航会被终止且该错误会被传递给`router.onError()`注册过的回调。

## 完整的导航解析流程

- 触发进入其它路由
- 调用要离开路由的组件守卫`beforeRouteLeave`
- 调用全局的前置守卫`beforeEach`
- 在重用的组件里调用 `beforeRouteUpdate`
- 在路由配置里调用 `beforeEnter`
- 解析异步路由组件
- 在将要进入的路由组件中调用`beforeRouteEnter`
- 调用全局的解析守卫`beforeResolve`
- 导航被确认
- 调用全局的后置钩子`afterEach`
- 触发 `DOM` 更新`mounted`
- 执行`beforeRouteEnter`守卫中传给 `next`的回调函数。
