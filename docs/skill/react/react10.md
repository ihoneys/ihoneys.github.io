---
title: React propTypes/高阶组件
date: 2021-04-09
tags:
 - react
 - propTypes
 - 高阶组件
---
## propTypes

属性验证

1. 引入

```jsx
import PropTypes from 'prop-types';

```

2. 使用

```jsx
App.propTypes = { name: PropTypes.string }
```

```jsx
import React, { Component } from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';

class App extends Component {
    render() {
        return <div>
            1{this.props.n}
        </div>

    }
}
App.propTypes = { name: PropTypes.string }
render(<App name='lilei' />, document.getElementById('root'))
```

## 高阶组件

就是一种设计模式。

- 概念：组件作为函数的参数或者返回值
- 特点：可以封装公用逻辑

```jsx
class App1 extends React.Component {
    render() {
        return (
            <div>
                App1
            </div>
        );
    }
}
let LoggerApp = Logger(App1)

class App2 extends React.Component {
    render() {
        return (
            <div>
                App2
            </div>
        );
    }
}
let LoggerApp1 = Logger(App2)
```

将`App1`和`App2`当作参数传递给`Logger()`组件，再通过`logger()`组件渲染出来

- 案例

```jsx
import React from 'react';
import { render } from 'react-dom';

function Logger(OldCom) {
    //参数是老的组件（App1,App）返回一个新的组件，但是渲染的还是老的组件
    return class extends React.Component {
        constructor() {
            super();
            this.start = Date.now()
        }
        componentDidMount() {
            console.log(Date.now() - this.start + "ms");
        }
        render() {
            // return React.createElement(OldCom, { ...this.props })
            return <OldCom {...this.props} />
        }
    }

}
class App1 extends React.Component {

    render() {
        return (
            <div>
                App1
            </div>
        );
    }
}
let LoggerApp = Logger(App1)

class App2 extends React.Component {

    render() {
        return (
            <div>
                App2
            </div>
        );
    }
}
let LoggerApp1 = Logger(App2)

render(<><LoggerApp /><LoggerApp1 /></>, window.root)
```
