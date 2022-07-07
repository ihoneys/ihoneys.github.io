---
title: 进入TypeScript 世界
date: 2021-02-08
 
categories:
 - 前端基础
tags:
 - TypeScript
---

### 什么是  TypeScript？

[TypeScript](https://www.typescriptlang.org/) 是一种语言，它是 `JavaScript` 的超级集，也是静态类型检查器，可以在不运行代码的情况下检测代码中的错误。如今绝大多数的框架或者开发项目都使用 TypeScript 进来开发， 逐渐在前端领域展示它的强大。

### 前置准备

#### 安装

```shell
npm install -g typescript
# 或者 yarn add typescript -g
```

#### 编译

安装完毕之后，通过内置命令 tsc 对指定文件 .ts 文件编译为对应的 js 文件

```
tsc example.ts
# example.ts => example.js
```

不想安装 `typescript`也可以直接使用线上的 [TypeScript Playground](https://www.typescriptlang.org/play) 来学习语法与特性。

#### 加载到浏览器过程
![image.png](/img/ts/process.png)

### TypeScript 基本类型

**标注了 变量或者对象属性的类型， 那么它的值必须为标注的类型，否则会静态检查之后会提示报错。**

#### 字符串类型 string

```typescript
const str: string = 'string';
console.log(str) // string
```

#### 布尔类型 boolean

```typescript
const bol: boolean = true;
console.log(bol); // true
```

#### 数字类型 number

```typescript
const num: number = 1111;
console.log(num); // 1111
```

#### 类型  null 和 undefined

定了 `null` 或者 `undefined` 类型 只能赋值给对应的 `null` 或者 `undefined` 类型，不能赋值其他类型

```typescript
let value1: undefined = undefined;
let value2: null = null;

value1 = 1 // err

value2 = 1 // err
```

#### 数组类型 Array

```typescript
// 1.定义数组中都是 string
const arr1: string[] = ['1', '2', '3']; // [] 默认为空也可以的

// 2.定义数组中都是 number
const arr2: number[] = [1, 2, 3];

// 3.定义数组中都是 boolean
const arr3: boolean[] = [true, false];

// 4.数组每一个位置对应一种类型，也称为元组类型（tuple）
const arr4: [number, string] = [1, 'str']; // 下标0值只能为number，下标1的值只能为 string

// 定义二维数组
const arr5: string[][] = [['1']];

// 数组定义的另一种方式
const test: Array<string> = ['1', '2', '3'];

// 但是元组就不能使用 Array 定义!!
const test: Array<string, number> = ['1', 2]; // err，泛型类型“Array<T>”需要 1 个类型参数。
```

**只读数组**

定义只读的两种方式：

- `ReadonlyArray`
```typescript
let readonlyArray: ReadonlyArray<number> = [1, 2, 3];
// 修改 readonlyArray 中的值 或者长度 都会报错
readonlyArray[1] = 0 // 类型“readonly number[]”中的索引签名仅允许读取。
readonlyArray.length = 10 // 无法分配到 "length" ，因为它是只读属性。
```

- `readonly`
```typescript
let readonlyArray: readonly number[] = [1, 2, 3];
```

注意：`readonly` 类型修饰符仅允许对数组和元组文本类型使用。

```typescript
// ×
let err0: readonly Array<number> = [1, 2, 3]; // error!
let err1: readonly Set<number> // error! 
    
// √
let ok: readonly string[] = ['1'] // works fine
```

#### 枚举类型 enum

- **数字枚举**

```typescript
enum Status {
    IDLE,
    SUCCESS,
    ERROR,
}
```

默认情况下， `IDLE`的初始值为 0，后面成员依次递增++

编译后的枚举 `Status` ES5 代码为：

```javascript
var Status;
(function (Status) {
    Status[Status["IDLE"] = 0] = "IDLE";
    Status[Status["SUCCESS"] = 1] = "SUCCESS";
    Status[Status["ERROR"] = 2] = "ERROR";
})(Status || (Status = {}));
```

**设置初始值情况：**

```typescript
enum Status {
    IDLE,
    SUCCESS = 3,
    ERROR,
}
```

编译为：

```javascript
var Status;
(function (Status) {
    Status[Status["IDLE"] = 0] = "IDLE";
    Status[Status["SUCCESS"] = 3] = "SUCCESS";
    Status[Status["ERROR"] = 4] = "ERROR";
})(Status || (Status = {}));
```

设置初始值`SUCCESS = 3` ，可以看到编译之后，后面依旧按照前一个值做递增，前面的按照 0 为初始值递增。

- **字符串枚举**

开发中常常用来枚举接口路径

```typescript
enum Api {
  GetMenuList = '/getMenuList',
}
```

- **常量枚举**

常量枚举会使用内联语法，不为枚举类型编译生成 JavaScript 代码，看看下面的例子理解一下。

```typescript
// 比如我们正常编写 js 定义常量会是这样
const HEIGHT = 200;
const WIDTH = 300;

// ts 中使用常量枚举我们可以
const enum Style {
  HEIGHT = 200,
  WIDTH = 300,
}
const height: Style = Style.HEIGHT; // 200
const width: Style = Style.WIDTH; // 300
```

- **异构枚举**

```typescript
enum Enum {
  A,
  B,
  C = "C",
  D = "D",
  E = 8,
  F,
}
```

编译后为：

```javascript
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
    Enum["C"] = "C";
    Enum["D"] = "D";
    Enum[Enum["E"] = 8] = "E";
    Enum[Enum["F"] = 9] = "F";
})(Enum || (Enum = {}));
```

#### 任何类型 any

任何类型都可以被归为 any 类型，定义了 `any`类型的值，不会受到某个指定类型的约束，它包括了所有类型，因此我们使用了 `any` 类型，也就相当于无法 TypeScript 类型的静态类型检查机制。

```typescript
let value: any;

value = '1'; // ok
value = 0; // ok
value = true; // ok
value = {}; // ok
value = []; // ok
value = () => {}; // ok
value = undefined // ok
value = null // ok
```

为了解决 `any` 带来的问题，TypeScript 3.0 引入了 `unknown` 类型。

#### 未知类型 unknown

`unknown` 类型就像所有类型赋值给了 `any`，所有类型也可以 `unknown`。

`unknown` 和 `any` 的主要区别就是：

- **unknown 类型会更安全**

看看下面的例子：

```typescript
let value1: unknown;
let value2: any;

value1.say(); // error

value2.say(); // ok
```

定义为 `unknown` 类型 TypeScirpt 还会进行某种形式的检查，在对 `any` 类型的值执行操作之前，不会进行任何检查。

- **_unknown 类型只能被赋值给 any 类型和 unknown 类型本身_**

```typescript
let value1: unknown;

let value2: any;

let unknownType: unknown = value1 // ok
let anyType: any = value1 // ok

let isTure: boolean = value1; // error
let str: string = value1; // error
let nums: number = value1; // error
let obj: object = value1; // error
// ...
```

一般情况下，我们初始不知道值是什么类型的时候，使用 `unknown` 定义更好。

#### 类型 Void

TypeScript 中的 void 没有表示任何类型，一般用于定义方法的时候有没有返回值。

```typescript
function fnc(): void {
	// 单纯执行，不需要 return 返回一个值
}

// 如果指定返回
function fnc(): number {
    // 必须返回一个 number值
    return 2
}
```

日常如果没有强制返回指定值，可写可不写，因为 TypeScript 也会自动推导。

`**void**`** 类型指定给变量，只能赋值给 undefined，没有实际意义。**

```typescript
let value: void;

value = 1; // err
value = undefined; //  ok
```

#### 类型 object

`object` 表示非原始类型。

```typescript
let user: object = { name: 'alisa' };

// 也可以：
let user: {} = { name: 'alisa' };
```

赋值情况：

```typescript
function getUserInfo(data: object | null): void {}

getUserInfo({ name: 'alisa' });
getUserInfo(null);

// 除 null 之外传入其他原始类型都会 报错
getUserInfo(1); // err
getUserInfo('str'); // err
getUserInfo(true); // err
getUserInfo(undefined); // err

let sym = Symbol();
getUserInfo(sym); // err
```

#### 类型 never

`never` 类型表示的是那些永不存在的值的类型，**意味着声明 never 类型的变量只能被 never 类型所赋值**

`**never**`**类型是**`**unknown**`**类型的子类型**

```typescript
type T0 = never extends unknown ? true : false // true
```

`never` 类型是那些总是会抛出异常或根本就不会有返回值的函数表达式的返回值。

```typescript
function error(message: string): never {
  throw new Error(message)
}
```