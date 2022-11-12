---
title: Webpack 
subtitle: Webpack 相关面试题 # 博客副标题（可选）
date: 2022-04-01
sidebar: 'auto'
categories:
 - 面试题
tags:
 - Webpack
 - 面试题
---

**webpack 插件用过那些。并且用过那些插件做性能优化。写过哪些插件。**

- **speed-measure-webpack-plugin（分析打包速度）**
- **wepack-bundle-analyzer（分析打包体积）**
- **thread-loader（如果是 vue-cli3 的话自动化启用多线程打包）**
- **compression-wepack-plugin（开启 gizp）（还有需要在pack.json里面添加 openGzip 字段。）**
- **uglifyjs-wepack-plugin（去除console.log）**
- **image-wepack-loader（图片压缩）**
- **cache-loader（将结果缓存到磁盘里，减少二次构建时间）**

[参考地址](https://juejin.cn/post/6844904094281236487#heading-1)

**webpack 处理图片的 loader？**

- url-loader（可以将图片的url转成base64，减少http请求）
- file-loader
- image-loader
- [https://juejin.cn/post/6844903954988580872](https://juejin.cn/post/6844903954988580872)

**webpack 打包流程？**

**webpack 打包后的文件会有 chunk 文件是什么意思？**

- 就是输出文件名加上hash值。

**提取公共代码？**

[https://cloud.tencent.com/developer/article/1495249?from=15425](https://cloud.tencent.com/developer/article/1495249?from=15425)

**webpack tree sharking 怎么配置？**

[https://juejin.cn/post/7004297344300777502](https://juejin.cn/post/7004297344300777502)

**webpack 如何开启 gizp 压缩？**

[https://segmentfault.com/a/1190000039738860](https://segmentfault.com/a/1190000039738860)