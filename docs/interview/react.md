---
title: React 
subtitle: React 相关面试题 # 博客副标题（可选）
date: 2022-04-01
sidebar: 'auto'
categories:
 - 面试题
tags:
 - React
 - 面试题
---

## React 解决了什么问题？

[参考地址](https://www.zhihu.com/question/39825457)

## setState 是同步还是异步？

同步。以异步的形式呈现是由于react 自身的优化机制导致的。因为每次调用 setState 都会触发更新（调用 disAction 浅比较 state 是否相等），react 会使用批量更新调用 batchedEventUpdates 方法，通过 isBatchingEventUpdates 标志位在 scheduleOnFiber 调和过程中根据这个开关进行批量更新。异步提高性能，多个状态合并到一起，从而减少 re-render 的调用执行。

## immutable

react 对 state 中的对象引用未改变，那么react 会认为这个对象前后是没有发生变化的，这里只用了浅比较，引用地址相同，因此就认为 state 没有变化，导致页面不会重新渲染的问题。这就是 mtutale 的方式。

在setState，比如说 `setList([...list, "new item"]);`，这样是创建了一个新的对象，引用地址发生改变，这样 state 会发生改变，但是过多的创建新的对象会给 state 带来性能问题。**immutable** **就是用来解决改问题的。**

## React 组件通信的方式有哪些？

- props，callback 回调
- context
- ref 传递
- redux
- event Bus 事件总线

## redux 是如何派发数据的，connect 原理？

![https://cdn.nlark.com/yuque/0/2022/png/1535745/1645368954776-c935d722-ca45-4480-813a-514f703be219.png](https://cdn.nlark.com/yuque/0/2022/png/1535745/1645368954776-c935d722-ca45-4480-813a-514f703be219.png)

state 的变化，会导致 View 的变化，用户接触不到state，只能接触得到 View，所以 state 的变化，必须是View 导致的。Action 就是 View（也是我们页面呈现的组件） 发出的通知层由用户操作，会用 dispatch 发起更新动作，然后到了 reducer 层面，函数执行根据 Action 得到了一个新的 state，这个新的 state 存到 Store 里面，react-redux 结合 View 和 Store 自动更新 View（也就是我们的组件）。

## connect 原理

connect 内部会返回一个高阶组件 `wrapWithConnect`，HOC 给返回的组件的 props 添加上 state dispatch，并且使用 useMemo 控制渲染只有改变的时候才更新渲染子组件。

参考链接：[https://didiheng.com/front/2019-12-20.html#connect%E5%87%BD%E6%95%B0](https://didiheng.com/front/2019-12-20.html#connect%E5%87%BD%E6%95%B0)

## redux 为什么不能异步？为什么需要redux-thunk？

不需要关心异步的细节

比如写一个触发dispatch 的 action

```js
loadTodo 为借口请求返回数据
// redux-thunk 模式编写异步

export const addTodoAsync = () => {
	return dispatch => {
  	loadTodo().then(todo => {
    	dispatch(addFullTodo(todo))
    })
  }
}

// action
export const addFullTodo = (todo) => {
	return {
    type: 'ADD_TODO',
    ...todo
	}
}

//使用 redux-thunk 在组件中写
dispatch(addTodoAsync()))

// 没有 redux-thunk 编写异步在组件中写

loadTodo().then(todo => {
 	dispatch(addFullTodo(todo))
})

```

区别主要是：在与，我们不需要关心是先 loadTodo 得到todo 以后再 dispatch。`dispatch(addTodoAsync()))`不用关心 loadTodo ，我们只知道这个 addTodoAsync 可以返回 todo，并dispatch。

## redux-thunk 原理

比如说上面传入一个 addTodoAsync，redux-thunk 会判断传入的 action 是否为函数。如果为函数那就是异步了。负责帮忙执行。

## react 那些场景会触发重新渲染

[https://github.com/lgwebdream/FE-Interview/issues/913](https://github.com/lgwebdream/FE-Interview/issues/913)

- setState 方法被调用
- setState(null) 不会触发 render （更新前会判断新的值是否为 null ，如果为null 直接return）
- 父组件重新渲染
- forceUpdate()
- 类组件中 通过 this.forceUpdata() 强制调用更新；调用 forceUpdate 会跳过`shouldUpdateComponent`的限制。全局会开启一个 hasForceUpdate 开关，当组件更新时，会检查这个开关，如果开启 true 那么会直接跳过 shouldUpdate。相当于可以直接打破渲染规则。
- 有些变量不在state上，当时你又想达到这个变量更新的时候，刷新render；或者state里的某个变量层次太深，更新的时候没有自动触发render。这些时候都可以手动调用forceUpdate自动触发render。
- 函数组件中：

```js
  const [ignored, forceUpdate] = useReducer(x => x + 1, 0);

  function handleClick() {
    forceUpdate();
  }
```

## 重新渲染 render 会做些什么？

diff 算法，对比新旧节点。

## useEffect的使用方法？useEffect的return会在什么时候执行？useEffect原理是什么？

- 接受一个函数作为参数，函数内部作为一些舒服请求，初始化动作，并且接受一个 deps 依赖数组，如果定义在 deps 里面的变量发生改变，在组件更新的时候，effect 函数参数内部会重新执行，函数参数可以返回一个函数，这个函数的执行时间实在组件卸载执行，或者就是 deps 变量更新，清理执行上一次函数参数执行的内容。
- **原理**：所有的函数组件触发都在 renderWithHook 里面，在fiber调和过程中，遇到 FunctionComponent （函数组件）类型的 fiber ，就会用 updateFunctionComponent 更新 fiber，在 updateFunctionComponent 中调用 renderWithHooks 方法。
- 在 render 阶段，实际没有进行真正 DOM 元素的增加，删除， React 把想要做的不用操作打成不到的 effectTag。等到 commit 阶段统一处理这些副作用，包括 DOM 的增删改查，执行生命周期等。
- 首先初始化会执行 mountEffect 函数，内部 `mountWorkInProgressHook()`产生一个，hook，与fiber 进行关联；通过 `pushEffect`创建一个 effect，并且保存在 hook 的 memoizedState 属性下，还有一个重要的作用就是，如果有多个 effect或者 layoutEffect会形成一个副作用链表，绑定在函数组件 fiber 的 updateQueue 上。
- **更新阶段：**就是判断 deps 项有没有发生变化，如果没有发生变化，更新副作用链表就可以了；如果发生变化更新链表的同时，打执行副作用的标签：`fiber-> fiberEffect , hook -> HookHasEffect`,在commit阶段会根据这些标签重新执行副作用。

## useEffect 和 useLayoutEffect 的区别

参考地址：[https://zhuanlan.zhihu.com/p/348701319](https://zhuanlan.zhihu.com/p/348701319)

## useMemo 和 useCallback的区别，它们的实现原理是什么？

useMemo 缓存的是结果，useCallback 相当于缓存的是函数内部逻辑。

- 原理：
- useMemo 首先会执行 useMemo 第一个函数参数的想要的返回值，然后将值缓存到 hook 的memoizedState 中。更新的阶段，判断 deps 值是否相等，没有变化，那么直接 return 上次保存在 memoizedState 的值。
- useCallback 原理：也是先进行依赖比较。如果新旧依赖都一直，返回原 callback。

## useEffect、useMemo、useCallback是如何做依赖收集的

pushEffect 进行依赖收集。如果有多个 effect或者 layoutEffect 会形成一个副作用链表，绑定在函数组件 fiber 的 updateQueue 上。

结构如下：

![https://cdn.nlark.com/yuque/0/2022/png/1535745/1645612486694-e47d4d60-426c-432e-a271-dd582e7f89ec.png](https://cdn.nlark.com/yuque/0/2022/png/1535745/1645612486694-e47d4d60-426c-432e-a271-dd582e7f89ec.png)

## React Hook 优劣势（对比Component）

**优点：**

- 更容易复用逻辑
- 每调用一次 useHook 都会生成一份独立的状态（因为 hook 写在一个函数模块内），函数每次调用都会生成一份独立的空间（状态和逻辑也更独立）。
- 虽然状态 useState 和 useEffect 等这些依赖组件，但他可以在组件外部定义，这一点是 类组件做不到的，类组件声明一些副作用，或者 state，不能在类组件外部定义的。
- 上面两点虽然说高阶组件（HOC）能实现。但是高阶组件的缺点是：
- 1、来源不清晰：高阶组件是通过增强组件的 props（赋予一个新的属性或方法到组件的props属性上。）实现起来比较隐式，难易区别这个props来着哪个高阶组件。
- 2、高阶组件需要实例化一个父组件，不管在代码上还是性能上，都不如 hooks。
- 3、命名冲突：多个高阶组件，命名容易发生冲突。
- 4、一般无法直接获取原始组件的状态，如果要获取，需要 ref 获取组件实例。
- 5、因为本质上产生了一个新的组件，所以需要配合 forwardRef 来转发 Ref。
- 6、如果多个高阶组件嵌套在一起，当前状态会覆盖上一个状态，比如说 多个componentDidMount，当前 componentDidMount 会覆盖上一个 componentDidMount，这样副作用串联起来，影响很大。
- **下面会说说 HOC 的优点👇🏻。**
- Hook 将组件中互相关联的部分拆分成更小的函数。复杂的类组件会变得难以理解，例如 经常在 componentDidMount 和 componentDidUpdate 获取数据，但同一个 componentDidMount 包含很多逻辑，如设置事件监听，而之后需要在 componentWillUnmount 中清除。相互关联且需要对照修改的代码被进行了拆分，而完全不相关的代码却在同一个方法中组合在一起。
- 函数组件声明更简洁，类组件声明纯在大量的模板代码。
- 不用考虑 this 指向问题。

**缺点：**

- 响应式的 useEffect
- 你必须搞清楚 useEffect 和 useCallback 等依赖项数组改变的动机。有时候，你的useEffect依赖某个函数的不可变性，这个函数的不可变性又依赖于另一个函数的不可变性，这样便形成了一条依赖链。一旦这条依赖链的某个节点意外地被改变了，你的useEffect就被意外地触发了。所以对比 componentDidmMount 和 componentDidUpdate，useEffect 带来的心智负担更大。
- Hook 不擅异步代码，函数的运行是独立的，每个函数都有一份独立的作用域。函数的变量是保存在运行时的作用域里面。当我们有**异步**操作的时候，经常会碰到异步回调的变量引用是之前的，也就是旧的（这里也可以理解成闭包）。比如下面的一个例子([codesandbox](https://codesandbox.io/s/charming-diffie-tsj8e))：

```js
import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const onAlertButtonClick = () => {
    setTimeout(() => {
      alert("Value: " + counter);
    }, 3000);
  };

  return (
    <div>
      <p>You clicked {counter} times.</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <button onClick={onAlertButtonClick}>
        Show me the value in 3 seconds
      </button>
    </div>
  );
};

export default Counter;
```

当你点击Show me the value in 3 seconds的后，紧接着点击Click me使得counter的值从0变成1。三秒后，定时器触发，但alert出来的是0（旧值），但我们希望的结果是当前的状态1。

这个问题在class component不会出现，因为class component的属性和方法都存放在一个instance上，调用方式是：this.state.xxx和this.method()。因为每次都是从一个不变的instance上进行取值，所以不存在引用是旧的问题。

其实解决这个hooks的问题也可以参照类的instance。用useRef返回的immutable RefObject（把值保存在current属性上）来保存state，然后取值方式从counter变成了： counterRef.current。如下：

```js
import React, { useState, useRef, useEffect } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const counterRef = useRef(counter);

  const onAlertButtonClick = () => {
    setTimeout(() => {
      alert("Value: " + counterRef.current);
    }, 3000);
  };

  useEffect(() => {
    counterRef.current = counter;
  });

  return (
    <div>
      <p>You clicked {counter} times.</p>
      <button onClick={() => setCounter(counter + 1)}>Click me</button>
      <button onClick={onAlertButtonClick}>
        Show me the value in 3 seconds
      </button>
    </div>
  );
};

export default Counter;
```

[结果](https://link.zhihu.com/?target=https%3A//codesandbox.io/s/shy-wood-bxb7f)如我们所期待，alert的是当前的值1。

我们可以把这个过程封装成一个custom hook，如下：

```js
import { useEffect, useRef, useState } from "react";

const useRefState = <T>(
  initialValue: T
): [T, React.MutableRefObject<T>, React.Dispatch<React.SetStateAction<T>>] => {
  const [state, setState] = useState<T>(initialValue);
  const stateRef = useRef(state);
  useEffect(() => {
    stateRef.current = state;
  }, [state]);
  return [state, stateRef, setState];
};

export default useRefState;

```

## HOC 高阶组件的优点

**高阶组件在哪些场景使用，实现高阶组件的方式有哪些？**

- 高阶函数将一个函数作为参数并且返回值也是一个函数。高阶组件是将组件作为参数，返回组件的参数。返回的组件把传进去的组件进行功能强化。
- 属性继承
- 反向继承（返回组件继承参数组件）
- 渲染劫持（继承参数组件之后，通过判断是否渲染 super.render 的内容，否则我渲染其他内容。）
- 修改渲染树（通过 react.cloneElelement, 创建新的渲染树，可以使用 react.createElement）
- 权限拦截

## Context 原理？如何做依赖收集的？

1、调用 createContext 创建 context 对象，context 对象上的 $$typeof 标记 Provider（REACRT_PROVIDER_TPYE） 和 Context（REACRT_CONTEXT_TPYE），__contextValue 保存 Provider 传递的 value。

2、会变成 ContextProvider 的 fiber 类型，在 fiber 调和走到 beginwork。这个阶段会发生两件事：

2.1、如果当前类型的 fiber 不需要更新，那么会 FinishedWork 中止当前节点和子节点的更新。

2.2、如果当前类型 fiber 需要更新，那么会调用不同类型 fiber 的处理方法。当然 ContextProvider 也有特			  有的 fiber 更新方法 —— updateContextProvider。

2、updateContextProvider 更新走调用 **propagateContextChange ，**在类组件里面c ontext 更新会强制跳过 PureComponent 和 shouldUpdateComponent，也就是走 forceUpdate 逻辑。

## 如何做依赖收集的

深度遍历所有的子代 fiber ，然后找到里面具有 dependencies 的属性。对比 dependencies 中的 context 和当前 Provider 的 context 是否是同一个，如果是同一个，那么如果当前 fiber 是类组件，那么会给绑定一个 forceUpdate 标识 。dependencies 属性就是本身是一个链表结构，使用 contextType useContext 组件的 fiber ，和 Consumer 类型的 fiber 会和 dependencies 属性建立联系。会把消费者 context 放到 dependencies 中。

## React 生命周期

生命周期大概可以分为三个流程，分为**组件初始化，组件更新，组件销毁。**

- **初始化阶段：** constructor执行=>
- 执行 static getDerivedStateFromProps（返回值将和之前的 state 合并，作为新的 state）,就是接收到的 props 合并到state 中。
- => componentWillMount 执行（如果存在 getDerivedStateFromProps 和 getSnapshotBeforeUpdate 就不会执行生命周期componentWillMount。）
- => render 函数执行（mountClassInstancec 形成children，调用 reconcileChildren 方法深度调和 children）。
- => componentDidMount 执行（上面都是在render阶段执行，Mount 在commit阶段执行的。）
- **更新阶段：**
- 执行 componentWillReceiveProps(newProps， newContext)生命周期，这个生命周期执行在组件更新阶段，父组件传递给子组件的 props 更新这个生命周期才会执行。
- => 执行 getDerivedStateFromPorps 返回值用于合并 state，生成新的state
- => 执行 shouldCcomponentUpdate,传入新的 props ，新的 state，和新的 context，返回值决定是否继续执行 render 函数。
- => 执行 componentWillUpdate。
- => 执行 render 函数。
- => 执行 getSnapshotBeforeUpdate，可以获取DOM更新前的状态。它的返回值，componentDidUpdate(_,__,snapshot),snapshot 第三个参数就是返回值。这个生命周期需要配合 componentDidUpdate 使用，如果没有 声明 componentDidUpdate 生命周期，那么声明 getSnapshotBeforeUpdate 就会报错误。
- => 执行 componentDidUpdate
- **销毁阶段：**
- 执行 componentWillUnMount 卸载组件，以及 DOM元素。
- **当 props 不变的前提下，PureComponent 组件能否阻止 componentWillReceiveProps 执行**

答案是否定的，componentWillReceiveProps 生命周期的执行，和纯组件没有关系，纯组件是在 componentWillReceiveProps 执行之后浅比较 props 是否发生变化。所以 PureComponent 下不会阻止该生命周期的执行。

- **在v16版本后，为什么componentWillxxx 钩子前增加了 UNSAFE_ 前缀**

是因为 stack renconciler 重构为 fiber reconciler 后，render 阶段的任务可能中断/重新开始，对应的组件在render 极端的生命周期钩子（即 componentWillXXX）可能会触发多次。

## PureComponent 和 Component 有什么区别？

PureComponent 会浅比较（shallowEqual）对比 state 和 props 是否相等。Component 需要手动在 shouldComponentUpdate 钩子函数中自己写 render 逻辑。

extends PureComponent 之后源码 `pureComponentPrototype.isPureReactComponent = true;` 将 isPureReactComponent 属性设置为 true。isPureReactComponent 这个属性在更新组件 updateClassInstance 方法中使用的。

`shallowEqual`浅比较流程：

- 第一步，首先会直接比较新老 props 或者新老 state 是否相等。如果相等那么不更新组件。
- 第二步，判断新老 state 或者 props ，有不是对象或者为 null 的，那么直接返回 false ，更新组件。
- 第三步，通过 Object.keys 将新老 props 或者新老 state 的属性名 key 变成数组，判断数组的长度是否相等，如果不相等，证明有属性增加或者减少，那么更新组件。
- 第四步，遍历老 props 或者老 state ，判断对应的新 props 或新 state ，有没有与之对应并且相等的（这个相等是浅比较），如果有一个不对应或者不相等，那么直接返回 false ，更新组件。

## 如果在map循环中没有设置key值，那么从 A B C D 四个节点变成 B C D三个节点，它会以什么样的方式变化？

当同一层级的某个节点添加了对于其他同级节点唯一的key属性，当它在当前层级的位置发生了变化后。react diff算法通过新旧节点比较后，如果发现了key值相同的新旧节点，就会执行移动操作（然后依然按原策略深入节点内部的差异对比更新），而不会执行原策略的删除旧节点，创建新节点的操作。这无疑大大提高了React性能和渲染效率。

第一步就是复用老的 oldFiber；复制完成，新的 newChildren 生成，A 节点以及没有用了就删除节点；第三步创建 newFiber。

官网地址：[https://zh-hans.reactjs.org/docs/reconciliation.html#recursing-on-children](https://zh-hans.reactjs.org/docs/reconciliation.html#recursing-on-children)。

## React diff 算法和 Vue diff 算法有什么区别？

[参考地址](https://juejin.cn/post/6978370715573714952)

## 虚拟 DOM，虚拟 DOM 的好处。

- 参考地址：[https://github.com/mqyqingfeng/frontend-interview-question-and-answer/issues/3](https://github.com/mqyqingfeng/frontend-interview-question-and-answer/issues/3)
- dom和js 引擎是相互独立的，但是又工作在同一线程（主线程）
- 频繁调用 dom api 不会进行批量操作，导致重排重绘，页面卡顿的情况出现（重新计算布局、重新绘制图像会引起更大的性能消耗）。

**虚拟DOM的劣势？**

- 虚拟DOM不会立马进行重排和重绘

## React dom绑定事件和原生事件有什么区别？

1. 当用户在为onClick添加函数时，React并没有将Click绑定到DOM上面
2. React 有一种事件插件机制，比如 onClick，onChange ，会有不同的事件插件 SimpleEventPlugin ，ChangeEventPlugin 处理（因此事件和事件源都是 react 自己的。）。
3. 事件绑定，也是通过 addEventListener 注册的，但是会保存到对应 DOM 元素类型 fiber 对象（hostComponet）的memoizedProps属性上。
4. 所以当事件触发的时候, 对使用统一的分发函数 dispatchEvent 将指定函数执行。
5. 绑定的时间和冒泡会形成事件队列。e.stopPropagation() 阻止冒泡，事件源状态里面证明事件停止冒泡，下次遍历的时候 event.isPropagationStopped() 就是 true，所以跳出循环。

```js
function runEventsInBatch(){
    const dispatchListeners = event._dispatchListeners;
    if (Array.isArray(dispatchListeners)) {
    for (let i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) { /* 判断是否已经阻止事件冒泡 */
        break;
      }
      dispatchListeners[i](event) /* 执行真正的处理函数 及handleClick1... */
    }
  }
}
```

## Hooks 实现原理

- hooks 与 fiber 建立联系。
- 创建 hook 对象用memoizedState属性保存 hooks 信息。
- 多个hook的话每一个 hook 通过 next 和下一个 hooks 关联。
- hooks 更新也同样使用 **双缓树更新** 技术，更新调用dispatchAction方法。
- 副作用保存 updateQueue 中形成副作用列表。commit 阶段统一执行。不同的副作用打上不同的 effectTag。

## 给你如何去设计一个 useState？

## fiber 调和？

- fiber 用来解决 大型 react 应用卡顿，fiber 是 react 中最小执行单元。可以把它理解成虚拟 DOM。
- react v15 之前的版本，使用递归遍历节点，无法中断，会阻塞浏览器的渲染，如果随着项目越来越大，越来越复杂，层级也越来越深，导致更新时间越来越长，前端交互上的体验就是卡顿。
- 然后说 fiber 和 elelement dom 的三者之间的关系。
- fiber 之前 return 指向父组件，child 指向子组件，sibling
- 如何找到更新的 fiber ？
- 向上递归父级链表的 childlanes ，接下来向下调和的时候 childlanes 与 updatesLanes 对比是否相等。

## **什么是fiber？**

## React Router 路由的原理

[参考地址](https://juejin.cn/book/6945998773818490884/section/6959721297911742504)

路由模式分为两种：history 模式，hash 模式。通过 createHistory 创建不同模式的路由。

history模式： 主要是通过 popstate 监听，pushState 进行前进，使用history.back, history.forword, history.go()，都能被 popState 监听。

hash模式：主要通过 hashChange 监听路有变化。

实现原理：setState 定义 location ，context 上下文模式来传递路由信息，告诉切换了路由显示对应组件。`Route`通过消费，拿到信息，显示，`context`的value 变化了会更新所有子组件。这就明白了为什么路由变化会切换到对应组件。

比如 如果定义多个 `<Route path="/child"/>`那么不管你匹配到对应组件，那么都会全部加载组件。

因此我们首屏优化想要更快可以通过 路由懒加载。

v6 之前需要包裹 `Swtich`组件来进行路由匹配。

注意 Switch 包裹的 Redirect 要放在最下面，否则会被 Switch 优先渲染 Redirect ，导致路由页面无法展示。

##

## 比较 react v5 VS react v6 有什么变化。

- 从`<Swtich>`组件 => 用`<Router>`代替。
- v5 之前子路由需要写在子组件里面添加 `<Route path="parent/child"/>`，现在直接嵌套就可以了`<Route path="parent"><Route/>`，父组件中再需要添加 `<Outlet />`即可显示子路由。
- 路由跳转提高了新的 `useNavigate`。
- 获取路由参数和设置参数使用 `useSearchParams`
- 以前我们需要使用 `react-router-config`的 renderRoutes 方法配置 options 路由；v6 版本可以直接使用 `useRoutes`就可以。
- 更全面拥抱 hooks。

原理区别：

- 新版本使用 `useLayoutEffect` 处理监听路由变化

## 手写 React HOOK ，**hooks 实现原理？**

学习链接：[https://cloud.tencent.com/developer/article/1784501](https://cloud.tencent.com/developer/article/1784501)

react技术揭秘：[https://react.iamkasong.com/hooks/create.html#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86](https://react.iamkasong.com/hooks/create.html#%E5%B7%A5%E4%BD%9C%E5%8E%9F%E7%90%86)

## React 性能优化

[参考地址](https://juejin.cn/post/6844903924302888973)

## 如何设计一个前端通用组件？

[设计一个通用组件库](https://juejin.cn/post/6844903847874265101)

最重要的就是组件中的数据和 UI 解耦。

- 前端组件设计的原则
- 单一职责：一个组件只专注一件事情，这样能够更好的复用组件。
- 过度单一职责的组件，可能导致过度抽象，造成组件库碎片化。
- 通用性：放弃对 dom 的掌控，只提供最基础的 dom 和交互逻辑。将 dom 结构转移给开发者。
- 封装：隐藏内部实现细节和实现意义。并通过 props 控制行为和输出。
- 多个功能的组件应该转为多个小组件；
- 命名规范：有意义的函数和变量名，让代码更具有可读性。
- 适当的注释
- 扁平化 state 和 props
- 给组件传递 props 建议用更扁平化的 props ，而不是用嵌套的对象或数组。
- react 中，如果修改对象或者数组，必须创建一个副本；可能会因为浅复制而造成页面的渲染。

[https://juejin.cn/post/6844904032700481550](https://juejin.cn/post/6844904032700481550)

## React 应用卡顿如何排查？

1、使用 Performance 录制应用快照，查看调用情况

2、查看network中网络请求情况，是否有资源因过大请求阻塞，导致后续资源无法加载，这种情况一般选择分包或固定资源选择cdn分担（多域名。浏览器设置的http2.0以下同域名仅允许同时最多6个tcp的限制）

3、可以通过 React Developer Tools 的 Profiler 的 Flamegraph（火焰图）或 Ranked（渲染时长排行榜） 查看各组件的渲染时长，根据对应的组件可以进行排查渲染问题，以下作答：

a). 通过检查代码中是否有重复触发的 useEffect

b). 检查是否有多次不同渲染周期中触发的setState导致的渲染（比如在一个事件中导致的state更新，导致依赖于该state的useEffect触发，而该effect中又有其他的setState，导致多个有依赖项的useEffect不同批次连环触发）

c). 检查是否在某个超大组件中需要渲染的元素过多，可使用子组件可考虑使用 pureComponent，或 React.mome ，或使用useMome来根据依赖项更新子组件，或在父组件中将子组件需要的props通过使用useMome或useCallback缓存， 或在子组件中使用 shouldComponentUpdate 中校验是否需要更新来减少更新

d). 检查是否存在拖拽业务，这类业务一般会导致大量的diff存在，可以的话可以考虑不使用React的方式去实现，使用第三方非React的JS库去实现。

e). 同上情况，存在大量增删改查逻辑，会导致大量的的diff可以检查列表元素是否存在唯一的key，通过key可以让React复用Fiber从而避免重复创建 Fiber节点与 Dom 节点

f). 存在未清除掉的定时器或dom监听事件

## React 18 更新的内容？

[https://mp.weixin.qq.com/s/bGf8VQpfPv0rgHxnOo7WUQ](https://mp.weixin.qq.com/s/bGf8VQpfPv0rgHxnOo7WUQ)

[https://www.youtube.com/watch?v=ytudH8je5ko](https://www.youtube.com/watch?v=ytudH8je5ko)

- 合并更新
- 提供了三个新的 API
- startTransition：接受一个回调函数，该作用就是非紧急更新，就是会先执行优先级更新高的。
- useDeferredValue： 设置延迟值。
- useTransition
- Suspense： 服务端 SSR 渲染也可以实现 `<Suspense>`
- render -> createRoot（会返回一个对象，比如返回 root，root.render 才会去渲染）
- useId() -> 生成组件唯一 id

## 高耦合低内聚

组件之间没有关联的，有关联只会是数据之间的相互传递。组件的内部逻辑不会与其他组件关联。

组件内的方法只暴露一部分，比如回调函数，通信数据。

## 什么是 CSS-IN-JS？

## **函数组件的工作原理？**

## **除了 redux 你还用过那些？它是为了解决什么的？**

- mobx
- dva（redux 封装）
- Rxjs
- pullstate （依赖 Immer）
- recoil（atom）

## react 性能优化

- profiber 查看组件加载速度
- [https://www.zhangshuai.xyz/articles/view/89](https://www.zhangshuai.xyz/articles/view/89)

## react 和 react-dom 两个库有什么区别 各自是做什么的？

- **react** 主要负责描述特性，提供react api
- 就是类组件，函数组件 ，context，hook ，refs 这些特性，react 模块只描述特性长什么样，怎么用，并不负责特性具体实现。
- react-dom 主要负责实现特性，比如浏览器上渲染dom，响应点击事件等等。
- [https://segmentfault.com/a/1190000037534946](https://segmentfault.com/a/1190000037534946)