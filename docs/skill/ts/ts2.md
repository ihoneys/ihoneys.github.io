---
title: TypeScript 那些常见类型表达式关键字
date: 2020-12-31
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - TypeScript
publish: true
# 打赏
showSponsor: true
---

## 前言

除了定义一些基本类型，某些情况不能用基本类型确定，也就是要定义一个复杂类型的时候，TS的一些操作符能够帮助我们解决这一问题，下面会结合实例讲述 TS 中一些常见的高级操作符，也欢迎大家补充。

## 关键字

### extends

语法：`T extends K`

这里的 `extends`不是类，接口继承的意思，而是起到限定与约束作用，意思是 判断 `T` 能否赋值给 `K`

有时候定义的泛型类型不想什么类型都可以，想继承某些类，可以通过 `extends`关键字添加泛型约束。

```ts
const useCopyKeys = <T extends U, U>(target: T, source: U) => {
    for (let key in source) {
        target[key] = (source as T)[key];
    }
    return target;
};

const obj = { a: 1, b: 2, c: 3, d: 4 };
useCopyKeys(obj, { b: 10, c: 20 });

```

上面约束了泛型 `T` 必须包含 `U` ， 如果泛型 `T` 中没有 `U` 字段那么就会出现错误，简单来说就是，`T` 可以是 `U` 的父类，但是不能是 `U` 的子类。

也可以用于条件判断

**extends 条件分发**

例如，实例化`T extends U ? X : Y`，会存在一个特性，当`T`的类型为`A | B | C`也就是联合类型时，会进行条件分发，被解析为`(A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)`，

下面`Exclude`工具类型，`U` 在 `T` 中有的都排除

```ts
type Exclude<T, U> = T extends U ? never : T;

type E0= Exclude<string | number, number>; // string

```

上面列子会被分发为`string extends number ? never : string`| `number extends number ? never : number`，因此得到`string`。

### in

`in`关键字用来枚举类型：

```ts
type Keys = 'status' | 'code';
type Response = {
  [p in Keys]: any;
};

// 等同于：
type Response = {
  status: any;
  code: any;
};

```

注意的是：

如果使用 `[ P in number ]`生成以数字为索引的类型的话，他也可以是一个数组：

以 TypeScript 内置工具方法 `Record`方法为列子：

```ts
// Record 实现方法
type Record<K extends keyof any, T> = {
    [P in K]: T;
};

interface Customer {
  name: string;
  age: number;
}

type Result = Record<number, Customer>; // type Result = { [x: number]: Customer; }

const varible: Result = [{ name: 'jac', age: 111 }]; // OK

```

`[x: number]`可以代表它的索引因此值为`[{ name: 'jac', age: 111 }]`是成功的，相当于 `[ 0 : { name: 'jac', age: 111 }]`省略了 0，

但是如果是**字符串索引**的话，就不能这样

```ts
type Result = Record<string, Customer>; // type Result = { [x: number]: Customer; }

const varible: Result = [{ name: 'jac', age: 111 }]; // Error

const varible: Result = { info: { name: 'jac', age: 111 } }; // OK

```

### is

语法：`prop is Type`

判断 prop 是否是 Type 类型

is 关键字一般用于函数返回值类型中，判断参数是否属性某一类型，并根据结果返回对应的布尔类型。

下面判断 isError 函数传入的参数 `value` 是否是 `Error` 类型

```ts
export const ErrorBox = ({ error }: { error: unknown }) => {
  if (error?.message) {
    return <Typography.Text type={"danger"}>{error?.message}</Typography.Text>;
  }
  return null;
}

```

上面 ErrorBox 组件 根据 props 传递 error 对象， `error` 因为有可能是 null 也有可能有值，不能确定，所以定义 `unkown` 类型，想根据 `error?.message`判断是否有值，有的话就显示自己的错误信息组件。但是 error 提示 '对象的类型为 "unknown"。'，但是由于函数嵌套 TypeScript 不能进行正确的类型判断，这时候可以使用 is 准确范围。

```ts
// 类型守卫，将 value 的类型缩小为 Error
const isError = (value: any): value is Error => value?.message;

export const ErrorBox = ({ error }: { error: unknown }) => {
  if (isError(error)) {
    return <Typography.Text type={"danger"}>{error?.message}</Typography.Text>;
  }
  return null;
}

```

也可以看这里 [TypeScript 关键字](http://www.imooc.com/wiki/typescriptlesson/is.html)。

### infer

`infer`推断的变量类型是根据能够匹配最接近 extends 左边能够接收的类型从而推断的类型，会尝试匹配最靠近的类型。

infer 占位符关键字出现的位置：通常出现在以下三个位置。

- infer 出现在 extends 条件语句后的函数类型的参数类型位置上。
- infer 出现在 extends 条件语句后的函数类型的返回值类型上。
- infer 会出现在类型的泛型具体化类型上。

**注意：infer 只能出现在 extends 条件语句中。**

**infer P 中的 P 可以接收任何类型**

**举例：**

```ts
type InferParamType<T> = T extends (param: infer P) => any ? P : T;

```

`infer P`就是在条件判断中申明的新的泛型，它会根据实际传入的泛型类型推断出该泛型的具体类型

上面工具类型 `InferParmaType`的作用是拿到函数类型的参数类型，下面我们来使用它：

```ts
// 工具类型 InferType
type InferParamType<T> = T extends (param: infer P) => any ? P : T;

interface Customer {
  custname: string;
  buymoney: number;
}

type FuncType = (param: Customer) => string;

type InferResultType = InferParamType<FuncType>;

```

最终 `InferResultType`接收到的类型为 `Customer`：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/57978dd90afe4125bbf520533c329cda~tplv-k3u1fbpfcp-zoom-1.image)

为什么呢？

当执行工具类型 `InferParamType<FuncType>`相当于：

```ts
// type FuncType = (param: Customer) => string;

type InferParamType<FuncType> = FuncType extends (param: infer P) => any ? P : FuncType;

```

意思是：`FuncType`类型是否满足 `(param: infer P) => any` 如果满足 则返回 `infer` 定义的变量 `P`，否者返回 `FuncType`，首先看返回类型 `any`满足 `FuncType`的返回类型 `string`，`infer`定义的变量类型 `P`它是可以接收任何类型也就是 `infer` 推导出的类型，`param`的类型为 `Customer`，`P`并接收到会被定义为 `Customer`，因此 `FuncType`类型能够满足约束条件，所以返回`P`也就是 `Customer`类型。

再举个不成立的例子：

这里从新定义`FuncType`的类型，增加一个 nums 参数：

```ts
// 工具类型 InferType
// type InferParamType<T> = T extends (param: infer P) => any ? P : T;

type FuncType = (param: Customer,nums: number) => string;

type InferResultType = InferParamType<FuncType>;

```

此时 `InferResultType`得到的类型就是 传入的类型 `FuncType`：

![https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fadbf16e58434a5886e1a4c9520c94eb~tplv-k3u1fbpfcp-zoom-1.image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fadbf16e58434a5886e1a4c9520c94eb~tplv-k3u1fbpfcp-zoom-1.image)

因为多个参数函数类型，不满足比他少的参数函数类型，所以返回了 `FuncType`。

**加强理解题（TS 面试题目）：**

实现一个`LeftTrim`字符串类型去左侧空格

```ts
type A = ' Hello World! ';
type B = LeftTrim<A>;

```

答案：

使用 infer，以及递归。

```ts
type LeftTrim<T extends string> = T extends ` ${infer R}` ? LeftTrim<R> : T

```
`infer`推导出的变量类型为 `Hello World!` （Hello World! 是一个字面量类型并且没有空格的）来 `R` 保存，因为模板字符串中前面又一个空格了，第一次会满足条件，所以会递归将变量 R(Hello World! )再次给 `LeftTrim`，第二次进入 此时 `T` 的类型是Hello World! ，`extends` 后面的类型会变为 Hello World!这个有空格，此时 `T` 类型是没有空格了的，所以不满足约束条件，返回 `T`,因此得到的是：

![](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/297218fba2c849ff8eba0cb86bad2b00~tplv-k3u1fbpfcp-zoom-1.image)

**那么去掉右边的空格就是：**

```ts
type LeftTrim<T extends string> = T extends `${infer R} ` ? LeftTrim<R> : T

```

### typeof

`typeof`操作符可以用来判断数据的类 型是否是某个原始类型（`number`、`string`、`boolean`,...）和对象类型。

```ts
interface User {
    name: string;
    useId: number;
}

const obj: User = { name: 'ssn', useId: 888000 }
type TUser = typeof obj
// type TUser = User

```

**typeof 类型保护**

```ts
function greet(person: string | string[]): string | string[] {
    if (typeof person === 'string') {
        return `Hello, ${person}!`;
    } else if (Array.isArray(person)) {
        return person.map(name => `Hello, ${name}!`);
    }
    throw new Error('Unable to greet');
}
greet('World');          // 'Hello, World!'
greet(['Jane', 'Joe']); // ['Hello, Jane!', 'Hello, Joe!']

```

`greet` 内部会 `typeof` 判断传递的参数的类型，来做对应逻辑是输出字符串，还是字符串数组。

### instance

与`typeof`类似，但是作用方式不同，`instanceof`类型保护是通过构造函数来细化类型的一种方式。

instanceof 的右侧要求是一个构造函数。

```ts
class Song {
  constructor(public title: string, public duration: number) {}
}

class Playlist {
  constructor(public name: string, public songs: Song[]) {}
}

function getItemName(item: Song | Playlist) {
  if(item instanceof Song) {
    return item.title;
  }
  return item.name;
}

const songName = getItemName(new Song('Wonderful Wonderful', 300000));
console.log('Song name:', songName) // Song name: Wonderful Wonderful

const playlistName = getItemName(
new Playlist('The Best Songs', [new Song('The Man', 300000)])
);
console.log('Playlist name:', playlistName); // Playlist name: The Best Songs

```

上面代码，`getItemName` 函数中使用 `instanceof`操作符来推断传入的 `item` 参数是 `Song` 类型还是 Playlist `类型`执行对应的操作。

### keyof

语法： `keyof T`

该操作符可以用于获取 `T` 类型的所有已知**公共属性键**，其返回类型是联合类型。

```ts
interface User {
    name: string;
    useId: number;
}
type UserKeys = keyof User; // type UserKeys = 'name' | 'useId'

```

如果属性被定义为私有属性：

```ts
interface User {
    name: string;
    private useId: number;
}
type UserKeys = keyof User; // type UserKeys = 'useId'

```

在 TypeScript 规定中，如果说是 `keyof any`那么此时`any`包含的类型为 `string | number | symbol`。

![https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/46e44180f5dc4e62b8437fcfe88d9f56~tplv-k3u1fbpfcp-zoom-1.image](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/46e44180f5dc4e62b8437fcfe88d9f56~tplv-k3u1fbpfcp-zoom-1.image)

### 索引访问操作符号 T[K]

语法： `T[K]`

类似于 JS 中使用对象索引的方式，只不过js 中是返回对象属性的值，而在 TypeScript 中返回的是 T

对应属性 K 的类型。

```ts
interface User {
    name: string;
    useId: number;
}

type UserNmaeType = User['name'] // string

```

## 最后

如果对上述有不明白，或者描述有误，欢迎评论区指出~
想试试自己学得怎么样了，可以做做这48道TS练习题，下面这篇文章里，也附有答案加解析。

[来做做这 48 道 TypeScript 练习题，试试你的 TS 学得怎么样了！](https://juejin.cn/post/7062903623470514207)