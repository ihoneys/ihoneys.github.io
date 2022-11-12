---
title: 小程序 PS
date: 2019-05-02
sidebar: 'auto'
tags:
 - 微信小程序
---

## 绑定事件的两种方法

- `bind:tap="事件名"`  会有冒泡事件
- `catch:tap="事件名"` 默认阻止冒泡
- `bind:tap="tapName"`等价于 `bindtap="tapName"`

## 外部样式类

1. 在组件的`js`文件中定义

```js
//components/index.js
Component({
  //1.定义外部样式类
  externalClasses: ['my-class','you-class'],
  // 组件的属性列表
  properties: {
    title:String
  },
})
```

2. 在组件`wxml`文件中给最外层的标签里定义`class = 'my-class you-class'`

```html
<!--components/index.wxml-->
<view class="container my-class you-class" >
    <!-- 组件内容 -->
    <view class="title">
        {{title}}
    </view>
</view>
```

3. 在引用组件的页面里定义`you-class="plana"`、`my-class="planb"`

```html
<!-- pages/index.wxml -->
    <Index you-class="plana" title="123"/>
    <Index my-class="planb" title="abc"/>
<!-- Index为组件名 -->
```

```css
/* pages/index.wxml */
.planb{
  border: solid blue 1rpx;
}
.plana{
  border: solid red 1rpx;
}
```

## 多媒体

- `wx.createInnerAudioContext` (音乐)
  - `play()`
  - `stop()`
  - ···
- `wx.getBackgroundAudioManager` (背景音乐)
  - `play()`
  - `stop()`
  - ···

## wx.stopPullDownRefresh()

- 下拉刷新数据
    1. 在页面`json`文件中添加`"enablePullDownRefresh":true`
    2. `onPullDownRefresh`钩子中定义`wx.stopPullDownRefresh()`方法
- 页面标题静态
在页面的`json`中添加 `"navigationBarTitleText": "光与影",`

## wx.setNavigationBarTitle()

- 页面标题 动态加载
在需要加载的页面的`onReady` 钩子中定义`wx.setNavigationBarTitle({title:"new title"})`

## `wx.showNavigationBarLoading()`

- 上拉触底时更新数据的动态效果(显示)

## `wx.hideNavigationBarLoading()`

- 上拉触底时更新数据的动态效果(停止)
