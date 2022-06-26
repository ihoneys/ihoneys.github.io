---
title: Axios 请求和并发请求
date: 2019-04-12
 
tags:
 - 前端基础
 - Axios

---

:::tip
 请求方式是一般是后端定义的
:::

| 方式   | 作用     | 特点                   | 其他     |
| ------ | -------- | ---------------------- | -------- |
| get    | 获取数据 |                        | 两个参数 |
| post   | 提交数据 | （用于新建）           | 三个参数 |
| put    | 更新数据 | （所有数据推送到后端） | 三个参数 |
| patch  | 更新数据 | （只推送修改的数据）   | 三个参数 |
| delete | 删除数据 |                        | 两个参数 |

## Axios 基本使用

- CDN 方式

```html
<!-- 标签引入方式引入axios -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

- 依赖安装

```js
npm i axios  /  yarn add axios  /  bower i axios
```

请求语法

```js
axios(config)
axios.request(config)
axios.get(url,config)
axios.delete(url,config)
axios.head(url,config)
axios.post(url,config)
axios.put(url,config)
axios.patch(url,config)
```

- axios()常见配置
  - `url=""` ： 请求地址
  - `baseURL =""`, ： 根路径
  - `method:"get"` ： 请求方式
  - `headers:{'x-Requested-With':'XMLHttpRequest'}` : 自定义请求头
  - `params:{key:"abc"}` : url查询对象 (默认是 get 时带的参)
  - `data:{key:"abc"}` : `requset body` (post 时带的参数)
  - `transformRequest:[function(data){}]` :请求前的数据处理
  - `transformResponse:[function(data){}]` : 请求后的数据处理
  - `timeout:1000,`:请求超时
  - `withCredentials:false` 跨域是否带toden
  - `adapter:function(resolve,reject,config){}` 自定义请求处理
  - `auth:{uname:"aaa",pwd:"123"}` : 身份验证信息
  - `responseType:'json'` : 响应数据格式 `json blob document arraybuffer text stream`

## 请求方式介绍

### GET

:::warning 注
默认是`get`请求方式
:::

请求路径是 `http://localhost:8081/data.json?id=12`

- `get`

```js
// 用get方式发送无参请求
axios({
      //路径
      url: '/data.json',
      }).then((res) => {
      console.log(res);
    })
// 用get方式发送有参请求
    // 1. 地址栏带参
axios({
      // 请求方式
      method: 'get',
      // 路径 + 参数
      url: '/data.json?id=12',
    }).then((res) => {
      console.log(res);
    })
    // 2. params传参
axios({
      //请求方式
      method: 'get',
      //路径
      url: '/data.json',
      //参数
      params: {
        id: 12
      }
    }).then((res) => {
      console.log(res);
    })
```

- `axios.get` 简写方式 (别名写法)

```js
    // 用 get 无参请求
    axios.get('/data.json').then((res) => {
      console.log(res);
    }).catch((err) => {
        // 不成功 / 错误
        console.log(err)
    })
    // 用 get 有参请求
    axios.get('/data.json', {
      // 传参
      params: {
        id: 12,
        name:"zhangsan"
      }
    }).then((res) => {
      console.log(res);
    })
```

### POST

- post

```js
// 用post方式发送无参请求
    axios({
        // 请求方式
        method: 'post',
        url: "/post",
        }).then(res => {
        console.log(res);
      })
// 用post方式发送有参请求
    axios({
        method: 'post',
        url: "/post",
        // 使用data 传递参数，后台返回的数据是json格式，接收的值为null （前提是没有@requestBody）
        // 解决方式在下方
        data: {
            name:'张三'
        }
      }).then(res => {
          console.log(res);
      })
```

- axios.post 简写方式（别名写法）

```js
// 用 post 无参请求
    axios.post('/post').then(res => {
       console.log(res);
    }).catch(err =>{
    console.log(err)
    }),
// 用 post 有参请求(等价data方式)
// 要想使用本方法，需在后台将 json 数据转换为java对象 用@requestBody（java后台）
    axios.post('/post', {name:'张三'}).then(res => {
       console.log(res);
    }),
// 用 post 有参请求(&连接多参传递)
    axios.post('/post', "name=张三&age=10").then(res => {
       console.log(res);
    }),
//
```

使用`data`传递，后台控制器接收到的`name`是`null`，`axios`使用`post`携带参数请求默认使用`application/json`。

- 解决方式一：（前端） 不建议使用

请求返回的数据是`json`格式，用`data`传递会接收不到，就要用`params`属性进行数据的传递。

```js
    axios({
        method: 'post',
        url: "/post",
       //参数
        params: {
        name:'张三'
      }
      }).then(res => {
        console.log(res);
      })
```

虽然可以传递数据了，但是也是通过url拼接的方式传递到后台的，不安全，不建议使用

- 解决方式二（前端）：在简写方式时,参数以这个格式传递 `"name=张三"`，多参数`"name=张三&age=10"`，推荐使用这种方式.

- 解决方式三（服务器端)：服务器端给接收的参数加上 `@requestBody` ？？

>- 例：
>
> 1. form-data 表单提交（图片上传，文件上传）
>
> ```js
>     // 创建一个变量
>     let data = {
>       id: 12
>     }
>     let formData = new FormData()
>     for (let key in data) {
>       formData.append(key, data[key])
>     }
>     // axios发送请求
>     axios.post('/post', formData).then(res => {
>       console.log(res);
>     })
> ```
>
> 2. applicition/josn
>
> ```js
>     axios.post('/post', data).then(res => {
>       console.log(res);
>     }),
> ```

### PUT

```JS

    // put
    axios.put('/put', data).then(res => {
      console.log(res);
    })

```

### PATCH

```JS
    // patch
    axios.patch('/patch', data).then(res => {
      console.log(res);
    })
```

### DELETE

- delete（别名）

> 1. 在请求体上用data
>
> ```JS
>     axios.delete('/delete', {
>       // 参数在请求体上用data
>       data: {
>         id: 12
>       }
>     }).then(res => {
>       console.log(res);
>     })
> ```
>
> 2. 参数在url上用params
>
> ```js
>  axios.delete('/delete', {
>       // 参数在url上用params
>       params: {
>         id: 12
>       }
>     }).then(res => {
>       console.log(res);
>     })
> ```

- delete(其他方式)

```js
axios({
      method: "delete",
      url: "/delete",
      // 参数在请求体上用data
      data: {
        id: 12
      }
    }).then(res => {
      console.log(res);
    })
```

```js
axios({
      method: "delete",
      url: "/delete",
    //   参数在url上用params
        params:{
            id:12
        },
    }).then(res => {
      console.log(res);
    })
```

:::warning 注

- 每个请求中console.log()，是为了调用一下，不调用会报错
:::

## Axios 并发请求

- 使用 axios.all

```js
axios.all([
    axios.get('/login'),
    axios.get('/user')
]).then(res=>{
    console.log(res[0])
    console.log('-----')
    console.log(res[1])
}).catch(err => {
    console.log(err)
})
```

- 使用 axios.spread()处理响应结果

```js
axios.all([
    axios.get('/login'),
    axios.get('/user')
]).then(axios.spread((res1,res2)=>{
    console.log(res1);
    console.log(res2)
})).catch(err => {
    console.log(err)
})
```

案例

```js
axios.all(axios({
  url: "http://123.207.32.32:8000/home/data",
  params: {
    type: "sell",
    page: 3
  }
}).then((res) => {
  console.log(res)
}),
  axios.get("http://123.207.32.32:8000/home/data", {
    type: "pop",
    page: 2
  }).then(res => {
    console.log(res);
  })).then(axios.spread((res1, res2) => {
    console.log(res1);
    console.log(res2);
  }))
```
