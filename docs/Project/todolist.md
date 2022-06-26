---
title: react TodoList
date: 2019-10-05
 
categories:
 - 项目
tags:
 - react
 - TodoList

---

## react + redux 实现todolist

```js
// App.jsx
import React, { useState } from 'react'
import Store from './store'
import Header from './Header'
import Runing from './Runing'
import End from './End'
export default function App() {

    const [data, setData] = useState(Store.getState())
    Store.subscribe(() => {
        setData(Store.getState())
    })
    return (
        <div>
            <Header />
            <Runing />
            <End />
        </div>
    )
}
```

```js
// Header
import React from 'react'
import Store from './store'
export default function Header(props) {
    const pushRun = (event) => {
        if (event.keyCode === 13) {
            Store.dispatch({
                type: 'pushRun',
            })
        }
    }
    const changeValue = ({ target }) => {
        Store.dispatch({
            type: 'ChangeValue',
            value: target.value
        })
    }
    return (
        <div>
            <input onKeyUp={pushRun} onChange={changeValue} value={props.name} type="text" />
        </div>
    )
}
```

```js
// Runing.jsx
import React from 'react'
import Store from './store';
export default function Runing() {
    const { runs } = Store.getState()
    const Done = (index) => {
        console.log('完成', index);
        Store.dispatch({
            type: 'goEnd',
            index
        })
    }
    return (
        <div>
            <h2>进行中 {runs.length} 个</h2>
            <ul >
                {runs.map((item, index) => {
                    return (
                        <li key={index}> <input checked={false} onChange={() => Done(index)} type="checkbox" />{item}</li>
                    )
                })}
            </ul>
        </div>
    )
}
```

```js
// End.jsx
import React from 'react'
import Store from './store'
export default function End() {
    let { ends } = Store.getState()
    const goRun = (index) => {
        Store.dispatch({
            type: 'goRun',
            index
        })
    }
    const Del = (index) => {
        Store.dispatch({
            type: "delItem",
            index
        })
    }
    return (
        <div>
            <h2>已完成  {ends.length} 个</h2>
            <ul >
                {ends.map((item, index) => { return <li key={index}><input onChange={() => goRun(index)} checked={true} type='checkbox' />{item} <button onClick={() => Del(index)}>删除</button></li> })}
            </ul>
        </div>
    )
}
```

```js
// 仓库 store.js
import { createStore } from 'redux'
import reducer from './reducer'
const store = createStore(reducer)
export default store
```

```js
// reducer.js
const initData = {
    value: '',
    runs: [],
    ends: []
}
const reducer = (state = initData, action) => {
    const data = JSON.parse(JSON.stringify(state))
    switch (action.type) {
        case 'ChangeValue':
            data.value = action.value
            data.valeu = ''
            return data
        case 'pushRun':
            data.runs.push(data.value)
            return data
        case 'goEnd':
            let runsItem = data.runs[action.index]
            data.ends.push(runsItem)
            data.runs.splice(action.index, 1)
            return data
        case 'goRun':
            let endsItem = data.ends[action.index]
            data.runs.push(endsItem)
            data.ends.splice(action.index, 1)
            return data
        case 'delItem':
            data.ends.splice(action.index, 1)
            return data
        default:
            return state
    }
}
export default reducer
```
