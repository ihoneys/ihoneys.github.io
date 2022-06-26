---
title: React PS
date: 2021-10-26
 
categories:
 - 前端框架
tags:
 - react

---
DAY 1

## 路由组成部分

1. 路由容器 BrowserRouter [H5api]和HashRouter  【#】
   - basename 设置公共的根路径
2. 导航组件 Link Navlink
   - to 字符串为地址，对象可配置路由传参，其中pathname属性是地址
3. 路由配置组件
    - path 字符串是匹配的路径,对象可配置路由传参
    - component 加载组件的

## 路由传参方法

1. search 相当于vue的 query 地址栏以?key=value
2. hash 锚点方式
3. state 通过js传参 数据类型为对象
4. params 通过动态路由传递数据 属于match对象中的，前三个属于location

DAY 2

## Route三种渲染方式

chirlren
render
component

## 权重

## 路由配置方式

### 嵌套路由

一级路由里呈现二级的路由页面，二级的路由地址是基于一级的路由地址
`/home`是一级，`/home/01` 是嵌套的二级

### 动态路由

一个匹配组件可以匹配到多个地址，和嵌套路由相似，但是嵌套路由的地址是写死的，动态路由地址是被动态参数接收的
`/:id` 可以匹配 `/home` `/news`
并且动态路由也是路由传参的一种方式

### match 的 path

路由组件中被注入的对象，match里有path属性和url属性
path属性是路由匹配用的，url属性指当前地址栏的路径
如果需要再动态路由组件中，拼接导航用url 拼接Route 用 path

rem 插件npm i postcss-pxtorem
vh
vw
 react-router-config
 react-router-pro
 redux
 mobx简单

DAY3

## 路由容器

BrowserRouter 和 HashRouter
属性 porps ：basename 设置一个基础的根路径

## 导航组件

NavLink 是一个扩展的导航组件，有额外的激活样式，
NavLink和link都默认渲染成a标签的
NavLink有exact精确匹配
props ：activeClassName ,activeStyle isActive
默认激活样式类名，`.active`

## 匹配组件

Route ,用来匹配路由地址并渲染对应得页面

props:pach【可选，通配符】 component【必须的】【类和函数，匹配后渲染】> render【函数】> chirdren【函数 无论匹配与否都渲染】

DAY4

## window.fetch() == ajax

DAY 5

## 路由传参方式

## Hooks

让无状态组件拥有全部的react特性，【state，生命周期】
以前只有lei组件有state和生命周期等一系列react特性
hook 可以让函数组件做更多的事情

### useState

- 语法const [数据，修改数据的方法 ] = useState(value【布尔|str|obj|arr】)
注意：当使用修改数据的方法时，会用新的值【替换】成原数据，慎用，要做新旧值合并

### useEffect

生命周期:把挂载成功，更新完成，卸载函数全部融合了，
语法：

```js
useEffect(function(){}) // 挂载 更新 卸载
//
useEffect(function(){},[]) // 挂载成功
// 监听某个数据变化是更新执行
useEffect(function(){
    // 对监听的特定值做响应
},[value,value]) // 更新 卸载
// 一个组件里可以用n个Efffect函数
useEffect(function(){
// 只用当销毁当前组件的时候这个return函数才会执行
 return function(){}
})
```

DAY 6

## 路由重定向

`<Redirect>`

- `from` 当前地址
- `to` 要去的地方
  - `to={}` 对象配置 `{pathname:'/dir',state:{},hash:"}`

## withRoute

高级函数，将非路由组件包装，使该组件拥有路由对象

## Switch

什么时候使用Switch 当使用Redirect 重定向的时候使用

功能：自上而下，逐一匹配，只要匹配上一条立即渲染且中止匹配

## 路由定义

根据不同的地址呈现对应的页面或内容，叫路由

react路由的匹配模式是贪婪模式。
当地址栏发生改变BrowserRouter里的所有导航和route都会被匹配。
DAY 7

Redux 和 react-Redux
redux 是一个独立的，单向数据流的全局状态管理器 ---状态机 （mobx）

## 组成部分

1. creactStore 创建仓库
2. getState 获取状态
3. dispatch 派发动作
4. subscribe 订阅状态
5. reducer 不是API，是用于创建仓库的核心，里面是state
6. action 也不是API ，纯函数

### 安装中间件

- applyMiddleware

### 第三方插件

- 在派发中执行异步代码 redux-thunk

### 核心概念

1. `reducer`：是一个纯函数，只对`state`业务操作，不做和`state`无关的事，都要是同步代码，不能有异步。
2. `reducer`中的`state`：一个只读的对象数据，不可以直接修改，因为被`redux`监听保护，每次都是在`reducer`里返回一个新的对象数据，由`redux`进行新旧数据处理。
3. 数据流：自上而下，单项数据流。

## react-redux

`react-redux`就是用来配合`redux`进行优雅，方便，快速的开发。

### Provider 组件

在项目的根节点，使用`Provider`包裹，还组件接受一个必须的属性`store` ，使用`store`属性接受自定义的`redux`仓库对象

`Provider`里封装了`subscribe`订阅函数，极大的方便了我们使用`redux`

### connect 函数

高阶函数
语法：`connect(mapStateToProps,mapDispatchToProps)`
作用：将`store`里的状态和派发动作映射到组件的属性`props`上。
