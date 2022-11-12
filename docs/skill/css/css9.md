---
title: CSS 居中和垂直水平居中
date: 2018-09-23
sidebar: 'auto'
categories:
 - 前端基础
tags:
 - 前端基础
 - CSS
 - CSS3
---

## 行内元素

### 水平居中

1. 水平居中，父元素的宽是默认100%的

```html
<style>
    .parent {
        background: red;
        text-align: center;
    }
</style>

<body>
    <div class="parent">
        <span class="child">content</span>
    </div>
</body>
```

2. 和`1`不同的是，父元素是行元素，但是宽是适应内容的，两侧被margin挤压。

```html

<style>
    .parent {
        background: red;
        width: fit-content;
        margin: auto;
    }
</style>
···
<body>
    <div class="parent">
        <span class="child">content</span>
    </div>
</body>
```

### 垂直居中

- 单行文本垂直居中,多行文本不生效

```html
<style>
    .parent {
        height: 200px;
        line-height: 200px;
        background: red;
    }
</style>
···
<body>
    <div class="parent">
        <span class="child">content</span>
    </div>
</body>
```

## 块级元素

### 水平居中

- 块级元素水平居中

```html
<style>
    .parent {
        background-color: red;
    }
    .child {
        margin: 0 auto;
        width: 100px;
        height: 50px;
        background-color: yellowgreen;
    }
</style>
···
<body>
    <div class="parent">
        <div class="child"></div>
    </div>
</body>
```

### 垂直居中

1. 使用定位,子元素宽度100%，如果不设置，默认内容宽度

```html
<style>
    .parent {
        background-color: red;
        height: 300px;
        position: relative;
    }
    .child {
        position: absolute;
        top: 50%;
        margin-top: -50px;
        height: 100px;
        width: 100%;
        background-color: yellowgreen;
    }
</style>
···
<body>
    <div class="parent">
        <div class="child">content</div>
    </div>
</body>
```

2. 使用`flex`，子元素宽度100%,如果不设置，默认内容宽度

```html
<head>
<style>
    .parent {
        background-color: red;
        height: 300px;
        display: flex;
        align-items: center;
    }
    .child {
        height: 100px;
        width: 100%;
        background-color: yellowgreen;
    }
</style>
···
<body>
    <div class="parent">
        <div class="child">content</div>
    </div>
</body>
```

## 水平垂直居中

1. 定位 + `margin-top margin-left`

要提前知道子元素的宽高

```html
<style>
    .parent {
        position: relative;
        height: 200px;
        background-color: red;
    }
    .child {
        position: absolute;
        width: 100px;
        height: 100px;
        left: 50%;
        top: 50%;
        margin-top: -50px;
        margin-left: -50px;
        background-color: yellowgreen;
    }
    </style>
···
<body>
    <div class="parent">
        <div class="child">content</div>
    </div>
</body>
```

或者

```html
<style>
    .parent {
        position: relative;
        height: 200px;
        background-color: red;
    }
    .child {
        position: absolute;
        width: 100px;
        height: 100px;
        top: calc(50% - 50px);
        left: calc(50% - 50px);
        background-color: yellowgreen;
    }
</style>
···
<body>
    <div class="parent">
        <div class="child">content</div>
    </div>
</body>
```

2. 定位 + `transform`

不用提前知道子元素的宽高

```html
<style>
    .parent {
        position: relative;
        height: 200px;
        background-color: red;
    }
    .child {
        position: absolute;
        width: 100px;
        height: 100px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: yellowgreen;
    }
</style>
···
<body>
    <div class="parent">
        <div class="child">content</div>
    </div>
</body>
```

3. 定位 + `margin`

设置子元素的`margin 0` 子元素会填充父元素的所有可用空间,然后`margin:auto`

```html
<style>
    .parent {
        position: relative;
        height: 200px;
        background-color: red;
    }
    .child {
        position: absolute;
        width: 100px;
        height: 100px;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        background-color: yellowgreen;
    }
</style>
···
<body>
    <div class="parent">
        <div class="child">content</div>
    </div>
</body>
```

4. `padding`

注意：父元素`padding`会影响元素大小

```html
<style>
    .parent {
        padding: 50px;
        background-color: red;
    }
    .child {
        height: 200px;
        background-color: yellowgreen;
    }
</style>
···
<body>
    <div class="parent">
        <div class="child">content</div>
    </div>
</body>
```

5. `flex`

```html
<style>
    .parent {
        height: 200px;
        background-color: red;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .child {
        width: 100px;
        height: 100px;
        background-color: yellowgreen;
    }
</style>
···
<body>
    <div class="parent">
        <div class="child">content</div>
    </div>
</body>
```

6. 伪元素

```html
<style>
    .parent {
        height: 200px;
        background-color: red;
        text-align: center;
    }
    .child {
        display: inline-block;
        width: 100px;
        height: 100px;
        vertical-align: middle;
        background-color: yellowgreen;
    }
    .parent::before {
        display: inline-block;
        width: 20px; /*width最后设置为0*/
        height: 200px;
        vertical-align: middle;
        background-color: yellow;
        content: "";
    }
</style>
···
<body>
    <div class="parent">
        <div class="child">content</div>
    </div>
</body>
```

7. `calc(宽高相等)`

```html
<style>
    .parent {
        height: 600px;
        width: 600px;
        background-color: red;
    }
    .child {
        width: 100px;
        height: 100px;
        padding: calc(
            (100% - 100px) / 2
        ); /* 100%是父元素的宽高 ，100px是子元素的宽高，然后除以2 */
        background-clip: content-box; /* 让背景颜色只对content生效，不对padding生效 */
        background-color: yellowgreen;
    }
</style>
</head>
<body>
    <div class="parent">
        <div class="child">content</div>
    </div>
</body>
```

8、使用 CSS Grid

```html
<div id="box">
    <div class="one"></div>
    <div class="two">target item</div>
    <div class="three"></div>
</div>
```
```css
#box {
    width: 300px;
    height: 300px;
    display: grid;
}
.two {
    background: orange;
}
.one, .three {
    background: skyblue;
}
```

这种场景下使用 Grid Layout 非常方便，只需要设置 .one .three 两个辅助元素即可，只是 Grid 布局现在浏览器支持度还比较低。
使用 CSS Grid 设置水平居中
```html
<div id="box">
    <div></div>
    <div class="two">target item</div>
    <div></div>
</div>
```
```css
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
}
.two {
    background: orange;
}
```

同样的添加两个辅助元素，然后将 grid-template-columns 属性值设置为 1fr 1fr 1fr，意为三列子元素等分全部可用宽度。
也会有这样的场景，需要被居中的元素宽度已知，则：
```html
<div id="box">
    <div></div>
    <div class="two">target item</div>
    <div></div>
</div>
```
```css
#box {
    width: 300px;
    height: 300px;
    background: #ddd;
    display: grid;
    grid-template-columns: 1fr 211px 1fr;
}
.two {
    background: orange;
}
```