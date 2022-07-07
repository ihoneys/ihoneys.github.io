---
title: TypeScript 泛型
date: 2021-02-08
 
categories:
 - 前端基础
tags:
 - TypeScript
---

## 泛型

泛型是静态类型语言的基本特性，允许将类型作为参数传递给另一个类型、函数或者其他结构，泛型也可以叫做类型参数。

假设下面 `test`函数，接收一个参数，参数类型为 `string | number`，并返回该参数，返回类型也为 `string | number`，我们随手就能定义出来：

```typescript
function test(value: string | number): string | number {
    return value;
}

test('type');
test(666);
```

但是，如果类型增加了，或者改变了，我们又得到 test 函数上修改类型，显示很不优雅，这时候就需要我们的主角登场了那就是`泛型`。

### 基本使用

泛型的定义是在方法名加上 `<T>`（这里的`T`可以改为你任意喜欢的变量名）表示方法支持一个泛型参数，比如现在重新给上面的 `test`方法增加一个泛型`<T>`，这里首先说说**函数泛型**的基本使用：

```typescript
function test<T>(value: T): T {
    return value;
}
```

`T` 相当于类型形参，在调用的时候，我们需要传递参数具体的类型，相当于指明泛型的类型。

```typescript
function test<T>(value: T): T {
    return value;
}
// 指明泛型类型
test<string>('type')
```

如果是 `number`类型，直接在尖角号里面填成对应的类型即可：

```typescript
test<number>(666)
```

泛型接收的还可以是接口，基本类型，类接口，类型别名定义的类型。

- **接口泛型**

```typescript
interface User<T> {
    name: T;
    userId: number;
}

const userInfo: User<string> = { name: 'ssm', userId: 666 };
```

- **类型别名接口泛型**

```typescript
type User<T> =  {
    name: T;
    userId: number;
}
const userInfo: User<string> = { name: 'ssm', userId: 666 };
```

- **类泛型定义**

比如定义上面的 `test`方法，有两种方式

第一种在类上定义类型：

```typescript
class Test<T> {
    test(value: T): T {
        return value;
    }
}
const t: Test<string> = new Test<string>();
t.test('type');
```

第二种在类方法中定义：

```typescript
class Test {
    test<T>(value: T): T {
        return value;
    }
}
const t: Test = new Test();
t.test<string>('type');
```

如果一个类型名定义了泛型，那么使用此类型名的时候一定要要把泛型类型需要指明写上去。

而对于变量来说，它的类型可以在调用的时候推断出来的话，就可以省略泛型书写。

### 泛型中数组应用

在 TypeScript 中，我们知道定义数组类型方式有两种，一种是 `类型[]`，另一种是 `Array<类型>`，也就是数组泛型 `Array<T>`。

第一种写法：

```typescript
// item 自定义泛型名称
function fnc<Item>(params: Item[]) {
    return params;
}

fnc<string>(['123', '456']);
```

第二种写法：

```typescript
function fnc<Item>(params: Array<Item>) {
    return params;
}
fnc<string>(['123', '456']);
```

### 多个泛型定义

泛型并不是只能定义一个类型变量，我们可以引入希望定义的任何数量的类型变量。比如下面给 `test`方法，增加一个泛型 `K`，应用在参数 `num` 身上：

```typescript
function test<T, K>(str: T, num: K) {
    return `${str}${num}`;
}

test<string, number>('ssm', 2); // 简写 test('ssm', 2)
```

### 泛型推导与默认值

上面说到，泛型可以在调用的时候编译器自动推断出来，一般发生在函数调用的场合。

```typescript
function test<T, K>(str: T, num: K) {
    return `${str}${num}`;
}

test('ssm', 2)
```

会自动推导出类型：
![image.png](/img/ts/6.png)

泛型就好比“方法”一样，它可以传参，可以有多个参数，也可以有**默认值：**
```typescript
type Test<T, U = number> = {
  name: Array<T>;
  nums: U;
};

type U = Test<string>; // type U = { name: string[]; nums: number }

type T = Test<number,string>; // type T = { name: number[]; nums: string }
```


### 泛型约束

泛型是宽泛的，但还可以有限制，下面例子`extends`的做用是限制 `T` 至少需要有 `name : string`类型属性。
```typescript
interface User {
  name: string;
}

function test<T extends User>(obj: T) {
  return obj;
}

test({ age: 80 }); // Error: 类型 { age: number } 缺少 name 属性。

test({ name: 'ssm' age: 80 }); // OK
```
此外，我们还可以用 `,`号来分割多种约束类型，比如： `<T extends User, Type1, Type2>`。