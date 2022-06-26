---
title: JS 设计模式
date: 2019-12-21
 
categories:
- 前端基础
tags:
- JavaScript

---

- 创建型
  - 工厂模式
  - 单例模式
  - 原型模式

- 结构型
  - 适配器模式
  - 代理模式

- 行为型
  - 策略模式
  - 迭代器模式
  - 观察者模式(订阅-发布模式)
  - 命令模式
  - 状态模式

## 创建型模式

### 工厂模式

工厂模式中，我们在创建对象时不会对客户端暴露创建逻辑，并且是通过使用一个共同的接口来指向新创建的对象，用工厂方法代替new操作的一种模式。

```js
class Creator {
    create(name) {
        return new Animal(name)
    }
}

class Animal {
    constructor(name) {
        this.name = name
    }
}

var creator = new Creator()

var duck = creator.create('Duck')
console.log(duck.name) // Duck

var chicken = creator.create('Chicken')
console.log(chicken.name) // Chicken
```

#### 小结

1. 构造函数和创建者分离，对new操作进行封装
2. 符合开放封闭原则

### 单例模式

![单例模式](https://z3.ax1x.com/2021/07/13/WkrOD1.png)

举一个书中登录框的例子，代码如下:

```html
<!DOCTYPE html>
<html lang="en">

<body>
    <button id="btn">登录</button>
</body>
<script>
    class Login {
        createLayout() {
            var oDiv = document.createElement('div')
            oDiv.innerHTML = '我是登录框'
            document.body.appendChild(oDiv)
            oDiv.style.display = 'none'
            return oDiv
        }
    }

    class Single {
        getSingle(fn) {
            var result;
            return function() {
                return result || (result = fn.apply(this, arguments))
            }
        }
    }

    var oBtn = document.getElementById('btn')
    var single = new Single()
    var login = new Login()

    // 由于闭包，createLoginLayer对result的引用，所以当single.getSingle函数执行完之后，内存中并不会销毁result。

    // 当第二次以后点击按钮，根据createLoginLayer函数的作用域链中已经包含了result，所以直接返回result

    // 讲获取单例和创建登录框的方法解耦，符合开放封闭原则
    var createLoginLayer = single.getSingle(login.createLayout)
    oBtn.onclick = function() {
        var layout = createLoginLayer()
        layout.style.display = 'block'
    }
</script>

</html>
```

#### 小结

1. 单例模式的主要思想就是，实例如果已经创建，则直接返回

```js
function creatSingleton() {
    var obj = null
    // 实例如已经创建过，直接返回
    if (!obj) {
        obj = xxx
    }
    return obj
}
```

2. 符合开放封闭原则

### 原型模式

> 用原型实例指定创建对象的种类，并且通过拷贝这些原型创建新的对象。--百度百科

在JavaScript中，实现原型模式是在ECMAScript5中，提出的Object.create方法，使用现有的对象来提供新创建的对象的__proto__。

```js
var prototype = {
    name: 'Jack',
    getName: function() {
        return this.name
    }
}

var obj = Object.create(prototype, {
    job: {
        value: 'IT'
    }
})

console.log(obj.getName())  // Jack
console.log(obj.job)  // IT
console.log(obj.__proto__ === prototype)  //true
```

1. 方法继承

```js
var Parent = function() {}
Parent.prototype.show = function() {}
var Child = function() {}

// Child继承Parent的所有原型方法
Child.prototype = new Parent()
```

2. 所有函数默认继承`Object`

```js
var Foo = function() {}
console.log(Foo.prototype.__proto__ === Object.prototype) // true
```

3. `Object.create`

```js
var proto = {a: 1}
var propertiesObject = {
    b: {
        value: 2
    }
}
var obj = Object.create(proto, propertiesObject)
console.log(obj.__proto__ === proto)  // true
```

4. `isPrototypeOf`

`prototypeObj`是否在obj的原型链上

```js
prototypeObj.isPrototypeOf(obj)
```

5. `instanceof`

`contructor.prototype`是否出现在`obj`的原型链上

```js
obj instanceof contructor
```

6. `getPrototypeOf`

`Object.getPrototypeOf(obj)` 方法返回指定对象`obj`的原型（内部`[Prototype]`属性的值）

```js
Object.getPrototypeOf(obj)
```

7. `setPrototypeOf`

设置一个指定的对象的原型 ( 即, 内部`[Prototype]`属性）到另一个对象或 null

```JS
var obj = {}
var prototypeObj = {}
Object.setPrototypeOf(obj, prototypeObj)
console.log(obj.__proto__ === prototypeObj)   // true
```

## 结构型模式

### 适配器模式

![适配器模式](https://z3.ax1x.com/2021/07/13/WkyEQJ.png)
举一个书中渲染地图的例子

```js
class GooleMap {
    show() {
        console.log('渲染谷歌地图')
    }
}

class BaiduMap {
    show() {
        console.log('渲染百度地图')
    }
}

function render(map) {
    if (map.show instanceof Function) {
        map.show()
    }
}
render(new GooleMap())  // 渲染谷歌地图
render(new BaiduMap())  // 渲染百度地图
```

但是假如BaiduMap类的原型方法不叫show，而是叫display，这时候就可以使用适配器模式了，因为我们不能轻易的改变第三方的内容。在BaiduMap的基础上封装一层，对外暴露show方法。

```js
class GooleMap {
    show() {
        console.log('渲染谷歌地图')
    }
}

class BaiduMap {
    display() {
        console.log('渲染百度地图')
    }
}


// 定义适配器类, 对BaiduMap类进行封装
class BaiduMapAdapter {
    show() {
        var baiduMap = new BaiduMap()
        return baiduMap.display()
    }
}

function render(map) {
    if (map.show instanceof Function) {
        map.show()
    }
}

render(new GooleMap())         // 渲染谷歌地图
render(new BaiduMapAdapter())  // 渲染百度地图
```

#### 小结

1. 适配器模式主要解决两个接口之间不匹配的问题，不会改变原有的接口，而是由一个对象对另一个对象的包装。
2. 适配器模式符合开放封闭原则

### 代理模式

![代理模式](https://z3.ax1x.com/2021/07/13/Wk6mcQ.png)
本文举一个使用代理对象加载图片的例子来理解代理模式,当网络不好的时候，图片的加载需要一段时间，这就会产生空白，影响用户体验，这时候我们可在图片真正加载完之前，使用一张loading占位图片，等图片真正加载完再给图片设置src属性。

```js
class MyImage {
    constructor() {
        this.img = new Image()
        document.body.appendChild(this.img)
    }
    setSrc(src) {
        this.img.src = src
    }
}

class ProxyImage {
    constructor() {
        this.proxyImage = new Image()
    }

    setSrc(src) {
        let myImageObj = new MyImage()
        myImageObj.img.src = 'file://xxx.png'  //为本地图片url
        this.proxyImage.src = src
        this.proxyImage.onload = function() {
            myImageObj.img.src = src
        }
    }
}

var proxyImage = new ProxyImage()
proxyImage.setSrc('http://xxx.png') //服务器资源url
```

本例中，本体类中有自己的setSrc方法，如果有一天网络速度已经不需要预加载了，我们可以直接使用本体对象的setSrc方法,，并且不需要改动本体类的代码，而且可以删除代理类。

```js
// 依旧可以满足需求
var myImage = new MyImage()
myImage.setSrc('http://qiniu.sunzhaoye.com/CORS.png')
```

#### 小结

1. 代理模式符合开放封闭原则
2. 本体对象和代理对象拥有相同的方法，在用户看来并不知道请求的本体对象还是代理对象。

## 行为型模式

### 策略模式

> 定义一系列的算法，把它们一个个封装起来，并使它们可以替换

```js
var fnA = function(val) {
    return val * 1
}

var fnB = function(val) {
    return val * 2
}

var fnC = function (val) {
    return val * 3
}


var calculate = function(fn, val) {
    return fn(val)
}

console.log(calculate(fnA, 100))// 100
console.log(calculate(fnB, 100))// 200
console.log(calculate(fnC, 100))// 300
```

### 迭代器模式

![迭代器模式](https://z3.ax1x.com/2021/07/13/Wk6ODs.png)
直接上代码, 实现一个简单的迭代器

```js
class Creater {
    constructor(list) {
        this.list = list
    }

    // 创建一个迭代器，也叫遍历器
    createIterator() {
        return new Iterator(this)
    }
}

class Iterator {
    constructor(creater) {
        this.list = creater.list
        this.index = 0
    }

    // 判断是否遍历完数据
    isDone() {
        if (this.index >= this.list.length) {
            return true
        }
        return false
    }

    next() {
        return this.list[this.index++]
    }

}

var arr = [1, 2, 3, 4]

var creater = new Creater(arr)
var iterator = creater.createIterator()
console.log(iterator.list)  // [1, 2, 3, 4]
while (!iterator.isDone()) {
    console.log(iterator.next())
    // 1
    // 2
    // 3
    // 4
}
```

ES6中的迭代器:

- JavaScript中的有序数据集合包括：
  - Array
  - Map
  - Set
  - String
  - typeArray
  - arguments
  - NodeList

\* 注意: Object不是有序数据集合

以上有序数据集合都部署了Symbol.iterator属性，属性值为一个函数，执行这个函数，返回一个迭代器，迭代器部署了next方法，调用迭代器的next方法可以按顺序访问子元素

以数组为例测试一下，在浏览器控制台中打印测试如下：
![ES6中的迭代器](https://z3.ax1x.com/2021/07/13/WkcNPf.png)

```js
var arr = [1, 2, 3, 4]

var iterator = arr[Symbol.iterator]()

console.log(iterator.next())  // {value: 1, done: false}
console.log(iterator.next())  // {value: 2, done: false}
console.log(iterator.next())  // {value: 3, done: false}
console.log(iterator.next())  // {value: 4, done: false}
console.log(iterator.next())  // {value: undefined, done: true}
```

#### 小结

JavaScript中的有序数据集合有Array，Map，Set，String，typeArray，arguments，NodeList，不包括Object

任何部署了`[Symbol.iterator]`接口的数据都可以使用for...of循环遍历

迭代器模式使目标对象和迭代器对象分离，符合开放封闭原则

### 观察者模式(订阅-发布模式)

![观察者模式](https://z3.ax1x.com/2021/07/13/WkcsZn.png)
先实现一个简单的发布-订阅模式，代码如下:

```js
class Event {
    constructor() {
        this.eventTypeObj = {}
    }
    on(eventType, fn) {
        if (!this.eventTypeObj[eventType]) {
            // 按照不同的订阅事件类型，存储不同的订阅回调
            this.eventTypeObj[eventType] = []
        }
        this.eventTypeObj[eventType].push(fn)
    }
    emit() {
        // 可以理解为arguments借用shift方法
        var eventType = Array.prototype.shift.call(arguments)
        var eventList = this.eventTypeObj[eventType]
        for (var i = 0; i < eventList.length; i++) {
            eventList[i].apply(eventList[i], arguments)
        }
    }
    remove(eventType, fn) {
        // 如果使用remove方法，fn为函数名称，不能是匿名函数
        var eventTypeList = this.eventTypeObj[eventType]
        if (!eventTypeList) {
            // 如果没有被人订阅改事件，直接返回
            return false
        }
        if (!fn) {
            // 如果没有传入取消订阅的回调函数，则改订阅类型的事件全部取消
            eventTypeList && (eventTypeList.length = 0)
        } else {
            for (var i = 0; i < eventTypeList.length; i++) {
                if (eventTypeList[i] === fn) {
                    eventTypeList.splice(i, 1)
                    // 删除之后，i--保证下轮循环不会漏掉没有被遍历到的函数名
                    i--;
                }
            }
        }
    }
}
var handleFn = function(data) {
    console.log(data)
}
var event = new Event()
event.on('click', handleFn)
event.emit('click', '1')   // 1
event.remove('click', handleFn)
event.emit('click', '2')  // 不打印
```

以上代码可以满足先订阅后发布，但是如果先发布消息，后订阅就不满足了。这时候我们可以稍微修改一下即可满足先发布后订阅，在发布消息时，把事件缓存起来，等有订阅者时再执行。代码如下：

```js
class Event {
    constructor() {
        this.eventTypeObj = {}
        this.cacheObj = {}
    }
    on(eventType, fn) {
        if (!this.eventTypeObj[eventType]) {
            // 按照不同的订阅事件类型，存储不同的订阅回调
            this.eventTypeObj[eventType] = []
        }
        this.eventTypeObj[eventType].push(fn)

        // 如果是先发布，则在订阅者订阅后，则根据发布后缓存的事件类型和参数，执行订阅者的回调
        if (this.cacheObj[eventType]) {
            var cacheList = this.cacheObj[eventType]
            for (var i = 0; i < cacheList.length; i++) {
                cacheList[i]()
            }
        }
    }
    emit() {
        // 可以理解为arguments借用shift方法
        var eventType = Array.prototype.shift.call(arguments)
        var args = arguments
        var that = this

        function cache() {
            if (that.eventTypeObj[eventType]) {
                var eventList = that.eventTypeObj[eventType]
                for (var i = 0; i < eventList.length; i++) {
                    eventList[i].apply(eventList[i], args)
                }
            }
        }
        if (!this.cacheObj[eventType]) {
            this.cacheObj[eventType] = []
        }

        // 如果先订阅，则直接订阅后发布
        cache(args)

        // 如果先发布后订阅，则把发布的事件类型与参数保存起来，等到有订阅后执行订阅
        this.cacheObj[eventType].push(cache)
    }
}
```

#### 小结

1. 发布订阅模式可以使代码解耦，满足开放封闭原则
2. 当过多的使用发布订阅模式，如果订阅消息始终都没有触发，则订阅者一直保存在内存中。

### 命令模式

> ![命令模式](https://z3.ax1x.com/2021/07/13/WkglWT.png)
> [--百度百科](https://baike.baidu.com/item/%E5%91%BD%E4%BB%A4%E6%A8%A1%E5%BC%8F/7277118)

在命令的发布者和接收者之间，定义一个命令对象，命令对象暴露出一个统一的接口给命令的发布者，而命令的发布者不用去管接收者是如何执行命令的，做到命令发布者和接收者的解耦。

举一个如果页面中有3个按钮，给不同按钮添加不同功能的例子，代码如下：

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>cmd-demo</title>
</head>
<body>
    <div>
        <button id="btn1">按钮1</button>
        <button id="btn2">按钮2</button>
        <button id="btn3">按钮3</button>
    </div>
    <script>
        var btn1 = document.getElementById('btn1')
        var btn2 = document.getElementById('btn2')
        var btn3 = document.getElementById('btn3')

        // 定义一个命令发布者(执行者)的类
        class Executor {
            setCommand(btn, command) {
                btn.onclick = function() {
                    command.execute()
                }
            }
        }

        // 定义一个命令接收者
        class Menu {
            refresh() {
                console.log('刷新菜单')
            }

            addSubMenu() {
                console.log('增加子菜单')
            }
        }

        // 定义一个刷新菜单的命令对象的类
        class RefreshMenu {
            constructor(receiver) {
                // 命令对象与接收者关联
                this.receiver = receiver
            }

            // 暴露出统一的接口给命令发布者Executor
            execute() {
                this.receiver.refresh()
            }
        }

        // 定义一个增加子菜单的命令对象的类
        class AddSubMenu {
            constructor(receiver) {
                // 命令对象与接收者关联
                this.receiver = receiver
            }
            // 暴露出统一的接口给命令发布者Executor
            execute() {
                this.receiver.addSubMenu()
            }
        }

        var menu = new Menu()
        var executor = new Executor()

        var refreshMenu = new RefreshMenu(menu)
        // 给按钮1添加刷新功能
        executor.setCommand(btn1, refreshMenu)

        var addSubMenu = new AddSubMenu(menu)
        // 给按钮2添加增加子菜单功能
        executor.setCommand(btn2, addSubMenu)

        // 如果想给按钮3增加删除菜单的功能，就继续增加删除菜单的命令对象和接收者的具体删除方法，而不必修改命令对象
    </script>
</body>
</html>
```

### 状态模式

> ![状态模式](https://z3.ax1x.com/2021/07/13/WkgI1S.png)

举一个关于开关控制电灯的例子，电灯只有一个开关，第一次按下打开弱光，第二次按下打开强光，第三次按下关闭。

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>state-demo</title>
</head>

<body>
    <button id="btn">开关</button>
    <script>
        // 定义一个关闭状态的类
        class OffLightState {
            constructor(light) {
                this.light = light
            }
            // 每个类都需要这个方法，在不同状态下按都需要触发这个方法
            pressBtn() {
                this.light.setState(this.light.weekLightState)
                console.log('开启弱光')
            }
        }

        // 定义一个弱光状态的类
        class WeekLightState {
            constructor(light) {
                this.light = light
            }
            pressBtn() {
                this.light.setState(this.light.strongLightState)
                console.log('开启强光')
            }
        }

        // 定义一个强光状态的类
        class StrongLightState {
            constructor(light) {
                this.light = light
            }
            pressBtn() {
                this.light.setState(this.light.offLightState)
                console.log('关闭电灯')
            }
        }

        class Light {
            constructor() {
                this.offLightState = new OffLightState(this)
                this.weekLightState = new WeekLightState(this)
                this.strongLightState = new StrongLightState(this)
                this.currentState = null
            }
            setState(newState) {
                this.currentState = newState
            }
            init() {
                this.currentState = this.offLightState
            }
        }

        let light = new Light()
        light.init()
        var btn = document.getElementById('btn')
        btn.onclick = function() {
            light.currentState.pressBtn()
        }
    </script>
</body>

</html>
```

如果这时候需要增加一个超强光，则只需增加一个超强光的类，并添加pressBtn方法，改变强光状态下，点击开关需要把状态更改为超强光，超强光状态下，点击开关把状态改为关闭即可，其他代码都不需要改动。

```js
class StrongLightState {
    constructor(light) {
        this.light = light
    }
    pressBtn() {
        this.light.setState(this.light.superLightState)
        console.log('开启超强光')
    }
}

class SuperLightState {
    constructor(light) {
        this.light = light
    }
    pressBtn() {
        this.light.setState(this.light.offLightState)
        console.log('关闭电灯')
    }
}

class Light {
    constructor() {
        this.offLightState = new OffLightState(this)
        this.weekLightState = new WeekLightState(this)
        this.strongLightState = new StrongLightState(this)
        this.superLightState = new SuperLightState(this)
        this.currentState = null
    }
    setState(newState) {
        this.currentState = newState
    }
    init() {
        this.currentState = this.offLightState
    }
}
```

#### 小结

1. 通过定义不同的状态类，根据状态的改变而改变对象的行为，二不必把大量的逻辑都写在被操作对象的类中，而且容易增加新的状态
2. 符合开放封闭原则

[转载](https://github.com/sunzhaoye/blog/issues/16)
