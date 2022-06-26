---
title: CSS 可视化文档
date: 2018-09-23
 
categories:
 - 前端基础
tags:
 - 前端基础
 - CSS
 - CSS3
publish: true
---
## 可视化文档

[http://cssreference.parryqiu.com/](http://cssreference.parryqiu.com/)

## flex

[阮一峰CSS--flex](http://www.ruanyifeng.com/blog/2015/07/flex-grammar.html)

任何一个容器都可以指定为 `Flex` 布局,包括行内元素

- 使用flex 步骤

1. 在父容器中定义`display:flex;`

```css
.parent{
  display: flex;
}
```

2. (默认方式可省略本步骤)在父容器中，设置主轴方向
    - `flex-direction`
      - `row`（默认值）：主轴为水平方向，起点在左端。
      - `row-reverse`：主轴为水平方向，起点在右端。
      - `column`：主轴为垂直方向，起点在上沿。
      - `column-reverse`：主轴为垂直方向，起点在下沿。

```css
.parent{
  display: flex;
  flex-direction:row | row-reverse | column | column-reverse;
}
/* 默认 row */
```

3. 子容器

## 属性简述

1. `list-style-type: none;`:去掉`ul`和`ol`的默认项目符号样式
2. `text-decoration: none;` :超链接去除下划线。如`<a></a>`
