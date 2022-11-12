---
title: 小程序 生命周期
date: 2019-04-08
sidebar: 'auto'
tags:
 - 微信小程序
publish: true
# 打赏
showSponsor: true
---

## App 生命周期(3个)

| 执行顺序 | 命令       | 作用                      |
| :------- | :--------- | :------------------------ |
| 1        | `onLaunch` | 小程序初始化              |
| 2        | `onShow`   | 小程序显示--切换\重新显示 |
| 3        | `onHide`   | 小程序隐藏                |

```js

App({
  // 全局数据
  globalData: 1,

  /**
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch: function () {
    console.log("小程序启动")
  },

  /**
   * 当小程序启动，或从后台进入前台显示，会触发 onShow
   */
  onShow: function (options) {
    console.log('小程序显示')
  },

  /**
   * 当小程序从前台进入后台，会触发 onHide
   */
  onHide: function () {
    console.log('小程序隐藏')
  },

  /**
   * 当小程序发生脚本错误，或者 api 调用失败时，会触发 onError 并带上错误信息
   */
  onError: function (msg) {
    console.log('小程序错误',msg)
  },
})

```

## Page 生命周期(5个)

| 执行顺序 | 命令       | 作用                                                                 |
| :------- | :--------- | :------------------------------------------------------------------- |
| 1        | `onLoad`   | 页面加载 在这里发起自动请求，路由传递的参数也在该函数里获取 执行一次 |
| 2        | `onShow`   | 页面显示 执行多次(重新加载某页面时用的方法写在这里)                  |
| 3        | `onReady`  | 页面初次渲染完成 只会执行一次                                        |
| 4        | `onHide`   | 页面隐藏 执行多次                                                    |
| 5        | `onUnload` | 页面卸载（销毁） 页面被关闭了 ,在这里清除定时器、全局变量、轮询接口  |

### Page里的三个常用函数

- `onPullDownRefresh` 监听用户下拉动作

下拉请求数据（刷新）

- `onReachBottom` 页面上拉触底事件的处理函数

用户向上拉（向上滚动）到底的时候，加载数据等

- `onShareAppMessage`(分享)

用户点击右上角分享

```js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        test: 123
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
        console.log('1. 页面加载')
    },
    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function () {
        console.log('3. onReady')
    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function () {
        console.log('2. onShow,重新显示')
    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function () {
        console.log('4. onHide')
    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function () {
        console.log('5. unUnload')
    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function () {
        console.log('onPullDownRefresh')
    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function () {
        console.log('onReachBottom')
    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {
        console.log('onShareAppMessage')
    }
})
```

## component 生命周期

- `created`

在组件实例刚刚被创建时执行，注意此时不能调用 `this.setData`

- `ready`

在组件布局完成后执行

- `detached`

在组件实例被从页面节点树移除时执行（等价于销毁）
