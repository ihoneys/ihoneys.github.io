---
title: React  class、函数组件
date: 2021-04-09
tags:
 - react
 - class组件
 - 函数组件
---
## 组件

类组件有react全部的特性，比如this，state，生命周期等
函数组件没有this，没有生命周期，但是执行快，不占内存，用于封装ui组件

## 类的概念

- 类：es6 -- class
- class的语法、使用:
声明一个类：`class`(关键字) + 类名 + 花括号

```js
// class
class App {

}
```

- 使用：`new` `ClassName()`

- 类是什么？

答：模板，模块，模型，它本身不具有任何的功能，只是当我们实例化后，传入不同的参数，来进行一系列的操作 (就像模具)。

- `class`类的概念，在前端里是最近出现的，属于 `es6` 语法，所以需要转码，实际上，类的概念来自于后端，
- 前端里的类实际上不太标准，严格上来说：继承，是子类继承父类。但是前端里的类，父类也可以获取到子类的属性和方法，这是和标准的类概念的区别。基于 `prototype` 原型对象的查找就是一个链条式查找。

## react 里 class 组件的使用

`class` 在`es6`里对于`class`类名是有规范要求的，首先字母必须大写（`react`中自定义组件首先字母也要大写）.

### class组件和函数组件的区别

 1. 在`react`里的`class`组件中，`DOM` 片段必须放在一个`render`的函数中

以下是`class`组件(`DOM`片段在`render`函数内部)

```js
// class组件
class App {
    render() {
        return (
            <div>
                我是一个class组件
            </div>
        )
    }
}
```

以下是函数组件（`DOM`片段直接写在`return()`内）

```js
// 函数组件
function Dome() {
    return (
        <div>
            我是函数组件
        </div>
    )
}
```

## class组件

- `react` 里类不能直接用，需要继承`extends`

- 格式: `class` + 类名 + `extends` + `基类` + `{}`

- 继承的关键字 【前面是组件名】`extends`【继承=>】 `React.Component` 【基础的类/基类】

```jsx
class Counter extends React.Component {
    constructor() {
        super()
    }
    render() {
        return <>
            <div></div>
        </>
    }
}
// 以上代码的意思就是：Counter类 继承自基类 React.Component
```

- `class`组件里包含了所有的`react`特性：

函数组件中只有一个`props`属性，而在`class` 组件里有生命周期、捕获异常、容错边界、优化渲染等

```js
// 函数组件的属性
function Son(props) {
    return (
        <div>
            我是函数组件
        </div>
    )
}
```

:::warning 注：
类组件的`props`属性和函数组件里的`props`属性一模一样，就是在调用的时候`class`里`props`需要用`this`点出来
:::

- 实例：

```js
// Son.jsx内容
import React from 'react'
export default class Son extends React.Component {
    // export default 的意思是默认导出 Son 组件
    render() {
        return (
            <div className={this.props.myclass}>
                <h2> 我是子组件</h2>
                {this.props.name}
            </div>
        )
    }
}
// index.jsx内容
import React from 'react'
import Son from './Son'
class App extends React.Component {
    render() {
        return (
            <div>
                我是一个class组件中
                <Son name="123" myclass='son-box' />
            </div>
        )
    }
}
export default App;

```

`class`里面所有的属性和方法都要用`this.`出来

```jsx
class Counter extends React.Component {
    constructor() {
        super()
        // this.
        this.state = { number: 1 }
    }
    add() {
        // 事件
        this.setState((prevState) => ({
            number: prevState.number + 1
        }))
        // prevState表示的是上一次的状态
    }
    render() {
        return <>
            <div>{this.state.number}</div>
            <button onClick={() => this.add()}>点击加1</button>
        </>
    }
}
```

### state 状态的基础理解

`state` 只有类组件有（函数组件用`Hooks`->`useState`），以下是`state`状态的介绍:

- `state`和`porps`的区别

  - `state`状态：是组件自身的数据存储，它用来控制组件自己的变化

  - `props`属性：是父级传过来的数据，组件自身是不能操作修改 props 的

- `state`必须是一个对象，`react`是单项数据流，并且数据是单向监听，修改的时候我们要用`react`自带的`setState`，`setState`需要传入的就是一个对象

### state 使用时，有以下两种方式

1. 直接写在类组件里(官方不建议这样用)
可以将`state`直接写在类组件的`Component`函数中

```js
// 直接写在类组件里(
export default class App extends Component {
    constructor() {
        super()
    // 这种方式不用constructor构造函数
      }
    // 直接写在类组件里(官方不建议这样写)
    state = {
            name: "上官",
            age: '20'
        };
    // 渲染函数
    render() {
        return (
            <div>
                <h1>
                    开始使用state
                </h1>
                <p>{this.state.name + this.state.age}</p>
            </div>
        )
    }
}
```

2. 状态初始在 `constructor` 里

这种情况下，构造函数里必须先写 `super()`；`class`类里的子组件继承了父类后，必须要调用`super()`超级函数，来初始化一下父类的构造函数，并且得到子类自己的指针.

```js
// react中的state状态案例
import React, { Component } from 'react'
export default class App extends Component {
    // 初始状态
    constructor() {
        super()
        // super()方法必须在构造函数的顶端
        this.state = {
            // 初始化状态
            name: "上官",
            age: '20'
        };
    }
    // 渲染函数
    render() {
        return (
            <div>
                <h1>
                    开始使用state
                </h1>
                <p>{this.state.name + this.state.age}</p>
            </div>
        )
    }
}
```

### 修改类组件的状态值

- `setState()`

语法:`this.setState({ name: newText })`

- 实例代码

```js
// 修改状态的案例
import React, { Component } from 'react'
export default class App extends Component {
    // 构造函数
    constructor() {
        //必须这样写
        super()
        //状态的声明
        this.state = {
            count: 0,
            isShow: true
        }
    }
    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.add}>+</button>
                {
                    this.state.isShow && <div style={{ border: "1px solid red" }}>23</div>
                }
                <button onClick={this.show}>显示或隐藏</button>
            </div>
        )
    }
    // 累加的方法
    /*
    add() { }
 常规函数，打印的this时undefined ，有丢失this的现象，所以要用箭头函数， 箭头函数自身没有this，但会在最近的作用域里找this
    */
    add = () => {
        // 修改我们的状态
        this.setState({
        // 在react中state状态只能用setState去修改，不能直接手动修改
            count: this.state.count + 2
        })
    }
    // 控制元素显示隐藏
    show = () => {
        this.setState({
            isShow: !this.state.isShow
        })
        // 等价于
        /* if (this.state.isShow) {
            this.setState({
                isShow: false
            })
        } else {
            this.setState({
                isShow: true
            })
        } */
    }
}
```

注1：在我们绑定事件函数得时候，`this`指针丢失得问题，解决方法：声明这个函数得时候用箭头函数

注2：

```js
// 解构赋值的运用
import React, { Component } from 'react'
// 利用es6中数组的解构，对象的解构，来解构Component
```

注3：凡是直接写在`Component {}`中的方法，调用的时候都必须加`this`。

注4：修改数据时`hook`和`steState`的区别

- `hook` :修改状态时新旧值的替换
- `setState` :在修改值的时候，实际上是将新旧对象进行合并

## 函数组件

命名规则：

1. 函数名首字母必须大写：`function App(){}`，
2. 为什么必须大写?

因为小写的表示原生 `html` 的标签，但是原生标签里没有这个`<app />`标签，所以会报错。

- 官方规定：组件名字首写字母必须大写   `英文  _ 456`

### 组件的文件命名

- 给组件起名字的时候，一定不要和原生的标签名一样，不然会报错
- 如果写的是一个组件，文件的后缀用 `.jsx`
- 如果写的是一个 `js` 文件，文件后缀用 `.js`

### 函数组件的使用（共三大步骤）

- `App.js`文件介绍

```js
// 在组件中，react 核心库是用来解析生成虚拟DOM的，所以必须引入
import React from 'react'
// import 引入组件必须写在文件的最顶端（使用组件第二步共三步）
import Headers from './components/Header-box'
import Main from "./components/Main-box";
import Footer from './components/Footer'
/*
 1. 函数组件的基础
 function App() {
    // 函数里的返回值怎么写---用return
    return <div>你好</div>
}
 2. 基本布局
    <></> 这是一个占位符，它不会再页面上生成任何的标签，只起到一个包裹其他标签的作用
    在写组件的时候，如果有多个同级的标签，必须在同一个根标签里
 */
function App() {
    return (
        <>
            {/* 使用（使用组件第三步共三步） */}
            <Headers />
            <Main />
            <Footer />
        </>
    )
}
// 要用es6的模块
// import 是导入，被导入的组件一定要有对应的导出
export default App
```

- `Header`函数组件本体（另外的两个同下）

```jsx
//components/Header-box.jsx
// 编写组件内容 （使用组件第一步共三步）
// 1，写组件，第一步 引入react
import React from 'react'
import './Head-box.css' // 引入css文件要写全名 加上.css
// 2. 写函数组件，-- es6 箭头函数
// export default 告诉引入的组件，这个组件里默认导出的就是这个函数
export default () => {
    return (
        <header className="header-box">
            <nav>
                <ul>
                    <li>首页</li>
                    <li>新闻</li>
                    <li>关于</li>
                </ul>
            </nav>
        </header>
    )
}
```

### 函数组件--属性

- 属性：`props`
- 它是我们组件标签上写的所以键值对的集合是一个`{}`(`Object`),
- 作用是：父组件向子组件传递数据用

### 组合模式 -- 组件组合模式

1. 高复用模式，说白了，就是一个子组件被多次的调用，传入不同的参数显示不同的内容
2. 插槽，就是在自定义组件中插入其他的组件

:::tip 提示
没有特殊情况，推荐使用函数组件，性能好;

在组件⾥⾯我们通过`{}`在`JSX`⾥⾯渲染变量
:::
