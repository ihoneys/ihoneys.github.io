---
title: less
date: 2019-11-31
 
categories:
 - 前端基础
tags:
 - less

---

## less 介绍

less是一种动态样式语言,属于css预处理器的范畴，它扩展了CSS语言，增加了变量、Mixin、函数等特性,使CSS更易维护和扩展

less既可以在客户端上运行,也可以借助Node.js在服务端运行。

## less 使用

- 网站
[less的中文官网](http://lesscss.cn/)

[bootstrap中less教程](http://www.bootcss.com/p/lesscss/)

- Less编译工具

[koala 官网](http://www.koala-app.com)

- 引入

全局安装

```js
npm install less -g
```

针对 Node Development 配置段安装 Less

```js
npm i less --save-dev
```

### less 注释

- 以`//`开头的注释,不会被编译到css文件中
- 以`/**/`包惠的注释会被编译到css文件中

### 变量（Variables）

- 使用`@`来申明一个变量:`@pink: pink;`
    1. 作为普通属性值只来使用:直接使用`@pink`
    2. 作为选择器和属性名:`#@{值}`的形式
    3. 作为`URL :@{url}`
    4. 变量的延迟加载

```less
@coloe: red;
@fs: 14px; //不常用
@className: .box; //不常用

.content {
    background: @coloe;
}

@{className} {
    font-size: @fs;
}

```

## 作用域（Scope）

Less 中的作用域与 CSS 中的作用域非常类似。首先在本地查找变量和混合（mixins），如果找不到，则从“父”级作用域继承。但是有个不同的是延迟加载。

```less
  // less 的延迟加载,在当前作用域有效，但是，变量会在都解析完后，再赋值
@var: 10px;
.content {
    @var: 15px;
    .box {
        @var 10px
        font-size: @var; //20px
        @var: 20px;
    }

    font-size: @var; //15px
}
```

### 嵌套（Nesting）

1. 基本嵌套规则
2. `&`的使用

```less
.centent {
    width: 100px;
    height: 100px;
    div {
        background: red;
        //加 & 表示同级，表示子级，不加 & 会有空格
        &:hover {
            background: gold;
        }
    }
}
```

- `@`规则嵌套和冒泡

`@` 规则（例如 `@media` 或 `@supports`）可以与选择器以相同的方式进行嵌套。`@` 规则会被放在前面，同一规则集中的其它元素的相对顺序保持不变。这叫做冒泡（`bubbling`）。

```less
.component {
  width: 300px;
  @media (min-width: 768px) {
    width: 600px;
    @media  (min-resolution: 192dpi) {
      background-image: url(/img/retina2x.png);
    }
  }
  @media (min-width: 1280px) {
    width: 800px;
  }
}
```

编译为：

```css
.component {
  width: 300px;
}
@media (min-width: 768px) {
  .component {
    width: 600px;
  }
}
@media (min-width: 768px) and (min-resolution: 192dpi) {
  .component {
    background-image: url(/img/retina2x.png);
  }
}
@media (min-width: 1280px) {
  .component {
    width: 800px;
  }
}
```

### 混合（Mixins）

混合就是将一系列属性从一个规则集引入到另一个规则集的方式

1. 普通混合
2. 不带输出的混合
3. 带参数的混合
4. 带参数并且有默认值的混合
5. 带多个参数的混合
6. 命名参数
7. 匹配模式
8. `arguments` 变量

```less
// 1. 普通混合
.centent {
    width: 100px;
    height: 100px;
}
div {
    background: red;
    .centent;
}
```

```less
// 2. 不带输出的混合
.centent() { //相当于定义成变量，最终不会被编译出来，只有 div
    width: 100px;
    height: 100px;
}
div {
    background: red;
    .centent;
}
```

```less
// 3.带参的混合
.centent(@w,@h) {
    width: @w;
    height: @h;
}
div {
    background: red;
    .centent(100px, 100px);
}
// or
.centent(@w:50px,@h) { //默认值，不传参时有效
    width: @w;
    height: @h;
}
div {
    background: red;
    .centent(100px, 100px);
}
```

```less
// 命名参数
.centent(@w:50px,@h) {
    width: @w;
    height: @h;
}
div {
    background: red;
    .centent(@h: 100px); //只传一个参数时，可以指定参数，参数值
}

```

```less
// arguments
.centent(@a,@b,@c) {
    border: @arguments;
}
div {
    background: red;
    .centent(1px, solid, black);
}

```

## 运算（Operations）

## 映射（Maps）

从 Less 3.5 版本开始，你还可以将混合（mixins）和规则集（rulesets）作为一组值的映射（map）使用。

```less
#colors() {
  primary: blue;
  secondary: green;
}

.button {
  color: #colors[primary];
  border: 1px solid #colors[secondary];
}
```

## 转义（Escaping）

转义（`Escaping`）允许你使用任意字符串作为属性或变量值。任何 `~"anything"` 或 `~'anything'` 形式的内容都将按原样输出，除非 `interpolation`。

```js
@min768: ~"(min-width: 768px)";
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
// 注意，从 Less 3.5 开始，可以简写为：
@min768: (min-width: 768px);
.element {
  @media @min768 {
    font-size: 1.2rem;
  }
}
// 以上 编译为：

@media (min-width: 768px) {
  .element {
    font-size: 1.2rem;
  }
}
```
