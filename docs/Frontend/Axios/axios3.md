---
title: Axios 全局配置、实例分离写法和拦截器
date: 2019-08-26
 
tags:
 - 前端基础
 - Axios

---

## Axios 全局配置

- baseURL、timeout

```js
// 配置全局属性
axios.default.baseURL ='https://localhost.com';
axios.default.timeout ='5000';
// 在全局配置基础上从/login请求
axios.get('/login').then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
axios.post('/user').then(res=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})
```

## Axios 实例

```html
<script src="//axios"></script>
<script>

let NewAxios = axios.create({
    baseURL:'http://localhost.com',
    timeout:5000
    });
let NewAxios1 = axios.create({
    baseURL:'http://localhost.com',
    timeout:50
    })
NewAxios({
    url:'/getlist'
    }).then(res=>{
        console.log(res)
    })
NewAxios1({
    url:'/getlist'
    }).then(res=>{
        console.log(res)
    })
</script>
```

```js
import axios from 'axios'
const instance = axios.create({
  baseURL: "http://123.207.32.32:8000",
  timeout: 5000
})
instance({
  url: "/home/multidata"
}).then(res => {
  console.log(res);
})
instance({
  url: "/home/data",
  params: {
    type: "pop",
    page: 2
  }
}).then(res => {
  console.log(res);
})
const instance2 = axios.create({
  baseURL: "http://123.207.32.32:8000"
})
```

## 实例式抽离封装方法

### 初级写法

1. request.js (请求根文件)

```js
import axios from 'axios'
export function request(config, success, failure) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 1000,
  })
  instance(config)
    .then(res => {
      success(res)
    })
    .catch(err => {
      failure(err)
    })
}
```

2. 页面引入并使用

```js
import { request } from "./network/request";
clicks: function () {
      request({
          url: "/home",
        },
        (res) => {
          console.log(res);
        });
    },
```

或者

1. request.js (请求根文件)

```js
import { request } from "./network/request";
export function request2(config) {
  const instance = axios.create({
    baseURL: "http://123.207.32.32:8000",
    timeout: 1000,
  })
  instance(config.baseConfig)
    .then(res => {
      config.success(res)
    })
    .catch(err => {
      config.failure(err)
    })
}
```

2. 页面引入并使用

```js
import { request } from "./network/request";
clicks: function () {
      request({
    baseConfig: {},
    success: function (res) {
      console.log(res);
    },
    failure: function (err) {
      console.log(err);
     },
    });
    },
```

### 中级写法

1. request.js (请求根文件)

```js
export function request3(config) {
  return new Promise((resolve, reject) => {
    const instance = axios.create({
      baseURL: "http://",
      timeout: 10000,
    })
    instance(config)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err)
      })
  })
}
```

2. 页面引入并使用

```js
import { request } from "./network/request";

clicks: function () {
      request({
    url: "http://",
  })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
    },
```

### 高级写法

1. request.js (请求根文件)

```js
import axios from 'axios'
export function request(config) {
  const instance = axios.create({
    baseURL: "http://",
    timeout: 10000,
  })
  return instance(config)
}
```

2. 页面引入并使用

```js
import { request } from "./network/request";

clicks: function () {
      request({
    url: "http://",
  }).then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.log(err);
    });
    },
```

## Axios 拦截器

`axios`给我们提供了两个方向的拦截器,共 4 个拦截器。

:::tip 拦截器作用
网络请求时，发起请求时和响应请求时对操作进行响应的效果

- 发起请求时可以做
  - 添加网页的加载动画，
  - 某些网络请求时，必须带一些特殊的参数，jwt登录时携带token(请求中添加token)，
  - 通过请求中的url 的路径判断特殊请求，是否有token(判断是否登录)
  - token 认证时，
  - 登录验证 判断，
  - 添加自定义headers ,
  - config中的信息不符合服务器的要求需要修改

- 响应请求时可以进行相应的数据处理

  -

:::

1. 请求拦截
    - 成功的
    - 失败的

```js
axios.interceptors.request.use(config=>{
    console.log('进入请求拦截器');
    console.log(config)
    return config      //   !!! 放行拦截器才能往下走 !!!
},err=>{
    console.log('请求方向失败')
    console.log(err)
})
axios.get('/login').then(res=>{
    console.log(res)
})
```

:::warning 注

- `use(fn1,fn2)`：参数是两个函数前面是成功，后面是失败
- 拦截以后必须`return`放行拦截才能往下
:::

2. 响应拦截
    - 成功的
    - 失败的

```js
axios.interceptors.response.use(config=>{
    console.log('进入响应拦截器');
    // return config    //   !!! 放行拦截器才能往下走 !!!
    return config.data  // 可以直接返回数据
},err=>{
    console.log('响应方向失败')
    console.log(err)
})
axios.get('/login').then(res=>{
    console.log(res)
})
```

- `interceptors` : `/ˌɪntəˈsɛptə/` 拦截器；拦截者
