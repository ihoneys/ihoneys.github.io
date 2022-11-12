---
title: 小程序 自定义属性
date: 2019-04-20
sidebar: 'auto'
tags:
 - 微信小程序
---
## 自定义属性 `data-xxx`

可以获取元素的属性和值

### 获取元素上自定义的属性和值

1. 使用`data-[name]`的方式在元素行自定义属性且赋值
2. 获取自定义属性值用：`event.crueentTarget.setData`

```html
 <view data-postid_list="{{item.postId}}" bindtap="onGoTuDetail">
```

![console.log](https://s1.ax1x.com/2020/10/29/BG83dK.png)

`console.log`打印 `evevt`在结果里

![结果](https://s1.ax1x.com/2020/10/29/BG81Z6.png)

例:

```html
<text data-List="123" bindtap="getList">123</text>
```

```js
getList: function (event) {
    console.log(event.currentTarget.dataset.list) //123
},
```

### 获取表单元素的值

- `input`:获取`input`输入框的值；

  1. 设置:`bindinput=""`绑定事件，

  2. 获取:`event.detail.value`获取值 直接获取值

## 组件上的自定义属性

1. 在引用组件的页面里定义`title="123"`，`title`属性名，`"123"`属性值

```html
<!-- pages/index.wxml -->
<Index  title="123"/>
<Index  title="abc"/>
<!-- Index为组件名 -->
```

2. 在组件的`js`文件中定义`properties`，和属性类型

```js
//components/index.js
Component({
 // 组件的属性列表
  properties: {
    title:String
  },
})
```

3. 在组件`wxml`文件中使用`{{title}}`

```html
<!--components/index.wxml-->
<view class="container" >
  <!-- 组件内容 -->
  <view class="title">
      {{title}}
  </view>
</view>
```
