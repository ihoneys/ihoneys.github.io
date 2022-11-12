---
title: React Router翻译文档
date: 2021-10-08
sidebar: 'auto'
tags:
 - react
 - Router文档
 - Router v5
publish: true
# 打赏
showSponsor: true
---
本文档是关于 `React Router v5` 的`API`使用方法介绍

## Hooks

- `React Router` 附带了一些`Hooks`，可以让您访问路由器的状态并从组件内部执行导航。
- 请注意: 您需要使用 `React > = 16.8`才能使用这些`Hooks`！
  - useHistory
  - useLocation
  - useParams
  - useRouteMatch
### useHistory

使用`useHistory`可以访问可用于导航的历史实例。

```jsx
import { useHistory } from "react-router-dom";

function HomeButton() {
  let history = useHistory();

  function handleClick() {
    history.push("/home");
  }

  return (
    <button type="button" onClick={handleClick}>
      Go home
    </button>
  );
}
```

### useLocation

- `useLocation` 钩子返回表示当前 `URL` 的 `location` 对象。您可以把它想象成一个 `useState`，每当 `URL` 发生更改时，它就返回一个新位置。

这可能真的很有用，例如，当你想要触发一个新的“页面视图”事件时，使用你的网页分析工具，每当一个新的页面加载，如下面的例子:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";

function usePageViews() {
  let location = useLocation();
  React.useEffect(() => {
    ga.send(["pageview", location.pathname]);
  }, [location]);
}

function App() {
  usePageViews();
  return <Switch>...</Switch>;
}

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  node
);
```

### useParams

- `useParams` 返回一个包含 `URL` 参数的键/值对的对象。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams
} from "react-router-dom";

function BlogPost() {
  let { slug } = useParams();
  return <div>Now showing post {slug}</div>;
}

ReactDOM.render(
  <Router>
    <Switch>
      <Route exact path="/">
        <HomePage />
      </Route>
      <Route path="/blog/:slug">
        <BlogPost />
      </Route>
    </Switch>
  </Router>,
  node
);
```

### useRouteMatch

- `useRouteMatch` 钩子试图以与 `< route >` 相同的方式匹配当前 URL。它主要用于访问匹配数据，而不需要实际渲染 `< route >` 。

现在，我们不再需要

```jsx
import { Route } from "react-router-dom";

function BlogPost() {
  return (
    <Route
      path="/blog/:slug"
      render={({ match }) => {
        // 用 match做你想做的...
        return <div />;
      }}
    />
  );
}
```

你可以

```js
import { useRouteMatch } from "react-router-dom";

function BlogPost() {
  let match = useRouteMatch("/blog/:slug");

        // 用 match做你想做的...
  return <div />;
}
```

`useRouteMatch` 钩子采用一个参数，这与 `matchPath` 的 `props` 参数相同。它可以是作为字符串的路径名(如上面的例子) ，也可以是 `Route` 接受的具有匹配道具的对象，如下所示:

```js
const match = useRouteMatch({
  path: "/BLOG/:slug/",
  strict: true,
  sensitive: true
});
```

## BrowserRouter标签

使用 `HTML5`历史 API (`pushState、` `replaceState` 和 `popstate` 事件)保持 UI 与 URL 同步的 `< router >` 。

```jsx
<BrowserRouter
  basename={optionalString}
  forceRefresh={optionalBool}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App />
</BrowserRouter>
```

### basename:string

所有位置的基本 URL。如果您的应用程序是从服务器上的子目录服务的，那么您需要将其设置为子目录。格式正确的基名应该有一个斜杠，但是没有斜杠的尾部。

```jsx
<BrowserRouter basename="/calendar">
    <Link to="/today"/> // renders <a href="/calendar/today">
    <Link to="/tomorrow"/> // renders <a href="/calendar/tomorrow">
    ...
</BrowserRouter>
```

### getUserConfirmation:func

用于确认导航的函数。默认使用 window.confirm。

```jsx
<BrowserRouter
  getUserConfirmation={(message, callback) => {
    // this is the default behavior
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }}
/>
```

### forceRefresh:bool

如果为`true`，路由器将使用全页刷新页面导航。您可能希望使用它来模仿传统的服务器呈现应用程序在页面导航之间刷新整页的工作方式。

```jsx
<BrowserRouter forceRefresh={true} />
```

### keyLength:number

Location.key 的长度。缺省值为6。

```jsx
<BrowserRouter keyLength={12} />
```

### children:node

要呈现的子元素。
注意: 在 `React < 16`时，必须使用单个子元素，因为 `render` 方法不能返回多个元素。如果需要多个元素，可以尝试将它们包装在一个额外的 `< div >` 中。

## HashRouter标签

使用 `URL` 的散列部分(即 `window.location.hash`)保持 `UI` 与 `URL` 同步的 `< router >` 。

:::warning 重要提示:
 `Hash history` 不支持 `location.key` 或 `location.state`。在以前的版本中，我们尝试着改变这种行为，但是有些边缘案例我们无法解决。任何需要这种行为的代码或插件都不会起作用。由于这种技术仅用于支持传统浏览器，因此我们鼓励您将服务器配置为使用`< browserhistory >`
:::

```jsx
<HashRouter
  basename={optionalString}
  getUserConfirmation={optionalFunc}
  hashType={optionalString}
>
  <App />
</HashRouter>
```

### basename:string

所有位置的基本 `URL` 。格式正确的基本名称应该有一个斜杠，但是没有斜杠。

```jsx
<HashRouter basename="/calendar"/>
<Link to="/today"/> // renders <a href="#/calendar/today">
```

### getUserConfirmation:func

用于确认导航的函数。默认使用 `window.confirm`

```jsx
<HashRouter
  getUserConfirmation={(message, callback) => {
    // this is the default behavior
    const allowTransition = window.confirm(message);
    callback(allowTransition);
  }}
/>
```

### hashType:string

用于 `window.location.hash` 的编码类型如下:

- `slash` - 创建类似 `#/` 和 `#/sunshine/lollipops`的 `hashes`
- `noslash` - 创建类似  `#` 和 `#sunshine/lollipops`的 `hashes`
- `hashbang` - 创建 `ajax crawlable` (谷歌弃用) 类似 `#!`/ 和 `#!/sunshine/lollipops`的 `hashes`
默认为“斜杠（slash）” .

### children:node

要呈现的单个子元素。

## Link标签

提供应用程序周围的声明性、可访问的导航。

```jsx
<Link to="/about">About</Link>
```

### to:string

`Link`标签上的字符串表示形式，通过连接位置的路径名、搜索和 `hash` 属性创建。

```jsx
<Link to="/courses?sort=name" />
```

### to:object

可以具有以下任何属性的对象:

- `pathname`:  表示要链接到的路径的字符串
- `search`:  表示查询参数的字符串
- `hash`:  在 `URL` 中加入的散列，例如`#a-hash`.
- `state`:  状态持续到 `location` .

```jsx
<Link
  to={{
    pathname: "/courses",
    search: "?sort=name",
    hash: "#the-hash",
    state: { fromDashboard: true }
  }}
/>
```

### to:function

当前位置作为参数传递到的函数，它应该以字符串或对象的形式返回位置表示

```jsx
<Link to={location => ({ ...location, pathname: "/courses" })} />
```

```jsx
<Link to={location => `${location.pathname}?sort=name`} />
```

### replace:bool

如果为 `true`，则单击该链接将替换历史堆栈中的当前条目，而不是添加新条目。

```jsx
<Link to="/courses" replace />
```

### innerRef:fun

从 `React Router 5.1`开始，如果你正在使用 `React 16`，你不应该需要这个支撑，因为我们将引用转发到底层 `< a >` 。使用一个正常的裁判代替。

允许访问组件的基础参考文档。

```jsx
<Link
  to="/"
  innerRef={node => {
    // `node` refers to the mounted DOM element
    // or null when unmounted
  }}
/>
```

### innerRef:RefObject

从 `React Router 5.1`开始，如果你正在使用 `React 16`，你不应该需要这个支撑，因为我们将引用转发到底层 `< a >` 。使用一个正常的裁判代替。

使用 `React.createRef` 获取组件的基础 `ref`。

```jsx
let anchorRef = React.createRef()

<Link to="/" innerRef={anchorRef} />
```

### component:React.Component

如果你想利用你自己的导航组件，你可以简单地通过组件道具传递它。

```jsx
const FancyLink = React.forwardRef((props, ref) => (
  <a ref={ref}>💅 {props.children}</a>
))

<Link to="/" component={FancyLink} />
```

### others

你也可以传递你想要在 `< a >` 上的道具，比如 `title`、 `id`、 `className` 等等。

## NavLink标签

一个特殊版本的 `< link >` ，当它与当前 URL 匹配时，它将向所呈现的元素添加样式属性。

```jsx
<NavLink to="/about">About</NavLink>
```

### activeClassName:string

当元素处于活动状态时提供该元素的类。默认给定的类是活动的。这将与 `className` 道具相结合。

```jsx
<NavLink to="/faq" activeClassName="selected">
  FAQs
</NavLink>
```

### activeStyle:object

当元素处于活动状态时应用于该元素的样式。

```jsx
<NavLink
  to="/faq"
  activeStyle={{
    fontWeight: "bold",
    color: "red"
  }}
>
  FAQs
</NavLink>
```

### exact:bool

如果为 `true`，则只有在位置完全匹配时才会应用活动类/样式。

```jsx
<NavLink exact to="/profile">
  Profile
</NavLink>
```

### strict:bool

如果为 `true` ，则在确定位置是否与当前 URL 匹配时，将考虑位置路径名的尾部斜杠。有关更多信息，请参见 `< route strict >` 文档。

```jsx
<NavLink strict to="/events/">
  Events
</NavLink>
```

### isActive:func

用于添加额外逻辑以确定链接是否处于活动状态的函数。如果您不仅仅想验证链接的路径名是否与当前 `URL` 的路径名匹配，那么还应该使用此选项。

```jsx
<NavLink
  to="/events/123"
  isActive={(match, location) => {
    if (!match) {
      return false;
    }

    // only consider an event active if its event id is an odd number
    const eventID = parseInt(match.params.eventID);
    return !isNaN(eventID) && eventID % 2 === 1;
  }}
>
  Event 123
</NavLink>
```

### location:object

`isActive` 比较当前的历史记录位置(通常是当前浏览器的 `URL`)。要与不同的位置进行比较，可以传递位置。

### aria-current:string

活动链接上使用的 `aria-current` 属性的值。可用值为:

- `page`: 用于指示一组分页链接中的一个链接
- `step`:用于指示基于步骤的过程的步骤指示器中的一个链接
- `location`:用于指示视觉上突出显示为流程图当前组成部分的图像
- `date`:用于指示日历中的当前日期
- `time`:用来表示时间表内的当前时间
- `true`:用于指示导航链接是否激活

默认为 `page`。

基于[WAI-ARIA 1.1](https://www.w3.org/TR/wai-aria-1.1/#aria-current)规范

## Prompt标签

从核心[Prompt](https://reactrouter.com/react-router/core/api/Prompt)重新导出

## MemoryRouter标签

一个 `< router >` ，保存你的 `URL`的历史记录在内存中(不读或写地址栏)。在测试和非浏览器环境中很有用，比如 `React Native`。

```jsx
<MemoryRouter
  initialEntries={optionalArray}
  initialIndex={optionalNumber}
  getUserConfirmation={optionalFunc}
  keyLength={optionalNumber}
>
  <App />
</MemoryRouter>
```

### initialEntries:array

历史堆栈中的位置数组。这些可能是具有{路径名、搜索、散列、状态}或简单字符串 url 的成熟的位置对象。

```jsx
<MemoryRouter
  initialEntries={["/one", "/two", { pathname: "/three" }]}
  initialIndex={1}
>
  <App />
</MemoryRouter>
```

### initialIndex:number

initialEntries 数组中的初始位置索引。

### getUserConfirmation:func

用于确认导航的函数。当直接用 `<Prompt>.` 使用 `< memoryrouter >` 时，必须使用此选项。

### keyLength:number

Location.key 的长度。缺省值为6。

```jsx
<MemoryRouter keyLength={12} />
```

### children:node

要呈现的子元素。

注意: 在 `React < 16`时，必须使用单个子元素，因为 `render` 方法不能返回多个元素。如果需要多个元素，可以尝试将它们包装在一个额外的 `< div >` 中。

## Redirect标签

渲染一个 `< redirect >` 将导航到一个新的位置。新位置将覆盖历史堆栈中的当前位置，就像服务器端重定向`(HTTP 3xx)`那样。

```js
<Route exact path="/">
  {loggedIn ? <Redirect to="/dashboard" /> : <PublicHomePage />}
</Route>
```

### to:string

重定向到的 `URL`。`Path-to-regexp@^ 1.7.0`能够理解的任何有效 `URL` 路径。中使用的所有 `URL` 参数都必须由。

```jsx
<Redirect to="/somewhere/else" />
```

### to:object

要重定向到. `pathname` 的位置可以是 `path-to-regexp@^ 1.7.0`能够理解的任何有效 URL 路径。

```jsx
<Redirect
  to={{
    pathname: "/login",
    search: "?utm=your+face",
    state: { referrer: currentLocation }
  }}
/>
```

`State` 对象可以通过 `redirected`-to 组件中的 `this.props.location.state` 访问。这个新的 `referrer` 密钥(不是一个特殊的名称)将通过 `pathname’/Login’`指向的 `Login` 组件中的 `This.props.location.state.referrer` 被访问

### push:bool

如果为真，则重定向将把一个新条目推入历史记录，而不是替换当前条目。

```jsx
<Redirect push to="/somewhere/else" />
```

### from:string

要重定向的路径名。`Path-to-regexp@^ 1.7.0`能够理解的任何有效 `URL` 路径。所有匹配的 `URL` 参数都提供给到中的模式。必须包含到中使用的所有参数。忽略不由 `to` 使用的其他参数。
:::warning 注意:
这只能在渲染 `< switch >` 内部的 `< Redirect >` 时用于匹配位置。详情请参阅  [`<Switch children>`](https://reactrouter.com/react-router/web/api/Switch/children-node)。
:::

```jsx
<Switch>
  <Redirect from='/old-path' to='/new-path' />
  <Route path='/new-path'>
    <Place />
  </Route>
</Switch>

// Redirect with matched parameters
<Switch>
  <Redirect from='/users/:id' to='/users/profile/:id'/>
  <Route path='/users/profile/:id'>
    <Profile />
  </Route>
</Switch>
```

### exact:bool

完全匹配; 等价于`Route.exact`。

:::warning 注意:
 在渲染 `<Switch>`. 内部的  `<Redirect>`时，只能结合 from 和 to 精确匹配一个位置。详情请参阅 [`<Switch children>`](https://reactrouter.com/react-router/web/api/Switch/children-node) 。
:::

```jsx
<Switch>
  <Redirect exact from="/" to="/home" />
  <Route path="/home">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
</Switch>`
```

### strict:bool

严格匹配; 等同于 `Route.strict`。

:::warning 注意:
 在渲染 `<Switch>`内部的  `<Redirect>`时，这只能与 `from` 严格匹配一个位置结合使用。详情请参阅 [`<Switch children>`](https://reactrouter.com/react-router/web/api/Switch/children-node) 。
:::

```jsx
<Switch>
  <Redirect strict from="/one/" to="/home" />
  <Route path="/home">
    <Home />
  </Route>
  <Route path="/about">
    <About />
  </Route>
</Switch>
```

### sensitive:bool

与区分大小写匹配; 等效于 `Route.sensitive`。

## Route标签

`Route` 组件可能是 `React Router` 中最重要的组件，用于理解和学习如何很好地使用它。它最基本的职责是在路径与当前 `URL` 匹配时呈现某些 `UI`。
参考下面的代码:

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

ReactDOM.render(
  <Router>
    <div>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/news">
        <NewsFeed />
      </Route>
    </div>
  </Router>,
  node
);
```

如果应用程序的位置是`/`，那么用户界面层次结构如下:

```jsx
<div>
  <Home />
  <!-- react-empty: 2 -->
</div>
```

如果应用程序的位置是`/news`，那么用户界面层次结构将是:

```jsx
<div>
  <!-- react-empty: 1 -->
  <NewsFeed />
</div>
```

 `React-empty`注释只是 `React` 的 `null` `呈现的实现细节。但是对于我们的目的来说，这是有益的。Route` 在技术上总是`rendered`的，即使其呈现为 `null`。当 `< route >` 的路径与当前 `URL` 匹配时，它将呈现其子级(您的组件)。

如果同一个组件被用作多个 `< route >`  在组件树的同一点上的子组件，`React` 会将其视为同一个组件实例，并且组件的状态将在路由更改之间保留。如果不想这样，在每个路由组件上添加一个唯一的键支撑，将导致 `React` 在路由改变时重新创建组件实例。

### Route render methods

路由渲染方法
建议使用 `< Route >` 渲染某些内容的方法是使用子元素，如上所示。然而，还有一些其他的方法可以用来渲染带有 `< Route >` 的东西。这些应用程序主要用于支持在引入钩子之前使用早期版本的路由器构建的应用程序。

- `<Route component>`

- `<Route render>`

- `<Route children>` function

在给定的`<Route>`上，你应该只使用这些道具中的一个。请看下面他们的解释，了解他们之间的区别。

### Route props

所有三种渲染方法都将通过相同的三路道具

- `match` 匹配
- `location` 位置
- `history` 历史

### component

只有当位置匹配时才渲染 React 组件。它将使用路由道具渲染。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// All route props (match, location and history) are available to User
function User(props) {
  return <h1>Hello {props.match.params.username}!</h1>;
}

ReactDOM.render(
  <Router>
    <Route path="/user/:username" component={User} />
  </Router>,
  node
);
```

当使用组件(而不是下面的 `render` 或 `children`)时，路由器使用 `React.createElement` 从给定组件创建一个新的 `React`元素。这意味着如果你为组件 `prop` 提供一个内联函数，那么每次渲染都会创建一个新组件。这将导致现有组件的卸载和新组件的安装，而不仅仅是更新现有组件。当使用内联函数进行内联渲染时，使用渲染或子支撑(below)。

### render:func

这样就可以方便地进行内联渲染和包装，而无需进行上面解释的不希望的重装。

与使用组件 prop 为您创建一个新的 React 元素不同，您可以在位置匹配时传入一个要调用的函数。渲染道具功能可以访问所有与组件渲染道具相同的路线道具(匹配、位置和历史)。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

// convenient inline rendering
ReactDOM.render(
  <Router>
    <Route path="/home" render={() => <div>Home</div>} />
  </Router>,
  node
);

// wrapping/composing
// You can spread routeProps to make them available to your rendered Component
function FadingRoute({ component: Component, ...rest }) {
  return (
    <Route
      {...rest}
      render={routeProps => (
        <FadeIn>
          <Component {...routeProps} />
        </FadeIn>
      )}
    />
  );
}

ReactDOM.render(
  <Router>
    <FadingRoute path="/cool" component={Something} />
  </Router>,
  node
);
```

:::danger 警告:
 `< route component >` 优先于 `< route render >` ，所以不要在同一 `< route >` 中同时使用这两个组件。
:::

### children:func

有时您需要呈现路径是否与位置匹配。在这些情况下，你可以使用函数`children` 支持。它的工作原理和渲染一模一样，只是不管有没有匹配，它都会被调用。

子渲染道具接收所有与组件和渲染方法相同的路由道具，除非路由无法匹配 URL，否则匹配为空。这允许您根据路由是否匹配来动态调整 UI。在这里，如果路由匹配，我们将添加一个活动类

```jsx
import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Link,
  Route
} from "react-router-dom";

function ListItemLink({ to, ...rest }) {
  return (
    <Route
      path={to}
      children={({ match }) => (
        <li className={match ? "active" : ""}>
          <Link to={to} {...rest} />
        </li>
      )}
    />
  );
}

ReactDOM.render(
  <Router>
    <ul>
      <ListItemLink to="/somewhere" />
      <ListItemLink to="/somewhere-else" />
    </ul>
  </Router>,
  node
);
```

这对`animations:`也很有用:

```jsx
<Route
  children={({ match, ...rest }) => (
    {/* Animate will always render, so you can use lifecycles
        to animate its child in and out */}
    <Animate>
      {match && <Something {...rest}/>}
    </Animate>
  )}
/>
```

:::danger 警告:
 `< route children >` 优先于 `< route component >` 和 `< route render >` ，所以在同一 `< route >` 中不要使用超过一个。
:::

### path:string | string[]

`Path-to-regexp@^ 1.7.0`能够理解的任何有效 `URL` 路径或路径数组。

```jsx
<Route path="/users/:id">
  <User />
</Route>
```

```jsx
<Route path={["/users/:id", "/profile/:id"]}>
  <User />
</Route>
```

没有路径的路由总是会匹配上。

### exact:bool

如果为 true，则仅当路径与 location.pathname 完全匹配时才匹配。

```jsx
<Route exact path="/one">
  <About />
</Route>
```

| path 路径 | location.pathname 位置，路径名 | exact 精确的 | matches 匹配 |
| :-------: | :----------------------------- | :----------: | :----------: |
|   /one    | /one/two                       |     true     |      no      |
|   /one    | /one/two                       |    false     |     yes      |

### strict:bool

如果为 `true`，尾部有斜杠的路径将只匹配带斜杠的 `location.pathname`。当 `location.pathname` 中有额外的 `URL` 段时，这不会产生任何影响。

```jsx
<Route strict path="/one/">
  <About />
</Route>
```

| path 路径 | location.pathname 位置，路径名 | matches 匹配 |
| :-------: | :----------------------------- | :----------: |
|   /one/   | /one                           |      no      |
|   /one/   | /one/                          |     yes      |
|   /one/   | /one/two                       |     yes      |
:::danger 警告:
 `strict` 可用于强制 `location.pathname` 没有尾部斜杠，但为了做到这一点，`strict` 和 `exact` 都必须为 `true`。
:::
| path 路径 | location.pathname 位置，路径名 | matches 匹配 |
| :-------: | :----------------------------- | :----------: |
|   /one    | /one                           |     yes      |
|   /one    | /one/                          |      no      |
|   /one    | /one/two                       |      no      |

### location:object

`<Route>`元素尝试将其路径匹配到当前历史记录位置(通常是当前浏览器 URL)。但是，也可以传递具有不同路径名的位置以进行匹配。

这在需要将 `<Route>` 匹配到当前历史位置以外的位置时非常有用，如 `Animated Transitions` 示例所示。

如果一个 `<Route>` 元素包装在`<Switch>` 中，并与传递给 `<Switch>` 的位置(或当前历史位置)匹配，那么传递给 `<Route>` 的位置支撑将被 `<Switch>` 使用的位置支撑覆盖(这里给出)。

### sensitive:bool

当为 `true` 时，如果路径区分大小写，则匹配。

```jsx
<Route sensitive path="/one">
  <About />
</Route>
```

| path 路径 | location.pathname 位置，路径名 | exact 精确的 | matches 匹配 |
| :-------: | :----------------------------- | :----------: | :----------: |
|   /one    | /one                           |     true     |     yes      |
|   /One    | /one                           |     true     |      no      |
|   /One    | /one                           |    false     |     yes      |

## Router标签

所有路由器组件的通用低级接口。通常应用程序会使用高级路由器来代替:

- `<BrowserRouter>`
- `<HashRouter>`
- `<MemoryRouter>`
- `<NativeRouter>`
- `<StaticRouter>`

使用低级别 `<Router>` 的最常见用例是将自定义历史与诸如 `Redux` 或 `Mobx` 之类的状态管理库同步。请注意，这是不需要使用状态管理库旁边的反应路由器，它只是为深度集成。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router";
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <App />
  </Router>,
  node
);
```

### history:object

用于导航的 [history](https://github.com/ReactTraining/history) 对象。

```jsx
import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";

const customHistory = createBrowserHistory();

ReactDOM.render(<Router history={customHistory} />, node);
```

### children:node

要呈现的子元素。

```jsx
<Router>
  <App />
</Router>
```

## StaticRouter标签

永远不会改变位置的 `<Router>`. 适用于服务器端渲染的项目。

这在服务器端渲染中非常有用，因为用户实际上并没有四处点击，所以位置实际上不会发生变化。因此，它的名字是: `static` 。当您只需要插入一个位置并在呈现输出上作出断言时，它在简单的测试中也很有用

下面是一个节点服务器的例子，它为 `< redirect >`  发送`302`状态代码，为其他请求发送常规 `HTML` 代码:

```jsx
import http from "http";
import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

http
  .createServer((req, res) => {
    // This context object contains the results of the render
    const context = {};

    const html = ReactDOMServer.renderToString(
      <StaticRouter location={req.url} context={context}>
        <App />
      </StaticRouter>
    );

    // context.url will contain the URL to redirect to if a <Redirect> was used
    if (context.url) {
      res.writeHead(302, {
        Location: context.url
      });
      res.end();
    } else {
      res.write(html);
      res.end();
    }
  })
  .listen(3000);
```

### basename:string

所有位置的基本 `URL` 。格式正确的基本名称应该有一个斜杠，但是没有斜杠。

```jsx
<StaticRouter basename="/calendar">
  <Link to="/today"/> {/* renders <a href="/calendar/today">*/}
</StaticRouter>
```

### location:string

服务器接收的 `URL`，可能是节点服务器上的 `req.URL`。

```jsx
<StaticRouter location={req.url}>
  <App />
</StaticRouter>
```

### location:object

定位位置对象 比如 `{ pathname, search, hash, state }`

```jsx
<StaticRouter location={{ pathname: "/bubblegum" }}>
  <App />
</StaticRouter>
```

### context:object

一个普通的 `JavaScript` 对象。在渲染过程中，组件可以向对象添加属性来存储渲染的信息。

```jsx
const context = {}
<StaticRouter context={context}>
  <App />
</StaticRouter>
```

当一个 `< Route >` 匹配时，它将把上下文对象传递给它呈现的组件，作为 `staticContext` 支持。查看服务器渲染指南以获得更多关于如何自己完成此操作的信息。

渲染之后，可以使用这些属性来配置服务器的响应。

```jsx
if (context.status === "404") {
  // ...
}
```

### children:node

要渲染的子元素。
:::warning 注意:
在 `React < 16`时，必须使用单个子元素，因为 `render` 方法不能返回多个元素。如果需要多个元素，可以尝试将它们包装在一个额外的 `< div >` 中。
:::

## Switch标签

只渲染与位置匹配的第一个子节点 `<route>` 或 `<redirect>`的路由

- How is this different than just using a bunch of `<Route>`s?

`< switch >` 是唯一的，因为它只呈现一个路由。相比之下，每一个匹配位置的 `< route >` 都以包含的方式呈现。

不用`<Switch>`包裹的路由（`<Route>`），如果路径有包含现象，就会出现一个页面匹配出多个路由的内容的现象。

考虑一下这些路线:

```jsx
import { Route } from "react-router";

let routes = (
  <div>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/:user">
      <User />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </div>
);
```

如果 `URL` 是`/about`，那么 `< about >` 、 `< user >` 和 `< nomatch >` 将全部呈现，因为它们都匹配路径。这是设计好的，允许我们以多种方式在应用程序中创建 `< route >` ，比如侧边栏和面包屑，引导标签等等。

然而，有时候我们只想选择一条 `<Route>` 来渲染。如果我们在`/about`，我们不希望也匹配`/: user` (或显示我们的`404`页面)。以下是如何使用 `Switch` 的方法:

```jsx
import { Route, Switch } from "react-router";

let routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>
    <Route path="/about">
      <About />
    </Route>
    <Route path="/:user">
      <User />
    </Route>
    <Route>
      <NoMatch />
    </Route>
  </Switch>
);
```

现在，如果我们在`/about`，`< switch >` 将开始寻找匹配的 `< route >` 。`< route path = "/about"/>` 将会匹配 `< switch >` 将停止寻找并进行渲染 `< about >`；类似地，如果我们在`/michael`，那么 `< user >` 将渲染。

这对于动画转换也很有用，因为匹配的 `< route >` 显示在与前一个相同的位置。

```jsx
let routes = (
  <Fade>
    <Switch>
      {/* there will only ever be one child here */}
      <Route />
      <Route />
    </Switch>
  </Fade>
);

let routes = (
  <Fade>
    {/* there will always be two children here,
        one might render null though, making transitions
        a bit more cumbersome to work out */}
    <Route />
    <Route />
  </Fade>
);
```

### location:object

用于匹配子元素而不是当前历史记录位置(通常是当前浏览器 `URL`)的 `location` 对象。

### children:node

所有 `< Switch >` 的子元素都应该是 `< Route >` 或 `< Redirect >` 元素。只会呈现与当前位置匹配的第一个子元素。

`< Route >`元素使用它们的路径支撑进行匹配，而 < 重定向 > 元素使用它们的来自支撑进行匹配。一个没有道具的 `< route >` 或者一个没有道具的 `< redirect >` 将始终匹配当前位置。

当你在 `< switch >` 中包含 `< redirect >` 时，它可以使用 `< route >` 的任何位置匹配道具: `path`，`exact`，和 `strict`。只是道具的化名。

如果一个位置道具给了 `< switch >` ，它将覆盖匹配的子元素上的位置道具.

```jsx
import { Redirect, Route, Switch } from "react-router";

let routes = (
  <Switch>
    <Route exact path="/">
      <Home />
    </Route>

    <Route path="/users">
      <Users />
    </Route>
    <Redirect from="/accounts" to="/users" />

    <Route>
      <NoMatch />
    </Route>
  </Switch>
);
```

## history

本文档中的术语 `history`和`history object`指的是 `history` 包，它是 `React Router` (除了 `React` 本身)仅有的两个主要依赖项之一，并且提供了几种不同的实现，用于在各种环境中管理 `JavaScript` 中的会话历史。

也使用了下列术语:

- `browser history`: 特定于 `dom` 的实现，在支持 `HTML5`历史 `API` 的 `web` 浏览器中非常有用
- `hash history`: 针对遗留 `web` 浏览器的 `dom` 特定实现
- `memory history`: 内存中的历史记录实现，在测试和非 `dom` 环境中非常有用，比如 `React Native`

`history objects`通常具有以下属性和方法:

- `length`: (`number`)`history stack`中条目的数量
- `action`: (`string`)当前操作(`PUSH, REPLACE, or POP`)
- `location`: (`object`)当前位置。可能具有以下属性:
  - `pathname`: (`string`)URL 的路径
  - `search`: (`string`) URL 查询字符串
  - `hash`: (`string`)  URL hash
  - `state`: (`object`)提供给特定位置的状态`push(path, state)`只有在浏览器和内存历史记录中可用
- `push(path, [state])`: (`function`)将新条目推送到`history stack`上
- `replace(path, [state])`: (`function`)替换`history stack`上的当前项
- `go(n)`: (`function`) `go(1)` 前进一个页面 `go(-2)`后退两个页面。
- `gogoBack()`: (`function`)相等于`go(-1)`；后退。
- `goForward()`: (`function`)相等于`go(1)`;前进。
- `block(prompt)`: (`function`)阻止导.(请参阅[the history docs](https://github.com/ReactTraining/history/blob/master/docs/Blocking.md))

### history is mutable

历史对象是可变的。因此，建议访问位置时从渲染道具 `< Route >` ，而不是从 `history.location`。这可以确保您对 `React` 的假设在生命周期挂钩中是正确的。例如:

```jsx
class Comp extends React.Component {
  componentDidUpdate(prevProps) {
    // will be true
    const locationChanged =
      this.props.location !== prevProps.location;

    // INCORRECT, will *always* be false because history is mutable.
    const locationChanged =
      this.props.history.location !== prevProps.history.location;
  }
}
<Route component={Comp} />;
```

根据您正在使用的实现，还可能出现其他属性。详情请参阅[the history documentation](https://github.com/ReactTraining/history/tree/master/docs)。

## location

`location`代表了应用程序现在的位置，你希望它去哪里，甚至是它曾经在哪里。它看起来像这样:

```jsx
{
  key: 'ac3df4', // not with HashHistory!
  pathname: '/somewhere',
  search: '?some=search-string',
  hash: '#howdy',
  state: {
    [userDefined]: true
  }
}
```

路由器会在几个地方提供一个位置对象:

- `Route component` 相当于 `this.props.location`
- `Route render` 相当于 `({ location }) => ()`
- `Route children` 相当于 `({ location }) => ()`
- `withRouter` 相当于 `this.props.location`
它也可以在 `history.location` 上找到，但是你不应该使用它，因为它是可变的。你可以在[history doc](https://reactrouter.com/react-router/web/api/history)中了解更多
`location object`永远不会发生变异，因此您可以在生命周期钩子中使用它来确定导航何时发生，这对于数据获取和动画非常有用。

```jsx
componentWillReceiveProps(nextProps) {
  if (nextProps.location !== this.props.location) {
    // navigated!
  }
}
```

你可以提供位置，而不是字符串到各种地方导航:

- ` Web Link to `
- `Native Link to`
- `Redirect to`
- `history.push`
- `history.replace`

通常你只需要使用一个字符串，但是如果你需要添加一些`location state` ，当应用程序返回到特定的位置时，你可以使用一个位置对象来代替。如果您希望根据导航历史分支 UI，而不是仅仅根据路径(如modals) ，这将非常有用。

```jsx
// usually all you need
<Link to="/somewhere"/>

// but you can use a location instead
const location = {
  pathname: '/somewhere',
  state: { fromDashboard: true }
}

<Link to={location}/>
<Redirect to={location}/>
history.push(location)
history.replace(location)
```

最后，您可以将位置传递给以下组件:

- `Route`
- `Switch`
这将阻止他们使用路由器状态中的实际位置。这对于动画和挂起导航非常有用，或者在任何您想欺骗组件使其在不同于真实位置的位置进行呈现的时候。

## match

`Match` 对象包含有关`< route path >` 如何匹配 `URL` 的信息。 `match` 对象包含以下属性:

- `params`: (object)从与路径的动态段对应的 URL 解析的键/值对
- `isExact`: (boolean)如果整个 URL 匹配(没有尾随字符)
- `path`:(string)用于匹配的路径模式。用于构建嵌套`<Route>`
- `url`:(string)URL 的匹配部分。用于构建嵌套`<Link>`

你可以在不同的地方匹配对象:
`Route component` 相当于 `this.props.match`
`Route render`相当于 `({ match }) => ()`
`Route children`相当于`({ match }) => ()`
`withRouter`相当于`({ match }) => ()`
`matchPath`相当于 `return value`返回值
`useRouteMatch`相当于`return value`返回值

如果 `Route` 没有路径，因此总是匹配，那么您将得到最接近的父匹配。同样的道理也适用于 `wifter`。

### null matches

使用 `children` `prop` 的 `< Route >` 将调用其子函数，即使路径与当前位置不匹配。如果是这种情况，匹配将为 `null`。能够在匹配时呈现 `< Route >` 的内容是有用的，但是这种情况会带来一些挑战。

`resolve` url 的默认方法是将 `match.url`字符串连接到 `relative` 路径。

```jsx
let path = `${match.url}/relative-path`;
```

如果在匹配为 `null` 时尝试执行此操作，则最终会出现 `TypeError`。这意味着当使用 `children` `prop`时，试图连接 `< route >` 内的`relative(相对)`路径是不安全的。
当您在 `< route >` 内部使用无路径的 `< route >` 来生成 `null` 匹配对象时，也会出现类似的情况，但是更加微妙。

```jsx
// location.pathname = '/matches'
<Route path="/does-not-match"
  children={({ match }) => (
    // match === null
    <Route
      render={({ match: pathlessMatch }) => (
        // pathlessMatch === ???
      )}
    />
  )}
/>
```

无路径 `<Route>` 从它们的父级继承它们的匹配对象。如果它们的父匹配为 `null`，那么它们的匹配也将为 `null`。这意味着:

a)任何子路由/链接都必须是绝对的，因为没有父路由可以解析;

b)父匹配为 `null` 的无路径路由需要使用子路由来渲染。

## matchPath

这使您可以使用与 `< Route >` 相同的匹配代码，除了在正常的呈现周期之外，比如在服务器上呈现之前收集数据依赖关系。

```jsx
import { matchPath } from "react-router";

const match = matchPath("/users/123", {
  path: "/users/:id",
  exact: true,
  strict: false
});
```

### pathname

第一个参数是要匹配的路径名。如果你在 `Node.js` 服务器上使用它，那么它应该是 `req.path`。

### props

第二个参数是要匹配的`props`，它们与`Route`接受的匹配`props`相同。它也可以是字符串或字符串数​​组，作为`{path}`的快捷方式:

```jsx
{
  path, // like /users/:id; either a single string or an array of strings
  strict, // optional, defaults to false
  exact, // optional, defaults to false
}
```

### returns

当提供的路径名与路径支持匹配时，它返回一个对象。

```jsx
matchPath("/users/2", {
  path: "/users/:id",
  exact: true,
  strict: true
});

//  {
//    isExact: true
//    params: {
//        id: "2"
//    }
//    path: "/users/:id"
//    url: "/users/2"
//  }
```

当所提供的路径名与路径支柱不匹配时，它返回 `null`。

```jsx
matchPath("/users", {
  path: "/users/:id",
  exact: true,
  strict: true
});

//  null
```

## withRouter

您可以通过 `withrough` 高阶组件访问历史对象的属性和最接近的 `< route >` 匹配。无论何时渲染，`wathetter` 都会将更新的匹配、位置和历史信息传递给包装的组件。

```jsx
import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router";

// A simple component that shows the pathname of the current location
class ShowTheLocation extends React.Component {
  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
  };

  render() {
    const { match, location, history } = this.props;

    return <div>You are now at {location.pathname}</div>;
  }
}

// Create a new component that is "connected" (to borrow redux
// terminology) to the router.
const ShowTheLocationWithRouter = withRouter(ShowTheLocation);
```

- 重要提示

`withRouter` 不像 `React Redux` 的 `connect` 那样订阅位置更改以进行状态更改。而是在位置更改后从`<Router>`组件传播出去后重新渲染。这意味着`withRouter`不会在路由转换时重新呈现，除非其父组件重新呈现。

静态方法和属性

包装组件的所有非反应特定的静态方法和属性都自动复制到`connected`组件。

### Component.WrappedComponent

包装的组件在返回的组件上作为静态属性`WrappedComponent`公开，它可以用于隔离测试组件等。

```jsx
// MyComponent.js
export default withRouter(MyComponent)

// MyComponent.test.js
import MyComponent from './MyComponent'
render(<MyComponent.WrappedComponent location={{...}} ... />)
```

### wrappedComponentRef:func

该函数将作为`ref prop`传递给包装的组件

```jsx
class Container extends React.Component {
  componentDidMount() {
    this.component.doSomething();
  }

  render() {
    return (
      <MyComponent wrappedComponentRef={c => (this.component = c)} />
    );
  }
}
```

(完)

本文档是关于 `React Router v5` 的`API`使用方法介绍

翻译自[这里](https://reactrouter.com/web/api/Hooks)
