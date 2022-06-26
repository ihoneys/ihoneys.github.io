---
title: Node
date: 2019-05-28
 
categories:
 - 工具
tags:
 - node

---

## 安装node.js

- 下载`node`软件

[中文官网](http://nodejs.cn/)
[英文官网](https://nodejs.org/en/)

- 安装

## node升级版本

1. `windows`使用 `nvm-window` 管理`node`版本

2. `linux`中用`nvm`管理`node`版本

## 卸载node

1. 在设置--应用--应用和功能卸载软件。

2. 重新启动（或者您可能会从任务管理器中杀死所有与节点相关的进程）。

3. 寻找这些文件夹并删除它们（及其内容）（如果还有）。根据您安装的版本，`UAC`设置和`CPU`架构，这些可能或可能不存在：

```js
C:\Program Files (x86)\Nodejs
C:\Program Files\Nodejs
C:\Users\{Username}\AppData\Roaming\npm（或%appdata%\npm）
C:\Users\{Username}\AppData\Roaming\npm-cache（或%appdata%\npm-cache）
```

4. 检查您的`%PATH%`环境变量以确保没有引用`Nodejs`或`npm`存在。

5. 如果仍然没有卸载，请`where node`在命令提示符下键入，您将看到它所在的位置 - 删除（也可能是父目录）。

6.重新启动计算机。
