---
title: JS 兼容
date: 2019-12-21
 
categories:
- 前端基础
tags:
- JavaScript
---

## 兼容

### img 标签

兼容ie8

```css
img{
    _border:0;
}
```

### 事件兼容

```js
var eventTool = {
    // target: window.event.target || window.event.srcElements,
    // 兼容阻止冒泡
    STOPPG: function () {
        let event = window.event
        if (event.stopPropagation) {
            event.stopPropagation()
        } else {
            event.cancelBubble = true
        }
    },
    // 兼容阻止默认事件
    PREVENT: function () {
        let event = window.event
        if (event.preventDefault) {
            event.preventDefault()
        } else {
            event.returnValue = false
        }
    }
}
// eventTool.STOPPG() 阻止冒泡
// eventTool.PREVENT() 阻止默认
```
