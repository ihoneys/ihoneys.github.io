---
title: TypeScript webpack打包ts
date: 2020-12-31
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - TypeScript
publish: true
# 打赏
showSponsor: true
---

## webpack 打包 ts

- 初始化`package.json`

```s
npm init -y
```

- 在项目里安装`webpack`和`ts`

```s
npm i -D webpack webpack-cli typescript ts-loader
```

- 项目根目录下创建 `webpack.config.js` 文件,指定打包`ts`文件的`loader`

```js
// 引入一个 path 包
const path = require('path')
// webpack中的配置信息，都应该写在module中
module.exports = {
    mode: 'production',
    // 入口文件
    entry: "./src/index.ts",
    // 出口
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    // 指定webpack 打包要使用的模块
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

- 配置`ts`编译`js`的配置文件`tsconfig.json`，配置`ts`编译规则

```js
{
    "compilerOptions": {
        "target": "es2015",
        "module": "es6",
        "strict": false
    }
}

```

- `package.json`添加脚本`"build":"webpack"`

```js
  "scripts": {
    "build":"webpack"
  },
```

- 使用 `html-webpack-plugin` 自动创建`html`文件

安装`html-webpack-plugin`并在`webpack.config.js`文件配置

```js
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    ···
    module: {
       ···
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "自定义title"
            }
        )
    ]
}
```

- 使用 `webpack-dev-server` 启动并实时编译项目

安装`webpack-dev-server`

```js
npm i -D webpack-dev-server
```

修改 `package.json` 中的 `scripts`

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

- 使用 `babel`

使用`babel`将`js`代码高版本转为低版本，来适用低版本或不兼容的浏览器。(例如兼容ie11)

安装

```js
npm i -D @babel/core @babel/preset-env babel-loader core-js
```

配置`webpack.config.js`

```js
// 引入一个 path 包
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
// webpack中的配置信息，都应该写在module中
module.exports = {
    mode: 'production',
    // 入口
    entry: "./src/index.ts",
    // 出口
    output: {},
    // 指定webpack 打包要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定的时规则生效的文件
                test: /\.ts$/,
                use: [
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "88"
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",
                                        //使用corejs的方式 "usage" 是按需加载。
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]

                        }
                    },
                    // 从下往上执行，先将ts代码转为js
                    "ts-loader",
                ],
                // 要排除的文件
                exclude: /node_modules/,
            }
        ]
    },
    // 插件
    plugins: [
      ···
    ],
    //用来设置引用模块
    resolve: {}
}
```

到这里`ie11`还是不能兼容，因为`ie11`不支持箭头函数，`webpack`默认会打包成立即执行的箭头函数的代码，所以`webapck.config.js`还用添加:

```js
   output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // 告诉webpack不适用箭头函数
        environment: {
            arrowFunction: false
        }
    },
```

### `webpack.config.js` 文件模板

```js
// 引入一个 path 包
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { resolve } = require('path')
// webpack中的配置信息，都应该写在module中
module.exports = {
    mode: 'production',
    // 入口文件
    entry: "./src/index.ts",
    // 出口
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        // 告诉webpack不适用箭头函数
        environment: {
            arrowFunction: false
        }
    },
    // 指定webpack 打包要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test 指定的时规则生效的文件
                test: /\.ts$/,
                use: [
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            // 设置预定义的环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    // 配置信息
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        //指定corejs的版本
                                        "corejs": "3",
                                        //使用corejs的方式 "usage" 是按需加载。
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]

                        }
                    },
                    // 从下往上执行，先将ts代码转为js
                    "ts-loader",
                ],
                // 要排除的文件
                exclude: /node_modules/,
            }
        ]
    },
    // 插件
    plugins: [
        new HtmlWebpackPlugin(
            {
                title: "自定义title",
            }
        )
    ],
    //用来设置引用模块
    resolve: {
        extensions: [".ts", ".js"] // 告诉 webpack 凡是ts、js文件结尾的文件都可以作为模块使用
    }
}
```
