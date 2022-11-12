---
title: JS 常用数据操作（一）
date: 2019-12-21
categories:
- 前端基础
tags:
- JavaScript
---


收集的`js`方法和轮子

<!-- more -->

## 字符串

- 反转字符串

1. `reverse()`

```js
const str = "abcdefgh"
console.log(str.split("").reverse().join(""))
```

2. `unshift()`

```js
const  str = "abcdefgh"
function Reverse(str) {
    let arr = []
    let restr = str.split("")
    for (let i = 0; i < restr.length; i++) {
        arr.unshift(restr[i])
    }
    return arr.join("")
}
console.log(Reverse(str));
```

### 字符串去重

1. `for`循环

```js
let str = "abcabcabc"
function DeRepet(str) {
    let newStr = ""
    for (let i = 0; i < str.length; i++) {
        if (newStr.indexOf(str[i]) == -1) {
            newStr += str[i]
        }
    }
    return newStr
}
```

2. `Set()`

```js
let str = "abcabcabc"
Array.from(new Set(str)).join("")
```

```js
let str = "abcabcabc"
[...new Set(str)].join("")
```

### 反转字符串

```js
let str = '12345';
Array.prototype.map.call(str, function(x) {   //同时利用了call()方法
  return x;
}).reverse().join('');
```

## 数组

### 伪数组转真数组

1. `let arr =Array.from()`

```js
function fn(a, ...b) {
    let arr = Array.from(arguments);
    console.log(arr);
}
fn(1, 2, 3, 4, 5);
```

2. `Array.prototype.slice.call(arguments, 2)`

`slice` 方法可以用来将一个类数组（`Array-like`）对象/集合转换成一个新数组。你只需将该方法绑定到这个对象上。 一个函数中的  `arguments` 就是一个类数组对象的例子。

```js
function list() {
  return Array.prototype.slice.call(arguments);
}
let lists1 = list(1, 2, 3); // [1, 2, 3]
function list2() {
  return Array.prototype.slice.call(arguments,1);//第二个参数，从哪个下标开始转为真数组
}
let lists2 = list2(1, 2, 3); // [2, 3]
```

除了使用`Array.prototype.slice.call(arguments)`，你也可以简单的使用 `[].slice.call(arguments)` 来代替。另外，你可以使用 `bind` 来简化该过程。

```js
let unboundSlice = Array.prototype.slice;
let slice = Function.prototype.call.bind(unboundSlice);
function list() {
    return slice(arguments);
}
let list1 = list(1, 2, 3); // [1, 2, 3]
```

### 数组随机取值

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let index = Math.floor(Math.random() * arr.length)
console.log(arr[index]);
```

### 数组随机排列

- 洗牌算法(改变原数组)

```js
Array.prototype.shuffle = function () {
    let arr = this
    for (let i = arr.length - 1; i >= 0; i--) {
        let randomIdx = Math.floor(Math.random() * (i + 1))
        let itemAtIdx = arr[randomIdx]
        arr[randomIdx] = arr[i]
        arr[i] = itemAtIdx
    }
    return arr
}
let tempArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(tempArr.shuffle())//[ 5, 9, 6, 8, 4, 7, 3, 1, 2 ]
```

- 其他(改变原数组)

```js
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
function randomSort(a, b) {
    return Math.random() > 0.5 ? 1 : -1
}
console.log(arr.sort(randomSort));
console.log(arr);
```

### 扁平化数组

1. `for`循环

完成一个函数,接受数组作为参数,数组元素为整数或者数组,数组元素包含整数或数组,函数返回扁平化后的数组

如：[1, [2, [ [3, 4], 5], 6]] => [1, 2, 3, 4, 5, 6]

```js
let data =  [1, [2, [ [3, 4], 5], 6]];

function flat(data, result) {
    let i, d, len;
    for (i = 0, len = data.length; i < len; ++i) {
        d = data[i];
        if (typeof d === 'number') {
            result.push(d);
        } else {
            flat(d, result);
        }
    }
}

let result = [];
flat(data, result);

console.log(result);
```

2. `forEach()`

```js
function flatten(arr) {
  const result = [];
  arr.forEach((i) => {
    if (Array.isArray(i))
      result.push(...flatten(i));
    else
      result.push(i);
  })
  return result;
}

// Usage
const problem = [1, 2, 3, [4, 5, [6, 7], 8, 9]];

flatten(problem); // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

3. `arr.flat(2)`, `2`是深度，就是套了几层

```js
 let arr = [1, 2, 3, [4, 5, [6, 7], 8, 9]].flat(2);
 console.log(arr); //[1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### 数组去重

1. 扩展运算符，`Set`类型

```js
// 数组去重 1
let a = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];
let b = Array.from(new Set(a));
console.log(b);

// 数组去重 2
let a = ["1", "2", "3", "4", "5", "1", "2", "3", "4", "5"];
let b = [...new Set(a)];
console.log(b);
```

2. `js` 方式

```js
let arr=['12','32','89','12','12','78','12','32'];
// 最简单数组去重法
function unique1(array){
    let n = []; //一个新的临时数组
    for(let i = 0; i < array.length; i++){ //遍历当前数组
        if (n.indexOf(array[i]) == -1)
            n.push(array[i]);
    }
    return n;
}
arr = unique1(arr);
```

3. 数组去重应用

有一个大数组,`let a = ['1', '2', '3', ...]`;`a`的长度是`100`,内容填充随机整数的字符串.请先构造此数组`a`,然后设计一个算法将其内容去重

```js
/**
* 数组去重
**/
function normalize(arr) {
    if (arr && Array.isArray(arr)) {
        let i, len, map = {};
        for (i = arr.length; i >= 0; --i) {
            if (arr[i] in map) {
                arr.splice(i, 1);
            } else {
                map[arr[i]] = true;
            }
        }
    }
    return arr;
}

/**
* 用100个随机整数对应的字符串填充数组。
**/
function fillArray(arr, start, end) {
    start = start == undefined ? 1 : start;
    end = end == undefined ?  100 : end;

    if (end <= start) {
        end = start + 100;
    }

    let width = end - start;
    let i;
    for (i = 100; i >= 1; --i) {
        arr.push('' + (Math.floor(Math.random() * width) + start));
    }
    return arr;
}

let input = [];
fillArray(input, 1, 100);
input.sort(function (a, b) {
    return a - b;
});
console.log(input);

normalize(input);
console.log(input);
```

### 数组去重合并

```js
function combine(){
    let arr = [].concat.apply([], arguments);  //没有去重复的新数组
    return Array.from(new Set(arr));
}
let m = [1, 2, 2], n = [2,3,3];
console.log(combine(m,n));
```

```js
let arr1 = [1, 2, 1, 2, 1, 3, 5, 4, 6, 8]
let arr2 = ["a", "b", "a", "b", "c", "d", "e", "f"]
let arrAll = arr1.concat(arr2)
console.log([...new Set(arrAll)]);
```

### 合并两个数组

- 合并到原数组（改变原数组）

1. `concat`

```js
let vegetables = ['parsnip', 'potato'];
let moreVegs = ['celery', 'beetroot'];
let newarr = vegetables.concat(moreVegs)
console.log(newarr);
```

2. 展开操作符

```js
let vegetables = ["parsnip", "potato"];
let moreVegs = ["celery", "beetroot"];
vegetables.push(...moreVegs);
console.log(vegetables);
```

3. `apply`

```js
let vegetables = ['parsnip', 'potato'];
let moreVegs = ['celery', 'beetroot'];
// 将第二个数组融合进第一个数组
// 相当于 vegetables.push('celery', 'beetroot');
Array.prototype.push.apply(vegetables, moreVegs);
// 或者另一个写法
// vegetables.push.apply(vegetables, moreVegs);
console.log(vegetables);
// ['parsnip', 'potato', 'celery', 'beetroot']
```

### 获取数组中最大的一项

1. for

```js
function Max(arr) {
    let maxNum = arr[0]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxNum) {
            maxNum = arr[i]
        }
    }
    return maxNum
}
```

2. Math

```js
let arr = [1, 2, 3];
let max = Math.max.apply(null, arr);
console.log(max);//3
```

或

```js
let arr = [1, 2, 3];
let max = Math.max.apply(this, arr);
console.log(max);//3
```

或

```js
let arr = [1, 2, 3];
console.log(Math.max(...arr))
```

### 获取数组中最小的一项

1. for

```js
function Min(){
    let minNum =arr[0]
    for(let i=0 ;i<arr.length; i++){
        if(arr[i]<minNum){
            minNum = arr[i]
        }
    }
    return minNum
}
```

2. Math

```js
let arr = [1, 2, 3];
let max = Math.min.apply(null, arr);
console.log(max); //1
```

```js
let a = [1, 2, 3, 4, 5]
console.log(Math.min(...a));
```

### 随机取数组中一项

```js
let a = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"]

for (let i = 0; i < 50; i++) {
    function randoms(arr) {
        function ran(max, min) {
            return Math.floor(Math.random() * (max - min)) + min
        }
        let b = ran(arr.length, 0)
        return arr[b]
    }
    console.log(randoms(a));
}
```

### 数组的排序

1. `sort` 方法

```js
/*
    按 sort 及  id 排序
   @param {Object} a
   @param {Object} b
*/
function   sortFun(a, b) {
    return a.sort - b.sort == 0 ? a.id - b.id : a.sort - b.sort
};
arr.sort(sortFun)   //从小到大排序
```

```js
let a =[1,5,9,8,4,6]
a.sort((a,b)=> a-b)
console.log(a)
```

2. 数组对象排序

```js
let arr = [{name: "zlw", age: 24}, {name: "wlz", age: 25}];
let compare = function (obj1, obj2) {
    let val1 = obj1.name;
    let val2 = obj2.name;
    if (val1 < val2) {
        return -1;
    } else if (val1 > val2) {
        return 1;
    } else {
        return 0;
    }
}
console.log(arr.sort(compare));
```

### 数组求和  `reducer()`

```js
    function Reduce(arr) {
        return arr.reduce((start, item, index, arr) => {
            return start += item
        }, 0)
    }
```

### 递归求和

1. `js`

```js
function add(num1,num2){
    let num = num1+num2;
    if (num2+1>100) {
        return num;
    } else {
        return add(num,num2+1)
    }
}
let sum =add(1,2)
```

### 计算数组各项的重复次数

```js
let arr = ['胡将', '胡将', 'hujiang', '胡将', '胡江', 'hujiang'];
let obj = {};
arr.sort();    //先排序
for (let i = 0; i < arr.length;) {
    let count = 0;
    for (let j = i; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            count++
        }
    }
    obj[arr[i]] = count;
    i = i + count;    //跳过重复的值
}

console.log(obj); //{ hujiang: 2, '胡将': 3, '胡江': 1 }
```

- `shift()` 下例中每个循环将要从一个数组中移除下一项元素，直至它成为空数组。

```js
let names = ["Andrew", "Edward", "Paul", "Chris" ,"John"];

while( (i = names.shift()) !== undefined ) {
    console.log(i);
}
// Andrew, Edward, Paul, Chris, John
```

### 数组中的字符串循环转数字（数字字符串）

```js
let arr = ["1", "2", " 3"]
function toNumber(arr) {
    return arr.map((item) => {
        return parseInt(item, 10)
    })
}
```

### 数组中的数字转字符串

```js
[1,2,3,4,5,6].join("").split("")
```

## 对象

### 深拷贝 数组或对象

- 拷贝第一层

```js
const oldObj = {
    name: "zhangsan",
    age: 20,
    colors: ['orange', 'green', 'blue'],
    friend: {
    name: "guangju"
    }
}
// 不拷贝时的效果
// const newObj1 = oldObj
// newObj1.name = "zhang"
// console.log('oldObj', oldObj);
// console.log('newObj1', newObj1);

function deepClone(obj = {}) {
    if (typeof obj !== "object" || obj == null) {
        return obj
    }

    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }

    for (let key in obj) {
        result[key] = obj[key]
    }
    return result
}
// 深拷贝一层的效果
const newObj2 = deepClone(oldObj)
newObj2.name = "zhang"
newObj2.friend.name = "123"
console.log('oldObj', oldObj);
console.log('newObj2', newObj2);
```

- 完全深拷贝

```js
// 添加递归调用
for (let key in obj) {
    result[key] = deepClone(obj[key])
}
```

```js
function deepClone(obj = {}) {
    if (typeof obj !== "object" || obj == null) {
        return obj
    }
    let result
    if (obj instanceof Array) {
        result = []
    } else {
        result = {}
    }
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {//将oldObj 原型上的属性排除
            result[key] = deepClone(obj[key]) //属性的每一项再次调用 deepclone方法
        }
    }
    return result
}
const newObj2 = deepClone(oldObj)
newObj2.name = "zhang"
newObj2.friend.name = "123"
console.log('oldObj', oldObj);
console.log('newObj2', newObj2);
```

### 像数组一样使用对象

```js
let obj = {
    length: 0,

    addElem: function addElem (elem) {
        // obj.length is automatically incremented
        // every time an element is added.
        [].push.call(this, elem);
    }
};

// Let's add some empty objects just to illustrate.
obj.addElem({});
obj.addElem({});
console.log(obj.length);
// → 2
```

## Math

### 随机数(伪)

```js
// 0-9
Math.floor(Math.random()*10)
```

### 两数随机(伪)

```js
function Randoms(max,min){
    return Math.floor(Math.random()*(max-min)+min)
}
Randoms(10,1)
```

### 真随机

```js
// 可以用 Int8Array 2位 Uint8Array 2位 Int16Array 5位  Uint16Array 5位 Int32Array +-10位 或 Uint32Array 10位
let arr = new Uint32Array(1)
let a = window.crypto.getRandomValues(arr)
console.log(a);
```

### 取数组最大值

```js
console.log(Math.max.apply(null, [1, 23, 78, 5, 6, 8, 4]));
```

### 取数组最小值

```js
console.log(Math.min.apply(null, [1, 23, 78, 5, 6, 8, 4]));
```

## 函数 算法

- 递归求和

```js
function sum(n) {
    if (n == 1) {
        return 1
    }
    return sum(n - 1) + n;
}
console.log(sum(100));
```

```js
function sum(n) {
    if (n == 1) return n
    return n + sum(n - 1)
}
console.log(sum(100));
```

- 函数防抖

```js
let div = document.querySelector("#div1")
div.addEventListener('click', function () {
    debounce(demo)()
})
function demo() {
    console.log(window, "---45行")
}
function debounce(fn, interval) {
    let timer = null; // 定时器
    // console.log(1, "---44行")
    return function () {
        // 清除上一次的定时器
        clearTimeout(timer);
        // 拿到当前的函数作用域
        let _this = this;
        // 拿到当前函数的参数数组
        // let fl = Array.prototype.slice.call(arguments, 0)
        let args = Array.from(arguments)
        // 开启倒计时定时器
        timer = setTimeout(function () {
            // 通过apply传递当前函数this，以及参数
            fn.apply(_this, args);
            // 默认300ms执行
        }, interval || 300)
    }
}
```
