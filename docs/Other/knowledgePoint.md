---
title: 知识点
date: 2019-05-12
 
categories:
 - 小知识
tags:
 - 知识点

---
## 无序列表

- 看别人代码，先看语法，再看功能

- 59529-2000

- `API` 前后端交互的接口

- `API` 在文档中表示语法的意思（操作手册）

- 区别实例对象和函数对象

> - `.`的左边都是对象
> - `()`的左边都是函数
> - `.`的左边既是函数又是对象的叫函数对象
> - `函数对象`将一个函数作为对象使用时，就是函数对象。一般是在调用方法或属性时
>
> ```js
> function Fn(){ // Fn函数
> }
> const fn = new Fn // Fn是构造函数，fn是实例对象（简称对象）
> console.log(Fn.prototype) // Fn 是函数对象（Fn是函数，但在这里作为对象使用了，调用了Fn这个对象的prototype属性）
> ```

- `异步函数setTimeout`：会放入异步队列中，等所有同步任务完成以后在再执行

- 学习新知识要遵循 `WWH` 原则  即 `what` `way` `how`

- 使用 `console.table()` 来展示经过格式化的数组。

- 两种类型的回调函数

> 1. 同步回调
>
>    ​理解：立即执行，完全执行完了才结束，不会放入回调队列种
>
>    ​例子：数据遍历相关的回调函数   /  `promise`的`excutor`函数
>
> 2. 异步回调
>
>    ​理解：不会立即执行，会放入回调队列中，将来执行
>
>    ​例子：定时器回调  /  `ajax`回调  /  `promise`的成功 | 失败的回调
>
>    ​`setTimeout` 定时器，会放入异步队列中，等所有同步任务完成以后在再执行

- `.then()` :是同步回调. 和`new Promise(executor).then(function)`中的`executor`一样的。

- `promise` 无论是成功还是失败的回调函数，永远是异步执行的

- `.then`和它里的的回调函数是两回事`.then()`会同步执行，但它内部的`value=>{}`,`reason=>{}`是异步执行的

```js
        .then(
            value => { console.log('value', value); },
            reason => { console.log('reason', reason); })
```

- 函数和箭头函数没有指定`return` 默认返回`undefined`

- 箭头函数返回值

```js
let fn1 = function (a, b) {// 无返回值
            a + b
        }
        let fn2 = function (a, b) {
            return a + b
        }
        let fn3 = (a, b) => a + b
        let fn4 = (a, b) => { a + b }// 无返回值，和fn1等价
        let fn5 = (a, b) => { return a + b }

        console.log(fn1(1, 2));//undefined
        console.log(fn2(1, 2));//3
        console.log(fn3(1, 2));//3
        console.log(fn4(1, 2));//undefined
        console.log(fn5(1, 2));//3
```

- xss攻击是通过输入框运行脚本代码进行攻击

- `export default` 和 `export` 的区别

```js
export default { createElement }
// export 导出的是一个接口
// export default 导出的是一个具体值

//例:导出一个具体值
 const a = 1
 export { a }
 //上下等价
 export default a
```

- 类数组使用数组的方法（伪数组转数组）详情百度

```js
let childs = Array.from(arguments).slice(2)
```

- `event` 是事件源， `e.target` 触发事件的元素

- 数组求和 `list`数组的和 `eval(list.join('+'))`
- `export` ： `ex` = `exit`  ； `port` = 端口/出口
- `import` 是导入，被导入的组件一定要有对应的导出
- `ECMAScript` 中函数的参数就是局部变量。
- 在浏览器中，全局上下文就是我们常说的`window`对象，因此所有通过`var` 定义的全局变量和函数都会成为`window` 对象的属性和方法。
- 元素的属性也都挂在`window`上？？
- `0 NaN null undefined ''`转为布尔值是`false`
- `alert`弹出的值都是字符串
- `typeof`输出的值都是字符串
- `js`中以分号作为语句结束 如果独占一行则可以省略分号(通常不建议省略分号)
- CSS中样式优先级，加上`!important`：

```css
.plana{
  border: solid red 1rpx !important;
}
```

- `abort()`方法可以停止一个`XMLHttpRequest`对象对`HTTP`的请求，把该对象恢复到初始状态。例如，如果某个操作需要一系列的操作顺序完成，而这其中出现任何异常，都会导致当前操作的结束，当检测到某个步骤出现异常时，使用`abort()`方法，中止当前的处理
- 以数字开头的属性不能用点号引用，必须用方括号。

```js
    var renderer = [1, 2, 3, 4, 5, 6];
    console.log(renderer[1]);
    renderer[1] = 'name';
    // renderer['1'] != renderer[1]
    console.log(renderer['1']);
```

## 浏览器渲染原理

- 排版引擎解析 `CSS` 选择器时是从右往左解析（so，`webpack` 打包`css`式也从右到左）

```js
HTML =>  HTML parser  => DOM tree    ↴(结合)

CSS => CSS parser => style rules => attachment => render tree => painting => display
```

`webkit` 渲染原理

![webkit](https://s1.ax1x.com/2020/09/22/wLlIuq.png)

`gecko` 渲染原理

![gecko](https://s1.ax1x.com/2020/09/22/wLl4vn.png)

- 浏览器会共享 `computedStyle` ，能极大的提升执行效率
  - 共享的 `element` 不能有 id 属性
  - `tagName` 和 `class` 属性必须一样
  - `mappedAttribute` 必须相等
  - 不能使用 `sibling selector` 如: `first-child` , `:last-selector`, + `selector`
  - 不能有`style`属性。哪怕`style`属性相等，他们也不共享

- 不到万不得已，不要使用 `attribute` `selector，如：p`[att1=”val1”]。这样的匹配非常慢。更不要这样写：p[id=”id1”]。这样将 `id selector` 退化成 `attribute selector`。

## 堆栈

- 栈内存：提供代码运行的环境，存储基本数据类型值
- 堆内存：提供引用类型存储的空间
- 栈

![栈(基本数据类型)](https://s1.ax1x.com/2020/10/27/BM6Eff.png)

- 堆

![堆(引用数据类型)](https://s1.ax1x.com/2020/10/27/BM6e1S.png)

- 例

```js

    let a = {
        n: 1
        }
    let b = a
    a.x = a = {
        n: 2
    }
    console.log(a.x);
    console.log(b);
```

图解
![例子图解](https://s1.ax1x.com/2020/10/27/BMcMvD.png)

## 序列化和反序列化

- 序列化

将`js`中的`Object`转化为字符串

1. 使用`stringify`

```js
var last = JSON.stringify(obj); //将JSON对象转化为JSON字符
```

2. 使用`toJSONString`

```js
var last = obj.toJSONString(); //将JSON对象转化为JSON字符
```

- 反序列化

将`js`中`JSON`字符串转化为`Object`

1. 使用`JSON.parse`

```js
var obj = JSON.parse(data); //由JSON字符串转换为JSON对象
```

2. 使用`parseJSON`

```js
var obj = data.parseJSON(); //由JSON字符串转换为JSON对象
```

3. 使用`eval`

```js
var obj=eval("("+data+")");
```

`eval`这里要添加`"("+data+")"`的原因在于`eval`本身的问题。 由于`json`是以`{}`的方式来开始以及结束的，在`JS`中，它会被当成一个语句块来处理，所以必须强制性的将它转换成一种表达式。

- 使用场景

1. 向后台传递参数、接收后台返回值

如果后台返回的是一个`String`（`Object`序列化后返回），那么需要在`js`中使用`eval`或者`parse`等转化为`Object`再使用；

如果返回时传递了类型，比如就是`Object`，那么直接使用就好

2. 在页面间传递数据，特别是数组时

需要使用序列化，否则`IE`会报错：不能执行已经释放`Script`的代码

3. 在进行本地存储时

存储在本地`window.localStorage.setItem(key,value)`存储的`value`是`json`序列化的字符串；获取得到的`window.localSorage.getItem(key)`也是json序列化的字符串，需要经过`json`的反序列化进行使用（常见`json`序列化数组）

## 解决js计算精度的问题

- 案例

```js
0.1+0.2   //0.30000000000000004
1-0.9     //0.09999999999999998
9007199254740993-9007199254740992  //0
Math.pow(2,1023) //8.98846567431158e+307
//但是
Math.pow(2,1024)  //Infinity
```

- 方法一

```js
// 解决四维运算,js计算失去精度的问题

//加法
Number.prototype.add = function(arg){
    var r1,r2,m;
    try{r1=this.toString().split(".")[1].length}catch(e){r1=0}
    try{r2=arg.toString().split(".")[1].length}catch(e){r2=0}
    m=Math.pow(10,Math.max(r1,r2))
    return (this*m+arg*m)/m
}
//减法
Number.prototype.sub = function (arg){
    return this.add(-arg);
}
//乘法
Number.prototype.mul = function (arg)
{
    var m=0,s1=this.toString(),s2=arg.toString();
    try{m+=s1.split(".")[1].length}catch(e){}
    try{m+=s2.split(".")[1].length}catch(e){}
    return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m)
}
//除法
Number.prototype.div = function (arg){
    var t1=0,t2=0,r1,r2;
    try{t1=this.toString().split(".")[1].length}catch(e){}
    try{t2=arg.toString().split(".")[1].length}catch(e){}
    with(Math){
        r1=Number(this.toString().replace(".",""))
        r2=Number(arg.toString().replace(".",""))
        return (r1/r2)*pow(10,t2-t1);
    }
}
```

- 方法二
可以通过引入 `math.js` 或者 `bigNumber.js` 进行解决

```js
//例如
99999999999999999999-99999999999999999000  // 0
new BigNumber('99999999999999999999').minus('99999999999999999000')  //999
99999999999999999999===99999999999999999000  //true
new BigNumber('99999999999999999999').eq('99999999999999999000')  //false
new BigNumber(0.2).plus(0.1).toString() // '0.3'
new BigNumber(19.9).plus(0.01).toNumber() // 19.91
```

`BigNumber.js` 支持很多相关计算(如果需要使用很多运算，推荐使用该js) ,如果想了解更多请查阅[相关API](https://mikemcl.github.io/bignumber.js/#)
