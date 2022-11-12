---
title: CSS 基础和选择器
date: 2019-09-23
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - 前端基础
 - CSS
 - CSS3
publish: true
---
## 基础

### 块元素，行元素，行内块元素

1. 块元素(`block element`)

块级元素特点

   1. 每个块级元素都从新的一行开始，并且其后的元素也另起一行。
   2. 元素的`width` `height`、行高以及顶和底边距都可设置。
   3. 元素宽度在不设置的情况下，是它本身父容器的100%，除非设定一个宽度。

补充：

- 块级元素会独占一行 默认的宽度占满父级元素，行内元素不会换行，
- 块级元素可以设置`margin`和`padding`属性

\* 注意：块级元素即使设置了宽度，仍然是独占一行的

块级元素：`div p table ul lo li h1-h6 dl dt`

- dir - 目录列表
- div - 常用块级容易，也是css layout的主要标签
- dl - 定义列表
- fieldset - form控制组
- form - 交互表单
- h1 - 大标题
- h2 - 副标题
- h3 - 3级标题
- h4 - 4级标题
- h5 - 5级标题
- h6 - 6级标题
- hr - 水平分隔线
- isindex - input prompt
- menu - 菜单列表
- noframes - frames可选内容，（对于不支持frame的浏览器显示此区块内容
- noscript - 可选脚本内容（对于不支持script的浏览器显示此内容）
- ol - 排序表单
- p - 段落
- pre - 格式化文本
- table - 表格
- ul - 非排序列表

2. 行内元素又叫内联元素(`inline element`)

行内元素特点

   1. 和其他元素都在一行上；
   2. 元素的高度、宽度、行高及顶部和底部边距不可设置；
   3. 元素的宽度就是它包含的文字或图片的宽度，不可改变。

补充：

- 行内元素不会独占一行，相邻的行内元素会排列在同一行里，知道一行排不下，才会换行，其宽度随元素的内容而变化;
- 行内元素的`width` `height` 无效
- 行内元素`padding-left、padding-right，margin-left，margin-right`（水平方向），有边距效果，`padding-top，padding-bottom，margin-top，margin-bototm`（水平方向有效，竖直方向无效）.

行内元素：`a img span b strong input select section`

- a - 锚点
- abbr - 缩写
- acronym - 首字
- b - 粗体(不推荐)
- br - 换行
- code - 计算机代码(在引用源码的时候需要)
- dfn - 定义字段
- em - 强调
- font - 字体设定(不推荐)
- i - 斜体
- img - 图片
- input - 输入框
- kbd - 定义键盘文本
- label - 表格标签
- q - 短引用
- s - 中划线(不推荐)
- samp - 定义范例计算机代码
- select - 项目选择
- small - 小字体文本
- span - 常用内联容器，定义文本内区块
- strike - 中划线
- strong - 粗体强调
- sub - 下标
- sup - 上标
- textarea - 多行文本输入框
- tt - 电传文本
- u - 下划线

3. 行内块
    - 行内元素，可以改变宽和高的。如 `img,input`
    - 可以通过`display: inline-block;`改变为行内块元素，但没有默认是行内块的元素.

4. 空元素

空元素：`br hr img input link meta`

:::warning

* 浏览器将块级元素的`dispaly`属性默认为`block`，行内元素属性默认为`inline`，因此行内元素与块级元素的切换可以通过修改`display`属性实现
* 我们常用的 `display` 属性值有：`inline \ block \ inline-block \ none`

:::

## CSS选择器

[CSS 可视化文档](http://cssreference.parryqiu.com/)
[CSS 中的颜色名](https://www.w3school.com.cn/cssref/css_colornames.asp)
[阮一峰Flex文档](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

- `id`:给元素添加类属性 `<div id="name">`

```css
#name{

}
```

- `class`:给元素添加类属性 `<div class="box">`

```css
.box{

}
```

- 并集：对选择器进行分组，被分组的选择器可以分享相同的声明。用**逗号**将需要分组的选择器开分。

```css
h1,h2,h3,h4,h5,h6{}
```

- 交集：两种属性同属一个元素

```css
p.name{

}
p#id{

}
.name1.name2{

}
```

- 后代（派生）：根据元素在位置上的关系定义样式，使用**空格**隔开，后代选择器尽量不要超过3个，不必把每个层级都列出，只需要写关键点即可

```css
li strong {}
```

- 子代：只能选择作为某元素的子元素，只选择子代，往后孙子一代不选择

```css
h1 > strong {}
```

- 兄弟和相邻兄弟：选择紧接在另一元素后的，并且二者有相同父元素

```css
h1 + p {}
```

- 属性：对带有指定属性的HTML元素设置样式，权重为10
  - **属性选择器**：为带有`title`属性的所有元素设置样式`[title] {}`
  - **属性和值选择器**：为`title="name"`的所有元素设置样式，`[title=name] {}`
  - **设置表单的样式**：`input[type="text"] {}`
- 伪类：
  - `:active`：被激活的元素
  - `:focus`：有键盘输入焦点的元素
  - `:hover`：鼠标悬停
  - `:link`：未被访问的链接 `a:link {color: pink;}`
  - `:visited`：已被访问的链接 `a:visited {color: green;}`
  - `:first-child`：元素的第一个子元素
  - `:lang`：带有指定`lang`属性的元素
- 权重：
  - `div`（1）
  - `class/类选择器`（10）
  - `id`（100）

- 结构选择器（新增伪类（面试题））
  - `:not`：排除
  - `:nth-child(n)`：第几个元素 从1开始设置
  - `:nth-child(2n)`：偶数元素 从0开始设置
  - `:nth-child(2n+1)`：奇数元素
  - `:nth-of-type(n)`：某个元素下同类型的第几个元素
  - `:nth-last-child`：倒数第几个元素
  - `:first-child->:nth-child(1)`：
  - `:fisrt-of-type`：第一个同级兄弟元素
  - `:last-of-type`：最后一个同级兄弟元素
  - `:nth-of-type(n)`：第几个同级兄弟元素
  - `:last-child`：最后一个子元素
  - `:only-child`：仅有一个子元素
  - `:only-of-type`：只有一个同类型的子元素
  - `:empty`：空内容
  - `:checked`：被选中 主要用在`input`表单元素

- 属性选择器
  - `E[attr=val]`：
  - `E[attr|=val]`：只能等于`val` 或只能以`val-`开头
  - `E[attr*=val]`：包含`val`字符串
  - `E[attr~=val]`：属性值有多个，其中一个是`val`
  - `E[attr^=val]`：以`val`开头
  - `E[attr$=val]`：以`val`结尾

- 目标伪类选择器
  - `:target()`：用来匹配URL指向的目标元素（存在URL指向该匹配元素时，样式效果才会生效）

- 伪元素：
  - `:first-line`：匹配首行文本，只能用于块级元素
  - `:first-letter`：匹配首字符
  - `:before/:after`：DOM元素前后插入额外的内容
    - 遇到伪元素`before/after`就要加上`content=''`
    - `display: block;`：独占一行
    - `display: inline-block;`：不独占一行
