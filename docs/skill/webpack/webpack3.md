---
title: Webpack 常用的loader
date: 2019-06-07
sidebar: 'auto'
tags:
 - Webpack
---

## webpack 常用的包/模块 (loader)

- `webpack`中的`loader` 一般都在 `module` 部分中配置
- `loader` 顺序是从右往左，从下到上

示例:

```js
module.export = {
    // 入口
    entry: "./src/index.js",
    // 出口
    ontput: path.resolve(__dirname, "dist"),
    // 输出的文件名
    filename: "bundle.js",
    // 指定webpack 打包要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定的时规则生效的文件
                test: /\.ts$/,
                use: "ts-loader",
                // use 其他写法，里面可以写配置 options
                // use: [
                //   { loader: "style-loader" ,
                //     options:{ ... }
                //   },
                // ]
                // 要排除的文件
                exclude: /node_modules/,
            }
        ]
    }
}
```

## 必要的包

- `webpack`

- `webpack-cli`

这俩个时`webpack`必须要的包

## 常用的

### `webpack` 本地服务器

`webpack-dev-server`

这个服务器是基于`node`的，内部使用`express`.

- 它是 `wxpress` 封装,启动并实时编译项目
- 使用它来启动 `webpack` 服务，它会执行编译，编译的文件 `main.js` 不会产生物理文件(默认在项目根目录中)，会将编译存到内存条中
- 一般使用它需要使用 `html-webpack-plugin` 插件配合开发

- 安装

安装`webpack-dev-server`，修改 `package.json` 中的 `scripts`

```js
npm install --save-dev webpack-dev-server
```

```js
"scripts":{
  "start":"webpack serve --open chrome.exe"
}
```

`mac`中是：

```js
"scripts":{
  "start":"webpack serve --open 'google chrome'"
}
```

- 配置

```js
 const path = require('path');
 const HtmlWebpackPlugin = require('html-webpack-plugin');

 module.exports = {
    mode: 'development',
    entry: {
      index: './src/index.js',
      print: './src/print.js',
   },
    devtool: 'inline-source-map',
    devServer: {
    contentBase: './dist', // 为哪个文件夹提供本地服务功能
    // prot:8080,      // 端口号
    inline:true,    // 页面实时刷新
    // historyApiFallback:  // 在SPA页面中，依赖HTML5的history模式
  },
    plugins: [ ... ],
    output: {
     filename: '[name].bundle.js',
     path: path.resolve(__dirname, 'dist'),
     clean: true,
     publicPath: '/', // 注意公共地址
   },
 };
```

### 解析 `es6` 转 `es5` 文件

- 安装

`webpack 3.x | babel-loader 8.x | babel 7.x`

```js
npm install babel-loader@8.0.0-beta.0 @babel/core @babel/preset-env webpack
```

- 配置

```js
module: {
  rules: [
    {
      test: /\.js$/,
      // 排除
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          // presets: ['@babel/preset-env']
          presets: ['es2015']
        }
      }
    }
  ]
}
```

### 解析 `TypeScript` 文件

`typescript` \ `ts-loader`

打包 `typescript` (`.ts`)文件时使用

- 安装

```bash
npm install --save-dev ts-loader
```

- 配置

`webpack.config.js`

```js
module.export = {
  ···
    module: {
      // 指定要加载的规则
        rules: [
          {
            // test 指定的时规则生效的文件
                test: /\.ts$/,
                use: "ts-loader",
                // 要排除的文件
                exclude: /node_modules/,
            }
        ]
    }
}
```

### 解析 CSS 文件

`style-loader` / `css-loader`

- 安装

```bash
npm install --save-dev css-loader
npm install style-loader --save-dev
```

- 配置

`webpack.config.js`

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [ 'style-loader', 'css-loader' ]//顺序是从右往左，从下到上
      }
    ]
  }
}
```

`css-loader`：加入 `a.css` 中引入了 `b.css` 和 `c.css`，`css-loader` 会将其合并成一个`css`文件
`style-loader`：将合并后的 `css` 文件挂载到 `head` 标签内

### 解析 less 文件

`less-loader` / `less`

- 安装

```bash
npm install --save-dev less-loader less
```

- 配置

`webpack.config.js`

```js
module.exports = {
    ...
    module: {
        rules: [{
            test: /\.less$/,
            use: [{
                loader: "style-loader" // creates style nodes from JS strings
            }, {
                loader: "css-loader" // translates CSS into CommonJS
            }, {
                loader: "less-loader" // compiles Less to CSS
            }]
        }]
    }
};
```

### 解析 sass 文件

`sass-loader` `node-sass` `webpack`

- 安装

```bash
npm install sass-loader node-sass webpack --save-dev
```

- 配置

`webpack.config.js`

```js
module.exports = {
  ...
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
          loader: "style-loader" // 将 JS 字符串生成为 style 节点
      }, {
          loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
      }, {
          loader: "sass-loader" // 将 Sass 编译成 CSS
      }]
    }]
  }
};
```

如果使用 `scss`、`less`、`stylus` 等 `css` 预处理器。例如，我们要使用 `sass` 预处理器，首先要安装 `sass-loader`和 `node-sass`。

### 解析图片文件

 `url-loader` / `file-loader`

- 安装`url-loader`

```bash
npm install --save-dev url-loader
```

- 配置

`webpack.config.js`

`url-loader` 功能类似于 `file-loader`，但是在文件大小（单位`byte`）低于指定的限制时，可以返回一个 `Data URL`(`base64`)。图片大于规定的大小，要用`file-loader`

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              // 图片小于limit 的值会转换为 base64 字符串形式，图片大于规定的大小，要用file-loader
              limit: 8192
            }
          }
        ]
      }
    ]
  }
}
```

- 安装`file-loader`

```bash
npm install --save-dev file-loader
```

- 配置

`webpack.config.js`

```js
module.exports = {
  output:{
    path:path.resolve(__dirname,"dist"),
    filename:"bundle.js",
    // 设置 file-loader 时有时需要设置 publicPath
    publicPath:"dist/", // 设置公共 url
  },
  module: {
    rules: [
      {
        test: /\.(png|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              // img文件夹
              name:'img/[name].[hash:8].[ext]',
            }
          }
        ]
      }
    ]
  }
}
```

> - `img` : 文件要打包到的文件夹
> - `[name]` : 获取图片原来的名字，放在打包后的文件中
> - `hash:8` : 8位哈希值，防止重名
> - `ext` : 使用图片原来的扩展名

`file-loader` 的增强版，除了上述功能，还可以将文件转换为 `base64 URI`

### 解析 vue 文件

- 项目中安装

```bash
npm i vue-loader vue-template-compiler --save-dev
```

- 配置

```js
module.exports = {
  module: {
  rules: [
          {
            test: /\.vue$/,
            use: [
                {
                  // 高版本需要一个插件 否则报错
                  loader: 'vue-loader',
                }
            ]
        }
    ]
 },
  resolve:{
    // 如果想导入时想省略扩展名用以下配置
    extensions:['.js', '.jsx','.css','.vue'],
    // alias 别 名
    alias:{
      'vue$':'vue/dist/vue.ue.esm.js',
      // 'vue$':'vue/dist/vue.ue.runtime.js',
    }
  }
}
```

### `postcss-loader`

通过 `postcss-loader` 来给新属性添加厂商前缀。
