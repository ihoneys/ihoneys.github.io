---
title: npm模块
date: 2019-06-02
 
categories:
 - 工具
tags:
 - npm模块

---
## npm模块总结

### 1 husky

用途：可以很方便的在`package.json`配置`git hook` 脚本

- 常用配置(`package.json`):`vue-element-admin` 用的 `husky`

```js
 "husky": {
    "hooks": {
      "pre-commit": "npm run lint"
    }
  },
```

结合`lint-staged`

```js

{
  "husky": {
    "hooks": {
      "pre-commit": "lint-staged"
    }
  },
  "lint-staged": {
    "src/**/*.js": "prettier --write --ignore-unknown"
  }
```

### 2 lint-staged

`lint-staged`是一个在 `git` 暂存文件上（也就是被 `git add` 的文件）运行已配置的 `linter`（或其他）任务。`lint-staged` 总是将所有暂存文件的列表传递给任务

### 3 runjs

### 4 fuse.js

模糊搜索

### 5 jsonwebtoken

## 插件

- cropperjs

上传头像时，压缩图片用的

- 安装

```js
yarn add cropperjs

```
