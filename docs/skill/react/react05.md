---
title: React 组件传值
date: 2021-04-09
sidebar: 'auto'
tags:
 - react
 - 组件传值props
publish: true
---

## 父传子(`props`)

- 函数组件和`class`组件都有`props`.

:::warning
组件传值 `props` 只能从上到下传递 继承的关系（父传子）

`props` 可以传值也可以传方法
:::

```jsx
//⽗组件传⼊
<PropsDemo title="Tim⽼师教react"></PropsDemo>

//⼦组件使⽤
//class 组件使⽤ this.
<h1>{this.props.title}</h1>
//函数型组件使⽤
function xxx(props) {
    return <h1>{props.title}</h1>
}
//解构赋值写法
function xxx({ title }) {
    return <h1>{title}</h1>
}
```

- 类组件

```jsx
// 类组件
import React from 'react';
import { render } from 'react-dom';

class Student extends React.Component {
    constructor(props) {
        super(props); //this.props=props
    }
    render() {
        return (
            <>
                姓名 - {this.props.name},
                年龄 - {this.props.age}岁,
                性别 - {this.props.sex},
            </>
        )
    }
}
let li = {
    name: '李雷',
    age: '8',
    sex: '男'
}
class Students extends React.Component {
    render() {
        return (
            <>
                <Student {...li} ></Student>
                <Student name='张广聚' age='9' sex='男'></Student>
                <Student></Student>
            </>
            // {...li} 用展开运算符传递 --常用在传递到属性值多的时候
        )
    }
}
render(<><Students></Students></>, window.root) //渲染函数组件和类组件
```

- 函数组件

```jsx
// 函数组件
import React from 'react';
import { render } from 'react-dom';
// 方式一
function Student1(props) { //函数组件里用参数传值
    return <>
        <div>我是函数组件
                姓名 - {props.name} ,
                年龄 - {props.age}岁,
                性别 - {props.sex},
        </div>
    </>
}
// 方式二
function Student2({ name, age, sex }) { //函数组件里用参数传值(将参数解构出来)
    return <>
        <div>我是函数组件
                姓名 - {name} ,
                年龄 - {age}岁,
                性别 - {sex},
        </div>
    </>
}
render(<><Student1></Student1><Student2 name='王子豪' age={3} sex='未知' ></Student2></>, window.root) //渲染函数组件或类组件
```

## 子传父

```js
子组件向父组件通信：: props+回调的方式。

// 子组件: Child
const Child = props =>{
  const cb = msg =>{
      return ()=>{
          props.callback(msg)
      }
  }
  return (
      <button onClick={cb("京程一灯欢迎你!")}>京程一灯欢迎你</button>
  )
}

// 父组件 Parent
class Parent extends Component {
    callback(msg){
        console.log(msg)
    }
    render(){
        return <Child callback={this.callback.bind(this)}></Child>
    }
}
```
