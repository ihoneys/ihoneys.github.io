---
slug: "/js-code"
layout: Post
title: JavaScript Code Optimization # 博客标题（必须）
subtitle: 一些基础优化代码风格的习惯 # 博客副标题（可选）
date: 2021-08-13 # 博客日期，会显示在文章头部（可选）
author: Lucas
author_title: 一枚小前端
author_url: https://github.com/ihoneys
author_image_url: img/ihoneys.png
catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）
tags: # 博客标签
  - JavaScript
  - 代码优化
---

## 前言

在这篇短文中，将会介绍一些在开发过程中一些实用的方法来改进你的代码，简单易懂，通俗实用。

<!--truncate-->

## 指定默认值

在读取属性的时候我们希望，属性值在 `null` 或者 `undefined` 的时候能够指定默认值，避免执行引用出现 bug，我们可以使用 `||` 运算符

```javascript
// 比如后端数据返回的message为null，就使用我们自动定义的text
const { message } = response.data;
const myMessage = message || "返回数据失败";
```

注意的是，如果 `message`的值为 `''`或者 `false`或 `0` 默认值同样会生效。但是如果是 `{}`，或者 `[]`，则不会取默认值！

#### 函数默认参数替代短路运算符

```javascript
const useName = (name) => {
  const myName = name || "Jason";
  // ...
};

const useName = (name = "Jason") => {
  // ...
};
```

## && 代替单个 if

例如与后台数据交互，拿到返回数据需要遍历进行操作。

```javascript
// 为了避免数据为数组能够遍历
if (Array.isArray(data)) {
  data.forEach((item) => {});
}

// 使用 && 运算符 当请求接口返回数据需要循环处理数据的时候可以：
Array.isArray(data) && data.forEach((item) => {});
```

## 三目运算符号

三目运算符能够简化我们的 `if else` 条件判断，适当我们可以用它来代码，简化我们的代码

```javascript
let key = value === 0 ? "buy" : "sell";
```

或者还有第三种情况的时候我们可以嵌套

```javascript
let key = "";
if (value === 0) {
  str = "buy";
} else if (value === 1) {
  str = "/";
} else {
  str = "sell";
}

// 嵌套三目
let str = value === 0 ? "buy" : value === 1 ? "/" : "sell";
```

## 链式判断运算符号 ?.

往往我们需要获取一个深层对象属性值时，需要进行多次判断，如果不判断，有一个没有就会报错，导致后面代码无法运行下去，就会提示：

Cannot read property 'xxx' of undefined

```javascript
const $name = app.config.globalProperties.$name; // error

const $name =
  (app &&
    app.config &&
    app.config.globalProperties &&
    app.config.globalProperties.$name) ||
  "Jason";

// 使用 ?. 运算符
const $name = app?.config?.globalProperties?.$name;
```

## 解构赋值

#### **数据解构赋值**

多个变量赋值的时候，我们可以使用数据解构赋值

```javascript
let name = "Jason";
let age = "18";
let sex = "男";

// 数组解构赋值
let [name, age, sex] = ["Jason", "18", "男"];
```

#### **对象解构取值**

```javascript
const userInfo = {
    name: "Jason",
    age: "18",
    sex: "男",
};
const { name, age, sex } = userInfo;

// 顺便说一下 es6 对象中键值同名可以简写
const name = "Jason"
const userInfo = {
    name,
    ...
};
```

#### **...** 扩展运算符

扩展运算符也可以相当于 `concat()` 连接两个数组，比如移动端一个商品列表需要分页加载

## 使用模板字符

ES6 模板字符串让我们连接字符串的时候不用更加繁琐

```javascript
// 比如获取时间拼接
function getYearsMonthDay() {
    function addDateZero(num) {
        return num < 10 ? "0" + num : num;
    }
    const d = new Date();
    const [years, month, day] = [d.getFullYear(), d.getMonth(), d.getDate()];

    return return years + "年" + addDateZero(month + 1) + "月" + addDateZero(day) + "日"
}

// 模板字符串
function getYearsMonthDay() {
    // ...
    return `${years}年${addDateZero(month + 1)}月${addDateZero(day)}日`;
}
```

## 使用 let、const 代替 var

避免了内层可能会覆盖外层变量，减少 bug 的源头，let、const 的规范使用也能够提升代码编译的效率。

```javascript
var name = "Jason";

// better
const name = "Jason";

// 如果不是一个常量就用 let
let name = "Jason";
```

## 箭头函数

箭头函数表达式的语法比函数表达式更简洁。

```javascript
// 这里使用 vue3 computed
// function
const statusArr = [2, 4, 5, 6, 8, 9];
const showBtn = computed(() => {
  return function (status) {
    return statusArr.includes(status);
  };
});

// 使用箭头函数
const computedShowBottomBtn = computed(
  () => (status) => statusArr.includes(status)
);
```

ps：哈哈 不过使用箭头函数，打包还得 babel 转换，量越大需要转换就越多，所以？~

## return 减少缩进

```javascript
if (!isObjEmpty(data)) {
  // do something
}

if (isObjEmpty(data)) return;
// ...
```

## 简化判断

#### 条件提取

一个 if 条件需要多足多种情况时，我们可以将条件提取出来，代码更加清晰。

```javascript
if ((name === "Jason" || sex === 20) && (name === "Alisa" || sex === 18)) {
  // ...
}

// 改进
const condition1 = () => {
  return name === "Jason" || sex === 20;
};

const condition2 = () => {
  return name === "Alisa" || sex === 18;
};

if (condition1() && condition2()) {
  // ...
}
```

#### includes 简化

`includes()` 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回 false。

比如判断某一个值符合是否其中一个条件

```javascript
// 通常使用 ||
if (status === 2 || status === 3 || status === 4 || status === 5) {
  // do something
}

// includes 简化
const passStatus = [2, 3, 4, 5];
if (passStatus.includes(status)) {
  // do something
}
```

#### switch

多条件判断，可以使用普通 switch 判断：

比如根据返回请求状态自定义状态码的 message

```javascript
switch (error.response.status) {
  case 302:
    message = "接口重定向了！";
    break;
  case 400:
    message = "参数不正确！";
    break;
  case 401:
    message = "您未登录，或者登录已经超时，请先登录！";
    break;
  case 403:
    message = "您没有权限操作！";
    break;
  case 404:
    message = `请求地址出错: ${error.response.config.url}`;
    break;
  case 408:
    message = "请求超时！";
    break;
  case 409:
    message = "系统已存在相同数据！";
    break;
  case 500:
    message = "服务器内部错误！";
    break;
  case 501:
    message = "服务未实现！";
    break;
  case 502:
    message = "网关错误！";
    break;
  case 503:
    message = "服务不可用！";
    break;
  case 504:
    message = "服务暂时无法访问，请稍后再试！";
    break;
  case 505:
    message = "HTTP版本不受支持！";
    break;
  default:
    message = "请求异常";
    break;
}
```

#### 抽象配置

或者通过抽象配置键值的方式将逻辑判断进行简化更简单。

```javascript
const mapMessage = {
  302: "接口重定向了！",
  400: "参数不正确！",
  401: "您未登录，或者登录已经超时，请先登录！",
  403: "您没有权限操作！",
  404: `请求地址出错: ${error.response.config.url}`,
  408: "请求超时！",
  409: "系统已存在相同数据！",
  500: "服务器内部错误！",
  501: "服务未实现！",
  502: "网关错误！",
  503: "服务不可用！",
  504: "服务暂时无法访问，请稍后再试！",
  505: "HTTP版本不受支持！",
};

const message = mapMessage[error.response.status] || "请求异常";
```

这种写法的好处在于，将判断条件作为属性名，将处理逻辑做为对象的属性值。

#### 使用 map

```javascript
const action = new Map([
    [302, "接口重定向了！"],
    [400, "参数不正确！"],
    ...
]);

// 匹配
const message = action.get(error.response.status);
```

#### 表单判断优化

有一些需求有多个表单，一般我们的 UI 框架（比如 Vant、Ant-d）是在 input 组件下方有警告提示，但是一些列如上传，还有 swtich 没有对应提示，需要我们弹窗提示它未填未选等等。

不好的写法：

```javascript
if (!CardPositiveImage) {
  createMessage("未上传证件正面!");
  return false;
}
if (!name) {
  createMessage("未填写姓名!");
  return false;
}
if (!checkPhone(phone)) {
  createMessage("手机号码不正确!");
  return false;
}
// ...
```

好的写法：

```javascript
const validateForm = () => {
  const rules = [
    {
      value: CardPositiveImage,
      text: "未上传证件正面！",
    },
    {
      value: checkPhone(state.patientPhone),
      text: "手机号码不正确！",
    },
    {
      value: name,
      text: "未填写姓名！",
    },
  ];

  // 也可以把validateFunc这一块抽离出来 可能多出有表单
  const validateFunc = (arr) => {
    const action = arr.filter((item) => !item.value);
    if (action.length) {
      createMessage(action[0].text);
      return false;
    }
    return true;
  };
  return validateFunc(rules);
};

// 表单提交
const onSubmitForm = () => {
  if (!validateForm()) return; // 执行验证

  // ...
};
```

## 函数参数过多，利用 Object 传递，并使用解构

```javascript
👎
const getUserInfo = (name, sex, height, age) => {
    // ...
};
getUserInfo("Jason", "男", "176", "18");

👍
const getUserInfo = ({ name, age, sex, height }) => {
    // ...
};
getUserInfo({
    name: "Jason",
    age: "18",
    sex: "男",
    height: "176",
});
```

## 单一职责，提炼函数

简单说一个例子比如一个函数中负责表单提交

```javascript
👎
const handleNext = () => {
    // 验证表单
	const rules = [
        {
            value: CardPositiveImage,
            text: "未上传证件正面！",
        },
        {
            value: checkPhone(state.patientPhone),
            text: "手机号码不正确！",
        },
        {
            value: name,
            text: "未填写姓名！",
        },
    ];
    const action = rules.filter(item => !item.value);
    if (action.length) {
        createMessage(action[0].text);
        return false
    }

   // 拿到需要传递给后端的数据
   const baseData = {
       name: state.name,
       age: state.age
       ...
   }
   const moreData = {
       phone: state.phone
       ...
   }

   const complete = curIndex ? Object.assign(baseData, moreData) : baseData
}


👍
const validateForm = () => {
    const rules = [
        {
            value: CardPositiveImage,
            text: "未上传证件正面！",
        },
        ...
    ];
    // 也可以把validateFunc这一块抽离出来 可能多出有表单
    const validateFunc = (arr) => {
        const action = arr.filter(item => !item.value);
        if (action.length) {
            createMessage(action[0].text);
            return false
        }
        return true
    }
    return validateFunc(rules);
};

const postData = () => {
    const baseData = {
        name: state.name,
        age: state.age
        ...
    }
    const moreData = {
        phone: state.phone
        ...
    }

    return curIndex ? Object.assign(baseData, moreData) : baseData
}

const handleNext = () => {
    // 验证表单
    if (!validateForm()) return
    // 数据
    const data = postData()

    // .. 提交请求
}
```

## 最后

上面总结一些 基础的 js 一些小操作，当然使用 Vue、React 框架如何优雅编写组件也是一问学问，后面一起探究研究~
