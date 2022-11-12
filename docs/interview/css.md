---
title: CSS 
subtitle: CSS 相关面试题 # 博客副标题（可选）
date: 2022-04-01
sidebar: 'auto'
categories:
 - 面试题
tags:
 - CSS
 - 面试题
---

## dispaly: none, opacity: 0 ,visibility: hiddlen

### display: none;

1. DOM 结构：浏览器不会渲染 display 属性为 none 的元素，不占据空间；
2. 事件监听：无法进行 DOM 事件监听；
3. 性能：动态改变此属性时会引起重排，性能较差；
4. 继承：不会被子元素继承，毕竟子类也不会被渲染；
5. transition：transition 不支持 display。

### visibility: hidden;

1. DOM 结构：元素被隐藏，但是会被渲染不会消失，占据空间；
2. 事件监听：无法进行 DOM 事件监听；
3. 性 能：动态改变此属性时会引起重绘，性能较高；
4. 继 承：会被子元素继承，子元素可以通过设置 visibility: visible; 来取消隐藏；
5. transition：visibility 会立即显示，隐藏时会延时

### opacity: 0;

1. DOM 结构：透明度为 100%，元素隐藏，占据空间；
2. 事件监听：可以进行 DOM 事件监听；
3. 性 能：提升为合成层，不会触发重绘，性能较高；
4. 继 承：会被子元素继承,且，子元素并不能通过 opacity: 1 来取消隐藏；
5. transition：opacity 可以延时显示和隐藏

## 伪元素和伪类的区别？

[参考地址](http://www.alloyteam.com/2016/05/summary-of-pseudo-classes-and-pseudo-elements/#prettyPhoto)

## CSS垂直居中的方案？

- position + 负 margin （需要提前知道元素大小，才能给 margin 赋值）
- position + transform: translate
- 绝对定位 + margin: auto
- padding（前提需要知道子元素大小）
- flex 布局
- felx 弹性布局，反方向设置主轴方向。
- line-height + vertical-align:middle 实现图片居中
- display: table，子元素设置 dispaly: table-cell + vertical-align: middle。容器文字居中
- gird 布局（浏览器兼容性差。）

[参考地址](https://juejin.cn/post/6844903550909153287)

## parent元素宽高不定，实现scale固定宽高比始终为4：3 ？

[参考地址](https://codeantenna.com/a/dQ15SxjE8M)

## transition、transform、translate的区别 ？

- transform：字面意思是：使…变形。
- transition：字面翻译是过渡的意思。
- translate：意思就是平移。

[参考地址](https://juejin.cn/post/6844903945987424264)

## flex：1

flex 属性是 `flex-grow` 、`flex-shrink`、`flex-basis`的简写。默认值是 `0 1 auto`。

`flex-grow`: 如果有剩余空间，是否扩大，`0` 为不扩大。

`flex-shrink`：如果剩余空间不够，是否缩小，`1`为缩小。

`flex-basis`：为项目本身的大小，默认值为`auto`。

## 如何画一条 0.5px 的边框？

[参考地址](https://juejin.cn/post/6844903582370643975)

## css和js两种方式实现div右移1000px动画；

[参考地址](https://zhuanlan.zhihu.com/p/203746698)

- css方式
- tranform + translate 位移
- animation方式，定义一个 `@keyframes`
- js 方式
- position 设置 left 或者 right，然后 setTimeout 执行 style.left 元素位置。

## 三栏式布局方案

[参考地址](https://zhuanlan.zhihu.com/p/25070186)

[参考地址](https://juejin.cn/post/6844904062224171021#heading-6)

- 流体布局
- 设置 float，然后设置 margin
- postion + margin
- 圣杯布局（三栏都设置float：left，center 也就是中间元素设置 width： 100%，父元素设置一个 clear：box需要清除浮动避免下方拥挤上来。然后左右元素设置 margin-left，还有添加 position）
- 双飞翼布局（和圣杯布局差不多，不过中间元素需要一个父盒子包裹起来，中间元素的父盒子需要设置 `margin： 0 左右元素的宽度`left 元素 设置 `margin-left：-100%`为了左元素回到最开始的位置。）

## 响应式方案

[参考地址](https://juejin.cn/post/6844903814332432397)

- 媒体查询（@media screen（0px - 800px）{ }）
- 缺点：体查询需要选取主流设备宽度尺寸作为断点针对性写额外的样式进行适配，但这样做会比较麻烦，只能在选取的几个主流设备尺寸下呈现完美适配，另外用户体验也不友好，布局在响应断点范围内的分辨率下维持不变，而在响应断点切换的瞬间，布局带来断层式的切换变化，如同卡带的唱机般“咔咔咔”地一下又一下。
- 百分比布局（子元素使用百分比。）
- 缺点： 通过百分比来适配首先是计算麻烦，第二各个属性中如果使用百分比，其相对的元素的属性并不是唯一的，这样就造成我们使用百分比单位容易使布局问题变得复杂。
- rem 布局 + 媒体查询方案 设置 font-size 字体大小。
- 缺点：通过百分比来适配首先是计算麻烦，第二各个属性中如果使用百分比，其相对的元素的属性并不是唯一的，这样就造成我们使用百分比单位容易使布局问题变得复杂。
- 视口单位（vh，vw）
- 缺点：通过利用纯css视口单位实现适配的页面，是既能解决响应式断层问题，又能解决脚本依赖的问题的，但是兼容性还没有完全能结构接受。
- 图片响应式
- 使用 max-width： 100%
- img srcset属性
- background-image
- picture 标签 + source 标签

**响应式注意点：**

- **设置 viewport**
- **媒体查询**
- **字体适配**
- **百分比单位**
- **图片的适配（图片响应式）**
- **结合 flex，grid，BFC，栅格化系统**

## img 标签中的 srcset 属性？

## BFC 概念？

[参考地址](https://zhuanlan.zhihu.com/p/25321647)

BFC 其实就是块级格式化上下文。它是用来形成独立的渲染区域让渲染区域的 内部元素不会影响外界。

应用场景：比如说我给元素浮动了，他会脱离文档流，但是我们又想让他正常只浮动位置，不脱离文档流。因此需要形成 BFC ，在元素添加 float： none 或者使用 overflow：hidden 来制造 BFC。

还有就两个div 元素我设置了 margin：100px，那么 div 上下之间的距离只有 100px，外边距会被重叠。这时候想制造一个 BFC 那么需要给 div 包裹一层父元素那么就会被重叠了。

## **tranform 用来做什么的？**

## css 合成层（渲染构建阶段）？

**transform:translate 为什么不会触发重排**

GPU 会开启一个新的复合层，不会影响默认复合图层（也就是普通文档流），所以并不会影响周边的 DOM 结构。而属性的改变会交给GPU处理，不会进行重排。使 GPU 进程开启一个新的复合图层的方式还有 3D 动画，过渡动画，以及 opacity 属性，还有一些标签，这些都可以创建新的复合图层。这些方式叫做硬件加速方式。