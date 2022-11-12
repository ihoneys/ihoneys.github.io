---
title: 这几个 TypeScript 高级工具类型的用法及实现原理
date: 2022-02-27
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - TypeScript
publish: true
# 打赏
showSponsor: true
---

## 常用的 TS 内置类型工具

TypeScript 提供了较多的高级类型，以下说说工作涉及比较多的几个。



- Pick
- Partial

- Record
- Extract

- Exclude
- Omit

- Required
- ReturnType

- Parameters



### Pick

语法： `Pick<T,K>`

它的意思为 挑选，从类型定义的属性中，选取一个或者多个属性，返回一个新的类型定义。



很多时候，比如定义了一个 `interface User`，另一处也需要**部分**`User`里面的属性，但是不想从新定义 `User`里面的属性，这时候就可以用到 `Pick`。



example:



```typescript
interface User {
  name: string;
  userId: number;
  person: boolean;
}

type UserPreview = Pick<User, 'name'>;

// 等同于：
interface UserPreview = {
    name: string
}

// 选择多个：
type UserPreview = Pick<User, 'name' | 'userId'>;

// 等同于：
type UserPreview = {
    name: string
}
```



**具体实现：**



使用 vscode 的话，`Ctrl + 点击`就跳转到定义 `Pick` 的文件里面



```typescript
/**
 * 主要通过 K extend keyof T 约束 K 必须为 keyof T 的子类型
 * keyof T 得到的是 T 所有 key 组件的联合类型
 * in K 枚举 K ，T[P] 取值
 * K 就是上面我们传入的 'name' | 'userId'
 */
type Pick<T, K extends keyof T> = {
    [P in K]: T[P];
};
```



### 

语法：`Partial<T>`

将 `T`（也就是我们传入的接口类型）的所有属性变成可选。

```typescript
interface User {
  name: string;
  userId: number;
}

type PartialUser = Partial<User>;

// 等同于：
type User = {
  name?: string;
  userId?: number;
}
```



**具体实现：**



```typescript
/**
 * 遍历映射类型 T（上面传入的 User）所有的属性
 * 然后将每一个属性都设置为可选
 */
type Partial<T> = {
    [P in keyof T]?: T[P];
};
```



### Record

语法： `Record<K,T>`

以 typeof 格式快速创建一个类型，此类型包含一组指定的属性且都是必填的。



```typescript
type CatInfo = Record<'name' | 'breed', string>;

// 等同于： 
type CatInfo = {
  name: string;
  breed: string;
};



interface CatInfo {
  age: number;
  breed: string;
}
type CatName = "miffy" | "boris" | "mordred";

type Cats = Record<CatName, CatInfo>;

//等同于：
type Cats = { 
    miffy: CatInfo, 
    boris: CatInfo,
    mordred: CatInfo
}
```



**实现原理：**



```typescript
/**
 * 遍历 K，且值都为 T
 */
type Record<K extends keyof any, T> = {
  [P in K]: T;
};
```



### Extract

语法： `Extract<T, U>`

拿出联合类型 `T` 与联合类型 `U` 中共有的成员组成新的联合类型，就是取 `T` 和 `U` 的交集。



例子：



```typescript
type UnionType = Extract<string | number, string>;

// 等同于：
type UnionType = string
```



`**extends**` **的判断条件**



如果 extends 前面的类型能够赋值给 extends 后面的类型，那么表达式判断为真，否则为假。



**它的原理实现：**



```typescript
/**
 * 通过遍历 T 中所有的子类型，如果该子类型存在于 U 或者兼容于 U ，
 * 那么返回当前子类型，否则最终类型为 never 
 */
type Extract<T, U> = T extends U ? T : never;
```



看完了内部实现原理，这里来解释一下上面例子的 `UnionType`为什么是 `string`，`Extract `应用在联合类型上，它不会立马返回，而是会依次遍历：

第一次`string`（T）和 `string`（U）比较：

```typescript
Extract<string | number, string> = string extends string ? string : never // string
```

第二次 `number`再和 `string`比较：

```typescript
Extract<string | number, string> = number extends string ? number : never // never
```

特别的事，在 TypeScript 编译器中内部会认为 never 是一个永远不存在的值的类型，会被省略掉，所以最终 `UnionType`返回的类型为 `string`。



`Extract`应用于函数类型和类类型的时候有些差异。



函数类型：

```typescript
type Func1 = (value: string, str: string) => string;
type Func2 = (value: string) => string;

type ExtractFuncType1 = Extract<Func1, Func2>; // type ExtractFuncType = never;
type ExtractFuncType2 = Extract<Func2, Func1>; // type ExtractFuncType = (value: string) => string;
```

函数类型，如果两个类型的返回值一致，函数参数有类型值相同，参数多 extends 参数少 返回 `false`；参数少 extends 参数多 返回`true`。



类类型：

```typescript
class ChinesePeople {
  public name;
  public nums;
  constructor(name: string, nums: number) {
    this.name = name;
    this.nums = nums;
  }
  eat() {
    console.log('eat');
  }
}

class People {}

type ExtractClassType = Extract<People, ChinesePeople>; // type ExtractClassType = never

type ExtractClassType = Extract<ChinesePeople, People>; // type ExtractClassType = ChinesePeople
```

类类型与函数类型则相反，属性多的类 extends 属性少的类型 返回 `true`；属性少的类 extends 属性多的类 返回 `false`。

### Exclude

语法：`Exclude<T, U>`

在联合类型 `T`中排除 联合类型 `U` 中的成员，也就是 `U` 在 `T` 中有的都排除，最后返回 T 排除之后剩余的成员组成的新联合类型。



```typescript
type UserExclude = Exclude<"name" | "age" | "userId", "name">;

// 等同于
type UserExclude = "age" | "userId"
```



一句话总结： **排除条件成立的类型，保留不符合约束条件的类型**。



`Exclude`的实现原理与 `Extract`实现原理类型，只是对换了返回值结果。



**实现原理：**



```typescript
/**
 * 看 Extract 实现原理描述
 */
type Exclude<T, U> = T extends U ? never : T;
```



### Omit

语法：`Omit<T, U>`

在 `T` 类型中删除 `K` 属性后构成的新的类型。



有时候我们自己封装一个组件，但是又想用到 UI 框架帮我们定义好的 Props，但是 `onChange`方法会有冲突，两边都有定义，这时候我们可以使用 `Omit`反选。



```typescript
interface Pin {
  value: string[];
  onChange: (value: string) => void;
}

type OmitPin = Omit<Pin, 'onChange'>;

// 等同于：
type OmitPin = {
    value: string[];
}
```



**实现原理：**



```typescript
/**
 *  Pick + Exclude 实现
 *  换个思路，原本意思是 从某个类型排除传入的某些属性，
 *  看到排除，可以想到上面刚讲的 Exclude，那么就可以拿到最终想要的 Keys，也就是 `Exclude<keyof T, K>`
 *  有最终想要 Keys 组合，这时候就差把这些属性值提取出来，因此，可以通过 `Pick` 从原本类型 `T` 中挑选出来，就实现了反选功能。
 */
type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>;
```



### Required

语法：`Required<T>`

将类型 `T`中所有属性转换为必须属性。



```typescript
interface Props {
  a?: number;
  b?: string;
}

type RequiredlProps = Required<Props>

// 等同于：
type RequiredlProps = {
  a: number;
  b: string;
}
```



**实现原理：**



```typescript
/**
 * 遍历 T 所有属性，工具类型内部通过 -? 移除了可选属性中的 ?，使得属性从可选变成必选 
 */
type Required<T> = {
    [P in keyof T]-?: T[P];
};
```

### ReturnType

语法：`ReturnType<T>`

返回函数类型返回值的类型。

```typescript
type FuncReturnType = ReturnType<() => number>; // => number
```

**实现原理：**

```typescript
/**
 * T 约束于函数类型，配合infer拿到函数的返回类型变量R，满足约束直接返回R也就是当前函数返回类型
 */
type ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;
```

### Parameters

语法： `Parameters<T>`

以元组的形式返回函数各个参数类型。

```typescript
type FFF = (str: string, value: number) => number;

type ParamType = Parameters<FFF>; // => [str: string, value: number]
```

**实现原理：**

```typescript
/**
 * 同样的配合infer关键字推导取到 ...args 数组参数类型，满足约束直接返回P也就是当前函数参数类型
 */
type Parameters<T extends (...args: any) => any> = T extends (
  ...args: infer P
) => any
  ? P
  : never;
```

### Readonly

语法： `Readonly<T>`


将某个类型所有属性变为只读属性。

```typescript
interface Todo {
  title: string;
}

const todo: Readonly<Todo> = {
  title: "Delete inactive users"
};

todo.title = "Hello"; // Error: cannot reassign a readonly property
```

**实现原理：**

```typescript
/**
 * 遍历 T 类型，每个属性都添加 readonly 关键字变为只读
 */
type Readonly<T> = {
    readonly [P in keyof T]: T[P];
};
```

## 最后

学完了 TS 为了能够更好的实际掌握使用，可以做做这48道TS练习题，下面这篇文章里，也附有答案加解析。

[来做做这 48 道 TypeScript 练习题，试试你的 TS 学得怎么样了！](https://juejin.cn/post/7062903623470514207 "https://juejin.cn/post/7062903623470514207")

