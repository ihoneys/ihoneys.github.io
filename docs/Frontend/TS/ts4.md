---
title: TypeScript 函数
date: 2021-02-08
 
categories:
 - 前端基础
tags:
 - TypeScript
---

## TypeScript 函数

函数类型在 TypeScript 类型系统中扮演着非常重要的角色，他们是可组合系统的核心模块。

### 定义函数参数类型

```typescript
const func = (x: number, y: number) => {};
```

上面定义了`x`，`y`定义了  `number` 基本类型，还可以使用内联类型、接口 等其他方式。

### 定义函数返回类型

在参数列表之后返回指定类型。

```typescript
const func = (x: number, y: number): number => {}; // Error

const func = (x: number, y: number): number => x + y; // OK
```

上面声明了一个 `fnc` 函数，并且函数执行的返回值为 `number` 类型。

函数的返回值类型除了返回原始类型之外，一般还会经常返回 `any，nerver，void`

**never**

- `never`类型表示的是那些永不存在的类型。

常常用来表示返回一个 `Error` 类型。

```typescript
// 返回 错误
function error(message: string): never {
    throw new Error(message);
}
```

### 可选参数

将参数设置为可选 `?`

```typescript
const func = (x: number, y?: number) => {};
```

**注意：**

**必选参数不能位于可选参数后**
![image.png](/img/ts/1.png)

**提供默认值**

```typescript
const func = (x: number, y: number = 100) => y;
```

### 函数重载

大多数函数都接收一组固定的参数。但是有些函数可以可变数量的参数、不同类型的参数，甚至可以根据调用函数的方式返回不同的类型。因此为了注释这样的函数，TypeScript 提供了函数重载功能。

看看下面的函数对一个人返回欢迎信息：

```typescript
function greet(person: string): string {
    return `Hello ${person}!`;
}

greet('World'); // 'Hello, World!'
```

如果想让 `greet()`函数更灵活怎么办？让接收要欢迎的人员列表。这样让 person 参数能够接收一个字符串或者一个字符串数组，并返回一个字符串或者一个字符串数组。

第一种方式直接修改函数签名：

```typescript
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

上面直接定义参数的类型为 `string | string []`，返回类型为 `string | string []`，通过 typeof 判断 person 是否为 string 并返回，或者当 person 为一个数组时，返回欢迎的人员列表。

直接修改函数签名是我们常用的方法，但是，某种情况下，更希望采用替代方法并单独定义可以调用我们的函数的所有方式。这种就是**函数重载**。

**重点：**

**第二种方式使用函数重载特性**

重载定义多个 `greet` 的函数类型：

```typescript
// 重载列表
function greet(person: string): string;
function greet(persons: string[]): string[];

// 函数签名
function greet(person: unknown): unknown {
    //如果要进行函数重载判断,那么这个形参和返回值的类型必须要包含上面函数
    if (typeof person === 'string') {
        return `Hello, ${person}!`;
    } else if (Array.isArray(person)) {
        return person.map(name => `Hello, ${name}!`);
    }
    throw new Error('Unable to greet');
}

greet('World'); // 'Hello, World!'
greet(['Jane', 'Joe']); // ['Hello, Jane!', 'Hello, Joe!']
```

调用 `greet()` 函数，TypeScript 编译器处理函数重载时，它会查找重载列表，尝试使用第一个重载定义。 如果匹配的话就使用这个。不匹配继续匹配第二个，第二个匹配不成功的话 就会提示错误信息。

到这里可能还没有很直观看到重载的意义，再看看下面的例子：

```typescript
function foo(arg1: number, arg2: number): number;
function foo(arg1: string, arg2: string): string;
function foo(arg1: string | number, arg2: string | number) {
  return arg1 || arg2;
}

// ❎ x is of type string
const x = foo('sample1', 'sample2');
// ❎ y is of type number
const y = foo(10, 24);

// ❌ Error: No overload matches this call
const a = foo(10, 'sample3');
// ❌ Error: No overload matches this call
const b = foo('sample3', 10);
```

上面重载定义 foo 参数类型传递必须是同一种类型，如果两者不一样，则返回错误。

可以看到 函数重载更准确限制参数值的传递。

