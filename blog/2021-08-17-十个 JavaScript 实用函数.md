---
slug: "/js-func"
layout: Post
title: 十个实用的 JavaScript 函数 # 博客标题（必须）
# subtitle: Vite + Vue3 搭建项目之后我们常用的操作 # 博客副标题（可选）
date: 2021-08-17 # 博客日期，会显示在文章头部（可选）
author: Lucas
author_title: 一枚小前端
author_url: https://github.com/ihoneys
author_image_url: img/ihoneys.png
catalog: true # 是否启用右侧目录：false / true（可选，默认为 false）
tags: # 博客标签
  - JavaScript
---

这里分享十个有过对自己日常工作帮助实用函数~

<!--truncate-->

## 1.判断数据是否为空

请求数据返回，需要判断是否为空，保证数据返回正确渲染页面。

```javascript
export function isObjEmpty(obj) {
  return (
    obj === undefined ||
    obj === "undefined" ||
    obj == null ||
    obj === "" ||
    obj.length === 0 ||
    (typeof obj === "object" && Object.keys(obj).length === 0)
  );
}
```

## 2.获取 url 中的参数

某些数据通过 url 参数携带回来，比如自己定义微信支付成功失败回调地址携带订单状态参数，就需要拿到 url 参数值。

```javascript
export function getUrlParams() {
  let url = decodeURIComponent(window.location.href);
  url = url.replace(/\s/g, "");
  const params = url.match(/([^?=&]+)(=([^&]*))/g) || [];
  const obj = params.reduce(
    (a, v) => (
      (a[v.slice(0, v.indexOf("="))] = v.slice(v.indexOf("=") + 1)), a
    ),
    {}
  );
  return obj;
}
```

## 3.加解密

**AES 加解密**

这里需要用到 `crypto-js`库，需要先 npm 安装

```
npm install  crypto-js -D
```

```javascript
import CryptoJS from "crypto-js";

const key = "3CJQFPI8GDNV9RKZ";
// 解密
export function aesDecode(encryptedStr) {
  const encryptedHexStr = CryptoJS.enc.Base64.parse(encryptedStr);
  const encryptedBase64Str = CryptoJS.enc.Base64.stringify(encryptedHexStr);
  const decryptedData = CryptoJS.AES.decrypt(encryptedBase64Str, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return decryptedData.toString(CryptoJS.enc.Utf8);
}

// 加密
export function aesEncode(str) {
  const encryptedData = CryptoJS.AES.encrypt(str, key, {
    mode: CryptoJS.mode.ECB,
    padding: CryptoJS.pad.Pkcs7,
  });
  return encryptedData.toString();
}
```

**SM4 加解密**

先安装 `gm-crypt` 库

```
npm install  gm-crypt -D
```

```javascript
import crypt from "gm-crypt";
const SM4 = crypt.sm4;

// 加解密配置例如：
const sm4Config = {
  key: "4fbxytabWE266492",
  mode: "ecb",
  iv: "UISwD9fW6cFh9SNS",
  cipherType: "text",
};
const createSm4 = new SM4(sm4Config);

// 解密
export function sm4Decrypt(val) {
  return createSm4.decrypt(val);
}

// 加密
export function sm4Encrypt(val) {
  return createSm4.encrypt(val);
}
```

## 4.判断是否是表情（emoji）

在一些表单输入框，需要限制输入表情。

```javascript
export function isEmojiCharacter(str) {
  return /(\ud83c[\udf00-\udfff])|(\ud83d[\udc00-\ude4f\ude80-\udeff])|[\u2600-\u2B55]/g.test(
    str
  );
}
```

## 5.判断手机机型

**判断是否苹果设备：**

```javascript
export function checkIsAppleDevice() {
  let u = navigator.userAgent;
  const ios = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
  const iPad = u.indexOf("iPad") > -1;
  const iPhone = u.indexOf("iPhone") > -1 || u.indexOf("Mac") > -1;
  return ios || iPad || iPhone;
}
```

**判断是否为 Andriod 设备：**

```javascript
export function checkIsAndroidDevice() {
  let u = navigator.userAgent;
  return u.indexOf("Android") > -1 || u.indexOf("Adr") > -1;
}
```

## 6. 判断微信浏览器

```javascript
export function isWeixinBrower() {
  const ua = window.navigator.userAgent.toLowerCase();
  const match = ua.match(/MicroMessenger/i);
  if (match === null) {
    return false;
  }
  if (match.includes("micromessenger")) {
    return true;
  }
  return false;
}
```

## 7.防抖函数

```javascript
/**
 * @param func 执行函数
 * @param wait 间隔时间
 * @param immediate 是否立即执行
 * @returns
 */
export function debounce(func, wait = 300, immediate = true) {
  // 设置定时器
  let timeout;
  return (...args) => {
    const later = () => {
      timeout = null;
      if (!immediate) func.apply(this, args);
    };

    const callNow = immediate && !timeout;

    clearTimeout(timeout);

    timeout = setTimeout(later, wait);

    if (callNow) func.apply(this, args);
  };
}
```

## 8.转千分位金额

```javascript
export function getThousandText(amount) {
  return amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}
```

## 9.打乱数组

```javascript
function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export function shuffle(arr) {
  let _arr = arr.slice();
  for (let i = 0; i < _arr.length; i++) {
    let j = getRandomInt(0, i);
    let t = _arr[i];
    _arr[i] = _arr[j];
    _arr[j] = t;
  }
  return _arr;
}
```

## 10.日期函数

```javascript
function formateDate(time = Date.now()) {
  function addDateZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  const d = new Date(time);

  const [year, month, day, hours, minute] = [
    d.getFullYear(),
    d.getMonth() + 1,
    d.getDate(),
    d.getHours(),
    d.getMinutes(),
  ];
  const formatDay = [year, month, day].map(addDateZero).join("-");
  const formatHour = [hours, minute].map(addDateZero).join(":");

  return {
    formatDay,
    formatHour,
  };
}
```

**最后**

有一些并不一定能够用到，还需要根据项目和以及需求才能实用上，可以收藏一波。
