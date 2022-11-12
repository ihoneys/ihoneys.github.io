---
title: 性能优化 
subtitle: 性能优化 相关面试题 # 博客副标题（可选）
date: 2022-04-01
sidebar: 'auto'
categories:
 - 面试题
tags:
 - 性能优化
 - 面试题
---

- 静态资源使用 CDN ，如果服务挂了解决方案：
- [CDN 挂掉解决方案](https://juejin.cn/post/6988781179277148196)

可以分为

- 监控
- 加载时
- 网络
- http
- http1.1 换成 http 2.2
- 多路复用
- 头部压缩
- 优先级（可以设置一个高优先级请求，）
- 二进制分帧（将消息分割为更小的消息块）
- http2实现方式：[https://zhuanlan.zhihu.com/p/29609078](https://zhuanlan.zhihu.com/p/29609078)
- 使用强缓存，或者协商缓存。
- 减少 HTTP 请求
- 把图片链接换成base64，通过 canvas 的 toDataUrl 方法。
- 首屏渲染
- 使用组件懒加载
- asyncRouter
- lazy
- 图片懒加载
- [https://github.com/BetaSu/fe-hunter/issues/4#issuecomment-1075856575](https://github.com/BetaSu/fe-hunter/issues/4#issuecomment-1075856575)
- 其他
- 服务端渲染
- 使用缓存，缓存相同的资源
- 一些固定图片可以使用本地缓存 location
- 添加 async defer
- 优先加载 css 给 link 添加 rel="prefetch"
- 减少重排重绘
- 组件卸载移除一些监听时间
- 交互时
- loading 加载
- 骨架屏
- 路由组件缓存
- 构建时
- 压缩文件（compression-webpack-plugin）gzip
- 图片压缩（image-wepack-loader）
- 按需加载（tree-sharking）
- babel-import-plugin，.babelrc 里面设置 plugin，vite 中使用 vite-style-import-plugin 按需加载 css。
- 去除 console.log（terser-webpack-plugin）
- CDN 减少打包体积(external属性)
- 预渲染配置（prerender-spa-plugin）
- 排查wepack 打包产物大的问题-[https://github.com/BetaSu/fe-hunter/issues/1](https://github.com/BetaSu/fe-hunter/issues/1)

## 你的项目是如何针对性进行性能优化的。

- 可以使用 lighthouse 做性能检测参考文章：[https://juejin.cn/post/6959333330277892133](https://juejin.cn/post/6959333330277892133)

**服务端渲染（ssr）？**

参考地址：[https://juejin.cn/post/6890810591968477191](https://juejin.cn/post/6890810591968477191)

- spa
- 首屏渲染满，需要等 js 加载完毕之后。
- seo 不友好，spa 模式客户端渲染从服务器发出的只是一个空壳，大部分页面内容js渲染， 自然而然 搜索引擎爬取不到内容。
- 客户端至少发送三次 http 请求，第一次发送请求页面，第二次发送页面里面的 js 脚本，第三次动态的 ajax 请求。而服务端渲染将传统的三次请求串成了一次请求，客服端只需要请求页面，解析服务端返回 html 即可。
- 页面渲染

## 虚拟列表实现原理？

[https://github.com/dwqs/blog/issues/73#](https://github.com/dwqs/blog/issues/73#)

## **cdn原理？**

[https://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/4-9CDN%E5%8A%A0%E9%80%9F.html](https://webpack.wuhaolin.cn/4%E4%BC%98%E5%8C%96/4-9CDN%E5%8A%A0%E9%80%9F.html)