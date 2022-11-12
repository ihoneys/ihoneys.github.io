---
title: React 路由拦截
date: 2021-10-26
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - react
---
## 第一种方式

```js
// 根文件 App.jsx
import React from "react";
import { BrowserRouter, NavLink, Route } from "react-router-dom";
import MyPrompt from "./MyPrompt";
import Login from "./Login";
const App = () => {
    // 做一个全局的标识
    window.sessionStorage.setItem("user", "false");
    // 判断是否登录过，如果有登录的值，直接更改为true 主要是为了模拟登录以后就不能再跳转登录页面，而是去首页
    // const state = window.sessionStorage.getItem("user", "false");
    // if (!state) {
    //     window.sessionStorage.setItem("user", "false");
    // }
    return (
        // 路由之容器
        <BrowserRouter>
            <header>
                <nav>
                    {/* 路由之导航 */}
                    <NavLink to="/">首页</NavLink> |
                    <NavLink to="/news">新闻</NavLink> |
                    <NavLink to="/login">登陆</NavLink>
                </nav>
            </header>
            {/* 路由之线路 */}
            <Route component={MyPrompt} />
            <Route path="/" component={() => <h1>首页内容</h1>} exact />
            <Route path="/news" component={() => <h1>新闻内容！！</h1>} />
            <Route path="/login" component={Login} />
        </BrowserRouter>
    );
};
export default App;
```

```js
// 登录页 login
import React from "react";

const Login = (props) => {
    // finish 结束函数
    const onFinish = (values) => {
        // 登陆成功的函数
        window.sessionStorage.setItem("user", "true");
        // 跳转
        props.history.replace("/");
        console.log("Success:", values);
    };
    return (<>
        <input name="username" onFinish={onFinish} type="text" />
        <input name="password" type="text" />
        <button onClick={onFinish} >登录</button>
    </>);
};

export default Login;
```

```js
// 路由拦截逻辑页 （本页不会渲染到页面上，主要功能就是拦截）
import React from "react";
import { Prompt, useHistory } from "react-router-dom";
const Com = () => {
  const getHistory = (history) => {
    const location = history.location;
    const user = window.sessionStorage.getItem("user");
    if (location.pathname === "/login" && user === "true") {
      history.replace("/");
    } else if (location.pathname === "/" && user === "false") {
      history.replace("/login");
    }
  };
  getHistory(useHistory());
  return (
    <>
      <Prompt
        message={function (location) {
          // location是下一个路由的信息
          const user = window.sessionStorage.getItem("user");
          if (location.pathname === "/login" && user === "true") {
            return false;
          } else if (location.pathname === "/" && user === "false") {
            return false;
          } else {
            return true;
          }
        }}
      />
    </>
  );
};

export default Com;
```

## 第二种方式  项目 + 后台

### 后台

- 主文件 -- index.js

```js
// express
// cors
var express = require("express");
var cors = require("cors");
var BodyParser = require("body-parser");
var app = express();
// 使用跨域函数，允许所有的地址请求
app.use(cors());
// post参数解析
// body-parser
app.use(BodyParser.json());
app.use(
    BodyParser.urlencoded({
        extended: true,
    })
);

// 开启一个服务器
app.listen(3001, () => console.log("http://loclhost:3001"));

// 创建后端路由---给前端用的接口
app.get("/home", (request, response) => {
    // 假数据
    const imgs = [
        "https://images.unsplash.com/photo-1668123508904-a49a9aa6ecb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1668123508904-a49a9aa6ecb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
        "https://images.unsplash.com/photo-1668123508904-a49a9aa6ecb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60",
    ];
    // 接口要返回给前端数据
    response.json({
        code: 1,
        msg: "成功！",
        datas: imgs,
    });
});

// 假数据库
let db = [];
// { username: "songyu", password: "123456", state: 0 }
// 注册接口
app.post("/reg", (req, res) => {
    // 后端校验一下
    // 通过校验后存入临时的数组【数据库】里
    db.push({ ...req.body, state: 0 });
    // 对前端请求做响应
    res.json({ code: 1, msg: "注册成功！" });
});
// 登陆接口
app.post("/login", (req, res) => {
    // get方式取参：query post方式取参：body
    const { username, password } = req.body;
    // 1. 对参数判断
    // 2. 从db数据里查询
    const index = db.findIndex(
        (item) => item.username === username && item.password === password
    );
    // 3. 做出响应
    if (index !== -1) {
        // 修改data
        db[index].state = 1;
        res.json({ code: 1, msg: "登陆成功" });
    } else {
        res.json({ code: 0, msg: "登陆失败！" });
    }
});
// 退出接口

```

- package.json

```js
{
  "name": "backend",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "dev": "nodemon index.js"
  },
  "author": "",
  "license": "ISC",
  "dependencies": {
    "body-parser": "^1.19.0",
    "cors": "^2.8.5",
    "express": "^4.17.1"
  }
}

```

### 前端

- `api`接口文档

```js
// base.js
import axios from "axios";
const Axios = axios.create({
  // 公共的基础的后端请求地址
  baseURL: "http://localhost:3001",
});
export default Axios;

```

```js
// home.js
import Axios from "./base";
// 首页的基础信息请求
export const getHome = () => {
  return Axios.get("/home");
};

```

```js
// reg.js 注册
import Axios from "./base";
export const reg = (query) => {
  return Axios.post("/reg", query);
};

```

```js
// login.js
import Axios from "./base";
export const login = (query) => {
  return Axios.post("/login", query);
};

```

```js
// react 主文件 Layout.jsx
import React from "react";
import { BrowserRouter, NavLink, Route, Redirect } from "react-router-dom";
// 引入路由配置文件
import routes from "./router/index";
// 引入路由拦截文件
import MyPrompt from "./MyPrompt";
const Com = () => {
  // 创建一个全局数据存储
  const userstate = window.sessionStorage.getItem("user");
  if (!userstate) {
    window.sessionStorage.setItem("user", "false");
  }
  return (
    <BrowserRouter>
      <MyPrompt />
      {/* 导航 */}
      <NavLink to="/home">首页</NavLink>
      <NavLink to="/login">登陆</NavLink>
      <NavLink to="/reg">注册</NavLink>
      {/* 线路 */}
      {routes.map((item, index) => {
        return (
          <Route
            key={index}
            path={item.path}
            component={(props) => {
              const state = window.sessionStorage.getItem("user");
              // 根据拦截判断 做出渲染
              if (!item.auth) {
                if (state === "false") {
                  return <item.component {...props} />;
                } else {
                  return <Redirect to="/home" />;
                }
              } else {
                if (state === "true") {
                  return <item.component {...props} />;
                } else {
                  return <Redirect to="/login" />;
                }
              }
            }}
          />
        );
      })}
    </BrowserRouter>
  );
};
export default Com;
// 文件中引入了两个文件 routes MyPrompt
```

`MyPrompt.jsx`文件

```js
// MyPrompt.jsx
import { Prompt, withRouter } from "react-router-dom";
const MyPrompt = (props) => {
  return (
    // Prompt是在页面离开的时候触发
    // location即将进入的下一个路由信息
    // 在这里做拦截判断
    <>
      <Prompt
        message={(location) => {
          const state = window.sessionStorage.getItem("user");
          if (
            (location.pathname === "/" || location.pathname === "/home") &&
            state === "false"
          ) {
            return false;
          } else if (
            location.pathname !== "/" &&
            location.pathname !== "/home" &&
            state === "true"
          ) {
            return false;
          }
          return true;
        }}
      />
    </>
  );
};
export default withRouter(MyPrompt);
```

- 路由配置文件 routes.js

```js
// routes.js
const routes = [
  {
    exact: true,
    auth: true,
    path: "/",
    component: require("../Home").default,
  },
  {
    path: "/reg",
    component: require("../Registy").default,
  },
  {
    path: "/login",
    component: require("../Login").default,
  },
];
export default routes;
```

- Home.jsx
首页文件

```js
// Home.jsx
import React, { useState, useEffect } from "react";
import { getHome } from "./api/home";
import { Carousel } from "antd";

const Com = () => {
  // 用于渲染页面的home数据对象
  const [home, setHome] = useState([]);
  // 当页面加载完成，发起一个自动请求
  useEffect(() => {
    // 开启请求
    getHome().then((res) => {
      if (res.data.code === 1) {
        setHome(res.data.datas);
      } else {
        alert("请求失败！");
      }
    });
  }, []);
  return (
    <div>
      <Carousel autoplay>
        {home.map((value, index) => {
          return (
            <div key={index}>
              <img src={value} />
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};
export default Com;
```

- login.jsx
注册和登录文档基本一致

```js
// login.jsx
import React, { useState } from "react";
// 引入接口文档
import { login } from "./api/login";

const Com = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  // 赋值函数
  const changeUser = (event) => {
    const input = event.target;
    setUser({
      ...user,
      [input.name]: input.value,
    });
  };
  // 提交
  const submit = () => {
    // 前端的基础校验
    // 发起一个请求
    login(user).then((res) => {
      // 1. res.code 1 跳到首页，并且修改全局用户状态
      // 2. res.code 0 跳到注册页
      if (res.data.code) {
        window.sessionStorage.setItem("user", "true");
        props.history.replace("/home");
      } else {
        props.history.replace("/reg");
      }
    });
  };
  return (
    <div>
      <input
        onChange={changeUser}
        type="text"
        name="username"
        value={user.username}
      />
      <br />
      <input
        onChange={changeUser}
        name="password"
        type="password"
        value={user.password}
      />
      <br />
      <button onClick={submit}>登陆</button>
    </div>
  );
};
export default Com;
```

- reg.jsx

```js
// reg.jsx
import React, { useState } from "react";
import { reg } from "./api/reg";

const Com = (props) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  // 赋值函数
  const changeUser = (event) => {
    const input = event.target;
    setUser({
      ...user,
      [input.name]: input.value,
    });
  };
  // 提交
  const submit = () => {
    // 前端的基础校验
    // 发起一个请求
    reg(user).then((res) => {
      // 1. code 1 跳到登陆 0 提示出错！
      if (res.data.code) {
        props.history.replace("/login");
      } else {
        alert(res.data.msg || "注册失败！");
      }
    });
  };
  return (
    <div>
      <input onChange={changeUser} type="text" name="username"  value={user.username} />
      <br />
      <input onChange={changeUser} name="password" type="password" value={user.password} />
      <br />
      <button onClick={submit}>注册</button>
    </div>
  );
};
export default Com;
```
