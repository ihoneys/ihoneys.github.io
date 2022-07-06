---
title: CSS世界笔记
date: 2020-09-23
 
categories:
 - 前端基础
tags:
 - 前端基础
 - CSS
 - CSS教程
---
### 1.当居中文字在盒子居中显示的时候，盒子宽固定，文字超过长度换行，这时候会发生换行的文字也会居中

```css
.box{
    text-algin:center
}
.content{
    display: inline-block; 
    text-align: left;
}
```

### 2.CSS实现JQuery中slideDown、slideUp效果

[展开动画效果](http://demo.cssworld.cn/3/3-2.php)

```css
.element { 
     max-height: 0; 
     overflow: hidden; 
     transition: max-height .25s; 
} 
.element.active { 
     max-height: 666px; /* 一个足够大的最大高度值 */ 
}
```

### 3.Web 开发的时候，为了提高加载性能以及节约带宽费用，首屏以下的图片就会通过滚屏加载的方式异步加载，然后，这个即将被异步加载的图片为了布局稳健、体验良好，往往会使用一张透明的图片占位。

```css
<img src="transparent.png"> 
实际上，这个透明的占位图片也是多余的资源，直接：
<img> 
然后配合下面的 CSS 可以实现一样的效果：
img { visibility: hidden; } 
img[src] { visibility: visible; }
**当图片的 src 属性缺省的时候，
图片不会有任何请求，是最高效的实现方式**
```

### 4.img alt提示

[演示地址](http://demo.cssworld.cn/4/1-2.php)

```css
此时，图片 src 没有，因此，::before 和::after 可以
生效，就可以把 alt 属性值通过 content 属性呈现出来，
核心 CSS 代码如下：
img::after { 
 /* 生成 alt 信息 */ 
 content: attr(alt); 
 /* 尺寸和定位 */ 
 position: absolute; bottom: 0; 
 width: 100%; 
 background-color: rgba(0,0,0,.5); 
 transform: translateY(100%); 
 /* 来点过渡动画效果 */ 
 transition: transform .2s; 
} 
img:hover::after { 
 /* alt 信息显示 */ 
 transform: translateY(0); 
} 
下面是此技术最有意思的部分。当点击按钮给图片添
加一个 src 地址时，图片从普通元素变成替换元素，原本都还
支持的::before 和::after 此时全部无效，此时再 hover 图
片，是不会有任何信息出现的（见图 4-10）。于是就非常巧妙地
增强了图片还没加载时的信息展示体验。
细细体味会发现，这一体验增强实现非常巧妙地利用了
替换元素的各种特性表现，并且在 HTML 层面并没有任何其
图 4-9 alt 信息美美地显示
图 4-10 src 属性存在时候
:before/:after 失效
他代码或内容的辅助，可谓是非常高性价比的技术实现，大家不妨在自己的项目中小试
一下
```

### 5.网页头部背景图自适应效果

```css
.box { 
     padding: 10% 50%; 
     position: relative; 
} 
.box > img { 
     position: absolute; 
     width: 100%; height: 100%; 
     left: 0; top: 0; 
}
```

- 上面百分比只应用于块状元素上，如果是内联元素会出现 • 同样相对于宽度计算 • 默认的高度和宽度细节有差异 • padding 会断行。

### 6.理解表单元素

![26f806416dd](/img/css/css01.png)

![cfdbeb94c00](/img/css/css02.png)

### 7.实现移动端导航栏“三道杠效果”

[效果地址](http://demo.cssworld.cn/4/2-4.php)

![-d5f0-4203-b49b-dbea778f7165](/img/css/css03.png)

- 第一种

```css
.icon-menu {
    display: inline-block;
    width: 35px;
    height: 4px;
    padding: 4px 0;
    border-top: 4px solid;
    border-bottom: 4px solid;
    background-color: currentColor;
    background-clip: content-box;
}
```

- 第二种

```css
.icon-menu { 
     width: 120px; 
     height: 20px; 
     border-top: 60px double; 
     border-bottom: 20px solid; 
}
```

### 8.实现双层圆点效果

![image](/img/css/css04.png)

### 9.一侧定宽的两栏自适应布局效果（激进的margin属性

[案列效果](http://demo.cssworld.cn/4/3-1.php)。

![image](/img/css/css05.png)
![image](/img/css/css06.png)

### 10.列表块两端对齐，一行显示 3 个，中间有 2 个 20 像素的间隙。假如使用浮动来实现，

CSS 代码可能是下面这样：

![image](/img/css/css07.png)

**这是通常会遇到的，此时最后一个元素无法完美实现两端对齐。**

**解决办法：**

![image](/img/css/css08.png)


![image](/img/css/css09.png)

### 11.实现两边等高。

![image](/img/css/css10.png)

### 12.margin合并（块格式化上下文）

![image](/img/css/css11.png)

**补充**：**BFC概念以及原理**

```css
BFC的基本概念，？
BFC 就是块级格式上下文，是页面盒模型布局中的一种 CSS 渲染模式，相当于一个独立的容器，里面的元素和外部的元素相互不影响
BFC的原理？
1.就是在BFC这个元素的垂直方面边距(margin)会发生重叠
2.BFC的区域不会与浮动元素的box重叠
3.BFC在页面中是一个独立的容器，外面的元素不会影响它里面的元素 
4.计算BFC高度的时候，浮动元素也会参与计算
如何创建BFC？
1.overflow : overflow的值不为visible
1. position: 值不为static，relative
2. display的值为inline-block、table-cell、table-caption
4.float的值不为none（默认）
```

### 13.利用margin对齐而不是一股脑使用float:left，（使用margin:auto实现右对齐）

![image](/img/css/css12.png)

### 14.水平垂直居中方法#1

**这里只记一下水平垂直实现之中少见的，一些常见的百度即可**

- 第一种

```css
.element { 
     width: 300px; height: 200px; 
     position: absolute; left: 50%; top: 50%; 
     margin-left: -150px; /* 宽度的一半 */ 
     margin-top: -100px; /* 高度的一半 */ 
}
注：如果项目不需要管IE7浏览器的话，完全可以使用这个作为水平居中方法
```

- 第二种

```css
.element { 
     width: 300px; height: 200px; 
     position: absolute; 
     left: 0; right: 0; top: 0; bottom: 0; 
     margin: auto; 
}
```

- 第三种

```css
.cell { 
     height: 128px; 
     display: table-cell; 
     vertical-align: middle; 
} 
.cell > img { 
     height: 96px; 
}
```

### 15.给元素添加边框渲染性能最高写法

```css
div { 
     border: 1px solid; 
     border-bottom: 0 none; 
}
```

### 16.CSS上传图片+号绘制

![image](/img/css/css13.png)

```css
<a href class="add" title="继续上传">
  添加图片
</a>
.add {
    display: inline-block;
    width: 76px; height: 76px;
    color: #ccc;
    border: 2px dashed;
    text-indent: -12em;
    transition: color .25s;
    position: relative;
    overflow: hidden;
}
.add:hover {
    color: #34538b;
}
.add::before, .add::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
}
.add::before {
    width: 20px;
    border-top: 4px solid;
    margin: -2px 0 0 -10px;
}
.add::after {
    height: 20px;
    border-left: 4px solid;
    margin: -10px 0 0 -2px;
}
```

### 17.输入框优雅的实现icon-clear符号，通过border增加清楚符号的点击范围

```css
HTML：
<input id="search" type="search" value="我是初始值" required>
<label for="search" class="icon-clear"></label>
****
input[type="search"] {
    width: 200px; height: 40px;
    padding: 10px 40px 10px 10px;
    border: 1px solid #ccc;
    box-sizing: border-box;
}
.icon-clear {
    width: 16px; height: 16px;
    margin: 1px 0 0 -38px;
    border: 11px solid transparent;
    border-radius: 50%;
    background: #999;
    color: white;
    position: absolute;
    visibility: hidden;
}
.icon-clear:before {
    content: "×";
}
input:valid + .icon-clear { 
    visibility: visible;
}
```

### 18.border实现三角形

![image]()

```css
div {
        /* 向上朝向三角形 */
        /* 修改border-color改变三角形方向 */
        width: 0;
        border: 10px solid;
        border-color: transparent transparent #f30 ;
    }
```

### 19.通过line-height实现垂直居中的标准写法(line-height并不是真正意义上的垂直居中)

![image](/img/css/css14.png)

### 20.多行文字垂直居中

```css
<div class="box"> 
    <div class="content">基于行高实现的..基于行高实现的.基于行高实现的.基于行高实现的..</div> 
</div>
.box { 
 line-height: 120px; 
 background-color: #f0f3f9; 
} 
.content { 
 display: inline-block; 
 line-height: 20px; 
 margin: 0 20px; 
 vertical-align: middle; 
}
```

### 21.vertical实现提示框永远水平垂直居中

![image](/img/css/css15.png)


[效果演示：](http://demo.cssworld.cn/5/3-10.php)

### 22.分享一个可以让页面滚动条不发生晃动的小技巧

```css
html { 
     overflow-y: scroll; /* for IE8 */ 
} 
:root { 
     overflow-y: auto; 
     overflow-x: hidden; 
} 
:root body { 
     position: absolute; 
} 
body { 
     width: 100vw; 
     overflow: hidden; 
}
```

### 23.如何设置自定义滚动条效果

```css
::-webkit-scrollbar { /* 血槽宽度 */ 
     width: 8px; height: 8px; 
} 
::-webkit-scrollbar-thumb { /* 拖动条 */ 
     background-color: rgba(0,0,0,.3); 
     border-radius: 6px; 
} 
::-webkit-scrollbar-track { /* 背景槽 */ 
     background-color: #ddd; 
     border-radius: 6px; 
}
```

**效果图：**

![image](/img/css/css16.png)

### 24.访问基于“focus 锚点定位”实现的无 JavaScript 选项卡切换效果实例页面

[效果连接](http://demo.cssworld.cn/6/4-3.php)

### 25.对position新的理解

```
通常实现一个标识，比如：左上角标志，使用position:absolute;父元素设置position:relative;
其实只需要子元素设置position:absolute;即可，对left/top/bottom/right无需设置。这个称谓'无依赖定位'，也定位'相对定位'。
```

[效果演示地址](http://demo.cssworld.cn/6/5-4.php)

![image](/img/css/css17.png)

- **position:absolute + margin实现水平对齐（无依赖定位）** 效果：

![image](/img/css/css18.png)

- **输入框注册不符合规范提示实现** [效果演示](https://demo.cssworld.cn/6/5-6.php)
- **在实现静态下拉效果的时候，也是可以使用“无依赖绝对定位”的。**

[无依赖绝对定位”与下拉列表定位实例页面](http://demo.cssworld.cn/6/5-7.php)

```
**注：如果是动态呈现的列表，建议还是使用 JavaScript来计算和定位**
```

### 26.眼前一亮的操作overflow + position:absolute实现表头固定内容滚动效果

overflow 的属性值不是 hidden 而是 auto 或者 scroll，即使绝对定位元素高宽 比 overflow 元素高宽还要大，也都不会出现滚动条

```css
<div class="box"> 
    <img src="1.jpg"> 
</div>
.box { 
     width: 300px; height: 100px; 
     background-color: #f0f3f9; 
     overflow: auto; 
} 
.box > img { 
     width: 256px; height: 192px; 
     position: absolute; 
}
```

### 27.不知道的隐藏方法通过知道的隐藏元素方法

```css
1.display：none以及visbility:hidden
 2.text-indent(缩进方式脱离屏幕之外)
 3.color：transparent
 4.position: relative; z-index: -1;
 5.position: absolute;  opacity: 0;（如果让元素保留原位置，可以不需要添加position:absolute）
```

**最有还有一种神奇的方式就是position:absolute,clip裁剪属性，来实现隐藏**

```css
.clip{
    position:absolute;
    clip:rect(0 0 0 0);
}
需要隐藏某个元素通过添加class clip即可
可称为最佳“可访问性隐藏”
clip 语法简单，
功能单一，与其他 CSS 属性相比，和元素原本 CSS 样式冲突的概率更低
```

### 28.这是CSS层叠上下文默认规则

![image](/img/css/css19.png)

```
**元素使用定位元素(position) z-index就会生效z-index会被默认设置为auto属性值**
也就是会覆盖到文字内容，inline水平盒子上
```

**CSS3触发层叠上下文的属性有**

![image](/img/css/css20.png)

**28.在电商价格通常会有￥符号，通常会写个span标签单独包裹设置样式，其实还有更简单的做法**

```css
.price:first-letter { 
     margin-right: 5px; 
     font-size: xx-large; 
     vertical-align: -2px; 
}
```

**29.visbility属性消除悬浮列表体验不友好细节体验**

![image](/img/css/css21.png)

**最后一些概念性理解新的东西就不记载了，得自己通过实际开发，加看完本书体会得出总结，以上为干货系列。更多CSS盲区可以去关注[张鑫旭老师博客](https://www.zhangxinxu.com/wordpress/)。(期待明年的CSS3新世界)**

