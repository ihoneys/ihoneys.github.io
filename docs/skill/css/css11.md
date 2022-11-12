---
title: CSS 媒体查询
date: 2018-09-23
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - 前端基础
 - CSS
 - CSS3
---
## 什么是媒体查询

1. 媒体查询是向不同设备提供不同样式的一种方式，它为每种类型的用户提供了最佳的体验。
2. `css2: media type media type`(媒体类型)是`css 2`中的一个非常有用的属性，通过media type我们可以对不同的设备指定特定的样式，从而实现更丰富的界面。
3. `css3: media query media query`是`CSS3`对`media type`的增强，事实上我们可以将`media query`看成是`media type+css`属性(媒体特性`Media features`)判断。

## 如何使用媒体查询

1. link标签引入：media属性（eg：引入（screen）彩色屏幕显示，并且最大宽度不超过800px时候的CSS样式）

```html
<link rel="stylesheet" media="screen and (max-width:800px)" href="./demo.css">
```

2. style中直接引入：当显示宽度不大于400px时，div该有的样式。

```css
@media screen and (max-width: 400px) {
.wrapper div{
        width: 100%;
    }
}
```

- 媒体类型（Media Type)

| 类型       | 说明                                         |
| :--------- | :------------------------------------------- |
| screen     | 彩色计算机屏幕（默认值）                     |
| tty        | 电传打字机以及使用等宽字符网格的类似媒介     |
| tv         | 电视类型设备（低分辨率、有限的屏幕翻滚能力） |
| projection | 放映机                                       |
| handheld   | 手持设备（小屏幕、有限的带宽）               |
| print      | 打印预览模式 / 打印页                        |
| braille    | 盲人用点字法反馈设备                         |
| aural      | 语音合成器                                   |
| all        | 适合所有设备                                 |

1. 颜色（color）

指定输出设备每个像素单元的比特值。如果设备不支持输出颜色，则该值为0

向所有能显示颜色的设备应用样式表

```html
<style>
@media (color){
    .box{height: 100px;width: 100px;background-color: lightblue;}
}
</style>
<div class="box"></div>
```

2. 颜色索引（color-index）;

颜色索引指定了输出设备中颜色查询表中的条目数量，如果没有使用颜色查询表，则值等于0

向所有使用至少256个索引颜色的设备应用样式表(下列代码无显示，说明返回值为0)

```html
<style>
@media (min-color-index: 256){
    .box{height: 100px; width: 100px;background-color: lightgreen;}
}
</style>
<div class="box"></div>
```

3. 宽高比（aspect-ratio）

宽高比描述了输出设备目标显示区域的宽高比。该值包含两个以“/”分隔的正整数。代表了水平像素数（第一个值）与垂直像素数（第二个值）的比例

向可视区域是正方形或者是宽屏的设备应用样式表

```html
<style>
@media (min-aspect-ratio: 1/1) {
    .box{height: 100px;width: 100px; background-color: lightgreen; }
}
</style>
<div class="box"></div>
```

4. 设备宽高比（device-aspect-ratio）

设备宽高比描述了输出设备的宽高比。该值包含两个以“/”分隔的正整数。代表了水平像素数（第一个值）与垂直像素数（第二个值）的比例

向宽高比为16:9的特殊宽屏设备应用样式表

```html
<style>
@media (device-aspect-ratio:16/9) {
    .box{ height: 100px;width: 100px; background-color: pink;}
}
</style>
<div class="box"></div>
```

5. 设备高度（device-height）

设备高度描述了输出设备的高度

向显示在最小高度1000px的屏幕上的文档应用样式表

```html
<style>
@media (min-device-height: 1000px) {
    .box{ height: 100px;width: 100px; background-color: pink;}
}
</style>
<div class="box"></div>
```

6. 设备宽度（device-width）

设备宽度描述了输出设备的宽度

向显示在最小宽度1000px的屏幕上的文档应用样式表

```html
<style>
@media (min-device-width: 1000px) {
    .box{ height: 100px; width: 100px;background-color: lightblue; }
}
</style>
<div class="box"></div>
```

7. 网格（grid）

网格判断输出设备是网格设备还是位图设备。如果设备是基于网格的（例如电传打字机终端或只能显示一种字形的电话），该值为1，否则为0　　

向非网格设备应用样式表

```html
<style>
@media (grid:0) {
    .box{height: 100px;width: 100px; background-color: lightgreen;}
}
</style>
<div class="box"></div>
```

8. 高度（height）

高度描述了输出设备渲染区域（如可视区域的高度或打印机纸盒的高度）的高度

向高度大于800px的可视区域的设备应用样式表

```html
<style>
@media (min-height:800px) {
    .box{ height: 100px; width: 100px;background-color: lightgreen; }
}
</style>
<div class="box"></div>
```

9. 宽度（width）

宽度描述了输出设备渲染区域的宽度

向宽度大于800px的可视区域的设备应用样式表

```html
<style>
@media (min-width:800px) {
    .box{ height: 100px;width: 100px; background-color: lightgreen;}
}
</style>
<div class="box"></div>
```

10. 黑白（monochrome）

黑白指定了一个黑白（灰度）设备每个像素的比特数。如果不是黑白设备，值为0

向非黑白设备应用样式表

```html
<style>
@media (monochrome:0) {
    .box{height: 100px; width: 100px; background-color: lightgreen;}
}
</style>
<div class="box"></div>
```

11. 方向（orientation）

方向指定了设备处于横屏（宽度大于宽度）模式还是竖屏（高度大于宽度）模式

值：landscape(横屏) | portrait(竖屏)

向竖屏设备应用样式表

```html
<style>
@media (orientation: portrait) {
    .box{height: 100px;width: 100px;background-color: lightgreen; }
}
</style>
<div class="box"></div>
```

12. 分辨率（resolution）

分辨率指定输出设备的分辨率（像素密度）。分辨率可以用每英寸（dpi）或每厘米（dpcm）的点数来表示

注意:关于屏幕三要素(屏幕尺寸、分辨率、像素密度)的相关内容移步至此

向每英寸至少90点的设备应用样式

```html
<style>
@media (min-resolution: 90dpi) {
    .box{height: 100px;width: 100px; background-color: lightgreen; }
}
</style>
<div class="box"></div>
```

13. 扫描（scan）

扫描描述了电视输出设备的扫描过程

值： progressive | interlace

语法:

媒体查询包含了一个CSS2已有的媒介类型(或称为媒体类型)和CSS3新增的包含一个或多个表达式的媒体属性，这些媒体属性会被解析成真或假

当媒体查询为真时，相关的样式表或样式规则就会按照正常的级联规则被应用。即使媒体查询返回假， `<link> `标签上带有媒体查询的样式表仍将被下载（只不过不会被应用）

```html
<link rel="stylesheet" href="style.css" media="print">

<div class="box"></div>
```

media并不是'print'，所以媒体查询为假。但是，style.css文件依然被下载


- 媒体特性（Media features)

| 1                   | 2                       | 3                       |
| :------------------ | :---------------------- | :---------------------- |
| width               | min-width               | max-width               |
| height              | min-height              | max-height              |
| device-width        | min-device-width        | max-device-width        |
| device-height       | min-device-height       | max-device-height       |
| aspect-ratio        | min-aspect-ratio        | max-aspect-ratio        |
| device-aspect-ratio | min-device-aspect-ratio | max-device-aspect-ratio |
| color               | min-color               | max-color               |
| color-index         | min-color-index         | max-color-index         |
| monochrome          | min-monochrome          | max-monochrome          |
| resolution          | min-resolution          | max-resolution          |
| scan                | grid                    |                         |

详情

| 属性名              | 说明                                                                            |
| :------------------ | :------------------------------------------------------------------------------ |
| width               | 浏览器可视宽度，                                                                |
| height              | 浏览器可视高度，                                                                |
| device-width        | 设备屏幕的宽度，                                                                |
| device-height       | 设备屏幕的高度，                                                                |
| orientation         | 检测设备目前处于横向还是纵向状态，                                              |
| aspect-ratio        | 检测浏览器可视宽度和高度的比例(例如：aspect-ratio:16/9)，                       |
| device-aspect-ratio | 检测设备的宽度和高度的比例，                                                    |
| color               | 检测颜色的位数（例如：min-color:32就会检测设备是否拥有32位颜色），              |
| color-index         | 检查设备颜色索引表中的颜色（他的值不能是负数），                                |
| monochrome          | 检测单色楨缓冲区域中的每个像素的位数（这个太高级，估计咱很少会用的到），        |
| resolution          | 检测屏幕或打印机的分辨率(例如：min-resolution:300dpi或min-resolution:118dpcm)， |
| grid                | 检测输出的设备是网格的还是位图设备。                                            |

 Media Query是CSS3 对Media Type的增强版，其实可以将Media Query看成Media Type(判断条件)+CSS(符合条件的样式规则)

- 逻辑操作符

操作符`not`、`and`、`only`和逗号(`,`)可以用来构建复杂的媒体查询

- and：

and操作符用来把多个媒体属性组合起来，合并到同一条媒体查询中。只有当每个属性都为真时，这条查询的结果才为真

注意:在不使用not或only操作符的情况下，媒体类型是可选的，默认为all

满足横屏以及最小宽度为700px的条件应用样式表

```css
@media all and (min-width: 700px) and (orientation: landscape) { ... }
```

由于不使用not或only操作符的情况下，媒体类型是可选的，默认为 all，所以可以简写为

```css
@media (min-width: 700px) and (orientation: landscape) { ... }
```

- or

没有or关键词可用于指定备用的媒体功能。相反，可以将备用功能以逗号分割列表的形式列出，这会将样式应用到宽度超过769像素的屏幕或使用至少6英寸宽的纸张的打印设备。(逗号代表或).

合并多个媒体属性或合并媒体属性与媒体类型, 一个基本的媒体查询，即一个媒体属性与默认指定的screen媒体类型

指定备用功能：

```css
@media screen and (min-width: 769px), print and (min-width: 6in)"
```

- not

指定否定条件：not操作符用来对一条媒体查询的结果进行取反

注意: not关键字仅能应用于整个查询，而不能单独应用于一个独立的查询

```css
@media not screen and (monochrome)
```

要指定否定条件，可以在媒体声明中添加关键字not，不能在单个条件前使用not。该关键字必须位于声明的开头，而且它会否定整个声明。所以，上面的示例会应用于除单色屏幕外的所有设备。

- only

only操作符表示仅在媒体查询匹配成功时应用指定样式。可以通过它让选中的样式在老式浏览器中不被应用（不常用）

```css
media="only screen and (min-width: 401px) and (max-width: 600px)"
/* 上面这行代码，在老式浏览器中被解析为media="only"，因为没有一个叫only的设备，所以实际上老式浏览器不会应用样式 */
```

媒体查询规范还提供了关键字only，它用于向早期浏览器隐藏媒体查询。类似于not，该关键字必须位于声明的开头。 早期浏览器应该将以下语句

```css
media="screen and (max-width:1000px)"{...}
/* 上面这行代码，在老式浏览器中被解析为media="screen"，它把后面的逻辑表达式忽略了。所以老式浏览器会应用样式 */
```

换句话说，它应该将样式规则应用于所有屏幕设备，即使它不知道媒体查询的含义。 无法识别媒体查询的浏览器要求获得逗号分割的媒体类型列表，规范要求，它们应该在第一个不是连字符的非数字字母字符之前截断每个值。所以，早期浏览器应该将上面的示例解释为：`media="only"`   因为没有`only`这样的媒体类型，所以样式表被忽略。


- 方法

`window.matchMedia()`方法用来检查`CSS`的`mediaQuery`语句

注意:`IE9-`浏览器不支持，可以使用第三方函数库`matchMedia.js`

- 属性
`window.matchMedia()`方法接受一个`mediaQuery`语句的字符串作为参数，返回一个`MediaQueryList`对象。该对象有`media`和`matches`两个属性

`media`：返回所查询的`mediaQuery`语句字符串
`matches`：返回一个布尔值，表示当前环境是否匹配查询语句

```js
var result = window.matchMedia('(min-width: 600px)');
console.log(result.media); //'(min-width: 600px)'
console.log(result.matches); // true
```

可以根据`matchMedia()`方法的`matches`属性的不同结果，进行对应的设置

```js
var result = window.matchMedia('(min-width: 600px)');
if (result.matches) {
  //
}else{
 //
}
```

注意:如果`window.matchMedia`无法解析`mediaQuery`参数，`matches`属性返回的总是`false`，而不是报错

```js
var result = window.matchMedia('123');
console.log(result.matches);//false
```

- 事件

`window.matchMedia`方法返回的`MediaQueryList`对象有两个方法，用来监听事件：`addListener`方法和`removeListener`方法

```js
// 指定回调函数
mql.addListener(mqCallback);
// 撤销回调函数
mql.removeListener(mqCallback);
```

注意，只有`mediaQuery`查询结果发生变化时，才调用指定的回调函数

所以，如果想要`mediaQuery`查询未变化时，就显示相应效果，需要提前调用一次函数

下面这个例子是当页面宽度小于`1000px`时，页面背景颜色为品红色；否则为淡蓝色

```js
var mql = window.matchMedia("(min-width: 1000px)");
mqCallback(mql);
mql.addListener(mqCallback);
function mqCallback(mql) {
  if (mql.matches) {
    document.body.background = 'pink';
  }else{
      document.body.background = 'lightblue';
  }
}
```

- 打印样式

媒体查询的一个常用功能是打印样式的设置，主要是背景清除、字体颜色变黑等

```js
@media print{
    *,*:before,*:after{
        background:transparent!important;
        color:#000 !important;
        box-shadow: none !important;
        text-shadow: none !important;
    }
    a,a:visited{
        text-decoration: underline;
    }
    a[href]:after{
        content:"(" attr(href) ")";
    }
    abbr[title]:after{
        content:"(" attr(title) ")";
    }
    a[href^="#"]:after,a[href^="javascript:;"]:after{
        content:"";
    }
    pre,blockquote{
        border: 1px solid #999;
        /*只有opera浏览器起作用，避免在元素内部插入分页符*/
        page-break-inside:avoid;
    }
    thead{
        display:table-header-group;
    }
    tr,img{
        page-break-inside:avoid;
    }
    img{
        max-width:100%!important;
    }
    p,h2,h3{
        /*元素内部发生分页时，最少保留3行*/
        orphans:3;
        /*元素内部发生分页时，元素顶部最少保留3行*/
        windows:3;
    }
    h2,h3{
        /*避免在元素后面插入一个分页符*/
        page-break-after:avoid;
    }
}
```

- 相对单位

如果媒体查询`@media`使用的是相对单位，如`rem`，这里有一个坑需要着重强调一下

一般而言，`rem`是相对于HTML的字体大小的。但是，由于媒体查询的级别非常高，它并不是HTML的子元素，不是相对于HTML，而是相对于浏览器的，而浏览器的默认字体大小是16px

如果HTML设置字体大小为12px，设置如下媒体查询

```css
media="only screen and (max-width:1rem)"
```

实际上，max-width等于16px，而不是12px

而正是由于媒体查询是相对于浏览器的， 所以使用rem就没有必要，完全可以使用em来替代

```css
media="only screen and (max-width:1em)"
```

## 媒体查询多用于响应式网页中

1. 初始化设置：
在HTML文件中，网页顶部<head></head>标签中插入一句话：

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
```

这句话在于对响应式网页做一个初始化设置，主要包括：

name="viewport"：标记显示设备为视口；

width = device-width：宽度等于当前设备的宽度；

initial-scale：初始的缩放比例（默认设置为1.0）；

minimum-scale：允许用户缩放到的最小比例（默认设置为1.0）；

maximum-scale：允许用户缩放到的最大比例（默认设置为1.0）；

user-scalable：用户是否可以手动缩放（默认设置为no，因为我们不希望用户放大缩小页面）。

2. 解决IE浏览器的兼容性问题：

因为IE浏览器(IE8)不支持HTML5和CSS3中的media，所以要加载用于解决IE浏览器兼容性问题的JS文件：

```html
<!--[if lt IE 9]>

<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>

<script src="https://oss.maxcdn.com/libs/respond.js/1.3.0/respond.min.js"></script>

<![endif]-->
```

两个<script></script>标签中的src属性所指向的文件链接地址为固定地址中的文件，直接异地引用就好，不用下载到本地引用。

3. 设置IE的渲染方式为最高：
现在有很多人的IE浏览器都升级到IE9以上，这个时候会有很多诡异的事情发生，例如现在是IE9的浏览器，但是浏览器的文档模式却是IE8，为了防止这种情况，我们需要下面这段代码来让IE的文档模式永远都是最新：

```html
<meta http-equiv="X-UA-Compatible"content="IE=edge">
```

当然还有一个更给力的写法：

```html
<meta http-equiv="X-UA-Compatible"content="IE=Edge，chrome=1">s
```

这段代码后面加了一个chrome=1，这是由于Google Chrome Frame（谷歌内嵌浏览器框架GCF），如果用户电脑安装这个chrome插件，就可让电脑内的IE浏览器规避版本因素，使用Webkit引擎及V8引擎进行排版及运算。当然如果用户没装这个插件，这段代码就会让IE浏览器以最高的文档模式展现效果。

4. CSS3 media 媒体查询的写法：

```css
@media screen and (max-width: 960px){

body{

background:#000;

}

}
```

这是一个media的标准写法，在CSS文件中，意为：当页面小于960px时执行以下CSS代码，具体内容暂不用管。

对于上述代码中的screen，意为在告知设备在打印页面时使用衬线字体，在屏幕上显示时用无衬线字体。目前很多网站都会直接省略screen,从而不需要考虑用户打印网页的需求，所以又有这种写法：

```css
@media (max-width: 960px){

body{

background:#000;

}

}
```

本着思维严谨的原则，不会采用这种写法。

5. CSS3媒体查询主体代码组合：
在响应式网页布局中需要持续运用媒体查询代码组合，主要作用在于判断所适配屏幕的宽度，并根据各种宽度条件套用不同的CSS样式。

如当屏幕宽度等于960px时，将网页背景色变为红色：

```css
@media screen and (max-device-width:960px){

body{

background:red;

}

}
```

如当屏幕宽度最大为960px（小于960px）时，将网页背景色变为黑色：

```css
@media screen and (max-width: 960px){

     body{

        background:#000;

    }

}
```

如当屏幕宽度最小为960px（大于960px）时，将网页背景色变为桔色：

```css
@media screen and (min-width:960px){

    body{

        background:orange;

    }

}
```

更为常见的是混合使用，如当屏幕宽度介于960px和1200px之间时，将网页背景色变为黄色：

```css
@media screen and (min-width:960px) and(max-width:1200px){
　　body{

　　　　background:yellow;

　　}
}
```

6. 总体开发思路：

使用CSS3中媒体查询的大致思路就是判断网页在不同设备中所处的宽度范围，这样的范围可能有三种（PC、平板、手机），也可能有四种（PC、平板、中大屏手机、小屏手机），当然也可能只需要两种（平板、手机，PC端单独开发一版时可不作为CSS3媒体查询的使用对象），并为各种宽度范围情况下的所需页面元素套用不同的CSS样式，从而适配各种设备。

7. 响应式网页开发中的宽度问题：

在实际开发中，通常需要设置响应式网页宽度的最大值，一旦忽略最大宽度，臃肿或零散的网页布局都会造成视觉洪灾，也就是我们常说的看起来很low。

另外谈谈目前显示设备中的网页宽度问题（由于篇幅问题，就不从工业革命开始扯了），目前最为常见的宽度基本上都是：大于或等于960px的PC端（1920px、1600px、1440px、1280px、1140px、960px）、960px至640px之间的平板端（768px、640px）以及640px以下的手机端（480px、320px），以上宽度存在已久，且显示设备中的网页宽度会长期处于这样的状态下，在响应式网页宽度设计上，基本从这几个尺寸考虑就已经足够。

8. 扩展——在CSS2中同样有媒体查询

## 案例

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
        <style>
            * {
                margin: 0;
                padding: 0;
            }
            .box {
                width: 100%;
            }

            @media screen and (max-width: 599px) {
                .left {
                    display: inline-block;
                    background: yellowgreen;
                    width: 200px;
                    height: 100px;
                }
                .right {
                    display: inline-block;
                    background: orange;
                    width: 290px;
                    height: 100px;
                }
            }
            @media (min-width: 600px) and (max-width: 850px) {
                .left {
                    display: inline-block;
                    background: yellowgreen;
                    width: 200px;
                    height: 100px;
                }
                .right {
                    display: inline-block;
                    background: orange;
                    width: 350px;
                    height: 100px;
                }
            }
            @media (min-width: 851px) and (max-width: 1200px) {
                .left {
                    display: inline-block;
                    background: yellowgreen;
                    width: 200px;
                    height: 100px;
                }
                .right {
                    display: inline-block;
                    background: orange;
                    width: 600px;
                    height: 100px;
                }
            }
            @media screen and (min-width: 1201px) {
                .left {
                    display: inline-block;
                    background: yellowgreen;
                    width: 200px;
                    height: 100px;
                }
                .right {
                    display: inline-block;
                    background: orange;
                    width: calc(100% - 210px);
                    height: 100px;
                }
            }
        </style>
    </head>
    <body class="box">
        <div class="left">left</div>
        <div class="right">right</div>
    </body>
</html>

```
