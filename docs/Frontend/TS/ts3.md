---
title: TypeScript 中的 interface 和 type
date: 2021-02-08
 
categories:
 - 前端基础
tags:
 - TypeScript
---

### interface 接口

`interface`可以帮我们定义一个 `Object`的类型，它可以灵活的描述对象每一个属性的类型。

看看如何使用它，比如下面的 userInfo 对象，包含 name、userId 属性，这时我们可以使用 `interface` 去抽象指定它里面包含的属性。

```typescript
// 一般接口首字母大写
interface User {
    name: string;
    userId: number;
}
// 定义 userInfo 对象为 User 类型的时候
// 就约束了 userInfo 的形状必须和接口 User 一致
// 如果定义的变量比接口少或者多是不允许的。
const userInfo: User = {  
    name: 'abc'
}
// Error: userInfo 中缺少属性 "userId"，但类型 "User" 中需要该属性。

// OK
const userInfo: User = {
    name: 'abc',
    userId: 66,
};

// 也可以：
const userInfo: {
    name: string;
    userId: number;
} = {
    name: 'abc',
    userId: 66,
};
```

**接口具有的特性：**

#### **定义可选**

在 `interface`属性中添加 `?`可以省略

```typescript
interface User {
    name: string;
    // userId 后添加 ?
    userId?: number;
}

// OK
const userInfo: User = {
    name: 'abc',
};
```

#### **只读属性**

在 `interface`属性中添加 `readonly`关键字，一旦定义属性变为只读，不能被修改。

```typescript
interface User {
    readonly name: string;
    userId?: number;
}

const userInfo: User = {
    name: 'abc',
};

userInfo.name = 'def' // Error： 无法分配到 "name" ，因为它是只读属性。
```

此外 TypeScript 还提供了 `ReadonlyArray<T>`，表示该数组为只读不能被操作。

**注意：**

> 如果使用 `delete` 操作符删除某一个对象属性，那么它定义的类型属性必须是可选的以及定义为 `readonly`，否则会报错


#### 任意属性

有时候我们定义一个对象类型，但是还想添加额外的属性，又不想定义为 `any`，**索引签名**就可以满足我们的要求

```typescript
interface User {
    name: string;
    userId: number;
    // 属性值的类型为 any ，可以为任何类型，如果 string 所有额外的属性都必须为 string
    [propName: string]: any;
}

// 可以随意添加
const userInfo: User = {
    name: 'abc',
    userId: 999,
    avatarUrl: 'url',
    gender: 1,
};
```

### type 类型别名

type 会给类型起一个新名字，type 和 interface 很像，type 比 interface 更加灵活，不但可以作用于原始值（基本类型），联合类型，以及任何类型。

例如：

```typescript
type Gender = number; // 尽管 type 可以定义一个基本类型，但通常没什么必要。
type User = { name: string; userId: number };
type GetUser = () => void;
type UserAndGetUser = User | GetUser // 联合类型
type UserAndGetUser = User & GetUser // 交叉类型
type User<T> = { name: string; userId: T; };  // 泛型传入
```

### interface 与 type 的区别

- **定义一个函数类型的形状不一样**

**接口**

```typescript
interface GetUser {
    (): void;
}
const getUser: GetUser = () => {};
```

**类型别名**

```typescript
type GetUser = () => void;
const getUser: GetUser = () => {};
```

- **type 可以定义联合类型、交叉类型、原始类型和元组**

```typescript
type User = {
    name: string;
    userId: number;
};

type Other = { city: 'shenzhen' };

// 交叉类型
type UserInfo = User & Other;

// 联合类型
type UserInfo = User | Other;

// 元组
type Tuple = [number,string]
```

- **接口和类型别名的扩展**

两者都可以扩展，但是语法不同。

**接口使用 extends 扩展：**

```typescript
interface User {
    name: string;
    userId: number;
}

interface UserInfo extends User {
    city: string;
}

// 等同于：
interface UserInfo = {
    name: string;
    userId: number;
    city: string;
}
```

**类型别名使用 **`**&**`：

```typescript
type User = {
    name: string;
    userId: number;
};

type Other = { city: 'shenzhen' };

type UserInfo = User & Other

// 等同于：
type UserInfo = {
    name: string;
    userId: number;
    city: string;
}
```

- **接口可以名称不会冲突，重复定义会叠加**

```typescript
interface User {
    name: string;
    userId: number;
}

interface User {
    gender: number;
}

// 此时 User 的类型为：
interface User {
    name: string;
    userId: number;
    gender: number;
}

const userInfo: User = {
    name: 'abc',
    userId: 999,
    gender: 0,
};
```

- **type 可以使用 in 关键字遍历生成属性，interface 不行。**

```typescript
type keys = 'name' | 'city';
type User = {
    [key in keys]: string;
};

// 等同于：
type User = {
    name: string;
    city: string
}

const userInfo: User = {
    name: 'abc',
    city: 'shenz',
};
```

上面索引签名使用 in 关键字就像 for .. in 一样依次遍历 `Keys`，并生成 **键** 在 User 类型中

```typescript
type keys = 'name' | 'city';


interface User = {
    [key in keys]: string; // Error ×
};
```

