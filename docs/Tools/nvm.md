---
title: nvm
date: 2020-12-23
 
categories:
 - 工具
tags:
 - nvm

---

## win10 安装 nvm-window

- 下载

打开[链接](https://github.com/coreybutler/nvm-windows/releases) 下载第三个包--`nvm-setup.zip`，然后安装在本机。

打不开 `Github`,可以用蓝奏云 [地址](https://wwa.lanzoui.com/i1DX1r748ab)

:::danger 警告
安装前要保证没有安装过`node`，或者完全卸载安装过的`node`
:::

\* 安装过程中地址选择，最好用默认地址。

- 下载速度慢，或者安装不上

在终端修改淘宝镜像

```js
nvm node_mirror http://npm.taobao.org/mirrors/node/
nvm npm_mirror https://npm.taobao.org/mirrors/npm/
```

\* 注意结尾有斜杠

修改`nvm`安装位置的`setings.txt`文件

```js
node_mirror: https://npm.taobao.org/mirrors/node/
npm_mirror: https://npm.taobao.org/mirrors/npm/
```

- 安装`node`

```js
nvm install 8.9.0   // 安装的版本
```

[查看 node 发行的所有版本](https://nodejs.org/dist/)

- 常用命令

| 命令                  | 作用                   |
| :-------------------- | :--------------------- |
| `nvm list`            | 查看本地所有`node`版本 |
| `nvm install latest`  | 安装最新`node`版本     |
| `nvm install 8.9.0`   | 安装 `8.9.0` 版本      |
| `nvm use 8.9.0`       | 切换至 `8.9.0` 版本    |
| `nvm uninstall 8.9.0` | 卸载`8.9.0` 版本       |

打开某一个版本，里面都有可以运行的`node.exe`,并且自带一个对应`node`版本的`npm`工具。

### 配置

配置`npm`全局安装路径

- 先不配置全局安装路径

直接使用`npm`安装`jquery`包，`npm i -g jquery`，现在是直接安装在当前使用的版本`8.9.0`的`node`所在目录下

此时，我们切换`node`版本进行切换，发现我们刚才安装的`jquery`包不存在了，所以我们需要配置`npm`所安装包的全局路径

- 设置`npm`包的全局安装路径

先在相应位置创建文件夹

```js
npm config set prefix "C:\Program Files\npm_global"
```

以及全局缓存位置

```js
npm config set cache "C:\Program Files\npm_cache"
```

查看是否修改成功

```js
npm config ls
```

- 测试

安装一个`bootstrap`包，然后随意切换`node`版本，此时，全局安装的`node`包是一直都存在的

- 添加环境变量

当我们使用`npm i -g webpack` 安装一个`webpack`包之后，我们希望`webpack`命令，是可以直接运行在系统的任何`cmd`的，

我们需要在设置--高级系统设置--环境变量--用户变量\系统变量中设置`path`，添加一下`npm`指定安装全局包的路径(就是你上面设置的全局安装位置)`C:\Program Files\npm_global\`(路径最后的斜杠不要忘了)。

## Ubuntu 安装nvm

```js
curl -o- https://gitee.com/mirrors/nvm/raw/v0.33.2/install.sh | bash
```

## Debian 安装 nvm

安装前，虽然在`linux`中影响不大，但还是建议最好先卸载之前安装过的`node`，

[官方最新安装版本命令](https://github.com/nvm-sh/nvm#install-script)

安装命令(安装的是0.33.11)

```js
curl https://raw.githubusercontent.com/creationix/nvm/master/install.sh | bash
```

安装指定版本的`nvm`(我用的，当前最新版本)

```js
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash
```

### 通过nvm安装使用node

- 查看远程可安装的所有`node`版本

```js
nvm ls-remote
```

- 安装`node`

```js
nvm install 8.9.0
```

- 查看安装的所有`node`版本

```js
nvm ls
```

- 安装最新稳定版`node`

```js
nvm install latest
```

- 安装最新不稳定版`node`

```js
nvm install unstable
```

\* 安装完成后会提示你，重启当前终端，或者添加到环境变量后才能使用`nvm`(重启最简单了)

- 使用某版本的`node`

```js
nvm use 8.9.0
```

:::warning `nvm use` 报错 `“exit status 1 乱码”`

1. 安装路径有中文
2. 安装路径有空格
3. `cmd`窗口不是管理员打开方式
4. 配置文件和实际安装路径不符
:::

- 给某个`node`版本设置别名

```js
nvm alias awesome-version 4.2.2
```

- 设置默认`node`版本

```js
nvm alias default <version>
```

- 不同版本的`node`环境中，安装的包是不同的，目的是为了防止兼容问题，但是可以用以下命令导入已安装的包

```js
nvm install v5.0.0 --reinstall-packages-from=4.2
```

\* 从`4.2` 导入到`5.0.0`中

- 确认某个版本`Node`的路径

```js
nvm which 4.2.2
```

使用`belwo`命令使用所需版本的`node.js`运行`Node`脚本(先安装`belwo`)

```js
nvm exec 12.18.3 server.js
```

### 卸载 nvm

- 执行下面的命令移除`nvm`内容

```js
cd ~
rm -rf .nvm
```

- 移除掉`~/.profile`, `~/.bash_profile`, `~/.zshrc`, `~/.bashrc`文件中关于`nvm`的配置

## centos 安装 nvm

1. 要安装`nvm`，需要安装构建源包所需的工具，`CentOS` 上安装，用这些命令来安装构建工具：

```js
sudo yum update
sudo yum groupinstall 'Development Tools'
```

2. 现在当安装构建工具时，需要从`nvm`的官方`github`存储库获取并执行安装脚本

```js
curl -o- <https://raw.githubusercontent.com/creationix/nvm/v0.31.1/install.sh> | bash
```

3. 这将在您的机器上安装nvm。关闭或者重新打开您的终端，运行以下命令检查nvm是否已成功安装，这个命令简单的终输出 nvm

```js
command -v nvm
```

4. 要找出可以通过nvm安装的Node.js的可用版本，运行以下命令，这个命令的输出将提供一个庞大的node版本列表

```js
nvm ls-remote
```

### 配置全局目录

```js
cd /usr/local/node
mkdir node_global
mkdir node_cache
npm config set prefix ""
npm config set cache "node_cache"
```

设置`npm`全局目录的环境变量 (未生效)

```js
#set for nodejs
export NODE_HOME=/usr/local/node/node_global/
export PATH=$NODE_HOME/bin:$PATH
```

```js
#set for nodejs
export NODE_HOME=/usr/local/node/node_global/lib/node_modules
export PATH=$NODE_HOME/bin:$PATH

```

- 设置淘宝源

方案一：临时解决方案（每次安装替换成淘宝镜像源）

```js
NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node nvm install stable
```

方案二：`linux`环境下设置默认镜像源
`nvm`的默认配置文件安装在`~/.nvm`目录下，找到`nvm.sh`修改`NVM_NODEJS_ORG_MIRROR`的默认参数即可。

方案三：`linux`下设置永久环境变量
在`/root` -- `~/.bashrc`文件中添加

```js
export NVM_NODEJS_ORG_MIRROR=https://npm.taobao.org/mirrors/node
```
