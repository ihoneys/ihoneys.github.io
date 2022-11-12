---
title: Vue 介绍和使用
date: 2018-12-06
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - vue
---
# Vue 介绍和使用

:::tip Vue 是什么
`Vue` 是前端开发框架;构建应用式的框架,能实现单页面应用渐进式的开发框架。
:::

### vue 优点

1. 遵循 `MVVM` 模式;
2. 体积小，运行效率高;
3. 关注数据的变化，不操作 `DOM` ;
4. 组件化开发，利于开发和维护;
5. 能实现单页面应用，`SPA` 应用 `(single page application)`.

- `MVVM`

- `Model`:负责数据存储
- `View`:负责页面展示
- `View Model`:负责业务逻辑处理（比如Ajax请求），对数据

## 使用和安装

### 本地引用(不用脚手架)

- 用 `CDN` 方式，引入项目；

- 下载到本地，通过 `<script>` 标签引入项目。

从官网下载 `vue.js` 文件，使用 `<script>` 标签引入，一般用在，学习，做 `demo` 的需要快速呈现效果的时候，实际工作开发中，没人这么做。

本地引用，在学习官网教程的时候，比如 ：在初始 `vue` 实例的时候，`data` 有时候是一个对象，有时候是一个函数。这就是两种使用方式

```js
// 本地引用方式
new Vue({
  data: {}
});
// 脚手架方式
export default {
  data() {
    return {};
  }
};
```

:::warning 注意

自己练习或者 `demo` 的时候，要看清楚是哪一个使用方式，如果报错，就换一下写法。
:::


### 通过 `vue-cli` 脚手架安装

[vue-cli官方网站](https://cli.vuejs.org/zh/)

:::tip 说明
什么是脚手架，它是基于 `nodejs` 运行，使用 `webpack` 打包工具开发的一个集成化开发环境。 简单来说，脚手架是官方出的一个帮助程序员快速开发的工具。
:::

它的功能有:

- 热更新，即我们修改代码，页面自动刷新出新效果；

- 编译 `es6` 转成浏览器可执行的 `es5` 代码；

- 给 `css` 加兼容前缀；

- 代码校验，强制养成我们写规范代码的习惯等等

```shell
# 用 vue-cli 创建 vue 项目 projectname是你创建的项目名称
vue create projectname
```

- 使用 `vue-cli` 脚手架，首先要 安装 `npm` 和 `vue-cli`

1. 安装 `npm`

`npm (node package menerger)` 是项目依赖包的管理器 [npm官网](https://www.npmjs.com/)。

安装 `node.js` 环境，`node` 里自带 `npm` 包管理器

从 `node.js` [英文官网](https://nodejs.org/en/download/) &[中文官网](http://nodejs.cn/download/) 下载`LTS`(长期支持版)版，也就是稳定版，根据你的电脑系统选择安装包。

安装完成后，可以检查安装是否成功，在 `cmd` 命令提示符中输入:


```shell
# 检查node是否成功
node -v
```

```shell
# 检查 npm 是否成功
npm -v
```

显示版本号代表安装成功

2. 安装`vue-cli`

安装最新稳定版。(一般使用本命令安装)

```shell
npm install -g @vue/cli
# or
yarn add -g @vue/cli
```

安装`2.x`

```shell
npm install -g vue-cli
```

安装指定版本，如 `4.0`

```shell
npm install -g npm@4
```

:::warning 注意

- 如果之前安装了 `2.x`，需要先卸载 `2.x` 再安装 `3.x` !!

新版的 `Vue CLI` 的包名称由 `vue-cli` 改成了 `@vue/cli`。 如果你已经全局安装了旧版本的 `vue-cli (1.x 或 2.x)`，你需要先通过 `npm uninstall vue-cli -g` 或 `yarn global remove vue-cli` 卸载，重新安装脚手架。
:::

- `npm` 切换镜像源
npm默认的源是国外的网址，因为众所周知的原因，国内连网速度慢甚至连不上，所以要更改源：

```shell
# 淘宝
npm config set registry https://registry.npm.taobao.org
# 官方
npm config set registry https://registry.npmjs.org
```


安装报错后使用清除缓存的方法 ，运行清除后再次安装

```shell
# 清除缓存
npm cache clean --force
```

新建项目方式

```shell
vue create projectname
# projectname是你创建的项目名称
```

:::danger 警告
\* 项目名称不要写中文字符、不要下划线、不要特殊字符、不要用框架名(`vue`)或其他关键字、大写字母会自动转为小写项目名，为防止不必要的错误还是用小写字母、数字组合，作项目名称为好！
:::

运行项目

```shell
npm run serve
```

打包项目

```shell
npm run build
```

## Vue 新建项目

:::tip 提示

- 如果在创建过程中，有某个选项选择错了想更改，要退出创建，需要重新开始创建；
- 如果到了下载依赖包的步骤，需要退出和删除已经创建的项目文件夹，再重新开始创建。
:::

<font color="red">以下是创建项目的 三 种方式</font>

---

- **在想要创建项目的位置 打开 cmd**

### 第一种使用 ui 界面创建

在`cmd`中输入命令

```shell
vue ui
```

1. 在浏览器中打开创建页面，选择创建，若以前创建过，会有创建历史，选择创建位置

![aa](https://s1.ax1x.com/2020/06/22/NG47vQ.png)

2. 确定项目名和构建工具及其他选项

![aa](https://s1.ax1x.com/2020/06/22/NG4buj.png)

3. 选择预设配置或自定义配置

![aa](https://s1.ax1x.com/2020/06/22/NG4qDs.png)

4. 选择具体配置方式
![aa](https://s1.ax1x.com/2020/06/22/NG4Lbn.png)
![aa](https://s1.ax1x.com/2020/06/22/NG4Tgg.png)

5. 选择保存或不保存预设，目的是方便后期创建同类项目的配置，一般选择不保存，
![aa](https://s1.ax1x.com/2020/06/22/NG4XEq.png)

6. 创建中···
![aa](https://s1.ax1x.com/2020/06/22/NG7c79.png)

7. 创建成功
![aa](https://s1.ax1x.com/2020/06/22/NGbS8x.png)


8. 启动运行项目

![aa](https://s1.ax1x.com/2020/06/22/NGbp26.png)


10. 启动成功，单击 `启动App` 打开项目
![aa](https://s1.ax1x.com/2020/06/22/NGHzP1.png)

注意：使用 `ui` 方式创建时，命令行窗口不可关闭！！（ `ui` 方法，底层实际还是用的命令行创建）

### 第二种使用命令行创建（方式一）

在cmd中输入命令

```shell
vue create vueapp   # vueapp 为你的项目名
```

:::warning 注意
和上面一样，项目名字要小写，不能用 `vue、vue-cli···` 等关键字（`vue-cli 3\4.x`）
:::

1. 选择配置方式

```shell
default (babel, eslint)
# 默认配置
❯ Manually select features
# 自定义配置
# ...
```

2. 选择需要的配置，通过空格来切换选中状态

```shell
 Check the features needed for your pro
 ject:
  ◉ Babel
  ◯ TypeScript
  ◯ Progressive Web App (PWA) Support
  ◉ Router
 ❯◉ Vuex
  ◯ CSS Pre-processors
  ◉ Linter / Formatter
  ◯ Unit Testing
  ◯ E2E Testing
```

>`Babel`:用来解析ES6语法的，将 es6 转换成浏览器可识别的 es5

>`Progressive Web App (PWA) Support`: 使用渐进单页面应用

>`TypeScript`: 是否使用 TypeScript

>`Vuex`: 是否使用 Vuex

>`CSS Pre-processors`: 是否使用 CSS 预处理

>`Router`: 是否使用 路由

>`Linter / Formatter`: `Eslint` 用来代码格式校验的

>`Unit Testing`、`E2E Testing`:是否测试代码

3. 选择路由的模式

```js
 Use history mode for router?
 (Requires proper server setup for index fallbackin production) (Y/n)
```

:::warning 注意
历史模式：这种模式充分利用 `history.pushState API` 来完成 `URL` 跳转而无须重新加载页面，当你使用 `history` 模式时，`URL` 就像正常的 `url`。

哈希模式：`hash`模式的工作原理是`hashchange`事件，可以在 `window` 监听`hash`的变化。我们在u`rl`后面随便添加一个`#xx`触发这个事件。
:::

有关路由模式的详情，请看[这里](#)

3. 选择 `css` 预处理器

```shell
    Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):
    Sass/SCSS (with dart-sass)
    Sass/SCSS (with node-sass)
  ❯ Less
    Stylus
```

`css` 预处理器,可根据需要选择

4. 如果需要，选中一种 `eslint` 配置(一般不选)

```shell
 Pick a linter / formatter config: (Use
    arrow keys)
    ESLint with error prevention only
  ❯ ESLint + Airbnb config
    ESLint + Standard config
    ESLint + Prettier
```

`eslint`的使用规则

```shell
  Pick additional lint features:
    Lint on save 保存的时候进行 eslint 检测
  ❯ Lint and fix on commit 提交的时候检测并且修复   arrow keys)
    ESLint with error prevention only
    ESLint + Airbnb config
    ESLint + Standard config
    ESLint + Prettier
```

`ESlint` 语法检查、格式规范，可根据需要选择

5. 配置文件的生成方式

```shell
    Where do you prefer placing config for
    Babel, PostCSS, ESLint, etc.? (Use arro w keys)
  ❯ In dedicated config files
    In package.json
```

我一般使用第二项 `package.json`

6. 是否保存以上配置做为预设，方便以后使用

```shell
 Save this as a preset for future projects? N/Y
```

7. 预设的作用就是可以直接使用之前的配置不用 假设之前的预设叫做 `18case`

```shell
Please pick a preset: (Use arrow keys)

 ❯ 18case (vue-router, vuex, less, babel, eslint) 保存的预设
   default (babel, eslint) 默认
   Manually select features 手动
```

:::warning .vuerc

- 被保存的 `preset` 将会存在计算机用户名文件夹下，一个名为 `.vuerc` 的 `JSON` 文件里。
- 如果你想要修改被保存的 `preset` 选项，可以删除这个文件，我试着编辑过，但是在下一次创建项目时报错，如果报错，将本文件删除即可。

- 在项目创建的过程中，你也会被提示选择喜欢的包管理器`npm` 或`yarn`等，以便更快地安装依赖。这些选择也将会存入 `.vuerc`文件里 。
:::

8. 创建完成以后，在`cmd`中 `cd` 进入项目文件夹里运行项目

```shell
cd projectname
```

9. 运行项目

```shell
npm run serve
```

10. 完成。

在浏览器输入，提示你的项目地址，打开项目。

### 第三种 使用命令行创建 (方式二(旧版本))

:::tip

- `Vue CLI >= 3` 和旧版使用了相同的 `vue` 命令，所以 `Vue CLI 2 (vue-cli)` 被覆盖了。如果你仍然需要使用旧版本的 `vue init` 功能，你可以全局安装一个桥接工具。
- `Vue CLI` 的包名称由 `vue-cli` 改成了 `@vue/cli`。 如果你已经全局安装了旧版本的 `vue-cli (1.x 或 2.x)`，你需要先通过 `npm uninstall vue-cli -g` 或 `yarn global remove vue-cli` 卸载它
:::

`vue-cli2` 的命令创建，示例：

```js
vue init templatename projectname
```

 `init`：表示我要用 `vue-cli` 来初始化项目

 `templatename`:表示模板名称，`vue-cli` 官方为我们提供了5种模板:

 - `webpack` --- 一个全面的 `webpack+vue-loader` 的模板，功能包括热加载，`linting` ,检测和 `CSS` 扩展。

 - `webpack-simple` --- 一个简单 `webpack+vue-loader` 的模板，不包含其他功能，让你快速的搭建vue的开发环境。

 - `browserify` --- 一个全面的 `Browserify+vueify` 的模板，功能包括热加> 载，linting,单元检测。

 - `browserify-simple` --- 一个简单 `Browserify+vueify` 的模板，不包含其他功能，让你快速的搭建vue的开发环境。

 - `simple` --- 一个最简单的单页应用模板。

 `[project-name]`：标识项目名称，这个你可以根据自己的项目来起名字。

在实际开发中，一般我们都会使用 `webpack` 这个模板，那我们这里也安装这个模板，在命令行输入以下命令：

```shell
vue init webpack projectname
# projectname是你创建的项目名称
```

输入命令后，会询问我们几个简单的选项，我们根据自己的需要进行填写就可以了。

```js
? Project name projectname
//项目名字，如果确定用默认名字 回车即可 注意不能使用大写
? Project description (A Vue.js project)
//项目描述，默认为A Vue.js project,直接回车，不用编写
? Author XXXX <XXXX@XXX.com>
//作者，如果你有配置git的作者，它会读取
? Vue build
❯ Runtime + Compiler: recommended for most users
Runtime-only: about 6KB lighter min+gzip, but templates (or any Vue-specific HTML) are ONLY allowed in .vue files - render functions are required elsewhere
//这里选择 Runtime + Compiler: recommended for most users 推荐给大多数用户
? Install vue-router? (Y/n)  
//是否使用 vue-router
? Use ESLint to lint your code? (Y/n)
//是否使用 ESLint 语法检查，我选 n，如果你是大型团队开发，最好是进行配置。
? Pick an ESLint preset (Use arrow keys)
❯ Standard (https://github.com/feross/standard)
Airbnb (https://github.com/airbnb/javascript) none (configure it yourself)
//这里选择 Standard (https://github.com/feross/standard)
? Setup unit tests  (Y/n)
//是否需要单元测试，这里根据需求选择
? Setup e2e tests with Nightwatch? No
//是否需要单元测试，这里根据需求选择
? Should we run `npm install` for you after the project has been created? (recommended)
  Yes, use NPM
> Yes, use Yarn
  No, I will handle that myself
//选择使用什么包管理器，如果没有安装Yarn，是不会提示这个选项的
```

选择完成后，开始下载依赖包，等待安装完成即可

用以上两种命令行的方式安装好以后，要 `cd` 进项目目录，再运行项目：

```shell
cd projectname  # 进入项目目录
npm run dev  # 运行项目
```

创建好的项目的目录结构如下（不同方式，不同 `cli` 版本，有所区别）
![aa](https://s1.ax1x.com/2020/07/14/Ua1l6A.png)


启动项目，如果浏览器打开之后，没有加载出页面，有可能是本地的 `8080` 端口被占用，需要修改一下配置文件 `config` 里的 `index.js` 文件
![aa](https://s1.ax1x.com/2020/07/14/Ua3mBq.png)

:::danger 警告：

- 下载过程中的`cmd`，不要乱点击，如果在下载依赖包时遇到命令行卡住不动，或者下载进度条一直不动，在`cmd`中试下回车键。

- 报错一般都是网络原因，缓存原因
:::