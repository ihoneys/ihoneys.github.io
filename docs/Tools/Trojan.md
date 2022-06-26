---
title: Trojan
date: 2019-06-08
 
categories:
 - 工具
tags:
 - Trojan

---

::: tip Trojan是什么
`Trojan`模仿了互联网上最常见的`HTTPS`协议，以诱骗GFW封锁认为它就是`HTTPS`，从而不被识别。`Trojan`处理来自外界的`HTTPS`请求，如果是合法的，那么为该请求提供服务，否则将该流量转交给`web`服务器`Nginx`，由`Nginx`为其提供服务。基于这个工作过程可以知道，`Trojan`的一切表现均与`Nginx`一致，不会引入额外特征，从而达到无法识别的效果。

- `Trojan`与`v2ray` `ws`协议的区别：
`v2ray`是`nginx`侦听`443`，数据→`nginx`>`v2ray`；`Trojan`是自己侦听`443`，都是伪装成网站。
:::

## 系统要求及脚本介绍

1、系统支持`centos7+/debian9+/ubuntu16+`，

2、域名需要解析到`VPS`并生效，

3、脚本自动续签`https`证书，

4、自动配置伪装网站，位于`/usr/share/nginx/html/`目录下，可自行替换其中内容，

5、请不要在任何生产环境使用一键脚本，此条适用于本站所有脚本，专门用来科学上网的`VPS`可以随意使用，

6、`trojan`不能用`CDN`，不要开启`CDN`，

7、如果你在用谷歌云、阿里云等产品的时候，需要在控制台开放`80`、`443`端口。

## 准备工作

1. 1台`VPS`，我用的`Vultr`，其他如搬瓦工、谷歌云等

2. 1个域名（推荐 GoDaddy）

3. 解析域名到你的 `VPS`的 `IP`上

4. 服务端一键安装 `Trojan` & `BBR`。（加速用 `BBRPlus`）

5. 下载`Windows`客户端`V2rayN`等，并设置浏览器`SwitchyOmega`

## 创建VPS服务器

- 在`VPS`的系统要求：系统>=`centos 7`，如果用`Centos 8`可以不用安装BBR加速，直接使用即可(所以最好用`Centos 8`)。

1. 选择云服务器(这里用的是Vultr的服务器)

<img src="https://s1.ax1x.com/2020/04/20/J1Kw4I.png" alt="Trojan01">

2. 指定服务器地址和系统类型、带宽等

<img src="https://s1.ax1x.com/2020/04/20/J1KdUA.png" alt="Trojan02">
<img src="https://s1.ax1x.com/2020/04/20/J1KYuD.png" alt="Trojan03">

3. 输入名称

<img src="https://s1.ax1x.com/2020/04/20/J1KGjO.png" alt="Trojan04">

4. 稍等一会，等服务器分配完成，然后可以ping一下IP地址，看速度是不是可以，如果总是请求超时，建议重新申请一个再试，直到速度满意为止，可以用cmd ping，也可以用[站长之家](http://ping.chinaz.com/)。

<img src="https://s1.ax1x.com/2020/04/20/J1K8gK.png" alt="Trojan05">
<img src="https://s1.ax1x.com/2020/04/20/J1KD8P.png" alt="Trojan06">
<img src="https://s1.ax1x.com/2020/04/20/J1Ksv8.png" alt="Trojan07">
<img src="https://s1.ax1x.com/2020/04/20/J1KcDg.png" alt="Trojan08">

## 申请域名并解析到VPS

1. 注册域名 `GoDaddy`

2. 将域名解析到云服务器（VPS）上 用`Cloudflare`解析

   - 注册`Cloudflare`

   - 登录`Cloudflare` 在页面中点击`Add site`

3. 添加站点以后，点击`DNS`,并按步骤添加一条记录，最好添加二级域名，这样可以在一个服务器添加多个上网工具···

点击DNS按钮，

<img src="https://s1.ax1x.com/2020/04/20/J1KgbQ.png" alt="Trojan09">

4. 添加完成以后，稍等一会，要判断是否解析完成， `ping`一下域名，看是否通了，如果你添加了二级域名，不要忘了要写完整。

<img src="https://s1.ax1x.com/2020/04/20/J1KREj.png" alt="Trojan10">

## 安装脚本 trojan 和 bbr加速

1. 通过`MobaXterm`（或者`XShell`等其他远程连接工具）连接到`VPS`，填写 `IP`地址，主机名默认 `root`，端口默认22，

<img src="https://s1.ax1x.com/2020/04/20/J1KWUs.png" alt="Trojan11">

确定以后会提示你输入密码(`linux`系统输入密码，是不显示内容的)，密码正确会进入这个页面：

<img src="https://s1.ax1x.com/2020/04/20/J1Kf5n.png" alt="Trojan12">

2. 输入安装`Trojan`命令

```js
curl -O https://raw.githubusercontent.com/atrandys/trojan/master/trojan_centos7.sh && chmod +x trojan_centos7.sh && ./trojan_centos7.sh
```

选择1 安装`trojan`，(一般安装一次就能成功)

<img src="https://s1.ax1x.com/2020/04/20/J1K4Cq.png" alt="Trojan13">

输入域名 tj.xxx.xxx.xxx.xxx.cloud，

<img src="https://s1.ax1x.com/2020/04/20/J1KI2V.png" alt="Trojan14">

如果提示证书安装不成功，根据提示再输入一次`Trojan`的安装命令，选择4，修复证书，

<img src="https://s1.ax1x.com/2020/04/20/J1KHrF.png" alt="Trojan15">

会提示证书安装成功，

<img src="https://s1.ax1x.com/2020/04/20/J1KLVJ.png" alt="Trojan16">

最后输入安装`Trojan`命令，正常安装`trojan`，最终成功以后，会提示一个下载地址，用这个地址下载`Trojan-cli`程序，一会要用，这个地址最好保存下来，

<img src="https://s1.ax1x.com/2020/04/20/J1KOa9.png" alt="Trojan17">

用最后给出的网址下载`Trojan`程序，解压以后，用记事本或其他程序打开`config.json`文件，

<img src="https://s1.ax1x.com/2020/04/20/J1MVPI.png" alt="Trojan24">

在这个文件夹下，双击`start.bat`，开启`Trojan`服务。

3. 输入安装`BBR`命令回车(如果是`Centos8`可以不用安装，直接选择启动即可使用，`centos8`已经内置加速了)

```js
wget --no-check-certificate https://raw.githubusercontent.com/cx9208/Linux-NetSpeed/master/tcp.sh && chmod +x tcp.sh && ./tcp.sh
```

<img src="https://s1.ax1x.com/2020/04/20/J1KvP1.png" alt="Trojan18">

安装完成，要重启`vps`，但是不建议用`MobaXterm`直接重启，可以在`Vultr`官网手动重启，因为客户端有时不能成功重启服务器，

<img src="https://s1.ax1x.com/2020/04/20/J1Kz26.png" alt="Trojan19">
<img src="https://s1.ax1x.com/2020/04/20/J1Kx8x.png" alt="Trojan20">

重启完成以后，再用`MobaXterm`连接服务器。

<img src="https://s1.ax1x.com/2020/04/20/J1MSxK.png" alt="Trojan21">

我们还需要启动`BBR`加速工具，输入以下命令：

```js
wget --no-check-certificate https://raw.githubusercontent.com/cx9208/Linux-NetSpeed/master/tcp.sh && chmod +x tcp.sh && ./tcp.sh
```

这次输入4~8选项, 目的是启动`BBR`加速，看你安装的哪个版本的`BBR`，就启动哪个，提示启动成功即可，

<img src="https://s1.ax1x.com/2020/04/20/J1MeRP.png" alt="Trojan23">

## 下载客户端

### 有两种使用方式

1. 下载谷歌插件：`SwitchyOmega`

安装好插件以后，在`SwitchyOmega`选项中配置，先配置`proxy`，

<img src="https://s1.ax1x.com/2020/04/20/J1MuM8.png" alt="Trojan25">

这里的地址和端口和`config.json`中的保持一致，

<img src="https://s1.ax1x.com/2020/04/20/J1MMqg.png" alt="Trojan26">

然后配置`auto switch`，将原有的规则删除，填写如下：

规则任选一个：

```js
规则1：https://raw.githubusercontent.com/gfwlist/gfwlist/master/gfwlist.txt
规则2：https://raw.githubusercontent.com/atrandys/proV/master/fgfwlist.txt
```

<img src="https://s1.ax1x.com/2020/04/20/J1Mmxf.png" alt="Trojan27">
<img src="https://s1.ax1x.com/2020/04/20/J1MGin.png" alt="Trojan28">

可以根据插件的代理方式选择连接国内还是国外。

<img src="https://s1.ax1x.com/2020/04/20/J1M1aj.png" alt="Trojan29">

2. 用 `V2ray`客户端

打开客户端，选择添加`Socks`服务器 设置名称、地址和端口(默认都是`127.0.0.1` 和`1080`)。

<img src="https://s1.ax1x.com/2020/04/20/J1MYR0.png" alt="Trojan&V2rayN">

如果不再使用`Trojan`服务，可以双击`stop.bat`(在t`rojan-cli`文件夹中)，关闭`Trojan`服务。

<img src="https://s1.ax1x.com/2020/04/22/JYkHkn.png" alt="Trojan40">

第一种方式只能代理浏览器科学上网(也可以使用浏览器自带的代理方式)，第二种可以全局代理(也可以用电脑自带的代理方式`ssr`就是用这种)

好了，这就是`trojan`的全部教程，本文中的云服务器网站和域名网站都可以用你常用的，不用照搬！
