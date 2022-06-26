---
title: Centos8
date: 2019-05-16
 
categories:
 - 工具
tags:
 - Centos8

---
centos

## 防火墙

- 查看默认防火墙状态

```js
firewall -cmd --state
```

- 检查防火墙的状态

```js
systemctl status firewalld
// or
systemctl status firewalld.service
// or
systemctl list-unit-files|grep firewalld.service
```

输出结果

```js
[root@localhost ~]# systemctl list-unit-files|grep firewalld.service
firewalld.service                             disabled
// 或者：
[root@localhost ~]# systemctl status firewalld.service
● firewalld.service - firewalld - dynamic firewall daemon
Loaded: loaded (/usr/lib/systemd/system/firewalld.service; disabled; vendor preset: enabled)
Active: inactive (dead)                 --表示防火墙已经关闭
Docs: man:firewalld(1)
```

`dead` -- 关闭  `runing` -- 开启

- 开启防火墙

```js
systemctl start firewalld
// or
systemctl start firewalld.service
```

- 检查是否已安装防火墙

```js
yum install firewalld firewall-config
```

- 设置开机自启防火墙

```js
systemctl enable firewalld.service
```

- 查看是否开机自启防火墙

```js
systemctl is-enabled firewalld.service;echo $?
```

输出结果

```js
enabled             --自启
disabled            --不自启
```

- 禁止开机自启防火墙

```js
systemctl disable firewalld.service
```

- 开放某个端口

```js
firewall-cmd --zone=public --add-port=8888/tcp --permanent
```

输出`success`表示成功!

命令含义：

| 参数               | 含义                            |
| :----------------- | :------------------------------ |
| `–zone`            | 作用域                          |
| `–add-port=80/tcp` | 添加端口，格式为：端口/通讯协议 |
| `–permanent`       | 永久生效，没有此参数重启后失效  |

- 查看已经开放的端口

```js
firewall-cmd --list-port
```

- 重新加载防火墙

```js
firewall-cmd --reload
```

- 重启防火墙

```js
systemctl restart firewalld.service
```

- 查看端口是否开放成功

```js
firewall-cmd --zone=public --query-port=27017/tcp
// 查看端口号是否开放成功，输出yes开放成功，no则失败
```

- 关闭防火墙

```js
systemctl stop firewalld
// or
systemctl stop firewalld.service
```

- 查看已启动的服务列表

```js
systemctl list-unit-files|grep enabled
```

- 屏蔽FirewallD服务

```js
[root@localhost ~]#systemctl mask firewalld
还可以通过创建一个firewall.service到/dev/null的符号连接来屏蔽防火墙服务。
```

- 反屏蔽FirewallD服务

```js
[root@localhost ~]#systemctl unmask firewalld
这是反屏蔽FirewallD服务，它会移除屏蔽FirewallD服务时创建的符号链接，故能重新启用服务。
```

## 安装 Visual Studio Code

在 `CentOS 8` 系统安装`Visual Studio Code` 最简单和最推荐的方式就是启用 `VS Code` 源，并且通过命令行安装 `VS Code` 软件包。

1. 导入`Microsoft GPG key`：

```js
sudo rpm --import https://packages.microsoft.com/keys/microsoft.asc
```

2. 打开你的文本编辑器，并且创建源仓库文件，或输入以下命令：

```js
sudo nano /etc/yum.repos.d/vscode.repo
```

源仓库文件里就是以下内容，如果没有将下面的内容粘贴进去，并且启用 `VS Code` 源：

```js
[code]
name=Visual Studio Code
baseurl=https://packages.microsoft.com/yumrepos/vscode
enabled=1
gpgcheck=1
gpgkey=https://packages.microsoft.com/keys/microsoft.asc
```

保存文件，并且关闭你的文本编辑器

```js
sudo dnf install code
```

`Visual Studio Code` 已经安装在你的 `CentOS` 桌面版本上，你可以开始使用它了
3. 升级 `Visual Studio Code`
当一个新版本发布时，你可以通过你的桌面软件升级工具或者通过在终端运行下面的命令，来升级 `Visual Studio Code`：

```js
sudo dnf update
```

## 安装 Chrome

第一种

1. 下载安装包
打开您的终端， `wget` 下载的最新`Chrome` 64位.`rpm`程序包

```js
wget https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
```

2. 安装软件
以`root`用户或具有`sudo`权限的用户身份运行以下命令

```js
sudo dnf localinstall google-chrome-stable_current_x86_64.rpm
```

第二种

```js
sudo yum install https://dl.google.com/linux/direct/google-chrome-stable_current_x86_64.rpm
```

现在`CentOS`系统上已安装`Chrome`浏览器，您可以通过在命令行中输入`google-chrome` &或单击`Chrome`图标（`Activities -> Chrome Browser`）来启动它：

- 更新`Chrome`浏览器
在安装程序包期间，正式的`Google`存储库将添加到您的系统中。使用以下 `cat` 命令来验证文件是否存在：

```s
cat /etc/yum.repos.d/google-chrome.repo
```

```s
[google-chrome]
name=google-chrome
baseurl=http://dl.google.com/linux/chrome/rpm/stable/x86_64
enabled=1
gpgcheck=1
gpgkey=https://dl.google.com/linux/linux_signing_key.pub
```

发布新版本时，您可以使用`dnf`或通过桌面标准软件更新工具进行更新。

## 安装 MongoDB 4.4

1. 配置程序包管理系统(`yum`)

```js
vi /etc/yum.repos.d/mongodb-org-4.4.repo
```

将以下内容粘贴进去

```js
[mongodb-org-4.4]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/redhat/$releasever/mongodb-org/4.4/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://www.mongodb.org/static/pgp/server-4.4.asc
```

```js
name         # 名称
baseurl      # 获得下载的路径
gpkcheck=1   # 表示对从这个源下载的rpm包进行校验；
enable=1     # 表示启用这个源。
gpgkey       # gpg验证
```

<kbd>ESC</kbd> 输入 `:wq` 保存并退出

2. 用`yum`安装`mongoDB`最新稳定版

```js
sudo yum install -y mongodb-org
```

:::details 另外
另外，要安装特定版本的`MongoDB`，请分别指定每个组件包，并将版本号附加到包名中，如以下示例所示：

```js
sudo yum install -y mongodb-org-4.4.2 mongodb-org-server-4.4.2 mongodb-org-shell-4.4.2 mongodb-org-mongos-4.4.2 mongodb-org-tools-4.4.2
```

您可以指定任何可用的`MongoDB`版本。但是`yum` ，当有新版本可用时，将升级软件包。为防止意外升级，请固定包装。要固定包，`exclude`请在`/etc/yum.conf`文件中添加以下指令：

```js
exclude=mongodb-org,mongodb-org-server,mongodb-org-shell,mongodb-org-mongos,mongodb-org-tools
```

:::

 \* 下载过程可能有点慢，出现`Complete！`才是下载完成了

3. 验证安装结果

```js
rpm -qa | grep mongodb
```

输出结果如下:

```js
[root@alcloud ~]# rpm -qa | grep mongodb
mongodb-org-tools-4.4.2-1.el7.x86_64
mongodb-org-server-4.4.2-1.el7.x86_64
mongodb-org-database-tools-extra-4.4.2-1.el7.x86_64
mongodb-org-shell-4.4.2-1.el7.x86_64
mongodb-org-4.4.2-1.el7.x86_64
mongodb-database-tools-100.2.1-1.x86_64
mongodb-org-mongos-4.4.2-1.el7.x86_64
[root@alcloud ~]#
```

查看`mongoDB`安装和位置

```js
rpm -ql mongodb-org-server
```

输出结果如下:

```js
[root@alcloud ~]# rpm -ql mongodb-org-server
/etc/mongod.conf
/lib/systemd/system/mongod.service
/usr/bin/mongod
/usr/share/doc/mongodb-org-server-4.4.2
/usr/share/doc/mongodb-org-server-4.4.2/LICENSE-Community.txt
/usr/share/doc/mongodb-org-server-4.4.2/MPL-2
/usr/share/doc/mongodb-org-server-4.4.2/README
/usr/share/doc/mongodb-org-server-4.4.2/THIRD-PARTY-NOTICES
/usr/share/man/man1/mongod.1
/var/lib/mongo
/var/log/mongodb
/var/log/mongodb/mongod.log
/var/run/mongodb
[root@alcloud ~]#
```

## 启动 MongoDB 服务

```js
systemctl start mongod.service
```

验证服务是否开启

```js
mongo
```

能进入`mongo` 就表示安装成功！

## 安装yarn

1. 在 CentOS, Fedora 和 RHEL 操作系统上，通过 RPM 包仓库来安装 Yarn。

```js
sudo wget https://dl.yarnpkg.com/rpm/yarn.repo -O /etc/yum.repos.d/yarn.repo
```

2. 安装运行

```js
sudo yum install yarn
```
