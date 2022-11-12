---
title: 自定义 Hooks
date: 2021-03-26
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - react
 - Sass
publish: true
# 打赏
showSponsor: true
---

# 自定义 hooks

`hooks` 的本质就是**函数**，而这个函数主要就是**逻辑复用，**`hooks` 的驱动条件是什么呢？也就让他执行的条件⇒`props` 改变、`useState`、`useReducer`的使用是无状态组件更新的条件，从而驱动自定义hooks。

### 目录

- **usePrevous**
- **useRefState**
- **useDocumentTitle** - [https://juejin.cn/post/6844904169539633166#heading-6](https://juejin.cn/post/6844904169539633166#heading-6)
- **useCounter** - 👆
- **useInput** - 👆
- **useRouter** - [https://juejin.cn/post/7028988953915031566](https://juejin.cn/post/7028988953915031566)
- **useDisplayError -** 👆
- **usePrompt** - [https://blog.csdn.net/REX_q/article/details/123048426](https://blog.csdn.net/REX_q/article/details/123048426)
- **useDebounceFn** -  [https://juejin.cn/post/7131704053121155079](https://juejin.cn/post/7131704053121155079)
- **useDebounce** - 👆
- **useDebounceEffect** - 👆

### **usePrevous**

保存值修改前的状态

```tsx
const usePrevious: <T>(x: T) => T = (value) => {
  const ref = useRef<typeof value>(value);
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
```

### useRefState

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

## useLoading

```tsx
import { instance } from '@gm-mobile/mp-request'
import { useEffect, useMemo, useState } from 'react'
import { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios'

export default function useLoading(): boolean {
  const [counter, setCounter] = useState<number>(0)

  const interceptors = useMemo(
    () => ({
      req: (request: AxiosRequestConfig) => {
        setCounter(counter + 1)
        return request
      },
      resp: (response: AxiosResponse) => {
        setCounter(counter - 1)
        return response
      },
      err: (error: AxiosError) => Promise.reject(error),
    }),
    []
  )

  useEffect(() => {
    const reqInterceptors = instance.interceptors.request.use(
      interceptors.req,
      interceptors.err
    )

    const respInterceptors = instance.interceptors.response.use(
      interceptors.resp,
      interceptors.err
    )

    return () => {
      instance.interceptors.request.eject(reqInterceptors)
      instance.interceptors.response.eject(respInterceptors)
    }
  }, [interceptors])

  return counter > 0
}
```
