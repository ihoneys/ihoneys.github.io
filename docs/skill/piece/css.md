---
title: CSS
date: 2020-03-31
categories:
 - base.css
tags:
 - css
---

## 初始化标签默认样式

- 全局样式比其他自定义样式权重低，所以要先引入全局通用样式，再引入其他样式：

```css
/* reset.css */
html,
body,
h1,
h2,
h3,
h4,
h5,
h6,
div,
dl,
dt,
dd,
ul,
ol,
li,
p,
blockquote,
pre,
hr,
figure,
table,
caption,
th,
td,
img,
form,
fieldset,
legend,
input,
button,
textarea,
menu {
    padding: 0;
    margin: 0;
}
body {
    text-align:center;
    font-family: "宋体";
    /* font-size:12px; */
}
ul,ol,li {
    list-style:none;
}
a {
text-decoration:none;
}
input,button,img {
    border:none;
    vertical-align:middle;
}
/* 清除浮动 */
.clear{
    clear:both;
}
```

###  codewhy 的 base.css 文件

```css

@import "./normalize.css";
/* :root 获取的根 就是 html

定义的变量，其他地方可以直接使用变量

如

定义
:root {
  --large-size:50px;
}

使用
div{
  font-size: var(--large-size);
}

*/
:root {
  --color-text: #666;
  --color-high-text: #ff5777;
  --color-tint: #ff8198;
  --color-background: #fff;
  --font-size: 14px;
  --line-height: 1.5;
}

*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
  user-select: none; /* 禁止用户鼠标在页面上选中文字/图片等 */
  -webkit-tap-highlight-color: transparent; /* webkit是苹果浏览器引擎，tap点击，highlight背景高亮，color颜色，颜色用数值调节 */
  background: var(--color-background);
  color: var(--color-text);
  width: 100vw;
}

a {
  color: var(--color-text);
  text-decoration: none;
}


.clear-fix::after {
  clear: both;
  content: '';
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}

.clear-fix {
  zoom: 1;
}

.arrow-right {
  border-top: 1px solid #999;
  border-left: 1px solid #999;
  width: 9px;
  height: 9px;
  background-color: transparent;
  transform: rotate(135deg);
  display: inline-block;
  margin-left: .1rem;
}

.left {
  float: left;
}

.right {
  float: right;
}
```

### 常用1
base.css，作用是重设浏览器默认样式和提供通用原子类

```css
@charset "utf-8";
/* CSS Document */
@charset "utf-8";
/*!
 * @名称：base.css
 * @功能：1、重设浏览器默认样式
 *       2、设置通用原子类
 */
/* 防止用户自定义背景颜色对网页的影响，添加让用户可以自定义字体 */
html {
    background:white;
    color:black;
}
/* 内外边距通常让各个浏览器样式的表现位置不同 */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    margin:0;
    padding:0;
}
/* 要注意表单元素并不继承父级 font 的问题 */
body,button,input,select,textarea {
    font:12px \5b8b\4f53,arial,sans-serif;
}
input,select,textarea {
    font-size:100%;
}
/* 去掉 table cell 的边距并让其边重合 */
table {
    border-collapse:collapse;
    border-spacing:0;
}
/* ie bug：th 不继承 text-align */
th {
    text-align:inherit;
}
/* 去除默认边框 */
fieldset,img {
    border:none;
}
/* ie6 7 8(q) bug 显示为行内表现 */
iframe {
    display:block;
}
/* 去掉 firefox 下此元素的边框 */
abbr,acronym {
    border:none;
    font-variant:normal;
}
/* 一致的 del 样式 */
del {
    text-decoration:line-through;
}
address,caption,cite,code,dfn,em,th,var {
    font-style:normal;
    font-weight:500;
}
/* 去掉列表前的标识，li 会继承 */
ol,ul {
    list-style:none;
}
/* 对齐是排版最重要的因素，别让什么都居中 */
caption,th {
    text-align:left;
}
/* 来自yahoo，让标题都自定义，适应多个系统应用 */
h1,h2,h3,h4,h5,h6 {
    font-size:100%;
    font-weight:500;
}
q:before,q:after {
    content:'';
}
/* 统一上标和下标 */
sub,sup {
    font-size:75%;
    line-height:0;
    position:relative;
    vertical-align:baseline;
}
sup {
    top:-0.5em;
}
sub {
    bottom:-0.25em;
}
/* 让链接在 hover 状态下显示下划线 */
a:hover {
    text-decoration:underline;
}
/* 默认不显示下划线，保持页面简洁 */
ins,a {
    text-decoration:none;
}
/* 去除 ie6 & ie7 焦点点状线 */
a:focus,*:focus {
    outline:none;
}
/* 清除浮动 */
.clearfix:before,.clearfix:after {
    content:"";
    display:table;
}
.clearfix:after {
    clear:both;
    overflow:hidden;
}
.clearfix {
    zoom:1; /* for ie6 & ie7 */
}
.clear {
    clear:both;
    display:block;
    font-size:0;
    height:0;
    line-height:0;
    overflow:hidden;
}
/* 设置显示和隐藏，通常用来与 js 配合 */
.hide {
    display:none;
}
.block {
    display:block;
}
/* 设置浮动，减少浮动带来的 bug */
.fl,.fr {
    display:inline;
}
.fl {
    float:left;
}
.fr {
    float:right;
}
```

### 常用2

```css
@charset "utf-8";
/* CSS Document */
body, ul, ol, dl, li, dd, h1, h2, h3, h4, h5, h6, p, input { margin: 0 }
h1, h2, h3, h4, h5, h6 { font-size: 100%; font-weight: normal; font-family: "Microsoft YaHei"; }
img { border: none }
input, button, textarea, select {
*font-size: 100%; border: none; }
body { background: #fff; color: #5e5e5e; font: 14px/24px Microsoft YaHei, SimSun, Arial; }
ul, ol { list-style: none; padding: 0 }
table { border-collapse: collapse; border-spacing: 0 }/*默认a标签样式*/
a:link, a:visited { color: #5e5e5e; text-decoration: none; }
a:hover { /*color:#999;*/ }
a:hover { color: #c9394a; /*text-decoration: underline;*/ }
a:active { color: #666; }/*浮动和清除浮动*/
.fl { float: left }
.fr { float: right }
.clear { zoom: 1 }
.clear:after { content: ""; display: block; height: 0; visibility: visible; clear: both } /*显示隐藏*/
.hide { display: none }
.show { display: block }/*表格table和td有边框*/
.boder_tl { border-top: 1px solid #ccc; border-left: 1px solid #ccc; }
.boder_tl td { border-bottom: 1px solid #ccc; border-right: 1px solid #ccc; }
.boder_bl { border-bottom: 1px solid #ccc; border-left: 1px solid #ccc; }
.boder_bl td { border-top: 1px solid #ccc; border-right: 1px solid #ccc; }
.boder_tr { border-top: 1px solid #ccc; border-right: 1px solid #ccc; }
.boder_tr td { border-bottom: 1px solid #ccc; border-left: 1px solid #ccc; }
.boder_br { border-bottom: 1px solid #ccc; border-right: 1px solid #ccc; }
.boder_br td { border-top: 1px solid #ccc; border-left: 1px solid #ccc; }
.txt_center { text-align: center; }/*表格table和tr有边框*/
.boder_ltr_trborder { border: 1px solid #ccc; border-bottom: none; }
.boder_ltr_trborder tr { border-bottom: 1px solid #ccc; }
```

### 常用3

```css
/* 常用base.css */
@charset "utf-8";
/*!
 * @名称：base.css
 * @功能：1、重设浏览器默认样式
 *       2、设置通用原子类
 */
/* 防止用户自定义背景颜色对网页的影响，添加让用户可以自定义字体 */
html {
    background:white;
    color:black;
}
/* 内外边距通常让各个浏览器样式的表现位置不同 */
body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,hr,button,article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section {
    margin:0;
    padding:0;
}
/* 要注意表单元素并不继承父级 font 的问题 */
body,button,input,select,textarea {
    font:12px \5b8b\4f53,arial,sans-serif;
}
input,select,textarea {
    font-size:100%;
}
/* 去掉 table cell 的边距并让其边重合 */
table {
    border-collapse:collapse;
    border-spacing:0;
}
/* ie bug：th 不继承 text-align */
th {
    text-align:inherit;
}
/* 去除默认边框 */
fieldset,img {
    border:none;
}
/* ie6 7 8(q) bug 显示为行内表现 */
iframe {
    display:block;
}
/* 去掉 firefox 下此元素的边框 */
abbr,acronym {
    border:none;
    font-variant:normal;
}
/* 一致的 del 样式 */
del {
    text-decoration:line-through;
}
address,caption,cite,code,dfn,em,th,var {
    font-style:normal;
    font-weight:500;
}
/* 去掉列表前的标识，li 会继承 */
ol,ul {
    list-style:none;
}
/* 对齐是排版最重要的因素，别让什么都居中 */
caption,th {
    text-align:left;
}
/* 来自yahoo，让标题都自定义，适应多个系统应用 */
h1,h2,h3,h4,h5,h6 {
    font-size:100%;
    font-weight:500;
}
q:before,q:after {
    content:'';
}
/* 统一上标和下标 */
sub,sup {
    font-size:75%;
    line-height:0;
    position:relative;
    vertical-align:baseline;
}
sup {
    top:-0.5em;
}
sub {
    bottom:-0.25em;
}
/* 让链接在 hover 状态下显示下划线 */
a:hover {
    text-decoration:underline;
}
/* 默认不显示下划线，保持页面简洁 */
ins,a {
    text-decoration:none;
}
/* 去除 ie6 & ie7 焦点点状线 */
a:focus,*:focus {
    outline:none;
}
/* 清除浮动 */
.clearfix:before,.clearfix:after {
    content:"";
    display:table;
}
.clearfix:after {
    clear:both;
    overflow:hidden;
}
.clearfix {
    zoom:1; /* for ie6 & ie7 */
}
.clear {
    clear:both;
    display:block;
    font-size:0;
    height:0;
    line-height:0;
    overflow:hidden;
}
/* 设置显示和隐藏，通常用来与 js 配合 */
.hide {
    display:none;
}
.block {
    display:block;
}
/* 设置浮动，减少浮动带来的 bug */
.fl,.fr {
    display:inline;
}
.fl {
    float:left;
}
.fr {
    float:right;
}
```

## 通用字体设置

```css
body,
textarea,
input,
button,
select,
keygen,
legend {
    color: rgb(0, 0, 0);
    font: 12px / 1.14 黑体;
    outline: 0px;
}
```

## 全站灰度(黑白)

将网站整体的色调换成灰色、黑色色调，在纪念一些日子的时候会有用到，

可以根据实际的需要选择合适的CSS代码样式添加到自己的网页模板的代码中实现网页灰色、黑白样式。

### 样式一

```css
<style type="text/css">
html {
　　filter:grayscale(100%);//给网站加灰度的滤镜
　　-webkit-filter:grayscale(100%);//属于使用webkit内核的浏览器，兼容chrome和safari浏览器
　　-moz-filter:grayscale(100%);
　　-ms-filter:grayscale(100%);
　　-o-filter:grayscale(100%);
　　filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
　　-webkit-filter:grayscale(1)
}
</style>
```

### 样式二

```css
//和第一种类似，实现全站效果，可以将代码添加到head中
<style>
body, html {
    -webkit-filter: grayscale(100%);
    -moz-filter: grayscale(100%);
    -ms-filter: grayscale(100%);
    -o-filter: grayscale(100%);
    filter:progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    _filter:none;
}
</style>
```

###样式三

```css
//同样的可以添加到样式style中
html {
    filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1);
    -webkit-filter: grayscale(100%);
}
```

### 样式四

```html
//这是直接添加到行内样式中
<html style="filter: progid:DXImageTransform.Microsoft.BasicImage(grayscale=1); -webkit-filter: grayscale(100%);">
```
