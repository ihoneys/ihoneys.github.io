---
title: React 条件渲染/循环渲染
date: 2021-04-09
sidebar: 'auto'
tags:
 - react
 - React条件渲染
 - React循环渲染
---
## 条件渲染 和 循环渲染

- 条件渲染

通过判断来决定事件渲染(用三元表达式或`if-else`)

```jsx
import React from 'react';
import { render } from 'react-dom';
// 三元 &&
const A = 1
function My() {
    // return A ? (<div>这是div</div>) : '否'
    return A && <div>这是div</div>
}
// if else
function My1() {
    if (A) {
        return <div>这是div</div>
    }
}
render(<><My1></My1></>, window.root) //渲染函数组件和类组件
```

三⽬表达式写法

```jsx
{this.state.showTitle?<h1>{this.props.title} </h1>:null}

```

```jsx
let result=this.state.showTitle?<h1> {this.props.title}</h1>:null {result}
//直接使⽤if else写
let result if(this.state.showTitle){
result=( <h1>this.props.title</h1> ) }else{ result=null }
```

- 循环渲染

```jsx
class App extends React.Component{
constructor(props){
  super(props)
  this.state = { goods: [ { title: 'html+css基础⼊⻔门', price: 19.8}, { title: 'js零基础阶级', price: 29.8}, { title: 'vue基础⼊⻔门', price: 19.8}, { title: 'vue电商单⻚页⾯项⽬实战', price:39.8},{ title: 'react零基础进阶单⻚页⾯项⽬实战', price: 59.8}, ] } }
 render(){
   return <div>
         <ul> {this.state.goods.map(good=>{
        return <li key={good.title}><span>{good.title} </span> <span>{good.price}元 </span> </li>})}
        </ul>
      </div>
  }
}
```

案例:

```jsx
import React from 'react';
import { render } from 'react-dom';

let carlist = [
    { name: '苹果', price: '300', },
    { name: '橘子', price: '300', },
    { name: '芒果', price: '300', },
    { name: '月饼', price: '300', },
    { name: '西瓜', price: '300', },
]
// 一般不要使用索引作为 key ，一般用 id 作为 key，为了 dom-diff
function Car() {
    return carlist.map((item, index) => {
        return <div key={index}>
            <p>名称:{item.name}</p>
            <p>价格:{item.price}</p>
        </div>
    })
}
render(<><Car></Car></>, window.root) //渲染函数组件或类组件
```
