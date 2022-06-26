---
title: 项目中依赖包的升级
date: 2019-07-10
 
categories:
 - 工具
tags:
 - 升级依赖

---

:::tip 升级依赖
在构建项目的时候，有时会经常为了将项目或者全局依赖更新到最新版本的情况，这里做个总结。
:::

## 检查版本

- 查看所有包的更新：

```js
npm -g outdated
```

- 查看单个包的更新版本

```js
npm show [packag-name]
```

## 更新

传统的做法是一个一个更新，比如更新 `react` 到最新版本，命令如下

```js
// npm
npm i --save react@latest
// yarn
yarn add react@latest
```

:::warning 注
`yarn` 是 `facebook` 发明的新一代 `js` 包管理器，支持离线使用.[这是 npm 与 yarn 的 命令对照](https://classic.yarnpkg.com/zh-Hans/docs/migrating-from-npm)
:::

这种做法相当耗时。有没有更简单的方法呢
当然有：`npm-check` 和 `yarn` ，都需要全局安装

## npm-check

安装`npm-check`

```js
npm i -g npm-check
// 或者
yarn add -g npm-check
```

在项目根目录运行

```js
npm-check -u
```

输出结果

```js
? Choose which packages to update. (Press <space> to select)

 Missing. You probably want these.
>( ) vuepress-theme-reco missing      1.5.5  https://vuepress-theme-reco.recoluan.com
 ( ) vuepress devDep missing          1.5.3  https://github.com/vuejs/vuepress#readme

 Space to select. Enter to start upgrading. Control-C to cancel.
```

空格选中某一项，`control-c`选中所有，回车开始升级

## yarn

- 安装yarn

```js
npm i -g yarn
```

- 项目中升级依赖包

1. `yarn upgrade-interactive --latest`命令（亲测无效，不能更新`package.json`中的版本，可以更新`yarn.lock`中的版本）

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

3. 使用 `npm-check-updates` 升级（亲测无效，不能更新`package.json`中的版本，可以更新`yarn.lock`中的版本）

```js
// 先下载
yarn global add npm-check-updates
// 更新包（yarn.lock和package.json同步更新）
ncu --upgrade --upgradeAll && yarn upgrade
```

## 更新命令对照表

更新全局依赖同上

|                                     说明                                      |               yarn                |    npm-check    |
| :---------------------------------------------------------------------------: | :-------------------------------: | :-------------: |
|                            更新项目依赖，没有交互                             |       yarn upgrade --latest       |  npm-check -y   |
|                             更新项目依赖，有交互                              | yarn upgrade-interactive --latest |  npm-check -u   |
|                            更新全局依赖，没有交互                             |   yarn global upgrade --latest    | npm-check -g -y |
| 更新全局依赖，有交互 yarn global upgrade-interactive --latest npm-check -g -u |

- 检测原理
`yarn` 是根据 `yarn.lock` 文件来检测版本是否是最新的，所以项目是使用 npm 安装依赖包，更新前要运行 `yarn` 这个命令安装 一下。

`npm-check` 是检测 `package.json` 文件，项目存在 `node_modules` 文件夹即可更新。

更新提醒
没有交互就是将依赖包直接更新到最新版本，推荐使用交互式更新，会有更新的警告信息。

最新的依赖包，`API` 可能发生重大改变。为了顺利更新，更新前请 `git commit` 一下，更新失败了也能顺利回退。

不推荐使用 `cnpm`
为了加快安装依赖的安装速度，可能被同事安利 `cnpm`，但是这样会导致包的依赖安装不正常，项目无法运行。

更好的做法是使用 nrm 切换下载源。

## 在VScode中有个插件可以更新包版本

- 插件名：`Version Lens`

- 使用：在编辑器里打开`package.json`文件,在每个依赖包处都有`latest`或者`latest x.x` 版本，点击版本号或者`latest`即可更新；如果打开`package.json`文件无变化，在编辑器右上角找`V`字的按钮，点击即可打开。
