---
title: webpack.config.js 文件的配置详情
date: 2019-06-10
sidebar: 'auto'
categories:
 - Webpack
tags:
 - webpack.config.js
publish: true
# 打赏
showSponsor: true
---

1.webpack-dev-server 安装   监听源码自动更新页面

```s
npm i -D webpack-dev-server 或 yarn add -D webpack-dev-server
```

2. html-webpack-plugin 安装  使用webpack的所有包插件

```s
npm i -D html-webpack-plugin 或 yarn add -D html-webpack-plugin
```

3. loader装载机
    - loader是编译webpack不能识别的文件，辅助webpack打包的方案，
    - loader写在module对象的rules数组里，每一个方案就是一个对象的形式写
    - loader的执行顺序是从右到左，从下到上

- <font color="red">css.loader sytle-loader</font>

css-loader用来解析css语法，style-loader用来将编译完的css代码插入到head标签中
4. 图片的打包

- 图片的应用方式
    1. 样式里 css
    2. 页面里 html
    3. js创建插入到页面元素
使用可选的两种loader<font color="red"> file-loader  url-loader</font>

<font color="red">*</font> file-loader 和 url-loader都不能处理html中的img，要用一个第三方的html-withimg-loader来处理

- 由于file-loader升级了，所有在配合html-withimg-loader时候会报错，需要在file-loader或url-loader里写个esMoule：false
- url-loader比file-loader 多一个核心配置项：
  - limit用来控制文件的大小，单位是b,一般会把很小的图片变成base64格式插入页面

5. babel-loader：将es6+ 变成浏览器可运行的es5代码
安装【webpack4.x】

```s
npm install -D babel-loader @babel/core @babel/preset-env
```

用法：

```js
module: {
  rules: [
    {
      test: /\.m?js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }
  ]
}
```

6. less-loader 解析less语法的
less是css预处理器，让css编写公共性更好，让css写起来有js的风格
安装

```s
npm i -D less-loader less
```

7. sass-loader node-sass
用来解析scss文件的，scss和less都是css预处理器
安装命令

```s
npm i -D sass-loader node-sass
```

5. 字体的打包
file-loader 选项配置里所有的loader都支持一个outputPath配置项，是告诉被打包后的文件要去的目录
pubilcPath 公共的基础的路径，这个路径不会生成物理的文件夹，只会在代码中加上这个路径地址
pubilcpath一般用来设置cdn公共路径

```js
 {

                // 查找图片字体
                test: /\.(ttf|eot|woff|woff2|svg)$/,//查找项目中的图片
                use: {
                    loader: 'file-loader',
                    options: {
                        esModule: false,
                    }
                }
            },
```

6. clean-webpack-plugin 清除打包文件夹【dist】
每次打包的时候先把dist目录删除，目的就是删除dist里冗余的文件
删除的是output.path路径
7. 6. copy-webpack-plugin

```js
  plugins: [
        // 将doc.md拷贝到dist目录
        new CopyPlugin([
            {
                from: './gitdoc.md', to: './docs'
            }
        ])
    ],
```

from 源文件 to拷贝的目的
可以将一些非项目文件，进行拷贝到特定的位置(默认是dist文件夹下)
8. banner-webapck-plugin
给打包后的文件插入版权信息

8. postcss-loader autoprefixer
给css新特性加前缀
给css加前缀的loader配置，必须放在css-loader最下面，必须是第一个执行的
如果需要编译less和scss需要把postcss-loader放在预处理器loader的前面

9. mini-css-extract-plugin  抽离css文件
这是一个插件，需要在plugins里使用，还需要css-loader前面使用，并且它和style-loader二选一

#### opimization

10. 压缩css文件  terser-webpack-plugin & optimize-css-assets-webpack-plugin
如果我们使用style-loader去处理css，默认css文件不会压缩，
如果使用css抽离，css文件不会压缩
terser-webpack-plugin & optimize-css-assets-webpack-plugin
去压缩css代码  会将css文件全部压缩成一行
** 这两个插件不能再plugins里写，需要再opimization.minimizer里配置
实例代码：

```js
 optimization: {
        // 配置压缩
        minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],

        // 代码分割只对多模块打包有用，多入口打包
        splitChunks: {
            // 分割代码js模块
            cacheGroups: {// 缓存组
                //   公共的模块common自定义的
                common: {
                    chunks: "initial", // 从入口文件开始找公共文件
                    minSize: 0,//被抽离的代码的大小 ，不为0字节的js文件
                    minChunks: 2//引用 2次及以上，会被抽离
                },
                //   私有的，被执行的逻辑js
                vendor: {
                    priority: 1, // 先执行这个，权重
                    test: /node_modules/, // vue jq 把依赖包这个抽离出来
                    chunks: "initial", //从入口文件开始找公共文件
                    minSize: 0,
                    minChunks: 2
                }
            }
        }

    }
```

11. 抽离公共的js模块

```js

```

12. 全局注入第三方库

```js
  plugins: [
        // 插件提供者 --- 设置全局插件依赖
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })

    ],
```

首先需要引入webapck 配置好后，再src源码中就可以直接使用$('')了
13. cdn的使用-- 优化
add-asset-html-cdn-webpack-plugin
使用cdn，必须在module的配置  module.noParse

14. 代理服务
 devServer中的 proxy 配置
 作用：前端可以请求proxy配置的接口，它可以帮我们实现跨域
 原理：使用nodejs作为中间件去请求接口
同源策略，实际上前端的代码不存在跨域，是浏览器的规则，为什么nodejs没有跨域限制，因为nodejs运行在服务端，不受浏览器限制，所有后端语言都没有跨域的限制

15.（ banner-plugin）  new webpack.BannerPlugin(banner);

16. 源码映射 devtool: "eval-source-map"
仅限在开发模式开启，生产模式不能

```js

{
    devServer: {
    },
    module: {
        rules: []
    },
    optimization: {
    },
    // 开启源码映射,
    devtool: "eval-source-map"

};
```

17. watch 实时的监听实时打包
只要开启了watch，那么npm run build 的时候程序会一直监听，只要我们改变了代码，就会自动打包成新的文件

--------------------------------------------

```js
// webpack是node写的。node的写法v4.x
// 引入path依赖
const path = require("path");
// 使用插件需要引入，使用loader不用引入
const HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
    // 1.模式 告诉webpack是生产环境还是开发环境 默认两种 production development 另 "none"  
    mode: 'production',
    // 2.入口文件  string | object | array  // 默认 ./src
    entry: "./src/index.js",
    // 3.输出，只可指定一个输出配置
    output: {
        filename: "bundle.[hash:4].js",//打包后的文件名
        path: path.resolve(__dirname, 'bulid'),//所有输出文件所在的目录 必须是绝对路径
        library: "MyLibrary", // string //导出库的名称
        libraryTarget: "umd", // universal module definition // 导出库的类型
    },
    // 4.开发服务器的配置
    devServer: {
        port: 3000,//端口
        // proxy: { // 代理url
        //     '/api': 'http://localhost:3000'
        // },
        progress: true, //进度条
        contentBase: "./bulid",// 以build为需要监听的目录 // 或绝对路径 path.resolve(__dirname, './webRoot'),
        open: true,  //自动打开浏览器
        compress: true, //  启动gzip压缩
        historyApiFallback: true, // html在404，对象为多个路径
        hot: true, // 热模块替换。取决于HotModuleReplacementPlugin
        https: false,
        noInfo: true,
    },
    // 5.模块 如何处理项目中不同ww类型的模块
    module: {
        // 规则 用于规定在不同模块被创建时如何处理模块的规则数组
        rules: [
            {
                test: /\.jsx?$/, //匹配特定文件的正则表达式或正则表达式数组
                include: [ //规则适用的范围
                    path.resolve(__dirname, "app")
                ],
                exclude: [ //规则排除的范围
                    path.resolve(__dirname, "app/demo-files")
                ],
                issuer: { test, include, exclude },
                enforce: "pre",
                enforce: "post",
                loader: "babel-loader", //加载器
                options: { //转义
                    presets: ["es2015"]
                },
            },
            /*
            css-loader 主要负责解析@import这种语法的
            style-loader 主要负责把css插入掉head标签中
            loader的特点：希望单一
            loader的用法：字符串的形式只能用一个loader用多个要用数组
            loader的执行顺序是从右到左
            loader还可以写成对象的形式
            */
            {
                test: /\.css$/,//匹配特定文件的正则表达式或正则表达式数组
                use: [{
                    loader: 'style-loader',
                    // options:{'传参用'}
                }, 'css-loader']
            },
            // { test: /\.css$/, use: ['style-loader', 'css-loader'] }
        ]
    },
    plugins: [
        //放着所有的webpack插件
        new HtmlWebpackPlugin({
            title: "webpack第一天",//生成html后标题内容
            template: "./src/index.html", //指定模板文件
            filename: "index.html",//或绝对路径path.resolve(__dirname, "./webRoot/index.html"),//生成html后存放的路径和名称
            minify: {
                removeAttributeQuotes: true,//去双引号
                collapseWhitespace: true,//去空格
            },
            hash: true //使用hash编码
        })
    ],
    //用来设置引用模块
    resolve: {
        extensions: [".ts", ".js"] ,// 告诉 webpack 凡是ts、js文件结尾的文件都可以作为模块使用
        alias:{
          'vue$':'vue/dist/vue.esm.js',//修改模式 runtime-only
        }
    }
}
```
