---
title: React Router
date: 2021-10-08
sidebar: 'auto'
tags:
 - react
 - Router
publish: true
# 打赏
showSponsor: true
---

## 安装

- 安装 `react-router-dom`

```js
npm install react-router-dom
or
yarn add react-router-dom
```

## 路由模块介绍

- `HashRouter` hash 模式的路由，带 #
- `BrowserRouter`   ??
- `history`:   ??
- `BrowserRouter as Router`:使用`<BrowserRouter>`时引入
- `Redirect`:使用`<Redirect>`时引入
- `NavLink`:使用`<NavLink>`时引入
- `Route`:使用`<Route>`时引入
- `Switch`:使用`<Switch>`时引入
- `Link`:使用`<Link>`时引入
- ...

## 路由使用 -- 标签及其属性

- `<Router>`

作用:包裹路由的容器，放在路由最外层

- `<Switch>`

作用:包裹`Route`标签,包证每次只匹配到一个路由,匹配到路由就不再继续往下匹配了。

路由用`<Switch>`标签包裹后，保证每次只匹配到一个路由，匹配到第一个路由就不再继续往下匹配了。

:::warning 注意：
如果路由`<Route>`不加 `exact` 也不用`Switch`包裹，
就会同时匹配到`/`和你要跳转的路由`/about`
如果不使用`/`作为`path`，可以不加`exact`和`Switch`.
:::
如下：

```jsx
<Switch>
    <Route exact path='/' component={Home}></Route>
    <Route path='/about' component={About}></Route>
</Switch>
```

- `<Route>`

作用:表示路由组件(每一个路由)

路由模式

- `HashRouter`: `hash` 模式的路由，带 `#`;
- `BrowserRouter`:  `history` 模式的路由;

属性和详情
component、exact、strict、sensitive ...

1. `pach`

表示路由的路径  `/home` => `Home`组件

2. `component`

作用:表示该路由对应的是什么组件(路由名)

3. 路由上的属性会通过props传递给组件

4. `exact`

作用:精确匹配(默认是`true`）

`exact`路由的匹配时会匹配前缀，精确匹配 要使用`exact`

```jsx
// 一般和 Switch 共用
<Switch>
    <Route exact path='/' component={Home}></Route>
    <Route path='/about' component={About}></Route>
</Switch>
```

5. `strict`

作用:严格匹配

严格模式下，路由路径`/home/`不能匹配到`/home` ，必须用一致。

```jsx
// Link
<Link to="/home"></Link>
// Route
<Route strict path='/home/' component={Home}></Route>
```

6. `sensitive`

作用:大小写严格匹配

```jsx
// Link
<Link to="/Home"></Link>
// Route
<Route sensitive path='/home' component={Home}></Route>
//   大小写不一致，不能匹配到
```

7. `render`
作用：替代 `react` 组件渲染

8. 路径带参数 `pathname/:value`
路由的路径上携带参数 会被对应组件的 `props` 接收到(如 `/use/3`  `/use/1`).
会有根据多个用户的id访问用户详情的情况（`/use/:id`），`:id`不固定的但是必须传,路径参数(路由所有的(`match`、`location`、 `history`) 会通过`props`传递到组件里面；
参数会传到组件的`props.match.params`上，例如 `props.match.params.id`

```jsx
// 路由标签上传参
    <Route path='/user/:id' component={User}></Route>
// 组件里接收
import React from "react";
function User(props) {
    console.log(props); //组件里接收参数
    console.log(props.location.pathname);
    return (
        <div>{/* 这里通过props使用传递的值 */}
            这是用useParams取到的{props.match.params.id}
            这是当前路径{props.location.pathname}
        </div>
    );
}
export default User;
```

- `props.history` 放的时路由跳转的方法

  - `go(-1)`：值为`1/-2`代表前进或后退几个路由。

  - `push('/about)`：跳转到`/about`

  - `goBack()`：返回；

  - `goForward()`：前进。

```jsx
    <button onClick={() => props.history.push('/about')}>跳转</button>
    <button onClick={() => props.history.goForward()}>前进</button>
```

- `<Link/>` 和 `<NavLink/>`

作用:导航组件

`<Link/>` 和 `<NavLink/>`的`to` 是一样的。

`to` 属性决定往哪里跳转，(其实`<Link>`底层就是`<a/>` `herf`决定往哪里跳，项目例直接用`<a></a>`标签也能跳转路由),匹配的是`<Route/>`的`pach`属性.

`Link` 标签的属性的值

1. `to = 'string'` -- `to = '/home'` 直接写`pathname`可以跟参数
2. `to = object`

```jsx
to={{ pathname: '/home'}}
```

- `pathname`: 表示要链接到的路径的字符串。
- `search`: 表示查询参数的字符串形式。
- `hash`: 放入网址的 `hash`，例如 `#a-hash`。
- `state`: 状态持续到 `location`。通常用于隐式传参（埋点），可以用来统计页面来源

3. `to = {fun()}`

```jsx
 <Link to={location => `${location.pathname}?nam=lili`} />
 <Link to={location => `${location.pathname}?sort=name`} />
```

`<NavLink>`的属性

NavLink属性详情

  1. `activeClassName`: `string` ,激活时的`class`（选中哪个路由哪个class改变）

  2. `activeSytle`: `Object`, 激活时的样式（选中哪个路由哪个样式改变）

  3. `exact` 同上

  4. `strict` 同上


:::warning 注意：
激活的 `navlink` 会自动添加类名 (`class="active"`) 如果设置了 `activeClassName` 则不生效（`class="selected"`）
:::

- `<Redirect>`

作用:重定向
属性
`to`:和`<Link>` 和 `<NavLink>`的`to`属性相同。只是代表输入除已经定义以外的路由时，同义跳转到某一位置。
to属性

```jsx
 <Redirect to='/user'></Redirect>
```

传state属性

```jsx
 <Redirect to={{ pathname: '/login', state: { from: location.pathname } }
    }></Redirect >
```

## 路由Hooks

:::warning
使用路由`Hooks`要`react`版本`16.8`以上。
:::

1. `useHistory` 路由跳转

作用:使用路由`History`模式，跳转路由

```jsx
import React from "react";
// 引入
import { useHistory } from 'react-router-dom'
function Home(props) {
    // 初始化
    let history = useHistory()
    return (
        <div>
            这是home
           {/* 使用 */}
            <button onClick={() => history.push('/about')}>跳转</button>
        </div>
    );
}
export default Home;
```

2. `useParams` 接收参数

作用:在路由组件种接收参数(类组件用`props`传递，函数组件用`props`或`useParams`)

```jsx
import React from "react";
// 组件里引入useParams 这个Hook
import { useParams } from 'react-router-dom';
function Home(props) {
    // 注册或叫初始化 useParams()
    let params = useParams()
    return (
        <div>
            通过useParams取到的{params.id}
            通过props获取的路径{props.location.pathname}
        </div>
    );
}
export default Home;
```

3. `useLocation()` 获取当前的路由

获取当前路由上的值和方法

```jsx
import React from "react";
// 组件里引入useLocation 这个Hook
import { useLocation } from 'react-router-dom';
function Home(props) {
    // 注册或叫初始化 useLocation()
    let route = useLocation()
    console.log(route)
    return (
        <div>
            通过 useLocation 取到的路由信息{route.pathname}
        </div>
    );
}
export default Home;
```

4. `useRouteMatch()` 获取路由匹配信息
用来匹配路由，

参数(和匹配的path的props参数相同):

```jsx
let match = useRouteMatch({
    path:'/home/:id',
    strict:true
    ...
})

```

需要获取路由信息，但是不用渲染出路由的时候，使用这个方法。

## 案例

```jsx
import React from "react";
import {
 Router,
 Switch,
 Route,
 Link
} from "react-router-dom";

export default function App() {
 return (
   <Router>
     <div>
       <nav>
         <ul>
           <li>
             <Link to="/">Home</Link>
           </li>
           <li>
             <Link to="/about">About</Link>
           </li>
           <li>
             <Link to="/users">Users</Link>
           </li>
         </ul>
       </nav>

          {/* A <Switch> looks through its children <Route>s and
           renders the first one that matches the current URL. */}
       <Switch>
         <Route path="/about">
           <About />
         </Route>
         <Route path="/users">
           <Users />
         </Route>
         <Route path="/">
           <Home />
         </Route>
       </Switch>
     </div>
   </Router>
 );
}

function Home() {
 return <h2>Home</h2>;
}

function About() {
 return <h2>About</h2>;
}

function Users() {
 return <h2>Users</h2>;
}
```

## 过渡动画

安装

```jsx
yarn add react-transition-group
```

引入

```jsx
import { TransitionGroup, CSSTransition } from "react-transition-group";
```
