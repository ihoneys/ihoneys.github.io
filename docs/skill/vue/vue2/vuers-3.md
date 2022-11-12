---
title: Vue vuex（总结复习）
date: 2019-12-08
sidebar: 'auto'
tags:
 - vue
publish: true
# 打赏
showSponsor: true
---

1. `vuex`是什么
全局状态管理器

2. 五大组成部分

- `state` 状态数据
- `getters` 计算属性
- `actions`  异步处理方法
- `mutations`  同步修改`state`方法
- `modules`  多模块拆分`vuex`

3. `vuex`工作流程
`state`数据绑定到组件上，组件触发`dispatch` 调用`actions`里的方法， `actions`调用`commit` 触发`mutations`里的方法，`muntations`里修改state数据，state数据一改变，会自动更新组件里的元素
补充：`getters`，一旦`state`被修改，`getters`会被触发，它的功能和`vue`组件里的`component`一样，用来过渡或加工`state`数据

4. `mutations`和`actions`的区别

- `mutations` 处理同步 `actions`处理异步，修改数据只能在`mutations`里
- 就在`actions`中修改可以吗，可以，但不符合官方的规定，并且开启严格模式，会报错

5. vue 开启严格模式

- 开启严格模式，仅需在创建 `store` 的时候传入 `strict: true`

```js
    const store = new Vuex.Store({
    strict: true
})
```

6. 辅助函数

- `mapState`
- `mapGetters`
- `mapActions`
- `mapMutations`

7. 如何解决`vuex` 值刷新丢失的问题

- `vuex`数据存储在内存中，当页面刷新时就丢失了，
登录成功后，数据存入`vuex`里，但是用户刷新页面，登录状态就丢失了

- 使用本地存储，来解决安装插件`vuex-persist`
