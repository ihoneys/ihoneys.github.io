---
title: React 问题收集
date: 2022-03-14
tags:
  - react
---

## Fiber 架构原理

### 也可以看这边文章

[https://nanyang.io/post/deep-dive-into-react-fiber#%E6%96%B0%E6%9E%B6%E6%9E%84-fiber](https://nanyang.io/post/deep-dive-into-react-fiber#%E6%96%B0%E6%9E%B6%E6%9E%84-fiber)

fiber 的意思可以作为：

- 作为静态的数据结构
- 作为动态工作单元

**fiber 含义：**每个 fiber 节点对应一个组件，保存该组件对应类型 dom 节点等信息。这时的 fiber 节点也就是我们所说的虚拟 dom。

## 深入理解 jsx

编写的 jsx 会被 编译，比如下面

```html
<div title="123">123</div>
```

这段 dom 会被变编译成：

```javascript
React.createElement(
  "div",
  {
    title: "123",
  },
  "123"
);
```

> react/src/ReactCreateElement.js

```javascript
export function createElement(type, config, children) {
  let propName;

  // Reserved names are extracted
  const props = {};

  let key = null;
  let ref = null;
  let self = null;
  let source = null;

  if (config != null) {

  /
    ...

  /

  return ReactElement(
    type,
    key,
    ref,
    self,
    source,
    ReactCurrentOwner.current,
    props,
  );
}
```

上述流程就是处理 dom 节点，最后返回调用 ReactElement 方法

ReactElement 方法内部就是定义一些 比如 REACT_ELEMENT_TYPE 类型等等

**fiber 与 jsx 的关系？**

在首屏渲染时，会创建 workInProgress fiber 树，创建 fiber 节点的依据，就是组件返回的 jsx 对象。
更新时，已经生成了 current fiber 树，所以生成 workInProgress fiber 节点时，会将组件返回的 jsx 对象与这个组件对应的 current fiber 节点做对比 ，根据对比的结果生成这个组件的 workInProgress fiber。

## 组件相关

- 下面哪种写法更推荐？

![6c2056f651dd31d2050468acd31f50e.jpg](/img/react/com-writing.jpg)

理由： 一个是组件，一个是一个函数，组件 diff 要看 type 指向，这个 demo 中只要 rerender 组件就会重新挂载，里面所有元素全部不能复用；而函数只不过抽出了一段 jsx 逻辑而已，元素在 diff 中会复用。

- **如果没有在 contructor 的 super 函数中传递 props，那么接下来 constructor 执行上下文中 就获取不到 props，这是为什么？**

```jsx
/* 假设我们在 constructor 中这么写 */
constructor(){
    super()
    console.log(this.props) // 打印 undefined 为什么?
}
```

上面的  `function Component(props, context, updater)`源码中 绑定 props 是在 Component 中执行的，执行 super 等于执行 Component 函数，此时 props 没有作为第一个参数传递给 super()，在 Component 中就会找不到 props 参数，从而变成 undefined，在接下来 constructor 代码中 打印 props 为 undefined。

```javascript
/* 解决问题 */
constructor(props){
    super(props)
}
```

- **绑定了两个 handleClick ，那么点击之后会打印什么？**

```jsx
class Index extends React.Component {
  constructor(...arg) {
    super(...arg); /* 执行 react 底层 Component 函数 */
  }
  state = {}; /* state */
  static number = 1; /* 内置静态属性 */
  handleClick = () =>
    console.log(111); /* 方法： 箭头函数方法直接绑定在this实例上 */
  componentDidMount() {
    /* 生命周期 */
    console.log(Index.number, Index.number1); // 打印 1 , 2
  }
  render() {
    /* 渲染函数 */
    return (
      <div style={{ marginTop: "50px" }} onClick={this.handerClick}>
        hello,React!
      </div>
    );
  }
}
Index.number1 = 2; /* 外置静态属性 */
Index.prototype.handleClick = () =>
  console.log(222); /* 方法: 绑定在 Index 原型链的 方法*/
```

结果是 11。因为 class 类内部，箭头函数式直接绑定在实例对象上的，而第二个 handleClick 是绑定在 prototype 原型链上的，他们的优先级是： 实例对象上的方法属性  ---> 原型对象上的方式属性。

### 组件通信方式

一共五种主流通信方式：

1. props 和 callback 方式
1. ref 方式
1. React-redux 或 React-mobx 状态管理方式
1. context 上下文方式。
1. event bus 事件总线。

## 高阶组件

- [x] - 高阶组件能解决什么问题

**1、高阶组件能解决什么问题**

高阶组件的基础概念：将一个函数作为参数并且返回值也是一个函数的函数。高阶组件是以组件为参数，返回组件的函数，返回的组件把传进去的组件进行功能强化。

比如做一个权限隔离的需求，就是部门模块组件受权限控制，后台的数据交互的结果权限控制着模块展示与否，而且没有权限默认展示无权限提示页面。（如下图，黄色部分是受到权限控制的组件模块）
![senior](/img/react/senior-com.jpg)
如果单独对每个组件进行判断，无疑增加了我们的工作量，那么，判断权限，我们可以把逻辑写在一个容器里面，然后将每个需要权限的组件通过容易包装一层，这样就不用逐一手动绑定权限了， 所以 HOC 可以合理解决这个问题。

本质上： HOC 产生的作用就是解决大量代码复用，逻辑复用问题。

HOC 其他引用：比如项目中想让一个非 Route 组件，也能通过 props 获取路由实现跳转，但是不想通过父级路由组件层层绑定 props，这个时候就需要一个 HOC 把改变路由 history 混入到 props 上，于是 withRoute 诞生了。

高阶组件功能说明：

- 强化 props （withRouter）
- 控制渲染
  - 渲染劫持
  - 修改渲染树
- 组件赋能
  - ref 获取实例
  - 事件监控

## State

问题：

- [x] - state 到底是同步还是异步的？
- [x] - 触发一次 setState，在 React 底层主要做了那些事情？
- [x] - 类组件如何限制 state 带来的更新作用的呢？
- [x] - React 底层是如何进行批量更新的 ？
- [x] - 如何在异步环境下，继续开启批量更新模式呢？
- [x] - 如何提升更新优先级呢？
- [x] - 如何监听 state 的变化？
- [x] - 类组件中的 setState 和函数组件中的 useState 有什么异同点？
- [x] - 为什么调用改变 state 的函数 dispatch，本次函数上下文中，还是获取不到最新的 state 值。

1. **state 到底是同步还是异步的？**

同步的。setState 并没有异步，之所以会有一种异步方法的表现形式，归根结底是因为 react 自身的性能机制所导致的。因为每次调用 setState 都会触发更新（useState 调用 disAction 会浅比较 State），异步操作是为了提高性能，将多个状态合并到一起更新，减少 re-render 调用。

2. ** 触发一次 setState，在 React 底层主要做了那些事情？**

更新流程是：触发 setState => 计算 expirationTime => 更新调度，调和 fiber 树 => 合并 state ，执行 render => 替换真实 dom => 执行 callback 函数。

- 首先，setState 会产生当前更新的优先级（老版本用 expirationTime，新版本用 lane，[它们的区别](https://zhuanlan.zhihu.com/p/158779371)）。
- 接下来 React 会从 fiber Root 根部 fiber 向下调和子节点，调和阶段将对比发生更新的地方，更新对比 expirationTime，找到发生更新的组件，合并 state，然后触发 render 函数，得到新的 UI 视图层，完成 render 阶段。
- 接下来到 commit 阶段，commit 阶段，替换真是 DOM，完成此次更新过程。
- 如果 setState 有第二个参数 callback ，commit 阶段还会执行 callback 函数内容（可以拿到更新后的 state），到此为止完成了一次 setState 全过程。

3. **类组件如何限制 state 带来的更新作用的呢？**

- 1 pureComponent 可以对 state 和 props 进行浅比较，如果没有发生变化，那么组件不更新。
- 2 shouldComponentUpdate 生命周期可以通过判断前后 state 变化来决定组件需不需要更新，需要更新返回 true，否则返回 false。

4. **React 底层是如何进行批量更新的 ？**

批量更新和事件系统事件合成想关联的，都是会走同一个方法

> react-dom/src/events/DOMLegacyEventPluginSystem.js

```javascript
/* 在`legacy`模式下，所有的事件都将经过此函数同一处理 */
function dispatchEventForLegacyPluginEventSystem() {
  // handleTopLevel 事件处理函数
  batchedEventUpdates(handleTopLevel, bookKeeping);
}
```

重点是下面这个 batchedEventUpdate 是方法

```javascript
function batchedEventUpdates(fn, a) {
  /* 开启批量更新  */
  isBatchingEventUpdates = true;
  try {
    /* 这里执行了的事件处理函数， 比如在一次点击事件中触发setState,那么它将在这个函数内执行 */
    return batchedEventUpdatesImpl(fn, a, b);
  } finally {
    /* try 里面 return 不会影响 finally 执行  */
    /* 完成一次事件，批量更新  */
    isBatchingEventUpdates = false;
  }
}
```

可以分析出流程，在 React 事件执行之前通过 isBatchingEventUpdates=true 打开开关，开启事件批量更新，当事件结束，在通过 isBatchingEventUpdates=false 关闭开关，然后在 scheduleUpdateOnFiber 中根据这个开关来确定是否进行批量更新。

5. **如何在异步环境下，继续开启批量更新模式呢？**

举个例子，如下组件这么写：

```javascript
export default class index extends React.Component {
  state = { number: 0 };
  handleClick = () => {
    this.setState({ number: this.state.number + 1 }, () => {
      console.log("callback1", this.state.number);
    });
    console.log(this.state.number);
    this.setState({ number: this.state.number + 1 }, () => {
      console.log("callback2", this.state.number);
    });
    console.log(this.state.number);
    this.setState({ number: this.state.number + 1 }, () => {
      console.log("callback3", this.state.number);
    });
    console.log(this.state.number);
  };
  render() {
    return (
      <div>
        {this.state.number}
        <button onClick={this.handleClick}>number++</button>
      </div>
    );
  }
}
```

正常的调用输出结果为：**0, 0, 0, callback1 1 ,callback2 1 ,callback3 1**

这里在 handleClick 内加入 setTimetout 模拟异步环境

```javascript
setTimeout(() => {
  this.setState({ number: this.state.number + 1 }, () => {
    console.log("callback1", this.state.number);
  });
  console.log(this.state.number);
  this.setState({ number: this.state.number + 1 }, () => {
    console.log("callback2", this.state.number);
  });
  console.log(this.state.number);
  this.setState({ number: this.state.number + 1 }, () => {
    console.log("callback3", this.state.number);
  });
  console.log(this.state.number);
});
```

加上 setTimeout 之后 输入结果为：**callback1 1 , 1, callback2 2 , 2,callback3 3 , 3**
**--- start**
**为什么 setTimout 会打破批量更新？**
**答：因为如果外层增加了 setTimout ，那么在开启批量更新中 batchedEventUpdates 执行，方法里面会直接执行 try finally，批量更新方法会被延迟调用，先执行到 finally 中，将 **`isBatchingEventUpdates`设置为了 false，然后在 scheduleUpdateOnFiber 中根据这个开关是否进行批量更新。

**---end**

**因此批量更新规则被打破**

那么如何继续开启批量更新？

React-Dom 中提供了批量更新方法 unstable_batchedUpdates ，可以去手动批量更新，可以将上述 setTimeout 内容做如下修改：

```javascript
import ReactDOM from "react-dom";
const { unstable_batchedUpdates } = ReactDOM;
```

```javascript
setTimeout(() => {
  unstable_batchedUpdates(() => {
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
    this.setState({ number: this.state.number + 1 });
    console.log(this.state.number);
  });
});
```

打印： **0 , 0 , 0 , callback1 1 , callback2 1 ,callback3 1**

在实际工作中，unstable_batchedUpdates 可以用于 ajax 数据交互之后，合并多次 setState，或者是多次 useState。原因很简单，所有数据交互都是在异步环境下，如果没有批量更新处理，一次数据交互多次改变 state 会促使视图多次渲染。

6. **如何提升更新优先级呢？**

React-Dom 提供了 flushSync ，flushSync 可以将回调函数中的更新任务，放在一个较高的优先级中。React 设定了很多不同优先级的更新任务。果一次更新任务在 flushSync 回调函数内部，那么将获得一个较高优先级的更新。

利用上面的例子修改一下：

```javascript
handerClick=()=>{
    setTimeout(()=>{
        this.setState({ number: 1  })
    })
    this.setState({ number: 2  })
    ReactDOM.flushSync(()=>{
        this.setState({ number: 3  })
    })
    this.setState({ number: 4  })
}
render(){
   console.log(this.state.number)
   return ...
}
```

打印结果： **3 4 1。**

- 首先 flushSync 将 this.setState({number:3}) 设定为一个高优先级的更新，然后 2 和 3 被批量更新到 3，所以 3 被打印
- 更新 4
- 最后更新 setTimeout 中的 number = 1。

**flushSync 补充说明**：flushSync 在同步条件下没，会合并之前的 setState | useState

7. **如何监听 state 的变化？**

类组件 setState 中，有第二个参数 callback 或者是 生命周期 componentDidUpdate 可以检测到 state 改变或者组件更新。

函数组件中，可以把 state 作为依赖项传入 useEffect 传入第二个参数 deps 中。

8. **类组件中的 setState 和函数组件中的 useState 有什么异同？**

相同点：

- 首先从原理的角度触发，setState 和 useState 更新视图，底层都调用 scheduleUpdateOnFiber 方法，而且事件驱动情况下都有批量更新规则。

不同点：

- 在不是 pureComponent 组件模式下，setState 不会浅比较两次 state 的值，只要调用 setState，在没有其他优化手段的前提下，就会执行更新。但是 useState 中的 dispatchAction 会默认比较两次 state 是否相同，然后决定是否更新组件。
- setState 有专门监听 state 变化的回调函数 callback，可以获取最新的 state；但是函数组件中，只能通过 useEffect 来执行 state 变化引起的副作用。，
- setState 在底层处理逻辑上主要是和老 state 进行合并处理，而 useState 更倾向于重新赋值。

9. **为什么调用改变 state 的函数 dispatch，本次函数上下文中，还是获取不到最新的 state 值？**

```javascript
const [number, setNumber] = React.useState(0);
setNumber(1);
console.log(number); // 0
```

原因很简单，函数组件更新就是函数执行，在函数一次执行过程中，函数内部所有变量重新声明，所以改变的 state，只有在下次一函数组件执行时才会被更新。因此无论怎么打印，都拿不到最新的 state。

## 生命周期

1. **讲讲 React 声明周期？**

生命周期大概可以分为三个流程，分为**组件初始化，组件更新，组件销毁。**

- **初始化阶段： **constructor 执行=>
  - 执行 static getDerivedStateFromProps（返回值将和之前的 state 合并，作为新的 state）
  - => componentWillMount 执行（如果存在 getDerivedStateFromProps 和 getSnapshotBeforeUpdate 就不会执行生命周期 componentWillMount。）
  - => render 函数执行（mountClassInstancec 形成 children，调用 reconcileChildren 方法深度调和 children）。
  - => componentDidMount 执行（上面都是在 render 阶段执行，Mount 在 commit 阶段执行的。）
- **更新阶段： **
  - 执行 componentWillReceiveProps(newProps， newContext)生命周期
  - => 执行 getDerivedStateFromPorps 返回值用于合并 state，生成新的 state
  - => 执行 shouldCcomponentUpdate,传入新的 props ，新的 state，和新的 context，返回值决定是否继续执行 render 函数。
  - => 执行 componentWillUpdate。
  - => 执行 render 函数。
  - => 执行 getSnapshotBeforeUpdate
  - => 执行 componentDidUpdate
- **销毁阶段：**

  - 执行 componentWillUnMount 卸载组件，以及 DOM 元素

- **当 props 不变的前提下，PureComponent 组件能否阻止 componentWillReceiveProps 执行**

答案是否定的，componentWillReceiveProps 生命周期的执行，和纯组件没有关系，纯组件是在 componentWillReceiveProps 执行之后浅比较 props 是否发生变化。所以 PureComponent 下不会阻止该生命周期的执行。

- **在 v16 版本后，为什么 componentWillxxx 钩子前增加了 UNSAFE\_ 前缀**

是因为 stack reconciler 重构为 fiber reconciler 后，render 阶段的任务可能中断/重新开始，对应的组件在 render 极端的生命周期钩子（即 componentWillXXX）可能会触发多次。

### hooks 生命周期

1. **useEffect 和 useLayoutEffect 有什么区别？**

useLayoutEffect 不同的是采用了同步执行，而 useEffect 是异步执行，React 在处理 useEffect 副作用时会像 `setTimeout`回调函数一样，放入任务队列，等主线程任务完成，DOM 更新，js 执行完成，视图绘制完毕，才执行。

- 首先 useLayoutEffect 是在 DOM 绘制之前，这样可以方便修改 DOM ，这样浏览器只会绘制一次，如果修改 DOM 布局放在 useEffect ，那 useEffect 执行是在浏览器绘制视图之后，接下来又改 DOM ，就可能会导致浏览器再次回流重绘。而且由于两次绘制，视图上可能会出现造成闪现突兀的效果
- useLayoutEffect callback 中代码执行会阻塞浏览器绘制。

**一句话概括修改 DOM，改变布局就用 **`**useLayoutEffect **`**，其他情况就用 **`**useEffect**`。

2. **useEFfect 回调函数和 componentDidMount / componentDidUpdate 执行时机有什么区别？**

useEffect 对 React 执行栈来看是异步执行的，componeDidMount / componentDidUpdate 是同步执行的，useEffect 代码不会阻塞浏览器绘制，在时机上 componeDidMount / componentDidUpdate 和 useLayoutEffect 更类似，

## 渲染控制

- [x] - React 几种控制 render 的方法

**1、React 几种控制 render 的方法**

- 第一种就是从父组件直接隔断子组件的渲染，经典就是 memo，缓存 element 对象。
- 第二种就是组件从自身来控制是否 render，比如 PureComponent，shouldComponentUpdate；

### 缓存 React.element 对象，达到不必要的更新

```tsx
/* 子组件 */
function Children({ number }) {
  console.log("子组件渲染");
  return <div>let us learn React! {number} </div>;
}

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberA: 0,
      numberB: 0,
    };
    this.component = <Children number={this.state.numberA} />;
  }
  controllComponentRender = () => {
    /* 通过此函数判断 */
    const { props } = this.component;
    if (props.number !== this.state.numberA) {
      /* 只有 numberA 变化的时候，重新创建 element 对象  */
      return (this.component = React.cloneElement(this.component, {
        number: this.state.numberA,
      }));
    }
    return this.component;
  };
  render() {
    return (
      <div>
        {this.controllComponentRender()}
        <button
          onClick={() => this.setState({ numberA: this.state.numberA + 1 })}
        >
          改变numberA
        </button>
        <button
          onClick={() => this.setState({ numberB: this.state.numberB + 1 })}
        >
          改变numberB
        </button>
      </div>
    );
  }
}
```

上面代码缓存了 `Children`组件，如果`numberA`与`number`不相同也就是`numberA`发生变化的时候，`Children`组件才会渲染。

### 最佳使用 useMemo 缓存实现

```tsx
export default function Index() {
  const [numberA, setNumberA] = React.useState(0);
  const [numberB, setNumberB] = React.useState(0);
  return (
    <div>
      {useMemo(
        () => (
          <Children number={numberA} />
        ),
        [numberA]
      )}
      <button onClick={() => setNumberA(numberA + 1)}>改变numberA</button>
      <button onClick={() => setNumberB(numberB + 1)}>改变numberB</button>
    </div>
  );
}
```

上面 useMemo 依赖了`numberA`变量，如果`numberA`发生改变那么就会更新`Children`组件。

### useMemo 原理

useMemo 会记录上一次 create 的返回值，并把它绑定到函数组件对应 fiber 对象上，只要组件不销毁，缓存值就会一直存在，但是 deps 中如果有一项改变，就会重新执行 create，返回值为新的的值记录到 fiber 对象上。

**原理揭秘：**
每次执行 render 本质上 createElement 会产生的一个新的 props ，这个 props 将作为对应 fiber 的 `pendingProps`，在此 fiber 更新调和阶段，react 会对比 oldProps 和新的 newProps（pendingProps）是否相等，如果相等的函数组件就会放弃子组件的调和更新，从而子组件不会从新渲染。如果上述 elment 对象缓存起来，上面的 props 也就和 fiber 上的 oldProps 指向相同的内存空间， 也就是相等，从而跳过了此次更新。

### PureComponent

纯组件是一种发自组件本身的渲染优化策略，当开发类组件选择了继承 PureComponent ，就意味这要遵循其渲染规则。
规则就是**浅比较 state 和 props 是否相等。**

### **PureComponent 原理及其浅比较原则**

1、原型链上会有 isPureComponent 属性。
2、在更新组件的时候会调用`checkShouldComponentUpdate `函数，这是一个专门检查是否更新的函数。在这个函数里面会判断原型是否存在 `isPureComponent`属性，如果是 PureComponent 会浅比较 props，和 state 是否相等。（`shouldComponentUpdate`的权重要大于 PureComponent）

```javascript
function checkShouldComponentUpdate() {
  if (typeof instance.shouldComponentUpdate === "function") {
    return instance.shouldComponentUpdate(
      newProps,
      newState,
      nextContext
    ); /* shouldComponentUpdate 逻辑 */
  }
  if (ctor.prototype && ctor.prototype.isPureReactComponent) {
    return (
      !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
    );
  }
}
```

shallowEqual 浅比较流程：

- 比较新老 props 和新旧 state 是否相等，如果相等那么就不更新组件。
- 判断新老 state 或者 props，有不是对象或者 null 的，那么直接返回 false，更新组件。
- 通过 Object.keys 将新老 props 或者 新老 state 的属性名 key 变成数组，判断数组长度是否相等。如果属性增加或者减少，那么更新组件。
- 遍历老 props 或者老 state，判断对应的新 props 或新 state，有没有与之对应并且相等的（这个相等是浅比较），如果有一个不相等或者不对应，那么直接返回 false，更新组件。

### **PureComponent 注意事项**

1、避免使用箭头函数。不要给是 PureComponent 子组件绑定箭头函数，父组件的每一次更新 render，如果是箭头函数的话，都会重新生成一个新的箭头函数， PureComponent 对比新老 props 时候，因为是新函数，所以判断不相等，而让组件直接渲染。

```jsx
class Index extends React.PureComponent {}

export default class Father extends React.Component {
  render = () => <Index callback={() => {}} />;
}
```

2、PureComponent 的父组件是**函数组件**的情况，绑定函数要用 useCallback 或者 useMemo 处理，这种情况还是很容易发生的，就是在用 class + function 组件开发项目的时候，如果父组件是函数，子组件是 PureComponent ，那么绑定函数要小心，因为函数组件每一次执行，如果不处理，还会声明一个新的函数，所以 PureComponent 对比同样会失效，如下情况：

```jsx
class Index extends React.PureComponent {}
export default function () {
  const callback =
    function handerCallback() {}; /* 每一次函数组件执行重新声明一个新的callback，PureComponent浅比较会认为不想等，促使组件更新  */
  return <Index callback={callback} />;
}
```

### useMemo 和 useCallback 的区别

useCallback 第一个参数就是缓存内容，useMemo 需要执行第一个函数，返回值为缓存内容。

### shouldComponentUpdate

shouldComponentUpdate 生命周期原理与 PureComponent 相似。它的执行是在 checkShouldComponentUpdate，会执行此生命周期。

### 为什么需要 immutable.js

在使用 PureComponent，shouldComponentUpdate 时，有一种情况就是如果子组件的 props 是引用数据类型，比如 object ，还是不能直观比较是否相等，那么如果想有对比新老属性相等，怎么对比呢，且很多情况下，组件中数据可能来源于服务端交互，对于属性结构是未知的。
`immutable.js`可以解决此问题。immutable.js 不可变状态，对 immutable 对象的任何修改或添加删除操作都会返回一个新的 immutable 对象。鉴于这个功能，所以可以把需要对比的 props 或者 state 数据变成 Immutable 对象，通过对比 Immutable 是否相等，来证明状态是否改变，从而确定是否更新组件。

### React.memo

```javascript
React.memo(Component, compare);
```

Ract.memo 接受两个参数，第一个参数 Component 原始组件本身，第二个参数 compare 是一个函数，可以根据一次更新中 props 是否相同决定原始组件是否重新渲染。
memo 的几个特点是：

- React.memo： 第二个参数返回 true 组件不渲染， 返回 false 渲染。和 shouldComponentUpdate 相反。
- 第二个参数 comppare 不存在是，会用**浅比较原则**处理 props ，相当于 props 版本的 PureComponent。
- memo 同样适合类组件和函数组件

#### memo 原理

被 memo 包裹的组件，element 会被打上`REACT_MEMO_TYPE`类型的 element 标签。在 element 变成 fiber 的时候， fiber 会被标记成 MemoComponent 的类型。
react/src/ReactMemo.js

```javascript
function memo(type, compare) {
  const elementType = {
    $$typeof: REACT_MEMO_TYPE,
    type, // 我们的组件
    compare: compare === undefined ? null : compare, //第二个参数，一个函数用于判断prop，控制更新方向。
  };
  return elementType;
}
```

1、对于 MemoComponent React 内部 MemoComponent 类型的 fiber 有单独的更新处理逻辑 updateMemoComponent
updateMemoComponent：

```typescript
function updateMemoComponent() {
  if (updateExpirationTime < renderExpirationTime) {
    let compare = Component.compare;
    compare = compare !== null ? compare : shallowEqual; //如果 memo 有第二个参数，则用二个参数判定，没有则浅比较props是否相等。
    if (compare(prevProps, nextProps) && current.ref === workInProgress.ref) {
      return bailoutOnAlreadyFinishedWork(
        current,
        workInProgress,
        renderExpirationTime
      ); //已经完成工作停止向下调和节点。
    }
  }
  // 返回将要更新组件,memo包装的组件对应的fiber，继续向下调和更新。
}
```

通过 memo 第二个参数，判断是否执行更新，如果没有那么第二个参数，那么以浅比较 props 为 diff 规则。如果相等，当前 fiber 完成工作，停止向下调和节点，所以被包裹的组件即将不更新。

### 渲染控制流程图

![](/img/react/render.jpg)

## 渲染调优

1. **说说 Suspense 原理 ？**

Suspense 在执行内部可以通过`try{}catch{}`方式捕获异常，这个异常通常是一个 `Promise`，可以在这个 Promise 中进行数据请求工作，Suspense 内部会处理这个 Promise，Promise 结束后，Suspense 会再一次重新 render 把数据渲染出来，达到异步渲染的效果。

![image.png](/img/react/suspense.png)

2. **说说 React.lazy 原理？**

lazy 内部模拟了一个 promiseA 规范场景。完全可以理解 React.lazy 用 Promise 模拟了一个请求数据的过程，但是请求的结果不是数据，而是动态的组件。
React.lazy 利用 Suspense 接收 Promise，执行 Promise，然后再渲染这个特性做到动态加载的。

> react/src/ReactLazy.js

```javascript
function lazy(ctor) {
  return {
    $$typeof: REACT_LAZY_TYPE,
    _payload: {
      _status: -1, //初始化状态
      _result: ctor,
    },
    _init: function (payload) {
      if (payload._status === -1) {
        /* 第一次执行会走这里  */
        const ctor = payload._result;
        const thenable = ctor();
        payload._status = Pending;
        payload._result = thenable;
        thenable.then((moduleObject) => {
          const defaultExport = moduleObject.default;
          resolved._status = Resolved; // 1 成功状态
          resolved._result =
            defaultExport; /* defaultExport 为我们动态加载的组件本身  */
        });
      }
      if (payload._status === Resolved) {
        // 成功状态
        return payload._result;
      } else {
        //第一次会抛出Promise异常给Suspense
        throw payload._result;
      }
    },
  };
}
```

首先 React.lazy 包裹的组件会标记 `REACT_LAZY_TYPE `类型的 element，在调和阶段会变成 LazyComponent 类型的 fiber，React 对 LazyComponent 会有单独的处理逻辑：

- 第一次渲染首先会执行 init 方法，里面会执行 lazy 的第一个函数，得到一个 Promise，绑定 Promise.then 成功回调，回调里得到将要渲染的组件 `defaultExport`，上面的函数当第二个 if 判断的时候，因为此时状态不是 Resolved，所以会走 else，抛出异常 Promise，抛出异常会让当前渲染终止。
- 这个异常 Promise 会被 Suspense 捕获到，Suspense 会处理 Promise，Promise 执行成功回调得到 `defaultExport`，然后 Suspense 发起第二次渲染，第二次 init 方法已经是 Resolved 状态，那么直接返回 result 也就是真正渲染的组件。

![image.png](/img/react/lazy.png)

## 细节优化

- 防抖节流
- 按需引入
- react 动画

## diff 更新

1. **React 是如何 diff children 的呢？**

一共有五个步骤：

- 遍历 children，复用 oldfiber
- 统一删除 oldfiber
- 统一创建 newFiber
- 针对发生移动和更复杂的情况
- 删除剩余没有复用的 oldfiber

![image.png](/img/react/diff.png)

**第一步：遍历 children，复用 oldfiber：**

> react-reconciler/src/ReactChildFiber.js

```javascript
function reconcileChildrenArray(){
    /* 第一步  */
    for (; oldFiber !== null && newIdx < newChildren.length; newIdx++) {
        if (oldFiber.index > newIdx) {
            nextOldFiber = oldFiber;
            oldFiber = null;
        } else {
            nextOldFiber = oldFiber.sibling;
        }
        const newFiber = updateSlot(returnFiber,oldFiber,newChildren[newIdx],expirationTime,);
        if (newFiber === null) { break }
        // ..一些其他逻辑
        }
        if (shouldTrackSideEffects) {  // shouldTrackSideEffects 为更新流程。
            if (oldFiber && newFiber.alternate === null) { /* 找到了与新节点对应的fiber，但是不能复用，那么直接删除老节点 */
                deleteChild(returnFiber, oldFiber);
            }
        }
    }
}
```

- 第一步对于 React.createElement 产生新的 child 组件的数组，首先会遍历数组，因为 fiber 对于同一节是用 sibling 指针指向，所以在遍历 children ，sibling 指针同事会移动，找到 child 对应的 oldFiber。
- 然后通过调用 updataSlot，updateSlot 内部会判断当前 tag 和 key 是否匹配，如果匹配复用老 fiber 形成 新的 fiber，如果不匹配，返回 null，此时 newFiber 等于 null。
- 如果是处于更新流程，找到与新节点对应的老 fiber，但是不能复用 `alternate === null`，那么会删除老 fiber。

**第二步： 统一删除 oldfiber**

```javascript
if (newIdx === newChildren.length) {
  deleteRemainingChildren(returnFiber, oldFiber);
  return resultingFirstChild;
}
```

- 当第一步结束完 `newIdx === newChildren.length`此时证明所有 newChild 已经全部被遍历完，那么剩下没有遍历 oldfiber 也就没有用了，那么调用 deleteRemaningChildren 统一删除剩余 oldfiber。

情况一：节点删除

- **oldChild：A B C D**
- **newChild：A B**

A，B 遍历复制完成，那么 newChild 遍历完成，此时 C D 已经没有用了，那就统一删除 C D。

**第三步：统一创建 newFiber**

```javascript
if (oldFiber === null) {
  for (; newIdx < newChildren.length; newIdx++) {
    const newFiber = createChild(
      returnFiber,
      newChildren[newIdx],
      expirationTime
    );
    // ...
  }
}
```

- 当经历过第一步，oldFiber 为 null ，证明 oldFiber 复用完毕，那么如果还有新的 children，说明都是新的元素，只需要调用 createChild 创建新的 fiber

情况二： 节点增加

- **oldChild: A B**
- **newChild: A B C D**

A B 经过第一步 遍历复制完，oldfiber 没有可以复用的了，那么直接创建 C D

**第四步：针对发生移动和更复杂的情况**

```javascript
const existingChildren = mapRemainingChildren(returnFiber, oldFiber);
for (; newIdx < newChildren.length; newIdx++) {
  const newFiber = updateFromMap(existingChildren, returnFiber);
  /* 从mapRemainingChildren删掉已经复用oldFiber */
}
```

- mapRemainingChildren 返回一个 map，map 里存放剩余的老 fiber 和对应的 key 的映射关系。
- 接下来遍历剩下没有处理的 children，通过 updateFromMap，判断 existingChildren 中有没有可以复用 oldfiber，如果有，那么复用，如果没有，就新创建一个 newFiber。
- 复用的 oldFiber 会从 mapRemainingChildren 删掉。

情况三：节点位置改变

- **oldChild: A B C D**
- **newChild: A B D C**

A B 在第一步被有效复用，第二步和第三步不符合，直接进行第四步， C D 会被复用**。**（existingChildren 判断是否可以复用）

**第五步：删除剩余没有复用的 oldFiber**

```javascript
if (shouldTrackSideEffects) {
  /* 移除没有复用到的oldFiber */
  existingChildren.forEach((child) => deleteChild(returnFiber, child));
}
```

最后一步，没有复用的 oldfiber，统一删除处理。

情况四： 复杂情况（删除 + 新增 + 移动）

- **oldChild: A B C D**
- **newChild: A E D B**

首先 A 节点，在第一步被复用，接下来直接到第四步，遍历 newChild ，E 被创建， D B 从 existingChildren 中被复用， existingChildren 还剩一个 C 在第五步会删除 C ，完成整个流程。

## 事件原理

八个问题：

- [x] - React 为什么有自己的事件系统？
- [x] - 什么是事件合成？
- [x] - 如何实现批量更新？
- [x] - 事件系统如何模拟冒泡阶段和捕获阶段？
- [x] - 如何找到 dom 与之匹配的 fiber ？
- [x] - 为什么不能用 return false 阻止事件的默认行为？
- [x] - 事件是绑定在真实的 dom 上吗？如果不是绑定在哪里？
- [x] - v17 对事件系统有那些改变？

1. **React 为什么有自己的事件系统？**

对于不同的浏览器的浏览器，对事件存在不同的兼容性，React 想实现一个兼容全浏览器的框架，为了实现这个目标就需要创建一个兼容全浏览器的事件系统，以抹平不同浏览器的差异。

2. **什么是事件合成？**

- React 的事件不是绑定在元素上，而是统一绑定在顶部容器上，在 v17 之前是绑定在 document 上，在 v17 改成了 app 容器上。
- 绑定时间并不是一次性绑定所有事件，比如发现 onClick 事件，就会绑定 click 事件，比如发现 onChange 事件，会绑定`【blur、change、focus、keydown、keyup】`多个事件。
- 概念：React 应用中，元素绑定的事件并不是原生事件，而是 React 合成的事件，比如 onClick 是由 click 合成的，onChange 事件由  blur ，change ，focus 等多个事件合成。

3. **如何实现批量更新？**

```javascript
function batchedEventUpdates(fn, a) {
  /* 开启批量更新  */
  isBatchingEventUpdates = true;
  try {
    /* 这里执行了的事件处理函数， 比如在一次点击事件中触发setState,那么它将在这个函数内执行 */
    return batchedEventUpdatesImpl(fn, a, b);
  } finally {
    /* try 里面 return 不会影响 finally 执行  */
    /* 完成一次事件，批量更新  */
    isBatchingEventUpdates = false;
  }
}
```

会调用 `**batchedEventUpdates**`开启批量更新，在 React 事件执行之前通过 `isBatchingEventUpdates = true` 打开开关，开启事件批量更新，当该事件结束，再通过 `isBatchingEventUpdates = false`关闭开关，然后在 scheduleUpdateOnFiber 中根据这个开关确定是否进行批量更新。

4. **事件系统如何模拟冒泡阶段和捕获阶段？**

第一步通过 DOM 获取对应的 fiber，接着从这个 fiber 向上遍历，遇到元素类型 fiber 就会收集事件，用一个数组收集事件：

- 如果遇到捕获阶段事件 onClickCapture，就会 unshift 放在数组前面。模拟事件捕获。
- 如果遇到冒泡阶段事件 onClick，就会 push 到数组后面。模拟事件冒泡。
- 一直收集到 最顶端 app ，形成执行队列，在接下来阶段，一次执行队列里面的函数。

> **react 如何模拟阻止事件冒泡 ？**

> legacy-events/EventBatching.js

```javascript
function runEventsInBatch() {
  const dispatchListeners = event._dispatchListeners;
  if (Array.isArray(dispatchListeners)) {
    for (let i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        /* 判断是否已经阻止事件冒泡 */
        break;
      }
      dispatchListeners[i](event); /* 执行真正的处理函数 及handleClick1... */
    }
  }
}
```

如果在点击事件中 调用了 `e.stopPropagation()`，那么事件源里将有状态证明此次事件已经停止冒泡，下次遍历的时候，`event.isPropagationStopped()`就会返回 true，所以跳出循环，不再冒泡

5. **如何找到 dom 与之匹配的 fiber ？**

事件绑定就是 React 在处理 props 的时候，遇到比如 onClick 事件，就会通过 addEventListener 注册原生事件。

```javascript
export default function Index(){
  const handleClick = () => console.log('点击事件')
  const handleChange =() => console.log('change事件)
  return <div >
     <input onChange={ handleChange }  />
     <button onClick={ handleClick } >点击</button>
  </div>
}
```

上面结构会变成这样
![image.png](/img/react/dom-fiber.png)

然后会根据事件注册事件监听器：

> react-dom/src/client/ReactDOMComponent.js

```javascript
function diffProperties(){
    /* 判断当前的 propKey 是不是 React合成事件 */
    if(registrationNameModules.hasOwnProperty(propKey)){
         /* 这里多个函数简化了，如果是合成事件， 传入成事件名称 onClick ，向document注册事件  */
         legacyListenToEvent(registrationName, document）;
    }
}
```

React 初始化真实 DOM 的时候，用一个随机的 key inernalInstanceKey 指针指向当前 DOM 对应的 fiber 对象，fiber 对象用 stateNode 指向当前的 DOM 元素。

![image.png](/img/react/state-node.png)

** 6. 为什么不能用 return false 阻止事件的默认行为？**

由于在 React 中给元素的事件不是真正的事件处理函数，所以导致 return false 方法在 React 应用中完全失去了作用。
React 事件在 React 应用中，可以用 `e.preventDefault()`阻止事件默认行为，这个方法并非是原生事件的 preventDefault ，由于 React 事件源 e 也是独立组建的，所以 preventDefault 也是单独处理的。

1. **v17 对事件系统有那些改变？**

v17 之前事件绑定在真是的 document 上，v17 版本将事件绑定在应用对应的容器 container 上。

** 7. 事件是绑定在真实的 dom 上吗？如果不是绑定在哪里？**

v17 之前是绑定在真实 document 上的，v17 React 把事件绑定在应用对应的容器 container 上，将事件绑定在同一容器统一管理，防止很多事件直接绑定在原生的 DOM 元素上，造成一些不可控的情况，由于不是绑定在真实 DOM 上，所以 React 需要模拟一套事件流： 事件捕获 -> 事件源 ->事件冒泡，也包括重写一下事件源对象 event。

9. **为什么要用不同的事件插件处理不同的 React 事件?**

不同的事件有不同的处理逻辑；对应的事件源也有所不用，React 事件和事件源是自己合成的，所以不用的事件需要不同的事件插件处理。

## 调度与时间切片

问题：

- [x] - 为什么采用异步调度？
- [x] - 异步调度原理？
- [x] - React 为什么不用 setTimeout？
- [x] - 说说 React 的时间切片？
- [x] - React 如何模拟 requestIdleCallback？
- [x] - 简述一下调度流程？

**为什么采用异步调度？**

使用 react v15 以前的版本对于大型的 React 的应用，会存在一次更新，递归遍历大量的虚拟 DOM，造成占用 js 线程，使用得浏览器没有时间去做一个动画效果，伴随着项目越来越大，项目会越来越卡。

vue 有 template 模板收集依赖的过程，轻松构建响应式，使得在一次更新中，vue 能够迅速响应，找到需要更新的范围，然后以组件粒度更新组件，渲染视图。
但是在 React 无法知道此次更新波及的范围，React 需要选择从根节点开始 diff，查找不同，更新这些不同。

React 似乎无法无法改变从 root 根节点 diff ，既然阻塞了浏览器的绘制，那么更多的时间交给浏览器，浏览器有绘制任务那么交给浏览器，浏览器空闲的时候交给 React 更新执行任务。也就是现在 `scheduler`调度。

1. **异步调度原理？**

React 发生一次更新，会统一走 ensureRootIsScheduled（调度应用）。

- 对于正常更新会走 performSyncWorkOnRoot 逻辑，最后会走 `workLoopSync`。
- 对于低优先级的异步更新会走 performConcurrentWorkOnRoot 逻辑，最后会走 `workLoopConcurrent`。

> react-reconciler/src/ReactFiberWorkLoop.js

```javascript
function workLoopSync() {
  while (workInProgress !== null) {
    workInProgress = performUnitOfWork(workInProgress);
  }
}
```

```javascript
function workLoopConcurrent() {
  while (workInProgress !== null && !shouldYield()) {
    workInProgress = performUnitOfWork(workInProgress);
  }
}
```

他们两个的区别就是异步模式会调用一个 shouldYield()，如果浏览器没有空余时间，shouldYield 会中止循环，直到浏览器有空闲时间后再继续遍历，从而达到中止渲染的目的。这样就解决了一次性遍历大量的 fiber ，导致浏览器没有时间执行一些渲染任务，导致了页面卡顿。

他们两个任务都是由调度器 `scheduleCallback`统一调度的。
正常更新：

```javascript
scheduleCallback(Immediate, workLoopSync);
```

对于异步更新：

```javascript
/* 计算超时等级，就是如上那五个等级 */
var priorityLevel = inferPriorityFromExpirationTime(
  currentTime,
  expirationTime
);
scheduleCallback(priorityLevel, workLoopConcurrent);
```

低优先级异步处理多了一个超时等级概念。

**scheduleCallback 到底做什么了？**

> scheduler/src/Scheduler.js

```javascript
function scheduleCallback(){
   /* 计算过期时间：超时时间  = 开始时间（现在时间） + 任务超时的时间（上述设置那五个等级）     */
   const expirationTime = startTime + timeout;
   /* 创建一个新任务 */
   const newTask = { ... }
  if (startTime > currentTime) {
      /* 通过开始时间排序 */
      newTask.sortIndex = startTime;
      /* 把任务放在timerQueue中 */
      push(timerQueue, newTask);
      /*  执行setTimeout ， */
      requestHostTimeout(handleTimeout, startTime - currentTime);
  }else{
    /* 通过 expirationTime 排序  */
    newTask.sortIndex = expirationTime;
    /* 把任务放入taskQueue */
    push(taskQueue, newTask);
    /*没有处于调度中的任务， 然后向浏览器请求一帧，浏览器空闲执行 flushWork */
     if (!isHostCallbackScheduled && !isPerformingWork) {
        isHostCallbackScheduled = true;
         requestHostCallback(flushWork)
     }

  }

}
```

`taskQueue`存放过期任务。`timerQueue`存放没有过期的任务。

`requestHostTimeout`处理未超时任务。`handleTimeout `会把任务重新放在 `requestHostCallback `调度。
任务过期，并且没有调度中的任务，那么调度 `requestHostCallback`。本质上调度的是 flushwork。
`requestHostCallback`中调用 `workLoop `（这个 workLoop 是调度中的 workLoop，）workLoop 会依次更新过期任务队列中的任务。

**1.1 为什么要采用异步调度？**

对于大型的 React 应用，会存在一次更新，递归遍历大量的虚拟 DOM ，造成占用 js 线程，使得浏览器没有时间去做一些动画效果，伴随着项目太大，项目会越来越卡。
对比 Vue 框架，Vue 有 template 模板收集的过程，轻松构建响应式，使得再一次更新中， Vue 能够迅速响应，找到需要更新的范围，然后以组件粒度更新组件，渲染视图。但是 React 中，一次更新 React 无法知道此次更新的波及范围，所以 React 选择从根节点开始 diff，查找不同，更新这些不同。
React 更新，是交给浏览器控制，如果浏览器有绘制任务那么执行绘制任务，在空闲时间执行更新任务，就能解决卡顿问题了。

2. ** React 为什么不用 setTimeout？**

原因是递归执行 `setTimeout(fn, 0) `时，最后时间间隔会变成 4 毫秒左右，而不是最初的 1 毫秒。因此 React 优先选择并不是 setTimeout 实现方案。选择了 `MessageChannel`。

3. **说说 React 的时间切片？**

浏览器每次执行一次时间循环（一帧）都会做如下事情：处理事件，执行 js，调用 requestAnimation，布局 Layout，绘制 panit，在一帧执行后，如果没有其他事件，那么浏览器会进行消息时间，那么有一些不是特别紧急 React 更新，就可以执行了。

4. **React 如何模拟 requestIdleCallback？**

使用 `MessaageChannel` 模拟 requestIdleCallback。

来模拟一下 MessageChannel 如何触发异步宏任务的。

```javascript
let scheduledHostCallback = null;
/* 建立一个消息通道 */
var channel = new MessageChannel();
/* 建立一个port发送消息 */
var port = channel.port2;

channel.port1.onmessage = function () {
  /* 执行任务 */
  scheduledHostCallback();
  /* 执行完毕，清空任务 */
  scheduledHostCallback = null;
};
/* 向浏览器请求执行更新任务 */
requestHostCallback = function (callback) {
  scheduledHostCallback = callback;
  if (!isMessageLoopRunning) {
    isMessageLoopRunning = true;
    port.postMessage(null);
  }
};
```

在一次更新中， React 会调用 requestHostCallback，把更新任务复制给 scheduledHostCallback，然后 port2 向 port1 发起 postMessage 消息通知。
port1 会通过 onmessage，接受来自 port2 消息，执行更新任务 scheduledHostCallback，然后置空 scheduleHostCallback。

**模拟 requestIdleCallback 使用的是 MessageChannel，setTimeout 会有 4 毫秒左右的延迟。**

**5、简述一下调度流程**
![1](/img/react/scheduled.jpg)
正常更新任务，无论是 workLoop 还是 workLoopConcurrent，都是由调度器 `scheduleCallback`统一调度的，调度器里面（`scheduleCallback`），会创建一个 task，判断当前任务是否超时，如果超时，将任务 task 放入 taskQueue，没有处于调度的任务，然后向浏览器请求一帧（执行`requestHostCallback`），浏览器空闲执行 flushWork。requestHostCallback 内部再执行 workLoop 这里的 WorkLoop 不是 调度调和中的 workLoop，这里的 workLoop 的作用是一次更新过期任务队列中的任务。执行异步任何会走到 handleTimeout 会把延时任务重新放到 requestHostCallback。advanceTimers 用于检查任务是否过期，如果过期了放入 taskQueue 队列中。

## 调和与 fiber

问题：

- [x] - 什么是 fiber？ fiber 架构解决了什么问题？
- [x] - fiber root 和 root fiber 有什么区别？
- [x] - 不同 fiber 之间如何建立起关联的？
- [x] - element，fiber，dom 三种什么关系？
- [ ] - React 调和流程？
- [x] - 两大阶段 commit 和 render 都做了哪些事情？
- [x] - 什么是双缓冲树？ 有什么作用？
- [ ] - Fiber 深度遍历流程？
- [ ] - Fiber 的调和能中断吗？ 如何中断？

1. **什么是 fiber？fiber 架构解决了什么问题？**

什么是 fiber：

- 一个 fiber 就是对象结构，包含了一系列要完成的任务。
- 每一个类型 element 都会有一个与之对应的 fiber 类型。
- 一个 fiber 不会在每次 render 中重新创建，相反，它是一个可以被操作改变的数据结构，保留了组件的状态和 dom。所以操作在每个 fiber 上的任务（更新，删除等）都可以映射到对应的 element。

fiber 可以理解成 React 的虚拟 DOM ；

React 比如一次更新，就会从应用根部递归更新，递归一旦开始，中途无法中断，项目越复杂层级越深，导致更新时间越来越长，给前端交互体验就是卡顿。
引入 fiber 就是为了解决卡顿的问题。
更新 fiber 的过程叫做`Reconciler`调和器，每一个 fiber 都可以作为一个执行单元处理，所以每一个 fiber 可以根据自身的过期时间 `expirationTime`（v17 版本叫做优先级 `lane`）来判断是否还有时间空间执行更新，如果没有时间更新，就要把主动权交给浏览器去渲染，做一些动画，重排（reflow），重绘 （repaints）之类的事情，这样就能给用户感觉不是很卡。
然后等浏览器空余时间，在通过`schedule`调度器再次恢复执行单元，这样就能本质中断了渲染，提高了用户体验。

2. **fiber root 和 root fiber 有什么区别？**

- `fiberRoot：`首次构建应用，创建一个 fiberRoot，作为 react 引用的根基。
- `rootFiber：`如下通过 ReactDOM.render 渲染出来的。如下 Index 可以作为一个 rootFiber，一个 React 应用可以有多 ReactDOM.render 创建的 rootFiber，但是只能有一个 fiberRoot（应用节点）。

```javascript
ReactDOM.render(<Index />, document.getElementById("app"));
```

第一次挂载的过程中，会将 fiberRoot 和 rootFiber 建立关联

> react-reconciler/src/ReactFiberRoot.js

```javascript
function createFiberRoot(containerInfo, tag) {
  /* 创建一个root */
  const root = new FiberRootNode(containerInfo, tag);
  const rootFiber = createHostRootFiber(tag);
  root.current = rootFiber;
  return root;
}
```

3. **不同 fiber 之间如何建立起关联的？**

每一个 element 都会对应一个 fiber，每一个 fiber 都是通过 return，child，sibling 三个属性建立起联系的。

- return：指向父级 fiber 节点。
- child：指向子 fiber 节点。
- sibling：指向兄弟 fiber 节点。

![image.png](/img/react/fiber.png)

1. **element，fiber，dom 三种什么关系？**

- elmenmt 是 React 视图层在代码层级上的表象，也就是开发者写的 jsx 语法。写的元素结构，都会被创建成 element 对象的形式，上面保存了 props，children 等信息。
- DOM 是元素在浏览器上给用户直观的表象。
- fiber 可以说是 element 和真实 DOM 之间的交流枢纽站，一方面每一个类型 element 都会有一个与之对应的 fiber 类型，element 变化引起更新流程都是通过 fiber 层面做一次调和改变，然后对于元，形成新的 DOM 做视图渲染。

结构关系如下：
![image.png](https://cdn.nlark.com/yuque/0/2021/png/1535745/1633851859551-cb2f3eb6-02a3-43e2-9b4d-4100bfcd2673.png#crop=0&crop=0&crop=1&crop=1&height=132&id=JBiFu&margin=%5Bobject%20Object%5D&name=image.png&originHeight=132&originWidth=1313&originalType=binary&ratio=1&rotation=0&showTitle=false&size=125505&status=done&style=none&title=&width=1313)

5. **React 调和流程？**

首先创建 fiberRoot 和 rootFiber，只能有一个根 fiberRoot，rootfiber 是子节点 fiber 可以是多个。初始化会创建一个 fiber 作为 workInProgress，会用 alternate 将新建的 workInProgress 与 current 树关联起来。 在状态更新后，新构建的 Fiber Working Tree，Diff 时，WorkInProgress Tree 将尝试复用之前的节点，也就是使用 alternate 属性关联起来的，之后 workInProgress 将变成 Current Tree，alternate 属性关联过程只有在初始化创建的时候进行（双缓冲技术）。
创建完 fiber 之后，
会进入到 render 阶段，执行 beginWork 和 completeUnitOfWork，beginWork： 向下调和，fiberRoot 按照 child 指针逐层向下调和，根据 类组件 ，函数组件 ，diff 调和子节点，打上不同的 effectTag。completeUnitOfWork：向上归并，流程是自下而上，首先 completeUnitOfWork 会将 effectTag 的 Fiber 节点会被保存在一条被称为 effectList 的单向链表中，在 commit 阶段，将不再需要遍历每一个 fiber ，只需要执行更新 effectList 就可以了。completeWork 阶段对于组件处理 context ；对于元素标签初始化，会创建真实 DOM，将子孙 DOM 节点插入刚生成的 DOM 节点中；会触发 diffproperties 处理 props，比如时间收集，style，className 处理。
然后进入到 commit 阶段
commit 阶段分为 三大部分，beforeMutation（执行 DOM 之前）、Mutation（操作 DOM）、layout（执行 DOM 操作之后）
beforeMutation 阶段：这个阶段还未修改 DOM ，是获取 DOM 快照的最佳时期，如果类组件有 getSnapshotBeforeUpdate，那就执行这个生命周期；并且会异步调用 useEffect，采用异步的模式，是为了防止同步执行时阻塞浏览器做视图渲染。
mutation 阶段：这里主要做 DOM 一些操作，比如置空 ref，对新增元素，更新元素，删除元素，进行真实 DOM 操作。
layout 阶段：这个阶段，对于类组件，会执行 commitLayoutEffectOnFiber 生命周期，setState 的 callback，对于函数组件执行 useLayoutEffect 这个钩子； 如果有 ref，会重新赋值 ref。
总结 commit 阶段就是 执行 effectList，更新 DOM，执行生命周期，获取 ref 操作等。

6. **两大阶段 commit 和 render 都做了哪些事情？**

render 阶段：主要工作是构建 Fiber 树和生成 effectList。

commit 阶段：

- 一方面是对一些生命周期和副作用钩子的处理，比如 componentDidMount，函数组件的 useEffect，useLayoutEffect；
- 另一方面是在一次更新中，添加节点（`placement`），更新节点（`update`）,删除节点（`deletion`），还有一些细节处理，比如 ref 处理；

commit 可以细分为三个阶段：

- `Before mutation 阶段`（执行 DOM 操作前）；
- `mutation`阶段（执行 DOM 操作）；
- `layout`阶段（执行 DOM 操作后）

**before mutation 阶段**

- 因为 before mutation 还没修改真是 DOM，是获取 DOM 快照的最佳时期，如果类组件有 getSnapshotBeforeUpdate，那么会执行这个生命周期。
- 会异步调用 useEffect。

**mutation 阶段**

- 置空 ref 。
- 对新增元素，更新元素，删除元素。进行真是的 DOM 操作。

**layout 阶段 DOM 已经更新完毕**

- commitLayoutEffectOnFiber 对于类组件，会执行生命周期，setState 的 callback，对于函数组件会执行 useLayoutEffect 钩子。
- 如果 ref，会重新赋值 ref。

7. **什么是双缓冲树？ 有什么作用？**

React 用 workInProgress 树（内存中构建的树）和 current 树（渲染树）来实现更新逻辑。
双缓存一个在内存中构建，一个渲染树，两颗树用 alternate 指针相互指向，在下一次渲染的时候，直接复用缓存树作为下一次渲染树，上一次的渲染树又作为缓存树，这样可以防止只用一棵树更新状态的丢失情况，又加快了 DOM 节点的替换与更新。

9. **fiber 调和能中断吗？如何中断?**

可以中断。

## Hooks 原理

问题：

- [ ] ① React Hooks 为什么必须在函数组件内部执行？React 如何能够监听 React Hooks 在外部执行并抛出异常。
- [ ] ② React Hooks 如何把状态保存起来？保存的信息存在了哪里？
- [ ] ③ React Hooks 为什么不能写在条件语句中？
- [ ] ④ useMemo 内部引用 useRef 为什么不需要添加依赖项，而 useState 就要添加依赖项。
- [ ] ⑤ useEffect 添加依赖项 props.a ，为什么 props.a 改变，useEffect 回调函数 create 重新执行。
- [ ] ⑥ React 内部如何区别 useEffect 和 useLayoutEffect ，执行时机有什么不同？

**hooks 出现的本质原因：**

- 1 让函数组件也能做类组件的事，有自己的状态，可以处理一些副作用，能获取 ref，也能做数据缓存。
- 2 解决逻辑复用问题
- 3 放弃面向对象编程，拥抱函数式编程

**hooks 如何和 fiber 建立起关系？**

hooks 初始化流程使用的是 mountState，mountEffect 等初始化节点的 hooks，将 hooks 建立起关系，每一个 hooks 初始化都会执行 mountWorkInProgressHook，下面看一下这个函数。

> react-reconciler/src/ReactFiberHooks.js

```javascript
function mountWorkInProgressHook() {
  const hook = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  if (workInProgressHook === null) {
    // 只有一个 hooks
    currentlyRenderingFiber.memoizedState = workInProgressHook = hook;
  } else {
    // 有多个 hooks
    workInProgressHook = workInProgressHook.next = hook;
  }
  return workInProgressHook;
}
```

函数组件对应 fiber 用 memoizedState 保存信息，每一个 hooks 执行都会产生一个 hooks 对象，保存当前 hooks 信息，不用 hooks 保存的形式不用。每一个 hooks 通过 next 链表建立起关系。

假设在一个组件这么写

```javascript
export default function Index() {
  const [number, setNumber] = React.useState(0); // 第一个hooks
  const [num, setNum] = React.useState(1); // 第二个hooks
  const dom = React.useRef(null); // 第三个hooks
  React.useEffect(() => {
    // 第四个hooks
    console.log(dom.current);
  }, []);
  return (
    <div ref={dom}>
      <div onClick={() => setNumber(number + 1)}> {number} </div>
      <div onClick={() => setNum(num + 1)}> {num}</div>
    </div>
  );
}
```

上面四个 hooks，每个 hooks 内部都会执行 mountWorkInProgressHook，然后每一个 hook 通过 next 和下一个 hook 建立起关系，最后在 fiber 上结构会变成这样。

![image.png](/img/react/work-in-progress.png)

**useMemo 原理：**

**创建：**

```javascript
function mountMemo(nextCreate, deps) {
  const hook = mountWorkInProgressHook();
  const nextDeps = deps === undefined ? null : deps;
  const nextValue = nextCreate();
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}
```

useMemo 初始化执行第一个函数想要缓存的值，将值缓存到 hook 的 memoizedState 上。

更新：

```javascript
function updateMemo(nextCreate, deps) {
  const hook = updateWorkInProgressHook();
  const prevState = hook.memoizedState;
  const prevDeps = prevState[1]; // 之前保存的 deps 值
  if (areHookInputsEqual(nextDeps, prevDeps)) {
    //判断两次 deps 值
    return prevState[0];
  }
  const nextValue = nextCreate(); // 如果deps，发生改变，重新执行
  hook.memoizedState = [nextValue, nextDeps];
  return nextValue;
}
```

useMemo 更新流程就是对比两次的 dep 是否发生变化，如果没有发生变化，直接返回缓存值，如果发生变化，执行第一个函数，重新生成缓存值，缓存下来。

1. **React Hooks 为什么必须在函数组件内部执行？React 如何能够监听 React Hooks 在外部执行并抛出异常？**

hooks 对象本质上是主要以三种处理策略存在 React 中。

- 1 ContextOnlyDispatcher： 第一种形态是防止开发者在函数组件外部调用 hooks ，所以第一种就是报错形态，只要开发者调用了这个形态下的 hooks ，就会抛出异常。（因此 React Hooks 必须写在函数组件里面的原因也在这）

另外两种策略

- 2 HooksDispatcherOnMount： 第二种形态是函数组件初始化 mount ，因为之前讲过 hooks 是函数组件和对应 fiber 桥梁，这个时候的 hooks 作用就是建立这个桥梁，初次建立其 hooks 与 fiber 之间的关系。

- 3 HooksDispatcherOnUpdate：第三种形态是函数组件的更新，既然与 fiber 之间的桥已经建好了，那么组件再更新，就需要 hooks 去获取或者更新维护状态。

一个 hooks 对象应该长成这样：

```javascript
const HooksDispatcherOnMount = { /* 函数组件初始化用的 hooks */
    useState: mountState,
    useEffect: mountEffect,
    ...
}
const  HooksDispatcherOnUpdate ={/* 函数组件更新用的 hooks */
   useState:updateState,
   useEffect: updateEffect,
   ...
}
const ContextOnlyDispatcher = {  /* 当hooks不是函数内部调用的时候，调用这个hooks对象下的hooks，所以报错。 */
   useEffect: throwInvalidHookError,
   useState: throwInvalidHookError,
   ...
}
```

2. **React Hooks 如何把状态保存起来？保存的信息存在了哪里？**

函数组件在 fiber 调和过程中，遇到 FuncitonComponent 类型的 fiber，对于函数组件 fiber，用 memoizedState 保存 hooks 信息，类组件 用 memoizedState 保存 state 信息。

3. **React Hooks 为什么不能写在条件语句中？**

更新 hooks 逻辑和在 fiber 中的双缓存树更新差不多，首先会取出 workInProgress.alternate 里面对应的 hook，然后根据之前的 hooks 复制一份，形成新的 hooks 链表关系。**因此 hooks 为什么通常放在顶部，hooks 不能写在 if 条件语句中，**因为在更新过程中，如果通过 if 条件语句，增加或者删除 hooks，在复用 hooks 过程中，会产生复用 hooks 状态和当前 hooks 不一致问题。

这里修改一下上面的 `Index` 将第一个 hooks 变成条件判断形式：

```javascript
export default function Index({ showNumber }) {
  let number, setNumber;
  showNumber && ([number, setNumber] = React.useState(0)); // 第一个hooks
}
```

第一次渲染 `showNumber = true`，那么第一个 hooks 会渲染，第二个渲染的时候，父组件将 showNumber 设置为 false，那么第一个 hooks 将不会执行，更新逻辑变成这样。

| hook 复用顺序     | 缓存老的 hooks | 新的 hooks |
| ----------------- | -------------- | ---------- |
| 第一次 hooks 复用 | useState       | useState   |
| 第二次 hooks 复用 | useState       | useRef     |

![image.png](/img/react/hook-fiber.png)
第二次复用 hooks 类型不一样 useState !== useRef ，直接就报错。
如果 hooks 写在判断语句中，开启了 Eslint 会提示错误。
![image.png](/img/react/hook-error.png)

1. ** useMemo 内部引用 useRef 为什么不需要添加依赖项，而 useState 就要添加依赖项。**

2. **useEffect 添加依赖项 props.a ，为什么 props.a 改变，useEffect 回调函数 create 重新执行。**

useEffect 的更新流程，无非判断是否执行下一次的 effect 副作用函数

```javascript
function updateEffect(create, deps) {
  const hook = updateWorkInProgressHook();
  if (areHookInputsEqual(nextDeps, prevDeps)) {
    /* 如果deps项没有发生变化，那么更新effect list就可以了，无须设置 HookHasEffect */
    pushEffect(hookEffectTag, create, destroy, nextDeps);
    return;
  }
  /* 如果deps依赖项发生改变，赋予 effectTag ，在commit节点，就会再次执行我们的effect  */
  currentlyRenderingFiber.effectTag |= fiberEffectTag;
  hook.memoizedState = pushEffect(
    HookHasEffect | hookEffectTag,
    create,
    destroy,
    nextDeps
  );
}
```

更新 effect 的过程：

- 就是判断 deps 项有没有发生变化，如果没有发生变化，更新副作用链表就可以了；如果发生变化，更新链表的同时，打执行副作用标签：`fiber => fiberEffectTag，hook => HookhasEffect`。在 commit 阶段就会根据这些标签，重新执行副作用。

函数组件需要更新副作用，会标记 UpdateEffect，至于哪个 effect 需要更新，那就看 hooks 上有没有 HookHasEffect，所以会执行组件副作用钩子。

## Context 原理

...待续
