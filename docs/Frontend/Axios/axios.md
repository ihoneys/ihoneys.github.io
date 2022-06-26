---
title: Axios 介绍
date: 2019-02-20
 
categories:
 - 前端基础
tags:
 - Axios
 - 前端基础

---

:::tip

- axios 是基于 promise 对 Ajax 的封装
- axios 必须在项目里进行一个封装

1. 为了好管理
2. 为了自测

:::

- 封装的几个点：

  1. 拦截
  2. 加验证信息token
  3. 容错，格式化数据

[HTTP介绍](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Overview)

XHR & fetch

## 一、 HTTP 请求交互的基本过程

| 端     | 动作      | 端     |
| :----- | :-------- | :----- |
| 客户端 | 请求行 => | 服务端 |
| 客户端 | 请求头 => | 服务端 |
| 客户端 | 请求体 => | 服务端 |
| 客户端 | <= 响应行 | 服务端 |
| 客户端 | <= 响应头 | 服务端 |
| 客户端 | <= 响应体 | 服务端 |

## 二、 HTTP 请求报文

1. 请求行

 | name   | 含义     | 例                  |
 | :----- | :------- | :------------------ |
 | method | 请求方式 | GET POST ···        |
 | url    | 地址     | /login /?id=123 ··· |

2. 多个请求头

`Host` 主机

`Cookie`

`Content-Type:application/x-www.form.urlencoded  &  application/json`对应请求体的格式

3. 请求体

`urlencoded` 格式 ：`username=tom&pwd=123`

`json` 格式：`{"username":"pwd":123}`

图片数据

文件···

## 三、 HTTP 响应报文

1. 响应状态行

`status`,`status text`

200 \ 201···

2. 多个响应头

`Content-Type`：`text/html；``charset=utf-8` 响应体的格式
`set-Cookie`：`BD_CK_SAM=1;path=/`

3. 响应体

`html` 文本/`json` 文本/`js`/`css`/图片···

## 四、 POST请求体参数格式

4. `Content-Type:application/x-www.form.urlencoded;charset=utf-8`
用于键值对参数，参数的建值用`=`连接 参数之间用`&`连接

例如：name=%gfgdgrggre45%%$&=12

5. `Content-Type:application/json`

例如：{"name":"%gfgdgrggre45%%$&","age":12}

6. `Content-Type:multipart/from-data`

## 五、 响应状态码

| status | statustext            | 含义                               |
| :----- | :-------------------- | :--------------------------------- |
| 200    | OK                    | 请求成功，一般用于GET与POST请求    |
| 201    | Created               | 已创建。成功请求并创建了新的资源   |
| 401    | Unauthorized          | 未授权/请求，要求用户的身份认证    |
| 404    | Not Found             | 服务器无法根据客户端的请求找到资源 |
| 500    | Internal Server Error | 服务器内部错误，无法完成请求       |

## 六、 不同类型的请求和作用

1. GET:  从服务器读取数据

2. POST:  向服务器添加新数据

3. PUT:  更新服务器数据

4. DELETE:  删除服务器数据

## 七、 API的分类

1. ` REST API `(`restful`)

    a  发送请求进行 `CRUD` ，哪个操作有请求方式来决定

    b  同一个请求路径可以进行多个操作

    c  请求方式会用到 `GET`/`POST`/`PUT`/`DELETE`

2. 非` REST API `（`restless`）

    a  请求方式不决定请求的 `CRUD` 操作

    b  一个请求路径只对应一个操作

    c  一般只有 `GET`/`POST`

- json-server 搭建 REST API

[地址](https://github.com/typicode/json-server)

Install JSON Server

```js
npm install -g json-server
```

Create a db.json file with some data

```js
{
  "posts": [
    { "id": 1, "title": "json-server", "author": "typicode" }
  ],
  "comments": [
    { "id": 1, "body": "some comment", "postId": 1 }
  ],
  "profile": { "name": "typicode" }
}
```

Start JSON Server

```js
json-server --watch db.json
```
