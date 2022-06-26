---
title: Windows 子系统 WSL
date: 2019-06-16
 
categories:
 - 工具
tags:
 - win子系统
 - WSL

---
## WSL

`windows` 最新版本可以在`win`系统下安装 `linux` 子系统,操作十分简单；

1. 打开`控制面板`，`程序和功能`=>`启用或关闭windows功能`=>选中`适用于Linux的windows子系统`；点击确定（重启后生效）。

![control](https://s1.ax1x.com/2020/09/28/0E1q7q.png)
![控制面板](https://s1.ax1x.com/2020/09/28/0E1XNV.png)
![windows服务](https://s1.ax1x.com/2020/09/28/0E1OA0.png)
![选中子系统](https://s1.ax1x.com/2020/09/28/0E1bBn.png)

2. 然后打开`windows`商店`Microsoft Store`在搜索你想安装的`Linux`系统。点击获取或安装即可，安装完可以点击图标即可进入你安装的`Linux`系统。

![windows商店](https://s1.ax1x.com/2020/09/28/0E1Hns.png)

到这里就已经安装完成了，是不是特别简单~

- 修改`root`密码

如果打开`wsl` 进入的是`root`用户可以直接修改

```js
root@GuangJu:~# passwd
```
