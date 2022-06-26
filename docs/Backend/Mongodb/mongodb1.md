---
title: MongoDB 安装(Centos 7)
date: 2020-11-08
 
categories:
 - 后端技术
tags:
 - MongoDB

---
## MongoDB 使用(Centos 7)

### 安装 MongoDB 4.4

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

### 启动 MongoDB

1. 启动 `MongoDB` 服务

```js
sudo service mongod start  //开启 MongoDB
//或者
systemctl start mongod.service  // 开启 MongoDB
sudo chkconfig mongod on  // 加入开机启动
sudo service mongod restart // 重启 MongoDB
```

2. 关闭 `MongoDB`

```js
sudo service mongod stop
```

3. 查看端口是否开启

`MongoDB` 默认端口是 `27017`，使用命令查看是否开启端口

```js
netstat -natp | grep 27017
```

4. 检查数据库进程是否存在

```js
ps -aux | grep mongod
```

5. 验证服务是否开启

```js
mongo
db.version()
```

6. 卸载`MongoDB`

```js
sudo yum erase $(rpm -qa | grep mongodb-org)    // 卸载 MongoDB
sudo rm -r /var/log/mongodb  // 删除日志文件
sudo rm -r /var/lib/mongo    // 删除数据文件
```

### 配置远程连接 MongoDB

1. 修改配置文件 `mongodb.conf`

```js
vi /etc/mongod.conf
```

:::warning
修改绑定 `ip`， 默认 `bindIp:127.0.0.1` 只允许本地连接，所以修改为 `bindIp:0.0.0.0`, 让数据库可以被任何位置访问,退出保存。

```js
# network interfaces
net:
  port: 27017
  bindIp: 0.0.0.0  # Enter 0.0.0.0,:: to bind to all IPv4 and IPv6 addresses or, alternatively, use the net.bindIpAll setting.
```

:::

2. 重启 `MongoDB` 服务

```js
sudo service mongod restart
```

3. 开放对外端口

在防火墙中放行指定的端口：

```js
systemctl status firewalld
// 查看防火墙状态
firewall-cmd --zone=public --add-port=27017/tcp --permanent
// mongodb默认端口号
firewall-cmd --reload
// 重新加载防火墙
firewall-cmd --zone=public --query-port=27017/tcp
// 查看端口号是否开放成功，输出yes开放成功，no则失败
```

4. 测试远程连接

```js
mongo 192.168.1.132:27017
db.version()
```

### 添加用户名和密码

1. 为 `admin` 数据库创建用户，设置用户名、密码和权限

```js
show dbs # 显示所有的数据库
use admin # 切换到 admin 数据库
db.createUser({user:'root',pwd:'999888',roles:['root']})
db.auth('root','999888')
# 其他常用命令
# db.changeUserPassword("test", "test")     # 修改密码
# db.updateUser("test",{roles:[ {role:"read",db:"testDB"} ]}) # 更新用户权限
# db.dropUser('test') # 删除用户
# db.createUser({user:'cjx',pwd:'999888',roles:['userAdminAnyDatabase']}) # 赋予用户所有数据库的userAdmin权限
```

2. 为其他数据库创建用户，设置用户名、密码和权限

```js
use test
db.createUser({ user:"cjx", pwd:"999888", roles:["readWrite", "dbAdmin"] })
db.auth('cjx','999888')
```

3. 修改 `mongodb.conf`(`MongoDB`主配置文件) 文件，启用身份验证

```js
vi /etc/mongod.conf
```

添加如下内容：

```js
security:
  authorization: enabled   # disable or enabled
```

4. 重启 `MongoDB` 服务

```js
sudo service mongod restart
```

5. 测试远程或本地连接使用账号密码登录打开`mongo`

```js
mongo 192.168.1.132:27017/database -u username -p password --port 27017
```

```js
-u username  //用户名
-p password  //密码
--port 27017 //端口
```

\* 注意这里的`ip`地址不用`http://`,直接加`ip`.

用户权限角色说明:

| 规则                   | 说明                                                                                 |
| :--------------------- | :----------------------------------------------------------------------------------- |
| `root`                 | 只在`admin`数据库中可用。超级账号，超级权限                                          |
| `Read`                 | 允许用户读取指定数据库                                                               |
| `readWrite`            | 允许用户读写指定数据库                                                               |
| `dbAdmin`              | 允许用户在指定数据库中执行管理函数，如索引创建、删除，查看统计或访问`system.profile` |
| `userAdmin`            | 允许用户向`system.users`集合写入，可以找指定数据库里创建、删除和管理用户             |
| `clusterAdmin`         | 只在`admin`数据库中可用，赋予用户所有分片和复制集相关函数的管理权限                  |
| `readAnyDatabase`      | 只在`admin`数据库中可用，赋予用户所有数据库的读权限                                  |
| `readWriteAnyDatabase` | 只在`admin`数据库中可用，赋予用户所有数据库的读写权限                                |
| `userAdminAnyDatabase` | 只在`admin`数据库中可用，赋予用户所有数据库的`userAdmin`权限                         |
| `dbAdminAnyDatabase`   | 只在`admin`数据库中可用，赋予用户所有数据库的`dbAdmin`权限                           |
