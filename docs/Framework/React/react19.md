---
title: React 源码变量含义
date: 2021-09-28
tags:
  - react
---

```javascript
let instance; // 类组件对应实例

let workInProgress; // 当前正在调和的 fiber 树

let current; // current 树，第一次调和之后会将 workInprogress 树赋值给 current 树

let Component; // 项目中的 class 组件

let nextProps; // 组件在一次更新中新的 props

let renderExpirationTime; // 作为下一次渲染的过期时间

// 组件实例
let _reactInternals; // 这个属性用来访问组件对应的 fiber 对象

// fiber 对象上可以通过 stateNode 来访问当前的 fiber 对应的组件实例

// 组件实例化之后会调用 mountClassInstance 组件初始化

// 组件 commit 阶段才会调用 componentDiMount

// 更新组件函数式 ,走这个函数式根据 current 是否为null 是否走更新逻辑
function updateClassComponent() {
  /.../;
}

// 调用 updateClassInstance
function updateClassInstance() {
  // 拿到类组件实例
  const instance = workInProgress.stateNode; // 类组件实例
  const hasNewLifecycles = typeof ctor.getDerivedStateFromProps === "function"; // 判断是否具有 getDerivedStateFromProps 生命周期
  if (
    !hasNewLifecycles &&
    typeof instance.componentWillReceiveProps === "function"
  ) {
    if (oldProps !== newProps || oldContext !== nextContext) {
      // 浅比较 props 不相等
      instance.componentWillReceiveProps(newProps, nextContext); // 执行生命周期 componentWillReceiveProps
    }
  }
  let newState = (instance.state = oldState);
  if (typeof getDerivedStateFromProps === "function") {
    ctor.getDerivedStateFromProps(
      nextProps,
      prevState
    ); /* 执行生命周期getDerivedStateFromProps  ，逻辑和mounted类似 ，合并state  */
    newState = workInProgress.memoizedState;
  }
  let shouldUpdate = true;
  if (typeof instance.shouldComponentUpdate === "function") {
    /* 执行生命周期 shouldComponentUpdate 返回值决定是否执行render ，调和子节点 */
    shouldUpdate = instance.shouldComponentUpdate(
      newProps,
      newState,
      nextContext
    );
  }
  if (shouldUpdate) {
    if (typeof instance.componentWillUpdate === "function") {
      instance.componentWillUpdate(); /* 执行生命周期 componentWillUpdate  */
    }
  }

  return shouldUpdate;
}
```

render 阶段 （组件初始化）

- contructor
- getDerivedStateFromProps
- componentWillMount
- render 最后阶段

commit 阶段

- 更新 dom
- componentDidMount

如果有 getDerivedStateFromProps 执行，返回的值合并 state，生成新的 state

在执行 生命周期 shouldComponentUpdate 传入新的 props，新的 state，和新的 context，返回值决定是否继续执行 render 函数，调和子节点。
`getDerivedStateFromProps` 的返回值可以作为新的 state，传递给 shouldComponentUpdate。

`getSnapshotBeforeUpdate`是在 updateClassInstance 之后完毕之后执行，也就是 render 阶段之后，它是执行在 commit 阶段，（commit 阶段又分为 befor Mutation（DOM 修改前），mutaion（DOM 修改），Layout（DOM 修改后）三个阶段）。

`getSnapshotBeforeUpdate`发在在 `before Mutation 阶段`。

`getDerivedStateFromProps`组件初始化或者更新时，将 props 映射到 state 中并返回

`componentWillReceiveProps`组件更新带来的 props 修改就会执行，与`getDerivedStateFromProps`不同的是 `componentWillReceiveProps`内可以访问到 this，所以也可以根据 props 一些条件来更新 state。**但是不建议这么操作。**

`getSnapshotBeforeUpdate` 组件更新调用 且需要 return { }
