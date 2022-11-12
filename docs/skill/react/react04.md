---
title: React 类组件 State
date: 2021-04-03
tags:
 - react
 - Class-State
---

## 类组件里的 State

:::tip

- 如果数据需要修改，并且需要⻚页⾯同时响应改变，那就需要把变量 放在`state`⾥⾯，同时使⽤`setState`修改 初始化状态`state`;
- 组件自己的数据 类组件里的`State`状态(只有`class`组件有`state`，函数组件需要用`useSata`这个`Hooks`来调用).
:::

- 初始化状态

```jsx
this.state = { count: 0 };
```

- 更新状态
更新状态使⽤setState,不能直接this.state.count=xxx

```jsx
this.setState({ count: this.state.count + 1 });
```

```jsx
// 定义类组件
class my extends Component{
constructor(){
    // constructor构造函数不是必须写的，但是写了constructor函数，构造函数里必须用super，新版reactreact不用传props，框架内部已经传好了，直接使用就行。
super()
this.state={feeling:'不好'} // 定义初始化状态
}
// render负责渲染 想渲染什么通过render里面的 return 写jsx
render(){
    return <>
    <div>我今天心情{{this.state.feeling}}</div>
    </>
}
}
render(<my/>,document.getElementById('rood'))
// <my></my> 可以单标签也可以双标签，
// 如果同时渲染两个组件，也要用一个标签包裹起来<><my/><you/></>
```

## 组件里使用事件

### 第一种写法

- （bind是最老的写法）

```jsx
class My extends Component {
    constructor() {

        super()
        this.state = { feeling: '不好' }
    }
    handleClick() { //定义的事件
        alert(1)
    }
    render() {
        return <>
            <div>我今天心情{this.state.feeling}</div>
            <button onClick={this.handleClick.bind(this)}>点击改变心情</button>
        // 用bind防止丢失this
        </>
    }
}
render(<My></My>, document.getElementById('rood'))
```

### 第二种写法（通过es7解决this问题）

- 最方便，最优雅的写法（推荐使用）

```jsx
class my extends Component {
    constructor() {
        super()
        this.state = { feeling: '不好' }
    }
    handleClick = () => { //定义的事件(箭头函数将this指向上一级)
        alert(1)
    }
    render() {
        return <>
            <div>我今天心情{this.state.feeling}</div>
            <button onClick={this.handleClick}>点击改变心情</button>
        </>
    }
}
render(<my></my>, document.getElementById('rood'))
```

或者

```js
import React from 'react';
import { render } from 'react-dom';
class Counter extends React.Component {
    constructor() {
        super()
        this.state = { number: 1 }
    }
    add() {
        // 事件
        alert(1)
    }
    render() {
        return <>
            <div>{this.state.number}</div>
            <button onClick={() => this.add()}>点击加1</button>
        </>

    }
}
render(<Counter></Counter>, window.root)
```

### 第三种写法(事件定义在构造函数里)

- 性能最好的写法

```jsx
class My extends Component {
    constructor() {
        super()
        this.state = { feeling: '不好' }
        this.handleClick = function () { //定义的事件(在构造函数里赋值一次，构造函数this指向当前实例不会丢失)
            alert(1)
        }
    }

    render() {
        return <>
            <div>我今天心情{this.state.feeling}</div>
            <button onClick={this.handleClick}>点击改变心情</button>
        </>
    }
}
render(<My></My>, document.getElementById('rood'))
```

## 修改state

- 改变`state`状态（`setState({})`方法）

```jsx
class Sul1 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { time: new Date().toLocaleString() }
    }
    //组件已经挂载
    componentDidMount() {
        setInterval(() => {
            this.setState({
                time: new Date().toLocaleString()
            })
        }, 1000);
    }
    render() {
        return <div>
            类组件显示 当前时间是{this.state.time}
        </div>
    }
}
```

例：

```jsx
class My extends Component {
    constructor() {
        super()
        this.state = { feeling: '不好' }
    }
    handleClick = () => { //箭头函数的方法
        // react 类组件的 state 状态修改必须通过this.setState({})方法
        this.setState({ feeling: '非常好' })
    }
    render() {
        return <>
            <div>我今天心情{this.state.feeling}</div>
            <button onClick={this.handleClick}>做了XX事心情变{this.state.feeling}了</button>
        </>
    }
}
render(<My></My>, document.getElementById('rood'))
```

### State 异步语法

当执行以下代码时，并不能从`1`增加到`3`也就是两个函数，只执行了一个。

```jsx
import React from 'react';
import { render } from 'react-dom';
class Counter extends React.Component {
    constructor() {
        super()
        this.state = { number: 1 }
    }
    add() {
        // 事件
        // this.setState是异步的，
        this.setState({ number: this.state.number + 1 })
        this.setState({ number: this.state.number + 1 })
        // this.forceUpdate()   //不管数据有没有改变，都强制更新
        console.log(this.state);
    }
    render() {
        return <>
            <div>{this.state.number}</div>
            <button onClick={() => this.add()}>点击加1</button>
        </>
    }
}
render(<Counter></Counter>, window.root)
```

用上面的方法，因为`setState()`方法时异步执行的，so 当第二个`setState()`执行时，原值还是`1`，并没有增加到`2`。所以增加的值是2.
但是通过`prevState`参数，加`1`后，就可以从`1`加到`3` 两个方法都执行了，所以是加到了`3`.

`setState`是异步的，底层设计同⼀个⽣命周期会批量操作更新 `state`. `setState`第⼆个参数是⼀个可选参数，传⼊⼀个回调函数可以获取到最新的`state`,当修改的`state`依赖上⼀次修改的`state`的值时，可使⽤以下这种⽅法修改.

```jsx
this.setState((prevState, prevProps)=>({

//prevState：上⼀次修改的状态state //prevProps：上⼀次修改的属性props count: prevState.count + 1

}), () => {

//这⾥可以获取到最新的state console.log(this.state.count);

});
```

```jsx
import React from 'react';
import { render } from 'react-dom';
class Counter extends React.Component {
    constructor() {
        super()
        this.state = { number: 1 }
    }
    add() {
        // 事件
        this.setState((prevState) => ({
            number: prevState.number + 1
        }), () => {
            // 第二个回调函数能拿到state最新的值
            console.log(this.state);
        })
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
render(<Counter></Counter>, window.root)
```

- `forceUpdate()`:强制更新状态(如果没有特殊情况，不建议使用)

```jsx
this.state.number +=1
this.forceUpdate() //不管数据有没有改变 都进行强制更新
console.log(this.state)
```
