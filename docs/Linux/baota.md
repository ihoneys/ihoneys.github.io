---
title: CentOS/Ubuntu/Debian安装宝塔面板
date: 2019-05-13
 
categories:
 - 工具
tags:
 - 宝塔面板

---
## 一、宝塔面板的系统要求

以下是宝塔官网对于 `Linux VPS` 的系统要求：

1. 操作系统要求：全新系统 (支持 `CentOS`、`Ubuntu`、`Debian`、`Fedora`、`Deepin`)，确保是干净的操作系统，没有安装过其它环境带的 `Apache/Nginx/php/MySQL`。另外，宝塔 `Linux6.0` 版本是基于 `CentOS 7` 开发的，强烈建议使用 `centos7.x` 系统

2. 内存要求：内存要求最低 `512MB`，推荐 `768MB` 以上，纯面板约占系统 `60MB` 内存

## 二、一键安装宝塔面板教程

根据你的 `VPS` 系统版本的不同，可以使用下面的一键脚本安装宝塔面板。

`Debian`安装命令：

```js
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && bash install.sh
```

`Centos`安装命令：

```js
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && sh install.sh
```

试验性`Centos/Ubuntu/Debian`安装命令 独立运行环境（`py3.7`） 可能存在少量兼容性问题 不断优化中

```js
curl -sSO http://download.bt.cn/install/install_panel.sh && bash install_panel.sh
```

`Ubuntu/Deepin`安装命令：

```js
wget -O install.sh http://download.bt.cn/install/install-ubuntu_6.0.sh && sudo bash install.sh
```

`Fedora`安装命令:

```js
wget -O install.sh http://download.bt.cn/install/install_6.0.sh && bash install.sh
```

之后就是安装成功的提示了：

根据提供的登录链接、用户名和密码，就可以看到熟悉的宝塔面板了，这里可以非常方便的操作你的 `Linux VPS`，包括安装插件、上传文件、系统垃圾清理等：

<img src="https://s1.ax1x.com/2020/04/22/JYF7RK.png" alt="宝塔">
