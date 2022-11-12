---
title: 小程序 pages间的通信
date: 2019-04-13
sidebar: 'auto'
tags:
 - 微信小程序
---
## 页面传值(三种)

- 一 通过url地址拼接

1. 正向传值：A界面 -->B界面

- 第一种

发送

```html
<!-- 页面A 在wxml文件中 -->
<navigator url="/pages/test2/test2?id=123">123</navigator>
```

接收

```js
// 页面B的js文件中---生命周期onLoad中
onLoad: function (options) {
    console.log(options)
},
```

- 第二种

发送

```html
<!-- 页面A 在wxml文件中 -->
<text bindtap="goTotest2">123</text>
```

```js
// 页面A 在js文件中定义一个方法，跳转到test2
goTotest2: function () {
    wx.navigateTo({
        url: '/pages/test2/test2?a=123',
    })
},
// 或者
data: {
    test: 123
},
goTotest2: function () {
    wx.navigateTo({
        url: '/pages/test2/test2?a='+this.data.test,
    })
},
```

接收

```js
// 页面B的js文件中---生命周期onLoad中
onLoad: function (options) {
    console.log(options)
},
```

2. 反向传值：B界面 -->A界面
在B界面需要传值地方代码如下

```js
const pages = getCurrentPages() // 获取栈中全部界面的, 然后把数据写入相应界面
const currentPage  = pages[pages.length - 1]  //当前界面
const prePage = pages[pages.length - 2]  //上一个界面
const that = this
prePage.setData({
    id: that.data.id,
})
```

在A界面需要接受B界面传过来值码如下：这里要在`onShow`方法里面重新调用你的数据请求，为了验证是否传值成功，你可以打印验证

```js
/**
* 生命周期函数--监听页面显示
*/
onShow: function () {
    //获取数据
    this.gainData()
    // 打印你的传值
    console.log("res==", this.data.res)
},
```

:::warning 注
由于你从B界面返回A界面使用了`wx.navigateBack`，所以当你回到A界面后`onLoad`、`onReady`方法不响应，`onShow`方法响应，所以这里你需要特别注意--生命周期
:::

- 二 本地存储数据
:::warning
tips:本地数据存储的大小限制为 10MB
:::
每个微信小程序都可能用到本地缓存数据，这里我们可以通过调用微信提供的方法：wx.setStorage、wx.setStorageSync、wx.getStorage、wx.getStorageSync、wx.clearStorage、wx.clearStorageSync、实现对数据本地缓存、获取、清除。

在A界面获取数据并缓存到本地

```js
wx.setStorageSync('user_info', dic);
```

在B界面获取数据并缓存到本地

```js
const user_info = wx.getStorageSync("user_info")
this.setData({
    username: user_info.username
});
```

从本地缓存中同步移除指定 key。这里具体使用同步或是异步需要根据你存储时的方法，或是同步清理本地数据缓存wx.learStorageSync()

```js
wx.removeStorageSync("user_info")
```

同理你可以在B界面传值在A界面取值，只不过这里你需要注意存储、获取的顺序，先存后取，否则你是拿不到值的。

- 三 全局数据 app对象

这里你需要在`app.js`文件，定义你要全局使用的数据

```js
App({
    //用户数据
    appData: {
        user_info:null,
    }
})
```

在你需要赋值的地方引用`app`,代码如下：

```js
const app = getApp();
app.appData.user_info = {"username"："jane"};
```

在你需要取值的地方引用`app`,代码如下：

```js
const app = getApp();
const user_info = app.appData.user_info;
this.setData({
    username: user_info.username
});
```

:::tip
第二三种也可以在组件间共享数据
:::

## 例子

### 1 . 发送

- 发送数据的页面

```html
<!-- wxml页面 -->
<view class="inputmax">
    <!--  bind:input="username" 获取input框的数据 -->
    <input class="inputbox" bind:input="username" type="text" placeholder="First Name"></input>
    <input class="inputbox" bind:input="password" type="text" placeholder="Email Address"></input>
    <navigator url="/pages/index/index?name={{name}}&pass={{pass}}" class="butt">
    <!-- ?name={{name}}&pass={{pass}} 拼接在路径中传递 -->
        <span class="inputfoot">SUBSCRIBE</span>
    </navigator>
</view>
```

- 发送的数据 / 方法

```js
// js页面
Page({
    data: {
        pass: "",
        name: "",
    },
    onLoad: function (options) {
    },
    username(e) {
        this.setData({
            name: e.detail.value
        })
    },
    password(e) {
        this.setData({
            pass: e.detail.value
        })
    },
})
```

### 2 . 接收及使用

- 接收

```js
Page({
    data: {
        text: "",
        }

    onLoad: function (data) {
        this.setData({
            text: data
        })
        console.log(data);
    }
})

```

- 使用

```html
<view>
    {{text.name}}
    {{text.pass}}
</view>
```
