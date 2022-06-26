---
title: HTML Emmet
date: 2020-02-16
 
categories:
 - 前端基础
tags:
 - 前端基础
 - HTML
 - HTML5
sticky: 1
# 打赏
showSponsor: true
publish: true
---

## Emmet简述

`Emmet` (前身为 `Zen Coding`) 是一个能大幅度提高前端开发效率的一个工具. 在前端开发的过程中，一大部分的工作是写 `HTML`、`CSS` 代码。特别是手动编写 `HTML` 代码的时候，效率会特别低下，因为需要敲打很多尖括号，而且很多标签都需要闭合标签等。于是，就有了 `Emmet`，它可以极大的提高代码编写的效率，它提供了一种非常简练的语法规则，然后立刻生成对应的 `HTML` 结构或者 `CSS` 代码，同时还有多种实用的功能帮助进行前端开发。

<!-- more -->

`VsCode`内置了`Emmet`语法,在后缀为`.html/.css`中输入缩写后按`Tab`键即会自动生成相应代码

请注意在`VsCode`新版本中按`Tab`不再默认启用`Emmet`展开缩写!需要在首选项配置中设置为`emmet.triggerExpansionOnTab:true`!

语法基本规则如下:
| 语法        | 说明                    |
| :---------- | :---------------------- |
| E#id        | 代表id属性              |
| E.class     | 代表class属性           |
| E[attr=foo] | 代表某一个特定属性      |
| E{foo}      | 代表标签包含的内容是foo |
| E>N         | 代表N是E的子元素        |
| E+N         | 代表N是E的同级元素      |
| E^N         | 代表N是E的上级元素      |
\* E :代表HTML标签

本文仅介绍了在`Html`使用`Emmet`,
如果想`CSS`缩写的语法请参考[这里](https://docs.emmet.io/css-abbreviations/)

## 基础用法

- 元素(`Elements`)
您可以使用元素的名称，如`div`或`p`来生成`HTML`标签。`Emmet`没有一组可用的标签名称，可以写任何单词并将其转换为标签。也就是只要知道元素的缩写,`Emmet`会自动转换成对应标签.
形如:

| 快捷键           | 标签                                           |
| :--------------- | :--------------------------------------------- |
| `div`            | `<div> </div>`                                 |
| `foo`            | `<foo> </foo>`                                 |
| `html:5`         | 将生成`html5`标准的包含`body`为空基本`dom`     |
| `html:xt`        | 生成`XHTML`过渡文档类型,`DOCTYPE`为`XHTML`     |
| `html:4s`        | 生成`HTML4`严格文档类型,`DOCTYPE`为`HTML 4.01` |
| `a:mail`         | `<a href="mailto:"></a>`                       |
| `a:link`         | `<a href="http://"></a>`                       |
| `base`           | `<base href="">`                               |
| `br`             | `<br>`                                         |
| `link`           | `<link rel="stylesheet" href="">`              |
| `script:src`     | `<script src=""></script>`                     |
| `form:get`       | `<form action="" method="get"></form>`         |
| `label`          | `<label for=""></label>`                       |
| `input`          | `<input type="text">`                          |
| `inp`            | `<input type="text" name="" id="">`            |
| `input:hidden`   | `<input type="hidden" name="">`(`input:h`亦可) |
| `input:email`    | `<input type="email" name="" id="">`           |
| `input:password` | `<input type="password" name="" id="">`        |
| `input:checkbox` | `<input type=" checkbox" name="" id="">`       |
| `input:radio`    | `<input type="radio" name="" id="">`           |
| `select`         | `<select name="" id=""></select>`              |
| `option`         | `<option value=""></option>`                   |
| `bq`             | `<blockquote></blockquote>`                    |
| `btn`            | `<button></button>`                            |
| `btn:s`          | <`button type="submit"></button>`              |
| `btn:r`          | `<button type="reset"></button>`               |

- 文本操作符(`{Text}`)
如果想在生成元素的同时添加文本内容可以使用`{}`(标签内的内容):

即：标签要不要带内容的快速生成

```html
<!-- a{Click me} -->
<a href="">Click me</a>
<!-- div{这是一段文本} -->
<div>这是一段文本</div>
<!-- a{点我点我} -->
<a href="">点我点我</a>
```

:::warning 注
当`{}`作为单独的一个操作符使用时，`a{click}`和`a>{click}`将生成相同的标签，但当使用了多个，或用了其它操作符时将会生成不同的标签
:::

- 属性操作符(`Attribute operators`)
属性运算符用于修改输出元素的属性.

> - 选择器：`Id`和`Class` `(#id and .class)`
>
>给标签指定`id`和`class`选择器，只需在标签的后面直接添加，但必需以`.`或`#`开头。
>
>```html
><!-- div.test -->>
><div class="test"></div>
><!-- div#pageId  -->>
><div id="pageId"></div>
><!-- div#header+div.page+div#footer.class1.class2.class3 -->
><div id="header"></div>
><div class="page"></div>
><div id="footer" class="class1 class2 class3"></div>
>```
>
>隐式标签则会自动联想生成对应元素,根据配置规则不同生成的结果也是不同的，`.`是表示生成的是：`<div class="className">第N个盒子</div>`。
>
>```html
><!-- .class -->
><div class></div>
><!-- em>.class -->
><em><span class></span></em>
><!-- table>.row>.col -->
><table>
>    <tr class="row">
>        <td class="col"></td>
>    </tr>
></table>
>```
>
>绑定多个类名用`.`符号连续起来即可
>
>```html
><!-- div.className{第$个盒子}*5 -->
><div class="className">第1个盒子</div>
><div class="className">第2个盒子</div>
><div class="className">第3个盒子</div>
><div class="className">第4个盒子</div>
><div class="className">第5个盒子</div>
><!-- div.test1.test2.test3 -->
><div class="test1 test2 test3"></div>
>```
>
>- 自定义属性：`[]`（英文下的中括号）
>
>使用`[]`操作符给标签添加自定义属性：自定义属性使用 `[attr1='' attr2='']`.
>
>```html
><!--div[class=className]{第$个盒子}*5-->
><div class="className">第1个盒子</div>
><div class="className">第2个盒子</div>
><div class="className">第3个盒子</div>
><div class="className">第4个盒子</div>
><div class="className">第5个盒子</div>
><!-- a[href='#' data-title='customer' target='_blank'] -->
><a href="#" data-title="customer" target="_blank"></a>
> <!-- td[title="Hello world!" colspan=3] -->
><td title="Hello world!" colspan="3"></td>
> ```
>
>可以把你喜欢的一些属性放在`[]`内，如果不指定属性值，代码将生成不带属性值的`HTML`默认标签：
>
>属性值必需使用单引号或双引号，不然就会出现你可能想到的效果。
>
>```html
><!-- 错误示范，实际是想要一个 colspan="title" 的属性 -->
><!-- td[colspan title] -->
> <td colspan="" title=""></td>
>```
>
- 嵌套操作符(`Nesting operators`)
嵌套操作符用于将缩写元素放置在生成的树中,是否应放置在上下文元素的内部或附近.

>- 父子关系:`>`
>
>通过`>`标识元素可以生成嵌套子级元素,可以配合元素属性进行连写,使用`>`操作符在内部相互嵌套的标签：
>
>```html
><!-- ul>li>a -->
><ul>
>    <li><a href=""></a></li>
></ul>
>-------------------------
><!--  div#pageId>ul>li -->
><div id="pageId">
>    <ul>
>        <li></li>
>    </ul>
></div>
>```
>
>- 兄弟关系 \ 同级:`+`
>
>使用`+`操作符将标签处于同一个层级：
>
>```html
><!-- div#pageId+div.child  -->
><div id="pageId"></div>
><div class="child"></div>
><!-- div+p+footer -->
><div></div>
><p></p>
><footer></footer>
>```
>
>像`ul` `dl`这样的列表标签，使用`+`操作符将生成>一个标准的列表结构(vscode无效):
>
>```html
><!-- ul+ -->
><ul>
>    <li></li>
></ul>
><!-- dl+ -->
><dl>
>    <dt></dt>
>    <dd></dd>
></dl>
><!-- 本项在vscode中无效 -->
> ```
>
> - 父级:`^`
>
> 用于生成父级元素的同级元素,从这个字符所在位置开始,查找左侧最近的元素的父级元素并生成其兄弟级元素.
>
> ```html
> <!-- 使用 `^` 操作符使标签与前一标签的父级处于相同的级别： -->
> <!-- div>p.parent>span.child^ul.brother>li -->>
> <div>
>     <p class="parent"><span class="child"></span></p>
>     <ul class="brother">
>         <li></li>
>     </ul>
> </div>
><!-- div+div>p>span+em^bq -->
><div></div>
><div>
>    <p><span></span><em></em></p>
>    <blockquote></blockquote>
></div>
>
><!-- 使用两^操作符就与前一标签的爷爷级是相同级>别，依此类推： -->
><!-- div+div>p>span+em^^bq -->
><div></div>
><div>
>    <p><span></span><em></em></p>
></div>
><blockquote></blockquote>
> ```
>
- 分组操作符(`Grouping`)

分组使用`()`来实现缩写的分离.比如这个例子,如果不加括号那么`a`将作为`span`的子级元素生成.加上括号`a`将于`()`内的元素同级.

```html
<!-- 可以使用多个`()`，并使用乘法`*`操作符 -->
<!-- div>(ul>li+span)>a -->
<div>
    <ul>
        <li></li>
        <span></span>
    </ul>
    <a href=""></a>
</div>
<!-- div>(header>ul>li*2>a)+footer>p -->
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
    <footer>
        <p></p>
    </footer>
</div>
<!-- (div>dl>(dt+dd)*3)+footer>p -->
<div>
    <dl>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
        <dt></dt>
        <dd></dd>
    </dl>
</div>
<footer>
    <p></p>
</footer>
```

- 乘法(`Multiplication`)

`*`:要生成多少个一样的标签，后面加数字

使用`*N`即可自动生成重复项.`N`是一个正整数.在使用时请注意`N`所在位置,位置不同生成的结果不同.

```html
<!-- div>ul>li*5 -->
<div>
    <ul>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
    </ul>
</div>
<!-- ul>li.item$*5 -->
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>
<!-- ul>(li>a)*3 -->
 <ul>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
    <li><a href=""></a></li>
</ul>
<!-- ul>(li>a[click="#"])*3 -->
<ul>
    <li><a href=""click="#"></a></li>
    <li><a href=""click="#"></a></li>
    <li><a href=""click="#"></a></li>
</ul>
<!-- h[title=item]{Header $}*3 -->
<h1 title="item1">Header 1</h1>
<h2 title="item2">Header 2</h2>
<h3 title="item3">Header 3</h3>
```

- `$`：标签的名称序号

即：生成的标签要不要自动生成带序号的

```html
<!-- ul>li.item${item number:$}*3 -->
<ul>
    <li class="item1">item number:1</li>
    <li class="item2">item number:2</li>
    <li class="item3">item number:3</li>
</ul>
```

如果生成两位数则使用两个连续的`$$`,更多位数以此类推...

使用多个`$`操作符用`0`来分填充数字：

```html
<!-- ul>li.item$$$*5 -->
<ul>
    <li class="item001"></li>
    <li class="item002"></li>
    <li class="item003"></li>
    <li class="item004"></li>
    <li class="item005"></li>
</ul>
```

使用`@`修饰符，可以更改编号方向（升序或降序）和基数（例如起始值）.注意这个操作符在`$`之后添加

`@-`表示降序,`@+`表示升序,默认使用升序.

`@N`可以改变起始值.需要注意的是如果配合升降序使用的话`N`是放到`+` \ `-`符后.

起始数字，在前添加@起始数字：`*`

```html
<!-- ul>li.item$@3*5 -->
<ul>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
    <li class="item6"></li>
    <li class="item7"></li>
</ul>
```

从起始数字为`3`的列表倒序，只需把上面的Emmet代码`item`后面的数字写成`@-3*5`。

```html
<!-- ul>li.item$@-*5 -->
<ul>
    <li class="item5"></li>
    <li class="item4"></li>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
<!-- ul>li.item$@-*3 -->
<ul>
    <li class="item3"></li>
    <li class="item2"></li>
    <li class="item1"></li>
</ul>
---------------------------
<!-- ul>li.item$@-10*3 -->
<ul>
    <li class="item12"></li>
    <li class="item11"></li>
    <li class="item10"></li>
</ul>
```

\* 倒序在vscode中无效

另外如果你的编辑器中已经有了一些`html`智能提示代码段,比如我的`VsCode`还装了`HTML Snippets`插件,这个与`Emmet`语法有部分冲突,使用`Tab`键时会优先使用插件的代码提示,建议禁用.

组合起来看看效果:

```html
<!-- table.table-row[role='table']>(thead>tr>td{item $@120}*5)+(tbody>tr>(td.item$$@-)lorem10*5) -->
<table class="table-row" role="table">
    <thead>
        <tr>
            <td>item 120</td>
            <td>item 121</td>
            <td>item 122</td>
            <td>item 123</td>
            <td>item 124</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <td class="item05">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit, assumenda.</td>
            </td>
            <td>
                <td class="item04">Magnam possimus molestias ipsum animi rem placeat, ut obcaecati laudantium.</td>
            </td>
            <td>
                <td class="item03">Consequuntur, labore ad optio cupiditate iusto dolores fugit quidem officiis.</td>
            </td>
            <td>
                <td class="item02">Veniam, explicabo consequuntur blanditiis at dicta fuga ratione eos beatae.</td>
            </td>
            <td>
                <td class="item01">Fuga voluptatum illo quis ducimus ad eveniet non. Saepe, eveniet.</td>
            </td>
        </tr>
    </tbody>
</table>
```

这段目的在于生成一个类名为`table-row`,且自定义了属性`role`的`table`标签,内部包含了`thead`与`tbody`,分别生成`5`个`td`.

`thead`中`td`的内容是`item`加上自增序号,自增序号基数从`120`开始.

`tbody`中`td`拥有一个名为`item`加降序自增符号类名,且每个`td`内容随机填充`10`个单词.

配合嵌套元素和计数的例子.

```html
<!-- div.nav>(nav#navbar>(ul>li>(a[href="/xxx/product/$" data-index=$]>lorem4)*5))+div.btn[type='button']>span{--}^^div#main -->
<div class="nav">
    <nav id="navbar">
        <ul>
            <li>
                <a href="/xxx/product/1" data-index="1">Lorem ipsum dolor sit.</a>
                <a href="/xxx/product/2" data-index="2">Dolor vel, quia quas.</a>
                <a href="/xxx/product/3" data-index="3">Qui hic, corrupti eum!</a>
                <a href="/xxx/product/4" data-index="4">Necessitatibus perspiciatis, corrupti. Praesentium!</a>
                <a href="/xxx/product/5" data-index="5">Nostrum quos, voluptate. Velit!</a>
            </li>
        </ul>
    </nav>
    <div class="btn" type="button"><span>--</span></div>
</div>
<div id="main"></div>
```

## 进阶高级用法

- 模拟文本/随机文本

在开发时经常要填充一些文本内容占位,`Emmet`内置了`Lorem Ipsum`功能来实现.`loremN`或者`lipsumN`,`N`表示生成的单词数,正整数.可以不填.

```html
lorem
=> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit quia commodi vero sint omnis fugiat excepturi reiciendis necessitatibus totam asperiores, delectus saepe nulla consequuntur nostrum! Saepe suscipit recusandae repellendus assumenda.

p>lorem4
=>
<p>Lorem ipsum dolor sit.</p>

(p>lorem4)*3
=>
<p>Lorem ipsum dolor sit.</p>
<p>Labore aperiam, consequuntur architecto.</p>
<p>Quidem nisi, cum odio!</p>
```

- 包装文本

听起来可能有点绕,通俗点解释就是把一段指定的文本包装成我们想要的结构.注意这个功能需要编辑器的支持,举个大栗子:
比如`PM`给了这样一段文本

```html
首页
产品介绍
相关案例
关于我们
联系我们
而我们预期的效果是这样
<nav>
    <ul>
        <li>首页</li>
        <li>产品介绍</li>
        <li>相关案例</li>
        <li>关于我们</li>
        <li>联系我们</li>
    </ul>
</nav>
```

  1. 选中文本,按下`ctrl+shift+p`打开命令窗口输入`ewrap`
  2. 选择`Emmet:`使用缩写进行包装(`Wrap with Abbreviation`)选项
  ![ewrap图片](https://s3.ax1x.com/2020/11/13/DSdMOH.png)
  3. 输入缩写字符`nav>ul>li*`按下回车键即可看到效果.
     当然也可以在菜单`=>`编辑`=>` `Emmet(M).`.然后输入.

这里需要的注意的地方是输入的缩写代码中`*`所在位置不同得到的效果也是不同的
另外如果给的文本带有序号的情况,我们也是可以通过缩写来处理,而不是手动删除,主要用的是`|t`来处理.
比如:

```html
    1.首页
    2.产品介绍
    3.相关案例
    4.关于我们
    5.联系我们
    <!-- 输入包装字符命令 -->
    <!-- nav>ul>li*|t -->
    <!-- 即可看到生成的html中自动去掉了序号 -->
```

\* 以上例子中在vscode中是以下效果,可能是和插件有冲突，有部分效果有差异~

```html
<nav>
    <ul>
        <li>
            首页
            产品介绍
            相关案例
            关于我们
            联系我们
        </li>
    </ul>
</nav>
```

## 其他例子

```html
<!-- link:css 加tab键-->
 <link rel="stylesheet" href="style.css">
```

```html
<!-- script:src  -->
 <script src=""></script>
```

```html
<!--input:button -->
<input type="button" value="">
```

```html
<!--form:get-->
<form action="" method="get"></form>
<!--form:post-->
<form action="" method="post"></form>
```

:::warning 注
上述的操作是可以搭配使用进而得出酷炫的效果,使用时请注意空格的问题,缩写代码不要有空格否则是不会进行转换的.
:::
