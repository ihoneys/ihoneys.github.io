---
title: serve
date: 2020-02-08
 
categories:
 - 工具
tags:
 - serve

---
## serve

### 安装serve

本地运行打包后的项目

- `serve` 安装

```js
npm install -g serve
// or
yarn add -g serve
```

- 检测是否安装成功

```js
serve -v
```

### 使用

1. 单独使用

在打包好的项目里（就是包含`dist`或其他打包生成的文件夹的目录里）

运行以下命令即可启动项目：

```js
serve -s dist   // dist 就是打包后的文件夹
// or
serve  dist
```

2. 在`package.json`文件中的`scripts`加入以下脚本：

```json
"runing": "serve ./dist"
```

- 然后项目里运行：

```js
yarn  runing
// or
npm run runing
```

即可在本地运行打包后的项目，`http://localhost:5000`

## live-server

### 安装live-server

- 安装`live-server`

```js
npm i -g live-server
```

### 使用

- 启动打包好的项目

```js
live-server dist
```

或者

```js
live-server 目录名
```

- 启动`npm`项目

```js
// 修改package.json
 "scripts": {
      "server": "live-server 某个目录"
    }
```

或者

```js
"scripts": {
      "server": "live-server ./ --port=8081"
    }
```

启动项目

```js
npm run server
```
