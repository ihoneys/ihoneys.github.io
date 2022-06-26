---
title: yarn
date: 2019-06-19
 
categories:
 - 工具
tags:
 - yarn

---

:::tip 介绍
`yarn` 是 `facebook` 发明的新一代 `js` 包管理器,和`npm`一样的依赖包管理器,支持离线使用.[这是 npm 与 yarn 的 命令对照](https://classic.yarnpkg.com/zh-Hans/docs/migrating-from-npm)

:::

[英文官网](https://yarnpkg.com/) [中文官网](https://classic.yarnpkg.com/zh-Hans/)

## 安装

----

- [下载](https://classic.yarnpkg.com/zh-Hans/docs/install/#windows-stable)安装包 安装

下载后运行软件，安装(用安装包安装有个弊端，当你用命令行升级yarn时，版本会固定到你安装软件时的那个版本)

- 通过 [Chocolatey](http://www.91guangju.com/index.php/archives/35/) 安装

(安装 `Chocolatey` 之后，你就可以在控制台执行如下命令安装 `Yarn` 了)

```js
choco install yarn
```

- 通过 `Scoop` 安装（类似`Chocolatey`）

```js
scoop install yarn
```

- 使用 `npm` 安装(常用)

```js
npm install -g yarn
```

### 验证

- 在命令行里运行

```js
yarn -v   /   yarn --version
```

:::warning

运行`yarn`报错`此系统上禁止运行脚本`，可使用以下方法，试一下：

1. 搜索`powershell`，右键以管理员身份运行

2. 若要在本地计算机上运行您编写的未签名脚本和来自其他用户的签名脚本，请使用以下命令将计算机上的 执行策略更改为 `RemoteSigned`
执行：`set-ExecutionPolicy RemoteSigned`

3. 查看执行策略：`get-ExecutionPolicy`
:::

- 卸载`yarn`

```js
npm uninstall -g yarn
```

- 清楚yarn的缓存

```js
yarn cache clean
```

- 升级最新版本

```js
npm install -g yarn@latest
```

- 升级至最新的发布版本 - 大众

```js
yarn set version latest
```

### yarn create

`yarn create` 是这个包管理工具提供的新功能，其内部就是自动去安装一个 `create-<xxx>` 的模块（临时），然后自动执行这个模块中的 `bin`。
例如:
`yarn create react-app my-react-app` 就相当于先 `yarn global add create-react-app`，然后自动执行 `create-react-app my-react-app`

### 管理源

- 查看当前镜像

```s
yarn config get registry
```

- 设置为淘宝镜像

```s
yarn config set registry http://registry.npm.taobao.org/
```

- 设置默认为镜像

```s
yarn config set registry https://registry.yarnpkg.com
```

- 其他镜像地址

```js
npm --- https://registry.npmjs.org/

npm --- https://registry.npm.taobao.org/

yarn --- https://registry.yarnpkg.com/

yarn --- https://registry.npm.taobao.org/

cnpm --- https://r.cnpmjs.org/

taobao --- https://registry.npm.taobao.org/

nj --- https://registry.nodejitsu.com/

rednpm --- https://registry.mirror.cqupt.edu.cn/

npmMirror --- https://skimdb.npmjs.com/registry/

deunpm --- http://registry.enpmjs.org/
```

### yarn 2

[yarn 2 文档](https://www.yarnpkg.com.cn/)

- 从`yarn 1.x` 迁移到`yarn 2`(启用 `yarn 2`)
[官方迁移指南](https://www.yarnpkg.com.cn/advanced/migration#step-by-step)

- 项目中安装 `yarn 2`(官方建议 全局安装的`1.x` 项目中安装`2.x`)

```js
// 官方 已修改，不用这种方式了
// npm install -g yarn@berry
```

1. 安装`yarn` ,已装忽略

```js
npm install -g yarn
```

2. 进入项目

```js
cd /abc/d
```

3. 运行命令

```js
yarn set version berry
```

:::danger
`yarn 2` 不是`yarn 1.x`的升级版，它们是两个不同的东西，[了解`yarn2`](https://blog.csdn.net/u010730126/article/details/107857940)
:::

- 工程中升级为`Yarn 2`

```js
yarn --version # A

# 上面A行得到的版本如果是1.22+
yarn set version berry # B1

# 上面A行得到的版本如果低于1.22
yarn policies set-version berry # B2
```

- 升级yarn 2

```js
yarn set version latest
// or
yarn set version from sources
```

[yarn 2 的安装和使用](https://blog.csdn.net/u010730126/article/details/107857940)

显示版本号，证明安装成功。

## Yarn 常用命令

`yarn`的一些常见命令。

- 初始化包(等价于`npm init`)

```js
yarn init
```

- 为当前正在开发的包新增一个依赖包；

```js
yarn add [package-name]
```

你可以用以下参数添加其它类型的依赖:

```js
yarn add --dev       //添加到 devDependencies
yarn add --peer      //添加到 peerDependencies
yarn add --optional  //添加到 optionalDependencies
```

通过指定依赖版本和标签，你可以安装一个特定版本的包:

```js
yarn add [package]@[version]
yarn add [package]@[tag]
```

注：[version] 或 [tag] 会被添加到 `package.json`，并在安装依赖时被解析。

- 从当前包里移除包。

```js
yarn remove [packagename]
```

- 安装`package.json` 文件里定义的所有依赖包；

```js
yarn
```

- 发布一个包到包管理器；

```js
yarn publish [name]
```

- 项目中升级依赖包

1. `yarn upgrade-interactive --latest`命令（亲测无效，不能更新`package.json`中的版本，可以更改`yarn.lock`中包的版本号）

```js
yarn upgrade-interactive --latest
```

输出结果

```js
info Color legend :
 "<red>"    : Major Update backward-incompatible updates
 "<yellow>" : Minor Update backward-compatible features
 "<green>"  : Patch Update backward-compatible bug fixes
? Choose which packages to update.
 devDependencies
   name                 range   from      to     url
>( ) vuepress             latest  1.5.2  ❯  1.5.3  https://github.com/vuejs/vuepress#readme

 dependencies
   name                 range   from      to     url
 ( ) vuepress-theme-reco  latest  1.4.7  ❯  1.5.5  https://vuepress-theme-reco.recoluan.com
```

需要手动选择升级的依赖包，按空格键选择，`a` 键切换所有，`i` 键反选选择

2. 指定版本号，这种方法会在 `package.json` 文件中限定包的版本

```js
yarn upgrade [package-name]@x.x.x
```

3. 使用 `npm-check-updates` 升级（亲测无效，不能更新`package.json`中的版本，可以更改`yarn.lock`中包的版本号）

```js
// 先下载
yarn global add npm-check-updates
// 更新包（yarn.lock和package.json同步更新）
ncu --upgrade --upgradeAll && yarn upgrade
```

### 默认命令

执行不带任何命令的`yarn`，等同于执行`yarn install`，并透传所有参数。

### 其他命令

- 查看yarn历史版本

```js
npm view yarn versions
```

- 升级指定版本的`yarn` （例：升级到1.22.4版本）

```js
yarn upgrade v1.22.4
```

### 用户自定义脚本

执行`yarn <script> [<args>]`将会执行用户自定义脚本。参阅[yarn run](https://classic.yarnpkg.com/zh-Hans/docs/cli/run)。

:::warning 附

- `package.json`：包含包的所有依赖信息；
- `yarn.lock`：记录每一个依赖项的确切版本信息；
:::
