---
title: React Hooks
date: 2021-04-09
tags:
 - react
 - React Hooks
---
# React Hooks API


## React Hook 出现的背景

**react hooks 解决了什么问题？**

先设想一下，如果没有 Hooks，函数组件能够做的 只能接受 props、渲染 UI ，以及触发父组件传递过来的事件。所有逻辑处理在一个类组件中，这样会使 class 类组件内部逻辑错综复杂，每一个组件都有一套自己的状态，相互之间不能复用，即便是 React 之前出现过 mixin 等复用方式，但是伴随出 mixin 模式下隐式依赖，代码冲突覆盖等问题，也不能成为 React 的中流砥柱的逻辑复用方案。所以 React 放弃 mixin 这种方式。

类组件是一种面向对象思想的体现，类组件之间的状态会随着功能增强而变得越来越臃肿，代码维护成本也比较高，而且不利于后期 tree shaking。所以有必要做出一套函数组件代替类组件的方案，于是 Hooks 也就理所当然的诞生了。

所以 Hooks 出现本质上原因是：

- **让函数组件也能做类组件的事，有自己的状态，可以处理一些副作用，能获取 ref ，也能做数据缓存。**
- **解决逻辑复用难的问题。**
- **放弃面向对象编程，拥抱函数式编程。**


让函数组件最大化拥有react全部特性，使开发维护更加健全。

:::tip 提示

- `React Hook`是在`v16.8.0`以后支持的
- 暂时只针对函数组件
- 只在顶层调⽤`Hooks`

  1. `Hooks`的调⽤尽量只在顶层作⽤域进⾏调⽤ 不要在循环，条件或者是嵌套函数中调⽤`Hook`，否则可能会⽆法确保每次组件渲染时都以相同的顺序调⽤`Hook`
  2. 只在函数组件调⽤`Hooks`

:::

`React Hooks`⽬前只⽀持函数组件，所以别在`class`组件或 者普通的函数⾥⾯调⽤`Hook`钩⼦函数

`React Hooks`的应⽤场景如下

  1. 函数组件
  2. ⾃定义`hooks`
函数组件 ⾃定义`hooks` 在未来的版本`React Hooks`会扩展到`class`组件，但是现阶段不能在`class`⾥使⽤。


## Hooks 功能分类
 

- [React Hooks API](#react-hooks-api)
  - [React Hook 出现的背景](#react-hook-出现的背景)
  - [Hooks 功能分类](#hooks-功能分类)
  - [数据更新驱动](#数据更新驱动)
    - [useState](#usestate)
    - [useReducer](#usereducer)
  - [执行副作用](#执行副作用)
    - [useEffect](#useeffect)
    - [useLayoutEffect](#uselayouteffect)
  - [状态派生与保存](#状态派生与保存)
    - [useMemo](#usememo)
    - [useCallback](#usecallback)
  - [hooks 之状态获取与传递](#hooks-之状态获取与传递)
    - [useContext](#usecontext)
    - [useRef](#useref)
    - [useImperativeHandle](#useimperativehandle)
  - [工具hook](#工具hook)
    - [useId](#useid)
    - [useDebugValue](#usedebugvalue)

## 数据更新驱动

### useState

页面需要动态更新，或者说响应式更新重新渲染，那么我们需要用到 useState。它能够让函数组件像类组件一样拥有 state。

```tsx
const [state, setState] = useState(initialState);
```

useState() 返回一个 state，以及更新 state 函数。

initialState 值可以是两种情况，一种是，它可以是非函数，将作为初始化的值；另一种是，它是一个函数，用函数的返回值作为 useState 初始化的值。

**基础用法**

```tsx
import { Button } from "antd";
import { FC, useState } from "react";

const UseStateDemo: FC<{}> = () => {
  /** 声明一个叫 count 的 state 变量 */
  const [count, setCount] = useState(0); // 0作为 count 的初始值
  return (
    <div>
      <h1>useState Demo</h1>
      <h1>useMemo demo</h1>
      <div>{count}</div>

      <Button
        type="primary"
        onClick={() => {
          // 更新 state
          setCount(count + 1);
          console.log(count); // 此时 count 拿不到立即更新的值
        }}
      >
        count++
      </Button>
    </div>
  );
};

export default UseStateDemo;
```

**注意事项**

**地址要改变**，如果 setState 更新函数传入两次的值相同，那么不会触发更新。

```tsx
const Test = () => {
  const [user, setUser] = useState({ name: "honeys", age: 20 }); // 引用状态
  const onClick = () => {
    // 直接改 name 属性，此时 user 的引用地址并没有发生变化，因此点击Click 不会更新
    // react 底层 dispatchAction 会使用 === 判断旧新值是否相等来走更新逻辑
    user.name = "Lucas";
    setUser(user); // 传给setUser的这个对象和前面的是一个对象，地址是一样的

    //直接生成一个新的对象， user 应用地址发生改变，
    // setUser({
    //   ...user, // setState不会帮我们合并属性，需要用这种方式来合并属性：拷贝user的所有属性
    //   name: "Jack"
    // });
  };
  return (
    <div className="App">
      <h1>{user.name}</h1>
      <h2>{user.age}</h2>
      <Button onClick={onClick}>Click</Button>
    </div>
  );
};
```

**可以接受一个函数**

```tsx
const [user, setUser] = useState({ name: "honeys", age: 20 });
const [user, setUser] = useState(()=> { name: "honeys", age: 20 }); // 函数形式
```

因为`js引擎`是不会立即执行函数的，`useState`
接受函数形式，只会在`App第一次执行`
时传给useState的函数被执行，如果写成对象，App每次执行都会去计算。所以写成函数的好处就是：减少多余的计算过程。

对于操作多次 state ，使用函数避免值只更新一次的问题：

```tsx

const Test2 = () => {
  const [num, setNum] = useState(0);
  const onAdd = () => {
    setNum(num + 1); // num 不会变
    setNum(num + 1); // 在当前执行上下文中，num 还是最开始时候的值，所以再 +1 没有效果
    // setNum((num) => num + 1); // 这里 num 只是一个占位符
    // setNum((num) => num + 1); // 函数的形式，可以拿到最新的 num
  };
  return (
    <div className="App">
      <h1>num: {num}</h1>
      <button onClick={onAdd}>+2</button>
    </div>
  );
};
```

因为在 dispatchAction 参数的回调函数中，回调函数的参数能拿到上一次更新最新的值，所以当使用函数的时候更新，可以确保操作多次 state ，能正确更新到页面。

### useReducer

useReducer 是使用 useState 另一种替代方案。

**基础介绍**

```tsx
const [state, dispatch] = useReducer(reducer, initialValue);
```

state 和我们 useState 中的 state 是一样的。

dispatch 及派发更新的函数（dispatchAction），同 setState。

reducer 它是一个函数，可以理解为 redux 中的 reducer，它的函数形式是`(state, action) => newState` 返回一个改变后的 newState，需要注意的是：**newState 不能和旧的 oldState 内存指向引用地址相同，不然组件不会更新。**

**基础用法** 

```tsx
import { Button } from "antd";
import { FC, useReducer } from "react";

interface State {
  value: number;
}

type Action =
  | { type: "increment" }
  | { type: "decrement" }
  | { type: "incrementAmount"; amount: number };

const counterReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "increment":
      return { value: state.value + 1 };
    case "decrement":
      return { value: state.value - 1 };
    case "incrementAmount":
      return { value: state.value + action.amount };
    default:
      return state;
  }
};
const UseReducerDemo: FC<{}> = () => {
  const [state, dispatch] = useReducer(counterReducer, { value: 0 });
  return (
    <div>
      <h1>UseReducerDemo</h1>
      <h2>计算值：{state.value}</h2>
      <Button onClick={() => dispatch({ type: "increment" })}>增加+1</Button>
      <Button onClick={() => dispatch({ type: "decrement" })}>减少-1</Button>
      <Button onClick={() => dispatch({ type: "incrementAmount", amount: 66 })}>
        增加金额
      </Button>
    </div>
  );
};

export default UseReducerDemo;
```

dispatch 接受对应约束走到对应的 case ，返回最新的 value。

## 执行副作用

### useEffect

useEffect 为了弥补函数组件没有生命周期而生的 Hook API，它等同于类组件的 componentDidMount 。组件中初始化调用接口获取数据，通常在 useEffect 中执行，也是我们比较常用的 Hook API 之一，下面看看它的用法。

**基础介绍**

```tsx
useEffect(() => {
    return destory
}, dep)
```

useEffect 需要接收两个参数，一个是逻辑处理函数（callback），第二个是数组用法作为它的依赖项，数组中依赖项值发生改变会从新执行逻辑处理函数中的逻辑。destory 作为下一次执行 callback 之前调用，主要用来清除上一次 callback 产生的副作用。

useEffect 的执行是异步的，callback 的执行时机，会等到主线程任务完成，DOM 更新，js 执行完成，视图绘制完毕，才执行。

**基础使用**

```tsx
import { Button } from "antd";
import React, { useEffect, useRef, useState } from "react";

interface PostData {
  id?: number;
  userId?: number;
  body?: string;
  title?: string;
}

const getPosts: (id: number) => Promise<PostData> = (id) => {
  return new Promise((resolve) => {
    fetch(`http://jsonplaceholder.typicode.com/posts/${id}`).then(
      (response) => {
        resolve(response.json());
      }
    );
  });
};

const UseEffectDemo = () => {
  const [post, setPost] = useState<PostData>({});
  const [id, setId] = useState(1);

  const handleResize = () => {
    console.log("窗口事件监听");
  };

  useEffect(() => {
    /** 定时器 */
    const timer = setInterval(() => console.log("timer"), 1000);

    /** 事件监听 */
    window.addEventListener("resize", handleResize);

    /** 请求数据 */
    getPosts(id).then((res) => {
      setPost(res);
    });

    return () => {
      /** 清除副作用 */
      clearInterval(timer);
      window.removeEventListener("resize", handleResize);
    };
  }, [id]);

  return (
    <div>
      <h1>UseEffect demo</h1>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <h2>{post.title}</h2>
        <div>{post.body}</div>
      </div>
      <Button type="primary" onClick={() => setId(id + 1)}>
        更换文章
      </Button>
    </div>
  );
};

export default UseEffectDemo;
```

如上的代码的功能有：

1、调用 getPosts 接口，拿到数据并渲染到页面中；

2、设置定时器，事件监听；

3、点击更换文章 id 改变，useEffect 依赖项发生改变，从新调用接口获取数据，拿到新的数据渲染；

4、清除定时器，事件监听时间；

**依赖项需要注意的事项**

1、不传

第二个参数可以不传，不会报错，但是会照成无线循环执行callback。

2、传空数组。

callback 里面的逻辑只会在组件挂载执行一次。

3、不为空数组

组件挂载、依赖项改变的时候会执行一次，相当于类组件的 componentDidMount 、componentDidUpdate 的结合。**依赖项为对象或者数组的时候，注意⚠️需要改变引用地址，这样副作用才会从新执行。**

### useLayoutEffect

**基础介绍**

useLayoutEffect 与 useEffect 不同的是，它是同步执行的，另一点 useEffect 执行时机是浏览器渲染之后的，而 useLayoutEffect 是浏览器把真正内容渲染到界面之前，和 componentDidMount 等价，也就是 DOM 更新好了但还未挂载到页面上。

一般应用于初始化更新操作需要操作 DOM 的场景，根据 useLayoutEffect 的执行时间，在当前 callback 内执行DOM操作可避免浏览器回流和重绘，useEffect 是执行在浏览器绘制视图之后的，如果在当前的 callback 操作 DOM ，那么必定触发浏览器的回流和重绘，这样相当于浏览器页面绘制了两次。

**基础用法**

```tsx
import { useEffect, useLayoutEffect, useRef } from "react";

const UseLayoutEffectDemo = () => {
  const h1El = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    console.log("useEffect");
  }, []);

  useLayoutEffect(() => {
    console.log("useLayoutEffect");

    if (h1El.current) {
      h1El.current.style.color = "#C779D0";
    }
  }, []);
  return (
    <div>
      <h1 ref={h1El}>UseLayoutEffect</h1>
    </div>
  );
};

export default UseLayoutEffectDemo;
```

如上代码，console依次的执行顺序“useEffect” 、“useLayoutEffect”，页面DOM挂载钱把 h1 的字体颜色修改。

## 状态派生与保存

### useMemo

当父组件中调用了一个子组件的时候，父组件的 `state` 发生变化，会导致父组件更新，而子组件虽然没有变化但也会更新。

当一个页面内容非常复杂，模块非常多的时候，函数组件会**从头更新到尾，**只要一处改变，所有模块都会进行刷新，这样是显然没有必要的。

我们理想的状态是各个模块只进行自己的更新，不要相互去影响，那么此时用 `useMemo` 是其中一种解决方案。

 `useMemo` 的出现其实就是为了解决父组件中 state 更新，但是子组件没有进行任何操作，给子组件带来不必要的更新。

**语法**

```jsx
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);
```

它返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 值。

它接受两个参数，第一个函数的返回值作为它的 `memoized` 值，第二个参数接收一个数组，当它的依赖项改变时才会重新计算 memoized 值。这种优化有助于便面每次渲染时都进行高开销的计算。

刚才上面说到还可以对防止对子组件不必要的更新，再看看这个例子：

```tsx
import { Button } from "antd";
import { FC, useState } from "react";

const ParentCom: FC<{}> = () => {
  const [count, setCount] = useState(0);
  return (
    <>
			<h1>useMemo demo</h1>
      <div>{count}</div>
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        count++
      </Button>
      <ChildCom />
      <SonCom />
    </>
  );
};

const ChildCom = () => {
  console.log("子组件更新了");
  return <div>Child子组件</div>;
};

const SonCom = () => {
  console.log("孙组件更新了");
  return <div>Son孙组件</div>;
};

export default ParentCom;
```

上面点击 `button` 父组件更新，子组件还有孙组件也会同样执行。这时可以使用 useMemo 进行优化渲染：

```tsx
const ParentCom: FC<{}> = () => {
  const [count, setCount] = useState(0);
  return (
    <>
			<h1>useMemo demo</h1>
      <div>{count}</div>
      <Button type="primary" onClick={() => setCount((count) => count + 1)}>
        count++
      </Button>
      {useMemo(
        () => (
          <ChildCom />
        ),
        []
      )}
      <SonCom />
    </>
  );
};
```

此时再次点击按钮触发更新，子组件没有再次更新。从而减少了不必要的开销。

官方：记住，传入 `useMemo` 的函数会在渲染期间执行。不要再这个函数内部执行不应该在渲染期间内执行的操作，诸如副作用这类的操作属于 `useEffect` 的使用范畴，而不是 `useMemo`。

总结一下 useMemo 的好处：

- 能够减少不必要的循环和不必要的渲染
- 能够减少子组件的渲染次数
- 根据特定的依赖项改变进行更新，可以避免不必要的开销。

**原理**

在讲 useMemo 原理之前，我们先说说 memo，memo 的作用是结合了 pureComponent 纯组件 和 componentShouldUpdate 功能，会对传入的 props 进行一次对比，然后根据第二个函数返回值进行判断哪些props需要更新。

其实 useMemo 与 memo 的理念上差不多，都是判断是否满足当前的限定条件来决定是否执行 callback 函数，只是 useMemo 的第二个参数是一个数组，通过数组里面的依赖项来判定是否更新回调函数。

简单通过代码理解一下

```tsx

const areHookInputsEqual = (oldDeps: Array<any>, newDeps: Array<any>) => {
  if (oldDeps === newDeps) return false;
  for (let i = 0; i < oldDeps.length; i++) {
    if (Object.is(oldDeps[i], newDeps[i])) return false;
  }
  return true;
};
```

对比老的 `oldDeps` 和 新的 `newDeps` 的值是否相等。不相等返回 true 意思就是需要更新。

### useCallback

useMemo 和 useCallback 接受的参数都一样，都是依赖项发生变化后才重新执行，都是返回缓存值，区别在于 useMemo 返回的是函数的运行结果，useCallback 返回的是函数，这个回调函数是经过处理后的，也就是说父组件传递个一个函数给子组件的时候，由于无状态组件每一次都会重新生成新的 props 函数，这样每一次传递给子组件的函数都发生了变化，这时候就会触发子组件更新，这些更新是没有必要的，此时我们就可以通过 useCallback 来处理此函数，然后作为 props 传递给子组件。

**语法**

```tsx
const memoizedCallback = useCallback(
  () => {
    doSomething(a, b);
  },
  [a, b],
);
```

它返回一个 [memoized](https://en.wikipedia.org/wiki/Memoization) 回调函数。

**基础用法**

```tsx
import { Button } from "antd";
import React, { FC, useCallback, useEffect, useState } from "react";

interface ChildrenProps {
  getInfo(value: string): void;
}

const Children: FC<ChildrenProps> = React.memo((props) => {
  console.log("Children");

  useEffect(() => {
    props.getInfo("我是子组件");
  }, []);

  return <div>Children</div>;
});

const UseCallbackDemo: FC<{ id?: number }> = ({ id }) => {
  const [number, setNumber] = useState(0);

  const getInfo = useCallback(
    (sonName: string) => {
      console.log(sonName);
    },
    [id]
  );

  return (
    <div>
      <h1>useCallback demo</h1>
      <Button type="primary" onClick={() => setNumber((num) => num + 1)}>
        增加
      </Button>
      <Children getInfo={getInfo} />
    </div>
  );
};

export default UseCallbackDemo;
```

当点击增加的时候会重新渲染父组件，但是不会重新渲染子组件，因为增加了 useCallback 缓存。如果 getInfo 函数去掉 useCallback 包裹，那么每次点击增加那么就会更新 Children 子组件。函数重新执行都会生成一个新的 getInfo 函数传递给子组件。每次 props 新的和久的对比都不会相等，所以会粗发更新。

注意： 这个函数是父组件传递给子组件的一个函数，防止无关刷新，其次，这个组件必须配合 memo，**否则 不但不会提升性能，还有可能降低性能。**

## hooks 之状态获取与传递

### useContext

通常组件通信，就可以使用 useContext 进行通信，使用 useContext 来获取父组件传递传递过来的 context 值。context 值的来源就是通过组件 Provider 来设置 value 提供给 context。只要 value 值发生变化。

**基础介绍**

1、创建 context 

```tsx
const UserContext = React.createContext(""); 
```

2、提供者 Provider

```tsx
<UserContext.Provider value={"honeys"}>
  <ContextComponent1 />
  <ContextComponent2 />
</UserContext.Provider>
```

3、组件消费

```tsx
/** context 消费方式一 */
const ContextComponent1 = () => {
  const userName = React.useContext(UserContext);
  return (
    <>
      <h2>
        消费方式一: 使用 <b>useContext</b>
      </h2>
      <h3>子组件消费拿到 name :{userName}</h3>
    </>
  );
};
```

**完整的基础使用**

```tsx
import React from "react";

const UserContext = React.createContext("");

/** context 消费方式一 */
const ContextComponent1 = () => {
  const userName = React.useContext(UserContext);
  return (
    <>
      <h2>
        消费方式一: 使用 <b>useContext</b>
      </h2>
      <h3>子组件消费拿到 name :{userName}</h3>
    </>
  );
};

/** context 消费方式二 */

const ContextComponent2 = () => {
  return (
    <>
      <h2>
        消费方式二: 使用组件 <b>ContextValue.Consumer</b>
      </h2>
      <h3>
        <UserContext.Consumer>
          {(contextValue) => {
            return <div>子组件消费拿到 name: {contextValue}</div>;
          }}
        </UserContext.Consumer>
      </h3>
    </>
  );
};

const UseContextDemo = () => {
  return (
    <div>
      <h1>UseContextDemo</h1>
      <UserContext.Provider value={"honeys"}>
        <ContextComponent1 />
        <ContextComponent2 />
      </UserContext.Provider>
    </div>
  );
};

export default UseContextDemo;
```

**多个 context 使用**

```tsx
import React from "react";

const UserContext = React.createContext("");
const AgeContext = React.createContext(0);

/** context 消费方式一 */
const ContextComponent1 = () => {
  const userName = React.useContext(UserContext);
  const ageValue = React.useContext(AgeContext);
  return (
    <>
      <h2>
        消费方式一: 使用 <b>useContext</b>
      </h2>
      <h3>子组件消费拿到 name :{userName}</h3>
      <h3>子组件消费拿到 age :{ageValue}</h3>
    </>
  );
};

/** context 消费方式二 */

const ContextComponent2 = () => {
  return (
    <>
      <h2>
        消费方式二: 使用组件 <b>ContextValue.Consumer</b>
      </h2>
      <h3>
        <AgeContext.Consumer>
          {(age) => (
            <UserContext.Consumer>
              {(name) => {
                return (
                  <div>
                    <div>子组件消费拿到 name: {name}</div>
                    <div>子组件消费拿到 age: {age}</div>
                  </div>
                );
              }}
            </UserContext.Consumer>
          )}
        </AgeContext.Consumer>
      </h3>
    </>
  );
};

const UseContextDemo = () => {
  return (
    <div>
      <h1>UseContextDemo</h1>
      <UserContext.Provider value={"honeys"}>
        <AgeContext.Provider value={18}>
          <ContextComponent1 />
          <ContextComponent2 />
        </AgeContext.Provider>
      </UserContext.Provider>
    </div>
  );
};

export default UseContextDemo;
```

如上代码中新增了 AgeContext ，在消费 context 的方式中，组件嵌套的形式去消费虽然运行没有问题，但是从美观和可读性来讲不太好，更推荐使用 context hook来消费多个context 的问题。

### useRef

[https://juejin.cn/post/6844904174417608712](https://juejin.cn/post/6844904174417608712)

useRef 可以获取当前元素的所有属性，缓存状态，接受一个状态 initialValue 作为初始值，并返回一个可变的对象，cur 对象上只有一个 current 属性。返回的这个对象在组件整个生命周期内都会存在。

**语法**

```tsx
const cur = useRef<any>(initialValue);
console.log(cur.current) // ==> 默认值是 initialValue
```

**基础用法**

**useRef 获取 DOM 元素。**

```tsx
import { useEffect, useRef } from 'react'

const UseRefDemo = () => {
  const inputEl = useRef<HTMLInputElement | null>(null)

  useEffect(() => {
    if (inputEl.current) {
      inputEl.current.focus()
    }
  }, [])
  return (
    <div>
      <h1>useRef demo</h1>
      <input ref={inputEl} />
    </div>
  )
}

export default UseRefDemo
```

上面可以通过 ref 获取  `<input />` DOM 节点，组件运行时会获取焦点。

**useRef 缓存数据，**也可以用 useRef 返回的 ref 对象保存状态，这个值会组件整个生命周期内都会存在，只要组件不销毁，就会一直存在。（我们经常遇到 useState 的闭包问题，拿不到最新的值，就可以自己封装一个 hook ，使用 useRef 来帮助我们拿到最新的值，下面会说到）

```tsx
import { Button } from "antd";
import { useEffect, useRef, useState } from "react";

const usePrevious: <T>(x: T) => T = (value) => {
  const ref = useRef<typeof value>(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};

const UseRefDemo = () => {
  const [number, setNumber] = useState(0);
  const prevNumber = usePrevious(number);

  return (
    <div>
      <h1>useRef demo</h1>
      <div>{`prevNumber: ${prevNumber}`}</div>
      <div>{`currentNumber: ${number}`}</div>
      <Button type="primary" onClick={() => setNumber((num) => num + 1)}>
        增加
      </Button>
    </div>
  );
};

export default UseRefDemo;
```

上面使用 useRef 来保存 number 上一次值。

**解决 useState 拿不到最新值的问题**

下面更新了`number` 值，但是输出的还是上一次的值。

```tsx
const Counter = () => {
  const [number, setNumber] = useState(1);
  const [str, changeStr] = useState("现在数字是1");

  const getNum = () => {
    const newStr = "现在数字是" + number;
    console.log(number);
    changeStr(newStr);
  };

  const changeNumber = () => {
    setNumber(number + 1);
    getNum();
  };

  return (
    <div>
      <h1>useRef demo</h1>
      <Button type="primary" onClick={changeNumber}>
        增加+++
      </Button>
      <div>{number}</div>
      <div>{str}</div>
    </div>
  );
};
```

为了拿到最新值，我们可以整一个 custom hook ，这个 hook 就是借助 useRef 的特性来保存。

**useRefState 能够拥有 useState 特性，并且返回一个 ref 保存当前 state 最新的值**

```tsx
import {
  useState,
  useRef,
  useCallback,
  Dispatch,
  SetStateAction,
  MutableRefObject
} from "react";

const useRefState = <T>(
  initialState: T | (() => T)
): [T, Dispatch<SetStateAction<T>>, MutableRefObject<T>] => {
  const ref = useRef<T>();

  const [state, setState] = useState(() => {
    // 初始化
    const value =
      typeof initialState === "function"
        ? (initialState as () => T)()
        : initialState;
    ref.current = value;
    return value;
  });

  const setValue = useCallback((value: any) => {
    if (typeof value === "function") {
      setState((prevState) => {
        const finalValue = value(prevState);
        ref.current = finalValue;
        return finalValue;
      });
    } else {
      ref.current = value;
      setState(value);
    }
  }, []);

  return [state, setValue, ref];
};

export default useRefState;
```

**使用**

```tsx
const Counter = () => {
  const [number, setNumber, numRef] = useRefState(1);
  const [str, changeStr] = useState("现在数字是1");

  const getNum = () => {
    const newStr = "现在数字是" + numRef.current;
    console.log(numRef); // ==> {current: 2}
    changeStr(newStr);
  };

  const changeNumber = () => {
    setNumber(number + 1);
    getNum();
  };

  return (
    <div>
      <h1>useRef demo</h1>
      <Button type="primary" onClick={changeNumber}>
        增加+++
      </Button>
      <div>{number}</div>
      <div>{str}</div>
    </div>
  );
};
```

### useImperativeHandle

**基础介绍**

useImperativeHandle 可以配合 forwardRef 自定义暴露给父组件实例值。Vue 中是可以直接通过绑定 ref 就能够直接拿到子组件的实例方法 methods 里面的时间。而在 React 中需要配合使用useImperativeHandle + forwardRef 转发这样才能够实现。

**基础用法**

```tsx
import { Button } from "antd";
import {
  forwardRef,
  ForwardRefRenderFunction,
  useImperativeHandle,
  useRef
} from "react";

interface RefProps {
  getValue(): string;
}

const Children: ForwardRefRenderFunction<RefProps> = (props, forwardRef) => {
  useImperativeHandle(
    forwardRef,
    () => ({
      getValue: () => "从子组件暴露方法"
    }),
    []
  );
  return <div>Children</div>;
};

const ForwardChildren = forwardRef(Children);

const UseImperativeHandleDemo = () => {
  const childrenEl = useRef<RefProps>(null);

  const onButtonClick = () => {
    console.log(childrenEl.current?.getValue()); // ===> '从子组件暴露方法'
  };
  return (
    <div>
      <h1>UseImperativeHandleDemo</h1>
      <ForwardChildren ref={childrenEl} />
      <Button onClick={onButtonClick}>子组件实例方法拿值</Button>
    </div>
  );
};

export default UseImperativeHandleDemo;
```

上面代码通过 useImperativeHandle 自定义暴露 `getValue` 方法，再通过 forwardRef 转发，父组件拿到子组件暴露的方法，点击按钮输出 getValue 方法返回的值。

❓或者有些疑惑，useImperativeHandle 和直接 ref.current 赋值有什么区别呢？

如果你只用 forwardRef 的话，只能将这个 ref 转到某个子组件 dom 上，但是使用useImperativeHandle，可以自定义 ref.current 访问到的具体内容，不仅仅是 dom ，**也可以是子组件一些方法。**

## 工具hook

### useId

```tsx
...
```

### useDebugValue

```tsx
...
```