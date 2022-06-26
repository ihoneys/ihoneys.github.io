---
title: MySQL 命令操作
date: 2020-11-08
 
categories:
 - 后端技术
tags:
 - MySQL

---

## 查看MySQL版本

1. 在mysql中

```js
mysql> select version();
+-----------+
| version() |
+-----------+
| 5.5.62    |
+-----------+
1 row in set (0.00 sec)
```

2. 在mysql外 使用dos命令

```js
mysql --version
//或
mysql -V
```

## 数据库操作

### 查看所有数据库

\* 要使用sql语句 ,在命令的结尾加`;`或`\g`

```js
mysql> show databases;
+--------------------+
| Database           |
+--------------------+
| information_schema |  //保存元数据信息
| mysql              |  //保存用户信息
| performance_schema |  //搜集性能信息
| test               |  //测试用，空数据库
+--------------------+
```

### 进入某个数据库

```js
mysql> use test;
Database changed
```

### 查看当前所在的数据库

```js
mysql> select database();
+------------+
| database() |
+------------+
| test       |
+------------+
1 row in set (0.00 sec) //输出结果
```

## 表的操作

### 查看本数据库中的表

```js
mysql> show tables;
Empty set (0.00 sec) ////输出结果 表示空的，没有表

```

### 查看其他数据库的表

\* 只是查看一下，还是在原来的数据库中

```js
mysql> show tables from mysql;
+---------------------------+
| Tables_in_mysql           |
+---------------------------+
| columns_priv              |
| db                        |
| event                     |
| func                      |
| general_log               |
| help_category             |
| help_keyword              |
| help_relation             |
| help_topic                |
| host                      |
| ndb_binlog_index          |
| plugin                    |
| proc                      |
| procs_priv                |
| proxies_priv              |
| servers                   |
| slow_log                  |
| tables_priv               |
| time_zone                 |
| time_zone_leap_second     |
| time_zone_name            |
| time_zone_transition      |
| time_zone_transition_type |
| user                      |
+---------------------------+
```

### 在当前数据库中创建表

```js
mysql> create table stuinfo(
    -> id int,  // id列 并指定列的类型是int
    -> name varchar(20)); // name列 并指定 列的类型varchar(20)
Query OK, 0 rows affected (0.02 sec) //输出结果

```

### 查看表的结构

```js
mysql> desc stuinfo;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.01 sec)
```

## 数据操作

### 查看表的数据

```js
mysql> select * from stuinfo;
Empty set (0.00 sec) // 没有
```

### 插入数据(输入的时候要英文)

```js
mysql> insert into stuinfo(id,name)values(1,'john');
Query OK, 1 row affected (0.01 sec)

mysql> insert into stuinfo(id,name)values(2,'rose');
Query OK, 1 row affected (0.01 sec)

mysql>
```

### 修改数据

```js
mysql> update stuinfo set name='lilei' where id =1;
Query OK, 1 row affected (0.01 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```
