---
title: Typecho + Centos7 + 宝塔
date: 2019-06-13
 
categories:
 - 工具
tags:
 - Typecho
 - Centos7
 - 宝塔

---

:::tip 建站准备
服务器：腾讯云服务器

域名：阿里云的域名

远程连接工具：用于连接`Linux`服务器 或者 在腾讯云服务器管理处点击登录 比如 `Xshell MX`等
:::

## 一、安装宝塔面板

```js
yum install -y wget && wget -O install.sh http://download.bt.cn/install/install_6.0.sh && bash install.sh
```

中途会停顿一下让选择`web`目录的位置，一般默认即可

<img src="https://s1.ax1x.com/2020/04/22/JYvW0P.png" alt="typecho00">

安装完成后，命令行会显示面板的登录地址、账号以及密码，一定将这些信息保存下来

## 二、安装网站环境

登录后台页面，使用刚刚记录的后台地址登录，（如果你是使用的阿里云或者腾讯云的话，可能会登录不上，这时候你需要在服务器运营商的后台开启安全组`8888`端口，阿里云`ECS`开放安全组端口) 以腾讯云为列：

<img src="https://s2.ax1x.com/2020/02/27/3d2FuF.png" alt="typecho01">

 注：登录宝塔最好根据提示更改用户名，密码以及端口

登录后，就会看到提示一键安装环境的界面，一般会选择左侧的LNMP架构，选择编译安装

<img src="https://s1.ax1x.com/2020/04/22/JtFvAs.png" alt="typecho02">
<img src="https://s2.ax1x.com/2020/02/27/3dg71f.png" alt="typecho03">

关于不同配置的服务器环境的设置，因为一般常用的有512M内存的，还有就是1G内存的，这两个的环境选择是不一样的

- 如果是`512`M内存，那么使用默认的配置即可，`Mysql 5.5` 和 `PHP 5.4`
- 如果是`1G`内存，推荐使用`wordpress`官方给的设置，`Mysql 5.6` 和 `PHP 7.2`

等待安装完成就可以了，一般持续半小时到1个小时，根据服务器的性能决定

## 三、服务器新建站点

需要输入自己的网站域名，把带`www`和不带`www`的域名全部填写上，比如`www.xxxx.com`和`*.xxxx.com`,该步骤就是绑定域名，第一行不能放泛解析域名`*.xxx.com`

<img src="https://s2.ax1x.com/2020/02/27/3dgHc8.png" alt="typecho05">
<img src="https://s1.ax1x.com/2020/04/22/JtkAHJ.png" alt="typecho04">

设置完毕之后我们点击提交，网站即创建完毕(这里指服务器为网站准备出空间，类似开一个虚拟主机，只不过我们对此有控制权)

## 四、域名解析到站点

其实就是添加域名解析外网的ip地址，这里我演示下腾讯云的域名解析

<img src="https://s2.ax1x.com/2020/02/27/3dgT9P.png" alt="typecho06">

点击解析后将你的服务器IP地址添加上就可以了

<img src="https://s2.ax1x.com/2020/02/27/3dgOBQ.png" alt="typecho07">

完成以后可以ping一下，看是不是通了

<img src="https://s2.ax1x.com/2020/02/27/3dgX7j.png" alt="typecho08">

## 五、下载Typecho

从[typecho官网](http://typecho.org/download)下载 安装包

<img src="https://s2.ax1x.com/2020/02/27/3dgvAs.png" alt="typecho09">

下载完的压缩包直接在文件中上传到自己的网站下进行解压，

<img src="https://s1.ax1x.com/2020/04/22/JtkJUA.png" alt="typecho10">

<img src="https://s2.ax1x.com/2020/02/27/3dgzhq.png" alt="typecho11">

解压完把压缩包删掉，把解压出来的文件展开把里面内容剪切至外部，然后删除文件

<img src="https://s2.ax1x.com/2020/02/27/3d293V.png" alt="typecho12">

接下来你试着用域名访问一下网站这时会弹出一个4步流程特别注意的地方是数据库名和密码必须和你宝塔里的保持一致，（用户名可以自己设置，密码如果你不填系统会自动生成一个密码）最后直接提交后显示安装完成下面是你的用户名和密码，一定要记住你的用户名和密码这样你才能登陆管理员页面对你的网站进行增删改查和一些操作、管理、控制和美化。

<img src="https://s2.ax1x.com/2020/02/27/3d2PjU.png" alt="typecho13">
