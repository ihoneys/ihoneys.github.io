---
title: Debian
date: 2020-05-16
 
categories:
 - 工具
tags:
 - Debian
publish: true
# 置顶
sticky: 9
# 打赏
showSponsor: true
---

## 更新和升级软件包

```js
sudo apt-get update

sudo apt-get upgrade
```

`update` 是更新软件列表，`upgrade` 是更新软件。

## 查看开发的端口

```js
netstat -ntlp
```

## 安装软件包 rpm

-RPM 包默认安装路径
| 安装路径        | 含义                       |
| :-------------- | :------------------------- |
| /etc/           | 配置文件安装目录           |
| /usr/bin/       | 可执行的命令安装目录       |
| /usr/lib/       | 程序所使用的函数库保存位置 |
| /usr/share/doc/ | 基本的软件使用手册保存位置 |
| /usr/share/man/ | 帮助文件保存位置           |

```js
// 在包所在位置执行rpm命令
[root@localhost ~]# rpm -ivh 包全名
// -i：安装（install）;
// -v：显示更详细的信息（verbose）;
// -h：打印 #，显示安装进度（hash）;
```

:::warning

- 注意一定是包全名。涉及到包全名的命令，一定要注意路径，可能软件包在光盘中，因此需提前做好设备的挂载工作。
- 如果报错 `rpm: Header V4 RSA/SHA1 Signature, key ID f27eab47: NOKEY` 在命令中加入  `--force --nodeps`
:::

## 更改软件安装源

备份一下软件源

```js
sudo cp /etc/apt/sources.list /etc/apt/sources.list_bak
```

将`/etc/apt/sources.list` 文件中 `Debian` 默认的源地址 <http://deb.debian.org/> 替换为 <http://mirrors.ustc.edu.cn> 即可。

当然也可以直接编辑`vi /etc/apt/sources.list` 文件(需要使用 `sudo`)

加入如下内容即可

```js
deb http://mirrors.ustc.edu.cn/debian stable main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian stable main contrib non-free
deb http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian stable-updates main contrib non-free
deb http://mirrors.ustc.edu.cn/debian stable-proposed-updates main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian stable-proposed-updates main contrib non-free
```

中科大软件

```js
cat > /etc/apt/sources.list << EOF
deb http://mirrors.ustc.edu.cn/debian/ buster main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian/ buster main contrib non-free
deb http://mirrors.ustc.edu.cn/debian/ buster-updates main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian/ buster-updates main contrib non-free
deb http://mirrors.ustc.edu.cn/debian/ buster-backports main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian/ buster-backports main contrib non-free
deb http://mirrors.ustc.edu.cn/debian-security buster/updates main contrib non-free
# deb-src http://mirrors.ustc.edu.cn/debian-security buster/updates main contrib non-free
EOF

```

网易

```js
cat > /etc/apt/sources.list << EOF
deb http://mirrors.163.com/debian/ buster main contrib non-free
# deb-src http://mirrors.163.com/debian/ buster main contrib non-free
deb http://mirrors.163.com/debian/ buster-updates main contrib non-free
# deb-src http://mirrors.163.com/debian/ buster-updates main contrib non-free
deb http://mirrors.163.com/debian/ buster-backports main contrib non-free
# deb-src http://mirrors.163.com/debian/ buster-backports main contrib non-free
deb http://mirrors.163.com/debian-security buster/updates main contrib non-free
# deb-src http://mirrors.163.com/debian-security buster/updates main contrib non-free
EOF
```

敲击i键进入插入模式，组合键<kbd>ctrl</kbd> + <kbd>shift</kbd> + <kbd>v</kbd>将复制内容粘贴至源文件中，敲击两次`esc`键进入命令模式，输入引号内键`：wq!`保存并退出
更改完 `sources.list` 文件后请运行 `sudo apt-get update` 更新索引以生效。

## 报错

- `sudo`不能使用的错误

```js
bash: sudo: command not found
```

- 解决办法

```js
apt-get update

apt-get install sudo
```

- 连接或下载`github`仓库错误

```js
Failed to connect to raw.githubusercontent.com port 443: Connection refused.
```

- 解决方法
在 `https://www.ipaddress.com/` 查询 `raw.githubusercontent.com` 的真实 `IP`。

修改 `hosts`

```js
sudo vim /etc/hosts
```

添加如下内容：

```js
199.232.28.133 raw.githubusercontent.com
```

重新执行安装命令即可

## 查看系统版本

系统版本

```js
lsb_release -a
```

系统内核信息

```js
uname -a
```

系统版本信息

```js
sudo cat /proc/version
```

当前操作系统发行版信息

```js
cat /etc/os-release
```

## 查看系统服务

- 查看服务或包的位置

```js
whereis redis-cli
```

- 查看

```js
service --status-all
或
service --status-all | more
或
service --status-all | less
```

其中`[ + ]`表示的是现在正在运行的服务项，`[ - ]`表示当前服务没有运行。

- 关闭服务

```js
service redis-server stop
//redis-server是服务名
```

- 启动服务

```js
service redis-server start
```

## 查看端口占用和解除占用

### netstat查看(推荐)

- 查看`8081`端口是否被占用

```s
netstat -anp | grep 8081
```

- 查看占用`8081`端口的进程

```s
fuser -v -n tcp 8081
```

- 杀死占用`8081`端口的进程

```s
kill -s 9 1154(自己的进程号).
```

`9`参数表示告诉操作系统直接杀死进程, 无论进程的状态是否可杀死;

### 使用`lsof`

- `lsof`查看端口的占用情况

```s
lsof -i
```

注意: 若提示无此命令, 则需要安装, 命令`yum install -y lsof`

- 查看某一端口的占用情况

```s
lsof -i:8081
```

- 杀死某个端口的所有进程

```s
killall sshd[就是端口的COMMAND]
```

## 安装 Wget

要检查系统上是否安装了`Wget`软件包，请打开控制台，键入`wget`，然后按`Enter`。如果已安装`wget`，则系统将打印 `wget: missing URL` ，否则，将打印 `wget command not found`

- 在`CentOS`和`Fedora`上安装`Wget`

```js
sudo yum install wget
```

- 在`Ubuntu`和`Debian`上安装`Wget`

```js
sudo apt install wget
```

- `wget`实用程序表达式采用以下形式：

```js
wget [options] [url]
```

## 安装curl

```js
sudo apt install curl
```

## 安装nvm

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

- 给某个`node`版本设置别名

```js
nvm alias awesome-version 4.2.2
```

- 不同版本的node环境中，安装的包是不同的，目的是为了防止兼容问题，但是可以用以下命令导入已安装的包

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

## 安装 git

```js
sudo apt-get install git
```

如果提示错误:

```a
E: Failed to eftch http://archives.....
....
E: Unable to fetch http.....
```

就要先更新安装依赖包地址

```js
sudo apt-get update
```

再次执行安装命令，就可以了。

## 安装 pm2

```js
npm i -g pm2
```

[使用](/docs/Tools/npm.md)

- 结束线程

```js
pm2 delete my-nuxt
```

## 安装redis (内存数据库)

```js
sudo apt update

sudo apt install redis-server
```

| 命令               | 含义                |
| :----------------- | :------------------ |
| `redis-server`     | `redis`服务器       |
| `redis-cli`        | `redis`命令行客户端 |
| `redis-benchmark`  | `redis`性能测试工具 |
| `redis-check-aof`  | `aof`文件修复工具   |
| `redis-check-dump` | `rdb`文件检查工具   |

启动 `Redis`

```js
redis-server
```

带配置文件启动

```js
redis-server ./redis.conf
//注意配置文件路径
```

查看 `redis` 是否启动？

```js
redis-cli
```

以上命令将打开以下终端：

```js
redis 127.0.0.1:6379>
```

`127.0.0.1` 是本机 `IP` ，`6379` 是 `redis` 服务端口。现在我们输入 `PING` 命令。

```js
redis 127.0.0.1:6379> ping
PONG
```

以上说明我们已经成功安装了`redis`.

停止 `redis` 命令

```js
redis-cli shutdown
```

## 安装svn

安装命令

```js
apt-get install subversion subversion-tools
```

验证是否安装成功

```js
svnserve --version
```

\* 出现版本号，表示安装成功

创建仓库存放路径

```js
mkdir /svn
```

创建项目（可创建多个）

```js
svnadmin create /svn/project
```
