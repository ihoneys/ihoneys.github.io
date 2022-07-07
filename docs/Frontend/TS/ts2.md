---
title: TypeScript 类型断言
date: 2021-02-08
 
categories:
 - 前端基础
tags:
 - TypeScript
---
### 类型断言

TypeScript 允许你覆盖它的推断，不需要它的推断，以自己的想要的方式分析它，这种机制被称为 类型断言。

简单来说，不要它的推断分析，由自己决定。

先看个下面的例子，声明一个没有任何属性的对象。

```typescript
let employee = {};
employee.name = 'John'; // Error: 类型“{}”上不存在属性“name”。
employee.code = 123; // Error: 类型“{}”上不存在属性“code”。
```

上面的例子会给出编译出错，因为编译器推断 `employee`的类型是没有属性的 `{ }`。但是，我们可以通过类型断言来避免这种情况。

TypeScript 支持通过 `as` 与 `<>`两种不同的语法进行类型断言：

**尖括号语法**

```typescript
interface Employee {
  name: string;
  code: number;
}
let employee = <Employee>{};
employee.name = 'John'; // ok
employee.code = 123; // ok
```

`**as**`**语法**

```typescript
interface Employee {
  name: string;
  code: number;
}
// as 断言
let employee = {} as Employee;

employee.name = 'John'; // ok
employee.code = 123; // ok
```

> 两种语法时等效的，我们可以使用任意一种，**但是 TypeScript 处理 JSX 中，只允许使用 **`**as**`**语法**，因为使用尖括号类型断言可能与 JSX 产生冲突。


**什么情况下使用类型断言？**

看下这个例子：

```tsx
import React from 'react';

const Example: React.FunctionComponent = () => {
  let element1 = document.getElementById('canvas'); // element1 会被推断为 HTMLElement | null
  element1.getContext('2d'); // Error: 类型“HTMLElement”上不存在属性“getContext”。
  return (
    <div>
      <canvas id="canvas" />
    </div>
  );
};
```

这里就可以使用类型断言 `element1`一定为 dom 画布元素

```tsx
let element1 = document.getElementById('canvas') as HTMLCanvasElement; // 此时 element1 为 HTMLCanvasElement
element1.getContext('2d'); // OK
```

### 非空断言

通过字面意思我们可以大概明白，它一定不会为空。他会排除变会为 undefined 或者 null 情况，告诉编译器它是有值的。

看个例子：

```typescript
const foo: { a?: string | null } = { a: 'string' };

const obj: string = foo.a; // Error: 不能将类型“string | null | undefined”分配给类型“string”。
```

上面报错是因为 可选符号 a? 可选符号说明是可选的，也就定义的类型会是  string | null | undefined  ，而 obj 定义的类型为 string，因为 null 和 undefined 是两个类型，不会兼容 string，所以 foo.a 会被推断，a 可能会是 undefined | null，所以编译器会出错。

**如何使用非空断言操作符**

这时候可以使用 非空断言，忽略 null | undefined 类型 。

具体语法是：只需在变量后面添加一个 `!`即可。

```typescript
const foo: { a?: string | null } = { a: 'string' };

const obj: string = foo.a!; // OK
```

当函数执行时使用非空断言：

```typescript
interface Foo {
    fnc?: () => void;
}
const foo: Foo = {
    fnc: () => {
        console.log('!');
    },
};

foo.fnc(); // Error: fnc 可能是未定义对象

//非空断言
foo.fnc!() // OK
```

**什么时候这么做？**

[React  refs](https://reactjs.org/docs/hooks-reference.html#useref)可以用来访问 DOM 节点。`ref.current` 的值可能是 `null`（因为引用的元素还未 mounted）。

一些情况下，我们能够确定 `ref.current` 已经获取真实的 DOM，不会是 `null`。

比如下面的例子中，点击按钮，输入框聚焦：

```tsx
import React, { useRef } from 'react';

const Example: React.FunctionComponent = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleFocus = () => {
    inputRef.current.focus(); // Error: 对象可能为 "null"。
  };
  return (
    <div>
      <button onClick={handleFocus}>Click</button>
      <input  type="text" ref={inputRef} />
    </div>
  );
};

export default Example;
```

编译器会认为，引用的 DOM 还未 mounted ，可能还是 null，但是我们可以知道，点击的时候，`inputRef.current`一定存在的，这时候我们就可以使用 非空断言告诉编译器，它一定不会为 null。

```tsx
const handleFocus = () => {
    inputRef.current!.focus(); // OK
};
```

如果没有不使用 `!`操作符，也可以使用 `if`判断

```tsx
const handleFocus = () => {
    if(inputRef.current) {
       inputRef.current.focus() // OK
    }
};
```

### const 断言

常量断言（语法写作 `as const`）是 TypeScript3.4 发布的新特性。在 ES6 中 `const`的意思是定义一个不可改变的常量。

使用语法：
```typescript
const foo = <const>[1, 2];
const foo = [1, 2, 3] as const;
```
在 TypeScript 中使用 `const 断言`则会出现以下特点：

- 该表达式中的任何文字类型都不应扩展（例如，不得从`"hello"`到`string`）
- 对象属性所有属性会变成 `readonly`
- 数组变成`readonly`元组

```typescript
// let immutableString: "string" ,值只能为 'string'，不能被扩展
let immutableString  = 'string' as const;

// let immutableArray: readonly [10, 20]，immutableArray 的类型为 readonly [10, 20]
// 并且是不变成的 Type 元组
let immutableArray = [10, 20] as const;

// let immutableObj: { readonly str: "const";}，immutableObj 的类型为 { readonly str: "const"}
// 
let immutableObj = { str : 'const' } as const;
```

**注意：**

- `const` 断言只能用于引用枚举成员、字符串、数字、布尔值、数组或对象文本

```typescript
let a = (Math.random() < 0.5 ? 0 : 1) as const // Error: "const" 断言只能用于引用枚举成员、字符串、数字、布尔值、数组或对象文本。

let a = Math.random() < 0.5 ? (0 as const) : (1 as const); // OK
```

- `const`上下文不会立即将表达式转换为完全不可变的

```typescript
let immutableArray = [10, 20] as const;
immutableArray.push(30) // Error: 类型“readonly [10, 20]”上不存在属性“push”。

// 但是
let arr = [10, 20]

let immutableObj = {
  name: 'immutable',
  args: arr
} as const;

 // Error： 无法分配到 "name" ，因为它是只读属性。
immutableObj.name = 'name';

// Error: 无法分配到 "args" ，因为它是只读属性。
immutableObj.args = []; 

// OK
immutableObj.args.push(30);  // TS 推断出 immutableObj的类型为 { readonly name: "immutable"; readonly args: number[]; }
```

