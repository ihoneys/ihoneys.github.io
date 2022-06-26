---
title: MongoDB 操作和方法
date: 2020-11-08
 
categories:
 - 后端技术
tags:
 - MongoDB

---
## MongoDB 方法

- 查看所有数据库

```js
show dbs
```

- 进入(使用|切换到)某个数据库

```js
use databasename
```

- 查看数据库中的所有集合

```js
show tables
```

- 查看数据库中的用户

```js
show users
```

- 新建`admin`数据库的用户

```js
db.createUser({user:"username",pwd:"mypwd", roles:["root"]})
db.auth('username','mypwd')
```

- 对账号授权

```js
db.auth(“账号”,”密码”)
```

- 修改密码

```js
db.changeUserPassword("test", "mynewpwd")
```

- 更新用户权限

```js
db.updateUser("test",{roles:[ {role:"read",db:"testDB"} ]})
```

- 赋予用户所有数据库的`userAdmin`权限

```js
db.createUser({user:'cjx',pwd:'999888',roles:['userAdminAnyDatabase']})
```

- 删除用户

```js
db.dropUser('test')
```

- 为其他数据库创建用户，设置用户名、密码和权限

```js
use test
db.createUser({ user:"xx", pwd:"8888", roles:["readWrite", "dbAdmin"] })
db.auth('xxx','8888')
```

## 数据库 方法

- 插入

```js
db.collection.insert({value:"value"})
```

- 查找

```js
db.collection.find({value:"value"})
```

- 删

```js
db.collection.remove({value:"value"})
```

- 改

```js
db.collection.update({value:"newvalue"})
```

## Mongod 权限设置

:::details

`mongodb` --用户名、密码、端口

### 关于权限的默认配置

在默认情况下，`mongod`是监听在`0.0.0.0`之上的，任何客户端都可以直接连接`27017`，且没有认证。这样做的好处是，用户可以即时上手，不用担心被一堆配置弄的心烦意乱。然而坏处也是显而易见，如果直接在公网服务器上如此搭建`MongoDB`，那么所有人都可以直接访问并修改数据库数据了。

默认情况下，`mongod`也是没有管理员账户的。因此除非你在`admin`数据库中使用`db.addUser()`命令添加了管理员帐号，且使用`–auth`参数启动`mongod`，否则在数据库中任何人都可以无需认证执行所有命令。包括`delete`和`shutdown`。

此外，`mongod`还会默认监听`28017`端口，同样是绑定所有`ip`。这是一个`mongod`自带的`web`监控界面。从中可以获取到数据库当前连接、`log`、状态、运行系统等信息。如果你开启了`–rest`参数，甚至可以直接通过`web`界面查询数据，执行`mongod`命令。

其实MongoDB本身有非常详细的安全配置准则，显然开发者也是想到了，然而他是将安全的任务推给用户去解决，这本身的策略就是偏向易用性的，对于安全性，则得靠边站了。

### MongoDB用户类型

`MongoDB`的用户分为两种，一种是`admin`用户，另一种是特定数据库用户。`admin`用户拥有最高的权限，而特定数据库用户则只能访问特定的数据库。当`MongoDB`的`admin`库里没有任何用户的时候，也就是说整个`MongoDB`没有一个`MongoDB`用户的时候，即便`–auth`权限需求打开了，用户还是可以通过`localhost`界面进入`MongoDB`进行用户设置，否则的话整个`MongoDB`就完全没法访问了。而当这个用户创建完成之后，之后的用户登录和操作就需要授权了，不是直接登录就能使用的了。

`MongoDB`有一个比较奇怪的设置是，即便是一个`admin`用户，授权也必须在`admin`数据库下进行，而不能在其他数据库下进行。而授权之后`admin`用户就可以在任何数据库下进行任何操作了。当然数据库级别的用户在他自己的数据库下授权之后是不能到其他数据库进行操作的。举例来说：

```s
    > use test
    > db.auth(“someAdminUser”, password)
```

操作失败，提示还没有在`admin`数据库下对`afmin`用户进行授权。

### 操作实例

启动`MongoDB`，在`cmd`命令框里进入数据库的`bin`目录；

1. 输入命令：`show dbs`，你会发现它内置有两个数据库，一个名为`admin`，一个名为`local`；本文只对`admin`库进行描述

2. 输入命令：`use admin`，你会发现该`DB`下包含了一个名为`system.user`的`collection`，这是用户表，用来存放超级管理员的

备注：本文使用的数据库版本是`2.0.1`，没有默认的`admin`数据库，但是在执行第二步之后自动创建了一个`admin`库； 当然也没有默认的`system.user`表，运行后面的第三步后会自动创建 `system.user`和`system.indexes` )

3. 输入命令：`db.addUser('root','root')`，这里我添加一个超级管理员用户，`username`为`root`，`password`也为`root`。先退出 (<kbd>ctrl</kbd> + <kbd>c</kbd>)程序，测试重启服务后再次连接`MongoDB`是否需要按提示输入用户名、密码进行操作。

4. 输入命令：`use admin`

5. 输入命令：`show collections`，查看该库下所有的表，你会发现，`MongoDB`并没有提示你输入用户名、密码，原因是，在文章最开始提到了，MongoDB默认设置为无权限访问限制，我们需要先把它设置成为需要权限访问

6. 从新打开`cmd`，在`mongodb`路径的`bin`目录下，执行

```s
mongod --dbpath  d:\work\data\mongodb\db  --auth
```

7. 输入命令：`use admin`

8. 输入命令：`show collections`，提示：

```js
"$err" : "unauthorized db:admin lock type:-1 client:127.0.0.1"
```

显然，已经提示没有权限；用刚才设置的用户名、密码来访问集合

9. 输入命令：`db.auth(“root”,”root”)`，输出一个结果值为`1`，说明这个用户匹配上了，如果用户名、密码不对，输出为`0`

10. 输入命令：`show collections`，将成功显示结果

继续操作，可以访问已经存在的数据库，但对于新建的数据库仍然没有权限；继续操作，先退出( <kbd>ctrl</kbd> + <kbd>c</kbd>)服务

1. 输入命令：`mongo TestDB`

2. 输入命令：`show collections`，提示：没有权限

3. 输入命令：`db.auth(“root”, “root”)`，输出结果为`0`，说明用户名或者密码有问题，刚刚前面才创建，怎么会不对呢？原因在于：当我们单独访问`MongoDB`的数据库时，需要权限访问的情况下，用户名密码并非超级管理员，而是该库的`system.user`表中的用户，注意，我这里说的是单独访问的情况，什么是不单独访问的情况呢？后面再讲。针对上述情况，接下来操作：

4. 输入命令：`db.addUser('test','111111')`，仍然提示没有权限，新的数据库使用超级管理员也无法访问，创建用户也没有权限，不过即然设定了超级管理员用户，那它就一定有权限访问所有的库

5. 输入命令：`use admin`

6. 输入命令：`db.auth(“root”, “root”)`

7. 输入命令：`use TestDB`

8. 输入命令：`show collections`，之后可以利用超级管理员用户访问其它库了，这个就是不单独访问的情况。在上述操作过程中，我们是先进入`admin`库，再转到其它库来的，admin相当于是一个最高级别用户所在的区域，对数据库操作，需要经过最高级别用户，之后可以创建每个数据库的用户。

9. 输入命令：`db.addUser('test','12345')`，我们给`TestDB`库添加一个用户，以后每次访问该库，我都使用刚刚创建的这个用户，我们先退出（<kbd>ctrl</kbd> + <kbd>c</kbd>）

10. 输入命令：`mongo TestDB`

11. 输入命令：`show collections`，提示没有权限

12. 输入命令：`db.auth('test','12345')`，输出结果`1`，用户存在，验证成功

13. 输入命令：`show collections`，成功显示结果

四、启动和关闭`MongoDB`的各种参数

[详见](http://blog.csdn.net/pgwindwind/article/details/8005262)

比如要改变`MongoDB`的默认端口，则可以这样使用`--port`参数：

打开`cmd`，在`mongodb`路径的`bin`目录下，执行

```js
mongod --port 50107 --dbpath  d:\work\data\mongodb\db  --auth
```

这样访问`MongoDB`就是以`50107`的端口访问了
:::
