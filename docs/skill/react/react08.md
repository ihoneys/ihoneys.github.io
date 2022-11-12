---
title: React class的生命周期
date: 2021-04-09
sidebar: 'auto'
tags:
 - react
 - class生命周期
---
[类组件的state生命周期图](https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/)

## 挂载

挂载（当组件实例被创建并插入DOM中）的时候

生命周期的调用顺序

1. 构造函数 `constructor()` 初始化状态 `static`;

`getDerivedStateFromProps(nextprops,prevstate)` 根据新的属性`(props)`生成新的状态`(state)` 参数是新的属性`props`和老的状态，此生命周期不常用.

2. `render()` 把虚拟`DOM`变成真实`DOM`并插入到`DOM`元素中;
3. `componentDidMount()`; `DOM`挂载完成.

- 组件的渲染顺序,父组件先渲染(父组件`render`之后) `=>` 子组件开始渲染 `=>` 子组件挂载完成之后(`componentDidMount`)父组件最后挂载完成(`componentDidMount`).

```js
import React from 'react'
import { render } from 'react-dom'
class App extends React.Component {
    constructor() {
        super()
        this.state = { num: 1 }
        console.log('1 初始化挂载');

    }
    add = () => {
        this.setState({ num: this.state.num + 1 })
    }
    UNSAFE_componentWillMount() { //即将废弃
        console.log('2.5 组件即将挂载--即将废弃');
    }
    componentDidMount() {
        console.log('3 挂载完成');
    }
    render() {
        console.log('2 render 渲染');
        return (
            <div>
                <Child num={this.state.num} />
                <button onClick={this.add}>点击父组件加一</button>
            </div>
        );
    }
}
class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            n: 1
        }
        console.log('1.1 子组件 初始化constructor');
    }
    //根据新的属性生成新的状态
    // 返回null 不更新任何状态
    static getDerivedStateFromProps(nextprops, prevstate) {
        //参数是新的props属性
        console.log('1.2 getDerivedStateFromProps');
        let { num } = nextprops;
        if (num === 2) {
            return {
                n: prevstate.n + 2
            }
        }
        return null

    }
    componentDidMount() {
        console.log('1.4 子组件 挂载完成');
    }
    render() {
        console.log('1.3 子组件 渲染');
        return <div>
            我是子组件
            {this.state.n}
            <br />
            父组件传过来的props是{this.props.num}
        </div>

    }
}
render(<App />, document.getElementById('root'))
```

## 更新

组件的 `props` 或 `state` 发生变化时会触发更新。

组件更新的生命周期调用顺序如下：

1. `static getDerivedStateFromProps()`

2. `shouldComponentUpdate()`
    - 如果 `shouldComponentUpdate`返回的是`false` 则不在继续
    - 返回`true` 会继续第3步
3. `render()`
4. `getSnapshotBeforeUpdate()` 获取`DOM`更新前的快照
5. `componentDidUpdate()` 会在更新后会被立即调用。首次渲染不会执行此方法。

```js
import React from 'react'
import { render } from 'react-dom'
class App extends React.Component {
    constructor() {
        super()
        this.state = { num: 1 }
        console.log('1 初始化挂载');
    }
    add = () => {
        this.setState({ num: this.state.num + 1 })
    }
    UNSAFE_componentWillMount() { //即将废弃
        console.log('2.5 组件即将挂载--即将废弃');
    }
    shouldComponentUpdate(nextProps, nextState) {
        // 询问组件是否需要更新，如果返回true 就返回更新，返回false不更新
        //参数 是新的属性和新的状态
        console.log(nextProps);
        console.log(nextState);
        console.log('更新1.0 询问组件是否需要更新 shouldComponentUpdate');
        return true
        // return false
    }
    componentDidMount() {
        console.log('3 挂载完成');
    }
    componentDidUpdate() {
        console.log('更新2.0 更新完成');
    }

    render() {
        console.log('2 render 渲染');
        return (
            <div>
                {/* <Child num={this.state.num} /> */}
                {this.state.num}
                <button onClick={this.add}>点击父组件加一</button>
            </div>
        );
    }
}
class Child extends React.Component {
    constructor() {
        super();
        this.state = {
            n: 1
        }
        console.log('1.1 子组件 初始化constructor');
    }
    //根据新的属性生成新的状态
    // 返回null 不更新任何状态
    static getDerivedStateFromProps(nextprops, prevstate) {
        //参数是新的props属性
        console.log('1.2 getDerivedStateFromProps');
        let { num } = nextprops;
        if (num === 2) {
            return {
                n: prevstate.n + 2
            }
        }
        return null
    }
    componentDidMount() {
        console.log('1.4 子组件 挂载完成');
    }
    render() {
        console.log('1.3 子组件 渲染');
        return <div>
            我是子组件
            {this.state.n}
            <br />
            父组件传过来的props是{this.props.num}
        </div>

    }
}
render(<App />, document.getElementById('root'))
```

- `constructor` 👉 `getDerivedStateFromProps`(静态方法)👉  `shouldComponentUpdate`(询问是否需要更新) 👉 不需要(中断)
- `constructor` 👉 `getDerivedStateFromProps`(静态方法)👉  `shouldComponentUpdate`(询问是否需要更新) 👉 需要 👉  `render`(渲染) 👉 `getSnapshotBeforeUpdate`(获取到更新的dom) 👉 `componentDidUpdate`
- `componentDidUpdate()` 会在更新后会被立即调用。但首次挂载渲染不会执行此方法。

## 卸载

当组件从 `DOM` 中移除时会调用,方法如下：

- `componentWillUnmount()`
`componentWillUnmount()` 会在组件卸载及销毁之前直接调用。在此方法中执行必要的清理操作,例如，清除 `timer`，取消网络请求或清除本地存储状态。

```jsx
import React from 'react'
import { render } from 'react-dom'

class App extends React.Component {
    constructor() {
        super()
        this.state = { num: 1 }
    }
    add = () => {
        this.setState({ num: this.state.num - 1 })
    }
    render() {
        return <div >
            {this.state.num && <Children />}
            {this.state.num}
            <button onClick={this.add}>点击</button>
        </div>
    }
}
class Children extends React.Component {
    componentWillUnmount() {
        console.log('组件即将卸载');
    }
    render() {
        return <div >
            我是子组件
        </div>
    }
}
render(<App />, document.getElementById('root'))
```

- 在生命周期的`render`阶段（`Render`及之前的生命周期）
纯净且不包含副作用。可能会被 `React` 暂停，中止或重新启动
  - `construtor render` 初始化状态和接收`props`参数

- `Pre-commit` 阶段
可以读取 DOM。
  - `getSnapshotBeforeUpdate`

- `commit` 阶段
可以使用 DOM，运行副作用，安排更新。(重点)

  - `componentDidMount`
  - `componentDidUpdate`
  - `componentWillUnmount`
