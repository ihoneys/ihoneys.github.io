---
id: js2
slug: /primitive-data-type
title: JS 数据类型详解
date: 2019-12-21
categories:
 - 前端基础
tags:
 - JavaScript
---
:::tip
本文档是我自己理解及参考各官方文档和书籍整理.
:::


## JS 中的数据类型

 | 分类                      | 类型        | 类型细分     | 说明                          |
 | :------------------------ | :---------- | :----------- | :---------------------------- |
 | 基本(原始)数据类型/值类型 |             |              |                               |
 |                           | `Number`    | --           | 数字                          |
 |                           | `String`    | --           | 字符串                        |
 |                           | `Boolean`   | --           | 布尔                          |
 |                           | `Symbol`    | --           | 符号                          |
 |                           | `BigInt`    | --           | 任意大的整数(ES2015)          |
 |                           | `···`       | --           |                               |
 | 引用数据类型              |             |              |                               |
 |                           | `Object`    | `Object`     | 普通对象 (`{}`、`new Object`) |
 |                           | --          | `Array`      | 数组对象 (`[]`、`new Array`)  |
 |                           | --          | `RegExp`     | 正则对象                      |
 |                           | --          | `Date`       | 日期对象                      |
 |                           | --          | `Math`       | 数学函数对象                  |
 |                           | --          | `Error`      | 错误（特殊对象）              |
 |                           | --          | `···` (细分) |                               |
 |                           | `Function`  | --           | 方法 (严格讲也是`Object`)     |
 | 特殊类型(也算作基本类型)  |             |              |                               |
 |                           | `Undefined` | --           | 未定义                        |
 |                           | `Null`      | --           | 空                            |
\* `Null`被`typeof`检测时会被当做`Object`，这是历史遗留问题.

## 数据类型检测方法(4种)

1. `typeof(value)` 检测数据类型的逻辑运算符
2. `value instanceof Number` 判断一个对象是否是数据类型的实例
3. `(value).constructor === Number` 检测构造函数
4. `Object.prototype.toString.call(value)` 检测数据类型的方法库

  检测方法详解

- `typeof value`或`typeof(value)` 返回当前值的数据类型 `String`/ `"number"` / `"boolean"`...
  - 返回的结果都是字符串
  - 局限性
    - `typeof` 不能细分对象类型（检测普通对象和数组对象都是`object`）
    - `typeof null => "object"`

```js
  console.log(typeof (1)); //'number'
  console.log(typeof 1); //'number' ---不用括号也可以
  console.log(typeof '1'); //'string'
  console.log(typeof 'abc'); //'string'
  console.log(typeof true); //'boolean'
  console.log(typeof false); //'boolean'
  console.log(typeof undefined); //'undefined'
  console.log(typeof null); //'object'
  console.log(typeof function () { });  //'function'
  console.log(typeof BigInt); //'function'
  console.log(typeof BigInt(900754740991)); //'bigint'
```

所有的值在内存中都是按照二进制存储的，`null`的存储值就是`000`（和`object`的值一样）,所以说用typeof检测数据类型不太准确。

- `[] instanceof Array` 判断一个对象是否是数据类型的**实例**

```js
  console.log(2 instanceof Number);                    // false
  console.log(true instanceof Boolean);                // false
  console.log('str' instanceof String);                // false
  console.log(new Number(2) instanceof Number);        // true
  console.log(new Boolean(true) instanceof Boolean );  // true
  console.log(new String('str') instanceof String);    // true
  console.log([] instanceof Array);                    // true
  console.log(function(){} instanceof Function);       // true
  console.log({} instanceof Object);                   // true
  // console.log(undefined instanceof Undefined); //Error
  // console.log(null instanceof Null); //Error
```

不能用 `instanceof` 方法检测 `null` 和 `undefined`.

`instanceof`是用来判断引用类型的具体类型的，因此判断的对象首先得是个`“引用类型”`，所以下面的结果是`false`：

```js
  console.log(true instanceof Boolean);   // false
```

当检测`Array`实例时, `Array.isArray` 优于 `instanceof`,因为`Array.isArray`能检测`iframes`。

- `constructor` 通过原型判断类型

```js
  console.log((2).constructor === Number);
  console.log((true).constructor === Boolean);
  console.log(('str').constructor === String);
  console.log(([]).constructor === Array);
  console.log((function() {}).constructor === Function);
  console.log(({}).constructor === Object);
```

用`costructor`来判断类型看起来是完美的，但是如果我创建一个对象，更改它的原型，这种方式也变得不可靠了

```js
  function Fn(){};
  Fn.prototype=new Array();
  var f=new Fn();
  console.log(f.constructor===Fn);    // false
  console.log(f.constructor===Array); // true
```

- `Object.prototype.toString.call(value)` 检测数据类型**最准确**的方式

返回`[Object,String]`/`[Object,Number]`/`[Object,Object]`

```js
  var a = Object.prototype.toString;
  console.log(a.call(2));
  console.log(a.call(true));
  console.log(a.call('str'));
  console.log(a.call([]));
  console.log(a.call(function(){}));
  console.log(a.call({}));
  console.log(a.call(undefined));
  console.log(a.call(null));
```

 

- `typeof`和`instanceof`的区别。
  - `typeof`是判断变量类型的,用来判断基本数据类型；
  - `instanceof`是用来判断引用数据类型；

## Number

数字类型`Number`包含: 正数、负数、浮点数(小数)、`0` `Infinity`(无穷大)`-Infinity` `NaN`; `js` 只有一种数字类型。

- `NaN` 表示不是一个有效数字,`NaN`和任何值都不相等`NaN =!NaN`（但属于`Number`类型)
- `js`的数字采用`IEEE 754` 数值格式 (有计算不精确的缺陷)

```js
 1  2  2.2
//  声明一个数字
 var str  = 12
```

- 数字的属性
  - `Number.prototype`

## Number 方法

### Number 的对象方法

1. `Number(value)`
将其他数据转为数字。

```js
  var a = new Number('123');
  var a1 = 123;// a 和 a1 值相等，类型不等，所以不是全等
  console.log(a === a1);//false
  console.log(a); // Number {123}
  console.log(a1);//123
  console.log('typeof', typeof a); //typeof object
  console.log('typeof', typeof a1); //typeof number
  var b = Number('123');
  var b1 = 123; // b 和 b1 等价
  console.log(b); //123
  console.log(b1); // 123
  console.log(b === b1);// true
  console.log('typeof', typeof b); //typeof number
  console.log('typeof', typeof b1); //typeof number
```

描述

- 如果参数无法被转换为数字，则返回 `NaN`。
- 在非构造器上下文中 (如：没有 `new` 操作符)`，Number` 能被用来执行类型转换

```js
// 参数中只要能够有非数字的其他符号，就转为NaN,可以转小数
  console.log(Number('124564>'));//NaN
  console.log(Number('12+45'));//NaN
  Number('123')    // 123
  Number('12.3456465')   // 12.3456465
  Number('12.34.56465')   // NaN
  Number('12.00')   // 12
  Number('123e-1')  // 12.3
  Number('')        // 0
  Number(null)      // 0
  Number('0x11')    // 17
  Number('0b11')    // 3
  Number('0o11')    // 9
  Number('foo')     // NaN
  Number('100a')    // NaN
  Number('-Infinity') //-Infinity
```

- 使用 `Number` 作为函数来转换 `Date` 对象为数字值

```js
  var d = new Date("December 17, 1995 03:24:00");
  print(Number(d));
```

2. `Number.isNaN(value)`
`Number.isNaN()` 方法确定传递的值是否为 `NaN`，并且检查其类型是否为 `Number`。它是原来的全局`isNaN()` 的更稳妥的版本。

1. `Number.isInteger(value)` (ES6新增)
    - 要判断此参数是否为整数

返回一个`boolean`值，用于辨别一个数值是否保存为整数。(有时候，小数位的`0` 可能 会让人误以为数值是一个浮点值)(`isSafeInteger()`)

```js
  Number.isInteger(0);         // true
  Number.isInteger(1);         // true
  Number.isInteger(-100000);   // true
  Number.isInteger(0.1);       // false
  Number.isInteger(Math.PI);   // false
  Number.isInteger(Infinity);  // false
  Number.isInteger(-Infinity); // false
  Number.isInteger("10");      // false
  Number.isInteger(true);      // false
  Number.isInteger(false);     // false
  Number.isInteger([1]);       // false
```

```js
  console.log( Number.isInteger( 1)); // true
  console.log( Number.isInteger( 1.00)); // true 注意
  console.log( Number.isInteger( 1.01)); // false

```

:::warning 注意
`parseInt`和`parseFloat` 、`isNaN()`也是js的全局内置对象

`JavaScript`能够准确表示的整数范围在`-2^53`到`2^53`之间（不含两个端点），超过这个范围，无法精确表示这个整数
:::

4. `Number.parseInt(string, radix)`
转换为一个整数 或 `NaN`（`radix` 小于 2 或大于 36 ，或第一个非空格字符不能转换为数字则返回`NaN`）

- `string`被解析的值。参数不是字符串，将其转为字符串(使用 `ToString`抽象操作)。字符串开头的空白符将会被忽略
- `radix` (可选)从 `2` 到 `36`，表示字符串的基数。如 `16` 表示被解析值是十六进制数。注意，`10`不是默认值！

```js
  console.log(parseInt('-12')); //-12
  console.log(parseInt('+12')); //12(+12)
  console.log(parseInt('@12')); //NaN
  console.log(parseInt('0.12'));// 0
  console.log(parseInt('f12')); //NaN
  console.log(parseInt('1k2')); //1
  console.log(parseInt(null));// NaN
  console.log(parseInt(undefined)); //NaN
  console.log(parseInt({ a: 123 })); //NaN
  console.log(parseInt(true));// NaN
  console.log(parseInt(false));// NaN
```

描述：
`parseInt`函数将其第一个参数转换为一个字符串，对该字符串(从左到右)进行解析，然后返回一个整数或 `NaN`

 \* 字符串首位是`+ -`，可以识别，其他字符不能，会停止解析，并返回之前解析完成的值

5. `parseFloat(string)`
函数解析一个参数（必要时先转换为字符串）并返回一个浮点数(小数)，如果给定值不能被转换成数值，则会返回 `NaN`。

```js
  let num = '12.1.5'
  let num2 = parseFloat(num)
  console.log(num2); //12.1
  // num 是12.0.5就会返回12 ，因为12.0 会省略最后的0
```

```js
//下面的例子都返回3.14
  parseFloat(3.14);
  parseFloat('3.14');
  parseFloat('  3.14  ');
  parseFloat('314e-2');
  parseFloat('0.0314E+2');
  parseFloat('3.14some non-digit characters');
  parseFloat({ toString: function() { return "3.14" } });
```

:::warning 注意
在解析中遇到了`+`、`-` 、`0-9`、`.`、科学记数法中的指数（`e 或 E`）以外的字符，会忽略该字符以及之后的所有字符，返回已经解析到的浮点数;第二个小数点出现也会使解析停止（在这之前的字符都会被解析）;参数首位和末位的空白符会被忽略;如果参数字符串的第一个字符不能被解析成为数字,则 `parseFloat` 返回 `NaN`。

`parseFloat`、`parseInt`是个全局函数,不属于任何对象。
:::

### Number 的原型方法

1. `Number.prototype.toFixed(digits)`
- `digits`: 小数点后数字的个数； `0` 到 `20` （包括）之间，实现环境可能支持更大范围。如果忽略该参数，则默认为 `0`。

返回改变后的新值，返回包含指定小数点位数的数值字符串。表示取`n`位小数，不够的话自动补`0`(四舍五入的特点可以用于处理货币，使用时请注意各浏览器兼容问题)

```js
  let num = 10.005;
  console.log( num.toFixed( 2)); // "10.01"
  console.log((1.23633).toFixed(9)) //1.236330000
  console.log((1.23633).toFixed(2)) //1.24  注意会四舍五入
  console.log((24).toFixed(2)) //24.00
  // toPrecision 把数字改变为指针计数法
  console.log(13.44443333.toPrecision(2)) //13
  var num = new Number(10000);
  num.toPrecision(4) // 1.000e+4
```

2. `numObj.toString([radix])`
- `radix`: 指定要用于数字到字符串的转换的基数(从2到36)。如果未指定 `radix` 参数，则默认值为 `10`。
`toString()` 方法返回指定 `Number` 对象的字符串表示形式。返回一个表示该数值对象的字符串。覆盖了 `Object.prototype.toString()` 方法。

```js
  var count = 10;
  console.log(count.toString());    // 输出 '10'
  console.log((17).toString());     // 输出 '17'
  console.log((17.2).toString());   // 输出 '17.2'
  var x = 6;
  console.log(x.toString(2));       // 输出 '110'
  console.log((254).toString(16));  // 输出 'fe'
  console.log((-10).toString(2));   // 输出 '-1010'
  console.log((-0xff).toString(2)); // 输出 '-11111111'
```

3. `Number.prototype.valueOf()`
`valueOf()` 方法返回一个被 `Number` 对象包装的原始值。 返回该数值对象的原始值。覆盖了 `Object.prototype.valueOf()` 方法。

```js
  var numObj = new Number(10);
  console.log(typeof numObj); // object
  var num = numObj.valueOf();
  console.log(num);           // 10
  console.log(typeof num);    // number
```

\* 该方法通常是由 `JavaScript` 引擎在内部隐式调用的，而不是由用户在代码中显式调用的。

### 转数字的方法

把其他数据类型转换为数字的方法

- 强转换（隐式转换/基于底层机制转换）`Nubmber([value])`
  - 隐式转换都是基于`Number([value])`
    - `isNaN('12px')`先把其他类型值转为数字，再检测；
    - 数学运算: `- * /`(`+`不行，会拼接成字符串) ；`'12px' - 13`
    - `字符串==数字`: 两个等于号比较也会把其他值转换为数字 。`'12px'==12`
- 弱转换（基于额外的方法转换）`parseInt([value])` / `parseFloat([value])`

:::warning 注意
`isNaN(值)` 只是检测这个值是否为有效数字 不是有效数字返回`true` 是返回`false`
:::

1. `parseInt(data,2|8|16)`(内置函数): `data`:是要处理的数据，第二个参数是进制名，可以是`2、8、10、16`进制；
处理的值是字符串，从字符串的左侧开始查找有效数字字符（遇到非有效数字字符串则停止查找）`=>` 如果处理的值不是字符串，需要先转换为字符串然后再开始查找接口。

2. `parseFloat(value)`(内置函数):用以解析浮点数字符串，与`parseInt()`不同的地方是，`parseFloat()` 只应用于解析十进制数字

3. `Number(value)` 直接调用浏览器最底层的数据类型检测机制来完成

1. 字符串转数字 一旦字符串出现非有效数字 结果是`NaN` 只有都是有效数字结果才能转换为具体的数字，空字符串转换为`0`
2. `null`转数字,结果是`0`
```js
 console.log(Number(null)) //0
```
3. `boolean` : `true`=> `1` 、`false`=>`0`
```js
 console.log(Number(true)) // 1
 console.log(Number(false)) // 0
```
4. `symbol`不能转数字，否则会报错
5. `function`函数和`undefind`转数字，结果是`NaN`
6. `Object`对象转数字 先把对象转成字符串(用内置方法`toString()`)，再把字符串转成数字
    - 普通对象 `{name:lili}`
    - 数组对象 `[12]`
    - 其他对象  都是`NaN`
```js
  parseInt('') //NaN
  Number('') //0
  isNaN('') //false (先把''转为数字(隐式 Number) isNaN
  parseInt(null) // NaN
  Number(null) //NaN
  isNaN(null) //true
  parseInt('12px') // 12
  Number('12px') //NaN
  isNaN('12px') //ture
  parseFloat('1.6px') + parseInt('1.2px') + typeof parseInt(null) //'2.6Number'
  isNaN(Number(!!Number(parseInt('0.8')))) //false
  typeof !parseInt(null) + !isNaN(null) //"booleantrue"
```

4. 隐式转换数字

```js
  + "42";   // 42
  + "010";  // 10
  + "0x10"; // 16
  let num = '12' / 1  //12
  let num = '12' * 1  //12
  let num = '12.01.1' / 1   //NaN
  let num = 'AB' / 1   //NaN
  console.log(num);
```

`and`
一元运算符 `+` 也可以把数字字符串转换成数值：

```js
//单独使用 + 号时，两个变量相加则不会转
  let age = '12'
  let atherage = +age
  console.log(atherage);
```

:::warning 注意
不建议直接实例化 `Number` 对象。 在处理原始数值和引用数值时， `typeof` 和 `instacnceof` 操作符会返回不同的结果，

```js
  let numberObject = new Number( 10);
  let numberValue = 10;
  console.log( typeof numberObject); // "object"
  console.log( typeof numberValue); // "number"
  console.log( numberObject instanceof Number); // true
  console.log( numberValue instanceof Number); // false
```

:::

## String

- 创建

```js
  var str  = 'hello'
  //通过构造函数创建
  var str = new String('hello')
```

字符串类型 `String` 字符串可以是引号中的任意文本 单引号或者双引号

```js
 'hello world' "hello world"
```

- 字符串的属性
  - `length`(`String.prototype.length`): 返回了字符串的长度。
  - `constructor`(`String.prototype.constructor`): 创建字符串的构造函数
  - `prototype` 指向对象的原型

```js
  // length
  let browserType = 'mozilla';
  console.log(browserType.length)
  console.log(browserType.constructor)
  console.log(browserType.prototype)

```

- 长字符串

- 用 `+` 运算符将多个字符串连接

```js
let longString = "This is a very long string which needs " +
                 "to wrap across multiple lines because " +
                 "otherwise my code is unreadable.";
```

- 反斜杠字符`\`，表示字符串将在下一行继续。确保反斜杠后面没有空格或任何除换行符之外的字符或缩进; 否则反斜杠将不会工作。 如下所示：

```js
  let longString = "This is a very long string which needs \
  to wrap across multiple lines because \
  otherwise my code is unreadable.";
```

### 基本字符串和字符串对象的区别

- 基本字符串:字符串字面量 (通过单引号或双引号定义) 和 直接调用 `String` 方法(没有通过 `new` 生成字符串对象实例)的字符串都是基本字符串
- 字符串对象:通过 `new` 生成字符串对象实例
- 基本字符串需要调用一个字符串对象才有的方法或者查询值的时候,`JavaScript` 会自动将基本字符串转化为字符串对象并且调用相应的方法或者执行查询。

```js
  var s_prim = "foo";
  var s_obj = new String(s_prim);
  console.log(typeof s_prim); // Logs "string"
  console.log(typeof s_obj);  // Logs "object"
```

## String 方法

### String 方法分类

- 截取字符串 返回子串
  - `slice/substr/substring(index,value)`: 截取字符串,`substr`最好用`substring`替代

- 根据字符获取字符串索引
  - `indexof` :  该字符第一次出现的索引
  - `lastIndexOf`: 该字符最后一次出现的索引
如果检测不到索引 则返回`-1`(该字符串没有此字符)

- 根据索引获取子字符串
  - `charAt()`: 根据索引值获取字符串的某子串

- 分割成子字符串数组
  - `split()`: 将字符串分割成子字符串数组

- 搜索字符串
  - `includes()`: 搜索字符串是否包含另一个字符串
  - `endsWith()`: 字符串是否是另一个字符串结尾
  - `startsWith()`: 字符串是否是另一个字符串开始
  - `search(regexp)`:搜索字符串是否匹配正则，有返回匹配的下标

- 拼接字符串
  - `concat()`: 拼接多个字符串
  - `+`: 拼接多个字符串(常用)
  - `padEnd()`: 用字符串从末尾填充字符串
  - `padStart()`: 用字符串从开头填充字符串
  - `repeat()`: 复制本身字符串并填充到本身

- 去除空格
  - `trim()`: 去除字符串前后(两端)的空格
  - `trimStart()`(别名 `trimLeft()`): 去掉字符串左侧(开头)的空格
  - `trimEnd()`(别名`trimRight()`): 去掉字符串右侧(末尾)的空格

- 字符转换大小写
  - `toUpperCase`: 转大写
  - `toLocaleUpperCase()`: 转大写
  - `toLowerCase`: 转小写
  - `toLocaleLowerCase()`: 转小写

- 转为字符串
  - `toString()`: 字符串对象转为基本字符串
  - `valueOf()`: 字符串对象转为基本字符串(通常不用，只做底层调用)
  - `String()`: 其他类型的数据转为字符串

  String()详解
`String()`在转为字符串是一种更加安全的做法，底层使用的是 `toString()` 方法，但针对 `null/undefined/symbols`，有特殊的处理：

```js
  String(thing)
  new String(thing)
  // thing 任何可以被转换成字符串的值。
  console.log(String(12));
  console.log(String(true));
  console.log(String(null));
```

 

- 比较操作符(`>` 、 `<` 、 `>=` 、 `<=`)

```js
  var a = "a";
  var b = "b";
  if (a < b) // true
    print(a + " is less than " + b);
  else if (a > b)
    print(a + " is greater than " + b);
  else
    print(a + " and " + b + " are equal.");
```

### String 的对象方法

1. `String(value)` 将`value`转换为字符串


```js
  console.log(String(1)); //'1'
  console.log(String(12.15)); //'12.15'
  console.log(String('聚')); //'聚'
  console.log(String(false)); //'false'
  console.log(String(true)); //'true'
  console.log(String({ a: 1, b: 2 })); //'[object Object]'
  console.log(String(undefined)); //'undefined'
  console.log(String(null)); //'null'
  console.log(String(function () { }));  //'function () { }'
  console.log(String([1, 2, 3, 4])); //'1,2,3,4'
  console.log(String(BigInt(900754740991))); //'900754740991'
```

 

2. `String.fromCharCode()` (静态) 通过 `Unicode` 创建字符串



通过一串 `Unicode` 创建字符串,该方法返回一个字符串，而不是一个  `String` 对象。

```js
  String.fromCharCode(65, 66, 67);   // 返回 "ABC"
  String.fromCharCode(0x2014);       // 返回 "—"
  String.fromCharCode(0x12014);      // 也是返回 "—"; 数字 1 被剔除并忽略
  String.fromCharCode(8212);         // 也是返回 "—"; 8212 是 0x2014 的十进制表示
```

 

3. `String.fromCodePoint()` (实验性) 通过 “码点” 创建字符串

 

通过一串 “码点” 创建字符串

```js
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307) // "\uD834\uDF06a\uD834\uDF07"
// String.fromCharCode() 方法不能单独获取在高代码点位上的字符
// 另一方面，下列的示例中，可以返回 4 字节，也可以返回 2 字节的字符
// (也就是说，它可以返回单独的字符，使用长度 2 代替 1!）
console.log(String.fromCodePoint(0x2F804)); // or 194564 in decimal
```

 

4. `String.raw(callSite, ...substitutions)`(实验性) 模板字符串的标签函数

 

```js
String.raw(callSite, ...substitutions)
//或
String.raw `templateString`
```

是一个模板字符串的标签函数

- 参数
  - `callSite`:一个模板字符串的`调用点对象`。类似`{ raw: ['foo', 'bar', 'baz'] }`。
  - `...substitutions`:任意个可选的参数，表示任意个内插表达式对应的值。
  - `templateString`:模板字符串，可包含占位符`${...}`。

 

### String 的原型方法

都是基于原型的方法,如:`String.prototype.charAt()`

1. `String.prototype.charAt(index)` 不改变原字符串，返回一个新字符串
 

根据索引值获取字符串的某个字符(截取字符串)

- 参数
  - `index`:索引,字符串中的每个字符对应字符串的索引(`index`),一个介于`0`和字符串长度减`1`之间的整数。 (`0~length-1`)。如果没有提供索引，`charAt()` 将使用`0`,如果`index`超出原字符串索引值，将返回一个空字符串。

```js
  var str  = 'hello'
  str.charAt(0)
  str[0]
  return 'cat'.charAt(1); // returns "a"
  return 'cat'[1]; // returns "a"
  var anyString = "Brave new world";
  var end = anyString.charAt(0)
  var end2 = anyString.charAt(20)
  console.log(anyString); //"Brave new world"
  console.log(end); // 'B'
  console.log(end2); //''
```

 

2. `String.prototype.concat(str1,str2, [...strN])` 有返回值,不改变原字符串，返回一个新字符串

 

拼接,把两个字符串拼在一起，返回一个新的字符串，包含参数所提供的连接字符串。

- 参数
  - `str1,str2 ,[...strN]`:需要连接到 `str` 的字符串。

```js
var str = 'hello'
var str1 = 'world'
var str2 = '!'
var str3 = str.concat(str1, str2)
console.log(str) //'hello'
console.log(str1) //'world'
console.log(str2) //'!'
console.log(str3) //'helloworld!'
let greetList = ['Hello', ' ', 'Venkat', '!']
"".concat(...greetList)  // "Hello Venkat!"
"".concat({})    // [object Object]
"".concat([])    // ""
"".concat(null)  // "null"
"".concat(true)  // "true"
"".concat(4, 5)  // "45"
```

强烈建议使用赋值操作符（`+`, `+=`）代替 `concat()` 方法。
 

3. `String.prototype.includes(searchString[, position])`(ES6)不改变原字符，返回`boolean`值

 

用于判断一个字符串是否包含在另一个字符串中，根据情况返回 `true` 或 `false`。

- 参数
  - `searchString`:要在此字符串中搜索的字符串。
  - `position`(可选):从当前字符串的哪个索引位置开始搜寻子字符串，默认值为 `0`。

```js
'Blue Whale'.includes('blue'); //  false 区分大小写
 var str = 'To be, or not to be, that is the question.';
console.log(str.includes('To be'));       // true
console.log(str.includes('Tobe'));       // false 注意空格
console.log(str.includes('question'));    // true
console.log(str.includes('nonexistent')); // false
console.log(str.includes('To be', 1));    // false
console.log(str.includes('to be', 1));    // true
console.log(str.includes('TO BE'));       // false
```

兼容补丁

```js
if (!String.prototype.includes) {
  String.prototype.includes = function(search, start) {
    'use strict';
    if (typeof start !== 'number') {
      start = 0;
    }

    if (start + search.length > this.length) {
      return false;
    } else {
      return this.indexOf(search, start) !== -1;
    }
  };
}
```

 

:::warning 注意
`includes()` 方法是区分大小写的
:::

4. `String.prototype.endsWith(searchString[, length])`(ES6)不改变原字符，返回`boolean`值

用来判断当前字符串是否是以另外一个给定的子字符串“结尾”的，根据判断结果返回 `true` 或 `false`。

- 参数
  - `searchString`:要搜索的子字符串。
  - `length`(可选):作为 `String` 的长度。默认值为 `String.length`。(不理解，要测试)

```js
const str1 = 'Cats are the best!';

console.log(str1.endsWith('best', 17));
// expected output: true

const str2 = 'Is this a question';

console.log(str2.endsWith('?'));
// expected output: false

var str = "To be, or not to be, that is the question.";

alert( str.endsWith("question.") );  // true
alert( str.endsWith("to be") );      // false
alert( str.endsWith("to be", 19) );  // true
```

兼容补丁

```js
if (!String.prototype.endsWith) {
 String.prototype.endsWith = function(search, this_len) {
  if (this_len === undefined || this_len > this.length) {
   this_len = this.length;
  }
  return this.substring(this_len - search.length, this_len) === search;
 };
}
```

:::warning 注意
`endsWith()` 方法是区分大小写的,大小写敏感
:::

5. `String.prototype.indexOf(searchValue [, fromIndex])` 不改原字符，有返回值--索引值

返回值是调用它的 `String` 对象中**第一次**出现的指定值的索引，从 `fromIndex`处进行搜索。如果未找到该值，则返回 `-1`。(字符串中的字符被从左向右索引。第一个字符的索引（`index`）是 `0`，变量名为 `stringName` 的字符串的最后一个字符的索引是 `stringName.length - 1` )。

- 参数
  - `searchValue`:要被查找的字符串值。
  - `fromIndex` (可选):数字表示开始查找的位置。可以是任意整数，默认值为`0`。

  参数详情

- `searchValue`:要被查找的字符串值。

如果没有提供确切地提供字符串，`searchValue` 会被强制设置为 `"undefined"`， 然后在当前字符串中查找这个值。
举个例子：`'undefined'.indexOf()` 将会返回`0`，因为 `undefined` 在位置0处被找到，但是 `'undefine'.indexOf()` 将会返回 `-1` ，因为字符串 `'undefined'` 未被找到。

- `fromIndex` (可选):数字表示开始查找的位置。可以是任意整数，默认值为`0`。

如果 `fromIndex` 的值小于 `0`，或者大于 `str.length`，那么查找分别从 `0` 和`str.length` 开始。（译者注：  `fromIndex` 的值小于 `0`，等同于为空情况； `fromIndex` 的值大于或等于 `str.length` ，那么结果会直接返回 `-1` 。）
 

  返回值
查找的字符串 `searchValue` 的第一次出现的索引，如果没有找到，则返回 -1。

若被查找的字符串 `searchValue` 是一个空字符串，将会产生“奇怪”的结果。如果 `fromIndex` 值为空，或者 `fromIndex` 值小于被查找的字符串的长度，返回值和以下的 `fromIndex` 值一样：

```js
'hello world'.indexOf('') // 返回 0
'hello world'.indexOf('', 0) // 返回 0
'hello world'.indexOf('', 3) // 返回 3
'hello world'.indexOf('', 8) // 返回 8
```

另外，如果 fromIndex 值大于等于字符串的长度，将会直接返回字符串的长度（str.length）：

```js
'hello world'.indexOf('', 11) // 返回 11
'hello world'.indexOf('', 13) // 返回 11
'hello world'.indexOf('', 22) // 返回 11
```

 

```js
"Blue Whale".indexOf("Blue")       // 返回 0
"Blue Whale".indexOf("Blute")      // 返回 -1
"Blue Whale".indexOf("Whale", 0)   // 返回 5
"Blue Whale".indexOf("Whale", 5)   // 返回 5
"Blue Whale".indexOf("", -1)       // 返回 0
"Blue Whale".indexOf("", 9)        // 返回 9
"Blue Whale".indexOf("", 10)       // 返回 10
"Blue Whale".indexOf("", 11)       // 返回 10
//使用indexOf() 和 lastIndexOf()
var anyString = "Brave new world";
console.log("The index of the first w from the beginning is " + anyString.indexOf("w"));// logs 8
console.log("The index of the first w from the end is " + anyString.lastIndexOf("w"));// logs 10
console.log("The index of 'new' from the beginning is " + anyString.indexOf("new")); // logs 6
console.log("The index of 'new' from the end is " + anyString.lastIndexOf("new"));// logs 6
```

:::warning 注意
`indexOf` 方法是区分大小写的。例如，下面的表达式将返回 `-1`：

```js
"Blue Whale".indexOf("blue")      // 返回 -1
```

- 注意 `0` 并不会被当成 `true` ，`-1` 不会被当成 `false` 。所以当检测某个字符串是否存在于另一个字符串中时，可使用下面的方法：

```js
'Blue Whale'.indexOf('Blue') !== -1    // true
'Blue Whale'.indexOf('Bloe') !== -1    // false
~('Blue Whale'.indexOf('Bloe'))        // 0, 这是一种错误用法
```

[(MDN详情](<https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf>)
:::

6. `String.prototype.lastIndexOf(searchValue[, fromIndex])`不改原字符，有返回值--索引值

返回调用`String`对象的指定值最后一次出现的索引，在一个字符串中的指定位置 `fromIndex`处从后向前搜索。如果没找到这个特定值则返回`-1` 。

- 参数
  - `searchValue`:一个字符串，表示被查找的值。如果searchValue是空字符串，则返回`fromIndex`。
  - `fromIndex`(可选):待匹配字符串`searchValue`的开头一位字符从 `String`的第`fromIndex`位开始向左回向查找。`fromIndex`默认值是 `+Infinity`。如果 `fromIndex >= str.length` ，则会搜索整个字符串。如果 `fromIndex < 0` ，则等同于 `fromIndex == 0`。

```js
'canal'.lastIndexOf('a');     // returns 3 （没有指明fromIndex则从末尾l处开始反向检索到的第一个a出现在l的后面，即index为3的位置）
'canal'.lastIndexOf('a', 2);  // returns 1（指明fromIndex为2则从n处反向向回检索到其后面就是a，即index为1的位置）
'canal'.lastIndexOf('a', 0);  // returns -1(指明fromIndex为0则从c处向左回向检索a发现没有，故返回-1)
'canal'.lastIndexOf('x');     // returns -1
'canal'.lastIndexOf('c', -5); // returns 0（指明fromIndex为-5则视同0，从c处向左回向查找发现自己就是，故返回0）
'canal'.lastIndexOf('c', 0);  // returns 0（指明fromIndex为0则从c处向左回向查找c发现自己就是，故返回自己的索引0）
'canal'.lastIndexOf('');      // returns 5
'canal'.lastIndexOf('', 2);   // returns 2
```

:::warning 注意
`lastIndexOf` 方法区分大小写。例如，下面的表达式返回 `-1`：

```js
"Blue Whale, Killer Whale".lastIndexOf("blue"); // returns -1
```

:::
7. `String.prototype.match(regexp)` 有返回值

检索返回一个字符串匹配正则表达式的结果。

- 参数
  - `regexp`:一个正则表达式对象。如果传入一个非正则表达式对象，则会隐式地使用 `new RegExp(obj)` 将其转换为一个 `RegExp`,如果你没有给出任何参数并直接使用`match()` 方法 ，你将会得到一 个包含空字符串的 `Array ：[""]` 。

```js
const paragraph = 'The quick brown fox jumps over the lazy dog. It barked.';
const regex = /[A-Z]/g;
const found = paragraph.match(regex);
console.log(found);
// expected output: Array ["T", "I"]
```

8. `String.prototype.padEnd(targetLength [, padString])` 有返回值

用一个字符串填充当前字符串（如果需要的话则重复填充），返回填充后达到指定长度的字符串。从当前字符串的末尾（右侧）开始填充

- 参数
  - `targetLength`:当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
  - `padString`(可选):填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的缺省值为 `" "`（`U+0020`）。

- 返回值:在原字符串末尾填充指定的填充字符串直到目标长度所形成的新字符串

```js
'abc'.padEnd(10);          // "abc       "
'abc'.padEnd(10, "foo");   // "abcfoofoof"
'abc'.padEnd(6, "123456"); // "abc123"
'abc'.padEnd(1);           // "abc"
```

9. `String.prototype.padStart(targetLength [, padString])` 有返回值

用另一个字符串填充当前字符串(如果需要的话，会重复多次)，以便产生的字符串达到给定的长度。从当前字符串的左侧开始填充。(正和padEnd相反)

- 参数
  - `targetLength`:当前字符串需要填充到的目标长度。如果这个数值小于当前字符串的长度，则返回当前字符串本身。
  - `padString`(可选):填充字符串。如果字符串太长，使填充后的字符串长度超过了目标长度，则只保留最左侧的部分，其他部分会被截断。此参数的默认值为 `" "`（`U+0020`）。

- 返回值:在原字符串开头填充指定的填充字符串直到目标长度所形成的新字符串。

```js
'abc'.padStart(10);         // "       abc"
'abc'.padStart(10, "foo");  // "foofoofabc"
'abc'.padStart(6,"123465"); // "123abc"
'abc'.padStart(8, "0");     // "00000abc"
'abc'.padStart(1);          // "abc"
```

10. `String.prototype.repeat(count)`

返回指定重复次数的由元素组成的字符串对象。

- 参数
  - `count`:介于 `0` 和 `+Infinity` 之间的整数。表示在新构造的字符串中重复了多少遍原字符串。

- 返回值: 包含指定字符串的指定数量副本的新字符串。

```js
"abc".repeat(-1)     // RangeError: repeat count must be positive and less than inifinity
"abc".repeat(0)      // ""
"abc".repeat(1)      // "abc"
"abc".repeat(2)      // "abcabc"
"abc".repeat(3.5)    // "abcabcabc" 参数count将会被自动转换成整数.
"abc".repeat(1/0)    // RangeError: repeat count must be positive and less than inifinity --重复计数必须为正且小于无穷大
({toString : () => "abc", repeat : String.prototype.repeat}).repeat(2)
//"abcabc",repeat是一个通用方法,也就是它的调用者可以不是一个字符串对象.
```

11. `String.prototype.replace(regexp|substr, newSubStr|function)`

返回一个由替换值（`replacement`）替换部分或所有的模式（`pattern`）匹配项后的新字符串。模式可以是一个字符串或者一个正则表达式，替换值可以是一个字符串或者一个每次匹配都要调用的回调函数。如果`pattern`是字符串，则仅替换第一个匹配项。

**原字符串不会改变。**

- 参数
  - `regexp (pattern)`:一个`RegExp` 对象或者其字面量。该正则所匹配的内容会被第二个参数的返回值替换掉。
  - `substr (pattern)`:一个将被 `newSubStr` 替换的 字符串。其被视为一整个字符串，而不是一个正则表达式。仅第一个匹配项会被替换。
  - `newSubStr (replacement)`:用于替换掉第一个参数在原字符串中的匹配部分的字符串。该字符串中可以内插一些特殊的变量名。参考下面的使用字符串作为参数。
  - `function (replacement)`:一个用来创建新子字符串的函数，该函数的返回值将替换掉第一个参数匹配到的结果。参考下面的指定一个函数作为参数。

- 返回值:一个部分或全部匹配由替代模式所取代的新的字符串。

替换字符串可以插入特殊变量名：[MDN详情](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/replace)

12. `String.prototype.search(regexp)`

`search()` 方法执行正则表达式和 `String` 对象之间的一个搜索匹配。

- 参数
  - `regexp`:一个正则表达式（`regular expression`）对象; 如果传入一个非正则表达式对象 `regexp`，则会使用 `new RegExp(regexp)` 隐式地将其转换为正则表达式对象。

- 返回值:如果匹配成功，则 `search()` 返回正则表达式在字符串中首次匹配项的索引;否则，返回 `-1`。

```js
var str = "hey JudE";
var re = /[A-Z]/g;
var re2 = /[.]/g;
console.log(str.search(re)); // returns 4, which is the index of the first capital letter "J"
console.log(str.search(re2)); // returns -1 cannot find '.' dot punctuation
```

13. `String.prototype.slice(beginIndex[, endIndex])`

`slice()` 方法提取某个字符串的一部分，并返回一个新的字符串，且不会改动原字符串。

- 参数
  - `beginIndex`:从该索引（以 `0` 为基数）处开始提取原字符串中的字符。如果值为负数，会被当做 `strLength + beginIndex` 看待，这里的`strLength` 是字符串的长度（例如， 如果 `beginIndex` 是 `-3` 则看作是：`strLength - 3`）
  - `endIndex`(可选):在该索引（以 `0` 为基数）处结束提取字符串。如果省略该参数，`slice()` 会一直提取到字符串末尾。如果该参数为负数，则被看作是 `strLength + endIndex`，这里的 `strLength` 就是字符串的长度(例如，如果 `endIndex` 是 `-3`，则是, `strLength - 3`)。

- 返回值: 返回一个从原字符串中提取出来的新字符串

- `slice()` 提取的新字符串包括`beginIndex`但不包括 `endIndex`(包前不包后)

下面例子使用 `slice()` 创建了一个新字符串。

```js
var str1 = 'The morning is upon us.', // str1 的长度 length 是 23。
    str2 = str1.slice(1, 8),
    str3 = str1.slice(4, -2),
    str4 = str1.slice(12),
    str5 = str1.slice(30);
console.log(str2); // 输出：he morn
console.log(str3); // 输出：morning is upon u
console.log(str4); // 输出：is upon us.
console.log(str5); // 输出：""
```

下面的例子在使用`slice()` 时传入了负值作为索引。

```js
var str = 'The morning is upon us.';
str.slice(-3);     // 返回 'us.'
str.slice(-3, -1); // 返回 'us'
str.slice(0, -1);  // 返回 'The morning is upon us'
```

14. `String.prototype.split([separator[, limit]])`

`split()` 方法使用指定的分隔符字符串将一个`String`对象分割成子字符串数组，以一个指定的分割字串来决定每个拆分的位置。

- 参数
  - `separator`指定表示每个拆分应发生的点的字符串。`separator` 可以是一个字符串或正则表达式。 如果纯文本分隔符包含多个字符，则必须找到整个字符串来表示分割点。如果在str中省略或不出现分隔符，则返回的数组包含一个由整个字符串组成的元素。如果分隔符为空字符串，则将str原字符串中每个字符的数组形式返回。
  - `limit`一个整数，限定返回的分割片段数量。当提供此参数时，`split` 方法会在指定分隔符的每次出现时分割该字符串，但在限制条目已放入数组时停止。如果在达到指定限制之前达到字符串的末尾，它可能仍然包含少于限制的条目。新数组中不返回剩下的文本。

- 返回值:返回源字符串以分隔符出现位置分隔而成的一个`Array`

例

```js
function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator);

  console.log('The original string is: "' + stringToSplit + '"');
  console.log('The separator is: "' + separator + '"');
  console.log("The array has " + arrayOfStrings.length + " elements: ");

  for (var i=0; i < arrayOfStrings.length; i++)
    console.log(arrayOfStrings[i] + " / ");
}

var tempestString = "Oh brave new world that has such people in it.";
var monthString = "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec";

var space = " ";
var comma = ",";

splitString(tempestString, space);
splitString(tempestString);
splitString(monthString, comma);
//输出
//The original string is: "Oh brave new world that has such people in it."
//The separator is: " "
//The array has 10 elements: Oh / brave / new / world / that / has / such / people / in / it. /

//The original string is: "Oh brave new world that has such people in it."
//The separator is: "undefined"
//The array has 1 elements: Oh brave new world that has such people in it. /

//The original string is: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec"
//The separator is: ","
//The array has 12 elements: Jan / Feb / Mar / Apr / May / Jun / Jul / Aug / Sep / Oct / Nov / Dec /
```

  更多

- 移出字符串中的空格

下例中，`split()` 方法会查找`0` 或多个空白符接着的分号，再接着 `0` 或多个空白符”模式的字符串，找到后，就将空白符从字符串中移除，`nameList` 是 `split` 的返回数组。

```js
var names = "Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand ";

console.log(names);

var re = /\s*(?:;|$)\s*/;
var nameList = names.split(re);

console.log(nameList);
```

上例输出两行，第一行输出原始字符串，第二行输出结果数组。

```js
Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand
[ "Harry Trump", "Fred Barney", "Helen Rigby", "Bill Abel", "Chris Hand", "" ]
```

- 限制返回值中分割元素数量

下例中，`split`查找字符串中的 `0` 或多个空格，并返回找到的前 `3` 个分割元素（`splits`）。

```js
var myString = "Hello World. How are you doing?";
var splits = myString.split(" ", 3);

console.log(splits); //["Hello", "World.", "How"]
```

- 使用一个数组来作为分隔符

```js
const myString = 'this|is|a|Test';
const splits = myString.split(['|']);

console.log(splits); //["this", "is", "a", "Test"]

const myString = 'ca,bc,a,bca,bca,bc';

const splits = myString.split(['a','b']);
// myString.split(['a','b']) is same as myString.split(String(['a','b']))

console.log(splits);  //["c", "c,", "c", "c", "c"]
```

- 用split()来颠倒字符串顺序

```js
const str = 'asdfghjkl';
const strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'
// split()返回一个数组，可以在该数组上应用reverse()和join()
```

 
15. `String.prototype.startsWith(searchString[, position])` 有返回值

`startsWith()` 方法用来判断当前字符串是否以另外一个给定的子字符串开头，并根据判断结果返回 `true` 或 `false`。

- 参数
  - `searchString`:要搜索的子字符串。
  - `position` (可选):在 `str` 中搜索 `searchString` 的开始位置，默认值为 `0`。

- 返回值:如果在字符串的开头找到了给定的字符则返回`true`；否则返回`false`。

```js
var str = "To be, or not to be, that is the question.";

alert(str.startsWith("To be"));         // true
alert(str.startsWith("not to be"));     // false
alert(str.startsWith("not to be", 10)); // true
```

16. `String.prototype.substring(indexStart,[indexEnd])`
`substring()` 方法返回一个字符串在开始索引到结束索引之间的一个子集, 或从开始索引直到字符串的末尾的一个子集。`substring` 提取从 `indexStart` 到 `indexEnd`（不包括）之间的字符。

- 参数
  - `indexStart`:需要截取的第一个字符的索引，该索引位置的字符作为返回的字符串的首字母。
  - `indexEnd`:可选。一个 0 到字符串长度之间的整数，以该数字为索引的字符不包含在截取的字符串内。

  参数详解
`substring` 提取从 `indexStart` 到 `indexEnd`（不包括）之间的字符。特别地：

- 如果 `indexStart` 等于 `indexEnd`，`substring` 返回一个空字符串。
- 如果省略 `indexEnd`，`substring` 提取字符一直到字符串末尾。
- 如果任一参数小于 `0` 或为 `NaN`，则被当作 `0`。
- 如果任一参数大于`stringName.length`，则被当作 `stringName.length`。
- 如果 `indexStart` 大于 `indexEnd`，则 `substring` 的执行效果就像两个参数调换了一样。见下面的例子。
 

- 返回值:包含给定字符串的指定部分的新字符串。

```js
var anyString = "Mozilla";
// 输出 "Moz"
console.log(anyString.substring(0,3));
console.log(anyString.substring(3,0));
console.log(anyString.substring(3,-3));
console.log(anyString.substring(3,NaN));
console.log(anyString.substring(-2,3));
console.log(anyString.substring(NaN,3));
// 输出 "lla"
console.log(anyString.substring(4,7));
console.log(anyString.substring(7,4));
// 输出 ""
console.log(anyString.substring(4,4));
// 输出 "Mozill"
console.log(anyString.substring(0,6));
// 输出 "Mozilla"
console.log(anyString.substring(0,7));
console.log(anyString.substring(0,10));
```

17. `String.prototype.toLocaleLowerCase()`
`toLocaleLowerCase()`方法根据任何指定区域语言环境设置的大小写映射，返回调用字符串被转换为小写的格式。

```js
str.toLocaleLowerCase()
str.toLocaleLowerCase(locale)
str.toLocaleLowerCase([locale, locale, ...])
```

- 参数
  - `locale` (可选):参数 `locale` 指明要转换成小写格式的特定语言区域。 如果以一个数组 `Array`形式给出多个`locales`,  最合适的地区将被选出来应用（参见`best available locale`）。默认的`locale`是主机环境的当前区域(`locale`)设置。(一般不用参数)
- 返回值:根据任何特定于语言环境的案例映射规则将被调用字串转换成小写格式的一个新字符串。

  详解
`toLocaleLowerCase()` 方法返回根据任意区域语言大小写映射集而转换成小写格式的字符串。`toLocaleLowerCase()` 并不会影响字符串原本的值。在大多数情况下，该方法和调用 `toLowerCase()`的结果相同，但是在某些区域环境中，比如土耳其语，它的大小写映射并不遵循在`Unicode`中的默认的大小写映射，因此会有一个不同的结果。
 

```js
'ALPHABET'.toLocaleLowerCase(); // 'alphabet'

'\u0130'.toLocaleLowerCase('tr') === 'i';    // true
'\u0130'.toLocaleLowerCase('en-US') === 'i'; // false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish'];
'\u0130'.toLocaleLowerCase(locales) === 'i'; // true
```

18. `String.prototype.toLocaleUpperCase()` 转大写
`toLocaleUpperCase()` 方法根据本地主机语言环境把字符串转换为大写格式，并返回转换后的字符串。

```js
str.toLocaleUpperCase()
str.toLocaleUpperCase(locale)
str.toLocaleUpperCase([locale, locale, ...])
```

- 参数
  - `locale` (可选):参数 `locale` 指明要转换成大写格式的特定语言区域。 如果以一个数组 `Array`形式给出多个`locales`,  最合适的地区将被选出来应用（参见`best available locale`）。默认的`locale`是主机环境的当前区域(`locale`)设置。(一般不用参数)
- 返回值:根据任何特定于语言环境的案例映射规则将被调用字串转换成大写格式的一个新字符串。

19. `String.prototype.toLowerCase()`

`toLowerCase` 会将调用该方法的字符串值转为小写形式，并返回。`toLowerCase` 不会影响字符串本身的值。

- 无参数

- 返回值:一个新的字符串，表示转换为小写的调用字符串。

```js
console.log('中文简体 zh-CN || zh-Hans'.toLowerCase());
// 中文简体 zh-cn || zh-hans

​console.log( "ALPHABET".toLowerCase() );
// "alphabet"
```

20. `String.prototype.toString()`

`toString()` 方法返回指定对象的字符串形式。(字符串实例化为字符串对象后，用本方法转为基本字符串。)

- 无参数

- 返回值:一个表示调用对象的字符串。

`String` 对象覆盖了`Object` 对象的 `toString`方法；并没有继承 `Object.toString()`。对于 `String` 对象，`toString` 方法返回该对象的字符串形式，和 `String.prototype.valueOf()` 方法返回值一样。

```js
    var x = new String("Hello world");
    // 以上是实例化为字符串对象了
    console.log(x); //String {"Hello world"}0: "H"1: "e"2: "l"3: "l"4: "o"5: " "6: "w"7: "o"8: "r"9: "l"10: "d"length: 11__proto__: String[[PrimitiveValue]]: "Hello world"
    console.log(x.toString()); // 'Hello world'
```

21. `String.prototype.trim()`

`trim()` 方法会从一个字符串的两端删除空白字符。在这个上下文中的空白字符是所有的空白字符 (`space`, `tab`, `no-break space`等) 以及所有行终止符字符（如 LF，CR等）

- 无参数

- 返回值:一个代表调用字符串两端去掉空白的新字符串。

```js
var orig = '   foo  ';
console.log(orig.trim()); // 'foo'

// 另一个 .trim() 例子，只从一边删除

var orig = 'foo    ';
console.log(orig.trim()); // 'foo'
```

兼容补丁

```js
if (!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}
```

22. `String.prototype.trimStart()` 有返回值--去除空格的新字符串

```js
str.trimStart();
str.trimLeft(); //别名
```

`trimStart()` / `trimLeft()`方法移除原字符串左端的连续空白符并返回一个新字符串，并不会直接修改原字符串本身。

- 无参数

- 别名
`trimLeft()`
为了与 `String.prototype.padStart` 等函数保持一致，标准方法名称为`trimStart`。 但是，出于 `Web` 兼容性原因，`trimLeft` 仍然是 `trimStart` 的别名，在某些引擎中，这意味着：

```js
String.prototype.trimLeft.name === "trimStart";
```

- 返回值:是一个新字符串，表示从其开头（左端）除去空格的调用字符串。`trimStart()` / `trimLeft()` 方法移除原字符串左端的连续空白符并返回一个新字符串，并不会直接修改原字符串本身。

```js
var str = "   foo  ";
console.log(str.length); // 8
str = str.trimStart()    // 等同于 str = str.trimLeft();
console.log(str.length); // 5
console.log(str);        // "foo  "
```

23. `String.prototype.trimRight()`

```js
str.trimEnd();
str.trimRight(); //别名
```

`trimEnd()` / `trimRight()`方法移除原字符串右端的连续空白符并返回，`trimEnd()` / `trimRight()`方法并不会直接修改原字符串本身。`trimRight()` 是这个方法的别名。

- 无参数

- 别名
`trimRight()`
为了与 `String.prototype.padEnd` 等函数保持一致，标准方法名称为`trimEnd`。 但是，出于Web兼容性原因，`trimRight`仍然是`trimEnd`的别名。 在某些引擎中，这意味着：

```js
String.prototype.trimRight.name === "trimEnd";
```

- 返回值:是一个新字符串，表示从其开头（左端）除去空格的调用字符串。`trimStart()` / `trimLeft()` 方法移除原字符串左端的连续空白符并返回一个新字符串，并不会直接修改原字符串本身。

```js
var str = "   foo  ";
alert(str.length); // 8
str = str.trimRight();  // 或写成str = str.trimEnd();
console.log(str.length); // 6
console.log(str);       // '   foo'
```

24. `String.prototype.valueOf()`

`valueOf()` 方法返回  `String`  对象的原始值(同`toString()`)

\* 此方法通常由`JavaScript`在内部调用，而不是在代码中显式调用。

```js
var x = new String('Hello world');
console.log(x.valueOf()); // Displays 'Hello world'
```

## Boolean

布尔类型 `Boolean` 只有两个值 `true` `false`

```js
  true  false
```

- 转布尔值

1. `Boolean()`

```js
    let age = 1
    let atherage = Boolean(age)
    console.log(atherage);
```

2. `!!`

```js
    let age = 1
    let atherage = !!age
    //第一个！ !age 用 Boolean 将 1 转为了false
    //第二个！把false转为true （1转boolean本来就是true）
    console.log(atherage);
```

:::warning 注意
只有 `undefind`,`null`,`0`,`NaN`,`''` 在转化成布尔值的时候会被转化成 `false`.
:::

## null

空值

## undefined

未定义

```js
     var a;
   console.log(a) //undefind
```

## Symbol

表示独一无二的值
符号是原始值，且符号实例是唯一、不可变的。符号的用途是确保对象属性使用唯一标识符，不会发生属性冲突的危险。

```js
    let b = Symbol('b')
   let c = Symbol('b')
  console.log(b==c) //false
```

```js
    let sym = Symbol();
    console.log(typeof sym);

    let sym1 = Symbol();
    let sym2 = Symbol();
    console.log(sym1 == sym2); //false  符号实例是唯一、不可变的
```

## BigInt

`BigInt` 是一种内置对象，它提供了一种方法来表示大于`253 - 1` 的整数。这原本是 `Javascript`中可以用 `Number` 表示的最大数字。`BigInt` 可以表示任意大的整数。

## Object

- 所有对象都有的方法
  - `toLocaleString()`
  - `toString()`
  - `valueOf()`

### Object

- 创建一个对象的三种方法

  1. 字面量标记（初始化标记）初始化对象。
  2. 通过`new Object()`
  3. `Object.create()`,根据自定义原型创建新对象

一个对象初始化器，由花括号/大括号 (`{}`) 包含的一个由零个或多个对象属性名和其关联值组成的一个逗号分隔的列表构成.说人话就是，由`{}`包含的键值

```js
// 对象初始化器（Object initialiser）或对象字面量（literal）
let obj1 = { key:value,key1:value2,key3:value3,... }
// 以构造函数形式来调用
let obj2 = new Object([value])
// Object.create() 使用现有的对象来提供新创建的对象的__proto__
const person = {
    isHuman: false,
    printIntroduction: function() {
      console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};
let obj3 = Object.create(person)
obj3.name = 'Matthew'; // "name" is a property set on "me", but not on "person"
obj3.isHuman = true; // inherited properties can be overwritten
obj3.printIntroduction(); // "My name is Matthew. Am I human? true"
```

- 参数
  - `key:value, key2:value2, ... keyN:valueN`:成对的名称（字符串）与值（任何值），其中名称通过冒号与值分隔。
  - `value`:任何值。

- 描述
在`JavaScript`中，几乎所有的对象都是`Object`类型的实例，它们都会从`Object.prototype`继承属性和方法。`Object` 构造函数为给定值创建一个对象包装器。`Object`构造函数，会根据给定的参数创建对象，具体有以下情况：
- 字面量创建对象
`Object` 是以大括号`{}`表示 对象里面放的是键值对（`key:value` ）每一项还是以逗号分割 `key`(键名)和`value`(键值)以：分割
  - 如果给定值是 `null` 或 `undefined`，将会创建并返回一个空对象
  - 如果传进去的是一个基本类型的值，则会构造其包装类型的对象
  - 如果传进去的是引用类型的值，仍然会返回这个值，经他们复制的变量保有和源对象相同的引用地址

\* 当以非构造函数形式被调用时，`Object` 的行为等同于 `new Object()`。

### Object 构造函数的属性

- `Object.length`:值为 `1`。
- `Object.prototype`:可以为所有 `Object` 类型的对象添加属性。

### Object 实例和原型对象的属性

### Object 方法分类

### Object 构造函数的方法

#### 原型链

### Array

`Array` 内置对象，存储多个不同类型的数据的集合; 数组的定义 `[]`中括号表示数组，每一项以逗号分割

```js
[element0, element1, ..., elementN]
new Array(element0, element1[, ...[, elementN]])
new Array(arrayLength)
// 字面量定义
[] 空数组
var students = ['学生1','学生2','学生3' ]
var goods =['牙膏'，'牙刷'，'苹果','洗衣机']

// 创建数组的方法
var arr1 = [1, 2, 3, 4, 5];
var arr2 = Array(1, 2, 3);
var arr3 = Array.of(1, 2, 3, 5);
var arr4 = new Array([1, 2, 3]);
console.log(arr1);
console.log(arr2);
console.log(arr3);
console.log(arr4);
```

- `Array`构造函数属性
  - `Array.length`:构造函数的 `length` 属性，其值为`1`（注意该属性为静态属性，不是数组实例的 `length` 属性）。
  - `Array.prototype`:通过数组的原型对象可以为所有数组对象添加属性。
  - `get Array[@@species]`:返回 `Array` 构造函数。

- `Array`实例属性
  - `Array.prototype.constructor`:所有的数组实例都继承了这个属性，它的值就是 `Array`，表明了所有的数组都是由 `Array` 构造出来的。
  - `Array.prototype.length`:数组长度

```js
//数组[数字] 表示数组的第几项  js的计数是从0开始算的
var students = new Array()
students[0] ='学生1'
students[1] ='学生2'
```

- 使用构造函数创建数组

```js
var ary = new Array(); //空数组
var ary1 = new Array(10); //确定长度为10的数组
var ary2 = new Array(0, 'zhangsan', true);
```

- 使用字面量创建数组

```js
var arry = [];
var arry = [1, 2, 3];
arry.length=7;
console.log(arry)

```

- 数组的访问 取值和赋值(通过索引)

```js

//取值
var ary = [1, 2, 3];
console.log(ary[1]);
console.log(arr[arr.length - 1])
//赋值
ary[1] = 4;
```

- `for` 循环遍历数组

```js
var ary = ['张三', '李四', '王五', '王六', '王7'];
for (var i = 0; i < ary.length; i++) {
  ary[i] = '一班的' + ary[i];
}
```

数组的长度 `length` 数组长度的添加 (默认值 `undefind`)
数组长度的减少 会删除多余的元素

### Array 方法分类

- 创建数组的方法
  - 字面量
  - `new Array`
  - `from()`(es6):伪数组转数组
  - `of()`  (es6):根据一组参数，创建数组对象

- 检索数组的方法
  - `isArray()`:

- 检索数组内容的方法
  - `keys()` (es6):
  - `values()` (es6):
  - `entries()` (es6):

- 批量复制方法
  - `copyWithin()` (es6):

- 填充数组方法
  - `fill()` (es6):

- 栈方法(后进先出)
  - `push()`:
  - `pop()`:

- 队列方法
  - `unshift()`:
  - `shift()`:

- 排序方法
  - `reverse()`:
  - `sort()`:

- 类数组转数组的方法
  - `Array.from()`
  - `Array.prototype.slice.call(arguments)`

- 数组转字符串的方法
  - `join()`
  - `toString()`
  - `toSource()` 非标准
  - `toLocaleString()` 不常用
- 数组扁平化的方法
  - `forEach()` 通过遍历每一项，判断并`push`新数组里
  - `flat()`

### Array 的对象方法

数组的对象方法或者说`Array`构造函数上的方法。

1. `Array.from(arrayLike[, mapFn[, thisArg]])` 伪数组转真数组 返回新数组，不改变原数组

 

- 伪数组对象（拥有一个 `length` 属性和若干索引属性的任意对象）
- 可迭代对象（可以获取对象中的元素,如`Map`和 `Set` 等）

`Array.from()`从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。 可以通过以下方式来创建数组对象：

- 参数
  - `arrayLike`:想要转换成数组的伪数组对象或可迭代对象。
  - `mapFn`(可选):让你可以在生成的新数组上再执行一次 `map` 方法后再返回。也就是说`Array.from(obj, mapFn, thisArg)` 就相当于 `Array.from(obj).map(mapFn, thisArg)`
  - `thisArg`(可选):可选参数，执行回调函数 `mapFn` 时 `this` 对象。

- 返回值:一个新的数组实例。

- 示例

```js
// 从 String 生成数组
Array.from('foo');  // [ "f", "o", "o" ]

// 从 Set 生成数组
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);  // [ "foo", "bar", "baz" ]

// 从 Map 生成数组
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);// [[1, 2], [2, 4], [4, 8]]
const mapper = new Map([['1', 'a'], ['2', 'b']]);
Array.from(mapper.values());// ['a', 'b'];
Array.from(mapper.keys());// ['1', '2'];

// 从类数组对象（arguments）生成数组
function f() {
  return Array.from(arguments);
}
f(1, 2, 3);  // [ 1, 2, 3 ]
```

 

2. `Array.isArray(obj)` 返回`boolean`值

 

用于确定传递的值是否是一个 `Array`,如果对象是 `Array` ，则返回`true`，否则为`false`。

- 参数
  - `obj`:需要检测的值。
- 返回值:如果值是 `Array`，则为`true`; 否则为`false`。

- 示例

```js
Array.isArray([1, 2, 3]);// true
Array.isArray({foo: 123});// false
Array.isArray("foobar");// false
Array.isArray(undefined);// false
// 下面的函数调用都返回 true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
Array.isArray(new Array('a', 'b', 'c', 'd'))
// 鲜为人知的事实：其实 Array.prototype 也是一个数组。
Array.isArray(Array.prototype);
// 下面的函数调用都返回 false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray('Array');
Array.isArray(true);
Array.isArray(false);
Array.isArray(new Uint8Array(32))
Array.isArray({ __proto__: Array.prototype });
```

 

3. `Array.of(element0[, element1[, ...[, elementN]]])`(`ES6-2015`) 返回新建的数组

 

根据一组参数来创建新的数组实例，支持任意的参数数量和类型。

- 参数
  - `elementN`:任意个参数，将按顺序成为返回数组中的元素。

- 返回值:新的 `Array` 实例。

- 示例

```js
Array.of(1);         // [1]
Array.of(1, 2, 3);   // [1, 2, 3]
Array.of(undefined); // [undefined]
```

兼容补丁

```js
if (!Array.of) {
  Array.of = function() {
    return Array.prototype.slice.call(arguments);
  };
}
```

 

### Array 的原型方法

<font size="5" color="red">修改器方法：</font><font size="5" color="green">会改变原数组</font>

1. `Array.prototype.fill(value[, start[, end]])` (实验性)填充数组，改变原数组

 

用一个固定值填充一个数组中从起始索引到终止索引内的全部元素。不包括终止索引。

- 参数
  - `value`:用来填充数组元素的值。
  - `start`(可选):起始索引，默认值为`0`。
  - `end`(可选):终止索引，默认值为 `this.length`。
- 返回值:修改后的数组。

- 示例

```js
[1, 2, 3].fill(4);               // [4, 4, 4]
[1, 2, 3].fill(4, 1);            // [1, 4, 4]
[1, 2, 3].fill(4, 1, 2);         // [1, 4, 3]
[1, 2, 3].fill(4, 1, 1);         // [1, 2, 3]
[1, 2, 3].fill(4, 3, 3);         // [1, 2, 3]
[1, 2, 3].fill(4, -3, -2);       // [4, 2, 3]
[1, 2, 3].fill(4, NaN, NaN);     // [1, 2, 3]
[1, 2, 3].fill(4, 3, 5);         // [1, 2, 3]
Array(3).fill(4);                // [4, 4, 4]
[].fill.call({ length: 3 }, 4);  // {0: 4, 1: 4, 2: 4, length: 3}

// Objects by reference.
var arr = Array(3).fill({}) // [{}, {}, {}];
// 需要注意如果fill的参数为引用类型，会导致都执行都一个引用类型
// 如 arr[0] === arr[1] 为true
arr[0].hi = "hi"; // [{ hi: "hi" }, { hi: "hi" }, { hi: "hi" }]
```

 

2. `Array.prototype.copyWithin(target[, start[, end]])` 改变原数组

 

- 参数
  - `target`:`0` 为基底的索引，复制序列到该位置。
  - `start`:`0` 为基底的索引，开始复制元素的起始位置。
  - `end`:0 为基底的索引，开始复制元素的结束位置。

>参数详解
>
>- `target`:`0` 为基底的索引，复制序列到该位置。如果是负数，`target` 将从末尾开始计>算。
>如果 `target` 大于等于 `arr.length`，将会不发生拷贝。如果 `target` 在 `start` 之后，复制的序列将被修改以符合 `arr.length`。
>
>- `start`:`0` 为基底的索引，开始复制元素的起始位置。如果是负数，`start` 将从末尾开始计算。
>如果 `start` 被忽略，`copyWithin` 将会从`0`开始复制。
>- `end`:0 为基底的索引，开始复制元素的结束位置。`copyWithin` 将会拷贝到该位置，但不>包括 `end` 这个位置的元素。如果是负数， `end` 将从末尾开始计算。
>如果 `end` 被忽略，`copyWithin` 方法将会一直复制至数组结尾（默认为 `arr.length`）>。
>
>参数 `target`、`start` 和 `end` 必须为整数。
>
>如果 `start` 为负，则其指定的索引位置等同于 `length+start`，`length` 为数组的长>度。end 也是如此。
>
>`copyWithin` 方法不要求其 `this` 值必须是一个数组对象；除此之外，`copyWithin` 是一个可变方法，它可以改变 `this` 对象本身，并且返回它，而不仅仅是它的拷贝。
>
>`copyWithin` 就像 `C` 和 `C++` 的 `memcpy` 函数一样，且它是用来移动 `Array` 或>者 `TypedArray` 数据的一个高性能的方法。复制以及粘贴序列这两者是为一体的操作;即使复制和粘贴区域重叠，粘贴的序列也会有拷贝来的值。
>
>`copyWithin`函数被设计为通用式的，其不要求其 `this` 值必须是一个数组对象。
>
>`copyWithin` 是一个可变方法，它不会改变 `this` 的长度 `length`，但是会改变 >`this` 本身的内容，且需要时会创建新的属性。

- 返回值：改变后的数组。

- 示例

```js
[1, 2, 3, 4, 5].copyWithin(-2)// [1, 2, 3, 1, 2]
[1, 2, 3, 4, 5].copyWithin(0, 3)// [4, 5, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(0, 3, 4)// [4, 2, 3, 4, 5]
[1, 2, 3, 4, 5].copyWithin(-2, -3, -1)// [1, 2, 3, 3, 4]

[].copyWithin.call({length: 5, 3: 1}, 0, 3);// {0: 1, 3: 1, length: 5}

//ES2015类型数组是Array的子类
var i32a = new Int32Array([1, 2, 3, 4, 5]);
i32a.copyWithin(0, 2);// Int32Array [3, 4, 5, 4, 5]
// 在还不兼容ES2015的平台上:
[].copyWithin.call(new Int32Array([1, 2, 3, 4, 5]), 0, 3, 4);// Int32Array [4, 2, 3, 4, 5]
```

 

3. `Array.prototype.pop()` 删除数组的最后一项元素 改变原数组

 
从数组中删除最后一个元素，并返回被删除的元素的值。此方法更改数组的长度。

- 无参数

- 返回值:从数组中删除的元素(当数组为空时返回`undefined`)。

- `pop` 方法有意具有通用性。该方法和 `call()` 或 `apply()` 一起使用时，可应用在类似数组的对象上。`pop`方法根据 `length`属性来确定最后一个元素的位置。如果不包含`length`属性或`length`属性不能被转成一个数值，会将`length`置为`0`，并返回`undefined`。

- 如果你在一个空数组上调用 `pop()`，它返回 `undefined`。

- 示例：

```js
let myFish = ["angel", "clown", "mandarin", "surgeon"];
let popped = myFish.pop();
console.log(myFish);// ["angel", "clown", "mandarin"]
console.log(popped);//  surgeon (返回值 )
```

 

4. `Array.prototype.push(element1, ..., elementN)`在最后添加一项，改变原数组

 

将一个或多个元素添加到数组的末尾，并返回该数组的新长度。

- 参数
  - `elementN`:被添加到数组末尾的元素。
- 返回值:`length` ;当调用该方法时，新的 `length` 属性值将被返回。

`push` 方法具有通用性。该方法和 `call()` 或 `apply()` 一起使用时，可应用在类似数组的对象上。`push`方法根据 `length` 属性来决定从哪里开始插入给定的值。如果 `length` 不能被转成一个数值，则插入的元素索引为 `0`，包括 `length` 不存在时。当 `length` 不存在时，将会创建它。

唯一的原生类数组（`array-like`）对象是 `Strings`，尽管如此，它们并不适用该方法，因为字符串是不可改变的。

- 示例

```js
var sports = ["soccer", "baseball"];
var total = sports.push("football", "swimming");
console.log(sports);// ["soccer", "baseball", "football", "swimming"]
console.log(total);// 4
```

 

5. `Array.prototype.unshift(element1, ..., elementN)`开头添加一项，改变原数组

 

`unshift()` 方法将一个或多个元素添加到数组的**开头**，并返回该数组的**新长度**(该方法修改原有数组)。

- 参数
  - `elementN`要添加到数组开头的元素或多个元素。
- 返回值:`length`,当一个对象调用该方法时，返回其 `length` 属性值。

```js
let arr = [1, 2];

arr.unshift(0); // result of the call is 3, which is the new array length
// arr is [0, 1, 2]

arr.unshift(-2, -1); // the new array length is 5
// arr is [-2, -1, 0, 1, 2]

arr.unshift([-4, -3]); // the new array length is 6
// arr is [[-4, -3], -2, -1, 0, 1, 2]

arr.unshift([-7, -6], [-5]); // the new array length is 8
// arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
```

 

6. `Array.prototype.shift()`删除第一项，改变原数组

 

`shift()` 方法从数组中删除第一个元素，并返回该元素的值。此方法更改数组的长度。

- 无参数
- 返回值:从数组中删除的元素; 如果数组为空则返回`undefined` 。

- 描述

- `shift` 方法移除索引为 `0` 的元素(即第一个元素)，并返回被移除的元素，其他元素的索引值随之减 `1`。如果 `length` 属性的值为 `0` (长度为 `0`)，则返回 `undefined`。

- `shift` 方法并不局限于数组：这个方法能够通过 `call` 或 `apply` 方法作用于类似数组的对象上。但是对于没有 `length` 属性（从`0`开始的一系列连续的数字属性的最后一个）的对象，调用该方法可能没有任何意义。

- 示例：

```js
let myFish = ['angel', 'clown', 'mandarin', 'surgeon'];

console.log('调用 shift 之前: ' + myFish);
// "调用 shift 之前: angel,clown,mandarin,surgeon"

var shifted = myFish.shift();

console.log('调用 shift 之后: ' + myFish);
// "调用 shift 之后: clown,mandarin,surgeon"

console.log('被删除的元素: ' + shifted);
// "被删除的元素: angel"
```

`shift()` 方法经常用于`while loop`的环境中.。下例中每个循环将要从一个数组中移除下一项元素，直至它成为空数组。

```js
var names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

 

7. `Array.prototype.splice(start[, deleteCount[, item1[, item2[, ...]]]])`改变原数组

 

`splice()`方法通过删除或替换现有元素或者原地添加新的元素来修改数组,并以数组形式返回被修改的内容。此方法会改变原数组。

- 参数
  - `start`​：指定修改的开始位置（从0计数）。
  - `deleteCount` (可选):整数，表示要移除的数组元素的个数。
  - `item1, item2, ...` (可选):要添加进数组的元素,从`start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素。

参数详解

- `start`​：指定修改的开始位置（从0计数）。**如果超出了数组的长度**，则从数组末尾开始添加内容；**如果是负值**，则表示从数组末位开始的第几位（从`-1`计数，这意味着`-n`是倒数第`n`个元素并且等价于`array.length-n`）；**如果负数的绝对值大于数组的长度**，则表示开始位置为第`0`位。
- `deleteCount` (可选):整数，表示要移除的数组元素的个数。
 - 如果 `deleteCount` 大于 `start` 之后的元素的总数，则从 `start` 后面的元素都将被删除（含第 `start` 位）。
 - 如果 `deleteCount` 被省略了，或者它的值大于等于`array.length - start`(也就是说，如果它大于或者等于`start之后的所有元素的数量)，那么`start`之后数组的所有元素都会被删除。
 - 如果 `deleteCount` 是 `0` 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。
- `item1, item2, ...` (可选):要添加进数组的元素,从`start` 位置开始。如果不指定，则 `splice()` 将只删除数组元素。

- 返回值:由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。

- 描述
如果添加进数组的元素个数不等于被删除的元素个数，数组的长度会发生相应的改变。

- 示例:

从第 2 位开始删除 0 个元素，插入“drum”

```js
var myFish = ["angel", "clown", "mandarin", "sturgeon"];
var removed = myFish.splice(2, 0, "drum");

// 运算后的 myFish: ["angel", "clown", "drum", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除
```

- 其他案例

从第 `2` 位开始删除 `0` 个元素，插入`“drum”` 和 `"guitar"`

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum', 'guitar');

// 运算后的 myFish: ["angel", "clown", "drum", "guitar", "mandarin", "sturgeon"]
// 被删除的元素: [], 没有元素被删除
```

从第 `3` 位开始删除 `1` 个元素

```js
var myFish = ['angel', 'clown', 'drum', 'mandarin', 'sturgeon'];
var removed = myFish.splice(3, 1);

// 运算后的 myFish: ["angel", "clown", "drum", "sturgeon"]
// 被删除的元素: ["mandarin"]
```

从第 `2` 位开始删除 `1` 个元素，插入`“trumpet”`

```js
var myFish = ['angel', 'clown', 'drum', 'sturgeon'];
var removed = myFish.splice(2, 1, "trumpet");

// 运算后的 myFish: ["angel", "clown", "trumpet", "sturgeon"]
// 被删除的元素: ["drum"]
```

从第 `0` 位开始删除 `2` 个元素，插入`"parrot"`、`"anemone"`和`"blue"`

```js
var myFish = ['angel', 'clown', 'trumpet', 'sturgeon'];
var removed = myFish.splice(0, 2, 'parrot', 'anemone', 'blue');

// 运算后的 myFish: ["parrot", "anemone", "blue", "trumpet", "sturgeon"]
// 被删除的元素: ["angel", "clown"]
```

从第 `2` 位开始删除 `2` 个元素

```js
var myFish = ['parrot', 'anemone', 'blue', 'trumpet', 'sturgeon'];
var removed = myFish.splice(myFish.length - 3, 2);

// 运算后的 myFish: ["parrot", "anemone", "sturgeon"]
// 被删除的元素: ["blue", "trumpet"]
```

从倒数第 `2` 位开始删除 `1` 个元素;

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(-2, 1);

// 运算后的 myFish: ["angel", "clown", "sturgeon"]
// 被删除的元素: ["mandarin"]
```

从第 `2` 位开始删除所有元素

```js
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2);

// 运算后的 myFish: ["angel", "clown"]
// 被删除的元素: ["mandarin", "sturgeon"]
```

 

8. `Array.prototype.sort([compareFunction])` 数组的排序，改变原数组

 

`sort()` 方法用原地算法对数组的元素进行排序，并返回数组。默认排序顺序是在将元素转换为字符串，然后比较它们的`UTF-16`代码单元值序列时构建的。无法保证排序的时间和空间复杂性

- 参数
  - `compareFunction` (可选):用来指定按某种顺序进行排列的函数。如果省略，元素按照转换为的字符串的各个字符的`Unicode`位点进行排序。
  - `firstEl`:第一个用于比较的元素。
  - `secondEl`:第二个用于比较的元素。
- 返回值：排序后的数组。请注意，数组已原地排序，并且不进行复制。

- `compareFunction`参数实例

```js
function compare(a, b) {
  if (a < b ) {           // 按某种排序标准进行比较, a 小于 b
    return -1;
  }
  if (a > b ) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
```

比较数字而非字符串

```js
function compareNumbers(a, b) {
  return a - b;
}
```

`sort` 方法可以使用 函数表达式 方便地书写：

```js

var numbers = [4, 2, 5, 1, 3];
numbers.sort(function(a, b) {
  return a - b;
});
console.log(numbers);

//也可以写成：
var numbers = [4, 2, 5, 1, 3];
numbers.sort((a, b) => a - b);
console.log(numbers);

// [1, 2, 3, 4, 5]
```

对象使用某个属性排序

```js
var items = [
  { name: 'Edward', value: 21 },
  { name: 'Sharpe', value: 37 },
  { name: 'And', value: 45 },
  { name: 'The', value: -12 },
  { name: 'Magnetic' },
  { name: 'Zeros', value: 37 }
];

// sort by value
items.sort(function (a, b) {
  return (a.value - b.value)
});

// sort by name
items.sort(function(a, b) {
  var nameA = a.name.toUpperCase(); // ignore upper and lowercase
  var nameB = b.name.toUpperCase(); // ignore upper and lowercase
  if (nameA < nameB) {
    return -1;
  }
  if (nameA > nameB) {
    return 1;
  }

  // names must be equal
  return 0;
});
```

- 示例：

下述示例创建了四个数组，并展示原数组。之后对数组进行排序。对比了数字数组分别指定与不指定比较函数的结果。

```js
var stringArray = ["Blue", "Humpback", "Beluga"];
var numericStringArray = ["80", "9", "700"];
var numberArray = [40, 1, 5, 200];
var mixedNumericArray = ["80", "9", "700", 40, 1, 5, 200];

function compareNumbers(a, b)
{
  return a - b;
}

console.log('stringArray:' + stringArray.join());
console.log('Sorted:' + stringArray.sort());

console.log('numberArray:' + numberArray.join());
console.log('Sorted without a compare function:'+ numberArray.sort());
console.log('Sorted with compareNumbers:'+ numberArray.sort(compareNumbers));

console.log('numericStringArray:'+ numericStringArray.join());
console.log('Sorted without a compare function:'+ numericStringArray.sort());
console.log('Sorted with compareNumbers:'+ numericStringArray.sort(compareNumbers));

console.log('mixedNumericArray:'+ mixedNumericArray.join());
console.log('Sorted without a compare function:'+ mixedNumericArray.sort());
console.log('Sorted with compareNumbers:'+ mixedNumericArray.sort(compareNumbers));
```

该示例的返回结果如下。输出显示，当使用比较函数后，数字数组会按照数字大小排序。

```js
stringArray: Blue,Humpback,Beluga
Sorted: Beluga,Blue,Humpback

numberArray: 40,1,5,200
Sorted without a compare function: 1,200,40,5
Sorted with compareNumbers: 1,5,40,200

numericStringArray: 80,9,700
Sorted without a compare function: 700,80,9
Sorted with compareNumbers: 9,80,700

mixedNumericArray: 80,9,700,40,1,5,200
Sorted without a compare function: 1,200,40,5,700,80,9
Sorted with compareNumbers: 1,5,9,40,80,200,700
```

当排序非 `ASCII` 字符的字符串（如包含类似 `e, é, è, a, ä` 等字符的字符串）。一些非英语语言的字符串需要使用 `String.localeCompare`。这个函数可以将函数排序到正确的顺序。

```js
var items = ['réservé', 'premier', 'cliché', 'communiqué', 'café', 'adieu'];
items.sort(function (a, b) {
  return a.localeCompare(b);
});

// items is ['adieu', 'café', 'cliché', 'communiqué', 'premier', 'réservé']
```

使用映射改善排序
`compareFunction` 可能需要对元素做多次映射以实现排序，尤其当 `compareFunction` 较为复杂，且元素较多的时候，某些 `compareFunction` 可能会导致很高的负载。使用 map 辅助排序将会是一个好主意。基本思想是首先将数组中的每个元素比较的实际值取出来，排序后再将数组恢复。

```js
// 需要被排序的数组
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// 对需要排序的数字和位置的临时存储
var mapped = list.map(function(el, i) {
  return { index: i, value: el.toLowerCase() };
})

// 按照多个值排序数组
mapped.sort(function(a, b) {
  return +(a.value > b.value) || +(a.value === b.value) - 1;
});

// 根据索引得到排序的结果
var result = mapped.map(function(el){
  return list[el.index];
});
```

 

9. `Array.prototype.reverse()` 反转数组，改变并返回原数组

 

`reverse()` 方法将数组中元素的位置颠倒，并返回该数组。数组的第一个元素会变成最后一个，数组的最后一个元素变成第一个。该方法会改变原数组。

- 无参数
- 返回值:颠倒后的数组。
- 描述
  - `reverse`方法颠倒数组中元素的位置，改变了数组，并返回该数组的引用。
  - `reverse`方法是特意类化的；此方法可被 `called` 或 `applied`于类似数组对象。对象如果不包含反映一系列连续的、基于零的数值属性中的最后一个长度的属性，则该对象可能不会以任何有意义的方式运行。

- 示例

```js
const a = [1, 2, 3];

console.log(a); // [1, 2, 3]

a.reverse();

console.log(a); // [3, 2, 1]
```

 

<font size="5" color="red">访问方法:</font><font size="5" color="green">不改变原数组，会返回新的数组或者返回其它的期望值。</font>

1. `Array.prototype.concat(val,val2 ...)` 合并数组,合并两个或多个数组(包括但不限于数组，可以是任何数据类型的值),不修改原数组返回一个新数组

 

- `valueN`(可选):数组和/或值，将被合并到一个新的数组中。若不传参，则 `concat` 会返回调用此方法的现存数组的一个浅拷贝。
- 返回值
  - 新的 `Array` 实例
- 描述

  - `concat`方法创建一个新的数组，它由被调用的对象中的元素组成，每个参数的顺序依次是该参数的元素（如果参数是数组）或参数本身（如果参数不是数组）。它不会递归到嵌套数组参数中。

  - `concat`方法不会改变`this`或任何作为参数提供的数组，而是返回一个浅拷贝，它包含与原始数组相结合的相同元素的副本。

- 示例

连接两个数组

```js
var alpha = ['a', 'b', 'c'];
var numeric = [1, 2, 3];

alpha.concat(numeric);
// result in ['a', 'b', 'c', 1, 2, 3]
```

连接三个数组

```js
var num1 = [1, 2, 3],
    num2 = [4, 5, 6],
    num3 = [7, 8, 9];
var nums = num1.concat(num2, num3);
console.log(nums);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

将值连接到数组

```js
// 以下代码将三个值连接到数组：
var alpha = ['a', 'b', 'c'];x
var alphaNumeric = alpha.concat(1, [2, 3]);
console.log(alphaNumeric);
// results in ['a', 'b', 'c', 1, 2, 3]
```

合并嵌套数组

```js
// 以下代码合并数组并保留引用：
var num1 = [[1]];
var num2 = [2, [3]];
var num3=[5,[6]];
var nums = num1.concat(num2);
console.log(nums);// results is [[1], 2, [3]]

var nums2=num1.concat(4,num3);
console.log(nums2)// results is [[1], 4, 5,[6]]

// 修改num1的第一个元素
num1[0].push(4);
console.log(nums);// results is [[1, 4], 2, [3]]
```

 

2. `Array.prototype.includes(valueToFind[, fromIndex])` 用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 `true`，否则返回`false`

 

- 参数
  - `valueToFind`:需要查找的元素值。
  - `fromIndex`(可选):从`fromIndex` 索引处开始查找 `valueToFind`。如果为负值，则按升序从 `array.length + fromIndex` 的索引开始搜 （即从末尾开始往前跳 `fromIndex` 的绝对值个索引，然后往后搜寻）。默认为 `0`。

\*  使用 `includes()`比较字符串和字符时是区分大小写。

- 返回值
  - 布尔值`Boolean`

- 示例

```js
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```

如果 `fromIndex` 大于等于数组的长度，则会返回 `false`，且该数组不会被搜索。

```js
var arr = ['a', 'b', 'c'];
arr.includes('c', 3);   // false
arr.includes('c', 100); // false
```

计算出的索引小于 `0`

如果 `fromIndex` 为负值，计算出的索引将作为开始搜索`searchElement`的位置。如果计算出的索引小于 `0`，则整个数组都会被搜索。

```js
// array length is 3
// fromIndex is -100
// computed index is 3 + (-100) = -97

var arr = ['a', 'b', 'c'];

arr.includes('a', -100); // true
arr.includes('b', -100); // true
arr.includes('c', -100); // true
arr.includes('a', -2); // false
```

作为通用方法的 `includes()`

`includes()`方法有意设计为通用方法。它不要求`this`值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。下面的例子展示了 在函数的 `arguments` 对象上调用的 `includes()`方法。

```js
(function() {
  console.log([].includes.call(arguments, 'a')); // true
  console.log([].includes.call(arguments, 'd')); // false
})('a','b','c');
```

 

3. `Array.prototype.join([separator])` 数组转字符串,返回这个字符串, 不改变原数组

 

将一个数组（或一个类数组对象）的所有元素连接成一个字符串并返回这个字符串。如果数组只有一个项目，将返回该项目而不使用分隔符;如果不传值会以`,`号进行连接 不改变原数组

- 参数
  - `separator`(可选):指定一个字符串来分隔数组的每个元素。如果需要，将分隔符转换为字符串。如果缺省该值，数组元素用逗号`,`分隔。如果`separator`是空字符串`""`，则所有元素之间都没有任何字符。
- 返回值
  - 一个所有数组元素连接的字符串。如果 `arr.length` 为`0`，则返回空字符串。

- 示例

使用四种不同的分隔符连接数组元素

```js
var a = ['Wind', 'Rain', 'Fire'];
var myVar1 = a.join();      // myVar1的值变为"Wind,Rain,Fire"
var myVar2 = a.join(', ');  // myVar2的值变为"Wind, Rain, Fire"
var myVar3 = a.join(' + '); // myVar3的值变为"Wind + Rain + Fire"
var myVar4 = a.join('');    // myVar4的值变为"WindRainFire"
```

连接`类数组对象`

下面的示例将连接类数组对象（`arguments`），通过在`Array.prototype.join`上调用`Function.prototype.call`。

```js
function f(a, b, c) {
  var s = Array.prototype.join.call(arguments);
  console.log(s); // '1,a,true'
}
f(1, 'a', true);
```

 

4. `Array.prototype.indexOf(searchElement[, fromIndex])` 根据数组某项找第一次出现的索引，找到第一个即返回，返回值是对应`index`，不存在返回`-1`

 

返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回·

- 参数
  - `searchElement`:要查找的元素
  - `fromIndex`(可选):开始查找的位置。如果该索引值大于或等于数组长度，意味着不会在数组里查找，返回`-1`。如果是一个负值，则将其作为数组末尾的一个抵消，即`-1`表示从最后一个元素开始查找，`-2`表示从倒数第二个元素开始查找 ，以此类推。 注意：如果参数中提供的索引值是一个负值，并不改变其查找顺序，查找顺序仍然是从前向后查询数组。如果抵消后的索引值仍小于`0`，则整个数组都将会被查询。其默认值为`0`.
- 返回值
  - 首个被找到的元素在数组中的索引位置; 若没有找到则返回 `-1`
- 描述
  - `indexOf` 使用`strict equality` (无论是 `===`, 还是 `triple-equals`操作符都基于同样的方法)进行判断 `searchElement`与数组中包含的元素之间的关系。

- 示例

以下例子使用indexOf方法确定多个值在数组中的位置。

```js
var array = [2, 5, 9];
array.indexOf(2);     // 0
array.indexOf(7);     // -1
array.indexOf(9, 2);  // 2
array.indexOf(2, -1); // -1
array.indexOf(2, -3); // 0
```

找出指定元素出现的所有位置

```js
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.indexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = array.indexOf(element, idx + 1);
}
console.log(indices);
// [0, 2, 4]
```

判断一个元素是否在数组里，不在则更新数组

```js
function updateVegetablesCollection (veggies, veggie) {
    if (veggies.indexOf(veggie) === -1) {
        veggies.push(veggie);
        console.log('New veggies collection is : ' + veggies);
    } else if (veggies.indexOf(veggie) > -1) {
        console.log(veggie + ' already exists in the veggies collection.');
    }
}
var veggies = ['potato', 'tomato', 'chillies', 'green-pepper'];

// 新集合是: potato,tomato,chillies,green-papper,spinach
updateVegetablesCollection(veggies, 'spinach');
// spinach 在集合中
updateVegetablesCollection(veggies, 'spinach');
```

 

5. `Array.prototype.lastIndexOf(searchElement[, fromIndex])`根据数组某项找最后出现的索引，返回值是对应`index`，不存在返回`-1` ,从后往前

 
返回指定元素（即有效的 `JavaScript` 值或变量）在数组中的最后一个的索引，如果不存在则返回 `-1`。从数组的后面向前查找，从 `fromIndex` 处开始。

- 参数
  - `searchElement`:被查找的元素。
  - fromIndex(可选):从此位置开始逆向查找。默认为数组的长度减 `1`(`arr.length - 1`)，即整个数组都被查找。如果该值大于或等于数组的长度，则整个数组会被查找。如果为负值，将其视为从数组末尾向前的偏移。即使该值为负，数组仍然会被从后向前查找。如果该值为负时，其绝对值大于数组长度，则方法返回 `-1`，即数组不会被查找。
- 返回值
  - 数组中该元素最后一次出现的索引，如未找到返回-1。

- 描述
  - `lastIndexOf` 使用严格相等（`strict equality`，即 `===`）比较 `searchElement` 和数组中的元素。

- 示例

下例使用 `lastIndexOf` 定位数组中的值。

```JS
var array = [2, 5, 9, 2];
var index = array.lastIndexOf(2);// index is 3
index = array.lastIndexOf(7);// index is -1
index = array.lastIndexOf(2, 3);// index is 3
index = array.lastIndexOf(2, 2);// index is 0
index = array.lastIndexOf(2, -2);// index is 0
index = array.lastIndexOf(2, -1);// index is 3
```

查找所有元素

下例使用 `lastIndexOf` 查找到一个元素在数组中所有的索引（下标），并使用 `push` 将所有添加到另一个数组中。

```js
var indices = [];
var array = ['a', 'b', 'a', 'c', 'a', 'd'];
var element = 'a';
var idx = array.lastIndexOf(element);
while (idx != -1) {
  indices.push(idx);
  idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1);
}
console.log(indices);
// [4, 2, 0];
```

注意，我们要单独处理`idx==0`时的情况，因为如果是第一个元素，忽略了`fromIndex`参数则第一个元素总会被查找。这不同于`indexOf`方法

注：原英文是针对使用三元操作符语句的作用进行说明的：
`idx = (idx > 0 ? array.lastIndexOf(element, idx - 1) : -1)`;
`idx > 0`时，才进入`lastIndexOf`由后往前移一位进行倒查找；如果`idx == 0`则直接设置`idx = -1`，循环`while (idx != -1)`就结束了。
 

6. `Array.prototype.slice(start,end)` 截取数组 从 `start` 位置截取到 `end` 位置（不包含结束位置） 如果 `start` 是负数 表示从后往前截取

 
返回一个新的数组对象，这一对象是一个由 `begin` 和 `end` 决定的原数组的浅拷贝（包括 `begin`，不包括`end`）。原始数组不会被改变。

- 参数
  - `begin`(可选):提取起始处的索引（从 `0` 开始），从该索引开始提取原数组元素。
        如果该参数为负数，则表示从原数组中的倒数第几个元素开始提取，`slice(-2)` 表示提取原数组中的倒数第二个元素到最后一个元素（包含最后一个元素）。
        如果省略 `begin`，则 `slice` 从索引 `0` 开始。
        如果 `begin` 超出原数组的索引范围，则会返回空数组。
  - `end`(可选):提取终止处的索引（从 `0` 开始），在该索引处结束提取原数组元素。`slice` 会提取原数组中索引从 `begin` 到 `end` 的所有元素（包含 `begin`，但不包含 `end`）。
        `slice(1,4)` 会提取原数组中从第二个元素开始一直到第四个元素的所有元素 （索引为 `1`, `2`, `3`的元素）。
        如果该参数为负数， 则它表示在原数组中的倒数第几个元素结束抽取。 `slice(-2,-1)` 表示抽取了原数组中的倒数第二个元素到最后一个元素（不包含最后一个元素，也就是只有倒数第二个元素）。
        如果 `end` 被省略，则 `slice` 会一直提取到原数组末尾。
        如果 `end` 大于数组的长度，`slice` 也会一直提取到原数组末尾。
- 返回值:一个含有被提取元素的新数组。
- 描述:`slice` 不会修改原数组，只会返回一个浅复制了原数组中的元素的一个新数组。原数组的元素会按照下述规则拷贝：

  - 如果该元素是个对象引用 （不是实际的对象），`slice` 会拷贝这个对象引用到新的数组里。两个对象引用都引用了同一个对象。如果被引用的对象发生改变，则新的和原来的数组中的这个元素也会发生改变。
  - 对于字符串、数字及布尔值来说（不是 `String`、`Number` 或者 `Boolean` 对象），`slice` 会拷贝这些值到新的数组里。在别的数组里修改这些字符串或数字或是布尔值，将不会影响另一个数组。

如果向两个数组任一中添加了新元素，则另一个不会受到影响。

- 示例

返回现有数组的一部分

```js
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

// fruits contains ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango']
// citrus contains ['Orange','Lemon']
```

在下例中, slice 从 myCar 中创建了一个新数组newCar。两个数组都包含了一个 myHonda 对象的引用。当 myHonda 的 color 属性改变为 purple，则两个数组中的对应元素都会随之改变。

```js
// 使用 slice 方法从 myCar 中创建一个 newCar。
var myHonda = { color: 'red', wheels: 4, engine: { cylinders: 4, size: 2.2 } };
var myCar = [myHonda, 2, "cherry condition", "purchased 1997"];
var newCar = myCar.slice(0, 2);

// 输出 myCar、newCar 以及各自的 myHonda 对象引用的 color 属性。
console.log(' myCar = ' + JSON.stringify(myCar));
console.log('newCar = ' + JSON.stringify(newCar));
console.log(' myCar[0].color = ' + JSON.stringify(myCar[0].color));
console.log('newCar[0].color = ' + JSON.stringify(newCar[0].color));

// 改变 myHonda 对象的 color 属性.
myHonda.color = 'purple';
console.log('The new color of my Honda is ' + myHonda.color);

//输出 myCar、newCar 中各自的 myHonda 对象引用的 color 属性。
console.log(' myCar[0].color = ' + myCar[0].color);
console.log('newCar[0].color = ' + newCar[0].color);

//上述代码输出
myCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2,
       'cherry condition', 'purchased 1997']
newCar = [{color: 'red', wheels: 4, engine: {cylinders: 4, size: 2.2}}, 2]
 myCar[0].color = red
newCar[0].color = red
The new color of my Honda is purple
 myCar[0].color = purple
newCar[0].color = purple
```

- 类数组（`Array-like`）对象

`slice` 方法可以用来将一个类数组（`Array-like`）对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上。 一个函数中的  `arguments` 就是一个类数组对象的例子。

```js
function list() {
  return Array.prototype.slice.call(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

除了使用`Array.prototype.slice.call(arguments)`，你也可以简单的使用 `[].slice.call(arguments)` 来代替。另外，你可以使用 `bind` 来简化该过程。

```js
var unboundSlice = Array.prototype.slice;
var slice = Function.prototype.call.bind(unboundSlice);

function list() {
  return slice(arguments);
}

var list1 = list(1, 2, 3); // [1, 2, 3]
```

 

1. `Array.prototype.toString()` 返回一个字符串，表示指定的数组及其元素。不改变原数组

 

- 无参数
- 返回值
  - 一个表示指定的数组及其元素的字符串。

- 描述
  - `Array`对象覆盖了`Object`的 `toString` 方法。对于数组对象，`toString` 方法连接数组并返回一个字符串，其中包含用逗号分隔的每个数组元素。

- 示例

```js
const array1 = [1, 2, 'a', '1a'];
console.log(array1.toString());// "1,2,a,1a"
```

 

8. `Array.prototype.toSource()`(非标准,暂只兼容火狐) 返回一个字符串,代表该数组的源代码.
 

- 无参数

- 描述
在调试时,你可以使用`toSource`方法来查看一个数组的内容.
- 示例

```js

var alpha = new Array("a", "b", "c");
alpha.toSource();   //返回["a", "b", "c"]
```

 

9. `Array.prototype.toLocaleString([locales[,options]])`返回一个字符串表示数组中的元素。

 

返回一个字符串表示数组中的元素。数组中的元素将使用各自的 `toLocaleString` 方法转成字符串，这些字符串将使用一个特定语言环境的字符串（例如一个逗号 ","）隔开。;

- 参数
  - `locales`(可选):带有`BCP 47`语言标记的字符串或字符串数组，关于`locales`参数的形式与解释，请看`Intl`页面。
  - `options`(可选):一个可配置属性的对象，对于数字 `Number.prototype.toLocaleString()`，对于日期`Date.prototype.toLocaleString()`.
- 返回值:表示数组元素的字符串。

- 示例
使用`locales`和`options`
数组中的元素将会使用各自的 `toLocaleString` 方法：

`Object: Object.prototype.toLocaleString()`

`Number: Number.prototype.toLocaleString()`

`Date: Date.prototype.toLocaleString()`
总是在`prices`数组中显示字符串和数字的货币符号：

```js
var prices = ['￥7', 500, 8123, 12];
prices.toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' });

// "￥7,￥500,￥8,123,￥12"
```

 

<font size="5" color="red">迭代方法:</font><font size="5" color="green">在下面的众多遍历方法中，有很多方法都需要指定一个回调函数作为参数。</font>

在每一个数组元素都分别执行完回调函数之前，数组的`length`属性会被缓存在某个地方，所以，如果你在回调函数中为当前数组添加了新的元素，那么那些新添加的元素是不会被遍历到的。此外，如果在回调函数中对当前数组进行了其它修改，比如改变某个元素的值或者删掉某个元素，那么随后的遍历操作可能会受到未预期的影响。总之，不要尝试在遍历过程中对原数组进行任何修改，虽然规范对这样的操作进行了详细的定义，但为了可读性和可维护性，请不要这样做。

1. `Array.prototype.forEach(callback(currentValue [, index [, array]])[, thisArg])` 遍历数组,数组每一项都执行一次回调，返回`undefined`

 
`forEach()` 方法对数组的每个元素执行一次给定的函数。

- 参数
  - `callback`:为数组中每个元素执行的函数，该函数接收一至三个参数：
    - `currentValue`:数组中正在处理的当前元素。
    - `index`(可选):数组中正在处理的当前元素的索引。
    - `array`(可选):`forEach()` 方法正在操作的数组。
  - `thisArg`(可选):可选参数。当执行回调函数 `callback` 时，用作 `this` 的值。
- 返回值:`undefined`
- 描述
`forEach()` 方法按升序为数组中含有效值的每一项执行一次 `callback` 函数，那些已删除或者未初始化的项将被跳过（例如在稀疏数组上）。

>可依次向 `callback` 函数传入三个参数：
>
>1. 数组当前项的值
>2. 数组当前项的索引
>3. 数组对象本身
>
>如果 `thisArg` 参数有值，则每次 `callback` 函数被调用时，`this`都会指向 `thisArg` 参数。如果省略了 `thisArg` 参数，或者其值为 `null` 或 `undefined`，`this` 则指向全局对象。按照函数观察到 `this` 的常用规则，`callback`函数最终可观察到 `this` 值。
>
>`forEach()` 遍历的范围在第一次调用 `callback` 前就会确定。调用 `forEach` 后添加到数组中的项不会被 `callback` 访问到。如果已经存在的值被改变，则传递给 `callback` 的值是 `forEach()` 遍历到他们那一刻的值。已删除的项不会被遍历到。如果已访问的元素在迭代时被删除了（例如使用 `shift()`），之后的元素将被跳过——参见下面的示例。
>
>`forEach()` 为每个数组元素执行一次 `callback` 函数；与 `map()` 或者 `reduce()` 不同的是，它总是返回 `undefined` 值，并且不可链式调用。其典型用例是在一个调用链的最后执行副作用（`side effects`，函数式编程上，指函数进行 返回结果值 以外的操作）。
>
>`forEach()` 被调用时，不会改变原数组，也就是调用它的数组（尽管 `callback` 函数在被调用时可能会改变原数组）。（译注：此处说法可能不够明确，具体可参考`EMCA`语言规范：`'forEach does not directly mutate the object on which it is called but the object may be mutated by the calls to callbackfn.'`，即 `forEach` 不会直接改变调用它的对象，但是那个对象可能会被 `callback` 函数改变。）

- 示例

不对未初始化的值进行任何操作（稀疏数组）

```js
// 如你所见，3 和 7 之间空缺的数组单元未被 forEach() 调用 callback 函数，或进行任何其他操作。
const arraySparse = [1,3,,7];
let numCallbackRuns = 0;
arraySparse.forEach(function(element){
  console.log(element);
  numCallbackRuns++;
});
console.log("numCallbackRuns: ", numCallbackRuns);
// 1
// 3
// 7
// numCallbackRuns: 3
```

将 `for` 循环转换为 `forEach`

```js
const items = ['item1', 'item2', 'item3'];
const copy = [];
// before
for (let i=0; i<items.length; i++) {
  copy.push(items[i]);
}
// after
items.forEach(function(item){
  copy.push(item);
});
```

打印出数组的内容

注意：为了在控制台中显示数组的内容，你可以使用 `console.table()` 来展示经过格式化的数组。下面的例子则是另一种使用 `forEach()` 的格式化的方法。

下面的代码会为每一个数组元素输出一行记录：

```js
function logArrayElements(element, index, array) {
  console.log('a[' + index + '] = ' + element);
}
// 注意索引 2 被跳过了，因为在数组的这个位置没有项
[2, 5, , 9].forEach(logArrayElements);
// logs:
// a[0] = 2
// a[1] = 5
// a[3] = 9
```

使用 `thisArg`
举个勉强的例子，按照每个数组中的元素值，更新一个对象的属性：

```js
function Counter() {
  this.sum = 0;
  this.count = 0;
}
Counter.prototype.add = function(array) {
  array.forEach(function(entry) {
    this.sum += entry;
    ++this.count;
  }, this);
  // ^---- Note
};

const obj = new Counter();
obj.add([2, 5, 9]);
obj.count;
// 3 === (1 + 1 + 1)
obj.sum;
// 16 === (2 + 5 + 9)
```

因为 `thisArg` 参数（`this`）传给了 `forEach()`，每次调用时，它都被传给 `callback` 函数，作为它的 `this` 值。

注意：如果使用箭头函数表达式来传入函数参数， `thisArg` 参数会被忽略，因为箭头函数在词法上绑定了 `this` 值。

```js
fruits.forEach(function (item, index, array) {
    console.log(item, index);
});
```

- 针对 `promise` 或 `async` 函数的使用备注

-
如果使用 `promise` 或 `async` 函数作为 `forEach()` 等类似方法的 `callback` 参数，最好对造成的执行顺序影响多加考虑，否则容易出现错误。

```js
let ratings = [5, 4, 5];
let sum = 0;
let sumFunction = async function (a, b) {
    return a + b;
}

ratings.forEach(async function(rating) {
    sum = await sumFunction(sum, rating);
})
console.log(sum);
// Expected output: 14
// Actual output: 0
```

 

:::warning 警告
注意： 除了抛出异常以外，没有办法中止或跳出 `forEach()` 循环。如果你需要中止或跳出循环，`forEach()` 方法不是应当使用的工具。

若你需要提前终止循环，你可以使用：

一个简单的 `for` 循环\

`for...of` / `for...in` 循环

`Array.prototype.every()`

`Array.prototype.some()`

`Array.prototype.find()`

`Array.prototype.findIndex()`

这些数组方法则可以对数组元素判断，以便确定是否需要继续遍历：

`every()`

`some()`

`find()`

`findIndex()`

译者注：只要条件允许，也可以使用 `filter()` 提前过滤出需要遍历的部分，再用 `forEach()` 处理。

:::

2. `Array.prototype.map()` 遍历数组，返回每项遍历后的结果组成的新数组

```js
var new_array = arr.map(function callback(currentValue[, index[, array]]) {
 // Return element for new_array
}[, thisArg])
```

 
创建一个新数组，其结果是该数组中的每个元素是调用一次提供的函数后的返回值。

- 参数
  - `callback`:生成新数组元素的函数，使用三个参数：
        - `currentValue`:`callback` 数组中正在处理的当前元素。
        - `index`(可选):`callback` 数组中正在处理的当前元素的索引。
        - `array`(可选):`map` 方法调用的数组。
  - `thisArg`(可选):执行 `callback` 函数时值被用作`this`。
- 返回值
一个由原数组每个元素执行回调函数的结果组成的新数组。

- 描述
`map` 方法会给原数组中的每个元素都按顺序调用一次  `callback` 函数。`callback` 每次执行后的返回值（包括 `undefined`）组合起来形成一个新数组。 `callback` 函数只会在有值的索引上被调用；

因为`map`生成一个新数组，当你不打算使用返回的新数组却使用map是违背设计初衷的，请用`forEach`或者`for-of`替代。你不该使用`map: A`你不打算使用返回的新数组，或`/`且 `B` 你没有从回调函数中返回值。
`callback` 函数会被自动传入三个参数：数组元素，元素索引，原数组本身。

如果 `thisArg` 参数提供给`map`，则会被用作回调函数的`this`值。否则`undefined`会被用作回调函数的`this`值。`this`的值最终相对于`callback`函数的可观察性是依据`the usual rules for determining the this seen by a function`决定的

`map` 不修改调用它的原数组本身（当然可以在 `callback` 执行时改变原数组）

`map` 方法处理数组元素的范围是在 `callback` 方法第一次调用之前就已经确定了。调用`map`方法之后追加的数组元素不会被`callback`访问。如果存在的数组元素改变了，那么传给`callback`的值是`map`访问该元素时的值。在`map`函数调用后但在访问该元素前，该元素被删除的话，则无法被访问到。

根据规范中定义的算法，如果被`map`调用的数组是离散的，新数组将也是离散的保持相同的索引为空。

- 示例

求数组中每个元素的平方根

```js
//下面的代码创建了一个新数组，值为原数组中对应数字的平方根。
var numbers = [1, 4, 9];
var roots = numbers.map(Math.sqrt);
// roots的值为[1, 2, 3], numbers的值仍为[1, 4, 9]
```

使用 map 重新格式化数组中的对象

```js
// 以下代码使用一个包含对象的数组来重新创建一个格式化后的数组。
var kvArray = [{key: 1, value: 10},
               {key: 2, value: 20},
               {key: 3, value: 30}];

var reformattedArray = kvArray.map(function(obj) {
   var rObj = {};
   rObj[obj.key] = obj.value;
   return rObj;
});

// reformattedArray 数组为： [{1: 10}, {2: 20}, {3: 30}],

// kvArray 数组未被修改:
// [{key: 1, value: 10},
//  {key: 2, value: 20},
//  {key: 3, value: 30}]
```

下面的例子演示如何在一个 `String`  上使用 `map` 方法获取字符串中每个字符所对应的`ASCII` 码组成的数组：

```js
var map = Array.prototype.map
var a = map.call("Hello World", function(x) {
  return x.charCodeAt(0);
})
// a的值为[72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
```

下面代码展示了如何去遍历用 `querySelectorAll` 得到的动态对象集合。在这里，我们获得了文档里所有选中的选项，并将其打印：

```js
var elems = document.querySelectorAll('select option:checked');
var values = Array.prototype.map.call(elems, function(obj) {
  return obj.value;
});
```

 

3. `Array.prototype.every(callback(element[, index[, array]])[, thisArg])` 返回是一个布尔值，只要有一项条件不成立，就返回`false`
 
`every()` 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。

\* 注意：若收到一个空数组，此方法在一切情况下都会返回 `true`。

- 参数
  - `callbac`:用来测试每个元素的函数，它可以接收三个参数：
    - `element`:用于测试的当前值。
    - `index`(可选):用于测试的当前值的索引。
    - `array`(可选):调用 `every` 的当前数组。
  - `thisArg`:执行 `callback` 时使用的 `this` 值。
- 返回值
如果回调函数的每一次返回都为 `true` 值，返回 `true` ，否则返回 `false`。

- 描述
`every` 方法为数组中的每个元素执行一次 `callback` 函数，直到它找到一个会使 `callback` 返回 `false` 的元素。如果发现了一个这样的元素，`every` 方法将会立即返回 `false`。否则，`callback` 为每一个元素返回 `true`，`every` 就会返回 `true`。`callback` 只会为那些已经被赋值的索引调用。不会为那些被删除或从未被赋值的索引调用。

`callback` 在被调用时可传入三个参数：元素值，元素的索引，原数组。

如果为 `every` 提供一个 `thisArg` 参数，则该参数为调用 `callback` 时的 `this` 值。如果省略该参数，则 `callback` 被调用时的 `this` 值，在非严格模式下为全局对象，在严格模式下传入 `undefined`。详见 `this` 条目。

`every` 不会改变原数组。

`every` 遍历的元素范围在第一次调用 `callback` 之前就已确定了。在调用 `every` 之后添加到数组中的元素不会被 `callback` 访问到。如果数组中存在的元素被更改，则他们传入 `callback` 的值是 `every` 访问到他们那一刻的值。那些被删除的元素或从来未被赋值的元素将不会被访问到。

`every` 和数学中的"所有"类似，当所有的元素都符合条件才会返回`true`。正因如此，若传入一个空数组，无论如何都会返回 `true`。（这种情况属于无条件正确：正因为一个空集合没有元素，所以它其中的所有元素都符合给定的条件。

- 示例

检测所有数组元素的大小 ;下例检测数组中的所有元素是否都大于`10`。

```js
function isBigEnough(element, index, array) {
  return element >= 10;
}
[12, 5, 8, 130, 44].every(isBigEnough);   // false
[12, 54, 18, 130, 44].every(isBigEnough); // true
```

使用箭头函数
箭头函数为上面的检测过程提供了更简短的语法。

```js
[12, 5, 8, 130, 44].every(x => x >= 10); // false
[12, 54, 18, 130, 44].every(x => x >= 10); // true
```

 

4. `Array.prototype.some(callback(element[, index[, array]])[, thisArg])` 返回布尔值 只要有一项条件成立则返回`true` 否则返回`false`

 
测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个`Boolean`类型的值。

- 参数
  - `callback`:用来测试每个元素的函数，接受三个参数：
    - `element`:数组中正在处理的元素。
    - `index`:(可选):数组中正在处理的元素的索引值。
    - `array`(可选):`some()`被调用的数组。
  - `thisArg`(可选):执行 `callback` 时使用的 `this` 值。
返回值
数组中有至少一个元素通过回调函数的测试就会返回`true`；所有元素都没有通过回调函数的测试返回值才会为`false`。

- 描述

some() 为数组中的每一个元素执行一次 callback 函数，直到找到一个使得 callback 返回一个“真值”（即可转换为布尔值 true 的值）。如果找到了这样一个值，some() 将会立即返回 true。否则，some() 返回 false。callback 只会在那些”有值“的索引上被调用，不会在那些被删除或从来未被赋值的索引上调用。

callback 被调用时传入三个参数：元素的值，元素的索引，被遍历的数组。

如果一个thisArg参数提供给some()，它将被用作调用的 callback的 this 值。否则， 它的 this value将是 undefined。this的值最终通过callback来观察，根据 the usual rules for determining the this seen by a function的this判定规则来确定。

some() 被调用时不会改变数组。

some() 遍历的元素的范围在第一次调用 callback. 前就已经确定了。在调用 some() 后被添加到数组中的值不会被 callback 访问到。如果数组中存在且还未被访问到的元素被 callback 改变了，则其传递给 callback 的值是 some() 访问到它那一刻的值。已经被删除的元素不会被访问到。

- 示例

- 测试数组元素的值

下面的例子检测在数组中是否有元素大于 10。

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}
[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

- 使用箭头函数测试数组元素的值

箭头函数 可以通过更简洁的语法实现相同的用例.

```js
[2, 5, 8, 1, 4].some(x => x > 10);  // false
[12, 5, 8, 1, 4].some(x => x > 10); // true
```

- 判断数组元素中是否存在某个值

此例中为模仿 includes()  方法, 若元素在数组中存在, 则回调函数返回值为 true :

```js
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(function(arrVal) {
    return val === arrVal;
  });
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

使用箭头函数判断数组元素中是否存在某个值

```js
var fruits = ['apple', 'banana', 'mango', 'guava'];

function checkAvailability(arr, val) {
  return arr.some(arrVal => val === arrVal);
}

checkAvailability(fruits, 'kela');   // false
checkAvailability(fruits, 'banana'); // true
```

将任意值转换为布尔类型

```js
var TRUTHY_VALUES = [true, 'true', 1];

function getBoolean(value) {
  'use strict';

  if (typeof value === 'string') {
    value = value.toLowerCase().trim();
  }

  return TRUTHY_VALUES.some(function(t) {
    return t === value;
  });
}

getBoolean(false);   // false
getBoolean('false'); // false
getBoolean(1);       // true
getBoolean('true');  // true
```

 

5. `Array.prototype.filter()` 过滤 返回一个符合条件的新数组 不改变原数组

```js
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
```

\* `splice`作删除和`filter`做删除的区别是`splice`会改变原数组;
 
`filter()` 方法创建一个新数组, 其包含通过所提供函数实现的测试的所有元素。

- 参数
  - `callback`:用来测试数组的每个元素的函数。返回 `true` 表示该元素通过测试，保留该元素，`false` 则不保留。它接受以下三个参数：
    - `element`:数组中当前正在处理的元素。
    - `index`(可选)：正在处理的元素在数组中的索引。
    - `array`(可选):调用了 `filter` 的数组本身。
- `thisArg`(可选):执行 `callback` 时，用于 `this` 的值。

- 返回值

一个新的、由通过测试的元素组成的数组，如果没有任何数组元素通过测试，则返回空数组。

- 描述

filter 为数组中的每个元素调用一次 callback 函数，并利用所有使得 callback 返回 true 或等价于 true 的值的元素创建一个新数组。callback 只会在已经赋值的索引上被调用，对于那些已经被删除或者从未被赋值的索引不会被调用。那些没有通过 callback 测试的元素会被跳过，不会被包含在新数组中。

`callback` 被调用时传入三个参数：

   1. 元素的值
   2. 元素的索引
   3. 被遍历的数组本身

如果为 filter 提供一个 thisArg 参数，则它会被作为 callback 被调用时的 this 值。否则，callback 的 this 值在非严格模式下将是全局对象，严格模式下为 undefined。callback 函数最终观察到的 this 值是根据通常函数所看到的 "this"的规则确定的。

filter 不会改变原数组，它返回过滤后的新数组。

filter 遍历的元素范围在第一次调用 callback 之前就已经确定了。在调用 filter 之后被添加到数组中的元素不会被 filter 遍历到。如果已经存在的元素被改变了，则他们传入 callback 的值是 filter 遍历到它们那一刻的值。被删除或从来未被赋值的元素不会被遍历到。

- 示例

筛选排除所有较小的值

下例使用 filter 创建了一个新数组，该数组的元素由原数组中值大于 10 的元素组成。

```js
function isBigEnough(element) {
  return element >= 10;
}
var filtered = [12, 5, 8, 130, 44].filter(isBigEnough);
// filtered is [12, 130, 44]
```

过滤 JSON 中的无效条目

以下示例使用 filter() 创建具有非零 id 的元素的 json。

```js
var arr = [
  { id: 15 },
  { id: -1 },
  { id: 0 },
  { id: 3 },
  { id: 12.2 },
  { },
  { id: null },
  { id: NaN },
  { id: 'undefined' }
];

var invalidEntries = 0;

function isNumber(obj) {
  return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
}

function filterByID(item) {
  if (isNumber(item.id) && item.id !== 0) {
    return true;
  }
  invalidEntries++;
  return false;
}

var arrByID = arr.filter(filterByID);

console.log('Filtered Array\n', arrByID);
// Filtered Array
// [{ id: 15 }, { id: -1 }, { id: 3 }, { id: 12.2 }]

console.log('Number of Invalid Entries = ', invalidEntries);
// Number of Invalid Entries = 5
```

在数组中搜索
下例使用 `filter()` 根据搜索条件来过滤数组内容。

```js
var fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**
 * Array filters items based on search criteria (query)
 */
function filterItems(query) {
  return fruits.filter(function(el) {
      return el.toLowerCase().indexOf(query.toLowerCase()) > -1;
  })
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```

`ES2015` 实现

```js
const fruits = ['apple', 'banana', 'grapes', 'mango', 'orange'];

/**

* Array filters items based on search criteria (query)
 */
const filterItems = (query) => {
  return fruits.filter((el) =>
    el.toLowerCase().indexOf(query.toLowerCase()) > -1
  );
}

console.log(filterItems('ap')); // ['apple', 'grapes']
console.log(filterItems('an')); // ['banana', 'mango', 'orange']
```

 

6. `Array.prototype.find(callback[, thisArg])`

 
`find()` 方法返回数组中满足提供的测试函数的第一个元素的值。否则返回 `undefined`。

- 参数
  - `callback`:在数组每一项上执行的函数，接收 `3` 个参数：
    - `element`:当前遍历到的元素。
    - `index`(可选):当前遍历到的索引。
    - `array`(可选):数组本身。
  - `thisArg`(可选):执行回调时用作`this` 的对象。
- 返回值
数组中第一个满足所提供测试函数的元素的值，否则返回 `undefined`。

- 描述

find方法对数组中的每一项元素执行一次 callback 函数，直至有一个 callback 返回 true。当找到了这样一个元素后，该方法会立即返回这个元素的值，否则返回 undefined。注意 callback 函数会为数组中的每个索引调用即从 0 到 length - 1，而不仅仅是那些被赋值的索引，这意味着对于稀疏数组来说，该方法的效率要低于那些只遍历有值的索引的方法。

callback函数带有3个参数：当前元素的值、当前元素的索引，以及数组本身。

如果提供了 thisArg参数，那么它将作为每次 callback函数执行时的this ，如果未提供，则使用 undefined。

find方法不会改变数组。

在第一次调用 callback函数时会确定元素的索引范围，因此在 find方法开始执行之后添加到数组的新元素将不会被 callback函数访问到。如果数组中一个尚未被callback函数访问到的元素的值被callback函数所改变，那么当callback函数访问到它时，它的值是将是根据它在数组中的索引所访问到的当前值。被删除的元素仍旧会被访问到，但是其值已经是undefined了。

- 示例

用对象的属性查找数组里的对象

```js
var inventory = [
    {name: 'apples', quantity: 2},
    {name: 'bananas', quantity: 0},
    {name: 'cherries', quantity: 5}
];

function findCherries(fruit) {
    return fruit.name === 'cherries';
}

console.log(inventory.find(findCherries)); // { name: 'cherries', quantity: 5 }
```

寻找数组中的质数

下面的例子展示了如何从一个数组中寻找质数（如果找不到质数则返回undefined）

```js
function isPrime(element, index, array) {
  var start = 2;
  while (start <= Math.sqrt(element)) {
    if (element % start++ < 1) {
      return false;
    }
  }
  return element > 1;
}

console.log([4, 6, 8, 12].find(isPrime)); // undefined, not found
console.log([4, 5, 8, 12].find(isPrime)); // 5
```

当在回调中删除数组中的一个值时，当访问到这个位置时，其传入的值是 undefined：

```js
// Declare array with no element at index 2, 3 and 4
var a = [0,1,,,,5,6];

// Shows all indexes, not just those that have been assigned values
a.find(function(value, index) {
  console.log('Visited index ' + index + ' with value ' + value);
});

// Shows all indexes, including deleted
a.find(function(value, index) {

  // Delete element 5 on first iteration
  if (index == 0) {
    console.log('Deleting a[5] with value ' + a[5]);
    delete a[5];  // 注：这里只是将a[5]设置为undefined，可以试试用a.pop()删除最后一项，依然会遍历到被删的那一项
  }
  // Element 5 is still visited even though deleted
  console.log('Visited index ' + index + ' with value ' + value);
});
```

 

7. `Array.prototype.findIndex()`

`findIndex()`方法返回数组中满足提供的测试函数的第一个元素的索引。若没有找到对应元素则返回-1。

8. `Array.prototype.reduce(callback(accumulator, currentValue[, index[, array]])[, initialValue])` 数组的累加器

 

- 参数
  - `callback`:执行数组中每个值 (如果没有提供 `initialValue`则第一个值除外)的函数，包含四个参数：
    - `accumulator`:累计器累计回调的返回值; 它是上一次调用回调时返回的累积值，或`initialValue`（见于下方）。
    - `currentValue`:数组中正在处理的元素。
    - `index`(可选):数组中正在处理的当前元素的索引。 如果提供了`initialValue`，则起始索引号为0，否则从索引1起始。
    - `array`(可选):调用reduce()的数组
  - `initialValue`(可选):作为第一次调用 `callback`函数时的第一个参数的值。 如果没有提供初始值，则将使用数组中的第一个元素。 在没有初始值的空数组上调用 `reduce` 将报错。
- 返回值
函数累计处理的结果

- 描述
`reduce`为数组中的每一个元素依次执行callback函数，不包括数组中被删除或从未被赋值的元素，接受四个参数：

  1. accumulator 累计器
  2. currentValue 当前值
  3. currentIndex 当前索引
  4. array 数组

回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。

回调函数第一次执行时，accumulator 和currentValue的取值有两种情况：如果调用reduce()时提供了initialValue，accumulator取值为initialValue，currentValue取数组中的第一个值；如果没有提供 initialValue，那么accumulator取数组中的第一个值，currentValue取数组中的第二个值。

注意：如果没有提供initialValue，reduce 会从索引1的地方开始执行 callback 方法，跳过第一个索引。如果提供initialValue，从索引0开始。

如果数组为空且没有提供initialValue，会抛出TypeError 。如果数组仅有一个元素（无论位置如何）并且没有提供initialValue， 或者有提供initialValue但是数组为空，那么此唯一值将被返回并且callback不会被执行。

提供初始值通常更安全，正如下面的例子，如果没有提供initialValue，则可能有四种输出：

```js
var maxCallback = ( acc, cur ) => Math.max( acc.x, cur.x );
var maxCallback2 = ( max, cur ) => Math.max( max, cur );

// reduce() 没有初始值
[ { x: 2 }, { x: 22 }, { x: 42 } ].reduce( maxCallback ); // NaN
[ { x: 2 }, { x: 22 }            ].reduce( maxCallback ); // 22
[ { x: 2 }                       ].reduce( maxCallback ); // { x: 2 }
[                                ].reduce( maxCallback ); // TypeError

// map/reduce; 这是更好的方案，即使传入空数组或更大数组也可正常执行
[ { x: 22 }, { x: 42 } ].map( el => el.x )
                        .reduce( maxCallback2, -Infinity );
```

`reduce()` 如何运行
假如运行下段`reduce()`代码：

```js
[0, 1, 2, 3, 4].reduce(function(accumulator, currentValue, currentIndex, array){
  return accumulator + currentValue;
});
```

`callback` 被调用四次，每次调用的参数和返回值如下表：

| callback    | accumulator | currentValue | currentIndex | array           | return value |
| ----------- | ----------- | ------------ | ------------ | --------------- | ------------ |
| first call  | 0           | 1            | 1            | [0, 1, 2, 3, 4] | 1            |
| second call | 1           | 2            | 2            | [0, 1, 2, 3, 4] | 3            |
| third call  | 3           | 3            | 3            | [0, 1, 2, 3, 4] | 6            |
| fourth call | 6           | 4            | 4            | [0, 1, 2, 3, 4] | 10           |

由`reduce`返回的值将是最后一次回调返回值（10）。

你还可以使用箭头函数来代替完整的函数。 下面的代码将产生与上面的代码相同的输出：

```js
[0, 1, 2, 3, 4].reduce((prev, curr) => prev + curr );
```

如果你打算提供一个初始值作为reduce()方法的第二个参数，以下是运行过程及结果：

```js
[0, 1, 2, 3, 4].reduce((accumulator, currentValue, currentIndex, array) => {
    return accumulator + currentValue
}, 10)
```

| callback    | accumulator | currentValue | currentIndex | array           | return value |
| ----------- | ----------- | ------------ | ------------ | --------------- | ------------ |
| first call  | 10          | 0            | 0            | [0, 1, 2, 3, 4] | 10           |
| second call | 10          | 1            | 1            | [0, 1, 2, 3, 4] | 11           |
| third call  | 11          | 2            | 2            | [0, 1, 2, 3, 4] | 13           |
| fourth call | 13          | 3            | 3            | [0, 1, 2, 3, 4] | 16           |
| fifth call  | 16          | 4            | 4            | [0, 1, 2, 3, 4] | 20           |
这种情况下reduce()返回的值是20。

- 示例

数组里所有值的和

```js
var sum = [0, 1, 2, 3].reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
// 和为 6'
```

你也可以写成箭头函数的形式：

```js
var total = [ 0, 1, 2, 3 ].reduce(
  ( acc, cur ) => acc + cur,
  0
);
```

累加对象数组里的值
要累加对象数组中包含的值，必须提供初始值，以便各个item正确通过你的函数。

```js
var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.x;
},initialValue)

console.log(sum) // logs 6
```

你也可以写成箭头函数的形式：

```js
var initialValue = 0;
var sum = [{x: 1}, {x:2}, {x:3}].reduce(
    (accumulator, currentValue) => accumulator + currentValue.x
    ,initialValue
);

console.log(sum) // logs 6
```

将二维数组转化为一维

```js
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
  function(a, b) {
    return a.concat(b);
  },
  []
);
// flattened is [0, 1, 2, 3, 4, 5]
```

你也可以写成箭头函数的形式：

```js
var flattened = [[0, 1], [2, 3], [4, 5]].reduce(
 ( acc, cur ) => acc.concat(cur),
 []
);
```

计算数组中每个元素出现的次数

```js
var names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'];

var countedNames = names.reduce(function (allNames, name) {
  if (name in allNames) {
    allNames[name]++;
  }
  else {
    allNames[name] = 1;
  }
  return allNames;
}, {});
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
```

按属性对object分类

```js
var people = [
  { name: 'Alice', age: 21 },
  { name: 'Max', age: 20 },
  { name: 'Jane', age: 20 }
];

function groupBy(objectArray, property) {
  return objectArray.reduce(function (acc, obj) {
    var key = obj[property];
    if (!acc[key]) {
      acc[key] = [];
    }
    acc[key].push(obj);
    return acc;
  }, {});
}

var groupedPeople = groupBy(people, 'age');
// groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// }
```

使用扩展运算符和initialValue绑定包含在对象数组中的数组

```js
// friends - 对象数组
// where object field "books" - list of favorite books
var friends = [{
  name: 'Anna',
  books: ['Bible', 'Harry Potter'],
  age: 21
}, {
  name: 'Bob',
  books: ['War and peace', 'Romeo and Juliet'],
  age: 26
}, {
  name: 'Alice',
  books: ['The Lord of the Rings', 'The Shining'],
  age: 18
}];

// allbooks - list which will contain all friends' books +
// additional list contained in initialValue
var allbooks = friends.reduce(function(prev, curr) {
  return [...prev, ...curr.books];
}, ['Alphabet']);

// allbooks = [
//   'Alphabet', 'Bible', 'Harry Potter', 'War and peace',
//   'Romeo and Juliet', 'The Lord of the Rings',
//   'The Shining'
// ]
```

数组去重

注意： 如果你正在使用一个可以兼容Set 和 Array.from() 的环境， 你可以使用let orderedArray = Array.from(new Set(myArray)); 来获得一个相同元素被移除的数组。

```js
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce(function (accumulator, currentValue) {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue)
  }
  return accumulator
}, [])

console.log(myOrderedArray)
let arr = [1,2,1,2,3,5,4,5,3,4,4,4,4];
let result = arr.sort().reduce((init, current) => {
    if(init.length === 0 || init[init.length-1] !== current) {
        init.push(current);
    }
    return init;
}, []);
console.log(result); //[1,2,3,4,5]
```

按顺序运行`Promise`

```js
/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 */
function runPromiseInSequence(arr, input) {
  return arr.reduce(
    (promiseChain, currentFunction) => promiseChain.then(currentFunction),
    Promise.resolve(input)
  );
}

// promise function 1
function p1(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 5);
  });
}

// promise function 2
function p2(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 2);
  });
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
 return a * 3;
}

// promise function 4
function p4(a) {
  return new Promise((resolve, reject) => {
    resolve(a * 4);
  });
}

const promiseArr = [p1, p2, f3, p4];
runPromiseInSequence(promiseArr, 10)
  .then(console.log);   // 1200
```

功能型函数管道

```js
// Building-blocks to use for composition
const double = x => x + x;
const triple = x => 3 * x;
const quadruple = x => 4 * x;

// Function composition enabling pipe functionality
const pipe = (...functions) => input => functions.reduce(
    (acc, fn) => fn(acc),
    input
);

// Composed functions for multiplication of specific values
const multiply6 = pipe(double, triple);
const multiply9 = pipe(triple, triple);
const multiply16 = pipe(quadruple, quadruple);
const multiply24 = pipe(double, triple, quadruple);

// Usage
multiply6(6); // 36
multiply9(9); // 81
multiply16(16); // 256
multiply24(10); // 240
```

使用 reduce实现map

```js
if (!Array.prototype.mapUsingReduce) {
  Array.prototype.mapUsingReduce = function(callback, thisArg) {
    return this.reduce(function(mappedArray, currentValue, index, array) {
      mappedArray[index] = callback.call(thisArg, currentValue, index, array)
      return mappedArray
    }, [])
  }
}

[1, 2, , 3].mapUsingReduce(
  (currentValue, index, array) => currentValue + index + array.length
) // [5, 7, , 10]
```

 

9. `Array.prototype.reduceRight()`

`reduceRight()` 方法接受一个函数作为累加器（`accumulator`）和数组的每个值（从右到左）将其减少为单个值。

10. `Array.prototype.entries()`

`entries()` 方法返回一个新的`Array Iterator`对象，该对象包含数组中每个索引的键/值对。

11. `Array.prototype.keys()`

`keys()` 方法返回一个包含数组中每个索引键的`Array Iterator`对象。

12. `Array.prototype.values()`

`values()` 方法返回一个新的`Array Iterator` 对象，该对象包含数组每个索引的值

## Function

每个 `JavaScript` 函数实际上都是一个 `Function` 对象。运行 `(function(){}).constructor === Function // true` 便可以得到这个结论。

- 函数 `Function` 执行具体功能的代码块

函数 也是一种数据类型 引用类型 `Fuction`
作用：函数是由事件驱动或者主动调用时可重复执行的代码块

- 构造函数

`Function` 构造函数创建一个新的 `Function` 对象。直接调用此构造函数可用动态创建函数，但会遇到和 `eval` 类似的的安全问题和(相对较小的)性能问题。然而，与 `eval` 不同的是，`Function` 创建的函数只能在全局作用域中运行。

- 语法

`new Function ([arg1[, arg2[, ...argN]], functionBody)`
`function demo(){functionBody }`

- 参数
  - `arg1, arg2, ... argN`:被函数使用的参数的名称必须是合法命名的。参数名称是一个有效的`JavaScript`标识符的字符串，或者一个用逗号分隔的有效字符串的列表;例如`×`，`theValue`，或`a,b`。
  - `functionBody`:一个含有包括函数定义的 `JavaScript` 语句的字符串。
- 描述

使用 `Function` 构造器生成的 `Function` 对象是在函数创建时解析的。这比你使用函数声明或者函数表达式并在你的代码中调用更为低效，因为使用后者创建的函数是跟其他代码一起解析的。

所有被传递到构造函数中的参数，都将被视为将被创建的函数的参数，并且是相同的标示符名称和传递顺序。

以调用函数的方式调用 `Function` 的构造函数(而不是使用 `new` 关键字) 跟以构造函数来调用是一样的。

- 属性和方法

全局的 `Function` 对象没有自己的属性和方法，但是，因为它本身也是一个函数，所以它也会通过原型链从自己的原型链 `Function.prototype` 上继承一些属性和方法。

### 属性

- `Function.length`:获取函数的接收参数个数。
- `Function.name`:获取函数的名称。
- `Function.prototype.constructor`:原型对象

### 方法

1. `Function.prototype.apply(thisArg, [argumentsArray])` 改变函数`this`指向

 
`apply()` 方法调用一个具有给定`this`值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

- 参数
  - `Function`:调用并执行的函
  - `thisArg`(必选的):将`Function`里的`this`指向替代为`thisArg`的`this`。请注意，`this`可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 `null` 或 `undefined` 时会自动替换为指向全局对象，原始值会被包装。
  - `argsArray`(可选的):数组或者类数组对象，其中的数组元素将作为单独的参数传给 `func` 函数。如果该参数的值为 `null` 或  `undefined`，则表示不需要传入任何参数。从`ECMAScript 5` 开始可以使用类数组对象。 浏览器兼容性 请参阅本文底部内容。

- 返回值
调用有指定`this`值和参数的函数的结果。

- 描述

在调用一个存在的函数时，你可以为其指定一个 this 对象。 this 指当前对象，也就是正在调用这个函数的对象。 使用 apply， 你可以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法。

`apply()` 与 `call()` 非常相似，不同之处在于提供参数的方式。`apply` 使用参数数组而不是一组参数列表。apply 可以使用数组字面量（`array literal`），如 `fun.apply(this, ['eat', 'bananas'])`，或数组对象， 如  `fun.apply(this, new Array('eat', 'bananas'))`。

你也可以使用 `arguments` 对象作为 `argsArray` 参数。 `arguments`是一个函数的局部变量。 它可以被用作被调用对象的所有未指定的参数。 这样，你在使用`apply`函数的时候就不需要知道被调用对象的所有参数。 你可以使用`arguments`来把所有的参数传递给被调用对象。 被调用对象接下来就负责处理这些参数。

从 `ECMAScript` 第5版开始，可以使用任何种类的类数组对象，就是说只要有一个 `length` 属性和`(0..length-1)`范围的整数属性。例如现在可以使用 `NodeList` 或一个自己定义的类似 `{'length': 2, '0': 'eat', '1': 'bananas'}` 形式的对象。

- 示例

```js
    // 还是调用的obj.fn的方法，但用apply改变了的指向，this.name和arguments都是ojb1和新传递的值了
    let obj = {
        name: "zhang",
        fn: function() {
            console.log(arguments);
            console.log(this.name);
        },
    };
    let obj1 = {
        name: "wang",
    };
    obj.fn.apply(obj1, [1, 2, 3, 4]);
```

 

2. `Function.prototype.call(thisArg, arg1, arg2, ...)` 与`apply()` 方法类似，只是 `call()` 方法接受的是一个参数列表，而不是包含个参数的数组。

 

- 参数
  - `thisArg`(可选的):在 `function` 函数运行时使用的 `this` 值。请注意，`this`可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 `null` 或 `undefined` 时会自动替换为指向全局对象，原始值会被包装。
  - `arg1, arg2, ...`:指定的参数列表。
- 返回值
使用调用者提供的 `this` 值和参数调用该函数的返回值。若该方法没有返回值，则返回 `undefined`。
- 描述
`call()` 允许为不同的对象分配和调用属于一个对象的函数/方法。

`call()` 提供新的 `this` 值给当前调用的函数/方法。你可以使用 `call` 来实现继承：写一个方法，然后让另外一个新的对象来继承它（而不是在新对象中再写一次这个方法）。

- 示例
使用 `call` 方法调用父构造函数

在一个子构造函数中，你可以通过调用父构造函数的 `call` 方法来实现继承，类似于 `Java` 中的写法。下例中，使用 `Food` 和 `Toy` 构造函数创建的对象实例都会拥有在 `Product` 构造函数中添加的 `name` 属性和 `price` 属性,但 `category` 属性是在各自的构造函数中定义的。

```js
function Product(name, price) {
  this.name = name;
  this.price = price;
}

function Food(name, price) {
  Product.call(this, name, price);
  this.category = 'food';
}

function Toy(name, price) {
  Product.call(this, name, price);
  this.category = 'toy';
}

var cheese = new Food('feta', 5);
var fun = new Toy('robot', 40);
```

使用 `call` 方法调用匿名函数

在下例中的 `for` 循环体内，我们创建了一个匿名函数，然后通过调用该函数的 `call` 方法，将每个数组元素作为指定的 `this` 值执行了那个匿名函数。这个匿名函数的主要目的是给每个数组元素对象添加一个 `print` 方法，这个 `print` 方法可以打印出各元素在数组中的正确索引号。当然，这里不是必须得让数组元素作为 `this` 值传入那个匿名函数（普通参数就可以），目的是为了演示 `call` 的用法。

```js
var animals = [
  { species: 'Lion', name: 'King' },
  { species: 'Whale', name: 'Fail' }
];

for (var i = 0; i < animals.length; i++) {
  (function(i) {
    this.print = function() {
      console.log('#' + i + ' ' + this.species
                  + ': ' + this.name);
    }
    this.print();
  }).call(animals[i], i);
}
```

使用 `call` 方法调用函数并且指定上下文的 `this`
在下面的例子中，当调用 `greet` 方法的时候，该方法的`this`值会绑定到 `obj` 对象。

```js
function greet() {
  var reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
  console.log(reply);
}

var obj = {
  animal: 'cats', sleepDuration: '12 and 16 hours'
};

greet.call(obj);  // cats typically sleep between 12 and 16 hours
```

使用 `call` 方法调用函数并且不指定第一个参数（`argument`）
在下面的例子中，我们调用了 `display` 方法，但并没有传递它的第一个参数。如果没有传递第一个参数，this 的值将会被绑定为全局对象。

```js
var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call();  // sData value is Wisen
注意：在严格模式下，this 的值将会是 undefined。见下文。

'use strict';

var sData = 'Wisen';

function display() {
  console.log('sData value is %s ', this.sData);
}

display.call(); // Cannot read the property of 'sData' of undefined
```

 

3. `Function.prototype.bind()` 方法创建一个新的函数，在 `bind()` 被调用时，这个新函数的 `this` 被指定为 `bind()` 的第一个参数，而其余参数将作为新函数的参数，供调用时使用。

 

- 参数
  - `thisArg`:调用绑定函数时作为 `this` 参数传递给目标函数的值。 如果使用`new`运算符构造绑定函数，则忽略该值。当使用 `bind` 在 `setTimeout` 中创建一个函数（作为回调提供）时，作为 `thisArg` 传递的任何原始值都将转换为 `object`。如果 `bind` 函数的参数列表为空，或者`thisArg`是`null`或`undefined`，执行作用域的 `this` 将被视为新函数的 `thisArg`。
  - `arg1, arg2, ...`:当目标函数被调用时，被预置入绑定函数的参数列表中的参数。

- 返回值
返回一个原函数的拷贝，并拥有指定的 `this` 值和初始参数。

`bind()`方法会创建一个新函数,称为绑定函数.当调用这个绑定函数时,绑定函数会以创建它时传入 `bind()`方法的第一个参数作为 `this`,传入

`bind()`方法的第二个以及以后的参数加上绑定函数运行时本身的参数按照顺序作为原函数的参数来调用原函数.

- 示例

创建绑定函数
`bind()` 最简单的用法是创建一个函数，不论怎么调用，这个函数都有同样的 `this` 值。`JavaScript`新手经常犯的一个错误是将一个方法从对象中拿出来，然后再调用，期望方法中的 `this` 是原来的对象（比如在回调中传入这个方法）。如果不做特殊处理的话，一般会丢失原来的对象。基于这个函数，用原始的对象创建一个绑定函数，巧妙地解决了这个问题：

```js
this.x = 9;    // 在浏览器中，this 指向全局的 "window" 对象
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();
// 返回 9 - 因为函数是在全局作用域中调用的

// 创建一个新函数，把 'this' 绑定到 module 对象
// 新手可能会将全局变量 x 与 module 的属性 x 混淆
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81
```

 

:::warning 三者区别

- `call()`方法的作用和 `apply()` 方法类似，区别就是`call()`方法接受的是参数列表`call(thisArg,1,2,3,4)`，而`apply()`方法接受的是一个参数数组`apply(thisArg,[1,2,3,4])`。

- `apply()` 与 `call()` 非常相似，不同之处在于提供参数的方式。`apply()` 使用参数数组而不是一组参数列表。`apply` 可以使用数组字面量（`array literal`），如 `fun.apply(this, ['eat', 'bananas'])`，或数组对象， 如  `fun.apply(this, new Array('eat', 'bananas'))`。

`apply()`中：`Chrome 14` 以及 `Internet Explorer 9` 不接受类数组对象。如果传入类数组对象，它们会抛出异常。
:::

在一个对象的上下文中应用另一个对象的方法；参数能够以列表形式传入。

4. `Function.prototype.toString()` 方法返回一个表示当前函数源代码的字符串。
 

- 无参数
- 返回值
表示函数源代码的一个字符串
- 示例

```js
    let a = function(value) {
        this.name = "a";
        return value;
    };
    console.log(a.toString());
```

 

- `Function` 构造器与函数声明之间的不同

由 `Function` 构造器创建的函数不会创建当前环境的闭包，它们总是被创建于全局环境，因此在运行时它们只能访问全局变量和自己的局部变量，不能访问它们被 `Function` 构造器创建时所在的作用域的变量。这一点与使用 `eval` 执行创建函数的代码不同。

```js
var x = 10;

function createFunction1() {
    var x = 20;
    return new Function('return x;'); // 这里的 x 指向最上面全局作用域内的 x
}

function createFunction2() {
    var x = 20;
    function f() {
        return x; // 这里的 x 指向上方本地作用域内的 x
    }
    return f;
}

var f1 = createFunction1();
console.log(f1());          // 10
var f2 = createFunction2();
console.log(f2());          // 20
```

虽然这段代码可以在浏览器中正常运行，但在 `Node.js` 中 `f1()` 会产生一个“`找不到变量 x` ”的 `ReferenceError`。这是因为在 `Node` 中顶级作用域不是全局作用域，而 x 其实是在当前模块的作用域之中。

(明天继续·······)

### 示例

```js
 //函数基本写法
 /**
  * funtion
  * funname 函数名(英文)
  * (a,b) 用来放形参 和实参一一对应
  * {}  函数执行的内容
 */
 function  funname () {}
 // 函数执行、调用
 funname()
```

- 函数的参数 调用函数时你可以给函数传递值 这些值被称为参数  可以传多个  这些参数以逗号分割

 ```js
 funname(1,2,3)  //实参(实际传递的参数)
 ```

- 函数需要接受这些参数 来进行一些`js`逻辑处理 函数接受的参数和传递的参数要一一对应 (形参)

 ```js
 funciton funname(a,b){ //形参 用来接受实际参数
}
 ```

- 带有返回值的函数 通过return就可以实现 并把返回值给到调用它的地方 函数调用 = 返回值  函数如果碰到return 后面的语句不在执行 都是无效代码

```js
funciton a(){
   return 1
  }
a() // a执行的结果就是1
```

## Date

- 获取当前时间获取当前时间

```js
var myDate = new Date();
```

- 获取时间中的年月日时分秒

```js
myDate.getYear();    // 获取当前年份(2位)
myDate.getFullYear();  // 获取完整的年份(4位,1970-????)
myDate.getMonth();    // 获取当前月份(0-11,0代表1月)
myDate.getDate();    // 获取当前日(1-31)
myDate.getDay();     // 获取当前星期X(0-6,0代表星期天)
myDate.getTime();    // 获取当前时间(从1970.1.1开始的毫秒数)
myDate.getHours();    // 获取当前小时数(0-23)
myDate.getMinutes();   // 获取当前分钟数(0-59)
myDate.getSeconds();   // 获取当前秒数(0-59)
myDate.getMilliseconds();  // 获取当前毫秒数(0-999)
myDate.toLocaleDateString();   // 获取当前日期
var mytime=myDate.toLocaleTimeString();   // 获取当前时间
myDate.toLocaleString( );    // 获取日期与时间
```

- 时间的格式化

```js
// 对Date的扩展，将 Date 转化为指定格式的String
// 月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符，
// 年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
// 例子：
// (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
// (new Date()).Format("yyyy-M-d h:m:s.S") ==> 2006-7-2 8:9:4.18

Date.prototype.Format = function (fmt) { // author: meizz
  var o = {
    "M+": this.getMonth() + 1, // 月份
    "d+": this.getDate(), // 日
    "h+": this.getHours(), // 小时
    "m+": this.getMinutes(), // 分
    "s+": this.getSeconds(), // 秒
    "q+": Math.floor((this.getMonth() + 3) / 3), // 季度
    "S": this.getMilliseconds() // 毫秒
  };
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
      return fmt;
}
```

- 调用方法·

```js
var time1 = new Date().Format("yyyy-MM-dd");

var time2 = new Date().Format("yyyy-MM-dd hh:mm:ss");
```

## 常用内对象

1. `parseInt(string, radix)`
转换为一个整数 或 `NaN`（`radix` 小于 2 或大于 36 ，或第一个非空格字符不能转换为数字则返回`NaN`）

   - `string`被解析的值。参数不是字符串，将其转为字符串(使用 `ToString`抽象操作)。字符串开头的空白符将会被忽略
   - `radix` (可选)从 `2` 到 `36`，表示字符串的基数。如 `16` 表示被解析值是十六进制数。注意，`10`不是默认值！

```js
    console.log(parseInt('-12')); //-12
    console.log(parseInt('+12')); //12(+12)
    console.log(parseInt('@12')); //NaN
    console.log(parseInt('0.12'));// 0
    console.log(parseInt('f12')); //NaN
    console.log(parseInt('1k2')); //1
    console.log(parseInt(null));// NaN
    console.log(parseInt(undefined)); //NaN
    console.log(parseInt({ a: 123 })); //NaN
    console.log(parseInt(true));// NaN
    console.log(parseInt(false));// NaN
```

描述：
`parseInt`函数将其第一个参数转换为一个字符串，对该字符串(从左到右)进行解析，然后返回一个整数或 `NaN`
:::warning 注意
字符串首位是`+ -`，可以识别，其他字符不能，会停止解析，并返回之前解析完成的值
:::

2. `parseFloat(string)`
函数解析一个参数（必要时先转换为字符串）并返回一个浮点数(小数)，如果给定值不能被转换成数值，则会返回 `NaN`。

```js
    let num = '12.1.5'
    let num2 = parseFloat(num)
    console.log(num2); //12.1
    // num 是12.0.5就会返回12 ，因为12.0 会省略最后的0
```

```js
//下面的例子都返回3.14
    parseFloat(3.14);
    parseFloat('3.14');
    parseFloat('  3.14  ');
    parseFloat('314e-2');
    parseFloat('0.0314E+2');
    parseFloat('3.14some non-digit characters');
    parseFloat({ toString: function() { return "3.14" } });
```

:::warning 注意
在解析中遇到了`+`、`-` 、`0-9`、`.`、科学记数法中的指数（`e 或 E`）以外的字符，会忽略该字符以及之后的所有字符，返回已经解析到的浮点数;第二个小数点出现也会使解析停止（在这之前的字符都会被解析）;参数首位和末位的空白符会被忽略;如果参数字符串的第一个字符不能被解析成为数字,则 `parseFloat` 返回 `NaN`。

`parseFloat`、`parseInt`是个全局函数,不属于任何对象。
:::

3. `eval(string)`
`eval()` 函数会将传入的字符串当做 `JavaScript` 代码进行执行。

```js
console.log(eval('2 + 2')); // expected output: 4

console.log(eval(new String('2 + 2')));// 2 + 2

console.log(eval('2 + 2') === eval('4'));//  true
```

## 总结

- `String`和`Array`都有的方法
  - `toString()`转字符
  - `concat()`拼接
  - `splice()`替换 删除
