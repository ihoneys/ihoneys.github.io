---
title: React 使用Sass
date: 2021-03-26
 
categories:
 - 前端框架
tags:
 - react
 - Sass

---
### scss 书写 css 样式【文件后缀是 .scss 】

- 在 react 项目里安装命令：

```js
  npm i -D sass-loader node-sass
```

- 简单解释：`react` 脚手架基于 `sass-loader` `node-sass` 解析 `scss` 代码，转换成 `css` 代码
- 好处：可以像写 `js` 一样去写 `css`，因为它有嵌套之类的，可以快速的书写直观的样式代码
- [官网](https://www.sass.hk)
:::warning 注意
如果你用 `yarn` 安装会安装不成功，需要你设置一下:

```js
yarn config set sass-binary-site <http://npm.taobao.org/mirrors/node-sass>
```

:::

### 完成一个网页的基础布局： <http://www.yuceyingjia.com/>
