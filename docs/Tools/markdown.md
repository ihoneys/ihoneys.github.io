---
title: MarkDown
date: 2019-05-28
sidebar: "auto"
categories:
  - 工具
tags:
  - MarkDown
publish: true
sticky: 10
# 打赏
showSponsor: true
---

:::tip 介绍
关于 `VuePress` 中的 `MarkDown` 语法及 `VuePress` 自带语法，可以看[这里](https://vuepress.vuejs.org/zh/guide/markdown.html#header-anchors)
:::

<!-- more -->

[MarkDownlint 错误原因](https://www.jianshu.com/p/51523a1c6fe1)

[[toc]]

## MarkDown 语法介绍

### 1. 斜体和粗体

代码展示：

```js
1.*斜体*或_斜体_
2.**粗体**
3.***加粗斜体***
4.~~删除线~~
```

显示效果：

> _斜体_
> 或
> _斜体_ > **粗体** > **_加粗斜体_** > ~~删除线~~

### 2. 分级标题

第一种

代码展示：

```js
1.这是一个一级标题
============================
2.这是一个二级标题
----------------------------
```

显示效果：

> # 这是一个一级标题
>
> ## 这是一个二级标题

第二种

代码展示：

```js
1.# 一级标题
2.## 二级标题
3.### 三级标题
4.#### 四级标题
5.##### 五级标题
6.###### 六级标题
```

显示效果：

> # 一级标题
>
> ## 二级标题
>
> ### 三级标题
>
> #### 四级标题
>
> ##### 五级标题
>
> ###### 六级标题

### 3. 有序无序列表

代码展示：

```js
1. XXX
2. XXX
3. XXX

- XXX
- XXX
- XXX

* XXX
* XXX
* XXX

+ xxx
+ xxx
+ xxx

多级嵌套
1. XXX
  - XXX
    - XXX
2. XXX
  - XXX
    - XXX
```

显示效果：

> 1. XXX
> 2. XXX
> 3. XXX
>
> - XXX
> - XXX
> - XXX
>
> * XXX
> * XXX
> * XXX
>
> - xxx
> - xxx
> - xxx
>
> 多级嵌套
>
> 1. XXX
>
> - XXX
>   - XXX
>
> 2. XXX
>
> - XXX
>   - XXX

### 4. 表格

冒号代表对齐格式，分别为居中；右对齐；左对齐

注： `:`代表对齐方式 ,**`:` 与 `|` 之间不要有空格**，否则对齐会有些不兼容

代码展示：

```js
| name  | age    |    sex |
| :---: | :----- | -----: |
| 居中  | 左对齐 | 右对齐 |
| tony  | 20     |     男 |
| lucy  | 18     |     女 |
```

显示效果：

| name | age    |    sex |
| :--: | :----- | -----: |
| 居中 | 左对齐 | 右对齐 |
| tony | 20     |     男 |
| lucy | 18     |     女 |

### 5. 分割线

在一行中用三个以上的星号`*`、减号`-`、底线`_`来建立一个分隔线，行内不能有其他东西。你也可以在`*`号或是`-`号中间插入空格。

代码展示：

```js
***
---
___
```

显示效果：

---

> ---
>
> ---

### 6. 代码块（三种方法）

一是，利用英文 \` 或 `~~~` 符号；

二是，使用 `<pre></pre>` 元素同样可以形成代码块，[示例如下](#_13-高级技巧)；

三是，可以在代码前加四个空格或`tab`键，也可以形成代码块。

a. 行内代码或符号 高亮语法

代码展示：

```js
    ``abc``  / `123`
```

显示效果：

`abc` / `123`

b. 段落式(代码块)语法高亮

代码展示：

````html
```html
<html>
  <div>
    <p>仿佛兮若轻云之蔽月</p>
  </div>
</html>
```
````

显示效果：

> ```html
> <html>
>   <div>
>     <p>仿佛兮若轻云之蔽月</p>
>   </div>
> </html>
> ```

c. `<pre></pre>`标签

代码展示

```html
<pre style="color:greenyellow">
使用元素标签同样可以形成代码块 ···
</pre>
```

显示效果：

<pre style="color:greenyellow">
使用元素标签同样可以形成代码块 ···
</pre>

d. 段落式(代码块)语法高亮，重点突出代码块中的行-高亮

代码展示：

````html
```html {3}
<html>
  <div>
    <p>飘摇兮若回风之流雪</p>
  </div>
</html>
```
````

显示效果：

> ```html {3}
> <html>
>   <div>
>     <p>飘摇兮若回风之流雪</p>
>   </div>
> </html>
> ```

e. 禁用语法高亮

代码展示：

````html
```ohighlight （或者这里留空）
<html>
  <div>
    <p></p>
  </div>
</html>
```
````

显示效果：

> ```html
> <html>
>   <div>
>     <p></p>
>   </div>
> </html>
> ```
>
> f. 在整个代码片段前加四个以上的 `tab` or `空格` 形成代码块

    <html>
      <div>
         <p></p>
      </div>
    </html>

- 支持的语言包括但不限于：
  `1c, abnf, accesslog, actionscript, ada, apache, applescript, arduino, armasm, asciidoc, aspectj, autohotkey, autoit, avrasm, awk, axapta, bash, basic, bnf, brainfuck, cal, capnproto, ceylon, clean, clojure, clojure-repl, cmake, coffeescript, coq, cos, cpp, crmsh, crystal, cs, csp, css, d, dart, delphi, diff, django, dns, dockerfile, dos, dsconfig, dts, dust, ebnf, elixir, elm, erb, erlang, erlang-repl, excel, fix, flix, fortran, fsharp, gams, gauss, gcode, gherkin, glsl, go, golo, gradle, groovy, haml, handlebars, haskell, haxe, hsp, htmlbars, http, hy, inform7, ini, irpf90, java, javascript,js, json, julia, kotlin, lasso, ldif, leaf, less, lisp, livecodeserver, livescript, llvm, lsl, lua, makefile, markdown, mathematica, matlab, maxima, mel, mercury, mipsasm, mizar, mojolicious, monkey, moonscript, n1ql, nginx, nimrod, nix, nsis, objectivec, ocaml, openscad, oxygene, parser3, perl, pf, php, pony, powershell, processing, profile, prolog, protobuf, puppet, purebasic, python, q, qml, r, rib, roboconf, rsl, ruby, ruleslanguage, rust, scala, scheme, scilab, scss, smali, smalltalk, sml, sqf, sql, stan, stata, step21, stylus, subunit, swift, taggerscript, tap, tcl, tex, thrift, tp, twig, typescript, vala, vbnet, vbscript, vbscript-html, verilog, vhdl, vim, x86asm, xl, xml, xquery, yaml, zephir ···`

`VuePress`用的是`prism`代码高亮，在 `Prism` 的网站上查看 [合法的语言列表](https://prismjs.com/#languages-list)

### 7. 设置字体，字体颜色，字号

代码展示：

```html
<font face="黑体">黑体</font>
<font color="red">红色</font>
<font color="#00ffff">123</font>
<font size="25">字体大小</font>
```

### 8. 注脚

代码展示：

```js
文本内容[^1]文本内容[^2]

[^1]:注脚1
[^2]:注脚2

```

显示效果：

> 文本内容[^1]
>
> 文本内容[^2]

[^1]: 注脚 1
[^2]: 注脚 2

### 9. 背景色

代码展示：

```html
<table>
  <tr>
    <td bgcolor="orange">背景色是：orange</td>
  </tr>
</table>
```

显示效果：

<table><tr><td bgcolor=orange>背景色是：orange</td></tr></table>

### 10. 超链接

行内式和参考式两种形式，行内式一般使用较多

- 行内式

语法说明：`[]`里写链接文字，`()`里写链接地址, `()`中的`""`中可以为链接指定`title`属性，`title`属性可加可不加。`title`属性的效果是鼠标悬停在链接上会出现指定的 `title`文字。[链接文字](链接地址 “链接标题”)’这样的形式。链接地址与链接标题前有一个空格。

代码展示：

显示效果：

- 参考式（暂缺）

### 11. 引用

代码展示：

````js
普通引用
> 引用文本前使用 [大于号+空格]
> 折行可以不加，新起一行都要加上

引用里嵌套引用
> 最外层引用
> > 多一个 > 嵌套一层引用
> > > 可以嵌套很多层

引用里嵌套列表
> - 这是引用里嵌套的一个列表
> - 还可以有子列表
>     * 子列表需要从 - 之后延后四个空格开始

引用里嵌套代码块
>     同样的，在前面加四个空格形成代码块
>
> ```
> 或者使用 ``` 形成代码块
> ```
````

显示效果：

- 普通引用

> 引用文本前使用 [大于号+空格]
> 折行可以不加，新起一行都要加上

- 引用里嵌套引用

> 最外层引用
>
> > 多一个 > 嵌套一层引用
> >
> > > 可以嵌套很多层

- 引用里嵌套列表

  > - 这是引用里嵌套的一个列表
  > - 还可以有子列表
  >   - 子列表需要从 - 之后延后四个空格开始

- 引用里嵌套代码块

>     同样的，在前面加四个空格形成代码块
>
> ````md
> 或者使用 ``` 形成代码块
> ````

### 12.图片

- 跟链接的方法区别在于前面加了个感叹号 `!`

代码展示：

```md
![图片名称](https://s3.ax1x.com/2020/12/11/rk2KXR.jpg)
有些可以用 html 插入
<img src="https://s3.ax1x.com/2020/12/11/rk2KXR.jpg" alt="图片">
```

显示效果：

`[]()`
![图片名称](https://s3.ax1x.com/2020/12/11/rk2KXR.jpg)
`<img/>`
<img src="https://s3.ax1x.com/2020/12/11/rk2KXR.jpg" alt="图片">

也可以像网址那样对图片网址使用变量

代码展示：

```md
这个链接用 `1` 作为网址变量 [Google][1].
然后在文档的结尾位变量赋值（网址）

[1]: http://www.google.com/logo.png
```

显示效果：

这个链接用 `1` 作为网址变量 [Google][1].
然后在文档的结尾位变量赋值（网址）

[1]: http://www.google.com/logo.png

### 13. 高级技巧

行内 HTML 元素
目前只支持部分段内 HTML 元素效果，包括`<kdb> <b> <i> <em> <sup> <sub> <br>` ，如下：

代码展示：

```html
使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑 使用
<pre style="color:greenyellow">使用元素标签同样可以形成代码块 ··· </pre>
<b> `Markdown` 在此处同样适用，如 *加粗倾斜* </b>
```

显示效果：

使用 <kbd>Ctrl</kbd>+<kbd>Alt</kbd>+<kbd>Del</kbd> 重启电脑

使用 `<pre></pre>`

<pre style="color:greenyellow">使用元素标签同样可以形成代码块 ··· </pre>

元素同样可以形成代码块

<b> `Markdown` 在此处同样适用，如 _加粗倾斜_ </b>

### 14. toc 拓展（文章开头的目录）

[[toc]]

\* 这里是 `GuangJu'S` 博客的示例，使用了 `markdown` 的拓展 `[[toc]]`

### 15.自定义容器

代码展示：

```md
::: tip 提示(标题自定义)
this is a tip
:::

::: warning 注意(标题自定义)
this is a tip
:::

::: danger 警告(标题自定义)
this is a tip
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。
::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details 详情(标题自定义)
这是一个详情块，在 IE / Edge 中不生效
:::
```

显示效果：

::: tip 提示(标题自定义)
this is a tip - tip 提示
:::

::: warning 注意(标题自定义)
this is a tip - warning 注意
:::

::: danger 警告(标题自定义)
this is a tip - danger 警告
:::

::: theorem 牛顿第一定律
假若施加于某物体的外力为零，则该物体的运动速度不变。
::: right
来自 [维基百科](https://zh.wikipedia.org/wiki/%E7%89%9B%E9%A1%BF%E8%BF%90%E5%8A%A8%E5%AE%9A%E5%BE%8B)
:::

::: details 下拉详情(标题自定义)
这是一个详情块，在 `IE` / 老版本`Edge`（非`Chromium`内核） 中不生效
:::

### 16.表情-Emoji

代码展示：

`:dog: :100: :dog2: :hibiscus:`

显示效果：

:dog: :100: :dog2: :hibiscus:

你可以在[这个列表](https://github.com/markdown-it/markdown-it-emoji/blob/master/lib/data/full.json)找到所有可用的 `Emoji`。

### 17.未完待续
