---
title: JavaScript
subtitle: JavaScript 相关面试题 # 博客副标题（可选）
date: 2022-04-01
 
categories:
 - 面试题
tags:
 - JavaScript
 - 面试题
---
---
title: JavaScript
subtitle: JavaScript 相关面试题 # 博客副标题（可选）
date: 2022-04-01
 
categories:
 - 面试题
tags:
 - JavaScript
 - 面试题
---

## 1.介绍一下数据类型有哪些，值是如何储存的？



> 数据类型分为原始数据类型、引用数据类型
>
> 原始数据类型又分为：Number、String、Boolean、null、undeinfed、Symbol（ES6）、BigInt（ES2020）
>
> 
>
> 引用类型：Object、Array、Function



基本数据类型储存在内存栈中，占据空间小，大小固定，属于被频繁使用数据，可直接操作变量的值，运行效率高。



引用类型：同时存储在栈（stack）和堆（heap）中，占据空间大，运行效率低，存储值大小不定，可动态调整，无法直接操作内部储存，使用引用地址读取。



## 2.[&& 、 ||和!! 运算符分别能做什么](https://juejin.im/post/5ef8377f6fb9a07e693a6061#2.&&、||-和-!!运算符分别能做什么)



&& 叫逻辑与， **x && y**，x为true则返回y，x为false，则直接返回x

|| 叫逻辑或， **x && y，x为true则返回x，否则返回y**

**!! 叫双重非运算符，** 运算符可以将右侧的值强制转换为布尔值，这也是将值转换为布尔值的一种简单方法。

**例如：**

```javascript
const string = 'value'
console.log(!!string) // true
```



## 3.js数据类型的转换



js转换分为三种情况，

- 转换为数字，调用Number（），parseInt（）、parseFloat（）方法
- 转换为字符串，调用String（）、toString（）、join（）、JSON.stringify（）方法转为为字符串
- 转换为布尔值，调用Boolean（x）方法



> null和underfined没有.toString方法





## 4.JS中数据类型的判断（ typeof，instanceof，constructor，Object.prototype.toString.call())

### tyeof

能够正确判断出基本数据类型，不能正确判断引用类型，对于对象来说，除了函数都会显示Object，所以想正确判断数据基本类型可以考虑使用 instanceof



### instanceof

根据原型类查找找到最终引用的类型

```javascript
console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false  
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true    
// console.log(undefined instanceof Undefined);
// console.log(null instanceof Null);
```

来看一下 instanceof 在MDN中的解释：instanceof 运算符用来测试一个对象在其原型链中是否存在一个构造函数的 prototype 属性。其意思就是判断对象是否是某一数据类型（如Array）的实例，请重点关注一下是判断一个对象是否是数据类型的实例。在这里字面量值，2， true ，'str'不是实例，所以判断值为false。



### consturctor

类型的构造函数判断

```javascript
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
```

> 这里有一个坑，如果我创建一个对象，更改它的原型，constructor就会变得不可靠了

```javascript
function Fn(){};
 
Fn.prototype=new Array();
 
var f=new Fn();
 
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true 
```



### **Object.prototype.toString.call()**

**
**

> 默认Object.prototype.toString()输入结果为‘【Object type】’type即是输出类型，通过.call（）转移执行，正确判断出数据类型



## 5.js有那些内置对象



> 内置对象就是在脚本执行前，由js定义的一些全局值属性、函数和用来实例化其他对象的构造函数对象。例如全局变量值NaN、undefined。全局函数parseInt()、parseFloat()，用来实例化对象的构造函数如Date、Object等，还有数学对象Math（）

- 标准内置对象分类

> 全局的对象（ global objects ）或称标准内置对象，不要和 "全局对象（global object）" 混淆。这里说的全局的对象是说在 全局作用域里的对象。全局作用域中的其他对象可以由用户的脚本创建或由宿主程序提供。

1. 值属性，这些全局属性返回一个简单值，他们没有自己的属性和方法

> Infinity、NaN、undefined、null 字面量

1. 函数属性，全局函数可以直接调用，不需要在调用时指定所属对象，执行完之后会返回结果直接返回给调用者。

> parseInt()、parseFloat()

```javascript
（3）基本对象，基本对象是定义或使用其他对象的基础。基本对象包括一般对象、函数对象和错误对象。

例如 Object、Function、Boolean、Symbol、Error 等

（4）数字和日期对象，用来表示数字、日期和执行数学计算的对象。

例如 Number、Math、Date

（5）字符串，用来表示和操作字符串的对象。

例如 String、RegExp

（6）可索引的集合对象，这些对象表示按照索引值来排序的数据集合，包括数组和类型数组，以及类数组结构的对象。例如 Array

（7）使用键的集合对象，这些集合对象在存储数据时会使用到键，支持按照插入顺序来迭代元素。

例如 Map、Set、WeakMap、WeakSet

（8）矢量集合，SIMD 矢量集合中的数据会被组织为一个数据序列。

例如 SIMD 等

（9）结构化数据，这些对象用来表示和操作结构化的缓冲区数据，或使用 JSON 编码的数据。

例如 JSON 等

（10）控制抽象对象

例如 Promise、Generator 等

（11）反射

例如 Reflect、Proxy

（12）国际化，为了支持多语言处理而加入 ECMAScript 的对象。

例如 Intl、Intl.Collator 等

（13）WebAssembly

（14）其他

例如 arguments
```

## 6.**null和undefined**

null==undefined比较结果为true，但是和其他比较结果都为false。

```javascript
null == undefined // true
null == '' // false
null == 0 // false
null == false // false
undefined == '' // false
undefined == 0 // false
undefined == false // false
```

- null：代表为空对象（其实并不是真正的对象），null 主要用于赋值给一些可能会返回对象的变量，作为初始化。

> 其实 null 不是对象，虽然 typeof null 会输出 object，但是这只是 JS 存在的一个悠久 Bug。在 JS 的最初版本中使用的是 32 位系统，为了性能考虑使用低位存储变量的类型信息，000 开头代表是对象，然而 null 表示为全零，所以将它错误的判断为 object 。虽然现在的内部类型判断代码已经改变了，但是对于这个 Bug 却是一直流传下来。

- undefined：代表含义为未定义。变量一旦声明了但是未定义的时候就会返回undefined。

> undefined 在 js 中不是一个保留字，这意味着可以使用 undefined 来作为一个变量名，这样的做法是非常危险的，它 会影响对 undefined 值的判断。但是可以通过一些方法获得安全的 undefined 值，比如说 void 0。



## 7.{}和[]的valueOf和toString的结果是什么？

> 

```javascript
{} 的 valueOf 结果为 {} ，toString 的结果为 "[object Object]"
[] 的 valueOf 结果为 [] ，toString 的结果为 ""
// []为空的时候会按空字符串处理
[null] == false // true
[undefined] == false // true
```

根据数组的ToPrimitive规则，数组元素为null或undefined时，该元素被当做空字符串处理，所以[null]、[undefined]都会被转换为0。



## 8.JavaScript作用域和作用域链作用域：



### 作用域：

作用域是定义变量的区域，它有一套访问变量的规则，这套规则来管理浏览器引擎如何在当前作用域以及嵌套的作用域中根据变量进行变量查找**。（**换句话说，作用域决定了代码区块中变量和其他资源的可见性**）**



```javascript
function outFun2() {
    var inVariable = "内层变量2";
}
outFun2();//要先执行这个函数，否则根本不知道里面是啥
console.log(inVariable); // Uncaught ReferenceError: inVariable is not defined
```

从上面的例子体会到作用域的概念，变量inVariable在全局作用域中没有声明，所以在全局作用域中取值会报错。这可以这样理解作用域：**作用域好比一个独立的地盘，让变量不会泄露，暴露出去，也就是说作用域能起到与外界一种隔离的作用。**

**ES6 之前 JavaScript 没有块级作用域,只有全局作用域和函数作用域**。ES6的到来，为提供了‘块级作用域’,可通过新增命令let和const来体现

### 全局作用域，函数作用域

> 最外层定义的变量和函数都拥有全局作用域。

```javascript
const a = 'global' // 最外层变量
function side(){ // 最外层函数变量
    
}
var outVariable = "我是最外层变量"; //最外层变量
function outFun() { //最外层函数
    var inVariable = "内层变量";
    function innerFun() { //内层函数
        console.log(inVariable);
    }
    innerFun();
}
console.log(outVariable); //我是最外层变量
outFun(); //内层变量
console.log(inVariable); //inVariable is not defined
innerFun(); //innerFun is not defined
```

- 所有末定义直接赋值的变量自动声明为拥有全局作用域。

```javascript
function outFun2() {
    variable = "未定义直接赋值的变量";
    var inVariable2 = "内层变量2";
}
outFun2();//要先执行这个函数，否则根本不知道里面是啥
console.log(variable); //未定义直接赋值的变量
console.log(inVariable2); //inVariable2 is not defined
```

- 所有window对象的属性拥有全局作用域（window.location、window.top等）



全局作用域通常容易影响命名的冲突覆盖。



```javascript
var data = {
    name: 'global'
}
var data = {
    value: 'window'
}
// 会引起变量覆盖
```

因此会有ES6中的const、let。



这里可以聊到jquery源码中的所有代码都回放在 `(function(){....})()`中 ,因为放在里面的变量不会泄露，暴露出去，不会污染外面的变量。不会对其他js脚本造成影响，这是函数作用域的一个提现。



### 函数作用域：

> 是指声明在函数内部的变量，和全局作用域相反，局部作用域只能在固定的一段代码片段内可访问到。



值得注意的是：**块语句（大括号“｛｝”中间的语句），如 if 和 switch 条件语句或 for 和 while 循环语句，不像函数，它们不会创建一个新的作用域**。在块语句中定义的变量将保留在它们已经存在的作用域中。



```javascript
if (true) {
    // 'if' 条件语句块不会创建一个新的作用域
    var name = 'Hammad'; // name 依然在全局作用域中
}
console.log(name); // logs 'Hammad'
```

### 块级作用域（let、const）

块级作用域可通过新增命令let和const声明，所声明的变量在指定块的作用域外无法被访问。块级作用域在如下情况被创建：



1. 在一个函数内部
2. 在一个代码块（由一对花括号包裹）内部



let 声明的语法与 var 的语法一致。你基本上可以用 let 来代替 var 进行变量声明，但会将变量的作用域限制在当前代码块中。块级作用域有以下几个特点：



- let不会造成变量提升到代码块顶部
- let会造成暂时性死区
- let禁止重复声明



```javascript
var a = [];
for (var i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 10
```

变量i是var命令声明的，在全局范围内都有效，所以全局只有一个变量i，每一次循环，变量的i的值都回发生改变，而循环里console.log(i)里面的 i 指向的是全局的i，不是for循环里面的 i，所以先执行for循环完，再调用a[6](); 时 i 的值已经是10了。



如果使用let，声明的变量仅在块级作用域内有效，最后输出的是 6。

```javascript
var a = [];
for (let i = 0; i < 10; i++) {
  a[i] = function () {
    console.log(i);
  };
}
a[6](); // 6
```

变量i是let声明的，当前的i只在本轮循环有效，所以每一次循环的i其实都是一个新的变量，所以最后输出的是6。你可能会问，如果每一轮循环的变量i都是重新声明的，那它怎么知道上一轮循环的值，从而计算出本轮循环的值？这是因为 JavaScript 引擎内部会记住上一轮循环的值，初始化本轮的变量i时，就在上一轮循环的基础上进行计算。

另外，for循环还有一个特别之处，就是设置循环变量的那部分是一个父作用域，而循环体内部是一个单独的子作用域。

```javascript
for (let i = 0; i < 3; i++) {
  let i = 'abc';
  console.log(i);
}
// abc
// abc
// abc
```

上面代码正确运行，输出了 3 次abc。这表明函数内部的变量i与循环变量i不在同一个作用域，有各自单独的作用域。

### 作用域链 

#### [内容链接](https://juejin.im/post/5c8290455188257e5d0ec64f#heading-8)

#### 1. 自由变量



> 首先认识下什么是自由变量，就比如说在函数中console.log(a)，而a在函数中当前作用域中没有定义，这时候的a就是一个自由变量

```javascript
var a = 100
function fn() {
    var b = 200
    console.log(a) // 这里的a在这里就是一个自由变量
    console.log(b)
}
fn()
```

#### 2.什么是作用域链

> 首先当函数创建的时候就形成了作用域链，作用域链用来当做查找变量的索引，首先会去当前的父级作用域中查找，如果父级没有找不到，再一层层向上查找，直到找到全局作用域还没有找到，解释器会返回undefined结果。这种一层层的关系就叫作用域链



```javascript
var a = 100
function F1() {
    var b = 200
    function F2() {
        var c = 300
        console.log(a) // 自由变量，顺作用域链向父作用域找
        console.log(b) // 自由变量，顺作用域链向父作用域找
        console.log(c) // 本作用域的变量
    }
    F2()
}
F1()
var x = 10
function fn() {
  console.log(x)
}
function show(f) {
  var x = 20
  (function() {
    f() //10，而不是20
  })()
}
show(fn)
```

在fn函数中，取自由变量x的值时，要到哪个作用域中取？——要到创建fn函数的那个作用域中取，**无论fn函数将在哪里调用**。

所以，不要在用以上说法了。相比而言，用这句话描述会更加贴切:**要到创建这个函数的那个域”。 作用域中取值,这里强调的是“创建”，而不是“调用”**，切记切记——其实这就是所谓的"静态作用域"



![img](https://cdn.nlark.com/yuque/0/2020/png/1535745/1596260923626-9e5df9e2-cfbb-45d4-99db-95baaeca329b.png)

![img](https://cdn.nlark.com/yuque/0/2020/png/1535745/1596260923607-58029323-41dc-4d0f-b865-4e1e7e45ac25.png)

## 9.闭包 ()

[闭包深入理解](http://cavszhouyou.top/JavaScript深入理解之闭包.html)

> 首先理解闭包的含义，就是有权访问另一个函数作用域中变量的函数。常见的闭包创建方式就是，一个函数内创建另一个函数。

先来看个例子吧：

```javascript
function closure() {
    const a = 20
    function inner() {
        console.log(a)
    }
    inner()
}
closure()
```

在closure函数内创建了一个inner函数里面console.log(a)会通过作用域链一层层查找a变量，这就构成了一个闭包。因为a变量是其他函数作用域中的变量。

## 下面问题改进：[详细讲解](https://juejin.im/post/58cf180b0ce4630057d6727c)

```javascript
for (var i = 1; i <= 10; i++) {
    setTimeout(function () {
        console.log(i);
    }, 1000);
}
```

在这段代码中，对其的预期是输出1~10，但却输出10次11。这是因为setTimeout中的匿名函数执行的时候，for循环都已经结束了，for循环结束的条件是i大于10，所以当然是输出10次11咯。

究其原因：i是声明在全局作用中的，定时器中的匿名函数也是执行在全局作用域中，那当然是每次都输出11了。

原因知道了，解决起来就简单了，可以让i在每次迭代的时候，都产生一个私有的作用域，在这个私有的作用域中保存当前i的值。

```javascript
for (var i = 1; i <= 10; i++) {
    (function () {
        var j = i;
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })();
}
```

这样就达到的预期了呀，让用一种比较优雅的写法改造一些，将每次迭代的i作为实参传递给自执行函数，自执行函数中用变量去接收：

```javascript
for (var i = 1; i <= 10; i++) {
    (function (j) {
        setTimeout(function () {
            console.log(j);
        }, 1000);
    })(i);
}
```

## 10.创建对象的几种方式

1. 工厂函数模式。用函数来封装创建对象的细节，从而调用函数达到复用创建的目的。工厂函数的问题在于创建的对象无法与某个类联系起来，只是单一的封住了函数创建对象的方法复用了代码，无法建立对象和类型的关系。
2. 构造函数模式。js中的每一个函数都可以作为构造函数，只要一个函数是通过 new 来调用的，那就可以称他为构造函数。执行函数首先会创建一个对象，然后将对象的原型指向构造函数的原型，然后执行上下文中this指向这个对象。最后再执行整个函数，如果返回值不是对象，则返回新建的对象。因为 this 的值指向了新建的对象，因此可以使用 this 给对象赋值。构造函数模式相对于工厂模式的优点是，所创建的对象和构造函数建立起了联系，因此可以通过原型来识别对象的类型。但是构造函数存在一个缺点就是，造成了不必要的函数对象的创建，因为在 js 中函数也是一个对象，因此如果对象属性中如果包含函数的话，那么每次都会新建一个函数对象，浪费了不必要的内存空间，因为函数是所有的实例都可以通用的。
3. 原型模式。
4. 组合使用构造函数模式和原型模式。
5. 动态原型模式，这一种模式将原型方法赋值的创建过程移动到了构造函数的内部，通过对属性是否存在的判断，可以实现仅在第一次调用函数时对原型对象赋值一次的效果。这一种方式很好地对上面的混合模式进行了封装。
6. 寄生构造函数模式，这一种模式和工厂模式的实现基本相同，我对这个模式的理解是，它主要是基于一个已有的类型，在实例化时对实例化的对象进行扩展。这样既不用修改原来的构造函数，也达到了扩展对象的目的。它的一个缺点和工厂模式一样，无法实现对象的识别。

## 11.[原型原型链](https://github.com/mqyqingfeng/Blog/issues/16)

### 什么是原型

在js中使用构造函数创建对象的，当声明一个构造函数的时候内部都会有一个prototype属性值，这个属性值**是个指针，指向一个对象，**这个对象包含了构造函数所有共享的实例的属性和方法。从字面意思来理解，那么prototype就是调用构造函数而创建那个实例的原对象。



流程图：

首先创建构造函数就有了一个prototype属性——>这个属性包含了所有共享实例属性和方法——>所以可以推断出这个prototype属性就是调用构造函数（new xxx()）而创建的实例的那个原对象。因此可以达到继承所有属性和方法——————>所以xxxx(构造函数).prototype == xxxx(实例对象)._ *proto_*   //true


### 什么是原型链



继承 主要就是依靠原型链来实现的。



概念：继承的基本思想就是其利用原型让一个引用类型继承另一个引用类型的属性和方法。回顾一下上面所说的概念，知道一个构造函数都一个一个原型对象（prototype），原型对象都包含一个指向构造函数内部的指针，而实例对象的原型（__proto__）又是通过构造函数原型对象创建出来的。那么假如，将原型对象等于另一个类型的实例（xxx.prototype= new xxxx()）,**因为另一个类型的实例（_** ***proto_*** ==xxx.prototype**）,所以原型**

**xxx1.prototype == xxx2.prototype从而继承了另一个原型上的属性和方法。**



**官方术语：简单回顾一下构造函数、原型和实例的关系：每个构造函数都有一个原型对象，原型对象都包含一个指向构造函数的指针，而实例都包含一个指向原型对象的内部指针。那么假如让原型对象等于另一个类型的实例，结果会怎样？显然，此时的原型对象 将包含一个指向另一个原型的指针，相应的另一个原型中也包含这一个指向另一个构造函数的指针。假如另一个原型又是另一个类型的实例，那么上述关系依然成立，如此层层递进，就构成了实例与原型的链条，这就是所谓原型链的基本概念。**



### 原型的概念和继承方法：



#### 1.借助构造函数继承：

```javascript
/**
    * 借助构造函数实现继承
 */
function Parent1() {
  this.name = 'parent1'
}

function Child1() {
  Parent1.call(this) //因为将Parent1构造函数的this重新指向了Child1中的this，而Parent1中的this有name属性，所以Child1实现了Parent1的继承
  this.type = 'child1'
}
console.log(new Parent1(), new Child1())
// 缺点   ————子类拿不到父类的方法
Parent1.prototype.say = function () {
  console.log('say')
}
```

优点：可以在子类型构造函数中向超类型构造函数添加参数

这时 打印Child1.say()获取不到  ,所以只能实现部分继承（父类的属性都在构造函数里面就能实现，如果不在，在它的原型上则无法实现其他继承）



#### 2.借助原型链实现继承:

```javascript
/**
         * 借助原型链实现继承
         */
function Parent2() {
  this.name = 'parent2'
  this.play = [1, 2, 3]
}

function Child2() {
  this.type = 'child2'
}
Child2.prototype = new Parent2()
console.log(new Child2().__proto__)
var s1 = new Child2()
var s2 = new Child2()
console.log(s1, s2)
s1.play.push(4)
console.log(s1.play, s2.play) // [1,2,3,4] ,[1,2,3,4]
// 缺点 —————用原型链继承
```

因为s1.__proto__ === s2.__proto__ ,s1 s2中的play引用的是用同一个对象（父类Parent2中的play）,而且是引用类型（不会保存和复制值的本身） 所以play属性一起同有也一起改变了。

缺点：1. 包含引用类型的原型属性会被所有实例属性共享，容易造成属性的修改混乱。

​            2.在创建子类型的实例时，不能向超类型的构造函数中传递参数。

#### 3.组合方式，上面的第一种和第二种结合起来

```javascript
/**
         * 组合方式，上面的第一种和第二种结合起来
         */
function Parent3() {
  this.name = 'parent3'
  this.play = [1, 2, 3]
}

function Child3() {
  Parent3.call(this)
  this.type = 'child3'
}
Child3.prototype = new Parent3()
Child3.prototype.constructor = Child3
// console.log(new Child2().__proto__)
var s3 = new Child3()
var s4 = new Child3()
// console.log(s1, s2)
s3.play.push(4)
console.log(s3.play, s4.play) // [1,2,3,4] ,[1,2,3]
// 解决了上面第二种原型链方式的缺点
```

优点：组合继承避免了原型链和借用构造函数的缺陷，融合了它们的优点，成为 JavaScript 中最常用的继承模式。而且，instanceof 和 isPropertyOf() 也能够用于识别基于组合继承创建的对象。

 缺点  ——————父类Parent3执行了两次 第一次是Parent3.call(this)执行了一次，第二次是Child2.prototype = new Parent2()又执行了一次，总的执行了两次。

#### 4.（原型式继承）组合继承优化1

```javascript
/**
         * 组合继承优化1
         */
function Parent4() {
  this.name = 'parent4'
  this.play = [1, 2, 3]
}

function Child4() {
  Parent4.call(this)
  this.type = 'child3'
}
Child4.prototype = Parent4.prototype
 //这样实现了只执行的一次 Parent4.prototype === new Parent4().__proto__
var s5 = new Child4()
var s6 = new Child4()
console.log(s5 instanceof Child4, s6 instanceof Child4) // true，true
```

#### 5.（寄生式组合继承）组合继承优化2

```javascript
/**
         * 组合继承优化2
         */
function Parent5() {
  this.name = 'parent5'
  this.play = [1, 2, 3]
}

function Child5() {
  Parent5.call(this)
  this.type = 'child5'
}
Child5.prototype = Object.create(Parent5.prototype) //
Child5.prototype.constructor = Child5 //实现子父隔离
```

#### [继承说明文章](http://cavszhouyou.top/JavaScript深入理解之继承.html)

## 12.谈谈你对this、call、apply和bind的理解



### this的初衷

> this设计的初衷是在函数内部使用，指代当前的运行环境。为什么这么说呢？

JavaScript对象赋值行为是将地址赋给一个变量，引擎读取变量的时候其实要了个地址，从原始地址中读取对象。而JavaScript允许函数内部引用当前环境的其他变量，而这个变量是由运行环境提供的。由于函数又可以再不同的运行环境中执行（如：全局作用域执行，对象内执行），所以需要一个机制来表明代码到底在哪执行！于是this出现了，它设计的目的就是在函数内部，指代函数当前的运行环境。



### this分类

### global this



在全局范围内：

- this等价于window全局对象；
- 用var声明变量相当于给this、winodw添加属性；
- 如果声明变量没有使用var或者let、const。就是给全局的this添加属性或者改变属性值。



```javascript
// 1
console.log(this === window); //true
//2
var name = "Jake";
console.log(this.name ); // "Jake"
console.log(window.name ); // "Jake"

//3
 age = 23;
 function testThis() {
   age = 18;
 }
 console.log(this.age ); // 23
 testThis();
 console.log(this.age ); // 18
```

总结：只要在全局环境中声明变量就是给this添加变量，因为在执行全局执行上下文的时候，默认会创建一个this对象，将this的值赋值给全局的window。所以this===window。

### function this

> 函数中的this就是运行时谁调用他，就指向谁，**this永远指向最后调用它的那个对象**。



```javascript
var name = "windowsName";

function sayName() {
  var name = "Jake";
  console.log(this.name); // windowsName
  console.log(this); // Window
}
sayName();
console.log(this.name) // Window
```

> 需要注意的是，对于严格模式来说，默认绑定全局对象是不合法的，this被置为undefined。会报错 `Uncaught TypeError: Cannot read property 'name' of undefined。`



再看个例子：

```javascript
function foo() {
    console.log( this.age );
}

var obj1 = {
    age : 23,
    foo: foo
};

var obj2 = {
    age : 18,
    obj1: obj1
};

obj2.obj1.foo(); // 23
```

还是开头的那句话，最后调用`foo()`的是`obj1`，所以this指向`obj1`，输出23。



### 构造函数中的this

> 所谓的构造函数，就是通过这个函数生成一个新的对象，当一个函数通过构造器使用时（通过new创建）它的this绑定的是当前新创建的那个对象。如果没有使用new关键字，那么他就是一个普通的函数，this将指向winodw对象。

#### new的过程



```javascript
 var a = new Foo('name', 'age')
 new Foo {
   var obj = {}
   obj.__proto__ = Foo.prototype
   var result = Foo.call(this, 'name', 'age')
   return typeof result === "object" ? result :obj
 }
```



若执行 new Foo()，过程如下：

 1）创建新对象 obj；

 2）将对象的obj的隐式原型等于Foo的显示原型

 3）执行函数 Foo，执行过程中内部 this 指向新创建的对象 obj（这里使用了call改变this指向）；

 4）如果 Foo 内部显式返回对象类型数据，则返回该数据，执行结束；否则返回新创建的对象 obj。



```javascript
var name = "Jake";jiuzhixiang
function testThis(){
  this.name = 'jakezhang';
  this.sayName = function () {
        return this.name;
    }
}
console.log(this.name ); // Jake

new testThis(); 
console.log(this.name ); // Jake

var result = new testThis();
console.log(result.name ); // jakezhang
console.log(result.sayName()); // jakezhang

testThis();  
console.log(this.name ); // jakezhang
```

很显然，谁被new了，this就指向谁。



### class 中的this

在es6中，类，是 JavaScript 应用程序中非常重要的一个部分。类通常包含一个 constructor ， this可以指向任何新创建的对象。 不过在作为方法时，如果该方法作为普通函数被调用， this也可以指向任何其他值。与方法一样，类也可能失去对接收器的跟踪。



```javascript
class Hero {
  constructor(heroName) {
    this.heroName = heroName;
  }
  dialogue() {
    console.log(`I am ${this.heroName}`)
  }
}
const batman = new Hero("Batman");
batman.dialogue();
```

构造函数里的 this指向新创建的 类实例。当调用 batman.dialogue()时， dialogue()作为方法被调用， batman是它的接收器。 但是如果将 dialogue()方法的引用存储起来，并稍后将其作为函数调用，会丢失该方法的接收器，此时 this参数指向 undefined 。

```js
const say = batman.dialogue;
say(); // 报错了
```

出现错误的原因ES6类隐式运行在严格模式下的，是在没有任何自动绑定的情况下调用 say()函数的。要解决这个问题，需要手动使用 bind()将 dialogue()函数与 batman绑定在一起。

```javascript
const say = batman.dialogue.bind(batman);
say();
```

### call、apply和bind中的this

call、apply、bind 被称之为 this 的强绑定，用来改变函数执行时的this指向，目前所有关于它们的运用，都是基于这一点来进行的。

```javascript
var name = 'zjk';
  function fun() {
  console.log (this.name);
}

var obj= {
  name: 'jake'
};
fun(); // zjk
fun.call(obj); //Jake
```

上面的`fun.call(obj)`等价于`fun.apply(obj)`和`fun.bind(obj)()`



### 箭头函数中的this

> 箭头函数的 this 和 JavaScript 中的函数有些不同。箭头函数会永久地捕获 this值，阻止 apply或 call后续更改它。



ES5中的this要看在什么地方调用（即运行时），通过谁是最后调用它该函数的对象来判断this指向，ES6箭头函数中的（=>）中的没有this绑定（所以箭头函数没有prototype属性，因此不能作为实例对象），必须通过查找作用域链来决定其值。如果箭头函数被非箭头函数包含，则this绑定的是最近一层非箭头函数的this，否则，this为undefined。箭头函数的this始终指向函数定义时的this，而非执行时。

```javascript
let name = "zjk";

let o = {
  name : "Jake",

  sayName: function () {
    console.log(this.name)     
  },

  func: function () {
    setTimeout( () => {
      this.sayName()
    },100);
  }

};

o.func()     // Jake
```

## call & apply & bind

> 每个函数都包含两个非继承而来的方法：apply()和 call()。这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内 this 对象的值。

#### apply()



apply接受两个参数，一个是在其中运行函数的作用域（绑定this指向），另一个接受一个参数数组。第二个参数可以是Array的实例，也可以是arguments对象。



```javascript
function sum(num1, num2){ 
 return num1 + num2; 
} 
function callSum1(num1, num2){ 
 return sum.apply(this, arguments); // 传入 arguments 对象
} 
function callSum2(num1, num2){ 
 return sum.apply(this, [num1, num2]); // 传入数组
} 
console.log(callSum1(10,10)); //20
console.log(callSum2(10,10)); //20
```

#### call()

一句话概括：

> call() 方法在使用一个指定的 this 值和若干个指定的参数值的前提下调用某个函数或方法。



call与apply作用相同，他们的区别就是第二个接受参数不相同，后者apply是以数组的形式，前者call传递函数参数必须逐个列举出来。



```javascript
function sum(num1, num2){ 
 return num1 + num2; 
}
function callSum(num1, num2){ 
 return sum.call(this, num1, num2); 
} 
console.log(callSum(10,10)); //20
```

call、apply的使用完全取决于采用哪种给函数传递参数的方式方便。



- 参数数量/顺序确定就用call，参数数量/顺序不确定的话就用apply。
- 考虑可读性：参数数量不多就用call，参数数量比较多的话，把参数整合成数组，使用apply。



#### bind()

bind方法会创建一个函数的实例，其this的值会被绑定到传给bind（）函数的值，意思就是bind()会返回一个函数，例如：

```javascript
 var number = '999';
var obj = {
  number: '888'
}

function num() {
  console.log(this.number)
}
const applyNum = num.bind(obj)
applyNum() // 888
```



### call & apply & bind 的区别



#### 执行：

- call、apply改变函数的this上下文后马上执行函数；
- bind则是返回改变了上下文的函数，不执行函数，需要手动执行；



```javascript
function add (a, b) {
    return a + b;
}

function sub (a, b) {
    return a - b;
}

add.bind(sub, 5, 3); // 这时，并不会返回 8
add.bind(sub, 5, 3)(); // 调用后，返回 8
```



#### 返回值

- call/apply 返回fun的执行结果
- bind返回fun的拷贝，并指定了fun的this指向，保存了fun的参数。





### call、apply、bind应用场景

- 类数组转数组

```javascript
// 类数组转数组

const arrayLike = {
    0: 'qianduan',
    1: '21',
    2: 'qian',
    length:3
}

const arr = Array.prototype.slice.call(arrayLike)
console.log(arr) // [ 'qianduan', '21', 'qian' ]
```

- 求数组中的最大值

```javascript
const arr = [1, 22, 56, -50, 33, 50, 20]

const max = Math.max.apply(Math,arr)
console.log(max) // 56
const max = Math.max.call(Math,1, 22, 56, -50, 33, 50, 20)
console.log(max) // 56
```

- 变量类型判断

```javascript
function isArray(obj){
  return Object.prototype.toString.call(obj) == '[object Array]';
}
isArray([]) // true
isArray('string') // false
```

- 继承

```javascript
// 继承

function Father(name) {
    this.name = name
    this.arr = ['hello', 21, 'job']
}
Father.prototype.sayName = function () {
    console.log(this.name,'name')
}
function Son(age) {
    Father.call(this, 'Father')
    this.age = age
}

function mergePrototype(sonFn, fatherFn) {
    sonFn.prototype = Object.create(fatherFn.prototype)
    sonFn.prototype.constructor = sonFn
}
mergePrototype(Son, Father)
const instance1 = new Son(21)
const instance2 = new Son(21)
instance1.arr.push('哈哈哈哈')
console.log(instance1.arr)
console.log(instance1.sayName())
console.log(instance2.arr)
```

#### bind()

原理其实就是返回闭包，毕竟 bind 返回的是一个函数的拷贝

- 类绑定

```javascript
const name = {
    name: 'window'
}
class binds {
    constructor(name) {
        this.name = name
    }
    getName() {
        console.log(this.name)
    }
}

const instance = new binds('name')
const applyClass = instance.getName.bind(name)
applyClass() // winodw
```



- 闭包

```javascript
for (var i = 1; i <= 5; i++) {
    // 缓存参数
    setTimeout(function (i) {
        console.log('bind', i) // 依次输出：1 2 3 4 5
    }.bind(null, i), i * 1000);
}
```



## 手写apply、call、bind



###  手写apply

```javascript
Function.prototype.myApply = function (context, args) {
  // call和apply主要在这里的不同这里不展开因为apply可以是一个数组形式接收参数
    const fn = Symbol('fn')
    context = context || window
    context[fn] = this
    const result = context[fn](...args)
    delete context[fn]
    return result
}
```

写法二：

```javascript
// apply 函数实现

Function.prototype.myApply = function(context) {
  // 判断调用对象是否为函数
  if (typeof this !== "function") {
    throw new TypeError("Error");
  }

  let result = null;

  // 判断 context 是否存在，如果未传入则为 window
  context = context || window;

  // 将函数设为对象的方法
  context.fn = this;

  // 调用方法,判断是否有参数值传入
  if (arguments[1]) {
    result = context.fn(...arguments[1]);
  } else {
    result = context.fn();
  }
  // 将属性删除
  delete context.fn;
  return result;
};
```

- 优化

道理是这么个道理，其实要做的优化还有很多，这里就把 context 的判断需要优化下：

```javascript
// 正确判断函数上下文对象
if (context === null || context === undefined) {
  // 指定为 null 和 undefined 的 this 值会自动指向全局对象(浏览器中为window)
  context = window 
} else {
  context = Object(context) // 值为原始值（数字，字符串，布尔值）的 this 会指向该原始值的实例对象
}
```

别的优化大家可以添加各种的用户容错。比如对第二个参数的类数组做个容错

```javascript
function isArrayLike(o) {
  if (o &&                                    // o不是null、undefined等
      typeof o === 'object' &&                // o是对象
      isFinite(o.length) &&                   // o.length是有限数值
      o.length >= 0 &&                        // o.length为非负值
      o.length === Math.floor(o.length) &&    // o.length是整数
      o.length < 4294967296)                  // o.length < 2^32
    return true;
  else
    return false;
}
```

### call

```javascript
Function.prototype.myCall = function (thisArg, ...args) {
    console.log(this,'6666666666') // this指向为当前调用的函数
    const fn = Symbol('fn')
    thisArg = thisArg || window
    thisArg[fn] = this
    const result = thisArg[fn](...args)
    delete result
    return result
}
var name = 'window'
var obj = {
  name: 'obj'
}

function applys() {
  console.log(this.name)
}
applys.myCall(obj) // obj
```



### 手写bind()

```javascript
Function.prototype.myBind = function (objThis, ...params) {
        const thisFn = this; // 储存源函数，this就是源函数调用者
     if(typeof this != 'function') {
        throw Error('not a function');
     }
        let tobind = function (...secondParams) { // 返回一个函数，secondParams为返回后再次传入参数
          const isNew = this instanceof tobind // this是否是fToBind的实例 也就是返回的fToBind是否通过new调用
          const context = isNew ? this : Object(
            objThis) // 如果源函数被new了，直接绑定this上，否则绑定传入的objThis上；                
          return thisFn.call(context, ...params, ...secondParams) // 用call调用源函数绑定this指向并传递参数，返回执行结果
  }
  if (thisFn.prototype) {
    // 复制源函数的prototype给tobind，一些情况下函数没有prototype，比如箭头函数
    tobind.prototype = Object.create(thisFn.prototype)
  }
  // 返回指向改变函数
  return tobind
}
var name = 'window'
var obj = {
  name: 'mybind'
}

function Mybind() {
  console.log(this.name)
}
Mybind.myBind(this)() //window
Mybind.myBind(obj)() //mybind
Function.prototype.myBind = function (context, ...args) {
    const fn = this
    args = args ? args : []
    return function newFn(...newFnArgs) {
        return this instanceof newFn ? new fn(...args, ...newFnArgs) 
        :fn.apply(context, [...args,...newFnArgs])       
    }
}
```

版本二：

```javascript
Function.prototype.myBind = function (context) {
    const fnThis = this;
    const args = [...arguments].slice(1)
    let empty = function () { }
    const binds = function () {
        // 判断返回的函数是否被new生成实例
        if (this instanceof binds) {
            fnThis.apply(this, args.concat([...arguments]))
        }
        fnThis.apply(context, args.concat([...arguments]))
    }
    // 为了避免new生成的实例 共用构造函数实例属性和方法，（处在一个原型链上的话）
    // 他们会相互影响原型上的方法。没有实现隔离
    empty.prototype = this.prototype
    binds.prototype = new empty()
    return binds
}
```

测试结果：

```javascript
//  测试
var name = 'window name'
var obj = {
    name: 'obj name',
}
var fn = function () {
    console.log(this.name, [...arguments])
}
fn(1, 2, 3, 4) // 直接执行，this指向window
fn.myBind(obj, 1, 2)(3, 4) // mybind改变this指向
fn.bind(obj, 1, 2)(3, 4) // 原生bind

// 以上执行结果如下：
// window name [1, 2, 3, 4]
// obj name [1, 2, 3, 4]
// obj name [1, 2, 3, 4]
```

总结：

1. 在浏览器，在全局范围内this指向window对象（全局执行上下文，创建this对象，this赋值给window）
2. 在函数环境中，谁调用了函数，this指向谁
3. 在构造函数中，this指向new出来的那个新对象
4. call、apply、bind中的this被强绑定在指定的那个对象上
5. 箭头函数本身没有this，箭头函数的this指向的是父级作用域的this，**不是调用时的this，****要知道前四种都是调用时的确定的，也就是动态的**，**箭头函数的this指向是动静态的，声明的时候就确定了。**

**
**

## 13.获取原型的方法

- p.proto
- p.constructor.prototype
- Object.getPrototype(p)

## 14.什么是闭包，为什么要用它



含义：**闭包是指有权访问另一个函数作用域内变量的函数**，创建闭包的最常见的方式就是在一个函数内创建另一个函数，创建的函数可以 访问到当前函数的局部变量。



闭包有两个常用的用途。

- 闭包的第一个用途是使在函数外部能够访问到函数内部的变量。通过使用闭包，可以通过在外部调用闭包函数，从而在外部访问到函数内部的变量，可以使用这种方法来创建私有变量。
- 函数的另一个用途是使已经运行结束的函数上下文中的变量对象继续留在内存中，因为闭包函数保留了这个变量对象的引用，所以这个变量对象不会被回收。



```javascript
function closure() {
    let arr = []
    return function (id) {
      console.log(arr.indexOf(id))
      if (arr.indexOf(id) >= 0) {
        return true
      } else {
        arr.push(id)
        return false
      }
    }
}
const result = closure()
console.log(result(20))
console.log(result(30))
```

应用场景：

- 防抖节流
- 收敛权限
- 使用闭包设计单例模式
-  函数作为返回值
- 函数作为参数传递

## 15.什么是DOM、BOM



> DOM即文档对象模型（Document Object Model）,D可以理解为web网页加载的文档，O可以理解为类似window对象，可以调用属性和方法操作html、xml节点内容，这里就是所说的document对象，M可以理解为网页结构，即DOM数，又节点构成。





> BOM即浏览器对象模型，把整个浏览器当做对象来看待， 这个对象定义了与浏览器进行交互的接口和方法。BOM的核心是window，它既是通过js访问浏览器窗口的一个接口，也是一个全局Global对象。这意味着在网页中定义的任何对象，变量函数，都作为全局对象的一个属性或方法存在。
>
> window 对象含有 locati on 对象、navigator 对象、screen 对象等子对象，并且 DOM 的最根本的对象 document 对象也是 BOM 的 window 对 象的子对象。

## 16.三种事件模型是什么



- DOM 0 级模型：这个模型不会传播，没有事件流的概念。
- IE事件模型：在该事件中共有两个过程，事件处理阶段、事件冒泡阶段。事件处理阶段会首先执行目标元素绑定的监听事件。然后是事件冒泡阶段，冒泡指的是事件从目标元素冒泡到 document，依次检查经过的节点是否绑定了事件监听函数，如果有则执行。这种模型通过 attachEvent 来添加监听函数，可以添加多个监听函数，会按顺序依次执行。
- DOM2级事件模型：一共有三个过程，第一个时间捕获阶段——>事件处理阶段——>事件冒泡阶段。





## 17.什么是事件委托



> 其原理就是利用浏览器时间的冒泡机制。因为事件在冒泡过程中会上传到父节点，并且节点可以通过事件对象获取到目标节点，因此可以把子节点的监听函数放在父节点上，由父节点的监听函数统一处理多个子元素的事件。这就称为事件代理。



事件代理可以不必为每一个子节点都绑定一个监听事件。这样减少内存的消耗。并且还可以使用事件代理实现动态绑定事件，比如说新增了一个子节点，并不需要单独的为它添加一个事件，他发生的事件会交给父元素中的监听函数去处理。





## 18.时间传播



事件捕获目标元素——>目标时间处理——>目标事件冒泡，然后上升到每个元素，直到到达 window。



## 19.事件捕获



> window——> document——>html——>body——>目标元素





## 20.事件冒泡



> 与上述捕获流程相反：目标元素——> ······ ——>window



## 21.DOM操作





## 22.手写ajax（原生）

promise封装：

```javascript
const promiseUrl = function(url) {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.open('GET', url, true)
      xhr.onreadystatechange = function() {
        if (xhr.readyState != 4) return
        if (xhr.status == 200) {
          resolve(xhr.responseXML)
        } else {
          reject(new Error(this.statusText))
        }
        xhr.onerrer = function() {
          reject(new Error(this.statusText))
        }
        xhr.responseType = 'json'
        xhr.setRequestHeader('Accept', 'application/json')
        xhr.send(null)
      }
    })
}
```



## 23.js延迟加载的几种方式



js的加载、解析和执行会阻塞页面的渲染过程，因此希望js脚本能够尽可能的延迟加载  ，提高页面的渲染速度。



了解的几种方式是：

1. 将js脚本文件放入文档的底部，来使js基本尽可能的最后来加载执行。
2. 给js脚本添加**defer**属性，这个属性可以让脚本的加载与文档的解析同步解析，然后在文档解析完后再执行这个脚本文件。这样的话就能使页面的渲染不被阻塞。多个设置defer属性的脚本按规范来说最后是顺序执行的，但是在一些浏览器可能表现得不一样。
3. 给js脚本添加**async**属性，这个脚本会异步加载，不会阻塞页面的解析过程，**但是当脚本加载完毕后会立即执行js脚本，这个时候如果文档没有解析完成的话同样会照成阻塞。**多个async属性的脚本执行顺序是可不预测的，一般来说按照代码顺序依次执行。
4. 动态加载js脚本，动态创建DOM标签的方式，可以对文档加载时间进行监听，当文档加载完成后再动态创建script标签来映入js脚本文件。



## 24.谈谈你对模块化的理解

1. 将一个模块是用来实现一个特定功能的一组方法
2. 函数作为模块，容易造成全局变量的污染，且模块之间没有联系
3. 对象写法，将函数放入对象中，解决了函数作为模块的特点，缺点就是会暴露所有方法成员，而且外部可以修改对象属性中的值。
4. 使用立即执行函数，通过闭包，创建私有作用域，同时不会对全局作用域造成污染。





## 25.js事件循环



js执行过程有很多任务，这些任务总的分成两类：

1. 同步任务
2. 异步任务



当打开网站时，网页渲染的过程就是一堆同步任务，比如页面的骨架和页面元素的渲染。而像加载音频或者图片，一些请求数据任务，就是异步任务。

![image](https://cdn.nlark.com/yuque/0/2020/webp/1535745/1594117891968-b048acd1-3e8f-4ce2-966a-aa5173e7036e.webp)

- 同步和异步任务分别进入不同的执行"场所"，同步的进入主线程，异步的进入`Event Table`并注册函数。
- 当指定的事情完成时，`Event Table`会将这个函数移入`Event Queue`。
- 主线程内的任务执行完毕为空，会去`Event Queue`读取对应的函数，进入主线程执行。
- 上述过程会不断重复，也就是常说的`Event Loop`(事件循环)。



除了同步任务和异步任务，任务还可以更加细分为macrotask（宏任务）和microtask（微任务）

```javascript
微任务包括了 promise 的回调、node 中的 process.nextTick 、对 Dom 变化监听的 MutationObserver。

宏任务包括了 script 脚本的执行、setTimeout ，setInterval ，setImmediate 一类的定时事件，还有如 I/O 操作、UI 渲
染等。
```

具体该如何回答呢：

1. 创建全局执行上下文环境，将不同的函数执行上下文压入执行栈中，保证代码有序执行。
2. 在执行同步代码的时候，如果遇到了异步事件，不会立马执行返回结果，会将异步任务放入任务队列中等待，当主线程执行完毕，或者，任务队列中的异步任务注册完毕，会将异步任务放入主线程中，依次反复循环，直到执行栈中没有任务为止，最后执行结束。
3. 任务队列可以分为宏任务和微任务队列。当当前执行栈中的事件执行完毕后，js引擎首先会判断微任务队列中是否有任务可以执行，如果有就将微任务的首事件压入栈中执行。
4. 当微任务队列中的任务都执行完成后再去判断宏任务队列中的任务。



来玩一道理检测下的收货：

```javascript
setTimeout(function() {
  console.log(1)
}, 0);
new Promise(function(resolve, reject) {
  console.log(2);
  resolve()
}).then(function() {
  console.log(3)
});
process.nextTick(function () {
  console.log(4)
})
console.log(5)
```

当上面代码执行，第一轮，主线程执行，遇到setTimeout()会放入到宏任务队列中等待，继续  向下执行new Promise立即执行，输出2，then回调函数丢到微任务队列中（resolve为异步任务），再继续执行遇到process.nextTick()，同样再将回调函数扔到任务队列中，再继续执行，输出5，当所有同步任务执行完毕后看看有没有可以执行的微任务，发现有then函数和nextTick两个微任务，先执行哪个呢？process.nextTick指定的异步任务总是发生在所有异步任务之前，所以会先输出 4，然后再执行then函数，输出3，第一轮执行结束。第二轮从宏任务队列开始，发现setTimeout回调，输出1执行完毕；最后输出结果顺序为：25431



## 26.arguments的对象是什么？



arguments是函数中传递参数值的集合。他类似数组，因为它有.length属性，也可以使用数组索引arguments[1]来访问单个值，但它没有数组中的内置方法，如：forEach、reduce、filter、map。



可以使用Array.prototype.slice()方法或者Array.from()、[...arguments]等方法转换成数组，拥有数组方法。



```javascript
function args() {
    return [...arguments].reduce((t, c) => t + c, 0) // 3
}
```



**注意箭头函数没有arguments对象集合。**

**
**

```javascript
const four = () => arguments;

four(); // Throws an error  - arguments is not defined
```

当调用函数four时，它会抛出一个`ReferenceError: arguments is not defined error`。使用rest语法，可以解决这个问题。



```javascript
const args = (...args) => args
console.log(args(1, 2, 3)) // [1,2,3]
```

这会自动将所有参数值放入数组中。

## 27. 简单介绍一下 V8 引擎的垃圾回收机制

v8 的垃圾回收机制基于**分代回收机制，这个机制又基于世代假说，**这个假说有两个特点，**一是新生的对象容易早死**，另一个是**不死的对象会活得更久**。基于这个假说，v8 引擎将内存分为了**新生代和老生代。**

新创建的对象或者只经**历过一次的垃圾回收的对象被称为新生代**。**经历过多次垃圾回收的对象被称为老生代**。

新生代被分**为 From 和 To 两个空间**，To 一般是闲置的。当 From 空间满了的时候**会执行 Scavenge 算法进行垃圾**回收。当**执行垃圾回收算法的时候应用逻辑将会停止，等垃圾回收结束后再继续执行**。这个算法分为三步：

（1）首先检**查 From 空间的存活对象**，如果对象存活则判断对象是否满足晋升到老生代的条件，如果**满足条件则晋升到老生代**。**如果不满足条件则移动 To 空间**。

（2）如果对象不存活，则释放对象的空间。

（3）最后**将 From 空间和 To 空间角色进行交换**。

**新生代对象晋升到老生代**有两个条件：

（1）第一个是**判断是对象否已经经过一次 Scavenge 回收**。若经历过，则将对象从 **From 空间复制到老生代中**；若没有经历，**则复制到 To 空间。**

（2）第二个是 To 空间的内存使用占比是否超过限制。当对象**从 From 空间复制到 To 空间时，若 To 空间使用超过 25%**，则**对象直接晋升到老生代中**。设置 **25% 的原因主要是因为算法结束后，两个空间结束后会交换位置**，如果 **To 空间的内存太小，会影响后续的内存分配**。

**老生代采用了标记清除法和标记压缩法**。**标记清除法首先会对内存中存活的对象进行标记****，标记结束后清除掉那些没有标记的对象**。由于标记**清除后会造成很多的内存碎片**，不便于后面的内存分配。**所以为了解决内存碎片的问题引入了标记压缩法。**

由于在进行垃圾回收的时候会暂停应用的逻辑，对于新生代方法**由于内存小，每次停顿的时间不会太长**，但对于**老生代来说每次垃圾回收的时间长，停顿会造成很大的影响**。 为了解决这个问题 V8 **引入了增量标记的方法**，将**一次停顿进行的过程分为了多步，每次执行完一小步就让运行逻辑执行一会**，就这样交替运行。



## 28.哪些操作会带来内存泄漏



1. 意外的全局变量
2. 被遗忘的计时器，或者回调函数
3. 脱离DOM的引用
4. 闭包

- 第一种情况未声明变量，而自动（意外）创建了一个全局变量，而使这个变量一直留在内存中无法被回收
- 第二种情况设置了定时器函数，当页面卸载的时候没有关闭定时器（clearInteral），如果循环函数有对外部变量的话，那么这个变量会一直留在内存中，而无法被回收。
- 第三种情况是获取一个DOM元素的引用，而后面这个元素被删除，由于一直保留了对这个元素的引用，所以它也无法被回收。
- 第四种情况是不合理的使用闭包，从而导致某些变量一直被留在内存当中。



总结：垃圾回收机制无法清理完全这些内存变量，导致留在内存中，造成内存泄漏。



## 29.什么是类

类(class)是在 JS 中编写构造函数的新方法。它是使用构造函数的语法糖，在底层中使用仍然是原型和基于原型的继承。

```javascript
 //ES5 Version
   function Person(firstName, lastName, age, address){
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.address = address;
   }

   Person.self = function(){ //静态方法
     return this;
   }

   Person.prototype.toString = function(){
     return "[object Person]";
   }

   Person.prototype.getFullName = function (){
     return this.firstName + " " + this.lastName;
   }  

   //ES6 Version
   class Person {
        constructor(firstName, lastName, age, address){
            this.lastName = lastName;
            this.firstName = firstName;
            this.age = age;
            this.address = address;
        }
        static self() { //静态方法，不需要实例化类就可以拿到
           return this;
        }
        toString(){
           return "[object Person]";
        }
        getFullName(){
           return `${this.firstName} ${this.lastName}`;
        }
   }
```

重写方法并从另一个类继承

```javascript
//ES5 Version
Employee.prototype = Object.create(Person.prototype);

function Employee(firstName, lastName, age, address, jobTitle, yearStarted) {
  Person.call(this, firstName, lastName, age, address);
  this.jobTitle = jobTitle;
  this.yearStarted = yearStarted;
}

Employee.prototype.describe = function () {
  return `I am ${this.getFullName()} and I have a position of ${this.jobTitle} and I started at ${this.yearStarted}`;
}

Employee.prototype.toString = function () {
  return "[object Employee]";
}

//ES6 Version
class Employee extends Person { //Inherits from "Person" class
  constructor(firstName, lastName, age, address, jobTitle, yearStarted) {
    super(firstName, lastName, age, address);
    this.jobTitle = jobTitle;
    this.yearStarted = yearStarted;
  }

  describe() {
    return `I am ${this.getFullName()} and I have a position of ${this.jobTitle} and I started at ${this.yearStarted}`;
  }

  toString() { // Overriding the "toString" method of "Person"
    return "[object Employee]";
  }
}
```

所以要怎么知道它在内部使用原型？

```javascript
class Something {

}

function AnotherSomething(){

}
const as = new AnotherSomething();
const s = new Something();

console.log(typeof Something); // "function"
console.log(typeof AnotherSomething); // "function"
console.log(as.toString()); // "[object Object]"
console.log(as.toString()); // "[object Object]"
console.log(as.toString === Object.prototype.toString); // true
console.log(s.toString === Object.prototype.toString); // true
```

## 30.什么是proxy



https://es6.ruanyifeng.com/#docs/proxy



## 31.什么是高阶函数

高阶函数就是将函数作为参数或返回值的函数

```javascript
const higherOrderFunction = (params, callback) => {
    return callback(params)
}
```





## 32.手写实现Array.prototype.map()方法

```javascript
Array.prototype.myMap = function (arr, mycallback) {
    if (!Array.isArray(arr) || !arr.length || typeof mycallback !== 'function') return [];
    const result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        result.push(mycallback(arr[i], i, arr));
    }
    return result;
}

const arr = [1, 2, 3, 4]
const result = Array.prototype.myMap(arr, (v) => {
    return v * 2
})
console.log(result) //[ 2, 4, 6, 8 ]
```

##  33.手写实现Array.prototype.filter()方法

```javascript
const arr = [1, 2, 3, 4]
Array.prototype.myFilter = function (arr, mycallback) {
    if (!Array.isArray(arr) || !arr.length || typeof mycallback !== 'function') return [];
    const result = [];
    for (let i = 0, len = arr.length; i < len; i++) {
        if(mycallback(arr[i], i, arr)){
            result.push(arr[i])
        }        
    }
    return result;
}
const result = Array.prototype.myFilter(arr, (v) => {
    return v > 2
})
console.log(result) //[ 3, 4 ]
```



## 34.手写实现Array.prtotype.reduce()方法

```javascript
Array.prototype.myReuces = function (arr, mycallback, initialVlaue) {
    // 参数不为数组 直接返回[]
    if (!Array.isArray(arr) || !arr.length || typeof mycallback !== 'function') return [];
    // 如果没有将initialVlaue参数传递给该函数。将数组的第一项作为initialVlaue
    let isInitialVlaue = initialVlaue !== undefined;
    let value = isInitialVlaue ? initialVlaue : arr[0]
    for (let i = isInitialValue ? 0 : 1, len = arr.length; i < len; i++) {
        value = mycallback(value, arr[i], i, arr) // 传递出去
    }
    return value // 返回值
}
```



## 35.手写实现new



```javascript
const createNew = (fn, ...args) => {
    const obj = {};
    Object.setPrototypeOf(obj, fn.prototype);
    const result = fn.apply(obj, args);
    console.log(args)
    return result instanceof Object ? result : obj
}
function Person(name, nums) {
    this.name = name
    this.nums = nums
}
Person.prototype.sayName = function () {
    console.log(this.name)
}
const instances = createNew(Person, 'halou', 'luser')
instances.sayName()
```





## 36.手写函数柯里化实现



```
// 函数柯里化指的是一种将使用多个参数的一个函数转换成一系列使用一个参数的函数的技术。
function curry(fn, args) {
  // 获取函数需要的参数长度
  let length = fn.length;

  args = args || [];

  return function() {
    let subArgs = args.slice(0);

    // 拼接得到现有的所有参数
    for (let i = 0; i < arguments.length; i++) {
      subArgs.push(arguments[i]);
    }

    // 判断参数的长度是否已经满足函数所需参数的长度
    if (subArgs.length >= length) {
      // 如果满足，执行函数
      return fn.apply(this, subArgs);
    } else {
      // 如果不满足，递归返回科里化的函数，等待参数的传入
      return curry.call(this, fn, subArgs);
    }
  };
}

// es6 实现
function curry(fn, ...args) {
  return fn.length <= args.length ? fn(...args) : curry.bind(null, fn, ...args);
}
```





## 37.手写实现Promise



### [这篇文章留着在家慢慢啃](https://juejin.im/post/5e4613b36fb9a07ccc45e339#comment)

```javascript
// 手写promise
function myPromise(constructor) {
    let self = this
    self.satus = 'pending'
    self.value = undefined
    self.reason = undefined
    function resolve(value) {
        if (self.status === 'pending') {
            self.value = value
            self.status = 'resolved'
        }
    }
    function reject(reason) {
        if (self.status === 'pending') {
            self.value = reason
            self.status = 'rejected'
        }
    }
    try {
        constructor(resolve, reject)
    } catch (error) {
        reject(error)
    }
}
myPromise.prototype.then = function (onFullfilled, onRejected) {
    let self = this
    switch (self.status) {
        case 'reolved':
            onFullfilled(self.value);
        case 'rejected':
            onRejected(self.reason);
            break;
        default:
    }
}
```

## 38. 手写iterator接口

```javascript
const createIterator = (items) => {
    var i = 0;
    return {
        next: function () {
            var done = i > items.length
            var value = !done ? items[i++] : undefined
            return {
                done,
                value
            }
        }
    }
}
```

### Generator函数是什么，有什么作用？

Generator函数可以说是Iterator接口的具体实现方式。Generator 最大的特点就是可以控制函数的执行。

```javascript
function *foo(x) {
  let y = 2 * (yield (x + 1)) // 6
  let z = yield (y / 3) // 8
  return (x + y + z) // 42
}
let it = foo(5)
console.log(it.next())   // => {value: 6, done: false}
console.log(it.next(12)) // => {value: 8, done: false}
console.log(it.next(13)) // => {value: 42, done: true}
```

上面这个示例就是一个Generator函数，来分析其执行过程：

- 首先 Generator 函数调用时它会返回一个迭代器
- 当执行第一次 next 时，传参会被忽略，并且函数暂停在 yield (x + 1) 处，所以返回 5 + 1 = 6
- 当执行第二次 next 时，传入的参数等于上一个 yield 的返回值，如果你不传参，yield 永远返回undefined。此时 let y = 2 * 12，所以第二个 yield 等于 2 * 12 / 3 = 8
- 当执行第三次 next 时，传入的参数会传递给 z，所以 z = 13, x = 5, y = 24，相加等于 42



`Generator` 函数一般见到的不多，其实也于他有点绕有关系，并且一般会配合 co 库去使用。当然，可以通过 `Generator` 函数解决回调地狱的问题。



## 39.什么是 `async/await` 及其如何工作,有什么优缺点？

`async/await`是一种建立在Promise之上的编写异步或非阻塞代码的新方法，被普遍认为是 JS异步操作的最终且最优雅的解决方案。相对于 Promise 和回调，它的可读性和简洁度都更高。毕竟一直then()也很烦。



`async` 是异步的意思，而 `await` 是 `async wait`的简写，即异步等待。



**优缺点：**

`async/await`的优势在于处理 then 的调用链，能够更清晰准确的写出代码，并且也能优雅地解决回调地狱问题。当然也存在一些缺点，因为 await 将异步代码改造成了同步代码，如果多个异步代码没有依赖性却使用了 await 会导致性能上的降低。



## 40. instanceof的原理是什么，如何实现

instanceof 可以正确的判断对象的类型，因为内部机制是通过判断对象的原型链中是不是能找到类型的 prototype。



### 手写实现instaceof如何实现：

步骤：

- 获取类型的原型
- 然后获得对象的原型（就是对象new生成的实例p.__proto__）
- 然后一直循环对象原型是否等于类型原型，知道对象原型为null，因为原型链最终为null



```javascript
function myIntanceof(left, right) {
    prototype = right.prototype
    left = left.__proto__
    while (true) {
        if (left === null || right === undefined) return false
        if (prototype === left) return true
        left = left.__proto__
    }
}
const infect = [1, 2, 3, 4]
console.log(myIntanceof(infect, Array)) // true
```

## 41.手写防抖、节流函数

防抖

- 非立即执行版

```javascript
const debounce = (fn, wait) => {
  let timeout;
  return function () {
        const context = this;
    const args = [...arguments];
    if(timeout) clearTimeout(timeout);
    timeout = setTimeout( () => {
      fn.apply(context, args);
    },wait);
  }
}
```



- 立即执行版

```javascript
// 立即执行版
const debounce = (fn, wait) => {
    let timeout;
    return function () {
        const args = [...arguments];
        const flg = !timeout
        timeout = setTimeout(() => { timeout = null }, wait)
        if (flg) fn.apply(this, args)
    }
}
```

双剑合璧版

```javascript
/**
 * @desc 函数防抖
 * @param func 函数
 * @param wait 延迟执行毫秒数
 * @param immediate true 表立即执行，false 表非立即执行
 */
function debounce(func, wait, immediate) {
  let timeout;
  return function () {
    const context = this;
    const args = [...arguments];
    if (timeout) clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait)
      if (callNow) func.apply(context, args)
    }
    else {
      timeout = setTimeout(() => {
        func.apply(context, args)
      }, wait);
    }
  }
}
```

节流

```javascript
// 时间节流
const throttle = (fn, wait) => {
    let previous = 0;
    return function () {
        let now = Date.now;
        let context = this;
        let args = arguments;
        if (now - previous > wait) {
            fn.apply(context, arguments)
            previous = now
        }
    }
}   
// 定时器版
const throttle = (fn, wait) => {
    let timeout;
    return function () {
        const context = this;
        const args = arguments;
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                fn.apply(context, args)
            }, wait)
        }
    }
}
```

## 执行上下文？

执行上下文就是**当前 JavaScript 代码被解析和执行时存在的环境。**

执行上下文分为 **全局执行上下文**。不在函数内的代码都位于全局执行上下文之中。**函数执行上下文：**被调用的时候就会被创建。**eval函数执行上下文：**运行在 eval 函数中的代码也会或者自己的执行上下文。

执行上下文也有自己的生命周期：创建阶段 => 执行阶段 =>回收阶段。

**创建阶段：**创建变量对象，比如函数的 arguments 参数对象；创建自己的作用域链，就比如说，函数内部使用了变量值，会通过作用域查找到变量值得所以在地方；还又就是创建 this，也分为多种情况，谁调用 this 就指向谁。

**执行阶段：**执行变量赋值，代码执行。

**回收阶段：**执行上下文出栈，等待虚拟机回收。

## 原型，原型链

- 原型：每一个 JavaScript 对象在创建的时候就会与之对应关联另一个对象，这个对象就是我们所说的原型。每一个对象都会从原型继承属性，其实就是`prototype`。比如说定义了一个 obj 那么会关联 `Object` 对象。继承了 Object 对象原型属性，因此我们创建的 obj 对象就有了 `Object`原型上面的方法。
- 原型链：由相互关联的原型组成的链状结构就是原型链。

## 闭包？

在某个内部函数的执行上下文被创建时。会被父级函数的**活动对象**添加到内部函数`[[scope]]`中，形成作用域。所以即使父级函数的执行上下文被销毁，但是因为其**活动对象**还是实际储存在内存中可被内部函数访问到，从而实现了闭包。

## 垃圾回收机制

[参考地址](https://juejin.cn/post/6981588276356317214)

有两种回收策略：

- **标记清除：**
- **引用计数：**

## let、var和const的区别？如果希望const定义的对象的属性也不能被修改该怎么做？

实现思路：

由于 ES5 环境没有 block 的概念，所以无法百分百实现 const，只能挂在到某个对象上，要么全局 window，要么就是自定义一个 object 当容器。

```js
const _const = function (data, value) {
  window.data = value
  Object.defineProperty(window, data, {
    enumerable: false,
    configurable: false,
    get: function () {
      return value
    },
    set: function (data) {
      if (data !== value) {
        throw new TypeError('Assignment to constant variable.')
      } else {
        return value
      }
    }
  })
}
_const('a', 2)
console.log(a);
for (let key in window) {
  if (key === 'a') { // 不能枚举，所以未执行
    console.log(window[item])
  }
}
a = 3 // error
```

## 如何使用 var 实现 let ？

```js
for (var z = 0; z < 4; z++) {
  (function f(a) {
    setTimeout(function () {
      console.log("var实现let", a);
    }, 1000);
  })(z);
}
```

使用 匿名函数，每次传入 z 是一个新的变量，a 参数会默认被 let a = z，生成局部变量。

## Map 和 Set 的区别，Map 和 Object 的区别？

- Map 和 Set 的区别？

Set 类似于数组成员唯一，没有重复的值。一维数组上，我们可以用它来去重。

Map 对象是键值对的集合，和 JSON 对象类似，但是 key 不仅可以是字符串还可以是其他各种类型的值包括对象都可以成为Map的键。

- Map 和 Object 的区别？

Object：本质上是 Hash 结构键值对集合，只能用字符串，数字，symbol等简单数据类型作为键。

Map： Map 类继承了Object，并对 Object 功能做了一些扩展，Map 键可以是任意数据类型。

- Map中的键值是有序的（FIFO 原则），而添加到对象中的键则不是。
- Map的键值对个数可以从 size 属性获取，而 Object 的键值对个数只能手动计算。
- Object 都有自己的原型，原型链上的键名有可能和你自己在对象上的设置的键名产生冲突。

**同名相撞：**

我们知道，对象其实就是在堆开辟了一块内存，其实Map的键存的就是这块内存的地址。只要地址不一样，就是两个不同的键，这就解决了同名属性的碰撞问题，而传统的Object显然做不到这一点。

```js
let m = new Map()
m.set({},1)
m.set({},2)
m.set({},3) //每一次都是开辟新的堆内存作为键
console.log(m) //Map { {} => 1, {} => 2, {} => 3 }

let o = {}
o['a'] = 1
o['a'] = 2
o['a'] = 3

console.log(o) //{ a: 3 }
```

**可迭代：**

Map 有迭代器，可以直接 for...of 循环遍历。而 Object 不行.

![https://cdn.nlark.com/yuque/0/2022/png/1535745/1645710543331-3efeb9ec-4823-45d3-ba5c-d28c721a1082.png](https://cdn.nlark.com/yuque/0/2022/png/1535745/1645710543331-3efeb9ec-4823-45d3-ba5c-d28c721a1082.png)

Object 打印的是 undefined。

**长度：**

Map可以直接拿到长度，而Object不行。

```js
let m = new Map()
m.set({a:1}, 'hello,world')//dom对象作为键
m.set(['username'],'jack')//数组作为键
m.set(true,1)//boolean类型作为键

console.log(m.size)//3
```

**可展开：**

Map 可以通过 ES6 `...` 扩展运算符展开成数组，object 不能。

**有序性：**

填入Map的元素，会保持原有的顺序，而Object无法做到。

```js
let cont = document.getElementById('cont')
let m = new Map()
m.set(cont, 'hello,world')//dom对象作为键
m.set(['username'],'jack')//数组作为键
m.set(true,1)//boolean类型作为键
//可以保持原有顺序打印
for(let [key,value] of m){
  console.log(key)

}

let obj = new Object()
obj['jack'] =  1
obj[0] = 2
obj[5] = 3
obj['tom'] = 4
//填入Object的元素key是自动按照字符串排序的，数字排在前面
for(let k in obj){
  console.log(k) // 0 5 jack tom
}

```

[Map 和 Object 的区别参考地址](https://www.jianshu.com/p/94cf51649517)

## 堆（head）和栈（stack）的区别

栈是**自动分配**相对**固定大小**的内存空间，并由系**统自动释放，**栈**数据结构**遵循**FILO**（first in last out）**先进后出后进先出**的原则。

**堆(heap)：**是堆内存的简称，堆是**动态分配**内存，**内存大小不固定**，也**不会自动释放，**堆**数据结构**是一种无序的树状结构，同时它还满足key-value键值对的存储方式；我们只用知道key名，就能通过key查找到对应的value。

**栈的特点：**开口向上、速度快,容量小**；堆的特点**：速度稍慢、容量比较大；

[参考地址](https://juejin.cn/post/6854573215327617031)

## instanceof 原理

[参考地址](https://juejin.cn/post/6844903613584654344#heading-1)

**null instanceof Obect ？**

**null instanceof null ？**

**isNaN ？**

## 遍历对象的方法？

- for... in
- for...of
- Object.keys/entries/values
- Obejct.getOwnPropertyNames - 拿到所有对象的 key 并返回数组(不包含symbol 属性)
- Object.getOwnPropertySymbols - 拿到对象 key 为 symbol 的键集合数组。
- Reflect.ownKeys() - 同 getOwnPropertyNames 一样。

## 遍历数组方法？

- for
- for...of/in
- forEach
- map
- filter
- reduce
- reduceRight
- every
- some
- find/findIndex
- keys/values/entries

## DOM 事件机制，怎么阻止事件捕获？

[参考地址](https://juejin.cn/post/6844903781969166349)

事件捕获： windows => document => html => body => 一层层最终到达目标元素。addEventListener 的第三个参数设置为 true 表示捕获。

事件冒泡：与事件捕获相反。 addEventListener 的第三个参数设置为 false 表示冒泡。

## Event

event.preventDefailt() 默认事件不触发，比如 a 标签

event.**stopPropagation() 阻止事件冒泡。**

## Event Loop

[参考地址](https://juejin.cn/post/6844903657264136200)

Evenet Loop 就是 js 的事件循环机制。js 是一门单线程语言，它的异步和多线程是通过 event loop 事件循环机制实现的，event loop 有三部分组成，调用栈（call stack）、消息队列（message queue）、微任务（Microtask Queue）。script 标签内的 js 会被一行行执行，遇到函数会被压入到调用栈中，也叫做帧，执行完毕会被弹出（因此栈也是先进后出的原则），比如 fetch，setTimeout，他们的回调函数会放入到消息队列中。promise、async await 会加入到微任务队列中。

**node环境下的 event loop ：**[https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/](https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/)

## setTimout 实现 setInterval

[参考地址](https://github.com/Advanced-Frontend/Daily-Interview-Question/issues/259)

## Commonjs 和 ES Module 的区别？

commonjs 是值的拷贝，导入值可以修改。

es module 导入值不能修改

## 观察者模式和订阅者模式的区别

[参考地址](https://juejin.cn/post/6961665158309478430)

## 实现一个方法延时一秒阻塞执行？

- promise + await 方法

## **三个请求依次执行？（使用 async await ）**

## **map和对象的区别？**

- 对象只能存在唯一的键
- 对象不能使用**`...`** 扩展运算，打印 obejct 的 iterater 是undefined
- map是有序的，object添加的键并不是
- map能够直接通过 size 或者大小，object 并不能。

## set和数组的区别？

- set 键是唯一的
- set 是伪数组
- set 和数组的操作方式不一样。
- set 只能使用 `new Set`创建定义

## 路由原理？

history -> pullstate

hash -> hashChange

**history 路由这一块有什么要注意的地方吗？**

[https://blog.csdn.net/yivisir/article/details/109672540](https://blog.csdn.net/yivisir/article/details/109672540)

**hash 路由和 history 路由的区别？**

**hash 路由页面之后服务端会带上这个 # 吗？**

[https://blog.csdn.net/lovefengruoqing/article/details/117024141](https://blog.csdn.net/lovefengruoqing/article/details/117024141)

## 深拷贝？

- map 储存已经遍历过的对象，避免循环引用问题。检查已经克隆过的对象。
- 考虑一些边界情况，如果是 null 或者是一个 function 直接return
- 还有一个不可遍历累心，symbol（Symbol.prototype.valueOf.call(targe)）

## Event bus

[https://juejin.cn/post/6844903587043082247](https://juejin.cn/post/6844903587043082247)

## 图片懒加载

[https://juejin.cn/post/6844903768966856717](https://juejin.cn/post/6844903768966856717)

## **怎么判断this指向？不适用 intanceof ？**

## **事件委托？**

**事件代理？**

**async await 原理？**

- genreator * yield

**设计模式？**

[https://segmentfault.com/a/1190000020179009](https://segmentfault.com/a/1190000020179009)

**类继承和原型继承有什么区别？**

[https://ld246.com/article/1548906479269](https://ld246.com/article/1548906479269)

[https://blog.51cto.com/u_15233911/2826326](https://blog.51cto.com/u_15233911/2826326)

**使用原型链有什么好处？**

[https://blog.csdn.net/zimeng303/article/details/112307953](https://blog.csdn.net/zimeng303/article/details/112307953)

**一帧等于多少毫秒？怎么计算的？ 1/60 = 16.6**




