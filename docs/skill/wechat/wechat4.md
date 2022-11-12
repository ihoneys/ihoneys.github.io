---
title: 小程序 component的使用和通信
date: 2019-04-10
sidebar: 'auto'
tags:
 - 微信小程序
---

## 组件的使用方法

### 一、 组件注册（定义）

1. 要编写一个自定义组件，首先需要在组件的 `json` 文件中,进行自定义组件声明（将 `component` 字段设为 `true` 可将这一组文件设为自定义组件）

```json
// 声明组件必须在组件的`json`文件中配置：
{
  "component": true
}

```

2. 在 `wxml` 文件中编写组件模板，在 `wxss` 文件中加入组件样式，它们的写法与页面的写法类似

**在组件`wxss`中不应使用ID选择器、属性选择器和标签名选择器。**

```html
<!-- component/swiper/swiper.wxml 子组件的具体内容 -->
<view class="inner">
  这是子组件内容
</view>
```

### 二、 组件使用

1. 使用已注册的自定义组件前，首先要在页面的 `json` 文件中进行引用声明。此时需要提供每个自定义组件的标签名和对应的自定义组件文件路径

```json
//  /pages/home/home.js  引用组件的页面
{
    "usingComponents": {
        "Swipe": "../../components/swipe/swipe"
    },
}
```

2. 在页面的 `wxml` 中就可以像使用基础组件一样使用自定义组件。节点名即自定义组件的标签名，节点属性即传递给组件的属性值

```html

<!-- pages/home/home.wxml  引用组件的页面 -->
<view>
  <Swipe></Swipe>
</view>
```

## 组件通信

- `WXML` 数据绑定：用于父组件向子组件的指定属性设置数据，仅能设置 JSON 兼容数据（自基础库版本 `2.0.9` 开始，还可以在数据中包含函数）。具体在 组件模板和样式 章节中介绍。
- 事件：用于子组件向父组件传递数据，可以传递任意数据。
- 如果以上两种方式不足以满足需要，父组件还可以通过 `this.selectComponent`方法获取子组件实例对象，这样就可以直接访问组件的任意数据和方法。

### 组件通信方法

- 接收父组件传过来的值用 `properties`
- 传递给父组件数据使用 `this.triggerEvent('事件名','数据')`
:::tip 其他
使用本地数据存储和全局数据也可以实现组件传值
:::

### 父传子

1. 父页面

在页面的 `wxml` 中标签

```html
<!-- 父页面引使用组件 -->
<view class="container" style="padding:0px;margin:0px">
  <Swipe name="我是谁" list="{{list}}"></Swipe>
</view>
```

数据---在页面的js文件中 `data` 存放数据`list`.

```js
// 父页面js中的数据
Page({
    data: {
        list: [{
            id: 1,
            src: 'https://images.unsplash.com/photo-1668123508904-a49a9aa6ecb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=60',
        }, {
            id: 2,
            src: 'https://images.unsplash.com/photo-1668123508904-a49a9aa6ecb8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=6'
        }
        ]
    },
});
```

在页面的 `json` 文件中进行引用组件

```json
// 页面引用组件
{
    "usingComponents": {
        "Swipe": "../../components/swipe/swipe"
    },
}
```

2. 子组件

在子组件的js文件中的定义properties

```js

// component/swiper/swiper.js   子组件用 properties 来接收数据的
Component({
    properties: {
        list: {           // 属性名
            type: Array,  // 类型（必填），目前接受的类型包括：String, Number, Boolean,
            value: [],    // 属性初始值（可选），如果未指定则会根据类型选择一个 ""、[]、{}
            observer(newVal) {
            // 用来监听当前数据变化的，当数据发生变化，他就会执行等价于vue里的watch
                console.log(newVal);
            }
        }
    },
});
// 或
/*  properties: {
    detail: {
      type: Object
    }
  }, */
```

3. 使用：在组件的`wxml`中的标签

```html
<!-- component/swiper/swiper.js 在子组件使用传递过来的数据 -->
<view>
  <swiper indicator-dots="{{true}}" autoplay="{{true}}">
    <swiper-item wx:for="{{list}}" wx:key="index">
      <image src="{{item}}" />
    </swiper-item>
  </swiper>
</view>
```

例2：
:::details

```html
// 页面 -- wxml
<view>
    <details name='父组件给子组件的值'></details>
</view>
```

接收

```js
// 组件 -- js
    properties: {
        name: {
            type: String
        }
    },
```

使用

```html
<!-- 组件 -- wxml -->
<text>
    {{name}}
</text>
```

:::

### 子传父

...

### behaviors 传值（公共数据和方法）

`behaviors` 是用于组件间代码共享的特性，类似于一些编程语言中的 `“mixins”` 或 `“traits”`。

每个 `behavior` 可以包含一组属性、数据、生命周期函数和方法。组件引用它时，它的属性、数据和方法会被合并到组件中，生命周期函数也会在对应时机被调用。 每个组件可以引用多个 `behavior` ，`behavior` 也可以引用其它 `behavior`

1. 创建公共库

```js
// my-behavior.js
module.exports = Behavior({
  behaviors: [], //behavior中还可以引入其他 behavior ---套娃
  properties: {
    myBehaviorProperty: {
      type: String
    }
  },
  data: {
    myBehaviorData: {}
  },
  attached: function(){},
  methods: {
    myBehaviorMethod: function(){}
  }
})
```

2. 使用

```js
// 引入
var myBehavior = require('my-behavior')
```

```js
// 注册
 behaviors: [myBehavior],
```

```js
// my-component.js
var myBehavior = require('my-behavior')
Component({
  behaviors: [myBehavior],
  properties: {
    myProperty: {
      type: String
    }
  },
  data: {
    myData: 'my-component-data'
  },
  created: function () {
    console.log('[my-component] created')
  },
  attached: function () {
    console.log('[my-component] attached')
  },
  ready: function () {
    console.log('[my-component] ready')
  },
  methods: {
    myMethod: function () {
      console.log('[my-component] log by myMethod')
    },
  }
})
```

## 组件的自定义事件

(通过子组件调用父组件中的事件)

1. 组件定义自定义事件

```js
<view data-id="{{detail.postId}}" bind:tap= "onTap" class="post_container">
```

```js
methods: {
    onTap(event) {
        var postid = event.currentTarget.dataset.id //获取数据（id），并传递给父页面
        this.triggerEvent('posttap', postid) //传递id给父页面
    },
}
```

2. 在引用组件的页面中使用自定义事件名绑定

```js
  <post bind:posttap="onGoToDetail" detail="{{item}}"></post>
```

```js
 onGoToDetail(event) {
     //  接收event中的 detail （id）
    var postid = event.detail
    wx.navigateTo({
        url: '/pages/post-detail/post-detail?postid=' + postid
    })
  },
```

## 其他

`focus="false"` 这样使用是不对的，实际是`true`，正确的写法是 `focus="{{false}}"`
