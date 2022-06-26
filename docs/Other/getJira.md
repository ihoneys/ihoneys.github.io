---
title: 使用 React 开发仿 Jira 企业级项目总结
date: 2021-10-16
 
categories:
 - 项目开发
tags:
 - 项目
publish: true
---


## style-component 的好处

用模块化的方式组织 css ，依托于 JS 模块化方案。

- 为什么css不好
   - 传统 css 只有一个全局作用域，比如一个任意 class 可以匹配全局的任意元素。伴随着项目成长，css 会变得越来越难以组织，最终导致失控，CSS-in-JS 可以通过生成单独的选择符，来实现作用域的效果。
   - 隐试依赖，让样式难以追踪（比如层级样式名。-> `.target . name h1{ color: red }`）
   - css 没有变量形式，style-component 可以使用变量，比如根据某些条件进行样式替换。
   - css 选择器与 html 元素耦合。（比如上面的层级样式，如果我`h1`标签改成了`h2`那么需要找到对应的样式）


## 实现原理
```javascript
const css = styleBlock = {
	const className = someHash(styleBlock) // 生成独特的 classname
  const styleEl = document.createElement('style') // 创建 style 标签
  styleEl.textContext =  // 将样式放入到 style 标签中
    `.${className} {
  		${styleBlock}
  }`
  document.head.appendChild(styleEl)
  return className
}
const className = css(`
	color: red;
  padding: 20px;
`)
```

## css Grid 布局

[阮一峰 Gird](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)


## 什么时候用 flex 布局，什么时候用 grid 布局

- 要考虑是一维布局还是二维布局（一般来说，一维布局使用 flex，二维布局用 grid）
- 从内容布局出发
   - 从内容出发：你先有一组内容（数量一般不固定），然后希望他们均匀的分布在容器中，由内容自己的大小决定占据的空间；
   - 从布局出发：先规划网格（数量一般比较固定），然后再把元素往里填充
   - 从内容出发：用 flex
   - 从布局出发：用 grid


## 自定义 hooks

- 异步操作。
- 状态管理
- debounce
- 路由
- 增删改查
- title 修改（useDocumentTitle）
- useUrlQueryParam
   - 主要是为了页面能够缓存起来，输入内容，会生成对应 url 链接，访问链接会自动取出 url 链接上的参数，并填充至输入框。
- 使用 useMountedRef 阻止在已卸载组件上赋值

**函数柯里化，优化写法**

比如：
```tsx
const mutate = (id:number, pin: boolean) => project({id: project.id, pin })


const Compoent = () => {
  
	return <Pin onChange={ pin => mutate(project.id, pin)}>
}
    
// 优化后

const mutates = (id:number) => (pin: boolean)=> project({id: project.id, pin })
    
const Compoent = () => {
  
	return <Pin onChange={mutates(project.id)}>
}
```


## 控制反转

[https://zh-hans.reactjs.org/docs/context.html](https://zh-hans.reactjs.org/docs/context.html)

减少props 深层数量，可以传递一个组件。

减少耦合，只关心渲染，逻辑操作交最外层。


## redux-toolkit 使用


## 乐观更新
修改添加删除 直接删除，避免请求之后删除。<br />乐观更新是一种 UI 的行为。UI 在确认从服务端返回之前，就把这个 UI 改变数据状态。


## 遇到问题及其难点

- 自定义 hook 异步请求。封装的 http请求第一层 .catch 捕获了一层错误 直接 `return error`，外面再使用 `try catch`捕获的时候无效。解决办法：在写 `try catch`的内部函数中，添加 `async await`因为。直接` try{}`里面的 http 情感是一个异步操作，所以直接就走 catch 了，所以使用 `await`等待异步执行完。再一个，`return error`修改为 `return Promise.reject()`。
- 自定义 hook 返回 `error` 信息没办法拿到，就是 set 了 state 不能直接同步拿到 state 的值。第二次才能获取到。
- 刷新失去登录状态，刷新时调用接口返回 user 信息。并且如果在刷新的时候，先显示 loading，这样就可以避免刷新先显示 登录页面，请求成功之后才显示内容页面。


## 如何统一定义 children
使用 React 定义的 `PropsWithChildren` 属性
```tsx
import React from 'react';

type FallbackRender = (props: { erroor: Error | null }) => React.ReactElement;
export class ErrorBoundary extends React.Component<
  React.PropsWithChildren<{ fallbackRender: FallbackRender }>,
  { error: Error | null }
> {
  state = {
    error: null,
  };
}

```


### hook 闭包问题

useEffect 拿到 state 最新值，需要在 useEffect 指定正确的依赖，` return () => { 新最值 }`



## react-router 和 react-router-dom 的关系
他们两类似于  react 和 react-dom/reacrt-native的关系

react 比如处理 diff<br />react 调和调度完组件交给 react-dom 处理 dom



## 检测页面死循环渲染
使用`why-did-you-render`库检测

src 文件夹下 创建 wdyr.ts 文件

```typescript
import React from 'react';

if (process.env.NODE_ENV === 'development') {
  const whyDidYouRender = require('@welldone-software/why-did-you-render');
  whyDidYouRender(React, {
    trackAllPureComponents: true, // 是否跟踪全部组件 true 为全部，false为自定义
  });
}

```
trackAllPureComponents 如果为false ，想单独检测某个组件（在自己明确的情况下），在函数组件内部

给函数组件添加一个属性为`.whyDidYouRender`=  true。

> 对 useEffect 添加依赖项目的时候一定要注意是不是对象，很有可能setState的时候，对比 对象的时候，会导致不懂，而产生重新渲染 ，deps 依赖项对象对比是否想到是用 === 对比的。‘
> 解决方式： 可以使用 useMemo 缓存结果。
> 也可以用 useState 放入值。只有setState 值得时候，react 才会认为 state 发生改变， deps 才会触发



## iterator
通过 x[Symbol].iterator



## got 到的技巧

- 函数柯里化
```tsx
const pinProject = (id: number) => (pin: boolean) => mutate({ id, pin });


....
render(value, project) {
  return (
    <Pin
      checked={project.pin}
      onCheckedOnchange={pinProject(project.id)}
      />
  );
},
```

- 使用 useState 保存变量（惰性初始 state），可以避免组件刷新定义。
- 状态提升：把我们要共享的组件找到他们最近的父组件，把我们要共享的状态放到父组件中。
   - 嵌套太深不建议使用状态提升，如果要修改，很麻烦。
   - 也可以把组件放到公共的父组件，使用 children 属性模式传递下去（控制反转）


## redux 原理

![image.png](/img/other/redux.png)

## redux-thunk 
处理异步。<br />可以 dispatch(addTodoAsync)
```typescript
function addTodoAsync() {
	return dispatch => {
  	// ... do something
  }
}
```
没有 redux-thunk 只能
```typescript
dispatch().then(() => { //... do something })
```
这就是他们的区别之处。<br />可以帮助我们隐藏异步细节，也能让异步代码像普通的 action 一样。


## 实现原理
```typescript
function createThunkMiddleware<
  State = any,
  BasicAction extends Action = AnyAction,
  ExtraThunkArg = undefined
>(extraArgument?: ExtraThunkArg) {
  // Standard Redux middleware definition pattern:
  // See: https://redux.js.org/tutorials/fundamentals/part-4-store#writing-custom-middleware
  const middleware: ThunkMiddleware<State, BasicAction, ExtraThunkArg> =
    ({ dispatch, getState }) =>
    next =>
    action => {
      // The thunk middleware looks for any functions that were passed to `store.dispatch`.
      // If this "action" is really a function, call it and return the result.
      if (typeof action === 'function') {
        // Inject the store's `dispatch` and `getState` methods, as well as any "extra arg"
        return action(dispatch, getState, extraArgument)
      }

      // Otherwise, pass the action down the middleware chain as usual
      return next(action)
    }
  return middleware
}
```
检测 action 类型是不是 function ，说明是异步了，给 redux-thunk 处理。执行 action 函数。


## redux toolkit
它只是在 redux 的基础之上又封装了一层，解决redux 存在的问题：

- redux 配置复杂问题
- 一堆依赖
- redux 有很多模板代码。

内置 immer 库，可以 state 直接赋值。
