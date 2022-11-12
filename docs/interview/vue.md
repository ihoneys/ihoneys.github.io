---
title: Vue 
subtitle: Vue 相关面试题 # 博客副标题（可选）
date: 2022-04-01
sidebar: 'auto'
categories:
 - 面试题
tags:
 - Vue
 - 面试题
---

## computed 和 watch 的区别

**computed：**

- 支持缓存，依赖数据发生变化了，会重新计算。
- 不支持异步
- 一般一个属性由其他属性计算而来，这个属性依赖其他属性，一般会使用 computed

**watch：**

- 不支持缓存，数据变化就会触发相应的操作。
- 支持异步
- watch 监听函数接收两个参数，一个变化的旧值，一个是新值。设置 deep 为 ture 可以深度监听到对象深层的属性改变。
- 必须监听的是 data 中的属性，或者 props 传递过来的属性。

[参考地址](https://juejin.cn/post/6919373017218809864#heading-3)

## 数据双向绑定原理？

- 数据劫持，结合发布，订阅模式，通过 Object.defineProperty()来劫持各个属性的 setter，getter。在数据变化时，发布消息给订阅者，触发相应的监听回调。
- 需要 observer 的数据对象递归遍历，包括子属性对象的属性，都加上 setter，和 getter，如果对象某个值发生变化，就会触发 setter。

[参考地址](https://segmentfault.com/a/1190000039750996)

## 介绍一下项目整个项目的 vuex 状态管理。

**你有更加复杂的状态管理体系吗？**

[https://juejin.cn/post/6999770044213231652](https://juejin.cn/post/6999770044213231652)

**vuex 储存服务端数据？这不好吧？那这边怎么做数据同步更新呢？**

## **vue指令实现有实现过哪里指令**

参考地址：[https://juejin.cn/post/6906028995133833230](https://juejin.cn/post/6906028995133833230)

## computed原理

[https://juejin.cn/post/6844904199596015624](https://juejin.cn/post/6844904199596015624)

**computed 和 watch 的原理？**

- [https://www.bilibili.com/video/BV1Bg411T7GL?spm_id_from=333.337.search-card.all.click](https://www.bilibili.com/video/BV1Bg411T7GL?spm_id_from=333.337.search-card.all.click)

## 登录路由处理？

**路由钩子函数，组件内的路由钩子函数？**

[https://router.vuejs.org/zh/guide/advanced/navigation-guards.html](https://router.vuejs.org/zh/guide/advanced/navigation-guards.html)

**vuex持久化怎么做到的？**

- [https://www.fate.cafe/2020/11/30/Vue-%E6%95%B0%E6%8D%AE%E6%8C%81%E4%B9%85%E5%8C%96%EF%BC%9AVuex-%E5%92%8C-localStorage/](https://www.fate.cafe/2020/11/30/Vue-%E6%95%B0%E6%8D%AE%E6%8C%81%E4%B9%85%E5%8C%96%EF%BC%9AVuex-%E5%92%8C-localStorage/)
- 第二使用 vuex-presistedState 持久化插件。

**vuex怎么定义多模块？**

[https://vuex.vuejs.org/zh/guide/modules.html](https://vuex.vuejs.org/zh/guide/modules.html)

**组件加载顺序，以及子组件加载顺序？**

[https://juejin.cn/post/6919373017218809864#heading-3](https://juejin.cn/post/6919373017218809864#heading-3)（子组件和父组件的执行顺序）

**keep-alive?**

[https://juejin.cn/post/6844903919273918477](https://juejin.cn/post/6844903919273918477)

- [https://cn.vuejs.org/v2/api/#keep-alive](https://cn.vuejs.org/v2/api/#keep-alive)（官网）

**双向数据绑定？**

[https://www.bilibili.com/video/BV1Z7411d7mf?p=1](https://www.bilibili.com/video/BV1Z7411d7mf?p=1)

**vue数组什么时候不更新？更新数据的方式？对象什么情况下，vue不会响应式更新？**

**组件通信？**

**父组件改变子组件的 props 可以响应式吗？**

[https://juejin.cn/post/6844904057245696013](https://juejin.cn/post/6844904057245696013)

**vue diff 算法？什么时候才会触发 diff ？**

**更新时候**

**nextTick执行机制?**

[https://blog.csdn.net/wlanye/article/details/103984025](https://blog.csdn.net/wlanye/article/details/103984025)

**vue2 对比 vue3有什么区别？**

## 相关 Vue 面试题

[https://mp.weixin.qq.com/s/y9olkntgR-9DFJVrmZsrsw](https://mp.weixin.qq.com/s/y9olkntgR-9DFJVrmZsrsw)