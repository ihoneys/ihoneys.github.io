---
title: Vue 编程式的导航
date: 2019-03-17
sidebar: 'auto'
tags:
 - vue
---

:::tip
在路由中除了 `router-link` 标签跳转外很多情况下我们用 `js`跳转的情形多，比如登陆成功后跳到首页，不可能 `js` 模拟点击 `router-link` 标签。 在 Vue 实例内部，你可以通过 `$router` 访问路由实例。因此你可以调用 `this.$router.push`
:::

- 通过以下三个方法实现编程式导航

## 1. 使用 router.push 方法跳转

- 这个方法会向 `history` 栈添加一个新的记录，所以，当用户点击浏览器后退按钮时，则回到之前的 `URL`,除了 `push` 还有 `replace`，`go` 等很多跳转方式

|            声明式            |         编程式         |
| :--------------------------: | :--------------------: |
| `<router-link to='/home' />` | `router.push('/home')` |

示例:

```js
// 字符串【常规跳转】
router.push("home");

// 对象【常规跳转，对象写法好处是可扩展很多参数进去】
router.push({ path: "home" });

// 命名的路由【下一节有说明什么是命名路由，params传参不会在地址栏显示】
router.push({ name: "user", params: { userId: "123" } });

// 带查询参数，变成 /register?plan=private【好处是刷新页面参数不丢失】
router.push({ path: "register", query: { plan: "private" } });
```

:::warning 注意：

如果提供了 `path`，`params` 会被忽略，上述例子中的 `query` 并不属于这种情况。取而代之的是下面例子的做法，你需要提供路由的 `name` 或手写完整的带有参数的 `path`：

name 和 `params` 可以，`path` 和 `params` 不可以！
:::

```js
const userId = "123";
router.push({ name: "user", params: { userId } }); // -> /user/123
router.push({ path: `/user/${userId}` }); // -> /user/123
// 这里的 params 【不生效】
router.push({ path: "/user", params: { userId } }); // -> /user
```

## 2. 使用 router.replace 方法替换

- 跟 `router.push` 很像，唯一的不同就是，它不会向 `history` 添加新记录，而是跟它的方法名一样 ---- 替换掉当前的 `history` 记录。

|                声明式                |          编程式           |
| :----------------------------------: | :-----------------------: |
| `<router-link to='/home' replace />` | `router.replace('/home')` |

```js
<router-link :to="{ path: '/abc'}" replace></router-link>
```

## router.go(num)前进后退

- 这个方法的参数是一个整数，意思是在 `history` 记录中向前或者后退多少步，类似 `window.history.go(num)`。

```js
// 在浏览器记录中前进一步，等同于 history.forward()
router.go(1);

// 后退一步记录，等同于 history.back()
router.go(-1);

// 前进 3 步记录
router.go(3);

// 如果 history 记录不够用，那就默默地失败呗
router.go(-100);
router.go(100);
```
