---
layout: Post
title: React 中 createElement 和 cloneElement 两个 API 的用法和区别 # 博客标题（必须）
subtitle: 学习 TS 知识之后做题巩固 # 博客副标题（可选）
date: 2021-04-28 # 博客日期，会显示在文章头部（可选）
author: Lucas
author_title: 一枚小前端
author_url: https://github.com/ihoneys
author_image_url: img/ihoneys.png
catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）
tags: [React]
---
首先我们来看看这两个 api 的语法
<!--truncate-->

### createElement

```jsx
React.createElement(type, [props], [...children]);
```

`craeteElement`参数：

- 第一个参数：如果是组件类型，会传入对应的类或者函数；如果是 dom 类型，传入 div 或者 span 之类的字符串。
- 第二个参数：一个对象，在 dom 类型中为标签属性，在组件中为 props。
- 其他参数：依次为 children，根据顺序排列。

举个列子：

```
<div>
	<TextComponent />
	<div> createElement </div>
	hello world!
</div>
```

上面的代码会被编译为：

```jsx
React.createElement(
  "div",
  null,
  React.createElement(
    TextComponent,
    null,
    React.createElement("div", null, "createElement"),
    "hello world!"
  )
);
```

使用 createElement 创建一个 dom 元素：

```jsx
React.createElement("div", null, "c");
// 会得到 -> <div>hello world!</div>
```

### cloneElement

这个是 React 提供的一个克隆 API：

```jsx
React.createElement(element, [props], [...children]);
```

举个例子,下面 `MyContianer` 父组件给子组件添加 `ParentState` ，和 `handleClick` 属性：

```jsx
function MyContianer(props) {
  const [count, setCount] = useState(1);
  const handleClick = () => {
    console.log("子元素的点击事件");
  };
  // 这里是给子组件添加 ParentState 和 handleClick 属性
  const childrenProps = React.Children.map(props.children, (child) => {
    console.log(child);
    return React.cloneElement(child, {
      ParentState: count,
      handleClick,
    });
  });
  return <div>{childrenProps}</div>;
}

function MySub(props) {
  return (
    <div onClick={props.handleClick}>
      MySub 父组件给我的 props： {props.ParentState}
    </div>
  );
}
```

```jsx
export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <MyContianer>
        <MySub />
      </MyContianer>
    </div>
  );
}
```

其实这样的写法就是返回元素的 props 是将新的 props 与原始元素的 props 浅层合并后的结果。

### 总结（区别）

可以完全理解为，一个是用来创建 element，另一个是用来修改 element，并返回一个新的 React.element 对象。
