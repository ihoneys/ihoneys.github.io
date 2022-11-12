---
title: JS 运算符和语句
date: 2019-12-21
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - JavaScript
publish: true
# 打赏
showSponsor: true
---
## 运算符

### 布尔操作符 (与 或 非)

```js
//会被转换为 false 的表达式有：
null
undefined
NaN
0
"" or '' or `` // 空字符串
```

- 与 `&&`

全真为真，有假即假 (全真教)

```js
let result = true && false
```

值

| 第一个参数 | 第二个参数 |  结果   |
| :--------: | :--------: | :-----: |
|   `ture`   |   `true`   | `true`  |
|  `false`   |   `true`   | `false` |
|   `true`   |  `false`   | `false` |
|  `false`   |  `false`   | `false` |

>- 如果第一个操作数是对象，则返回第二个操作数。
>- 如果第二个操作数是对象，则只有第一个操作数求值为true才会返回该对象。
>- 如果两个操作数都是对象，则返回第二个操作数。
>- 如果有一个操作数是null，则返回null。
>- 如果有一个操作数是NaN，则返回NaN。
>- 如果有一个操作数是undefined，则返回undefined。

- 使用单个 `&` 判断奇偶性
偶数 `& 1 = 0`

奇数 `& 1 = 1`

```js
console.log(7 & 1); // 1
console.log(8 & 1) ; // 0
```

- 或 `||`

有真即真，全假为假

```js
let result = true || false;
```

值

| 第一个参数 | 第二个参数 |  结果   |
| :--------: | :--------: | :-----: |
|   `ture`   |   `true`   | `true`  |
|  `false`   |   `true`   | `true`  |
|   `true`   |  `false`   | `true`  |
|  `false`   |  `false`   | `false` |

>- 如果第一个操作数是对象，则返回第一个操作数。
>- 如果第一个操作数求值为false，则返回第二个操作数。
>- 如果两个操作数都是对象，则返回第一个操作数。
>- 如果两个操作数都是null，则返回null。
>- 如果两个操作数都是NaN，则返回NaN。
>- 如果两个操作数都是undefined，则返回undefined。

`&&`和`||`都是短路计算

```js
( false ) && (expr) //短路计算的结果为假。
( true ) || (expr) //短路计算的结果为真。
```

短路意味着上述表达式中的`expr`部分不会被执行，

- 非 `!`

值

| 取反 `!`         | 结果    | 转布尔 `!!`       | 结果    |
| :--------------- | :------ | :---------------- | :------ |
| `!false`         | `true`  | `!!false`         | `false` |
| `!true`          | `false` | `!!true`          | `true`  |
| `!"blue"`        | `false` | `!!"blue"`        | `true`  |
| `!0`             | `true`  | `!!0`             | `false` |
| `!NaN`           | `true`  | `!!NaN`           | `false` |
| `!undefined`     | `true`  | `!!undefined`     | `false` |
| `!" "`           | `false` | `!!" "`           | `true`  |
| `!123`           | `false` | `!!123`           | `true`  |
| `!function() {}` | `false` | `!!function() {}` | `true`  |
| `!{}`            | `false` | `!!{}`            | `true`  |
| `!{ a: 1 }`      | `false` | `!!{ a: 1 }`      | `true`  |
| `![1, 2]`        | `false` | `!![1, 2]`        | `true`  |

>- 如果操作数是对象，则返回false。
>- 如果操作数是空字符串，则返回true。
>- 如果操作数是非空字符串，则返回false。
>- 如果操作数是数值0，则返回true。
>- 如果操作数是非0数值（包括Infinity），则返回false。
>- 如果操作数是null，则返回true。
>- 如果操作数是NaN，则返回true。
>- 如果操作数是undefined，则返回true。

取反操作

```js
console.log(!false); //true
console.log(!true); //false
console.log(!"blue"); // false
console.log(!0); //true
console.log(!NaN); //true
console.log(!undefined); //true
console.log(!" "); // false
console.log(!123); // false
console.log(!function() {}); // false
console.log(!{}); // false
console.log(!{ a: 1 }); // false
console.log(![1, 2]); // false
```

转布尔值(等价于`Boolean()`)

```js
console.log(!!false); //false
console.log(!!true); //true
console.log(!!"blue"); // true
console.log(!!0); //false
console.log(!!NaN); //false
console.log(!!undefined); //false
console.log(!!" "); // true
console.log(!!123); // true
console.log(!!function() {}); // true
console.log(!!{}); // true
console.log(!!{ a: 1 }); // true
console.log(!![1, 2]); // true
```

所有非`0`的值都是`true`，包括负数、浮点数：

```js
console.log(!!7); // true
console.log(!!0); // false
console.log(!!-1); // true
console.log(!!0.71); // true
```

### = 、 == 和 === 的区别

```js
// 一个等号表示赋值
// 两个等号表示比较等号左右两边的值是否相等
// 三个等号表示两个值全等（包括数据类型也相同）
```

### 位运算

- 使用 `^` 切换变量 `0` 或 `1`

```js
// --- before ---
// if 判断
if (toggle) {
    toggle = 0;
} else {
    toggle = 1;
}
// 三目运算符
togle = toggle ? 0 : 1;

// --- after ---
toggle ^= 1;
```

- 使用`~`、`>>`、`<<`、`>>>`、`|`来取整
相当于使用了 `Math.floor()`

```js
console.log(~~11.71) // 11
console.log(11.71 >> 0) // 11
console.log(11.71 << 0) // 11
console.log(11.71 | 0) // 11
console.log(11.71 >>> 0) // 11
```

注意 `>>>` 不可对负数取整

- 使用`^`来检查数字是否不相等

```js
// --- before ---
if (a !== 1171) {...};

// --- after ---
if (a ^ 1171) {...};
```

- 使用 `Array.length = 0` 来清空数组
- 使用 `Array.slice(0)` 实现数组浅拷贝

```js
let arr = [0,1,2,3]
let b = arr.slice(0) //不就相当于 let b = arr;吗，不知道这个方法有什么用
console.log(b)
```

## 语句

- 条件语句

条件语句 `if` `else if` 后面括号跟的值返回的是一定是 `true` 或者 `false` `if` 可以独立使用 `if` `else if` 只要有一个条件成立就不在继续往下走了

```js
if (条件js) {
  //条件成立
}
if (条件js) {
  //条件成立
} else {
  // 条件不成立
}
// if \ else if \ else 只要有一个条件成立就不在继续执行
var c = 9;
if (c > 9) {
  alert('第一个条件');
} else if (c > 7) {
  alert('第二个条件');
} else if (c > 8) {
  alert('第三个条件');
} else {
  alert('第四个条件');
}
```

- 三元表达式
`if else`的简化版
语法：`条件？条件成立的执行语句:条件不成立的执行语句`

```js
 var age = 19
 age>=18?document.write('成年'):document.write('未成年')
 var  money = 200
 // 函数里面如果有三元 return需要在语句的最前面
 function str(){
    return money>100?'买的起':'买不起'
 }
 str()
```

- 条件判断语句`switch case`

```js
// 基本写法
switch(条件){
  case  条件对比:
    // 如果条件成立走这里
    break
    default:
      //如果条件全都不成立走这里
}
```

- for 循环
批量处理数据

```js
for(初始化条件;终止(退出)条件；最终条件)
++自增运算符 每次会自动加1
for(var i=0;i<10;i++){
  //执行语句
  console.log(i) //0 1
}
```

- break 直接跳出当前循环 并不在进行下次循环
- continue 直接跳出当前循环 并进行下次循环

```js
var ary1 = [1, 2, 3, 4, 5, 6, 17, 19, 30];
// 1. 计算除了17之外其他数的和
// 2. 计算 17之前所有数的和
var sum = 0;
for (var i = 0; i < ary1.length; i++) {
  if (ary1[i] == 17) {
    //continue 1
    break; //2
  }
  sum = sum + ary1[i];
}
console.log(sum);
```

- `for` 循环条件的简写

```js
// --- before ---
for(let i = 0; i < arr.length; i++) {...}

// --- after ---
for(let i = arr.length; i--;) {...} // 注意 i-- 后面的分号别漏了
```

:::warning 危险
注意不要在控制台输入这个代码！！！
`(!(~+[])+{})[--[~+""][+[]]*[~+[]]+~~!+[]]+({}+[])[[~!+[]]*~+[]]` <br/>
😂😂😂😂
:::

