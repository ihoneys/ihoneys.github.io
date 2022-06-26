---
title: Screen
date: 2020-11-26
 
categories:
 - Linux
tags:
 - Linux
 - screen

---
## 在Linux系统中多窗口运行的模块 -- screen

- 安装

`Centos - 8`

```s
yum install screen
```

## 使用

1. 新建一个窗口

```s
screen -S [window_name]
```

创建完成一个窗口就会进入这个窗口了

2. 重新进入一个窗口

```s
screen -r [window_name] \ id
```

3. 如果不记得你之前创建的窗口名字，可以

```s
screen -ls
```

在出现的列表里找到你要用的窗口，输入前面的`id`就可以进入窗口。

4. 结束当前`session`并回到`yourname`这个`session`

```js
screen -d -r yourname
```

## 退出

- 关闭并退出

```s
exit
```

- 保存并退出

<kbd>ctrl</kbd> + <kbd>a</kbd> + <kbd>d</kbd>
