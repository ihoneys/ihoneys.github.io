---
title: Axios vue项目实践
date: 2020-02-23
 
tags:
 - 前端基础
 - Axios

---

1. 在项目中创建一个`repuest`文件夹

这里面用来放 `axios` 封装好的文件

2. 在`request`文件夹中创建一个`index.js`文件

这里面用来放`axios`的配置公共部分，陪着好以后不应当随便更改。

3. `index.js`中

index.js是一个公共的封装好的请求实例

```js
// 首先引入axios
import Axios from "axios";
// 使用create创建一个axios的实例，从而对实例进行配置，不污染全局Axios
const axios = Axios.create({
    // create是Axios的方法，用来创建实例的
    baseURL: "http://localhost:8888",
    // 根地址，是基于axios实例对象发起的请求的时候，就可以忽略掉网址，因为axios会帮我们拼接地址
})
// 请求请拦截👇
// 响应前拦截👇
// axios.interceptors.request.use()
// 响应后拦截👇
axios.interceptors.response.use(function (res) {
    // 响应拦截器，这里做对接口的处理，比如说status不是200的时候
    console.log(res);
    if (res.status !== 200) {
        alert('网络错误，请稍后重试')
        return false
    } else {
        // 返回到前端页面上的是我们过滤出来的可用的数据
        return res.data

    }
}, function (err) {
    return Promise.reject(err)
})

// 导出实例
export default axios;
```

4. 在`request`文件夹中创建一个`login.js`文件

```js
// 这里引入的是刚刚创建的index.js文件，就是说本页的请求都是基于index.js下的，不用全局Axios
import axios from './index'
// 例如：登录接口
// 不用箭头函数，用常规函数写
// const loginApi = function (data) {
//     return axios.post('/login', data)
// }

// 例如：金融项目，三级联动数据
const loginApi = (data) => axios.post('/login', data) //.then(res => {
//这里做数据加工
// return res
// })

// axios 里的post请求，数据作为第二个参数传入即可
// get请求数据必须放在params中才行
// const getData = () => axios.get('/getData', {
//     params: { data }
// })

// 导出
export default loginApi;
```

5. 要在某一个组件中调用接口，引入上面导出的`loginApi`模块

```vue
<template>
  <div>
    <form>
      <input type="text" v-model="username" placeholder="用户名" />
      <br />
      <input type="password" v-model="password" placeholder="密码" />
      <br />
      <button type="button" @click="submit">登录</button>
    </form>
  </div>
</template>
<script>
// 在这里引入要调用的接口
import loginApi from '../request/login'
export default {
  data() {
    return {
      username: "",
      password: ""
    }
  },
  methods: {
    submit() {
      // 前端要做基础的校验
      if (!this.username || !this.password) {
        alert("用户名或密码不许为空")
      } else {
        loginApi({
            // 获取的数据
          username: this.username,
          password: this.password
        }).then(res =>
        // 打印出响应后的数据
          console.log(res)
        )
      }
    }
  },
};
</script>
<style>
</style>
```
