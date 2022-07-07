---
title: TypeScript 联合类型、交叉类型
date: 2021-02-08
 
categories:
 - 前端基础
tags:
 - TypeScript
---

## 联合类型、交叉类型

### 联合类型

联合类型表示一个值可以是几种类型之一。用竖线`（ | ）`分割每一个类型。

例如：

```typescript
let userId: string | number =  '2022' // OK
userId = 2022 // OK
```
上面`userId`表示有两种类型，它的值可以是`string`类型或者`number`类型中的一个。

还可以：

```typescript
interface BasicAddress {
    name: string;
    street: string;
}

interface User {
    userId: number;
}

type UserInfo = User | BasicAddress;
```

上面 `UserInfo` 类型表示拥有 `User` 类型 或者 `BasicAddress` 类型。

但是比如说下面userInfo定义为UserInfo类型：

```typescript
// 此时 userInfo 内有 BasicAddress 其中一个属性，那么必须还需要有 BasicAddress 类型的 street 属性
const userInfo: UserInfo = { // Error: 缺少属性 "street"，但类型 "BasicAddress" 中需要该属性。
    name: 'jason'
}

const userInfo：UserInfo = { // OK
	name: 'jason',
    street: '滨河大道'
}
```

当 `userInfo` 只有 userId 属性时：

```typescript
const userInfo: UserInfo = { // OK，这时拿的时候 User 类型
    userId: 2022,
};
```

**注意：**

在赋值之前，只能访问共同方法、属性或者共有成员（但是赋值之前使用会报错）。下面的例子

```typescript
let userId: string | number;

userId.length; // Error: 类型“number”上不存在属性“length”
userId.toString();

type stringOrNumber = string | number;

function test(param: stringOrNumber) {

}
```
`test`函数的参数 `param` 被注释为 `stringOrNumber`类型，`param`只能拿到 `string `和 `number`身上的共同类型：
![image.png](/img/ts/3.png)
如果想到`param`身上的 `string `或者 `number `类型方法，可以使用 `typeof` 做类型断言：
![image.png](/img/ts/4.png)
`number`：
![image.png](/img/ts/5.png)
### 交叉类型

交叉类型是将多个类型合并为一个类型。通过 `&`进行连接，多个类型叠加到一起成为新的类型。

```typescript
interface User { name: string;}

interface Account { money: number;}

type UserInfo = User & Account;

// 等同于
type UserInfo = {
    name: string;
    money: number;
}

const info: UserInfo = {
    name: 'jason',
    money: 200
}
```

上面代码先定义了一个 `User` 类型、`Account` 类型，接着通过 `&`运算符号两两个类型叠加在一起，得到新的类型 `UserInfo`。`UserInfo` 类型 拥有它们两个类型的所有属性。

**同名基础类型属性的合并**

同名类型属性类型不一致合并后属性类型会变成 `never`。

```typescript
interface A {
    a: string;
}

interface B {
    a: number;
    b: string;
}

type AB = A & B;

const foo: AB = {
    a: 'bar', // Error: 不能将类型“string”分配给类型“never”。
};
```

属性 `a`的类型合并之后最终为 `string & number`，因为不存在即是 `string` 又是 `number` 的值，所以会变成 `never`。