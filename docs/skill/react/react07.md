---
title: React 受控组件与非受控组件
date: 2021-04-09
sidebar: 'auto'
tags:
 - react
 - 受控组件
 - 非受控组件
---

## 受控组件 非受控组件

- 受控组件：指`DOM` 元素的值受`react`的状态控制
- 非受控组件：指`DOM` 元素的值不受`react`的状态控制

### 受控组件

改变受控组件`input`的值 有两种方式，

1. 使用 `defaultValue`

```jsx
<input defaultValue={this.state.text} />
```

2. 使用 `onChange`事件

```jsx
 <input value={this.state.text} onChange={this.handler} />
```

而解决报错有以下三种方式：

1. 使用 `defaultValue`

```jsx
<input defaultValue={this.state.text} />
```

2. 使用 `readOnly` 只读 （只解决报错，不实现功能）

```jsx
<input value={this.state.text} readOnly />
```

3. 使用 `onChange`事件

```jsx
<input value={this.state.text} onChange={this.handler} />
```

```jsx
import React from 'react';
import { render } from 'react-dom';
/*
 Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`.
  */
class TextInput extends React.Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            text: "1"
        }
    }
    handler = (event) => {
        this.setState({ text: event.target.value })
    }
    render() {
        return <>
            <input value={this.state.text} onChange={this.handler} />
        </>
    }
}
render(<TextInput></TextInput>, window.root);
```

### 非受控组件

ref老版方式
`ref` 老版方式一：

```jsx
// refs已弃用
import React from 'react';
import { render } from 'react-dom';
//非受控组件 ref 老版方式一：
class Sum extends React.Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            text: "1"
        }
    }
    add = () => {
        let a = this.refs.a.value
        let b = this.refs.b.value
        let sum = parseFloat(a) + parseFloat(b)
        this.refs.c.value = sum
        console.log(this.refs.a);
    }
    render() {
        return <>
            <input ref="a" />+ <input ref="b" />
            <button onClick={this.add}>等于</button>
            <input ref="c" />
        </>
    }
}

render(<Sum></Sum>, window.root);
```

`ref` 老版方式二：

```jsx
import React from 'react';
import { render } from 'react-dom';
//非受控组件 ref 老版方式二
class Sum extends React.Component {
    constructor(prpos) {
        super(prpos);
        this.state = {
            text: "1"
        }
    }
    add = () => {
        let a = this.a.value
        let b = this.b.value
        let sum = parseFloat(a) + parseFloat(b)
        this.c.value = sum
    }
    render() {
        return <>
            <input ref={a => this.a = a} /><input ref={b => this.b = b} />
            <button onClick={this.add}>等于</button>
            <input ref={c => this.c = c} />
        </>
    }
}

render(<Sum></Sum>, window.root);
```

- 非受控组件 `createRef` (新版方式)

`ref` 可以是`DOM`元素的引用也可以是组件的引用.

1. 引入

```jsx
import React, { createRef } from 'react'
```

2. 初始化

```jsx
constructor() {
    super()
    //初始化 ref createRef()
    this.refA = createRef()
    // 组件里面使用 refA '定义的ref'
}
```

3. 使用

`reactDOM` 元素中写： `ref={this.refA}`

```jsx
<input ref={this.refA} />+<input ref={this.refB} />
```

取值和赋值  属性会放在`current`上面

- 案例

```jsx
import React, { createRef } from 'react';
import { render } from 'react-dom';
//非受控组件 createRef
class Sum extends React.Component {
    constructor() {
        super()
        //初始化ref createRef
        this.refA = createRef()
        this.refB = createRef()
        this.refC = createRef()
    }
    add = () => {
        console.log(this.refA);
        let A = this.refA.current.value
        let B = this.refB.current.value
        this.refC.current.value = parseFloat(A) + parseFloat(B)
    }
    render() {
        return <>
            <input ref={this.refA} />+<input ref={this.refB} />
            <button onClick={this.add}>=</button>
            <input ref={this.refC} />
        </>
    }
}
render(<Sum a="4"></Sum>, window.root);
```

- 类组件 和 props 配合使用

:::details 案例 子组件修改父组件数据

```jsx
import React, { createRef } from 'react';
import { render } from 'react-dom';

class Parent extends React.Component {
    constructor() {
        super()
        this.inputRef1 = createRef()
        this.inputRef2 = createRef()
        // 父组件有张银行卡，两个儿子都可以存钱改变余额
        this.state = { money: 10000 }
    }
    getFocus1 = () => {
        this.inputRef1.current.inRef1.current.focus();
    }
    getFocus2 = () => {
        this.inputRef2.current.inRef2.current.focus();
    }
    // 父亲提供 一个改变自己余额的方法
    changeMoney = (x) => {
        this.setState({ money: this.state.money + x })
    }
    render() {
        return <div>
            父组件余额{this.state.money}
            <TextInput changeMoney={this.changeMoney} ref={this.inputRef1} />
            <button onClick={this.getFocus1}>焦点一</button>
            <TextInput2 changeMoney={this.changeMoney} ref={this.inputRef2} />
            <button onClick={this.getFocus2}>焦点二</button>
        </div>
    }
}
class TextInput extends React.Component {
    constructor() {
        super()
        this.inRef1 = createRef()
    }
    addMoney = () => {
        // 通过this.props，拿到父组件传过来的方法
        let SonMoney = parseFloat(this.inRef1.current.value)
        this.props.changeMoney(SonMoney)
    }
    render() {
        return <>
            我是input
            <input ref={this.inRef1} />
            <button onClick={this.addMoney}>大儿子存钱</button>
        </>
    }
}
class TextInput2 extends React.Component {
    constructor() {
        super()
        this.inRef2 = createRef()
    }
    addMoney2 = () => {
        // 通过this.props，拿到父组件传过来的方法
        let SonMoney = parseFloat(this.inRef2.current.value)
        this.props.changeMoney(SonMoney)
    }
    render() {
        return <>
            我是第二个input
            <input ref={this.inRef2} />
            <button onClick={this.addMoney2}>小儿子存钱</button>
        </>
    }
}
render(<Parent />, window.root);
```

:::

- useRef （函数组件）
useref性能更好，因为useref是复用的老的对象。createRef 每次都会创建一个新的的对象。

```jsx
function Parent() {
    function getFoucs() {
        childRef.current.focus()
    }
    let childRef = useRef()
    return <>
        <ForwardChild ref={childRef} />
        <button onClick={getFoucs}>点击获取焦点</button>
    </>
}
```

- 函数组件作为子组件，需要使用ref的时候需要外面包裹`forwardRef(Child)`

例1

```jsx
import React, { forwardRef, useRef } from 'react';
import { render } from 'react-dom';
function Parent() {
    function getFoucs() {
        childRef.current.focus()
    }
    let childRef = useRef()
    return <>
        <ForwardChild ref={childRef} />
        <button onClick={getFoucs}>点击获取焦点</button>
    </>
}
// forwardChild 的ref 会通过forwardRef传递给child
function Child(props, Pref) {
    // let refA = React.createRef();
    return <>
        <input ref={Pref} />
    </>;
}
let ForwardChild = forwardRef(Child)
render(<Parent />, window.root);
```

例2

```jsx
import React, { forwardRef } from 'react';
import { render } from 'react-dom';
export default class Parent extends React.Component {
    constructor() {
        super();
        this.childref = React.createRef()
    }
    getFocus = () => {
        this.childref.current.focus();
        console.log(this.childref);
    }
    render() {
        return (<div>
            <ForwardChild ref={this.childref} />
            <button onClick={this.getFocus}>点击获取焦点</button>
        </div>)
    }
}
// forwardChild 的ref 会通过forwardRef传递给child
function Child(props, Pref) {
    // let refA = React.createRef();
    return <>
        <input ref={Pref} />
    </>;
}
let ForwardChild = forwardRef(Child)
render(<Parent />, window.root);
```

## 英文释义

- `ref ：reference` adj: 引用
- `createRef`类组件用 `useRef`函数组件用？？
