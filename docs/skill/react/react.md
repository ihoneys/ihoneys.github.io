---
id: react
title: React 优化
date: 2021-03-26
categories:
 - 前端框架
tags:
 - react
 - React优化
---

- 减少不必要的渲染

1. 类组件 可以使用 `PureComponent`

```jsx
 class Child2 extends PureComponent{}
```

2. 函数组件 类组件 `React.memo`(组件) `React.memo`是一个高阶组件

```jsx
 let Memochild = React.memo(Child)
```

3. 函数组件 如果子组件依赖父组件的数据可以使用 `useMemo`

```jsx
 let data =useMemo(()=>{
     return {count}
  },[count])
```

4. 函数组件 如果子组件依赖父组件的事件可以使用 `useCallback`

```jsx
  const add = useCallback(() => {
    setconut((count) => count + 1);
  }, []);
```

## 使用hooks实现异步请求

```jsx
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
function App1() {
  const [data, setData] = useState({ hits: [] });
  const [query, setQuery] = useState('redux');
  const [url, setUrl] = useState(
    'https://hn.algolia.com/api/v1/search?query=redux',
  );
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      const result = await axios(url);
      setData(result.data);
      setIsLoading(false);
    };
    fetchData();
  }, [url]);
  return (
    <Fragment>
      <input
        type="text"
        value={query}
        onChange={event => setQuery(event.target.value)}
      />
      <button
        type="button"
        onClick={() =>
          setUrl(`http://hn.algolia.com/api/v1/search?query=${query}`)
        }
      >
        Search
      </button>
      {isLoading ? (
        <div>Loading ...</div>
      ) : (
        <ul>
          {data.hits.map(item => (
            <li key={item.objectID}>
              <a href={item.url}>{item.title}</a>
            </li>
          ))}
        </ul>
      )}
    </Fragment>
  );
}
export default App1;
```
