---
title: MySQL 语法
date: 2020-11-08
 
categories:
 - 后端技术
tags:
 - MySQL

---
## MySQL 语法规范

1. 不区分大小写，但建议关键字区分大写；表名，列名小写。
2. 每条命令用`;`(或`\g`)结尾。
3. 每条命令根据需要可以进行缩进或换行。
4. 注释

```js
单行注释： #注释文字
单行注释： -- 注释文字
多行注释： /* 多行注释 */
```

## SQL 语言的学习

```js
选择：select * from table1 where
范围插入：insert into table1(field1,field2) values(value1,value2)
删除：delete from table1 where
范围更新：update table1 set field1=value1 where
范围查找：select * from table1 where field1 like ’%value1%’ ---like的语法很精妙，查资料!
排序：select * from table1 order by field1,field2 [desc]
总数：select count as totalcount from table1
求和：select sum(field1) as sumvalue from table1
平均：select avg(field1) as avgvalue from table1
最大：select max(field1) as maxvalue from table1
最小：select min(field1) as minvalue from table1
```

## 常用SQL语句

- 增
如果有的键是必须的，忘记写进去会报错

```js
-- insert into user_list(age,name,pwd,email) values(55,"张龙","79845","123@126.com")
```

- 删
很少情况会真正删除，实际是把数据隐藏，不让用户看到而已！！

```js
-- DELETE from user_list WHERE id = 2
```

- 改

```js
-- UPDATE user_list set age=100 ,name="南极仙翁" WHERE id=5
```

- 查

```js
-- select * from user_list
-- SELECT * from user_list WHERE age<18
-- SELECT * from user_list WHERE age<18 AND sex=2
//模糊查询
-- SELECT * from user_list WHERE `name` LIKE '张%'  // name以张开头的
-- SELECT * from user_list WHERE `name` LIKE '%三'  // name以三结束的
-- SELECT * from user_list WHERE `name` LIKE '%二%' // name包含三的
-- SELECT * from user_list WHERE `name` LIKE '张%' OR age<18 ORDER BY age asc // name 以张开头 age大于18 查看并用 age升序排列
-- SELECT * from user_list WHERE age>18 ORDER BY age ASC
// asc 升序 desc 降序
```
