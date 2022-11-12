---
title: React jsx文件
date: 2021-03-29
tags:
 - react
 - jsx
---

:::tip jsx是什么
`jsx`就是 `js` `+` `xml(html)` ,虚拟`DOM` ,把真实`DOM`抽象成一个`Object`。
:::

## jsx 是怎样创建 DOM 的

```js
let dom = <div className='a' c='1'>jsx<span>是什么</span></div>
// 保存jsx的变量就是一个 React element
// 这一步内部是调用了React.createElement()方法,so 要在开头引入 React
```

`React`内部实际操作

```js
 let dom = /*#__PURE__*/React.createElement("div", {
     className: "a",
    c: "1"
});
```

`jsx`其实是一种语法糖(简化的代码一般称为语法糖)
通过`babel`自动调用`React.createElement()`;`createElement()`方法有三个参数：{`type`, `props`, `children`}

## index.js文件内容

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
```

引入的两个包：
`react` :主要负责逻辑层;
`react-dom`:主要负责渲染.

```js
import React from 'react';
// 通过 React 调用createElement()方法,用来创建虚拟DOM
import ReactDOM from 'react-dom';
// 通过 ReactDOM 来 render(渲染) jsx 元素
import App from './App.jsx';
import * as serviceWorker from './serviceWorker';
console.log(serviceWorker);
/*
上行代码的解释：（es6模块）
  * ：代表的是serviceWorker.js(一个对象), 这个文件中向外暴露所有的模块
  as ：重命名  别名
 这句话的意思是它将文件（serviceWorker.js）中的所有需要暴露出来的模块都挂载到自身上（此时的serviceWorker是一个对象），然后可以通过serviceWorker.unregister();用点的方式把方法都拿出来
*/
ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.unregister();
```

:::warning
`document.getElementById('root')` 等价于 `window.root`(`document.createTextNode` 创建文本节点)
`window.root` 拿到是`index.html`里面`id`为`root`的`div`元素
所以入口文件的最后也可以写成：

```jsx
ReactDOM.render(<App />, window.root);
```

:::

## jsx 基本语义(语法规则)

1. 只能有一个根元素
2. `<></>`表示`dom` ；`{}`表示`js`。
3. `class` => `className` `class` 关键字 如果使用`class` 会报错 ：`Warning: Invalid DOM property 'class'. Did you mean 'className'?`
4. `for` => `htmlFor`  `for` 关键字 同`class`
5. `style` => 要写成对象形式 ，写成双大括号 `{{}}` 第一个`{}`：表示`js` ，第二个`{}`：表示`style`属性对象
6. `innerHtml` => `dangerouslySetInnerHTML` 防止 `xss` 攻击：`xss` 通过输入框，输入js脚本攻击后台(千万不要相信用户输入的内容输入的内容转成字符串)

```jsx
let dom = (<div><label htmlFor="user"
    style={{ color: `red` }}>
    我是jsx</label><input id="user" placeholder="输入姓名"></input><p dangerouslySetInnerHTML={{ __html: inm }}></p><button onClick={}></button></div>)
// __html 是使用 dangerouslySetInnerHTML 的固定写法
```

7. 注释的使用

```jsx
{/*
多行注释
*/}
{
    // 单行注释
}
```

8. 事件
命名规则:用驼峰命名法

```jsx
let dom = <div><button onClick={() => alert('open')}>打开</button></div>
```

9. `{}`:里面必须有返回值(比如单独在{}里写js代码时)

```jsx
<div>{}</div>
```

10. `<React.Fragment>`

`<React.Fragment>`是文档碎片的意思，占位，但不显示 同级元素不想用标签包裹的时候，可以用`<></>`(简写方式)去包裹。
但是空标签不能给任何属性 `<React.Fragment></React.Fragment>`可以给`key`,并且也只能给`key`.

```jsx
<React.Fragment>
    <div></div>
</React.Fragment>
<!--上下两种方式是等价的 简写方式-->
<>
    <div></div>
</>
```

11. `boolean`、`Null` 以及 `Undefined` 渲染时将会忽略(但是是合法的)

- 在组件⾥⾯我们通过`{}`在`JSX`⾥⾯渲染变量

## 英文释义

- `Invalid` adj: 无效的

- `resolve` adj: 解决的

- `reject` adj: 未解决的
