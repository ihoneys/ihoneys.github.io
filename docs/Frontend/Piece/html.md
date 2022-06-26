---
title: HTML
date: 2021-03-31
 
categories:
 - 前端基础
tags:
 - html

---

## HTML

### `<head>`内部的标签

1. `<title>` 标签定义文档的标题

`title` 元素在所有 `HTML/XHTML` 文档中都是必需的。

`title` 元素能够：A定义浏览器工具栏中的标题;B提供页面被添加到收藏夹时显示的标题;C显示在搜索引擎结果中的页面标题.

2. `<base>` 标签为页面上的所有链接规定默认地址或默认目标

```html
<base href="https://www.baidu.com/" />
<base target="_blank" />

```

\* 注意：<base> 标签会影响相对路径，会在其前面添加上默认地址

3. `<link>` 标签定义文档与外部资源之间的关系(常用于连接样式表)

```html
<!-- css引入 -->
<link rel="stylesheet" type="text/css" href="mystyle.css" />
```

4. `<style>` 标签用于为 HTML 文档定义样式信息

```html
<style type="text/css">
body {background-color:yellow}
p {color:blue}
</style>

```

5. `<meta>` 标签提供关于 `HTML` 文档的元数据。
    - 元数据不会显示在页面上，但是对于机器是可读的。
    - 典型的情况是，`meta` 元素被用于规定页面的描述、关键词、文档的作者、最后修改时间以及其他元数据。
    - `<meta>` 标签始终位于 `head` 元素中。

```html
<!-- 下面的 meta 元素定义页面的描述（告诉搜索引擎你的站点的主要内容） -->
<meta name="description" content="Web tutorials on HTML, CSS, XML" />
<!-- 下面的 meta 元素定义页面的关键词： -->
<meta name="keywords" content="HTML, CSS, XML" />
<!-- name 和 content 属性的作用是描述页面的内容。 -->
<meta charset="utf-8">
<!-- charset 属性规定 HTML 文档的字符编码  且可以通过任意元素的lang属性重写-->
```

\* 一些搜索引擎会利用 meta 元素的 name 和 content 属性来索引您的页面。

- html页面禁止缩放

```html
<!-- html5页面中默认都允许用户缩放页面，或者在屏幕双击放大或缩小。即默认设置为：  -->
<meta name="viewport" content="width=device-width, initial-scale=1.0 user-scalable=yes" /> 
<!-- 若要禁止缩放可以更改成如下设置： -->
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0;"/>
```

6. `<script>` 标签用于定义客户端脚本

### 边框中包含文字

```html
    <fieldset>
        <legend>在边框上的字</legend>
        可以输入内容：<input type="text" />
    </fieldset>
```

### `<a>` 标签 伪类

一组专门的预定义的类称为伪类，主要用来处理超链接的状态。超链接文字的状态可以通过伪类选择符＋样式规则来控制。伪类选择符包括：

- 总: `a`:表示所有状态下的连接(其他状态默认) 如 `a{color:red}`
- ① `a:link`： 未访问链接 ,如 `a:link {color:blue}`
- ② `a:visited`： 已访问链接 ,如 `a:visited{color:blue}`
- ③ `a:active`： 激活时（链接获得焦点时）链接的颜色 ,如 `a:active{color:blue}`
- ④ `a:hover`： 鼠标移到链接上时 ,如 `a:hover {color:blue}`
- 一般`a:hover`和`a:visited`链接的状态（颜色、下划线等）应该是相同的。
- 前三者分别对应`body`元素的`link`、`vlink`、`alink`这三个属性。
- 四个“状态”的先后过程是：`a:link` -> `a:visited` -> `a:hover` -> `a:active` ( 先爱后恨 `L V H A` )
另外，`a:active`不能设置有无下划线（总是有的）。

```html
<style type = “text/css”>
a {
    font-size:16px}
a:link {
    color: blue;
     text-decoration:none;
     } /*未访问：蓝色、无下划线*/
a:active:{
    color: red;
    } /*激活：红色*/
a:visited {
    color:purple;
    text-decoration:none;
    } /*已访问：紫色、无下划线*/
a:hover {
    color: red;
    text-decoration:underline;
    } /*鼠标移近：红色、下划线*/
</style>
```

### 去掉`<a>`的下划线

```js
text-decoration : none ;//无装饰
                : underline;//下划线
                : blink;//闪烁
                : overline;//上划线
                : line-through;//中划线 、贯穿线
```

- 文字禁止选中

1.

```html
<div onselectstart="return false">文字</div>
```

2.

```css
.demo{
    user-select:none;
}
```


## JavaScript
