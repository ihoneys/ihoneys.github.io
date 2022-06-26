---
title: 报错总结
date: 2020-05-15
 
categories:
 - 小知识
tags:
 - 报错总结

---

## git 报错

### git clone 时的错误

![错误](https://s3.ax1x.com/2021/03/18/6grzIP.png)

- 解决方法一

git终端中输入

```s
git config --global --unset http.proxy
git config --global --unset https.proxy
```

- 解决方法二

-
将 `https` 改为 `git`
例如

```js
git clone https://github.com/PanJiaChen/vue-admin-template.git
// 更改为
git clone git://github.com/PanJiaChen/vue-admin-template.git
```

## npm 报错

### npx报错

![npx](https://s3.ax1x.com/2020/12/25/rRt2VK.png)

原因
`node_cache`所在的文件路径包含空格。

如我的`node_cache`是这样的路径：`D:\Program Files\node\node_cache`，`node_cache`的路径中`Program Files`有一个空格。这应该算是`npx`的一个`bug`吧
