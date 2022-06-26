---
title: Express
date: 2020-5-21
 
categories:
 - 后端技术
tags:
 - Express

---
## 安装 Express

- 安装 `express` (`版本4.X`)

```js
npm i express -g
```

- 安装`express-generator`

```js
npm install express-generator -g
```

:::warning
`express4`以前（不包括4）版本都是命令行工具和框架本身集成在一起，从4版本开始将两者分开，`express4`和`express-generator`都安装才是完整的。如果 你的是3版本或者更低的版本，则只安装`express`即可。
:::

- 验证安装

```js
express --version
```

## 创建express 项目

1. 创建

```js
express testapp
```

2. 进入项目

```js
cd testapp
```

3. 安装依赖包

```js
npm i
```

4. 启动项目

```js
npm start
```
