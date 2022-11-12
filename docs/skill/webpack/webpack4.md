---
title: Webpack 常用的插件
date: 2019-06-07
sidebar: 'auto'
tags:
 - Webpack
---

## 常用的 plugins

### 编译`html`模板

`html-webpack-plugin`

是一个插件，写在`webpack`配置中的`plugins`数组中
它是将`html`模板进行编译，并把`webpack`编译好的脚本注入到 `html` 页面里

- 安装

```bash
npm install --save-dev html-webpack-plugin
```

- 配置使用

```js
// 引入
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    ···
    // 注意 publicPath:'dist/' 查看dist html中的scritp 标签的引入路径
    module: {
       ···
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin(
            {
              // 要根据 哪个 模板文件生成打包后的 html 文件
              template: "./src/index.html"
              title: "自定义title",
                ···
            }
        )
    ]
}
```

### 版权声明 `BannerPlugin`

在`webpack`中集成，所以不用单独安装。

- 配置

```js
// 引入
const webpack = require('webpack')
module.exports = {
    ···
    module: {
       ···
    },
    // 插件
    plugins: [
        new webpack.BannerPlugin('最终版权归zgaungju所有 )
    ]
}
```

### 压缩 `js`

- 安装

```bash
npm i -D uglifyjs-webpack-plugin
```

- 配置

```js
// 引入
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  plugins: [
    new UglifyJsPlugin({
      test: /\.js($|\?)/i,
      // include: /\/includes/, // 包含
      // exclude: /\/excludes/, // 不好含
    })
  ]
}
```
