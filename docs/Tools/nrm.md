---
title: nrm
date: 2018-11-02
 
categories:
 - 工具
tags:
 - nrm

---

:::tip 介绍
使用 `nrm` 管理 `npm` 的镜像源，不用每次输入大段的代码来设置源了！
:::

## 安装和使用

1. 安装

```js
npm install nrm -g
```

2. 查看 `npm` 仓库列表

```js
nrm ls
```

结果如下

```js
  npm ---- https://registry.npmjs.org/
  cnpm --- http://r.cnpmjs.org/
* taobao - https://registry.npm.taobao.org/
  nj ----- https://registry.nodejitsu.com/
  npmMirror  https://skimdb.npmjs.com/registry/
  edunpm - http://registry.enpmjs.org/
```

3. `npm` 仓库测速(需要等待 2-3 分钟)

```js
nrm test
```

结果如下

> ```js
>   npm ---- 1505ms
>   cnpm --- 474ms
> * taobao - 745ms
>   nj ----- Fetch Error
>   npmMirror  22734ms
>   edunpm - Fetch Error
> ```

4. 选择 `npm` 仓库

```js
 nrm use taobao  // 示例:比如源换成国内较快的taobao镜像
```

- 其他镜像地址

```s
npm --- https://registry.npmjs.org/

npm --- https://registry.npm.taobao.org/

yarn --- https://registry.yarnpkg.com/

yarn --- https://registry.npm.taobao.org/

cnpm --- https://r.cnpmjs.org/

taobao --- https://registry.npm.taobao.org/

nj --- https://registry.nodejitsu.com/

rednpm --- https://registry.mirror.cqupt.edu.cn/

npmMirror --- https://skimdb.npmjs.com/registry/

deunpm --- http://registry.enpmjs.org/
```

注：最好不要用`cnpm`的源，会有不可预知的安装报错！！
