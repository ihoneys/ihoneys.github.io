---
title: ts => class
date: 2020-12-21
 
categories:
- 前端基础
tags:
- TavaScript
- Class
publish: true
# 打赏
---

## 面向对象

[视频讲解](https://www.bilibili.com/video/BV1Xy4y1v7S2?p=13&spm_id_from=pageDriver)

面向对象是程序中一个非常重要的思想，它被很多同学理解成了一个比较难，比较深奥的问题，其实不然。面向对象很简单，简而言之就是程序之中所有的操作都需要通过对象来完成。

- 举例来说：
  - 操作浏览器要使用 window 对象
  - 操作网页要使用 document 对象
  - 操作控制台要使用 console 对象

一切操作都要通过对象，也就是所调的面向对象，那么对象到底是什么呢？这就要先说到程序是什么，计算机程序的本质就是对现实事物的抽象，抽象的反义词是具体，比如：照片是对一个具体的人的抽象，汽车模型是对具体汽车的抽象等等。程序也是对事物的抽象，在程序中我们可以表示一个人、一条狗、一把枪、一颗子弹等等所有的事物。一个事物到了程序中就变成了一个对象。

在程序中所有的对象都被分成了两个部分数据和功能，以人为例，人的姓名、性别、年龄、身高、体重等属于数据，人可以说话、走路、吃饭、睡觉这些属于人的功能。数据在对象中被成为属性，而功能就被称为方法。所以简而言之，在程序中一切皆是对象。

## 1. 类（class）

要想面向对象，操作对象，首先便要拥有对象，那么下一个问题就是如何创建对象。要创建对象，必须要先定义类，所调的类可以理解为对象的模型，程序中可以根据类创建指定类型的对象，举例来说：可以通过Person类来创建人的对象，通过Dog类创建狗的对象，通过Car类来创建汽车的对象，不同的类可以用来创建不同的对象。

- 定义类

```js
class 类名 {
    属性名 : 类型
    constructor(参数:类型){
    this.属性名 = 参数
    ···
    }
    方法名(){
        ···
    }
}
```

- 示例

```ts
class Person{
    name:string;
    age:number
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    sayHello(){
        console.log("hello")
    }
}
```

### 属性

`class`中有两种属性，类属性和实例属性

- 无关键字

定义的是实例属性

- 关键字
  - `static` : 静态属性(类属性)
  - `readonly` : 实例属性或类属性只读
  - `static readonly` : 静态只读属性(注意顺序)

1. 实例属性

直接定义的属性就实例属性，通过对象的实例访问

 示例：

```ts
class Person {
    // 定义实例属性
    name:string = "zhang"
    // 在属性前使用static 关键字可以定义类属性(静态属性)
    static age:number=18
}
// 访问 要创建一个实例
const per = new Person();
console.log(per.name);  //实例属性
```

修改实例属性

```ts
class Person {
    // 定义实例属性
    name:string = "zhang"
    // 在属性前使用static 关键字可以定义类属性(静态属性)
    static age:number=18
}
// 访问 要创建一个实例
const per = new Person();
per.name = "lilei"
console.log(per.name);  //修改后的实例属性
```

设置只读实例属性

```ts
class Person {
    // 定义实例属性
    readonly name:string = "zhang"
    // 在属性前使用static 关键字可以定义类属性(静态属性)
    static age:number=18
}
const per  = new Person()
per.name = "lilei"  // 报错
console.log(per.name);
```

2. 类属性

通过 `static` 定义的属性是类属性，

```ts
class Person {
    // 定义实例属性
    name:string = "zhang"
    // 在属性前使用static 关键字可以定义类属性(静态属性)
    static age:number=18
}
// 直接访问
console.log(Person.age); //类属性 \ 静态属性 （原型上的属性）
```

静态属性只读(注意 `static readonly` 顺序)

```ts
class Person {
    // 定义实例属性
    name:string = "zhang"
    // 在属性前使用static 关键字可以定义类属性(静态属性)
    static readonly age:number=18
}
// 尝试修改
Person.age = 20 // 报错
console.log(Person.age);
```

### 方法

`class`中有两种方法，类方法(静态方法)和实例方法

1. 实例方法

在类里直接定义一个方法,然后通过`new`一个实例，调用这个方法，就是实例方法。

```ts
class Person {
 fn1(){
    console.log("hello");
  }
}
const per = new Person();
per.fn1()
```

2. 类方法(静态方法)

如果在类里以 `static` 开头定义一个方法，然后直接用类名调用这个方法，就是类方法。

```ts
class Person {
static fn1(){
    console.log("hello");
  }
}
Person.fn1()
```

## 构造函数和this

创建一个构造函数

```ts
class Dog{
    name="小王吧";
    age=3;
    bark(){
        alert("汪汪汪")
    }
}
const dog =new Dog()
const dog2 =new Dog()
console.log(dog);
console.log(dog2);
```
