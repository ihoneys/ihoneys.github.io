---
title: 适配的5种方案
date: 2021-04-12
tags:
 - 移动适配
---

## 适配的目的

为了在不同大小屏幕的手机中拥有一致的UI界面。

## viewport

看到这个我们绝对不会陌生，没错就是在`html`文件中`head`头部定义的`meta`标签

这是我们的初始设置：

```html
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
```

viewport即视窗、视口，用于显示网页面部分的区域，PC端视口即是浏览器的窗口区域，在移动端，为了让页面展示更多的内容，视窗的宽度默认不为设备的宽度。在移动端视窗有三个概念：布局视窗、视觉视窗、理想视窗

- 布局视窗：为了能在移动设备上正常显示那些为pc端浏览器设计的网站，移动设备上的浏览器都会把自己默认的 viewport 设为 980px 或其他值，一般都比移动端浏览器可视区域大很多，所以就会出现浏览器出现横向滚动条的情况
- 视觉视窗：终端设备显示网页的区域
- 理想视窗：会出现横向滚动条，页面刚好全部展现在视窗内，理想视窗也就是终端屏幕的宽度。

**布局视窗**

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4c0a5f8691f3471885cd54e35317240a~tplv-k3u1fbpfcp-zoom-1.image)

默认布局窗口宽度为`980`px

**视觉视窗**

![img](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/80a90d5e0e6744a8af7de3388bc71a46~tplv-k3u1fbpfcp-zoom-1.image)

超出部分可以滑动查看完整部分。

**理想视窗**

移动端设置`viewport`之后

```html
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
```

`width` 设置等于设备的宽度，所以视窗只有`375px`宽度

## `viewport` 设置介绍

<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, minimum-sacle=1, maximum-scale=1" >

| 属性          | 含义                       | 取值                             |
| :------------ | :------------------------- | :------------------------------- |
| width         | 定义视口的宽度，单位为像素 | 正整数或设备宽度device-width     |
| height        | 定义视口的高度，单位为像   | 正整数或device-height            |
| initial-scale | 定义网页初始缩放值         | 整数或小数，小数为缩小，反之放大 |
| maximum-scale | 定义缩放最大值             | 整数或小数                       |
| minimum-scale | 定义缩放最小值             | 整数或小数                       |
| user-scalable | 定义用户是否可以缩放       | yes/no                           |

> 在 iphone 中默认页面是可以被缩放的，设置 `user-scalable = no`可以解决如果禁止缩放问题

## 适配方案

介绍了视窗的概念，以及配置，下面看看目前常用的移动端适配的几种方案。

- rem布局
- vw/vh布局
- 百分比布局
- 响应式布局
- px为主，搭配vw/vh、媒体查询与flex布局

### rem 布局

`rem` 是CSS3新增的一个相对单位，它以 `HTML` 元素的 `font-size` 为比例：

```css
html {
	font-size: 16px  /* ----> 1rem = 16px */
}
.width {
	width: 10rem  /* 160 px*/  
}
```

最后 rem的比例，取决于 根元素 html { font-size: 16px}  设置的值 进行换算

设置`font-size`大小的原理也很简单，通过`document.documentElement.getBoundingClientRect().width`获取视口的宽度，或者`document.documentElement.clientWidth`，根据 `document.documentElement.clientWidth（375） / 750 = 0.5` 得到 font-size大小（750则是普通 px 的两倍值）再通过 `document.documentElement.style.fontSize` 设置字体值。

创建**rem.js**文件

```js
(function (designWidth, maxWidth) {
    var doc = document,
        win = window;
    var docEl = doc.documentElement;
    var tid;
    var rootItem, rootStyle;

    function refreshRem () {
        var width = docEl.getBoundingClientRect().width;
        if (!maxWidth) {
            maxWidth = 540;
        }
        if (width > maxWidth) {
            width = maxWidth;
        }
        //与淘宝做法不同，直接采用简单的rem换算方法1rem=100px
        var rem = width * 100 / designWidth;
        //兼容UC开始
        rootStyle = "html{font-size:" + rem + 'px !important}';
        rootItem = document.getElementById('rootsize') || document.createElement("style");
        if (!document.getElementById('rootsize')) {
            document.getElementsByTagName("head")[0].appendChild(rootItem);
            rootItem.id = 'rootsize';
        }
        if (rootItem.styleSheet) {
            rootItem.styleSheet.disabled || (rootItem.styleSheet.cssText = rootStyle)
        } else {
            try {
                rootItem.innerHTML = rootStyle
            } catch (f) {
                rootItem.innerText = rootStyle
            }
        }
        //兼容UC结束
        docEl.style.fontSize = rem + "px";
    }
    refreshRem();

    win.addEventListener("resize", function () {
        clearTimeout(tid); //防止执行两次
        tid = setTimeout(refreshRem, 300);
    }, false);

    win.addEventListener("pageshow", function (e) {
        if (e.persisted) { // 浏览器后退的时候重新计算
            clearTimeout(tid);
            tid = setTimeout(refreshRem, 300);
        }
    }, false);

    if (doc.readyState === "complete") {
        doc.body.style.fontSize = "16px";
    } else {
        doc.addEventListener("DOMContentLoaded", function () {
            doc.body.style.fontSize = "16px";
        }, false);
    }
})(375, 750);
```

在对应的文件引入即可。

#### postcss-pxtorem

在vue项目中，对`postcss-pxtorem`一点也不会默认，没错这个插件也可以在打包编译的时候自动将`px`转换为`rem`

安装下载 `postcss-pxtorem`

```
npm i postcss-pxtorem -D
```

与`package.json`同级目录创建`postcss.config.js`文件

```js
module.exports = {
    plugins: {
        autoprefixer: {
            overrideBrowserslist: [
                "Android 4.1",
                "iOS 7.1",
                "Chrome > 31",
                "ff > 31",
                "ie >= 8",
                "last 10 versions", // 所有主流浏览器最近10版本用
            ],
            grid: true,
        },
        'postcss-pxtorem': {
            rootValue: 37.5, // font-size大小
            propList: ['*'],
            unitPrecision: 5
        }
    }
}
```

这里只实现了 `px`转`rem`，还要安装 `amfe-flexible`

```
npm i amfe-flexible -D
```

在`main.js`文件中 import 一下就好可以了

```js
import ‘amfe-flexible/index.js’
```

#### 总结

**优点**

rem 布局能很好的实现在不同尺寸的屏幕横向填满屏幕，且在不同屏幕元素大小比例一致

**缺点**

缺点：在大屏设备（Pad）上，元素尺寸会很大，页面显示更少的内容。

针对大屏幕改进方案：

1. 限制rem 的最大值
2. 通过媒体查询，限制内容的最大宽度

###  vw/vh 布局

也是一样，在Vue项目中，仍然有插件帮我们满足需求

#### postcss-px-to-viewport

安装并使用 `postcss-px-to-viewport`

```
npm i postcss-px-to-viewport -D
```

与`package.json`同级目录创建`postcssrc.js`文件

```js
module.exports = {
  plugins: {
    autoprefixer: {}, // 用来给不同的浏览器自动添加相应前缀，如-webkit-，-moz-等等
    'postcss-px-to-viewport': {
      unitToConvert: 'px', // 要转化的单位
      viewportWidth: 750, // UI设计稿的宽度
      unitPrecision: 6, // 转换后的精度，即小数点位数
      propList: ['*'], // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      viewportUnit: 'vw', // 指定需要转换成的视窗单位，默认vw
      fontViewportUnit: 'vw', // 指定字体需要转换成的视窗单位，默认vw
      selectorBlackList: ['wrap'], // 指定不转换为视窗单位的类名，
      minPixelValue: 1, // 默认值1，小于或等于1px则不进行转换
      mediaQuery: true, // 是否在媒体查询的css代码中也进行转换，默认false
      replace: true, // 是否转换后直接更换属性值
      exclude: [/node_modules/], // 设置忽略文件，用正则做目录名匹配
      landscape: false, // 是否处理横屏情况
    },
  },
};
```

#### 总结

**优点**

vw/vh布局能实现在不同尺寸的屏幕横向填满屏幕

**缺点**

- 无法修改 vw/vh 的值，在大屏设备（Pad）中元素会放大，且无法通过 js 干预
- 兼容性- 大多数浏览器都支持、ie11不支持 少数低版本手机系统 ios8、android4.4以下不支持

### 百分比布局

使用百分比布局，但是需要特定的宽度时，对于百分比的计算并不是友好，且元素百分比参考的对象是**父元素**，元素前端较深时会有问题，很容易错乱。对于维护也是很头痛

场景：设计稿为 750*1136，我们需要一个宽度为 200px 的盒子

```css
.box {
  /* w = 200 / (750/100) = 26.66667 */
  /* 可知，计算复杂，且会存在误差 */
  width: 26.6%;
}
```

**扩展：** 子元素的 `width` 和 `height` 百分比参考对象是父元素的 `width` 和 `height`，`margin`、`padding` 的参考对象为父元素的 `width`，`border-radius`、`background-size`、`transform: translate()`、`transform-origin` 的参考对象为自身宽高

#### **总结**

**缺点**

1.  计算困难
2. 各个属性使用百分比，相对于父元素的属性并不是唯一的，造成使用百分比单位布局使用分局问题变得复杂

### 响应式布局

通过媒体查询，针对不同的屏幕进行单独设置，但是针对所有屏幕去编写好几套 样式，显然不合理的，通常我们只针对大屏幕（ipad）来特殊处理

**CSS3 @media 查询**

```css
@media screen and (max-width: 300px) {
  body {
    background-color:lightblue;
  }
}
```

### px 为主，搭配 vw/vh、媒体查询与 flex 进行布局

从页面角度出发，页面中更多的是文本和布局，关于文本，我们应该使用`px`作为单位，来显示大屏幕设备显示更多的内容，而不是更大的文本；关于布局，我们可以使用flex弹性布局，当有些元素特定的宽高，使用`vw/vh`，当特定的值使用vw/vh难以计算或存在误差，我们可以使用rem

编写 `<meta>` 标签设置 `viewport` 的内容 `width=device-width`，让网页宽度等于视窗宽度

## 总结

介绍完这几种自适应布局，在移动端项目中常用还是rem布局会使用得比较多，第一个误差小，好计算，兼容性都还不错，但是其他的几种方案也很好。具体还需要根据自己的项目场景去选择合适的方案去应用。

