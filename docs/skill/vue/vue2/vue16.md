---
title: Vue vue.config.js
date: 2020-12-12
sidebar: 'auto'
tags:
 - vue
---

## vue inspect

使用命令可以查看本项目的 `webapck.config.js` 配置

```shell
vue inspect
# 显示完整webpack配置
```

- 语法

```shell
vue inspect [options] [paths...]
```

| 语句                    | 说明                       |
| :---------------------- | :------------------------- |
| `--mode <mode>`         | 查看mode(需加mode名)       |
| `--rules`               | 查看所有已配置规则名称列表 |
| `--rule <ruleName>`     | 查看指定规则               |
| `--plugins`             | 查看所有已配置插件名称列表 |
| `--plugin <pluginName>` | 查看插件配置               |
| `-v` / `--verbose`      | 显示完整webpack配置        |
| `-h` / `--help`         | 显示帮助信息               |

## `vue.config.js`

```js
module.exports = {
   productionSourceMap: false,
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    devServer: {
        port: 8090,
        host: '0.0.0.0',
        https: false,
        open: true
    },

  // 选项...
}
```

- `productionSourceMap`：生产环境是否要生成 `sourceMap`
- `publicPath`：部署应用包时的基本 `URL`,用法和 `webpack` 本身的 `output.publicPath` 一致
  - 可以通过三元运算去配置`dev`和`prod`环境, `publicPath: process.env.NODE_ENV === 'production' ? '/prod/' : './'`

- `outputDir`: `build` 时输出的文件目录
- `assetsDir`: 放置静态文件夹目录
- `devServer`: `dev`环境下，`webpack-dev-server` 相关配置
  - `port`: 开发运行时的端口
  - `host`: 开发运行时域名，设置成`'0.0.0.0'`,在同一个局域网下，如果你的项目在运行，同时可以通过你的`<http://ip:port/>...`访问你的项目
  - `https`: 是否启用 `https`
  - `open`: `npm run serve` 时是否直接打开浏览器

## 插件及规则的配置

在`vue.config.js`如果要新增/修改 `webpack` 的 `plugins` 或者 `rules` , 有2种方式。

### configureWebpack 方式

`configureWebpack` 是相对比较简单的一种方式

- 它可以是一个对象：和 `webpack` 本身配置方式是一致，该对象将会被 `webpack-merge` 合并入最终的 `webpack` 配置
- 它也可以是一个函数：直接在函数内部进行修改配置

```js
configureWebpack: {
    rules:[],
    plugins: []
  }
// 或
configureWebpack: (config) => {
    // 例如，通过判断运行环境，设置mode
    config.mode = 'production'
}

```

### chainWebpack 方式

`chainWebpack` 链式操作 (高级)

```js
  chainWebpack: (config) => {
    // chainWebpack 方式的配置
  }
```

#### 规则rules的配置

- `rules`的新增

在 `webpack` 中 `rules` 是 `module` 的配置项，而所有的配置的都是挂载到 `config` 下的，所以新增一个 `rule` 方式：

```js
config.module
  .rule(name)
  .use(name)
  .loader(loader)
  .options(options)
```

- 案例：
  1. `style-resources-loader` 来添加`less`全局变量
  2. `svg-sprite-loader` 将`svg`图片以雪碧图的方式在项目中加载

```js
module.exports = {
    chainWebpack: (config) => {
        // 通过 style-resources-loader 来添加less全局变量
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => {
            let rule = config.module.rule('less').oneOf(type)
            rule.use('style-resource')
                .loader('style-resources-loader')
                .options({
                    patterns: [path.resolve(__dirname, './lessVariates.less')]
                });
        });

        // `svg-sprite-loader`: 将svg图片以雪碧图的方式在项目中加载
        config.module
            .rule('svg')
            .test(/\.svg$/) // 匹配svg文件
            .include.add(resolve('src/svg')) // 主要匹配src/svg
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader') // 使用的loader，主要要npm该插件
            .options({symbolId: 'svg-[name]'}) // 参数配置
    }
}
```

- `rules`的修改

针对已经存在的 `rule` , 如果需要修改它的参数, 可以使用 `tap` 方法：

```js
config.module
  .rule(name)
  .use(name)
  .tap(options => newOptions)

```

- 案例：修改 `url-loader` 的参数

```js
module.exports = {
    chainWebpack: (config) => {
        // `url-loader`是webpack默认已经配置的，现在我们来修改它的参数
        config.module.rule('images')
            .use('url-loader')
            .tap(options => ({
                name: './assets/images/[name].[ext]',
                quality: 85,
                limit: 0,
                esModule: false,
            }))
    }
}
```

#### 插件 plugins 的配置

关于 `plugins` 的配置，我会分别从新增/修改/删除进行介绍。

- `plugins`的新增

-
\* 注意：这里`WebpackPlugin`不需要通过`new WebpackPlugin()`使用。

```js
config
  .plugin(name)
  .use(WebpackPlugin, args)
```

- 案例：
新增`hot-hash-webpack-plugin`

```js
const HotHashWebpackPlugin = require('hot-hash-webpack-plugin');
module.exports = {
    chainWebpack: (config) => {
        // 新增一个`hot-hash-webpack-plugin`
        // 注意：这里use的时候不需要使用`new HotHashWebpackPlugin()`
        config.plugin('hotHash')
              .use(HotHashWebpackPlugin, [{ version: '1.0.0' }]);
    }
}
```

- `plugins`的修改

同理, `plugin` 参数的修改也是通过 `tap` 去修改。

```js
config
    .plugin(name)
    .tap(args => newArgs)
```

- 案例
  1. 修改打包后`css`抽离后的`filename`及抽离所属目录
  2. 删除`console`和`debugger`

```js
const HotHashWebpackPlugin = require('hot-hash-webpack-plugin');
module.exports = {
    chainWebpack: (config) => {
        // 修改打包时css抽离后的filename及抽离所属目录
        config.plugin('extract-css')
                .tap(args => [{
                    filename: 'css/[name].[contenthash:8].css',
                    chunkFilename: 'css/[name].[contenthash:8].css'
                }]);

        // 正式环境下，删除console和debugger
        config.optimization
                .minimize(true)
                .minimizer('terser')
                .tap(args => {
                    let { terserOptions } = args[0];
                    terserOptions.compress.drop_console = true;
                    terserOptions.compress.drop_debugger = true;
                    return args
                });
    }
}
```

- `plugins` 的删除
对于一些`webpack`默认的 `plugin` ，如果不需要可以进行删除

```js
config.plugins.delete(name)
```

- 案例：
删除 `vue-cli3.X`模块的自动分割抽离

```js
module.exports = {
    chainWebpack: (config) => {
        // vue-cli3.X 会自动进行模块分割抽离，如果不需要进行分割,可以手动删除
        config.optimization.delete('splitChunks');

    }
}
```

## 打包时去除`console.log`

安装依赖  `"terser-webpack-plugin": "^4.2.2"`,根据`webpack`版本,`webpack`是`4`，最好按钮`4.x.x`,否则报错!。

```js
const path = require('path')
const defaultSettings = require('./src/settings.js')
const TerserPlugin = require("terser-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title // 网址标题
const port = 8016 // 端口配置


const BASE_URL = process.env.VUE_APP_PROJECT_NAME
module.exports = {
  publicPath: BASE_URL,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
  // ...
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    // 定义别名
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@crud': resolve('src/components/Crud')
      }
    },
    // 打包时去除 console
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true, // 多进程
          terserOptions: {
            compress: {
              drop_console: true,
              pure_funcs: ["console.log"] //去除console.log
            }
          }
        })
      ]
    }
  },
  chainWebpack(config) {
    // ...
  }
}

```

## 其他配置

### 修改`enter`文件

`webpack` 默认的 `entry` 入口是 `scr/main.ts`

```js
config.entryPoints.clear(); // 清空默认入口
config.entry('test').add(getPath('./test/main.ts')); // 重新设置
```

### DefinePlugin

定义全局全局变量，`DefinePlugin` 是 `webpack` 已经默认配置的，我们可以对参数进行修改

```js
config.plugin('define').tap(args => [{
    ...args,
    "window.isDefine": JSON.stringify(true),
    }]);
```

### 自定义`filename` 及 `chunkFilename`

自定义打包后js文件的路径及文件名字

```js
config.output.filename('./js/[name].[chunkhash:8].js');
config.output.chunkFilename('./js/[name].[chunkhash:8].js');
```

### 修改`html-webpack-plugin`参数

`html-webpack-plugin` 是 `webpack` 已经默认配置的，默认的源模版文件是 `public/index.html` ;我们可以对其参数进行修改

```js
 config.plugin('html')
        .tap(options => [{
            template: '../../index.html' // 修改源模版文件
            title: 'test',
        }]);
```

### alias设置

`webpack`默认是将`src`的别名设置为`@`, 此外，我们可以进行添加

```js
const path = require('path');
const resolve = (dir) => path.join(__dirname, '.', dir);
module.exports = {

  devServer: {
    port: 8090,
    host: '0.0.0.0',
    https: false,
    open: true
  },

  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/apis'))
      .set('common', resolve('src/common'))
    // .set('vue$', resolve('vue/dist/vue.runtime.esm.js'))// 默认已配置
  }
}
```

```js
const path = require('path');
const resolve = (dir) => path.join(__dirname, '.', dir);
module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.vue', '.json'],
      alias: {
        '@': resolve('src'),
        '~': process.cwd(),
        public: resolve('public'),
        components: resolve('src/components'),
        util: resolve('src/utils'),
        store: resolve('src/store'),
        router: resolve('src/router')
      }
    }
  },
}
```

配置

```js
const path = require('path');
const HotHashWebpackPlugin = require('hot-hash-webpack-plugin');
const WebpackBar = require('webpackbar');
const resolve = (dir) => path.join(__dirname, '.', dir);

module.exports = {
    productionSourceMap: false,
    publicPath: './',
    outputDir: 'dist',
    assetsDir: 'assets',
    devServer: {
        port: 9999,
        host: '0.0.0.0',
        https: false,
        open: true
    },

    chainWebpack: (config) => {
        const types = ['vue-modules', 'vue', 'normal-modules', 'normal'];
        types.forEach(type => {
            let rule = config.module.rule('less').oneOf(type)
            rule.use('style-resource')
                .loader('style-resources-loader')
                .options({
                    patterns: [path.resolve(__dirname, './lessVariates.less')]
                });
        });

        config.resolve.alias
            .set('@', resolve('src'))
            .set('api', resolve('src/apis'))
            .set('common', resolve('src/common'))

        config.module.rule('images').use('url-loader')
            .tap(options => ({
                name: './assets/images/[name].[ext]',
                quality: 85,
                limit: 0,
                esModule: false,
            }));

        config.module.rule('svg')
            .test(/\.svg$/)
            .include.add(resolve('src/svg'))
            .end()
            .use('svg-sprite-loader')
            .loader('svg-sprite-loader');

        config.plugin('define').tap(args => [{
            ...args,
            "window.isDefine": JSON.stringify(true)
        }]);

        // 生产环境配置
        if (process.env.NODE_ENV === 'production') {
            config.output.filename('./js/[name].[chunkhash:8].js');
            config.output.chunkFilename('./js/[name].[chunkhash:8].js');
            config.plugin('extract-css').tap(args => [{
                filename: 'css/[name].[contenthash:8].css',
                chunkFilename: 'css/[name].[contenthash:8].css'
            }]);
            config.plugin('hotHash').use(HotHashWebpackPlugin, [{ version : '1.0.0'}]);
            config.plugin('webpackBar').use(WebpackBar);

            config.optimization.minimize(true)
                .minimizer('terser')
                .tap(args => {
                    let { terserOptions } = args[0];
                    terserOptions.compress.drop_console = true;
                    terserOptions.compress.drop_debugger = true;
                    return args
                });
            config.optimization.splitChunks({
                cacheGroups: {
                    common: {
                        name: 'common',
                        chunks: 'all',
                        minSize: 1,
                        minChunks: 2,
                        priority: 1
                    },
                    vendor: {
                        name: 'chunk-libs',
                        chunks: 'all',
                        test: /[\\/]node_modules[\\/]/,
                        priority: 10
                    }
                }
            });
        }
    }
};
```

项目用`vue.config.js`文件

```js
const path = require('path')
const defaultSettings = require('./src/settings.js')
const TerserPlugin = require("terser-webpack-plugin");

function resolve(dir) {
  return path.join(__dirname, dir)
}

const name = defaultSettings.title // 网址标题
const port = 8016 // 端口配置
// const port = 8014 // 端口配置

const BASE_URL = process.env.VUE_APP_PROJECT_NAME
//
// All configuration item explanations can be find in https://cli.vuejs.org/config/
module.exports = {
  // hash 模式下可使用
  // publicPath: process.env.NODE_ENV === 'development' ? '/' : './',
  publicPath: BASE_URL,
  outputDir: 'dist',
  assetsDir: 'static',
  lintOnSave: process.env.NODE_ENV === 'development',
  productionSourceMap: false,
  devServer: {
    port: port,
    open: true,
    overlay: {
      warnings: false,
      errors: false
    },
    // proxy: {
    //   '/common': {
    //     target: 'https://dev.isszwy.com:28101/analysis-admin-server',
    //     changeOrigin: true,
    //     pathRewrite: {
    //       '^common': ''
    //     }
    //   },
    //   // '': {
    //   //   target: process.env.VUE_APP_FORM_API,
    //   //   changeOrigin: true,
    //   //   pathRewrite: {
    //   //     '': ''
    //   //   }
    //   // },
    //   // '': {
    //   //   target: process.env.VUE_APP_STORE_API,
    //   //   changeOrigin: true,
    //   //   pathRewrite: {
    //   //     '': ''
    //   //   }
    //   // },
    // }
  },
  configureWebpack: {
    // provide the app's title in webpack's name field, so that
    // it can be accessed in index.html to inject the correct title.
    name: name,
    resolve: {
      alias: {
        '@': resolve('src'),
        '@crud': resolve('src/components/Crud')
      }
    },
    // 打包时去除 console
    optimization: {
      minimizer: [
        new TerserPlugin({
          parallel: true, // 多进程
          terserOptions: {
            compress: {
              drop_console: true,
              pure_funcs: ["console.log"] //去除console.log
            }
          }
        })
      ]
    }
  },
  chainWebpack(config) {
    config.plugins.delete('preload') // TODO: need test
    config.plugins.delete('prefetch') // TODO: need test

    // set svg-sprite-loader
    config.module
      .rule('svg')
      .exclude.add(resolve('src/assets/icons'))
      .end()
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(resolve('src/assets/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end()

    // set preserveWhitespace
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options => {
        options.compilerOptions.preserveWhitespace = true
        return options
      })
      .end()

    config
      // https://webpack.js.org/configuration/devtool/#development
      .when(process.env.NODE_ENV === 'development',
        config => config.devtool('cheap-source-map')
      )

    config
      .when(process.env.NODE_ENV !== 'development',
        config => {
          config
            .plugin('ScriptExtHtmlWebpackPlugin')
            .after('html')
            .use('script-ext-html-webpack-plugin', [{
              // `runtime` must same as runtimeChunk name. default is `runtime`
              inline: /runtime\..*\.js$/
            }])
            .end()
          config
            .optimization.splitChunks({
              chunks: 'all',
              cacheGroups: {
                libs: {
                  name: 'chunk-libs',
                  test: /[\\/]node_modules[\\/]/,
                  priority: 10,
                  chunks: 'initial' // only package third parties that are initially dependent
                },
                elementUI: {
                  name: 'chunk-elementUI', // split elementUI into a single package
                  priority: 20, // the weight needs to be larger than libs and app or it will be packaged into libs or app
                  test: /[\\/]node_modules[\\/]_?element-ui(.*)/ // in order to adapt to cnpm
                },
                commons: {
                  name: 'chunk-commons',
                  test: resolve('src/components'), // can customize your rules
                  minChunks: 3, //  minimum common number
                  priority: 5,
                  reuseExistingChunk: true
                }
              }
            })
          config.optimization.runtimeChunk('single')
        }
      )
  },
  transpileDependencies: [
    'vue-echarts',
    'resize-detector'
  ]
}

```

[参考](https://juejin.cn/post/6886698055685373965)

- `inspect` :  `/ɪnˈspekt/` vt. 检查；视察；检阅
