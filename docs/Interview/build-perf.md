---
# layout: Post
title: 几个打包优化相关
date: 2020-11-10
# catalog: true
categories:
  - 面试题
tags:
  - 打包优化
  - 面试题
---

## 按需打包`moment.js`

`moment.js`日期转换插件占用空间大的原因在于，moment 中包含了大量语言资源文件。可以通过`webpack`自身的功能即可在打包时丢弃这些无用的内容。

```js
const webpack = require("webpack");
config.plugins.push(
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
);
```

## `loadsh`按需打包

使用`lodash-webpack-plugin`插件，自动移除没有用到`lodash`代码：

> 该插件在使用一些方法时可能会删除一些没必要的依赖，导致程序摆错，解决方法时自己补全依赖，或者换用`lodash-es`

```js
const lodshWebpackPlugin = require("lodash-webpack-plugin");

module.exports = {
  configureWebpack: (config) => {
    const plugins = [new lodshWebpackPlugin()];
    // or
    config.plugins.push(new lodshWebpackPlugin());
  },
};
```

## 可视化分析打包文件

要解决打包文件过大的问题，先要分析什么原因导致了文件大，哪些地方可以减少打包大小。

```js
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");

module.exports = {
  configureWebpack: (config) => {
    // 在build时候查看
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(new BundleAnalyzerPlugin());
    }
  },
};
```

## Gzip 压缩

安装插件`compression-webpack-plugin`，打开代码压缩，`npm install --save-dev compression-webpack-plugin`，现在的`vue.config.js`代码如下，但是，需要注意的是，服务器上`nginx`也必须开启`gzip`才能生效。

```js
// gzip压缩
const CompressionWebpackPlugin = require("compression-webpack-plugin");

module.exports = {
  productionSourceMap: false,
  configureWebpack: (config) => {
    // 生产环境相关配置
    if (isProduction) {
      //gzip压缩
      const productionGzipExtensions = ["html", "js", "css"];
      config.plugins.push(
        new CompressionWebpackPlugin({
          filename: "[path][base].gz",
          algorithm: "gzip",
          test: new RegExp("\\.(" + productionGzipExtensions.join("|") + ")$"),
          threshold: 10240, // 只有大小大于该值的资源会被处理 10240
          minRatio: 0.8, // 只有压缩率小于这个值的资源才会被处理
          deleteOriginalAssets: false, // 删除原文件
        })
      );
    }
  },
};
```

`Gzip `压缩背后的原理，是在一个文本文件中找出一些重复出现的字符串、临时替换它们，从而使整个文件变小。根据这个原理，文件中代码的重复率越高，那么压缩的效率就越高，使用 `Gzip `的收益也就越大。反之亦然。

## 代码压缩

安装插件`npm i -D uglifyjs-webpack-plugin`

```js
// 代码压缩
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");

// 代码压缩
config.plugins.push(
  new UglifyJsPlugin({
    uglifyOptions: {
      //生产环境自动删除console
      compress: {
        drop_debugger: true,
        drop_console: true,
        pure_funcs: ["console.log"],
      },
    },
    sourceMap: false,
    parallel: true,
  })
);
```

## 公共代码抽离

```javascript
// 公共代码抽离
config.optimization = {
  splitChunks: {
    cacheGroups: {
      vendor: {
        chunks: "all",
        test: /node_modules/,
        name: "vendor",
        minChunks: 1,
        maxInitialRequests: 5,
        minSize: 0,
        priority: 100,
      },
      common: {
        chunks: "all",
        test: /[\\/]src[\\/]js[\\/]/,
        name: "common",
        minChunks: 2,
        maxInitialRequests: 5,
        minSize: 0,
        priority: 60,
      },
      styles: {
        name: "styles",
        test: /\.(sa|sc|c)ss$/,
        chunks: "all",
        enforce: true,
      },
      runtimeChunk: {
        name: "manifest",
      },
    },
  },
};
```

## CDN 资源引入

在`vue.config.js`中配置

```js
// 是否为生产环境
const isProduction = process.env.NODE_ENV !== "development";

// 本地环境是否需要使用cdn
const devNeedCdn = false;

// cdn链接
const cdn = {
  // cdn：模块名称和模块作用域命名（对应window里面挂载的变量名称）
  externals: {
    vue: "Vue",
    vuex: "Vuex",
    "vue-router": "VueRouter",
    marked: "marked",
    "highlight.js": "hljs",
    nprogress: "NProgress",
    axios: "axios",
  },
  // cdn的css链接
  css: ["https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.css"],
  // cdn的js链接
  js: [
    "https://cdn.bootcss.com/vue/2.6.10/vue.min.js",
    "https://cdn.bootcss.com/vuex/3.1.2/vuex.min.js",
    "https://cdn.bootcss.com/vue-router/3.1.3/vue-router.min.js",
    "https://cdn.bootcss.com/marked/0.8.0/marked.min.js",
    "https://cdn.bootcss.com/highlight.js/9.18.1/highlight.min.js",
    "https://cdn.bootcss.com/nprogress/0.2.0/nprogress.min.js",
    "https://cdn.bootcss.com/axios/0.19.2/axios.min.js",
  ],
};

module.exports = {
  chainWebpack: (config) => {
    // ============注入cdn start============
    config.plugin("html").tap((args) => {
      // 生产环境或本地需要cdn时，才注入cdn
      if (isProduction || devNeedCdn) args[0].cdn = cdn;
      return args;
    });
    // ============注入cdn start============
  },
  configureWebpack: (config) => {
    // 用cdn方式引入，则构建时要忽略相关资源
    if (isProduction || devNeedCdn) config.externals = cdn.externals;
  },
};
```

相应在`index.html`中引入使用了`CDN`的链接

```html
<!DOCTYPE html>
<html lang="en" style="width: 100%;height: 100%;">
  <head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width,initial-scale=1.0" />
    <link rel="icon" href="<%= BASE_URL %>favicon.ico" />

    <!-- 使用CDN的CSS文件 -->
    <% for (var i in htmlWebpackPlugin.options.cdn &&
    htmlWebpackPlugin.options.cdn.css) { %>
    <link href="<%= htmlWebpackPlugin.options.cdn.css[i] %>" rel="stylesheet" />
    <% } %>
    <!-- 使用CDN的CSS文件 -->

    <title>CoolDream</title>
  </head>
  <body style="width: 100%;height: 100%;">
    <noscript>
      <strong
        >We're sorry but blog doesn't work properly without JavaScript enabled.
        Please enable it to continue.</strong
      >
    </noscript>
    <div id="app"></div>
    <!-- built files will be auto injected -->

    <!-- 使用CDN的JS文件 -->
    <% for (var i in htmlWebpackPlugin.options.cdn &&
    htmlWebpackPlugin.options.cdn.js) { %>
    <script src="<%= htmlWebpackPlugin.options.cdn.js[i] %>"></script>
    <% } %>
    <!-- 使用CDN的JS文件 -->
  </body>
</html>
```

## 图片压缩

使用图片压缩插件，安装插件 `npm install image-webpack-loader -D`

在`chainWebpack`中新增以下代码

```js
config.module
  .rule("images")
  .user("image-webpack-loader")
  .loader("image-webpack-loader")
  .options({ bypassOnDebug: true })
  .end();
```

也可以放到七牛云储存文件，使用`cdn`加速让储存的静态资源访问速度更快。

**[七牛云教程](https://www.cnblogs.com/mazhichu/p/12206785.html)**

## 减少冗余代码

一个比较经典的应用，就是`Tree-Shaking`

> 意思就是基于`import/export`，`export`导出文件中，如果没有被其他文件`import`到，在最后打包的时候会被去除

使用`uglifyjs-webpack-plugin`插件

例如对一些冗余代码`console`语句，注释进行自动化删除

```js
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
configureWebpack: (config) => {
  config.optimization = {
    minimizer: [
      new UglifyJsPlugin({
        // test: /\.js(\?.*)?$/i, // 匹配文件
        cache: true, // 开启缓存
        parallel: true, // 并行化
        // compress: {
        //     // 删除所有的console语句
        //     drop_console: true,
        //     // 把使用多次的静态值自动定义为变量
        //     reduce_vars: true,
        // },
        // output: {
        //     // 不保留注释
        //     comments: false,
        //     // 使输出的代码尽可能紧凑
        //     beautify: false
        // }
        chunkFilter: (chunk) => {
          if (chunk.name === "vendor") return false;
          return true;
        },
        uglifyOptions: {
          warnings: false,
          compress: {
            drop_console: true,
            reduce_vars: true,
          },
          output: {
            comments: false,
            beautify: false,
          },
        },
      }),
    ],
  };
};
```

### 引用多组件

```js
const path = require("path");
const files = require.context("@/components/context", false, /\.vue$/);
const modules = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".vue");
  modules[name] = files(key).default || files(key);
});
```
