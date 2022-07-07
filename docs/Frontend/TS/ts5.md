---
title: TypeScript 类
date: 2021-02-08
 
categories:
 - 前端基础
tags:
 - TypeScript
---
## 类

类在 TypeScript 中即可以当做**对象**，也可以当去**类型**去使用。

### 类的属性和方法

使用 `class`定义生成一个类，`constructor`定义构造函数。

```typescript
class Person {
    // 静态属性
    static ssn: string;

    // 成员属性
    firstName: string;
    lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // 成员方法
    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    // 静态方法
    static getClassName(): string {
        return 'Person';
    }
}
```

为属性、构造函数和方法注释类型时，TypeScript 编译器会进行相应的类型检查。

例如，你初始化 `firstName`的值为 `number`，下面代码将会导致错误：

```typescript
let person = new Person(171280926, 'Doe');
```

**简化定义成员属性**

```typescript
class Person {
    constructor(public firstName: string, public lastName: stirng) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

等同于：

```typescript
class Person {
    firstName: string;
    lastName: string;
    constructor(firstName: string, lastName: stirng) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

**可选属性**

与函数的可选参数一样，在类中也可以定义类的可选属性。

```typescript
class Person {
    constructor(firstName?: string, lastName?: stirng) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
}
```

### 访问修饰符

在 TypeScript 中定义属性或者方法的时候为我们提供了四种修饰符（`public`，`private`，`protected`和`readonly`）。

```typescript
class Widget {
  class: string; // 没有使用修饰符 默认 为 public，也就是 public class: string
  private _id: string;
  readonly id: string;

  protected foo() {
    // ...
  }
}
```

如果没有属性和方法没有修饰符，默认是 `public`修饰。

`public`： 意思是改属性和方法可以在内部或者外部访问；

`private`： 标记为`private`的 `_id`属性，那么该属性只能在类的内部访问；

`protected`：被标记 `protected`属性和方法只能在类或者扩展它的任何类内部方法，但不能在类的外部访问。

`readonly`：只读类型，如果标记为 `readonly` 属性的值在类构造函数中初始赋值后发生更改，则 TypeScript 编译器抛出错误。

### 访问器

TypeScript 中也可以对一个属性时用 get 和 set 方法对一个属性内部的获取和赋值进行拦截。

```typescript
class Widget {
    get id(): string {
        // 取 id 值的时候就会运行这里
        return this.id;
    }
    set id(newId) {
        console.log(newId); // 222
        // 设置 id 的时候这里就会执行，可以做一些其他操作
    }
}

const widget = new Widget();
widget.id = '222';
```

### 类的继承

利用继承，子类不需要额外的代码，就可以拥有父类的特性和能力，并且在父类的基础上进行扩展，从而增强代码的可复用性，继承是类与类或者接口与接口之间最常见的关系。

在 TypeScript，我们可以使用 `extends`关键字来实现继承：

```typescript
class A {
  constructor(public name: string) {
    this.name = name;
  }
  foo() {
    console.log('parent:', this.name);
  }
}

class B extends A {
  constructor(public child: string) {
    super(child); // 调用父类的构造函数
    this.child = child;
  }
  bar() {
    console.log(this.child);
  }
}

let b = new B('ssn');
b.foo(); //parent: ssn
```

> 注意：如果子类里的方法和父类的方法名一直，那么在使用的时候会使用子类的方法，不会使用父类的方法。


```typescript

class A {
  constructor(public name: string) {
    this.name = name;
  }
  foo() {
    console.log(this.name);
  }
}

class B extends A {
  constructor(public child: string) {
    super(child);
    this.child = child;
  }
  foo() {
    console.log('child:',this.child);
  }
}

let b = new B('ssn');
b.foo(); // child: ssn
```

### 抽象类

使用 `abstract` 关键字声明的类，我们称之为抽象类。TypeScript 中的抽象类是提供其他类继承的基类，不能被直接实例化，只能被其他类所继承。

```typescript
abstract class A {
    constructor(public name: string) {}
    abstract foo(): void;
}

const a = new A('1'); // Error：无法创建抽象类的实例。
```

抽象类不能被直接实例化，只能对实现了所有抽象方法的子类实例化。

```typescript
abstract class Person {
    constructor(public name: string) {}
    abstract foo(): void;
}

class PersonInstance extends Person {
    constructor(name: string) {
        super(name);
        this.name = name;
    }
    foo(): void {
        console.log(this.name);
    }
}

const intance = new PersonInstance('ssn');
```

**注意:** 用`abstract`声明的抽象方法只能放在抽象类中，不然会报错。

### 类方法重载

重载支持函数重载。类的方法也支持重载，下面的例子重载了 `Overload`类的 `foo`成员方法：

```typescript
class Overload {
    foo(arg1: number, arg2: number): number;
    foo(arg1: string, arg2: string): string;
    foo(arg1: string | number, arg2: string | number) {
        return arg1 || arg2;
    }
}

const o = new Overload();
o.foo(1, 2);
o.foo('1', '2');
```

