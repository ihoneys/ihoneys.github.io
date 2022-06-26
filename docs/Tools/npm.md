---
title: npm
date: 2019-06-02
 
categories:
 - 工具
tags:
 - npm
publish: true
sticky: 9
# 打赏
showSponsor: true
---

<!-- more -->

## npm常用

[英文官网](https://www.npmjs.com/)

## 1. 切换淘宝源、官方源

切换 npm 镜像源

```js
npm config set registry [这里是镜像源 url]
```

a 官方源

```js
npm config set registry https://registry.npmjs.org
```

速度慢可以将`https` -> `http`，这样网速就会好很多

```js
npm config set registry http://registry.npmjs.org
```

b 淘宝源

```js
npm config set registry https://registry.npmmirror.com

// 其他

npm ---------- https://registry.npmjs.org/
yarn --------- https://registry.yarnpkg.com/
tencent ------ https://mirrors.cloud.tencent.com/npm/
cnpm --------- https://r.cnpmjs.org/
taobao ------- https://registry.npmmirror.com/
npmMirror ---- https://skimdb.npmjs.com/registry/
```

c 使用 `cnpm` **不推荐使用cnpm**

```js
npm install -g cnpm --registry=https://registry.npm.taobao.org
// 用`cnpm -v`检测是否成功
```

d 手动修改设置淘宝源

>1.打开`.npmrc`文件（`node`默认安装再`C`盘-`C:\Program Files\nodejs\node_modules\npm\npmrc`，没有的话可以使用`git`命令行建一个( `touch .npmrc`)，用`cmd`命令建会报错）
>2.增加 registry=<https://registry.npm.taobao.org>  即可。

检测是否修改成功，查看当前使用的 `npm` 镜像源

```js
npm config get registry
or
npm info express
```

其他镜像地址

```s
npm --- https://registry.npmjs.org/

npm --- https://registry.npm.taobao.org/

yarn --- https://registry.yarnpkg.com/

cnpm --- https://r.cnpmjs.org/

taobao --- https://registry.npm.taobao.org/

nj --- https://registry.nodejitsu.com/

rednpm --- https://registry.mirror.cqupt.edu.cn/

npmMirror --- https://skimdb.npmjs.com/registry/

deunpm --- http://registry.enpmjs.org/
```

显示进度条

```js
npm config set loglevel=http
```

## 2. 用npm安装依赖包

>`node`包的安装分为全局模式和本地模式:
>
> A、一般情况下会以本地模式运行，包会被安装到和你的应用程序代码的本地`node_modules`> 目录下。
>
> B、在全局模式下，`Node`包会被安装到Node的安装目录下的`node_modules`下。
>
> 获知使用`npm set global=true`来设定安装模式，`npm get global`可以查看当前使用的安装模式

以下命令是安装 `package.json` 中标记的所有的包，安装完毕后会产生一个`node_modules`目录，其目录下就是安装的各个`node`模块。

```js
npm install
or
npm i
```

- 若安装报错，且理论上都正确时，可用清除缓存的方法，运行清除后再次安装

```js
npm cache clean --force
```

- 安装指定的依赖包（一般标记在 `dependencies` 下）

```js
npm install [package_name]
```

:::warning 注意:
默认会安装包的最新版本，也可以通过在后面加版本号的方式安装指定版本，如 `npm install express@3.0.6`

项目对模块的依赖可以使用下面的 `3` 种方法来表示（假设当前版本号是 `1.1.0` ）:

兼容模块新发布的补丁版本：`~1.1.0`、`1.1.x`、`1.1`

兼容模块新发布的小版本、补丁版本：`^1.1.0`、`1.x、1`

兼容模块新发布的大版本、小版本、补丁版本：`*`、`x`
:::

- 将包安装到全局环境中:

```js
npm install [package_name] -g
```

:::warning 注意:
在代码中，直接通过 `require()` 的方式是没有办法调用全局安装的包的。全局的安装是供命令行使用的，就好像全局安装了 `vmarket` 后，就可以在命令行中直接运行 vm 命令。

`vm`/`vim` 在 `linux` 系统中的地位类似 `windows` 中的记事本，但功能要强大的多！
:::

- `-S / --save` 指定的包安装（多数情况下会安装最新版本的包),信息自动更新到 `package.json` 的 `dependencies`（生产阶段的依赖）中

```js
npm install [package-name] --save
or
npm i [package-name] -S
```

:::tip
npm高版本 默认使加S的
:::

- `-D / --save-dev` 指定的包安装,信息自动更新到 `package.json` 的 `devDependencies`（开发阶段的依赖）下

```js
npm install [package-name] --save-dev
or
npm i [package-name] -D
```

- `-O / --save-optional` 安装最新版本的包（多数情况下）,安装包的同时自动更新 `package.json` 的 `optionalDependencies`（可选阶段的依赖）下

```js
npm install [package-name] --save-optional
or
npm install [package-name] -O
```

- `-E / --save-exact` 精确安装指定模块版本

```js
npm install [package-name] --save-exact
or
npm install [package-name] -E
```

> 输入命令 `npm install gulp -ES` ,注意 `package.json` 文件的 `dependencies` 字段，可以看出版本号中的 `^` 消失了
>
> ```js
> "devDependencies": {
>     "gulp": "^3.9.1"
> }
> ```
>
> ```js
> //输入 npm install gulp -ES 后
> "dependencies": {
>     "gulp": "3.9.1"
> }
> ```

- 查看 `node` 模块的 `package.json` 文件夹

```js
npm view moduleNames
```

:::warning 注意:
如果想要查看 `package.json` 文件夹下某个标签的内容，可以使用`npm view moduleName labelName`.
:::

- 查看当前目录下已安装的 `node` 包（模块及依赖）

```js
npm list
or
npm ls
/
npm ls -g  //查看全局安装的模块及依赖 aliases: list, la, ll
```

模块的依赖都被写入了 `package.json` 文件以后，别人打开项目的根目录（项目开源、内部团队合作），使用 `npm install` 命令可以根据 `dependencies` 配置安装所有的依赖包(应当注意 `package-lock` 或 `yarn-lock` 的作用)

:::warning 注意:
`Node` 模块搜索是从代码执行的当前目录开始的，搜索结果取决于当前使用的目录中的 `node_modules` 下的内容。`npm list parseable=true` 可以目录的形式来展现当前安装的所有包
:::

## 3. 卸载安装的包

- 卸载模块

```js
npm usinstall [package-name]
```

:::warning  aliases
 yarn remove
 /
 rm, r, un, unlink ...
:::

- 卸载模块，同时删除模块留在 `package.json` 中 `dependencies`（生产环境） 下的对应信息

```js
npm uninstall [package-name] --save
or
npm uninstall [package-name] -S
```

- 卸载模块，同时删除模块留在 `package.json` 中 `devDependencies`（开发环境） 下的对应信息

```js
npm uninstall [package-name] --save-dev
or
npm uninstall [package-name] -D
```

- 移除依赖包

```js
npm remove [package-name]
```

## 4. 项目的初始化和一键初始化

```js
npm init     //初始化
or
npm init -y  //一键初始化
```

:::warning
aliases[-f|--force|-y|--yes]
:::

执行后会创建一个 `package.json` 文件(项目的相关信息)
> package.json （项目）
>
> ```json
>{
>   name : //项目名称
>   version: (1.0.0):  //版本号
>   description: //简介，对项目进行简介
>   entry point: //入口文件的名字
>   test command: //测试命令
>   git repository: //git仓库地址
>   keywords: //关键词
>   author: //作者
>   license: (ISC): //协议
>   dependencies:  //写入依赖（生产环境）
>   devDependencies: //写入依赖（开发环境）
>}
>  ```
>
## 5. npm start 启动模块（项目运行）

```js
npm start [-- <args>]
```

- 启动项目

```js
npm run [项目名称]   // vue

npm start           // react

  ······
```

> 该命令写在 `package.json` 文件 `scripts`的 `start` 字段中，可以自定义命令来配置一个服务器环境和安装一系列的必要程序，如
>
> ```json
> "scripts": {
>     "start": "gulp -ws"
> }
> ```
>
> 此时在cmd中输入 `npm start` 命令相当于执行 `gulpfile.js` 文件自定义的 `watch`和 `server` 命令。
>
> 如果 `package.json` 文件没有设置 `start`，则将直接启动 `node server.js`

## 6. 停止、重启、测试模块

- 停止模块

```js
npm stop [-- <args>]
```

- 重新启动模块

```js
npm restart
or
npm restart [-- <args>]
```

- `npm test` 测试模块

```js
npm test [-- <args>]
or
npm tst [-- <args>]
```

> 该命令写在 `package.json` 文件`scripts` 的 `test` 字段中，可以自定义该命令来执行一些操> 作，如
>
> ```json
> "scripts": {
>     "test": "gulp release"
> },
> ```
>
> 此时在cmd中输入 `npm test` 命令相当于执行 `gulpfile.js` 文件自定义的 `release`命令。

## 7. 查看模块的版本

```js
npm version [newversion | major patch | preminor | prepatch | from-git]

npm [-v | --version]    //to print npm version
npm view <pkg> version  //to view a package's published version
npm ls                  //to inspect current package/dependency versions
```

- 查看模块的注册信息
>
> ```JS
> npm view [<@scope>/]<name>[@<version>] [<field>[.<subfield>]...]
>
> aliases: info, show, v
> ```
>
> 查看包的依赖关系
>
> ```js
> npm view [package-name] dependencies
> ```
>
> 查看包的源文件地址
>
> ```js
> npm view [package-name] repository.url
> ```
>
> 查看包所依赖的Node的版本
>
> ```js
> npm view [package-name] engines
> ```
>
> 查看npm使用的所有文件夹
>
> ```js
> npm help folders
> ```
>
> 用于更改包内容后进行重建
>
> ```js
> npm rebuild [package-name]
> ```
>
> 检查包是否已经过时，此命令会列出所有已经过时的包，可以及时进行包的更新
>
> ```js
> npm outdated
> ```

## 8. npm 插件部署到npm官网

- 发布一个`npm`包的时候，需要检验某个包名是否已存在

```js
npm search [package-name]
```

- 登录 `npm` 官网(第一次使用本机登录，添加用户)

```js
npm adduser
or
npm adduser [--registry=url] [--scope=@orgname] [--always-auth]
```

- 登录 `npm` 官网（登录过以后，可以直接值用本命令）

```js
npm login
```

- 插件的初始化(同样是创建 `package.json` 文件，与项目的 `package.json` 不同，这里是插件的信息)

```js
npm init     //初始化
or
npm init -y  //一键初始化
```

:::warning
aliases[-f|--force|-y|--yes]
:::

这里是插件的`package.json`的简单介绍
> `package.json`(插件)
>
> ```json
>     {
>     "name": "myplugin", //包的名字 要小写
>     "version": "1.0.0", //包的版本号。如"1.0.0"
>     "description": "My New Project description.",
>     //description:包的描述信息，将会在npm search的返回结果中显示，以帮助用户> 选择合适的包
>     "main": "index.js",
>     //main:包的入口文件。
>     "scripts": {
>         "test": "echo \"Error: no test specified\" && exit 1"
>     },
>     //scripts:通过设置这个可以使NPM调用一些命令脚本，封装一些功能。
>     "keywords": [
>         "guangju-test-video"
>     ],
>     //keywords:包的关键词信息，是一个字符串数组，同上也将显示在npm search的> 结果中
>     "author": {
>         "name": "Your Name",
>         "email": "you@mail.com"
>     },
>     //author:包的作者
>     "license": "MIT",
>     //license:包的开源协议名称
>}
> ```


- 发布我们的代码到 `npm` 官网

```js
npm publish
```

:::warning 注意
同一个插件，每一次使用该命令必须保证 `package.json` 的 `version` 版本有变化才可以。
:::

- 在发布的包上设置访问级别

```js
npm access public [ ackage]
npm access restricted [ package]

npm access grant [ read-only|read-write ]scope:team [package]
npm access revoke [scope:team] [package]

npm access ls-packages [ user | scope | scope:team ]
npm access ls-collaborators [ package [ user ]]
npm access edit [ package ]
```

- 撤销已经发布的包

> 取消发布的整个包，相当于删除发布到 npm 的代码
>
> ```js
> npm unpublish [package-name] -f
> ```
>
> 如果开启了 `two-factor-authentication（双重验证）`需要加上`--otp=123456`, `123456` 是手机端 npm 验证 app (Authenticator)中获取的验证码。
>
> ```js
> npm unpublish --otp=123456 [package-name] -f
> ```
>
> 撤销已经发布的具体版本，则可以使用：
>
> ```js
> npm unpublish [package-name]@[version]
> 例如:
> npm unpublish [package-name]@1.2.0   // v1.2.0是想要撤销的版本号
> ```
>
> 同上，如果开启了 `two-factor-authentication（双重验证）`需要加上> `--otp=123456`。
>
> ```js
> npm unpublish [package-name]@[version] --otp=123456
> ```

- 查看当前登录的 `npm` 用户

```js
npm whoami
```

- 查看 npm 配置

```js
npm config ls
```

## 9. 清除缓存

- `npm cache` 管理模块的缓存

```js
npm cache add <tarball file>
npm cache add <folder>
npm cache add <tarball url>
npm cache add <name>@<version>
npm cache ls [<path>]
npm cache clean [<path>]
```

最常用命令无非清除`npm`本地缓存

```js
npm cache clean

```

- 强制清除缓存(比如安装 `vue-cli` 不成功时，清除缓存，再重装)

```js
npm cache clear --force
```

- 查看缓存位置

```js
npm config get cache
```

## 10. npm 设置全局安装目录

- 设置`npm`包的全局安装路径

先在相应位置创建文件夹

```js
npm config set prefix "C:\node\npm_global"
```

以及全局缓存位置

```js
npm config set cache "C:\node\npm_cache"
```

:::warning
路径`"C:\node\npm_cache"`中不要有带空格的地方，比如`"C:\Program Files\npm_cache"`就不行，在使用`npx`的时会报错!
:::
查看是否修改成功

```js
npm config ls
```

## 11. npm 更新和其他设置命令

- 安装指定版本

```js
npm install [package-name]@[version]
//例如：npm install vue@2.5.1
```

- 查看当前包的安装路径

```js
npm root
```

- 查看全局的包的安装路径

```js
npm root -g
```

- 查看`npm`安装的版

```js
npm -v
or
npm --version
```

- 更新 `npm` 到最新版本

```js
npm install npm -g
```

- 更新`node`模块

```js
npm update [package-name]
```

- `npm config` 管理`npm`的配置路径

```js
npm config set <key> <value> [-g|--global]
npm config get <key>
npm config delete <key>
npm config list
npm config edit
npm get <key>
npm set <key> <value> [-g|--global]
```

> 对于`config`这块用得最多应该是设置代理，解决`npm`安装一些模块失败的问题
> 例如我在公司内网，因为公司的防火墙原因，无法完成任何模块的安装，这个时候设置代> 理可以解决
>
> ```js
> npm config set proxy=http://xxx
> ```
>
> 又如国内的网络环境问题，某官方的IP可能被和谐了，国内搭建了镜像，此时简单设置镜> 像
>
> ```js
> npm config set registry="http://r.cnpmjs.org"
> ```
>
> 也可以临时配置，如安装淘宝镜像
>
> ```js
> npm install -g cnpm --registry=https://registry.npm.taobao.org
> ```

## 12. 查看全局安装的node包

```js
npm list -g --depth 0
```

如果不加`--depth 0`会显示出所用的包及其子目录。

## 13. 查看全局是否安装过某个包

```js
npm ls 包/插件名称 -g
// 例
npm ls webpack -g
```

查看本地/当前项目下是否安装某个包（不加-g）

```js
npm ls webpack
```

## 14. 帮助命令

- 查看帮助命令

```js
npm help
or
npm -h
```

- `npm help` 查看某条命令的详细帮助

```js
npm help <term> [<terms..>]
```

> 例如输入 `npm help install`，系统在默认的浏览器或者默认的编辑器中打开本地nodejs安装包的文件`/nodejs/node_modules/npm/html/doc/cli/npm-install.html`

npm包是包含了`package.json`的文件夹，`package.json`描述了这个文件夹的结构。访问`npm`的`json`文件夹的方法如下，此命令会以默认的方式打开一个网页，如果更改了默认打开程序则可能不会以网页的形式打开

```js
npm help json
```

[更多命令](https://www.npmjs.org/doc)

## 附：package.json 文件详解

- 参考[英文原版](https://docs.npmjs.com/files/package.json)
- 引用国内整理：[《npm的package.json中文文档》](https://github.com/ericdum/mujiang.info/issues/6/)

> npm会根据包内容设置一些默认值。
>
> ```json
> "scripts": {"start": "node server.js"}
> ```
>
> 如果包的根目录有 server.js 文件，npm 会默认将 `start` 命令设置为 `node server.js`。
>
> ```json
> "scripts":{"preinstall": "node-waf clean || true; node-waf configure  build"}
> ```
>
> 如果包的根目录有 wscript 文件，npm 会默认将 `preinstall` 命令用 `node-waf`进行编译。
>
> ```json
> "scripts":{"preinstall": "node-gyp rebuild"}
> ```
>
> 如果包的根目录有 `binding.gyp` 文件，npm 会默认将 `preinstall` 命令用`node-gyp` 进行编译。
>
> ```json
> "contributors": [...]
> ```
>
> 如果包的根目录有 AUTHORS 文件，npm 会默认逐行按 `Name <email> (url)`格式处理，邮箱和 url 是可选的。`#` 号和空格开头的行会被忽略。

- `name`

在 `package.json` 中最重要的就是 `name` 和 `version` 字段。他们都是必须的，如果没有就无法 `install` 。`name` 和 `version` 一起组成的标识在假设中是唯一的。改变包应该同时改变`version`。

`name`是这个东西的名字。注意：

> - 不要把 node 或者 js 放在名字中。因为你写了 package.json 它就被假定成为了js，不过> 你可以用 "engine" 字段指定一个引擎（见后文）。
> - 这个名字会作为在 URL 的一部分、命令行的参数或者文件夹的名字。任何`non-url-safe`的字符都是不能用的。
> - 这个名字可能会作为参数被传入 `require()`，所以它应该比较短，但也要意义清晰。
> - 在你爱上你的名字之前，你可能要去 `npm registry` 查看一下这个名字是否已经被使用了。[npm 官网](https://www.npmjs.com/)

- `version`

`version` 必须能被 [node-semver](https://github.com/isaacs/node-semver) 解析，它被包在npm的依赖中。（要自己用可以执行 `npm install semver`）

可用的“数字”或者“范围”见 [npm 官网](https://www.npmjs.com/).

- `description`

放简介，字符串，方便在 `npm search` 中搜索

- `keywords`

关键字，数组、字符串，方便在 `npm search` 中搜索

- `bugs`

你项目的提交问题的 `url` 和（或）邮件地址

```json
{
 "url" : "http://github.com/owner/project/issues",
"email" : "project@hostname.com"
}
```

- `license`

你应该要指定一个许可证，让人知道使用的权利和限制的。

最简单的方法是，假如你用一个像 `BSD` 或者 `MIT` 这样通用的许可证，就只需要指定一个许可证的名字，像这样：

```json
{ "license" : "BSD" }
```

如果你又更复杂的许可条件，或者想要提供给更多地细节，可以这样:

```json
"licenses" : [
  { "type" : "MyLicense"
  , "url" : "http://github.com/owner/project/path/to/license"
  }
]
```

- `repository`

指定你的代码存放的地方。这个对希望贡献的人有帮助。如果 `git` 仓库在 `github` 上，那么 `npm docs` 命令能找到你。

这样做：

```json
"repository" :
  { "type" : "git"
  , "url" : "http://github.com/isaacs/npm.git"
  }

"repository" :
  { "type" : "svn"
  , "url" : "http://v8.googlecode.com/svn/trunk/"
  }
```

URL 应该是公开的（即便是只读的）能直接被未经过修改的版本控制程序处理的 `url`。不应该是一个 `html` 的项目页面。因为它是给计算机看的。

- `scripts`

`scripts` 是一个由脚本命令组成的 `hash` 对象，他们在包不同的生命周期中被执行。`key``是生命周期事件，value` 是要运行的命令。

参考上面的 `npm start`、`npm test` 命令

更多详细请看 [npm-scripts官网](https://www.npmjs.com/package/npm-scripts)

- `config`

`"config"` `hash` 可以用来配置用于包脚本中的跨版本参数。在实例中，如果一个包有下面的配置：

```json
{
 "name" : "foo",
 "config" : { "port" : "8080" }
}
```

然后有一个 `start` 命令引用了 `npm_package_config_port` 环境变量，用户可以通过`npm config set foo:port 8001` 来重写他。

参见 [npm 官网](https://www.npmjs.com/)。

- `dependencies`

依赖是给一组包名指定版本范围的一个 `hash`。这个版本范围是一个由一个或多个空格分隔的字符串。依赖还可以用 `tarball` 或者 `git URL`。

请不要将测试或过渡性的依赖放在 `dependencieshash` 中。见下文的 `devDependencies`:

> ```js
> version 必须完全和version一致
> >version 必须比version大
> >=version 同上
> <version 同上
> <=version 同上
> ~version 大约一样
> 1.2.x 1.2.0, 1.2.1, 等，但不包括1.3.0
> http://... 见下文'依赖URL'
> * 所有
> "" 空，同*
> version1 - version2 同 >=version1 <=version2.
> range1 || range2 二选一。
> git... 见下文'依赖Git URL'
> user/repo 见下文'GitHub URLs'
> ```

比如下面都是合法的：

```json
{ "dependencies" :
  { "foo" : "1.0.0 - 2.9999.9999"
  , "bar" : ">=1.0.2 <2.1.2"
  , "baz" : ">1.0.2 <=2.3.4"
  , "boo" : "2.0.1"
  , "qux" : "<1.0.0 || >=2.3.1 <2.4.5 || >=2.5.2 <3.0.0"
  , "asd" : "http://asdf.com/asdf.tar.gz"
  , "til" : "~1.2"
  , "elf" : "~1.2.3"
  , "two" : "2.x"
  , "thr" : "3.3.x"
  }
}
```

- `devDependencies`

如果有人要使用你的模块，那么他们可能不需要你开发使用的外部测试或者文档框架。

在这种情况下，最好将这些附属的项目列在 `devDependencies` 中。

这些东西会在执行 `npm link` 或者 `npm install` 的时候初始化，并可以像其他 `npm` 配置参数一样管理。

对于非特定平台的构建步骤，比如需要编译 `CoffeeScript` ，可以用 `prepublish` 脚本去实现，并把它依赖的包放在 `devDependency` 中。（注：`prepublish` 定义了在执行 `npm publish` 的时候先行执行的脚本）

比如：

```json
{ "name": "ethopia-waza",
  "description": "a delightfully fruity coffee varietal",
  "version": "1.2.3",
  "devDependencies": {
    "coffee-script": "~1.6.3"
  },
  "scripts": {
    "prepublish": "coffee -o lib/ -c src/waza.coffee"
  },
  "main": "lib/waza.js"
}
```

`prepublish` 脚本会在 `publishing` 前运行，这样用户就不用自己去 `require` 来编译就能使用。并且在开发模式中（比如本地运行 `npm install` ）会运行这个脚本以便更好地测试。

## Npm 发布插件的流程

:::tip 介绍:
我们可以将自己常用的`vue`功能片段，封装成一个插件，托管到 `npm` 官网，在以后需要使用时直接安装，方便使用。
:::

### 创建和使用插件

> 1. 建立一个插件的文件夹；
> 2. 在文件夹下创建两个文件， index.js & name.vue【可选】；
> 3. 在index.js 中写install方法将插件挂载到vue实例上，并向外暴漏；
> 4. 在main.js中引入 index.js 使用Vue.use()安装；
> 5. 在具体位置引用。

### 插件目录结构（这只是最基本的结构，如果插件复杂目录文件会更多）

```js
  myplugin
    │
    ├─ index.js      // 入口文件
    ├─ package.json  // 插件配置文件
    ├─ README.md     // 自述文件，用来介绍本插件
    └─ DemoApp.vue   // 插件具体的功能代码
```

1. 创建一个文件夹：`myplugin`（即发布插件时的名称）

:::warning  注意:

1. 你即使命名有大写字母，实际下载安装时，包的名字还需用小写！

2. 包的名称最好不要太大众的，重名是不能发布成功的！

3. `pachage.json`的`name`参数不能使用大写！
:::

2. `myplugin` 下建立一个 `index.js` 文件，写入如下内容

```js
//在index.js 中写install方法将插件挂载到vue实例上，并向外暴漏
import TestVideo from './VideoApp'
let VideoApp = {
    install: function (Vue, option) {
        Vue.component('TestVideo', TestVideo)
    }
}

export default VideoApp
```

:::warning 注意:
`VideoApp` 和 `TestVideo` 不要搞混了！`TestVideo`是你要**使用**插件时的名字
:::

3. 创建`VideoApp.vue`文件

本文件中式插件的具体功能代码（本例用仅用`video`标签演示）。

```html
// VideoApp.vue
<template>
  <div>
    <h3>月星人的活动</h3>
    <video controls width="500">
      <source src="./video.mp4" type="video/mp4" />
    </video>
  </div>
</template>

    <script>
export default {
  name: "VideoApp",

};
    </script>
<style>
</style>
```

4. 创建 `README.md` 文件

在 `myplugin` 文件夹下建立一个 `REDAME.md` 的 `markdown` 文件，本插件的说明文档，我们在 `npm` 网站上搜到本插件，点开详情页时，用来显示插件说明的文件

1. 创建 `package.json` 文件

在 myplugin 文件夹里打开 cmd 窗口输入

```js
npm init    // 一直回车
or
npm init -y
```

<img src="https://s1.ax1x.com/2020/06/27/NykgB9.png" alt="npm init">

然后我们得到一个 `package.json` 文件；这里简单说明一下, `package.json`文件的内容：
> package.json
>
> ```json
> {
>     "name": "mypulgin", //插件、依赖包的名字 要小写
>     "version": "1.0.0", //包的版本号。如"1.0.0"
>     //name和version是package.json中最重要的两个字段，也是发布到NPM平台上的> 唯一标识，如果没有正确设置这两个字段，包就不能发布和被下载
>     "description": "My New Project description.",
>     //description:包的描述信息，将会在npm search的返回结果中显示，以帮助用户> 选择合适的包
>     "main": "index.js",
>     //main:包的入口文件。
>     "scripts": {
>         "test": "echo \"Error: no test specified\" && exit 1"
>     },
>     //scripts:通过设置这个可以使NPM调用一些命令脚本，封装一些功能。
>     "keywords": [
>         "guangju-test-video"
>     ],
>     //keywords:包的关键词信息，是一个字符串数组，同上也将显示在npm search的> 结果中
>     "author": {
>         "name": "Your Name",
>         "email": "you@mail.com"
>     },
>     //author:包的作者
>     "dist-tags": {
>         "latest": "1.0.0"
>     },
>     "maintainers": [{
>         "name": "Your Name",
>         "email": "you@mail.com"
>     }],
>     //maintainers:包的贡献者，是一个数组。
>     "time": {
>         "modified": "2020-06-26T10:03:30+00:00",
>         "created": "2020-06-26T10:03:30+00:00",
>         "1.0.0": "2020-06-26T10:03:30+00:00"
>     },
>     //创建、更新时间，版本信息
>     "homepage": "https://my-new-project-website.com/",
>     //homepage:包的主页地址
>     "repository": {
>         "url": "https://example.com/your-username/my-new-project",
>         "type": "git"
>     },
>     //repository:包的仓库地址
>     "contributors": [{
>             "name": "Your Friend",
>             "email": "their-email@mail.com",
>             "url": "http://their-website.com"
>         },
>         {
>             "name": "Another Friend",
>             "email": "another-email@mail.com",
>             "url": "https://another-website.org"
>         }
>     ],
>     //contributors:包的贡献者，是一个数组
>     "bugs": {
>         "url": "https://github.com/you/my-new-project/issues"
>     },
>     //bugs:包的bug跟踪主页地址
>     "license": "MIT",
>     //license:包的开源协议名称
>     "readmeFilename": "README.md",
>     //自述文件的名字
>     "files": ["index.js", "lib/*.js", "bin/*.js"],
>     //files(较少用):包所包含的所有文件，可以取值为文件夹。通常我们还是用.> npmignore来去除不想包含到包里的文件。
>     "bin": {
>         "my-new-project-cli": "bin/my-new-project-cli.js"
>     },
>     //bin(较少用):如果你的包里包含可执行文件，通过设置这个字段可以将它们包含> 到系统的PATH中，这样直接就可以运行，很方便。
>     "dist": {
>         "shasum": "908bc9a06fa4421e96ceda243c1ee1789b0dc763",
>         "tarball": "https://registry.npmjs.org/my-new-project/-/> my-new-project-1.0.0.tgz"
>     },
>     "directories": {}
>     //directories(较少用):CommonJS包所要求的目录结构信息，展示项目的目录结构> 信息。字段可以是：lib, bin, man, doc, example。值都是字符串
>  }
> ```
>
> 其他参数
>
> - `man`(较少用):
> 为系统的`man`命令提供帮助文档。帮助文件的文件名必须以数字结尾，如果是压缩的，需> 要以`.gz`结尾
>
> - `config`:
> 添加一些设置，可以供`scripts`读取用，同时这里的值也会被添加到系统的环境变量中
>
> - `dependencies`:（生产环境）
> 指定依赖的其它包，这些依赖是指包发布后正常执行时所需要的，也就是线上需要的包。  使用下面的命令来安装：
>
> ```js
> npm install --save packageName
> ```
>
> 如果是开发中依赖的包，可以在`devDependencies`设置。
>
> - `devDependencies`:（开发环境）
>
> 这些依赖只有在开发时候才需要。使用下面的命令来安装：
>
> ```js
> npm install --save-dev packageName
> ```
>
> - `peerDependencies`:
>
> 包相关的依赖，如果你的包是插件，而用户在使用你的包时候，通常也会需要这些依赖> （插件），那么可以将依赖列到这里。
>
> 如`karma`, 它的`package.json`中有设置，依赖下面这些插件：
>
> > 示例
> >
> > ```json
> > "peerDependencies": {
> >   "karma-jasmine": "~0.1.0",
> >   "karma-requirejs": "~0.2.0",
> >   "karma-coffee-preprocessor": "~0.1.0",
> >   "karma-html2js-preprocessor": "~0.1.0",
> >   "karma-chrome-launcher": "~0.1.0",
> >   "karma-firefox-launcher": "~0.1.0",
> >   "karma-phantomjs-launcher": "~0.1.0",
> >   "karma-script-launcher": "~0.1.0"
> > }
> > ```
> >
> - `bundledDependencies`:
>
> 绑定的依赖包，发布的时候这些绑定包也会被一同发布。
>
> - `optionalDependencies`（较少用）:
>
> 即使这些依赖没有，也可以正常安装使用。
>
> - `engines`（较少用）:
> 指定包运行的环境。
>
> > 示例
> >
> > ```json
> > "engines": {
> >   "node": ">=0.10.3 < 0.12",
> >   "npm": "~1.0.20"
> > }
> > ```
>
> - os（较少用）:
>
> 指定你的包可以在哪些系统平台下运行。
>
> > 示例
> >
> > ```js
> > "os": [ "darwin", "linux", "!win32" ]
> > ```
>
> - `cpu`（较少用）:
>
> 可以指定包运行的cpu架构。
>
> - `private`:
>
> 设为`true`这个包将不会发布到NPM平台下。
>
> - `publishConfig`（较少用）:
>
> 这个字段用于设置发布时候的一些设定。尤其方便你希望发布前设定指定的`tag`或 `registry`。

:::warning 提示:
在进行下一步前，要在项目里引入、测试一下你的插件，看是否能用哦
:::

#### 测试插件

在你创建插件的项目里引入插件，测试使用效果。
>
> 1. 在Vue项目里的main.js文件中引入和注册插件；
>
>   ```js
>    // main.js
>       //引入
>       import TestPulginName from './myplugin'
>       //注册
>       Vue.use(TestPulginName)
>   ```
>
> 2. 在要使用插件的具体位置使用插件；
>
>   ```html
>        <div>
>           <TestVideo />
>           <!-- TestVideo:是在插件mypulgin文件夹下index.js中声明的名字 -->
>        </div>
>   ```
>
> 3. 查看页面效果。

### 发布到 npm 官网

只有发布到`npm`官网，所有人才能通过 `npm` 下载安装使用你的插件。

1. 注册 `npm` 账号

打开[npm官网](https://www.npmjs.com/),点击 `Sign Up` 注册账号。
>`npm` 账号的"双重认证"，它默认是开启的，有时候我们强制上传会需要双认证码。
>
>在 `npm` 网站，用户 Account 设置里：
>
>"Two Factor Authentication"意为"双重认证"，是可以关闭的，需要先验证。手机下载“Authentication”的软件，打开后选择添加账号，选择扫码，扫了 npm 网站上双重认证的二维码就好了，登录成功后，可以把这个双重验证关闭。

2. 登录`npm`账号

在 `myplugin` 文件夹里打开 `cmd`或其他终端 :

:::danger  警告:

1. 在发布包之前，如果你是第一次使用 `npm` 账号，需要验证你注册时的邮箱！！！

2. 你使用的`npm`源如果不是官网的源，需要先改回官方源！！！
:::

你可以使用`nrm`来设置源

```js
nrm use npm
```

```js
npm config set registry https://registry.npmjs.org
```

通过 `cmd` 登录 `npm` 账户：

```js
npm adduser     //这是添加npm用户的命令
```

如果你已经添加过用户了，只需要进行登录就好,输入

```js
npm login
```

无论时 `adduser` 还是 `login` 都会提示输入`username`、 `password`、`email`，依次正确输入。

:::warning 注意:
和登录`linux`系统一样，输入密码时不会显示输入的内容
:::

<img src="https://s1.ax1x.com/2020/06/27/NyG1Vx.png" alt="login">

如果有提示`Logged in as [your-username] on http://registry.npmjs.org/.`，说明已经正确登录，可以进行提交发布操作了。

1. 发布插件

登录成功后 输入命令（[npm发布、撤销及其他常用命令](http://zguangju.gitee.io/Tools/npm.html#_6-npm-插件部署到npm官网)）

```js
 npm publish
```

如果不报错，并且命令行显示出了你的包名称，说明我们提交成功了，代码就上传到 `npm` 网站上了。此时可以到 `npm` 账户里的 `project` 查看，也可以在 `npm` 搜索框里搜到。

## 从npm下载安装插件

```js
npm i [package-name]
or
yarn add [package-name]
```

> yarn 也是从 npm 下载包的，所以 npm 和 yarn 是通用滴。

## 附：几种报错情况

如果你按照我说的步骤进行的应该已经成功了，如果没有听话，从下面找原因，下面没有的，自己搜索啦。

1. 需要邮箱验证

<img src="https://s1.ax1x.com/2020/06/27/NykcnJ.png" alt="需要邮箱验证">

解决方法打开邮箱，找到`npm`发给你的邮箱，验证邮箱

2. 需要修改官方源

<img src="https://s1.ax1x.com/2020/06/27/NykWA1.png" alt="需要修改官方源">

解决方法：修改`npm`源

3. 包名称被占用
<img src="https://s1.ax1x.com/2020/06/27/Nyk27R.png" alt="包名称被占用">

解决方法：修改`package.json`中的`name`参数，包名字，以及插件文件夹的名字，

4. 其他错误 ---> [这里](https://cn.bing.com/)

参考其他资料：

<https://docs.npmjs.com/#cli>

<https://github.com/ericdum/mujiang.info/issues/6/>

<https://segmentfault.com/a/1190000004221514>

(完)
