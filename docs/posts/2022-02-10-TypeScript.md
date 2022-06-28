---
layout: Post
title: TypeScript 练习题 # 博客标题（必须）
subtitle: 学习 TS 知识之后做题巩固 # 博客副标题（可选）
date: 2022-02-31 # 博客日期，会显示在文章头部（可选）
# author: xxx  # 博客作者（可选，不填的话会使用 `themeConfig.personalInfo.name`）
useHeaderImage: true # 是否在博客中显示封面图（可选，默认：false）
headerImage: https://source.unsplash.com/1600x900/?scenery,2022-02-31 # 博客封面图（必须，即使上一项选了 `text`，图片也需要在首页显示）
headerMask: rgba(40, 57, 101, .4) # 封面图遮罩（可选）
catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）
tags: # 博客标签
  - TypeScript
---

## 🍔 前言

根据以下题目解题中你可以学习了解到并应用的知识点有：

- 泛型应用
- 联合类型、交叉类型使用

- 函数重载
- 元组

- `extends`分布式条件类型、约束
- `in`关键字

- `as`断言
- `keyof`关键字

- `infer`关键字
- `-?`操作符

- `-readonly` 删除只读符号
- 循环遍历中属性值类型为`never`会被省略

- `[number]`获取所有数组类型索引值
- 与`any`交叉类型时的情况

- 什么是`Flasy`类型
- 协变逆变

**TypeScript 内置工具类型的使用**

- `Omit`
- `Pick`

- `Required`
- `Extract`

- `Exclude`
- `Parameters`

- `ReturnType`

---

**下面工具类型实现以及该题实现的逻辑分析觉得错误，或书写有误，希望大佬帮忙指正 😀，有更好的实现方式和不明白的地方欢迎评论区留言。**

## 第一题

以下代码为什么会提示错误，应该如何解决下述问题。

```typescript
type User = {
  id: number;
  kind: string;
};

function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    id: u.id,
    kind: "customer",
  };
}
```

上面代码出现错误原因：泛型 `T` 只是约束于`User`类型，并不是局限于 `User`类型，所以返回结果 应该还需要接收其他类型变量。

**解决办法**：

第一种，`T` 类型兼容 `User `类型

```typescript
function makeCustomer<T extends User>(u: T): T {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    ...u,
    id: u.id,
    kind: "customer",
  };
}
```

第二种，返回值类型修改为 `User`类型

```typescript
function makeCustomer<T extends User>(u: T): User {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    id: u.id,
    kind: "customer",
  };
}
function makeCustomer<T extends User>(u: T): ReturnMake<T, User> {
  // Error（TS 编译器版本：v4.4.2）
  // Type '{ id: number; kind: string; }' is not assignable to type 'T'.
  // '{ id: number; kind: string; }' is assignable to the constraint of type 'T',
  // but 'T' could be instantiated with a different subtype of constraint 'User'.
  return {
    id: u.id,
    kind: "customer",
  };
}

type ReturnMake<T extends User, U> = {
  [K in keyof U as K extends keyof T ? K : never]: U[K];
};

makeCustomer({ id: 18584132, kind: "888", price: 99 });
```

1、`ReturnMake`工具类型，接收 `T`，`U` 两个泛型， `T` 约束于 `User`，

2、遍历 `User `中的 key ，并使用 `as` 断言，如果`K`（也就是 User 类型的 key），约束于 泛型类型的 key 就返回 `K`，否侧返回 `never`，`U[K]` 取键值。

## 第二题

本道题我们希望参数 a 和 b 的类型都是一致的，即 a 和 b 同时为 number 或 string 类型。当它们的类型不一致的值，TS 类型检查器能自动提示对应的错误信息。

```typescript
条件function f(a: string | number, b: string | number) {
  if (typeof a === 'string') {
    return a + ':' + b; // no error but b can be number!
  } else {
    return a + b; // error as b can be number | string
  }
}
```

**解决办法**：**函数重载**

```typescript
function f(a: string, b: string): string;
function f(a: number, b: number): number;
function f(a: string | number, b: string | number) {
  if (typeof a === "string" || typeof b === "string") {
    return a + ":" + b;
  } else {
    return a + b;
  }
}

f(2, 3); // Ok
f(1, "a"); // Error
f("a", 2); // Error
f("a", "b"); // Ok
```

使用函数重载当调用函数时，会依次匹配定义`f`函数类型，内部，使用 typeof 判断 a 和 b 的类型对应逻辑。

## 第三题

如何定义一个 `SetOptional` 工具类型，支持把给定的`keys`对应的属性变成可选的？对应的使用示例如下所示：

```typescript
type Foo = {
  a: number;
  b?: string;
  c: boolean;
};

// 测试用例
type SomeOptional = SetOptional<Foo, "a" | "b">;

// type SomeOptional = {
// 	a?: number; // 该属性已变成可选的
// 	b?: string; // 保持不变
// 	c: boolean;
// }
```

`SetOptional`工具类型实现：

```typescript
// 第一种 Omit + Partial + Pick
type SetOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;

// 第二种
type SetOptionalOmit<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>;
```

`SetOptional`工具类型：接收两个泛型 ，`T`为目标类型，`K` 为指定的 keys，`K` 需要 约束于`T` 类型的 `keys`，`Omit<T, K> & Partial<Pick<T, K>>`：

```typescript
/**
 * Omit 为反选的意思，
 * 以上面测试用例讲解
 * 1.首先 Omit<T,K> => Omit<Foo, 'a'| 'b'> => { c: boolean }
 * Partial<Pick<T, K>> 这里是嵌套，我们先看看 Pick<T, K>
 * 2.Pick<T, K> => Pick<Foo, 'a' | 'b'> => { a: number, b?: string } =>
 * 3.Partial<{ a: number, b?: string }> 所有变成可选 => { a?: number, b?: string }
 * 4.最后我们得到：{ c: boolean } & { a?: number, b?: string }
 * 5.合并得到之后: { a?: number, b?: string , c: boolean}
 */
```

第二种`SetOptionalOmit`的意思 和第一种差不多理解为上面的步骤是：`2 -> 1 -> 3 -> 4 -> 5`。

在实现`SetOptional`工具类型之后，感兴趣还可以实现一个 `SetRequired`工具类型，把给指定的 keys 对应属性变成必填。

实现`SetRequired`工具方法：

```typescript
// 第一种
type SetRequired<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

// 第二种
type SetRequiredOmit<T, K extends keyof T> = Pick<T, K> & Required<Omit<T, K>>;
```

`Required`工具类型，就是把所有接口类型属性变成必选。

## 第四题

`Pick<T, K extends keyof T>`的作用是将某个类型中的子属性挑出来，变成包含这个类型部分属性的子类型。

```typescript
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">;

const todo: TodoPreview = {
  title: "Clean room",
  completed: false,
};
```

那么如何定义一个 `ConditionalPick`工具类型，支持根据指定的 Condition 条件来生成新的类型，对应的使用示例如下：

```typescript
interface Example {
  a: string;
  b: string | number;
  c: () => void;
  d: {};
}

// 测试用例：
type StringKeysOnly = ConditionalPick<Example, string>;
//=> {a: string}
```

实现`ConditionalPick`工具类型方法：

```typescript
type ConditionalPick<V, T> = {
  [K in keyof V as V[K] extends T ? K : never]: V[K];
};
```

1、`in keyof`遍历 `V` 泛型；

2、通过类型断言判断 `V[K]` 对应键值是否约束于传入的 `string`如果是 `true `那么断言成返回遍历的当前 `K`，否则为 `never`。

返回 `never `在 TypeScript 编译器中，会默认认为这是个用不存在的类型，也相当于没有这个 `K `会被过滤，对应值则是 `V[K]` 获取。

像 TypeScript 内部工具实现工具方法 `Extract、Exclude` 也是通过返回`never`来排除。

```typescript
type Extract<T, U> = T extends U ? T : never;

type Exclude<T, U> = T extends U ? never : T;
```

## 第五题

定义一个工具类型 `AppendArgument`，为已有的函数类型增加指定类型的参数，新增的参数名是`x`，将作为新函数类型的第一个参数。具体的使用示例如下所示：

```typescript
type Fn = (a: number, b: string) => number
type AppendArgument<F, A> = // 你的实现代码

type FinalFn = AppendArgument<Fn, boolean>
// (x: boolean, a: number, b: string) => number
```

1. 使用 `Parameters`+ `ReturnType`工具类型实现：

```typescript
type Fn = (a: number, b: string) => number;

type AppendArgument<F extends (...args: any) => any, T> = (
  x: T,
  ...args: Parameters<F>
) => ReturnType<F>;

type FinalFn = AppendArgument<Fn, string>;
// type FinalFn = (x: string, a: number, b: string) => number
```

`AppendArgument`工具类型中

1、泛型` F` 为需要增加参数`x` 的函数类型，`F` 约束于函数类型，泛型`T`为`x`参数指定的类型，返回一个新函数类型，

2、`x`参数类型为 `T`，`...args`剩余参数类型使用`Parameters`工具类型拿到`F`泛型的数组类型参数类型，`ReturnType`工具类型拿到`F`函数类型的返回类型。

1. 使用`infer`方式

```typescript
type AppendArgument<F extends (...args: any) => any, T> = F extends (
  ...args: infer P
) => infer Return
  ? (x: T, ...args: P) => Return
  : never;

type FinalFn = AppendArgument<Fn, boolean>;
// type FinalFn = (x: boolean, a: number, b: string) => number
```

`infer`推导拿到参数类型`P`返回值类型为`Return`，再从新返回一个新函数`x`参数为`T`，`...args`参数类型为前面推导保留的`P`，返回值即`Return`。

## 第六题

定义一个`NativeFlat`工具类型，支持把数组类型拍平（扁平化）。具体的使用示例如下所示：

```typescript
type NaiveFlat<T extends any[]> = // 你的实现代码

// 测试用例：
type NaiveResult = NaiveFlat<[['a'], [['b', 'c']], ['d']]>

// NaiveResult的结果： "a" | "b" | "c" | "d"
```

使用递归写法：

```typescript
type NaiveFlat<T extends any[]> = T extends (infer P)[]
  ? P extends any[]
    ? NaiveFlat<P>
    : P
  : never;

type NaiveResult = NaiveFlat<[["a"], [["b", "c"]], ["d"]]>;
// type NaiveResult = "a" | "b" | "c" | "d"
```

上面`NaiveFlat`实现方式

1、首先需要在约束条件中使用`infer`关键字推导出 `T` 传入的数组类型，并用 `P` 保存数组类型。

2、三元嵌套判断`P`类型是否约束于类型`any[]`如果还是是数组继续递归遍历调用`NaiveFlat<P>`并传入`P`，放 `P`类型不满足 `any[]`，返回最后的扁平完成`P`类型所以得到最终联合类型`"a" | "b" | "c" | "d"` 。

个人步骤流程理解：

以传入`[['a'], [['b', 'c']], ['d']]`值为例

1、第一次得到的`P`被推断出的类型为 `["a"] | [["b", "c"]] | ["d"]`，满足约束;

2、走到`P`是否约束`any[]`，此时还满足还存在数组情况， 因此继续递归传入 `P`；

3、第二次`infer P`推导出`P`的类型为 `"a" | ["b", "c"] | "d"`，再次约束，此时在`extends`条件语句中，联合类型为裸类型时，会被分发，先走`'a'`逻辑，不满足与`any[]`返回`'a'`；

4、走完`'a'`就走到`['b', 'c']`，即满足`any[]`继续递归，返回得到 =>'a' | 'b' | 'c'；

5、最后走`'d'`,最终得到 => 'a' | 'b' | 'c' | 'd'。

另外如果是固定二维数组的话，可以试试这样：

```typescript
type NaiveFlat<T extends any[]> = T[number][number];

const testArr = [['a'], ['b', 'c'], ['d']];

const testArrType = typeof testArr; // string[][]
type NaiveResult = NaiveFlat<[['a'], ['b', 'c'], ['d']]>;
// type NaiveResult = "a" | "b" | "c" | "d"
[number]
 取数组的中值作为 key, number 是数组下标
 ["a"] | ["b", "c"] | ["d"]
```

`T[number][number]`可以理解为 => `T[][]`一个二维数组的类型表达式，类型`[number]`在 TypeScript 中，可以代表取数组的中值作为 `key`, `number`是数组下标。因此`T[number]`对应着`["a"] | ["b", "c"] | ["d"]`，`T[number][number]`则为 `"a" | "b" | "c" | "d"`。

## 第七题

使用类型别名定义一个`EmptyObject`类型，使得该类型只允许空对象赋值：

```typescript
type EmptyObject = {};

// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = {
  // 将出现编译错误
  prop: "TS",
};
```

`EmptyObject`工具类型实现:

```typescript
type EmptyObject = {
  [K in keyof any]: never;
};

// 测试用例
const shouldPass: EmptyObject = {}; // 可以正常赋值
const shouldFail: EmptyObject = {
  // 将出现编译错误
  prop: "TS",
};
```

`EmptyObject`类型中`[K in keyof any]` 等同于`[K in string | number | symbol]`，将所有对象属性对应类型设置为`never`。

注意的是对象的索引类型是`string | number | symbol`。

在通过 `EmptyObject`类型的测试用例检测后， 我们来更改以下 `takeSomeTypeOnly`函数的类型定义 让它的参数只允许严格`SomeType`类型的值。具体的使用示例如下所示：

```typescript
type SomeType = {
  prop: string;
};

// 更改以下函数的类型定义，让它的参数只允许严格SomeType类型的值
function takeSomeTypeOnly(x: SomeType) {
  return x;
}

// 测试用例：
const x = { prop: "a" };
takeSomeTypeOnly(x); // 可以正常调用

const y = { prop: "a", addditionalProp: "x" };
takeSomeTypeOnly(y); // 将出现编译错误
```

具体实现：

```typescript
type Exclusive<T1, T2> = {
  [K in keyof T1]: K extends keyof T2 ? T1[K] : never;
};

function takeSomeTypeOnly<T extends SomeType>(x: Exclusive<SomeType, T>) {
  return x;
}

takeSomeTypeOnly({ prop: "a" }); // OK

takeSomeTypeOnly({ prop: "a", addditionalProp: "x" }); // 将出现编译错误
```

遍历`SomeType`类型，只留下`SomeType`类型与传入的参数类型`T`中共有的属性，共有的属性类型拿的是`SomeType`对应的属性类型。不共有的设置为`never`排除，也就是将`prop`之外的其他属性气去除。

## 第八题

定义`NonEmptyArray`工具类型，用于确保数据非空数组。

```typescript
type NonEmptyArray<T> = // 你的实现代码

const a: NonEmptyArray<string> = [] // 将出现编译错误
const b: NonEmptyArray<string> = ['Hello TS'] // 非空数据，正常使用
```

`NonEmptyArray`工具类型实现：

```typescript
type NonEmptyArray<T> = [T, ...T[]];

const a: NonEmptyArray<string> = []; // Error
const b: NonEmptyArray<string> = ["Hello TS"]; // OK
```

`[T, ...T[]]`确保第一项一定是`T`，`[...T[]]`，为剩余数组类型。

## 第九题

定义一个`JoinStrArray`工具类型，用于根据指定的`Separator`分隔符，对字符串数组类型进行拼接。具体的使用示例如下所示：

```typescript
type JoinStrArray<Arr extends string[], Separator extends string> = // 你的实现代码

// 测试用例
type Names = ["Sem", "Lolo", "Kaquko"]
type NamesComma = JoinStrArray<Names, ","> // "Sem,Lolo,Kaquko"
type NamesSpace = JoinStrArray<Names, " "> // "Sem Lolo Kaquko"
type NamesStars = JoinStrArray<Names, "⭐️"> // "Sem⭐️Lolo⭐️Kaquko"
```

`JoinStrArray`工具类型实现：

```typescript
type JoinStrArray<
  Arr extends string[],
  Separator extends string
> = Arr extends [infer A, ...infer B]
  ? `${A extends string ? A : ""}${B extends [string, ...string[]]
      ? `${Separator}${JoinStrArray<B, Separator>}`
      : ""}`
  : "";
```

`JoinStrArray`工具方法，`Arr`泛型必须约束于`string[]`类型，`Separator`为分隔符，也必须约束于`string`类型；

1、首先`Arr`约束于后面`[infer A, ...infer B]`并通过`infer`关键字推导拿到第一个索引`A`的类型，以及剩余（rest）数组的类型为`B`；

2、如果满足约束，则连接字符，连接字符使用模板变量，先判断`A`（也就是第一个索引）是否约束于`string`类型，满足就取第一个`A`否则直接返回空字符串；

3、后面连接的`B`（...rest）判断是否满足于`[string, ...string[]]`，意思就是是不是还有多个索引。如果有，用分割符号，加上递归再调用`JoinStrArray`工具类型方法，`Arr`泛型就再为 B ，分隔符泛型`Separator`不变。减治思想，拿出数组的每一项，直至数组为空。

最开始的话，如果`Arr`不满足约束，那么直接返回为空字符串。

## 第十题

实现一个`Trim`工具类型，用于对字符串字面量类型进行去空格处理。具体的使用示例如下所示：

```typescript
type Trim<V extends string> = // 你的实现代码
  // 测试用例
  Trim<" semlinker ">;
//=> 'semlinker'
```

`Trim`工具类型实现：

```typescript
type TrimLeft<V extends string> = V extends ` ${infer R}` ? TrimLeft<R> : V;
type TrimRight<V extends string> = V extends `${infer R} ` ? TrimRight<R> : V;

type Trim<V extends string> = TrimLeft<TrimRight<V>>;

// 测试用例
type Result = Trim<" semlinker ">;
//=> 'semlinker'
```

利用 ts 模板字符串，配合`infer`去除空格。

需要定义两个工具类型方法，`Trim`分解成`TrimLeft `和 `TrimRight`，一个是去除左边空格的，另一个去除右边。

去除空格主要通过`extends`配合`infer`在模板字符串中使用，并且，如果去除左边空格，需要在左边添加一个**空格（**` ${infer R}`**），**之后就是映射类型可以递归。

## 第十一题

实现一个`IsEqual`工具类型，用于比较两个类型是否相等。具体的使用示例如下所示：

```typescript
type IsEqual<A, B> = // 你的实现代码

// 测试用例
type E0 = IsEqual<1, 2>; // false
type E1 = IsEqual<{ a: 1 }, { a: 1 }> // true
type E2 = IsEqual<[1], []>; // false
```

`IsEqual`工具类型实现：

```typescript
type IsEqual<A, B> = [A] extends [B] ? ([B] extends [A] ? true : false) : false;
```

这里需要考虑`never`类型和联合类型，所以用到元组进行处理比较。

`IsEqual`工具类型，如果`[A]`约束于`[B]`且`[B]`也满足约束于`[A]`说明他们相等，否则不相等。

## 第十二题

实现一个`Head`工具类型，用于获取数组类型的第一个类型。具体的使用示例如下所示：

```typescript
type Head<T extends Array<any>> = // 你的实现代码

// 测试用例
type H0 = Head<[]> // never
type H1 = Head<[1]> // 1
type H2 = Head<[3, 2]> // 3
```

`Head`工具类型实现：

```typescript
type Head1<T extends Array<any>> = T extends [infer H, ...T[]] ? H : never;

// 测试用例
type H0 = Head<[]>; // never
type H1 = Head<[1]>; // 1
type H2 = Head<[3, 2]>; // 3
type H3 = Head<["a", "b", "c"]>; // "a"
type H4 = Head<[undefined, "b", "c"]>; // undefined
type H5 = Head<[null, "b", "c"]>; // null
```

通过`infer`关键字推导取出数组第一项的类型，`H`保存该类型，如果泛型`T`满足约束，返回推导的第一项类型`H`，否则`never`，`...T[]`取出剩余数组。

## 第十三题

实现一个`Tail`工具类型，用于获取数组类型除了第一个类型外，剩余的类型。具体的使用示例如下所示：

```typescript
type Tail<T extends Array<any>> =  // 你的实现代码

// 测试用例
type T0 = Tail<[]> // []
type T1 = Tail<[1, 2]> // [2]
type T2 = Tail<[1, 2, 3, 4, 5]> // [2, 3, 4, 5]
```

`Tail`工具类型实现：

```typescript
type Tail1<T extends Array<any>> = T extends [infer H, ...infer R] ? R : never;

// 测试用例
type T0 = Tail<[]>; // []
type T1 = Tail<[1, 2]>; // [2]
type T2 = Tail<[1, 2, 3, 4, 5]>; // [2, 3, 4, 5]
```

实现方式与**第十二题**类似。

## 第十四题

实现一个`Unshift`工具类型，用于把指定类型`E`作为第一个元素添加到 T 数组类型中。具体的使用示例如下所示：

```typescript
type Unshift<T extends any[], E> =  // 你的实现代码

// 测试用例
type Arr0 = Unshift<[], 1>; // [1]
type Arr1 = Unshift<[1, 2, 3], 0>; // [0, 1, 2, 3]
```

`Unshift`实现方法：

```typescript
type Unshift<T extends any[], E> = [E, ...T];

// 测试用例
type Arr0 = Unshift<[], never>; // [1]
type Arr1 = Unshift<[1, 2, 3], 0>; // [0, 1, 2, 3]
```

新建一个数组，第一项类型为`E`，剩余使用`...T`连接。

## 第十五题

实现一个`Shift`工具类型，用于移除`T`数组类型中的第一个类型。具体的使用示例如下所示：

```typescript
type Shift<T extends any[]> = // 你的实现代码

// 测试用例
type S0 = Shift<[1, 2, 3]>
type S1 = Shift<[string,number,boolean]>
```

`Shift`工具类型实现：

```typescript
type Shift<T extends any[]> = T extends [infer A, ...infer B] ? B : [];

// 测试用例
type S0 = Shift<[1, 2, 3]>; // [2, 3]
type S1 = Shift<[string, number, boolean]>; // [number, boolean]
type S2 = Shift<[never]>; // []
```

`...infer B`去除第一项之后的集合，使用变量`B`保存该类型。如果满足约束，返回剩余参数类型，也就是`B`。

## 第十六题

实现一个`Push`工具类型，用于把指定类型`E`作为第最后一个元素添加到`T`数组类型中。具体的使用示例如下所示：

```typescript
type Push<T extends any[], V> = // 你的实现代码

// 测试用例
type Arr0 = Push<[], 1> // [1]
type Arr1 = Push<[1, 2, 3], 4> // [1, 2, 3, 4]
```

`Push`实现：

```typescript
type Push<T extends any[], V> = [...T, V]; // 你的实现代码

// 测试用例
type Arr0 = Push<[], 1>; // [1]
type Arr1 = Push<[1, 2, 3], 4>; // [1, 2, 3, 4]
```

`Push`工具类型的实现与**第十四题**`Unshift`实现类似。

## 第十七题

实现一个`Includes`工具类型，用于判断指定的类型`E`是否包含在`T`数组类型中。具体的使用示例如下所示：

```typescript
type Includes<T extends Array<any>, E> = // 你的实现代码

type I0 = Includes<[], 1> // false
type I1 = Includes<[2, 2, 3, 1], 2> // true
type I2 = Includes<[2, 3, 3, 1], 1> // true
```

`Includes`工具类型实现：

```typescript
type Includes<T extends any[], U> = U extends T[number] ? true : false;

// 测试用例
type I0 = Includes<[], 1>; // false
type I1 = Includes<[2, 2, 3, 1], 2>; // true
type I2 = Includes<[2, 3, 3, 1], 1>; // true
```

这里`T[number]`可以理解返回`T`数组元素的类型，比如传入的泛型`T`为`[2, 2, 3, 1]`，那么`T[number]`被解析为：`2 | 2 | 3 | 1`。

## 第十八题

实现一个`UnionToIntersection`工具类型，用于把联合类型转换为交叉类型。具体的使用示例如下所示：

```typescript
type UnionToIntersection<U> = // 你的实现代码

// 测试用例
type U0 = UnionToIntersection<string | number> // never
type U1 = UnionToIntersection<{ name: string } | { age: number }> // { name: string; } & { age: number; }
```

`UnionToIntersection`工具类型实现：

```typescript
export type UnionToIntersection<Union> = (
  Union extends unknown ? (distributedUnion: Union) => void : never
) extends (mergedIntersection: infer Intersection) => void
  ? Intersection
  : never;

// 测试用例
type U0 = UnionToIntersection<string | number>; // never
type U1 = UnionToIntersection<{ name: string } | { age: number }>; // { name: string; } & { age: number; }
```

1、`extends unknown`始终为 true，默认进入到分发情况

2、会声明一个以`Union`为入参类型的函数类型`A`，即`(distributedUnion: Union) => void`，该函数约束于以`mergedIntersection`类型为入参的函数类型`B`，即`(mergedIntersection: infer Intersection) => void`。

3、如果函数`A`能继承函数`B`则 返回`infer Intersection`声明的`Intersection`，否则返回`never`，再利用**函数参数类型逆变**，从而实现得到的结果从联合类型到交叉类型的转变。

这里是也设计到一个知识点：**分布式条件类型，**条件类型的特性：分布式条件类型。在结合联合类型使用时（**只针对\*\***extends\***\*左边的联合类型**），分布式条件类型会被自动分发成联合类型。例如，`T extends U ? X : Y`，`T`的类型为`A | B | C`，会被解析为`(A extends U ? X : Y) | (B extends U ? X : Y) | (C extends U ? X : Y)`。

都知道`infer`声明都是只能出现在`extends`子语句中。但是，在协变的位置上，同一类型变量的多个候选类型会被推断为联合类型：

```typescript
type Foo<T> = T extends { a: infer U; b: infer U } ? U : never;
type T10 = Foo<{ a: string; b: string }>; // string
type T11 = Foo<{ a: string; b: number }>; // string | number
```

在逆变的位置上，同一个类型多个候选类型会被推断为交叉类型：

```typescript
type Bar<T> = T extends { a: (x: infer U) => void; b: (x: infer U) => void }
  ? U
  : never;
type T20 = Bar<{ a: (x: string) => void; b: (x: string) => void }>; // string
type T21 = Bar<{ a: (x: string) => void; b: (x: number) => void }>; // string & number
```

相关链接：

[有条件类型中的类型推断](https://www.tslang.cn/docs/release-notes/typescript-2.8.html)

[关于协变和逆变](https://juejin.cn/post/6844904169921314829)

## 第十九题

实现一个`OptionalKeys`工具类型，用来获取对象类型中声明的可选属性。具体的使用示例如下所示：

```typescript
type Person = {
  id: string;
  name: string;
  age: number;
  from?: string;
  speak?: string;
};

type OptionalKeys<T> = // 你的实现代码
type PersonOptionalKeys = OptionalKeys<Person> // "from" | "speak"
```

`OptionalKeys`工具类型实现：

```typescript
type OptionalKeys<T> = {
  [P in keyof T]-?: undefined extends T[P] ? P : never;
}[keyof T];

// 测试用例
type PersonOptionalKeys = OptionalKeys<Person>; // "from" | "speak"
```

例如`Peson`类型：

1、首先会遍历所有`Person`属性，`-?`字符的作用是，再完成边`extends`判断后将`T`中所有的属性都变成必须属性，为防止属性值类型`undefined`；

2、右边，判断`undefined`是否约束于当前键值，如果满足约束当前属性的类型为**键名。**

在 TypeScript 中，如果添加了可选属性，会被隐式添加一个 `undefined`类型，比如`from?`其实是`string | undefined`

3、`{ ... }[keyof T]`取键值，因为`id,age,name`的属性类型都为`never`，取值的时候会被忽略掉，因为`never`是一个用不存在的类型，因此就只剩下`from、speak`属性的值了就是 `"from" | "speak"`组成联合类型返回。

## 第二十题

实现一个`Curry`工具类型，用来实现函数类型的柯里化处理。具体的使用示例如下所示：

```typescript
type Curry<
  F extends (...args: any[]) => any,
  P extends any[] = Parameters<F>,
  R = ReturnType<F>
> = // 你的实现代码

type F0 = Curry<() => Date>; // () => Date
type F1 = Curry<(a: number) => Date>; // (arg: number) => Date
type F2 = Curry<(a: number, b: string) => Date>; //  (arg_0: number) => (b: string) => Date
```

`Curry`工具类型实现：

```typescript
type Curry<
  F extends (...args: any[]) => any,
  P extends any[] = Parameters<F>,
  R = ReturnType<F>
> = P extends [infer A, ...infer B]
  ? B extends []
    ? (arg: A) => R
    : (arg: A) => Curry<(...args: B) => R>
  : () => R;

// 测试用例
type F0 = Curry<() => Date>; // () => Date
type F1 = Curry<(a: number) => Date>; // (arg: number) => Date
type F2 = Curry<(a: number, b: string) => Date>; //  (arg_0: number) => (b: string) => Date
```

`F`为需要柯里化的函数类型；

`P`通过`Paramters`获取`F`参数集合；

`R`通过`ReturnType`获取`F`函数类型返回值；

逻辑分析：

1、需要先拿到 args 数组的第一项和剩余参数集合，`[infer A, ...infer B]`；

2、使用 extends 判断`P`是否满足于`[infer A, ...infer B]`，不满足直接返回`() => R`,说明没有参数；

3、如果有一个或者多个参数，这里则继续递归；

4、首先`...infer B`需要判断是否约束与`[]`来做终止条件；

5、满足约束直接返回`(args: A) => R`；

6、否则递归，创建一个函数，并且参数类型为`A`，返回值则为`Curry<(...args: B) => R>`，新函数入参`B`，为剩余参数类型集合，它的返回值确保最后一个返回因此保留为`R`即`(arg: A) => Curry<(...args: B) => R>`。

## 第二十一题

实现一个`Merge`工具类型，用于把两个类型合并成一个新的类型。第二种类型（SecondType）的`Keys`将会覆盖第一种类型（FirstType）的`Keys`。具体的使用示例如下所示：

```typescript
type Foo = {
   a: number;
   b: string;
};

type Bar = {
   b: number;
};

type Merge<FirstType, SecondType> = // 你的实现代码

const ab: Merge<Foo, Bar> = { a: 1, b: 2 };
```

`Merge`工具类型实现：

```typescript
interface Foo {
  b: number;
}

interface Bar {
  a: number;
  b: string;
}

type Merge<FirstType, SecondType> = {
  [K in keyof (FirstType & SecondType)]: K extends keyof SecondType
    ? SecondType[K]
    : K extends keyof FirstType
    ? FirstType[K]
    : never;
};

// 测试用例
type Obj = Merge<Foo, Bar>; // { a: number ; b: string }
```

注意的是：合并属性，后一个类型会覆盖前一个类型。

逻辑分析：

1、将`FirstType`和`SecondType`做交叉类型，并遍历他们的每一个属性；

2、如果当前的属性名在`SecondType`类型中，则使用`SecondType`类型中的当前属性值；

3、如果当前属性名在`FirstType`类型中，则使用`First`类型中的当前属性值；

4、否则为`never`。

其他解法：

结合`Omit`内置工具类型

```typescript
type Merge<FirstType, SecondType> = Omit<FirstType, keyof SecondType> &
  SecondType;
type Obj = Merge<Foo, Bar>; // { a: number ; b: string }
const ab: Obj = { a: 1, b: "1" };
```

1、先将`FirstType`类型中已有的和`SecondType`类型中相同属性删除

2、将前面结果和`SecondType`做交叉类型，得到合并后的结果。

## 第二十二题

实现一个`RequireAtLeastOne`工具类型，它将创建至少含有一个给定`Keys`的类型，其余的`Keys`保持原样。具体的使用示例如下所示：

```typescript
type Responder = {
   text?: () => string;
   json?: () => string;
   secure?: boolean;
};

type RequireAtLeastOne<
    ObjectType,
    KeysType extends keyof ObjectType = keyof ObjectType,
> = // 你的实现代码

// 表示当前类型至少包含 'text' 或 'json' 键
const responder: RequireAtLeastOne<Responder, 'text' | 'json'> = {
    json: () => '{"message": "ok"}',
    secure: true
};
```

`RequireAtLeastOne`工具类型实现：

```typescript
type RequireAtLeastOne<
  ObjectType,
  KeysType extends keyof ObjectType = keyof ObjectType
> = KeysType extends keyof ObjectType
  ? ObjectType & { [K in KeysType]-?: ObjectType[K] }
  : never;

// 表示当前类型至少包含 'text' 或 'json' 键
const responder: RequireAtLeastOne<Responder, "text" | "json"> = {
  json: () => '{"message": "ok"}',
  secure: true,
};

// @ts-expect-error 因为没有'text'和'json'中的任何一个，报错
const responder2: RequireAtLeastOne<Responder, "text" | "json"> = {
  secure: true,
};
```

1、给定的`Keys`类型需要约束于`ObjectType`；

2、如果给定的`KeysType`中的`Keys`在`ObjectType`类型里，创建一个新的类型，遍历`KeysType`作为`Key`，并且`-?`字符，将可选变为必选，值类型为`ObjectType[K]`，然后将`ObjectType`和这个创建的新的类型做交叉类型。联合类型在`extends`条件中会做分发，因此最后组成联合类型返回；

3、否则返回`never`。

## 第二十三题

实现一个`RemoveIndexSignature`工具类型，用于移除已有类型中的索引签名。具体的使用示例如下所示：

```typescript
interface Foo {
  [key: string]: any;
  [key: number]: any;
  bar(): void;
}

type RemoveIndexSignature<T> = // 你的实现代码

type FooWithOnlyBar = RemoveIndexSignature<Foo>; //{ bar: () => void; }
```

`RemoveIndexSignature`工具类型实现：

```typescript
type RemoveIndexSignature<T> = {
  [K in keyof T as string extends K
    ? never
    : number extends K
    ? never
    : K]: T[K];
};

// 测试用例
type FooWithOnlyBar = RemoveIndexSignature<Foo>; //{ bar: () => void; }
```

1、遍历`T`，利用`as`断言实现对`K`的判断过滤；

2、当前的`key`如果满足`string | number`直接返回`never`过滤当前属性；

3、否则拿当前`K`，当前`K`值类型为`T[K]`。

## 第二十四题

实现一个`Mutable`工具类型，用于移除对象类型上所有属性或部分属性的`readonly`修饰符。具体的使用示例如下所示：

```typescript
type Foo = {
  readonly a: number;
  readonly b: string;
  readonly c: boolean;
};

type Mutable<T, Keys extends keyof T = keyof T> = // 你的实现代码

const mutableFoo: Mutable<Foo, 'a'> = { a: 1, b: '2', c: true };

mutableFoo.a = 3; // OK
mutableFoo.b = '6'; // Cannot assign to 'b' because it is a read-only property.
```

`Mutale`工具类型实现：

```typescript
type Mutable<T, Keys extends keyof T = keyof T> = {
  -readonly [K in Keys]: T[K];
} & Omit<T, Keys>;

const mutableFoo: Mutable<Foo, "a"> = { a: 1, b: "2", c: true };

// 测试用例
mutableFoo.a = 3; // OK
mutableFoo.b = "6"; // Cannot assign to 'b' because it is a read-only property.
```

1、遍历`Keys`，`-readonly`删除只读符号；

2、`Omit<T, Keys>`返回删除在`T`中的`Keys`属性的新类型，最后与前面的结果组成交叉类型。

## 第二十五题

实现一个`IsUnion`工具类型，判断指定的类型是否为联合类型。具体的使用示例如下所示：

```typescript
type IsUnion<T, U = T> = // 你的实现代码

type I0 = IsUnion<string | number>; // true
type I1 = IsUnion<string | never>; // false
type I2 = IsUnion<string | unknown>; // false
```

`IsUnion`工具类型实现方法：

```typescript
type IsUnion<T, U = T> = T extends any
  ? [U] extends [T]
    ? false
    : true
  : never; // 你的实现代码

// 测试用例
type I0 = IsUnion<string | number>; // true
type I1 = IsUnion<string | never>; // false
type I2 = IsUnion<string | unknown>; // false
```

1、第一步`T extends any`确保始终为真，联合类型做分发；

2、联合类型`T`写成`[T]`就变成了普通类型，`extends`的时候不会分发执行，利用其分发的特性，后面的`[T]`就是一个联合类型拆开后的某一个，

3、因此如果是联合类型的话`[U] extends [T]`一定为否。

比如传入`string | nuber`类型会

```typescript
// 首先会被分发得到
type IsUnion<string | number, U = string | number> =
string extends ? any ? ([string | number]) extends [string] ? false : true) : never
| number extends ? ([string | number]) extends [string] ? false :true) : never
// => true | true => true


string | never 会被简化为 never
string | unknown => unknown
```

## 第二十六题

实现一个`IsNever`工具类型，判断指定的类型是否为`never`类型。具体的使用示例如下所示：

```typescript
type IsNever<T> = // 你的实现代码
type I0 = IsNever<never> // true
type I1 = IsNever<never | string> // false
type I2 = IsNever<null> // false
```

`IsNever`工具类型实现：

```typescript
type IsNever<T> = [T] extends [never] ? true : false;

// 测试用例
type II0 = IsNever<never>; // true
type II1 = IsNever<never | string>; // false
type II2 = IsNever<null>; // false
type II3 = IsNever<{}>; // false
type II4 = IsNever<[]>; // false
type II5 = IsNever<[] | never>; // false
```

1、`[T]`和`[never]`为元组，作为包装类型，联合类型不会被分发；

2、`never`类型不能扩展`never`类型，但是`never[]`可以扩展`never[]`。

## 第二十七题

实现一个`Reverse`工具类型，用于对元组类型中元素的位置颠倒，并返回该数组。元组的第一个元素会变成最后一个，最后一个元素变成第一个。

```typescript
type Reverse<
  T extends Array<any>,
  R extends Array<any> = []
> = // 你的实现代码

type R0 = Reverse<[]> // []
type R1 = Reverse<[1, 2, 3]> // [3, 2, 1]
```

`Reverse`工具类型实现：

```typescript
type Reverse<T extends Array<any>> = T extends [infer First, ...infer Rest]
  ? [...Reverse<Rest>, First]
  : [];

// 测试用例
type R0 = Reverse<[]>; // []
type R1 = Reverse<[1, 2, 3]>; // [3, 2, 1]
type R2 = Reverse<[1, 2, 3, 4, 5]>; //  [5, 4, 3, 2, 1]
```

采用递归方式，每次递归都把第一项`First`放在最后，并把递归结果展开。

## 第二十八题

实现一个`Split`工具类型，根据给定的分隔符（Delimiter）对包含分隔符的字符串进行切割。可用于定义 `String.prototype.split`方法的返回值类型。具体的使用示例如下所示：

```typescript
type Item = 'semlinker,lolo,kakuqo';

type Split<
	S extends string,
	Delimiter extends string,
> = // 你的实现代码

type ElementType = Split<Item, ','>; // ["semlinker", "lolo", "kakuqo"]
```

`Split`工具类型实现：

```typescript
type Item = "semlinker,lolo,kakuqo";

export type Split<
  S extends string,
  Delimiter extends string
> = S extends `${infer Head}${Delimiter}${infer Tail}`
  ? [Head, ...Split<Tail, Delimiter>]
  : S extends Delimiter
  ? []
  : [S];

// 测试用例
type ElementType = Split<Item, ",">; // ["semlinker", "lolo", "kakuqo"]
type ElementType2 = Split<"a|b|c||d", "|">; // ["a", "b", "c", "", "d"]
type ElementType3 = Split<"abcdef", "">; // ["a", "b", "c", "d", "e", "f"]
```

1、`${infer Head}${Delimiter}${infer Tail}`映射类型在模板变量中使用，将一个字符串做拆解;

2、第一步会变成`${infer "semlinker"}${,}${infer "lolo,kakuqo"}`，减治思想，再递归依次取第二位，直至递归到`Delimiter`符号的最后一项，`S extends Delimiter`处理`Delimiter`为空格的情况。

## 第二十九题

实现一个`ToPath`工具类型，用于把属性访问（`.`或 `[]`）路径转换为元组的形式。具体的使用示例如下所示：

```typescript
type ToPath<S extends string> = // 你的实现代码

ToPath<'foo.bar.baz'> //=> ['foo', 'bar', 'baz']
ToPath<'foo[0].bar.baz'> //=> ['foo', '0', 'bar', 'baz']
```

`ToPath`工具类型实现：

```typescript
//以 . 拆分，处理每一项
type IndexSignature<T> = T extends `${infer H}[${infer M}][${infer R}]`
  ? [H, M, ...IndexSignature<`[${R}]`>]
  : T extends `${infer F}[${infer L}]`
  ? [F, L]
  : [T];

// 验证数组是否有 ''
type NonSpace<T extends string[]> = T extends [infer H, ...infer R]
  ? R extends string[]
    ? H extends ""
      ? [...NonSpace<R>]
      : [H, ...NonSpace<R>]
    : never
  : T;

// NonSpace 和 IndexSignature 组合起来
type ToPath<S extends string> = S extends `${infer H}.${infer R}`
  ? [...NonSpace<IndexSignature<H>>, ...ToPath<R>]
  : NonSpace<IndexSignature<S>>;

// 测试用例
type TT0 = ToPath<"foo.bar.baz">; //=> ['foo', 'bar', 'baz']
type TT1 = ToPath<"foo[0].bar[0][1][2][3].car">; // => ["foo", "0", "bar", "0", "1", "2", "3", "car"]
```

1、`IndexSignature`工具类型处理以`.`为拆分，并递归将每一项的子项放入到元组中；

2、`IndexSignature`处理比如完`foo[0][1]`会得到` =>``["foo", "0", "", "1"] `；

3、`NonSpace`处理`IndexSignature`工具类型返回值数组中的空字符串；

4、`ToPath`以分隔符`.`拆分字符串，多项则拼接并递归，否则直接处理并返回。

## 第三十题

完善`Chainable`类型的定义，使得 TS 能成功推断出`result`变量的类型。调用`option`方法之后会不断扩展当前对象的类型，使得调用`get`方法后能获取正确的类型。

```typescript
declare const config: Chainable;

type Chainable = {
  option(key: string, value: any): any;
  get(): any;
};

const result = config
  .option("age", 7)
  .option("name", "lolo")
  .option("address", { value: "XiaMen" })
  .get();

type ResultType = typeof result;
// 期望 ResultType 的类型是：
// {
//   age: number
//   name: string
//   address: {
//     value: string
//   }
// }
```

`Chainable`类型实现：

```typescript
declare const config: Chainable;

type Simplify<T> = {
  [P in keyof T]: T[P];
};

type Chainable<T = {}> = {
  option<V, S extends string>(
    key: S,
    value: V
  ): Chainable<
    T & {
      [P in keyof { S: S } as `${S}`]: V;
    }
  >;
  get(): Simplify<T>;
};

const result = config
  .option("age", 7)
  .option("address", { name: "Leslie" })
  .get();

type ResultType = typeof result;
// => {
//   age: number;
//   address: {
//       name: string;
//   };
// }
```

`config`可以进行链式调用，可以联想到 js 中`return this`这种思路，所以这里`opiton`的返回值就应该是一个新的`Chainable`，把添加的属性类型当做下一个`Chainable`的`T`。

1、`Chainable`类型定义中的`option`返回值类型为新的`Chainable`，将添加的属性当做下一个`Chainable`的`T`；

2、`get`类型直接就返回`Chainable`中的`T`。

## 第三十一题

实现一个`Repeat`工具类型，用于根据类型变量`C`的值，重复`T`类型并以元组的形式返回新的类型。具体的使用示例如下所示：

```typescript
type Repeat<T, C extends number> = // 你的实现代码

type R0 = Repeat<0, 0>; // []
type R1 = Repeat<1, 1>; // [1]
type R2 = Repeat<number, 2>; // [number, number]
```

`Repeat`工具类型实现：

```typescript
type Repeat<T, C extends number, A extends any[] = []> = A["length"] extends C
  ? A
  : Repeat<T, C, [...A, T]>;

// 测试用例
type R0 = Repeat<0, 0>; // []
type R1 = Repeat<1, 1>; // [1]
type R2 = Repeat<number, 2>; // [number, number]
```

1、`A`为接收根据`C`数量，重复`T`类型以元组形式返回的新类型；

2、判断`A`的数组长度是否满足`C`；

3、不满足则继续往里面添加需要重复的`T`类型；

4、否则返回添加完成的`A`类型结果。

## 第三十二题

实现一个`RepeatString`工具类型，用于根据类型变量`C`的值，重复`T`类型并以字符串的形式返回新的类型。具体的使用示例如下所示：

```typescript
type RepeatString<
  T extends string,
  C extends number,
> = // 你的实现代码

// 测试用例
type S0 = RepeatString<"a", 0>; // ''
type S1 = RepeatString<"a", 2>; // 'aa'
type S2 = RepeatString<"ab", 3>; // 'ababab'
```

`RepeatString`工具类型实现：

```typescript
type RepeatString<
  T extends string,
  C extends number,
  A extends any[] = [],
  S extends string = ""
> = A["length"] extends C ? A : RepeatString<T, C, [...A, T], `${S}${T}`>;

// 测试用例
type RS0 = RepeatString<"a", 0>; // ''
type RS1 = RepeatString<"a", 2>; // 'aa'
type RS2 = RepeatString<"ab", 3>; // 'ababab'
```

与**三十一题**类似，多添加了一个返回最终的结果的`S`类型，`A`记录添加的数量。

## 第三十三题

实现一个`ToNumber`工具类型，用于实现把数值字符串类型转换为数值类型。具体的使用示例如下所示：

```typescript
type ToNumber<T extends string> = // 你的实现代码

type T0 = ToNumber<"0">; // 0
type T1 = ToNumber<"10">; // 10
type T2 = ToNumber<"20">; // 20
```

`ToNumber`工具类型实现：

```typescript
type ToNumber<
  T extends string,
  S extends any[] = [],
  L extends number = S["length"]
> = `${L}` extends T ? L : ToNumber<T, [...S, ""]>;
```

在 TypeScript 中没有直接的数字运算，但是可以通过数组长度转字符串再匹配需要字符串转换的字符串。

1、`S`类型为累加记录，`L`获取`S`的数组类型长度；

2、判断`${L}`是否满足约束`T`，不满足则，继续添加`''`空字符串，作为长度累加。

## 第三十四题

实现一个`SmallerThan`工具类型，用于比较数值类型的大小。具体的使用示例如下所示：

```typescript
type SmallerThan<
  N extends number,
  M extends number,
> = // 你的实现代码

// 测试用例
type S0 = SmallerThan<0, 1>; // true
type S1 = SmallerThan<2, 0>; // false
type S2 = SmallerThan<8, 10>; // true
```

`SmallerThan`工具类型实现：

```typescript
type SmallerThan<
  N extends number,
  M extends number,
  A extends any[] = []
> = A["length"] extends M //=> M = 0 直接返回 false  1 => extends 2 ? false
  ? false
  : A["length"] extends N // => if M = 1，那么 N 应该就是 0， so M > N => 1 extends 1 true
  ? true
  : SmallerThan<N, M, [...A, ""]>; // 否则 A length + 1

// 测试用例
type ST1 = SmallerThan<0, 0>; // false
type ST2 = SmallerThan2<1, 2>; // true
```

这里利用构造数组的长度来判断，默认是一个空数组进行递增，哪个先匹配上说明哪个小。

例如给`N, M`传入 `0, 0`：

1、默认从空数组进行递增，第一遍`A['length']`数组的长度为`0`，`0 extends 0`为`true`，也就是，当`M`为`0`，说明要么`M===N`，要么就`N > M`，因此返回`**false**`。

再例如给`N, M`传入`1, 2`：

1、第一遍我们直接跳过，会走到递归，第二遍得到`A['length'] = 1`；

2、第二遍：`1 extends 2`不约束说明`M >= N`，走到否则`1 extends 1`满足约束说明`M > N`，最后得到结果为`**true**`。

## 第三十五题

实现一个`Add`工具类型，用于实现对数值类型对应的数值进行加法运算。具体的使用示例如下所示：

```typescript
type Add<T, R> = // 你的实现代码

type A0 = Add<5, 5>; // 10
type A1 = Add<8, 20> // 28
type A2 = Add<10, 30>; // 40
```

`Add`工具类型实现：

```typescript
type GenArr<N extends number, S extends any[] = []> = S["length"] extends N
  ? S
  : GenArr<N, [...S, ""]>;

type Add<N extends number, M extends number> = [
  ...GenArr<N>,
  ...GenArr<M>
]["length"];

// 测试用例
type Add1 = Add<1, 2>; // 3
type Add2 = Add<100, 2>; // 102
```

经过上面几道题洗礼，这到相加就很简单了，就是构建对应数值长度的数组。

`GenArr`工具类型通过数值构建对应长度数组。

## 第三十六题

实现一个`Filter`工具类型，用于根据类型变量`F`的值进行类型过滤。具体的使用示例如下所示：

```typescript
type Filter<T extends any[], F> = // 你的实现代码

type F0 = Filter<[6, "lolo", 7, "semlinker", false], number>; // [6, 7]
type F1 = Filter<["kakuqo", 2, ["ts"], "lolo"], string>; // ["kakuqo", "lolo"]
type F2 = Filter<[0, true, any, "abao"], string>; // [any, "abao"]
```

`Filter`工具类型实现：

```typescript
type Filter<T extends any[], F, R extends any[] = []> = T extends [
  infer A,
  ...infer B
]
  ? [A] extends [F]
    ? Filter<B, F, [...R, A]>
    : Filter<B, F, R>
  : R;

// 测试用例
type F0 = Filter<[6, "lolo", 7, "semlinker", false], number>; // [6, 7]
type F1 = Filter<["kakuqo", 2, ["ts"], "lolo"], string>; // ["kakuqo", "lolo"]
type F2 = Filter<[0, true, any, "abao"], string>; // [any, "abao"]
type F3 = Filter<[never, number | string, any, "abao"], string>; // [never, any, "abao"]
```

1、`R`为根据类型变量`F`的值进行类型过滤后的结果；

2、首先利用`extends [infer A, ...infer B]`来提取数组内的第一项，递归就能拿到全部；

3、之后判断类型的时候转换成元组类型`[A] extends [F]`能够避免联合类型在条件判断中分发执行的情况。

## 第三十七题

实现一个`Flat`工具类型，支持把数组类型拍平（扁平化）。具体的使用示例如下所示：

```typescript
type Flat<T extends any[]> = // 你的实现代码

type F0 = Flat<[]> // []
type F1 = Flat<['a', 'b', 'c']> // ["a", "b", "c"]
type F2 = Flat<['a', ['b', 'c'], ['d', ['e', ['f']]]]> // ["a", "b", "c", "d", "e", "f"]
```

`Flat`工具类型实现：

```typescript
type Flat<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...Flat<First>, ...Flat<Rest>]
    : [First, ...Flat<Rest>]
  : [];

//测试用例
type F1 = Flat<[[1, 2, 3, 4, [5]], 6]>; // [1,2,3,4,5,6]
type F2 = Flat<["a", ["b", "c"], ["d", ["e", ["f"]]]]>; // ["a", "b", "c", "d", "e", "f"]
```

1、`[infer First, ...infer Rest]`提取数组第一项

2、如果`T`为多项，第一项`First`判断是否还是数组，扁平多维数组情况，如果是，继续递归将`Frist`扁平，以及递归将`Rest`也扁平，否则`First`不是多为数组，递归`Rest`并扁平。

3、如果空数组，直接返回`[]`。

## 第三十八题

实现`StartsWith`工具类型，判断字符串字面量类型`T`是否以给定的字符串字面量类型`U`**开头**，并根据判断结果返回布尔值。具体的使用示例如下所示：

```typescript
type StartsWith<T extends string, U extends string> = // 你的实现代码

type S0 = StartsWith<'123', '12'> // true
type S1 = StartsWith<'123', '13'> // false
type S2 = StartsWith<'123', '1234'> // false
```

此外，继续实现`EndsWith`工具类型，判断字符串字面量类型`T`是否以给定的字符串字面量类型`U`**结尾**，并根据判断结果返回布尔值。具体的使用示例如下所示：

```typescript
type EndsWith<T extends string, U extends string> = // 你的实现代码

type E0 = EndsWith<'123', '23'> // true
type E1 = EndsWith<'123', '13'> // false
type E2 = EndsWith<'123', '123'> // true
```

`StartsWith`工具类型实现：

```typescript
type StartsWith<
  T extends string,
  U extends string
> = T extends `${U}${infer Rest}` ? true : false;

// 测试用例
type S0 = StartsWith<"123", "12">; // true
type S1 = StartsWith<"123", "13">; // false
type S2 = StartsWith<"123", "1234">; // false
```

`${U}${infer Rest}`将`U`放在开头，`infer`关键字，会自动推导匹配，如果推导的`Rest`变量类型满足约束则返回`true`否则返回`false`。

`EndsWith`工具类型实现：

```typescript
type EndsWith<
  T extends string,
  U extends string
> = T extends `${infer Head}${U}` ? true : false;

// 测试用例
type E0 = EndsWith<"123", "23">; // true
type E1 = EndsWith<"123", "13">; // true
type E2 = EndsWith<"123", "123">; // true
```

`${infer Head}${U}`位置调换即可。与去除左边空格右边空格题目类型逻辑。

## 第三十九题

实现`IsAny`工具类型，用于判断类型`T`是否为`any`类型。具体的使用示例如下所示：

```typescript
type IsAny<T> = // 你的实现代码

type I0 = IsAny<never> // false
type I1 = IsAny<unknown> // false
type I2 = IsAny<any> // true
```

`IsAny`工具类型实现：

```typescript
type IsAny<T> = 0 extends 1 & T ? true : false;

type I0 = IsAny<never>; // false
type I1 = IsAny<unknown>; // false
type I2 = IsAny<any>; // true
```

利用任何类型与`any`交叉都等于`any`实现

`any`类型是个 ”黑洞“ 会吞噬除了`never`类型之外的大多数类型。

```typescript
type A0 = any & 1; // any
type A1 = any & boolean; // any
type A2 = any & never; // never
```

因此需要前置`0 extends 交叉结果`防止交叉结果为`never`类型的情况处理。

## 第四十题

实现`AnyOf`工具类型，只要数组中任意元素的类型非 [Falsy](https://developer.mozilla.org/zh-CN/docs/Glossary/Falsy) 类型、`{}`类型或`[]`类型，则返回`true`，否则返回`false`。如果数组为空的话，则返回`false`。具体的使用示例如下所示：

```typescript
type AnyOf<T extends any[]> = // 你的实现代码

type A0 = AnyOf<[]>; // false
type A1 = AnyOf<[0, '', false, [], {}]> // false
type A2 = AnyOf<[1, "", false, [], {}]> // true
```

`AnyOf`工具类型实现：

```typescript
type NotEmptyObject<T> = T extends {} ? ({} extends T ? false : true) : true;
type Flasy = 0 | '' | false | [];
type AnyOf<T extends any[]> = T extends [infer First, ...infer Rest]
  ? [First] extends [Flasy]
    ? AnyOf<Rest>
    : NotEmptyObject<First>
  : false;

type A0 = AnyOf<[]>; // false
type A1 = AnyOf<[0, '', false, [], {}]>; // false
type A2 = AnyOf<[1, '', false, [], {}]>; // true
type A3 = AnyOf<[0, '' | 2, false, [], {}]>; // true
非 Falsy 类型、 {} 类型或 [] 类型
```

`NotEmptyObject`工具类型判断是否为空对象`{}`，如果是直接返回`false`；

`type = Flasy`定义属于`Falsy`的类型；

1、依次取出第一项，通过元组判断是否为`Falsy`类型（元组避免联合类型分发执行情况），如果当前项`First`满足`Falsy`类型则继续递归依次取出元素进行判断，否则再判断是否为空对象，如果是直接返回`false`，如果不是说明是非 `Falsy`类型、 `{}` 类型或 `[] `类型。

## 第四十一题

实现`Replace`工具类型，用于实现字符串类型的替换操作。具体的使用示例如下所示：

```typescript
type Replace<
  S extends string,
  From extends string,
  To extends string
> = // 你的实现代码

type R0 = Replace<'', '', ''> // ''
type R1 = Replace<'foobar', 'bar', 'foo'> // "foofoo"
type R2 = Replace<'foobarbar', 'bar', 'foo'> // "foofoobar"
```

此外，继续实现`ReplaceAll`工具类型，用于实现替换所有满足条件的子串。具体的使用示例如下所示：

```typescript
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = // 你的实现代码

type R0 = ReplaceAll<'', '', ''> // ''
type R1 = ReplaceAll<'barfoo', 'bar', 'foo'> // "foofoo"
type R2 = ReplaceAll<'foobarbar', 'bar', 'foo'> // "foofoofoo"
type R3 = ReplaceAll<'foobarfoobar', 'ob', 'b'> // "fobarfobar"
```

`Replace`工具类型实现：

```typescript
type Replace<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer H}${From}${infer R}` ? `${H}${To}${R}` : S;

// 测试用例
type R0 = Replace<"", "", "">; // ''
type R1 = Replace<"foobar", "bar", "foo">; // "foofoo"
type R2 = Replace<"foobarbar", "bar", "foo">; // "foofoobar"
```

1、利用`extends`，配合`infer`配合字符串模板变量的写法就能提取出指定的子字符串，再将`From`改为`To`返回结果即可。

`ReplaceAll`工具类型实现：

```typescript
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = S extends `${infer H}${From}${infer R}`
  ? `${ReplaceAll<H, From, To>}${To}${Replace<R, From, To>}`
  : S;

// 测试用例
type R0 = ReplaceAll<"", "", "">; // ''
type R1 = ReplaceAll<"barfoo", "bar", "foo">; // "foofoo"
type R2 = ReplaceAll<"foobarbar", "bar", "foo">; // "foofoofoo"
type R3 = ReplaceAll<"foobarfoobar", "ob", "b">; // "fobarfobar"
```

`ReplaceAll`工具类型取出子字符串之后利用递归。

## 第四十二题

实现`IndexOf`工具类型，用于获取数组类型中指定项的索引值。若不存在的话，则返回`-1`字面量类型。具体的使用示例如下所示：

```typescript
type IndexOf<A extends any[], Item> = // 你的实现代码

type Arr = [1, 2, 3, 4, 5]
type I0 = IndexOf<Arr, 0> // -1
type I1 = IndexOf<Arr, 1> // 0
type I2 = IndexOf<Arr, 3> // 2
```

`IndexOf`工具类型实现：

```typescript
type IndexOf<A extends any[], Item, L extends any[] = []> = A extends [
  infer F,
  ...infer R
]
  ? F extends Item
    ? L["length"]
    : IndexOf<R, Item, [...L, 1]>
  : -1;

type Arr = [1, 2, 3, 4, 5];
type I0 = IndexOf<Arr, 0>; // -1
type I1 = IndexOf<Arr, 1>; // 0
type I2 = IndexOf<Arr, 3>; // 2
```

构建数组来记录迭代到了哪一项，这样匹配到之后就能返回长度，就是索引值。

1、依次取数组的第一项与`Item`指定的值比较是否相等，找到就返回记录索引值的`L`数组；

2、找不到则继续增加`L`数组长度；

3、如果`A extends [infer F, ...infer R]`数组取完了，没有找到，直接返回`-1`。

## 第四十三题

实现一个`Permutation`工具类型，当输入一个联合类型时，返回一个包含该联合类型的全排列类型数组。具体的使用示例如下所示：

```typescript
type Permutation<T, K=T> = // 你的实现代码

// ["a", "b"] | ["b", "a"]
type P0 = Permutation<'a' | 'b'>  // ['a', 'b'] | ['b' | 'a']
// type P1 = ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"]
// | ["b", "c", "a"] | ["c", "a", "b"] | ["c", "b", "a"]
type P1 = Permutation<'a' | 'b' | 'c'>
```

`Permutation`工具类型实现：

```typescript
type Permutation<T, K = T> = [T] extends [never]
  ? []
  : K extends K
  ? [K, ...Permutation<Exclude<T, K>>]
  : never;

type P0 = Permutation<"a" | "b">; // ['a', 'b'] | ['b' | 'a']
type P1 = Permutation<"a" | "b" | "c">;
// => ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"] | ["b", "c", "a"]
// |["c", "a", "b"] | ["c", "b", "a"]
```

直接用传入`'a' | 'b' | 'c'`为例子说明：

```typescript
这里简化 Exclude 后的结果
1、
['a', ...Permutation<'b' | 'c'>] | ['b', ...Permutation<'a' | 'c'>] |
['c', ...Permutation<'a' | 'b'>]

2、
=> ...Permutation<'b' | 'c'> 递归做再次分发后
=> ['b', ...Permutation<'c'>] | ['c', ...Permutation<'b'>]
=> ['b', 'c'] | ['c', 'b']

3、再与 1 结合也就是 （...会将结果展开）
=> ['a', 'b', 'c']  |  ['a', 'c', 'b']

再反复上面的 1 2 3 步骤得到最终结果
=> type P1 = ["a", "b", "c"] | ["a", "c", "b"] | ["b", "a", "c"] | ["b", "c", "a"] |["c", "a", "b"] | ["c", "b", "a"]
```

## 第四十四题

实现`Unpacked`工具类型，用于对类型执行 “拆箱” 操作。具体的使用示例如下所示：

```typescript
type Unpacked<T> = // 你的实现代码

type T00 = Unpacked<string>;  // string
type T01 = Unpacked<string[]>;  // string
type T02 = Unpacked<() => string>;  // string
type T03 = Unpacked<Promise<string>>;  // string
type T04 = Unpacked<Unpacked<Promise<string>[]>>;  // string
type T05 = Unpacked<any>;  // any
type T06 = Unpacked<never>;  // never
```

`Unpacked`工具类型实现：

```typescript
type Unpacked<T> = T extends (infer U)[]
  ? U
  : T extends (...args: any[]) => infer U
  ? U
  : T extends Promise<infer U>
  ? U
  : T;

// 测试用例
type T00 = Unpacked<string>; // string
type T01 = Unpacked<string[]>; // string
type T02 = Unpacked<() => string>; // string
type T03 = Unpacked<Promise<string>>; // string
type T04 = Unpacked<Unpacked<Promise<string>[]>>; // string
type T05 = Unpacked<any>; // any
type T06 = Unpacked<never>; // never
```

1、`(infer U)[]`处理数组类型，并返回数组类型的具体类型；

2、`(...args: any[]) => infer U`处理函数类型，推断拿到函数的返回类型；

3、`Promise<infer U>`处理`Promise`类型，这里嵌套调用返回；

4、否则都不是上面三种类型其中一种，直接返回本身类型。

## 第四十五题

实现`JsonifiedObject`工具类型，用于对`object`对象类型进行序列化操作。具体的使用示例如下所示：

```typescript
type JsonifiedObject<T extends object> = // 你的实现代码

type MyObject = {
  str: "literalstring",
  fn: () => void,
  date: Date,
  customClass: MyClass,
  obj: {
    prop: "property",
    clz: MyClass,
    nested: { attr: Date }
  },
}

declare class MyClass {
  toJSON(): "MyClass";
}

/**
 * type JsonifiedMyObject = {
 *  str: "literalstring";
 *  fn: never;
 *  date: string;
 *  customClass: "MyClass";
 *  obj: JsonifiedObject<{
 *    prop: "property";
 *    clz: MyClass;
 *    nested: {
 *      attr: Date;
 *    };
 *   }>;
 * }
*/
type JsonifiedMyObject = Jsonified<MyObject>;
declare let ex: JsonifiedMyObject;
const z1: "MyClass" = ex.customClass;
const z2: string = ex.obj.nested.attr;
```

`JsonifiedObject`工具类型实现：

```typescript
type JsonifiedObject<T extends object> = {
  [K in keyof T]: T[K] extends { toJSON(): infer Return }
    ? ReturnType<T[K]["toJSON"]>
    : T[K] extends (...args: any[]) => any
    ? never
    : T[K] extends object
    ? JsonifiedObject<T[K]>
    : T[K];
};

declare class MyClass {
  toJSON(): "MyClass";
}

type MyObject = {
  str: "literalstring";
  fn: () => void;
  date: Date;
  customClass: MyClass;
  obj: {
    prop: "property";
    clz: MyClass;
    nested: { attr: Date };
  };
};

// 测试用例
/**
 * type JsonifiedMyObject = {
 *  str: "literalstring";
 *  fn: never;
 *  date: string;
 *  customClass: "MyClass";
 *  obj: JsonifiedObject<{
 *    prop: "property";
 *    clz: MyClass;
 *    nested: {
 *      attr: Date;
 *    };
 *   }>;
 * }
 */
type JsonifiedMyObject = JsonifiedObject<MyObject>;
declare let ex: JsonifiedMyObject;
const z1: "MyClass" = ex.customClass;
const z2: string = ex.obj.nested.attr;
```

依次遍历对象，对一些属性类型做特殊处理

1、属性定义为`MyClass`类类型需要取的是`toJSON`函数属性的值，从新作为属性的字面量；

2、属性定义为函数类型需要改变成`never`类型；

3、深层对象需要递归遍历。

## 第四十六题

实现`RequireAllOrNone`工具类型，用于满足以下功能。即当设置`age`属性时，`gender`属性也会变成必填。具体的使用示例如下所示：

```typescript
interface Person {
  name: string;
  age?: number;
  gender?: number;
}

type RequireAllOrNone<T, K extends keyof T> = // 你的实现代码

const p1: RequireAllOrNone<Person, 'age' | 'gender'> = {
  name: "lolo"
};

const p2: RequireAllOrNone<Person, 'age' | 'gender'> = {
  name: "lolo",
  age: 7,
  gender: 1
};
```

`RequireAllOrNone`工具类型实现：

```typescript
type RequireAllOrNone<T, K extends keyof T> = Omit<T, K> &
  (Required<Pick<T, K>> | Partial<Record<K, never>>);

// 测试用例
const p1: RequireAllOrNone<Person, "age" | "gender"> = {
  name: "lolo",
};

const p2: RequireAllOrNone<Person, "age" | "gender"> = {
  name: "lolo",
  age: 7,
  gender: 1,
};

// Error: 缺少 gender 属性
const p3: RequireAllOrNone<Person, "age" | "gender"> = {
  name: "lolo",
  age: 1,
};
```

题目的要求是如果对象设置了`age`属性，那么就需要`gender`属性；

1、反选排除`K`后的结果；

2、`Required<Pick<T, K>>`先选取`K`在`T`有的属性，然后把选取完的类型，将它们变成必选；

3、`Partial<Record<K, never>>)`先创建有`K`属性的对象类型，属性类型为`never`，然后将它们都变成可选属性；

4、以上面的`'age' | 'gender'`为例：

```
{ age: number ; gender: number} | { age? : undefined | never; gender?: undefined | never}
```

这样如果对象设置了`age`属性，或者`gender`属性那么匹配前一对象类型，否则匹配后一对象类型；

5、`name`属性需要保留，因此使用反选，单独将`name`属性抽离出来。

## 第四十七题

实现`RequireExactlyOne`工具类型，用于满足以下功能。即只能包含`age`或`gender`属性，不能同时包含这两个属性。具体的使用示例如下所示：

```typescript
interface Person {
  name: string;
  age?: number;
  gender?: number;
}

// 只能包含Keys中唯一的一个Key
type RequireExactlyOne<T, Keys extends keyof T> = // 你的实现代码

const p1: RequireExactlyOne<Person, 'age' | 'gender'> = {
  name: "lolo",
  age: 7,
};

const p2: RequireExactlyOne<Person, 'age' | 'gender'> = {
  name: "lolo",
  gender: 1
};

// Error
const p3: RequireExactlyOne<Person, 'age' | 'gender'> = {
  name: "lolo",
  age: 7,
  gender: 1
};
```

`RequireExactlyOne`工具类型实现：

```typescript
// // 想要构建成这个样子才可以满足条件
type Test = { name: string } & (
  | { age: number; gender?: never }
  | { age?: never; gender: number }
);

type RequireExactlyOne<
  T,
  Keys extends keyof T,
  K extends keyof T = Keys
> = Keys extends any
  ? Omit<T, K> &
      Required<Pick<T, Keys>> &
      Partial<Record<Exclude<K, Keys>, never>>
  : never;

type TTT =
  | ({ name: string } & { age: number } & { gender?: never })
  | ({ name: string } & { age?: never } & { gender: number });
```

利用联合类型`extends`实现分布执行，然后就是如何让联合类型规则只有其中某一个生效，那么其他属性就需要设置为可选`never`。

以传入`'age' | 'gender'`为例：

`Keys`用作分布执行，`Keys extends any`就是为了触发联合类型在条件中分发执行，`K`保留联合类型。

下面会被执行成

```typescript
{ name: string } & { age: number } & { gender?: never } |
{ name: string } & { age?: never } & { gender: number }
```

简化之后也就得到我们满足条件的样子上面的`Test`。

## 第四十八题

实现`ConsistsOnlyOf`工具类型，用于判断`LongString`字符串类型是否由`0`个或多个`Substring`字符串类型组成。具体的使用示例如下所示：

```typescript
type ConsistsOnlyOf<LongString extends string, Substring extends string> = // 你的实现代码

type C0 = ConsistsOnlyOf<'aaa', 'a'> //=> true
type C1 = ConsistsOnlyOf<'ababab', 'ab'> //=> true
type C2 = ConsistsOnlyOf<'aBa', 'a'> //=> false
type C3 = ConsistsOnlyOf<'', 'a'> //=> true
```

`ConsistsOnlyOf`工具类型实现：

```typescript
type ConsistsOnlyOf<
  LongString extends string,
  Substring extends string
> = LongString extends ""
  ? true
  : LongString extends `${Substring}${infer B}`
  ? ConsistsOnlyOf<B, Substring>
  : false;
```

1、首先需要判断是否为空字符串，如果是直接返回`true`；

2、否则利用模板字符串语法，以及`infer`从开头一步步的匹配，减治思想。匹配成功则继续递归，直至字符串为空为止。

## 末尾

后续有新的题目会同步更新在这篇文章，对应的 TypeScipt 工具类型库推荐[type-fest](https://github.com/sindresorhus/type-fest)。
