---
title: 简单的 Vue 层面性能优化
date: 2021-05-12
categories:
  - 前端框架
tags:
  - vue
---

## Vue 性能优化

三个层面

- `Vue`代码层面优化
- `Webpack`配置层面优化
- 基础的 Web 技术层面的优化

### 代码层面优化

**1.1 v-if 和 v-show**

理论上都是作用于元素的显示隐藏，只是`v-if`运行在变 `Compile`阶段，`v-show`在完成渲染阶段，具体来说就是一个直接对`DOM`，一个通过`CSS`的`display`属性来操作，**如果对 DOM 显示隐藏频繁操作的话应该使用 v-if，否侧优先使用 v-if**

**1.2 v-for 和 v-if 不要一起使用**

`vFor` 的优先级其实是比 `vIF` 高的，所以当两个指令出现来一个 DOM 中，那么 `vFor` 渲染的当前列表，每一次都需要进行一次 `vIf` 的判断。

在 vue2.x 版本中可以使用计算属性`computed`优先将`vIf`不需要的值过滤掉

```js
// 计算属性
computed: {
  filterList: function () {
  return this.showData.filter(function (data) {
    return data.isShow
  })
}
// DOM
<ul>
  <li v-for="item in filterList" :key="item.id">
  {{ item.name }}
  </li>
</ul>
```

**在 Vue3.0 中**

两者作用于同一个元素上时，`v-if` 会拥有比 `v-for` 更高的优先级（3.x 版本中 `v-if` 总是优先于 `v-for` 生效）

#### vFor key 避免使用 index 作为标识

都知道`v-for`是不推荐使用`index`下标作为`key`值，这是一个非常好理解的只是点。假如插入一条数据的时候，列表中的`key`会发生变化，会对`key`变化的 `element`重新渲染，但他们除了插入一条数据都没有发生变化，这导致了没有必要的开销。

#### 释放组件资源

比如一些定时器（`setInterval`）、绑定的事件（`addEventListenter`）等等，如果不手动释放掉，name 他们依旧会占用一部分资源。

```vue
created() { this.currentInterVal = setInterval(code,millisec,lang) },
beforeDestroy() { clearInterval(this.currentInterVal) }
```

#### 长列表

在项目中，有会遇到非常多的长列表场景，普通的做法就是，一次加载十条或者二十条数据，将数据遍历，滚动到底部继续请求`api`，思考一下，随着数据加载，DOM 变得越来越多，这样导致了性能开销的问题产生，会是的的网页非常“重”。几十上百还未感觉到差异，当 DOM 元素超过上千的时候，页面开始延迟，尤其是在小型的、性能差的设备上未明显

解决方案：`vue-virtual-scroller` `vue-virtual-scroll-list`等等这些库。

#### 图片优化

图片在的项目都会遇到，大量的图片也会导致页面加载卡顿，大量的图片请求以及大图，堵塞了页面加载。一般情况下都是使用**懒加载模式**在屏幕可见情况下加载图片。还有一些其他方案：

- 小图标使用 `SVG`或者字体图标
- 通过`base64`和`webp`的范式加载小型图片（天猫淘宝也是这种做法）
- 大图可以通过`cdn`加载方式加速

#### 路由按需加载

路由懒加载的方式有两种，一种`require`，另一种`import`

```js
// require法
component: (resolve) => require(["./views/UserDetails"], resolve);

// import
component: () => import("./views/UserDetails");
```

优点：减少包体积，提高加载速度；最大化的实现随用随载；能够减少页面中的`http`请求，页面显示效果好等等

缺点：第一次进入新的页面都需要重新加载；当一个页面中嵌套多个组件时将发送多次的`http`请求，可能会造成网页显示过慢且渲染参差不齐的问题；等等

#### UI 框架使用按需引入

一个 UI 框架使用，并不会使用到所有的组件，一次性导入会增加一些冗余的体积，可以使用按需加载的方式对使用了的组件进行引入

```js
import { Button } from "xxx";
```

#### 交互优化

页面加载过程中，使用一些`loading`，骨架屏（`Skeleton`）

#### computed 与 methods

尽量使用 computed 借助它的惰性，methods 方法，没使用一次都会调用一次

[文章](https://blog.csdn.net/weixin_42164539/article/details/104486293)

#### 使用 `Object.freeze`

初始化`Vue`时，会对 data 属性递归遍历进行通过`Object.defineProperty`进行数据劫持，来实现视图响应数据的变化，有时候只是纯粹的数据展示，不会有任何改变，就不需要 `Vue` 来进行数据劫持，所以使用可以使用 `Object.freeze`冻结这个对象

#### 服务端渲染 `SSR` or 预渲染

将`Vue`在客户端标签渲染成整个`html`片段的工作在服务端完成，服务端形成的`html`片段直接返回给客户端这个过程叫做服务端渲染。

**服务端渲染优点：**

- 更好的`SEO`：因为 SPA 页面的内容是通过 Ajax 获取的，而搜索引擎爬取工具并不会等待 Ajax 异步完成后再抓取内容，所以 SPA 是抓取不到页面通过 Ajax 获取到的内容；而`SSR`是直接由服务端返回以及渲染好的页面，所以搜索引擎抓取工具可以抓取渲染好的页面；
- 更快的内容到达时间（首屏加载更快）：SPA 需要等待所有`Vue`编译后`js`文件都下载完成，才开始进行页面渲染，所以首屏加载需要一定的时间；`SSR`直接由服务端渲染好的页面直接返回显示，无需等待下载`js`文件。所以`SSR`有更快的内容到达时间；

**服务端渲染缺点：**

- 开发条件限制：服务端渲染只支持 `beforCreate` 和 `created`，这会导致一些外部扩展库徐涛特殊处理，才能在服务端渲染应用程序中运行；并且与可以部署在任何静态文件服务器上的完全静态单页面应用程序 SPA 不同，服务端渲染应用程序，需要处于 Node.js server 运行环境；

- 更多服务器负载：在 Node.js 中渲染完整的应用程序，显然会比仅仅提供静态文件的 server 更加大量占用 CPU 资源，因此如果你预料在高流量环境下使用，请准备相应的服务器负载，并明智地采用缓存策略。

**预渲染**

在大部分相同的页面数据情况下，在构建是简单的生成针对特定路由的静态 HTML 文件，优点是设置预渲染更简单，可以使用 `prerender-spa-plugin`

### 打包优化

#### 按需打包`moment.js`

`moment.js`日期转换插件占用空间大的原因在于，moment 中包含了大量语言资源文件。可以通过`webpack`自身的功能即可在打包时丢弃这些无用的内容。

```js
const webpack = require("webpack");
config.plugins.push(
  new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /zh-cn/)
);
```

#### `loadsh`按需打包

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

#### 可视化分析打包文件

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

#### Gzip 压缩

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

#### 代码压缩

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

#### 公共代码抽离

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

#### CDN 资源引入

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

#### 图片压缩

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

#### 减少冗余代码

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

#### 引用多组件

```js
const path = require("path");
const files = require.context("@/components/context", false, /\.vue$/);
const modules = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".vue");
  modules[name] = files(key).default || files(key);
});
```

### 基于 web 技术优化

#### Nginx 上开启 gzip 压缩

在`nginx/conf/nginx.conf`中配置:

```
http {
    gzip  on;
    gzip_min_length 1k;
    gzip_comp_level 5;
    gzip_types application/javascript image/png image/gif image/jpeg text/css text/plain;
    gzip_buffers 4 4k;
    gzip_http_version 1.1;
    gzip_vary on;
}

```

- gzip：on | off ，默认为 off，on 为开启 gzip，off 为关闭 gzip。

- gzip_min_length：number，压缩起点，文件大于多少才进行压缩，单位默认为字节，也可用 k 表示千字节。

- gzip_comp_level：压缩级别，1-9，数字越大，压缩后的大小越小，也越占用 CPU，花费时间越长。

- gzip_types：需要进行压缩的文件类型。类型去 Response headers 中看 Content-Type 属性。

- gzip_buffers：number size，设置系统获取几个单位的缓存用于存储 gzip 的压缩结果数据流。

#### 浏览器缓存

为了提高用户加载页面的速度，对静态资源进行缓存是非常有必要的，根据是否需要重新向服务器发起请求来分类，将 HTTP 缓存规则分为两大类，一个是强缓存，另一个协商缓存

#### 使用 Chrome Performance 查找性能瓶颈

1. 打开 Chrome 开发者工具，切换到 Performance 面板
2. 点击 Record 开始录制
3. 刷新页面或展开某个节点
4. 点击 Stop 停止录制

**相关参考文章**

[关于项目中使用 Vue 的性能优化](https://juejin.cn/post/6948987171554476045)

[总结我对 Vue 项目上线做的一些基本优化](https://juejin.cn/post/6850037281559543821)
