---
title: 小程序 路由
date: 2019-04-13
sidebar: 'auto'
tags:
 - 微信小程序
---

## 路由跳转

- 标签式跳转路由

```html
<text>使用标签跳转</text>
<view class="" hover-class="none" hover-stop-propagation="false">
    <!-- 加/ -->
    <navigator open-type="navigate" url="/pages/cycle/cycle">正常跳转到生命周期页面</navigator>
</view>
```

### open-type

- navigate(Object object)（默认） 只能跳转非tabbar页面，并且不会关闭当前页面，所以会有返回导航
- switchTab(Object object) 只能跳转到tabBar页面，并关闭所有非tabBar页面
- redirectTo(Object object) 关闭当前页面，跳转到应用内的某个页面。但是不允许跳转到 tabbar 页面，不会出现返回导航，但有一个返回首页的图标按钮
- reLaunch(Object object)关闭所有页面，打开到应用内的某个页面，当跳转到非tabbar页面时会显示一个返回首页的图标按钮
- navigateBack(Object object)关闭当前页面，返回上一页面或多级页面。可通过 getCurrentPages 获取当前的页面栈，决定需要返回几层

## 路由传参

- 传参用 query :" ?name=web&age=10"

- 获取值 ：pages页面里使用onload 函数接收

1. 发送参数

```html
<!-- pages/router/router.wxml 跳转前的路由页面 -->
 <navigator class="nav" url="/pages/cycle/cycle?name={{name}}">正常跳转到生命周期页面</navigator>
```

```js
// pages/router/router.js 需要动态传递的数据
data: {
    name: "zhang"
},
```

2.接收参数

```js
// pages/cycle/cycle.js 在onLoad中接收参数
Page({
    /**
     * 页面的初始数据
     */
    data: {
        text: "",
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log(options.name);
        // 改变数据
        this.setData({
            text: options.name
        })
    },
})
```

```html
<!-- pages/cycle/cycle.wxml 接收参数后渲染-->
<view>{{text}}</view>
```

## 路由跳转方式

1. 常规跳转

- wx.navigate

2. 重定向

- wx.redirectTo

3. 跳转到tabber

- wx.switchTab

4. 返回后退

- wx.navigateBack

5.任意跳转

- wx.reLaunch
