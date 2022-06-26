---
title: 浏览器和内核
date: 2020-05-12
 
categories:
 - 小知识
tags:
 - 浏览器内核

---
## 浏览器的内核

- 浏览器内核就是在解析代码、排版和渲染页面的核心(本文中的内核默认指排版(渲染)引擎)，在前端开发过程中，有时我们需要判断浏览器的内核前缀，对不同的浏览器做出不同的处理

浏览器内核分成两部分：渲染引擎和`js`引擎，由于`js`引擎越来越独立，内核就倾向于只指渲染引擎，渲染引擎解析`HTML`文档，并将文档中的标签转化为`DOM`节点树，即 “ 内容树 ”
<!-- more -->
![内容树](https://s1.ax1x.com/2020/10/17/0q0lWD.png)

同时，它也会解析外部`CSS`文件以及`style`标签中的样式数据。 这些样式信息连同HTML中的"可见内容" 一道被用于构建成“渲染树(`Render`树)” 。
![Render树](https://s1.ax1x.com/2020/10/17/0q03Se.png)

渲染树构建完毕之后，将会进入“布局” 处理阶段，即为每一个节点分配一个屏幕坐标。 再下一步就是绘制(`painting`)，即遍历`render`树，并使用UI后端层绘制每个节点。

渲染引擎决定了浏览器如何显示网页的内容以及页面的格式信息。不同的浏览器内核对网页代码的解释也有不同，因此同一网页在不同内核的浏览器里中渲染效果也可能不太相同，这也是网页编写者需要在不同内核的浏览器中测试网页显示效果的原因。

浏览器内核介绍：

### 1. `Trident` / `EdgeHTML`（微软）

`Trident` 内核代表产品 `Internet Explorer`，又称其为`IE`内核。`Trident`（又称为`MSHTML`），是微软开发的一种排版引擎。使用Trident渲染引擎的浏览器包括：IE、傲游、世界之窗浏览器、`Avant`、腾讯`TT`、`Netscape 8`、`NetCaptor`、`Sleipnir`、`GOSURF`、`GreenBrowser`和`KKman`等。

新版的`Edge`浏览器使用的内核是`EdgeHTML`本质上不是对`Trident`的完全推翻重建，而是在`Trident`基础上删除了过时的旧技术支持的代码，扩展和优化了对新的技术的支持，所以也被看做是全新的内核.

### 2. `Gecko`（火狐）

`Gecko` 内核代表作品`Mozilla Firefox`,火狐的`Gecko`是一套开放源代码的、以`C++`编写的网页排版引擎,任何程序员都能为其提供扩展和建议。`Gecko`是当年最流行的排版引擎之一，仅次于`Trident`。使用它的最著名浏览器有`Firefox`、`Netscape6至9`。火狐的内核历经`SpiderMonkey`、`TraceMonkey`到现在的`JaegerMonkey`。其中`JaegerMonkey`部分技术借鉴了`V8`、`JSCore`和`Webkit`，算是集思广益.

### 3. `WebKit`（苹果）

`WebKit` 内核代表作品`Safari`、(`Chrome` 起源于`WebKit`，但是在此基础上改进为`Chromium`内核),`webkit` 是一个开源项目，包含了来自KDE项目和苹果公司的一些组件，主要用于`Mac OS`系统，它的特点在于源码结构清晰、渲染速度极快。缺点是对网页代码的兼容性不高，导致一些编写不标准的网页无法正常显示。主要代表作品有`Safari`和`早期Chrome`。

### 4. `Chromium`（谷歌前期使用）

`Chrome`发布于`2008`年，使用的渲染内核是`Chromium`，`fork`自苹果的`Webkit`内核，但把`Webkit`梳理得更有条理可读性更高，效率提升明显，后期谷歌联手`Opera`自研和发布了`Blink`引擎

### 5. `Blink`（谷歌、欧朋）

`Blink`内核诞生于2013年4月，采用其内核的主流浏览器有`Chrome(v28+)`、`Opera(v15+)`、`Vivaldi`、`AmazonSilk`等。
`Blink`内核是`WebKit`内核中的`WebCore`组件的一个分支，即在`WebCore`的基础上进行二次开发的，增加了一些新的功能和特色。(在某些内核检测工具里，会检测为`WebKit`内核)

### 6. `Presto`（Opera前内核,已废弃）

`Presto`内核代表作品`Opera`,`Presto`是由`Opera Software`开发的浏览器排版引擎，供`Opera 7.0`及以上使用。它取代了旧版`Opera 4至6`版本使用的`Elektra`排版引擎，包括加入动态功能，例如网页或其部分可随着`DOM`及`Script`语法的事件而重新排版。

## 浏览器

### IE / Edge

使用Trident内核的有 : `IE6`、`IE7`、`IE8`（`Trident 4.0`）、`IE9`（`Trident 5.0`）、`IE10`（`Trident 6.0`）微软的IE浏览器浏览器更新至`IE10`后，伴随着`WIN10`系统的上市，迁移到了全新的浏览器`Edge`。除了`JS`引擎沿用之前`IE9`就开始使用的查克拉(`Chakra`)，渲染引擎使用了新的内核`EdgeHTML`（本质上不是对`Trident`的完全推翻重建，而是在`Trident`基础上删除了过时的旧技术支持的代码，扩展和优化了对新的技术的支持，所以被看做是全新的内核）

### Safari

`Safari`自2003年面世，就一直是苹果公司的产品自带的浏览器，它使用的是苹果研发和开源的`Webkit`引擎。`Webkit`引擎包含`WebCore`排版引擎及`JavaScriptCore`解析引擎，均是从`KDE`的`KHTML`及`KJS`引擎衍生而来。`Webkit2`发布于2010年，它实现了元件的抽象画，提高了元件的重复利用效率，提供了更加干净的网页渲染和更高效的渲染效率。另外，`Webkit`也是苹果`Mac OS X`系统引擎框架版本的名称，主要用于`Safari`、`Dashboard`、`Mail`.

### Chrome

提到`Chrome`浏览器，一般人会认为使用的`Webkit`内核，这种说法不完全准确。`Chrome`发布于2008年，使用的渲染内核是`Chromium`，它是`fork`自`Webkit`。2013年，由于`Webkit2`和`Chromium`在沙箱设计上的冲突，谷歌联手`Opera`自研和发布了`Blink`引擎，逐步脱离了`Webkit`的影响。所以，可以这么认为：`Chromium`扩展自`Webkit`止于`Webkit2`，其后`Chrome`切换到了`Blink`引擎。另外，`Chrome`的`JS`引擎使用的`V8`引擎，应该算是最著名和优秀的开源`JS`引擎，大名鼎鼎的`Node.js`就是选用`V8`作为底层架构。

### Opera(欧朋)

`Opera`在`2013`年`V12.17`之前使用的是`Opera Software`公司开发的`Presto`引擎，之后连同谷歌研发和选择`Blink`作为`Opera`浏览器的排版内核至今。

## 检测

1. 通过在线访问检测网站鉴定浏览器内核
   [检测网站1](http://chrome.360.cn/test/core/)   [检测网站2](http://ie.icoa.cn/)  [检测网站3](http://pc.uc.cn/core/)
2. js判断浏览器版本以及浏览器内核的方法：

代码如下（JavaScript）

```js
if (!browser.ie && !browser.mac) {
var UA = navigator.userAgent.toLowerCase().toString();
//判断是不是IE内核下的非IE版本
if ((UA.indexOf('360ee') > -1) || (UA.indexOf('360se') > -1) || (UA.indexOf('se') > -1) || (UA.indexOf('aoyou') > -1)
|| (UA.indexOf('theworld') > -1) || (UA.indexOf('worldchrome') > -1) || (UA.indexOf('greenbrowser') > -1)
|| (UA.indexOf('baidu') > -1) || (UA.indexOf('qqbrowser') > -1)) {
//是的话切换兼容模式
window.open("publicPage/point-se.aspx");
}
else {
//不是的话，建议更换浏览器
alert('建议换成IE内核的浏览器');
}
}
else {
//判断IE的版本型号
if ( (browser.version == 10 && browser.ie10Compat) || (browser.version == 11 && browser.ie11Compat)) {
window.open("publicPage/point.aspx");
}
/*
* @desc 判断浏览器的版本以及浏览器内核
* @author wangyanling
* @date 2014年7月4日
*/
var browser = function () {
var agent = navigator.userAgent.toLowerCase(),
opera = window.opera,
browser = {
//检测当前浏览器是否为IE
ie: /(msie\s|trident.*rv:)([\w.]+)/.test(agent),
//检测当前浏览器是否为Opera
opera: (!!opera && opera.version),
//检测当前浏览器是否是webkit内核的浏览器
webkit: (agent.indexOf(' applewebkit/') > -1),
//检测当前浏览器是否是运行在mac平台下
mac: (agent.indexOf('macintosh') > -1),
//检测当前浏览器是否处于“怪异模式”下
quirks: (document.compatMode == 'BackCompat')
};
//检测当前浏览器内核是否是gecko内核
browser.gecko = (navigator.product == 'Gecko' && !browser.webkit && !browser.opera && !browser.ie);
var version = 0;
// Internet Explorer 6.0+
if (browser.ie) {
var v1 = agent.match(/(?:msie\s([\w.]+))/);
var v2 = agent.match(/(?:trident.*rv:([\w.]+))/);
if (v1 && v2 && v1[1] && v2[1]) {
version = Math.max(v1[1] * 1, v2[1] * 1);
} else if (v1 && v1[1]) {
version = v1[1] * 1;
} else if (v2 && v2[1]) {
version = v2[1] * 1;
} else {
version = 0;
}
//检测浏览器模式是否为 IE11 兼容模式
browser.ie11Compat = document.documentMode == 11;
//检测浏览器模式是否为 IE9 兼容模式
browser.ie9Compat = document.documentMode == 9;
//检测浏览器模式是否为 IE10 兼容模式
browser.ie10Compat = document.documentMode == 10;
//检测浏览器是否是IE8浏览器
browser.ie8 = !!document.documentMode;
//检测浏览器模式是否为 IE8 兼容模式
browser.ie8Compat = document.documentMode == 8;
//检测浏览器模式是否为 IE7 兼容模式
browser.ie7Compat = ((version == 7 && !document.documentMode) || document.documentMode == 7);
//检测浏览器模式是否为 IE6 模式 或者怪异模式
browser.ie6Compat = (version < 7 || browser.quirks);
browser.ie9above = version > 8;
browser.ie9below = version < 9;
}
// Gecko.
if (browser.gecko) {
var geckoRelease = agent.match(/rv:([\d\.]+)/);
if (geckoRelease) {
geckoRelease = geckoRelease[1].split('.');
version = geckoRelease[0] * 10000 + (geckoRelease[1] || 0) * 100 + (geckoRelease[2] || 0) * 1;
}
}
//检测当前浏览器是否为Chrome, 如果是，则返回Chrome的大版本号
if (/chrome\/(\d+\.\d)/i.test(agent)) {
browser.chrome = +RegExp['\x241'];
}
//检测当前浏览器是否为Safari, 如果是，则返回Safari的大版本号
if (/(\d+\.\d)?(?:\.\d)?\s+safari\/?(\d+\.\d+)?/i.test(agent) && !/chrome/i.test(agent)) {
browser.safari = +(RegExp['\x241'] || RegExp['\x242']);
}
// Opera 9.50+
if (browser.opera)
version = parseFloat(opera.version());
// WebKit 522+ (Safari 3+)
if (browser.webkit)
version = parseFloat(agent.match(/ applewebkit\/(\d+)/)[1]);
//检测当前浏览器版本号
browser.version = version;
return browser;
}();
```
