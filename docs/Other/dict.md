---
title:  字典
date: 2019-12-05
 
tags:
 - 字典

---

## 字典

- vue

1. 定义字典

```js
export const ADD = "add"
export const SUB = "sub"
export const BTNCOUNT = "btnCount"
export const CHANGEONE = "changeone"
export const CHANGETWO = "changetwo"
```

2. 引入

```js
import { ADD, SUB, CHANGEONE, BTNCOUNT, CHANGETWO } from './connn.js'
```

3. 使用

```js
 changeone() {
      this.$store.commit(CHANGEONE);
    },
```

4. 引入

```js
import { ADD, SUB, CHANGEONE, BTNCOUNT, CHANGETWO } from './connn.js'
```

```js
import * as something from './connn.js'
```

5. 使用

```js
[CHANGEONE](state) {
      state.info.name = "张"
    },
```

```js
 [something.CHANGEONE](state) {
      state.info.name = "张"
    },
```
