---
title: Vue 指令
date: 2018-12-01
sidebar: 'auto'
tags:
 - vue

---
:::tip 什么是指令
vue里都是以 `v-` 开头的，也可称为自定义属性，是属性，在标签行内
:::

截至目前共 14 个官方指令

## 1、v-text

- 预期：`string`

- 详细：

更新元素的 `textContent`。如果要更新部分的 `textContent`，需要使用  `{{ Mustache }}` 插值。

- 语法：

```jsx
v-text="value"
```

更新元素的文本，"value"为属性值也是变量，要在data中声明，作用类似{{}}

- 示例

```html
<span v-text="msg"></span>
<!-- 和下面的一样 -->
<span>{{msg}}</span>
```

- 作用：给DOM元素添加字符，只解析字符串

## 2、v-html

- 预期：`string`

- 详细：

更新元素的 `innerHTML` 。注意：内容按普通 `HTML` 插入 - 不会作为 Vue 模板进行编译。如果试图使用 `v-html` 组合模板，可以重新考虑是否通过使用组件来替代。

:::danger 警告

- 在网站上动态渲染任意 `HTML` 是非常危险的，因为容易导致 `XSS` 攻击。只在可信内容上使用 `v-html`，永不用在用户提交的内容上。

- 在单文件组件里，`scoped` 的样式不会应用在 `v-html` 内部，因为那部分 `HTML` 没有被 `Vue` 的模板编译器处理。如果你希望针对 `v-html` 的内容设置带作用域的 `CSS`，你可以替换为 `CSS Modules` 或用一个额外的全局 `<style>` 元素手动设置类似 `BEM` 的作用域策略。
:::

- 语法：

```js
v-html = "name"
```

`name` 为属性值也是变量，可以自由命名 `name` ，要在 `data` 中声明，更新元素的 `innerHTML`，作用类似`{{}}`

- 作用：
解析`DOM`元素（标签）和文本

:::tip v-html与v-text的区别
类似`innerHTML` & `innerTEXT`

`v-html`可以解析标签元素，`v-text`不能解析元素，会把元素当作文本。
:::

## 3、v-show

- 预期：`any`

- 语法：

```js
v-show="ture/false/表达式" //布尔值
```

- 用法：
根据表达式的真假值控制元素的显示和隐藏,切换元素的 `display CSS property`。

当 `v-show` 的值为`false`会给元素添加一个 `display：none` 的属性（控制的`CSS`样式显示和隐藏）

当条件变化时该指令触发过渡效果。

## 4、v-if

- 预期：`any`

- 语法：

```js
v-if="ture/false/表达式" //布尔值
```

- 用法：

根据表达式的值的 `truthiness` 来有条件地渲染元素。在切换时元素及它的数据绑定 / 组件被销毁并重建。如果元素是 `<template>` ，将提出它的内容作为条件块。

- 作用：根据表达式的真假值来控制是否显示
v-if的值为`false`时，`DOM`元素不存在（控制`DOM`元素的创建和移除）

:::tip v-show与v-if的区别

v-show控制的是`CSS`的`display`属性，`v-if`控制的是元素的添加与删除（`DOM`）

- 频繁切换使用谁？
`v-if`频繁操作`DOM`，太消耗性能所以多使用`v-show`就删除一次用`v-if`
:::

## 5、v-else

- 不需要表达式
- 限制：前一兄弟元素必须有 `v-if` 或 `v-else-if`。
- 语法：

```js
v-else 没有值
```

- 用法：
为 `v-if` 或者 `v-else-if`添加`else`块，`v-else`必须跟在`v-if`|`v-else-if`后面使用，不能单独使用
:::warning 注意
`v-else` 没有值和表达式，是最后一种判断情况，
:::
- 示例

```html
<div v-if="Math.random() > 0.5">
  Now you see me
</div>
<div v-else>
  Now you don't
</div>
```

## 6、v-else-if

- 类型：`any`

- 限制：前一兄弟元素必须有 `v-if` 或 `v-else-if`

不能单独使用，必须和`v-if`|`v-else-if`后面

- 用法：

表示 `v-if` 的`else if` 块。可以链式调用

- 示例

```html
<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>
```

## 7、v-for

- 预期：`Array | Object | number | string | Iterable (2.6 新增)`
- 用法
基于源数据多次渲染元素或模板块。此指令之值，必须使用特定语法 `alias in expression`，为当前遍历的元素提供别名：

```html
<div v-for="item in items">
  {{ item.text }}
</div>
```

- 语法：
变量 `in` 对象       写法：（变量1,变量2）in 对象

语法1：(数组)

```js
v-for="（item,index) in arr"
```

 `item` 数组每一项 ，`index` 索引下标
语法2：(对象)

```js
v-for="（val,key,index) in obj"
```

 `val` 对象的值，`key`对象的键 ，`index` 索引下标

- 作用：列表渲染指令，主要用来遍历数组或者对象并渲染(数组两个值，对象三个值)

:::warning 注意

- 需要几个谁，就往谁身上写`v-for`
- 遍历出来的元素个数由对象的长度决定。
- 当有一个变量时，变量是每一项，

当有两个变量时，第一个变量还是每一项，第二个变量是索引。

当和 `v-if` 一起使用时，`v-for` 的优先级比 `v-if` 更高，详见[官方列表渲染教程](https://cn.vuejs.org/v2/guide/list.html#v-for-with-v-if)
:::

## 8、v-on

- 简写：`@`
- 预期：`Function | Inline Statement | Object`
- 参数：`event`
- 语法：

```js
v-on：click="函数名"
```

`click`是事件名称（不加on）
`v-on`:事件类型 = "函数名" ,事件类型不加on，

- 作用：用来绑定事件
  如： 绑定点击事件

```js
v-on：click="show"
```

- 传参数

 - 语法：

 ```js
 v-on：click="函数名(param1，param2)"；
 //param1，param2是参数
 ```

 -简写成：

 ```js
 @click="show()"
 ```

- 修饰符
  - `.stop`    - 调用 `event.stopPropagation()`。
  - `.prevent` - 调用 `event.preventDefault()`。
  - `.capture` - 添加事件侦听器时使用 capture 模式。
  - `.self`    - 只当事件是从侦听器绑定的元素本身触发时才触发回调。
  - `.{keyCode | keyAlias}` - 只当事件是从特定键触发时才触发回调。
  - `.native`  - 监听组件根元素的原生事件。
  - `.once`    - 只触发一次回调。
  - `.left`    - (2.2.0) 只当点击鼠标左键时触发。
  - `.right`   - (2.2.0) 只当点击鼠标右键时触发。
  - `.middle`  - (2.2.0) 只当点击鼠标中键时触发。
  - `.passive` - (2.3.0) 以 `{ passive: true }` 模式添加侦听器
- 语法：

 ```js
 v-on：click.stop="函数名"
 ```

 写在事件名称后面，用.表示

 修饰符分类

 - 事件修饰符:

 `.stop`(取消冒泡 /阻止冒泡)

 `.prevent`(取消默认事件 /阻止默认事件)

 `.capture   .self   .once   .passive   ...`

 - 按键/键盘修饰符：

 键名：`enter esc ctrl shift`

 键码(keycode)：`13 65`

 `.13 .65 .shift ...`  

- 用法：

绑定事件监听器。事件类型由参数指定。表达式可以是一个方法的名字或一个内联语句，如果没有修饰符也可以省略。

用在普通元素上时，只能监听原生 `DOM` 事件。用在自定义元素组件上时，也可以监听子组件触发的自定义事件。

在监听原生 DOM 事件时，方法以事件为唯一的参数。如果使用内联语句，语句可以访问一个 `$event` property：`v-on:click="handle('ok', $event)"`。

从 `2.4.0` 开始，`v-on` 同样支持不带参数绑定一个事件/监听器键值对的对象。注意当使用对象语法时，是不支持任何修饰器的。

- 示例：

```html
<!-- 方法处理器 -->
<button v-on:click="doThis"></button>

<!-- 动态事件 (2.6.0+) -->
<button v-on:[event]="doThis"></button>

<!-- 内联语句 -->
<button v-on:click="doThat('hello', $event)"></button>

<!-- 缩写 -->
<button @click="doThis"></button>

<!-- 动态事件缩写 (2.6.0+) -->
<button @[event]="doThis"></button>

<!-- 停止冒泡 -->
<button @click.stop="doThis"></button>

<!-- 阻止默认行为 -->
<button @click.prevent="doThis"></button>

<!-- 阻止默认行为，没有表达式 -->
<form @submit.prevent></form>

<!--  串联修饰符 -->
<button @click.stop.prevent="doThis"></button>

<!-- 键修饰符，键别名 -->
<input @keyup.enter="onEnter">

<!-- 键修饰符，键代码 -->
<input @keyup.13="onEnter">

<!-- 点击回调只会触发一次 -->
<button v-on:click.once="doThis"></button>

<!-- 对象语法 (2.4.0+) -->
<button v-on="{ mousedown: doThis, mouseup: doThat }"></button>
```

在子组件上监听自定义事件 (当子组件触发“my-event”时将调用事件处理器)：

```html
<my-component @my-event="handleThis"></my-component>

<!-- 内联语句 -->
<my-component @my-event="handleThis(123, $event)"></my-component>

<!-- 组件中的原生事件 -->
<my-component @click.native="onClick"></my-component>
```

## 9、v-bind

- 简写: `:`

`:属性名=值`

- 预期：`any (with argument) | Object (without argument)`
- 参数：`attrOrProp (optional)`
- 修饰符：
  - `.prop` - 作为一个 `DOM property` 绑定而不是作为 `attribute` 绑定。(差别在哪里？)
  - `.camel` - (2.1.0+) 将 `kebab-case attribute` 名转换为 `camelCase`。(从 2.1.0 开始支持)
  - `.sync` (2.3.0+) 语法糖，会扩展成一个更新父组件绑定值的 `v-on` 侦听器。
- 语法：

```js
v-bind:属性名=值
```

- 用法：

动态地绑定一个或多个 `attribute`，或一个组件 prop 到表达式。

在绑定 `class` 或 `style attribute` 时，支持其它类型的值，如数组或对象。可以通过下面的教程链接查看详情。

在绑定 prop 时，prop 必须在子组件中声明。可以用修饰符指定不同的绑定类型。

没有参数时，可以绑定到一个包含键值对的对象。注意此时 `class` 和 `style` 绑定不支持数组和对象。

- 作用：给元素或者组件动态绑定一个或者多个属性

 - 关于this:
 this是当前vue实例，在组件中this指向当前组件

 - 动态绑定一个或多个属性

 {}适合绑定style或者class

 ```js
  v-bind:style
  v-bind:style=""
     v-bind:class=""
 ```

 - 简写:
 `:class, :style, :src,...` :属性名

 `v-bind:class | :class`

 - 语法：

 ```js
  v-bind：class="表达式或值"
 ```

 - 绑定类型

 ```html
     <div :class="isClass"> //字符串
     <div :class="{ red: isRed }"></div>
 <!--
 绑定对象
 red为key key是类名 isRed是布尔值 这个布尔值决定是否绑定key
 -->
     <div :class="[classA, classB]"></div>
     <div :class="[classA, { classB: isB, classC: isC }]">

 ```js
 ` v-bind:style`
 - 绑定样式

 值或者表达式的计算结果为boolean值，

 true 绑定了一个类名

 false 不绑定该类名

 已存在的类名和动态绑定的类名可以累加互不影响。

- 示例：

```html
<!-- 绑定一个 attribute -->
<img v-bind:src="imageSrc">

<!-- 动态 attribute 名 (2.6.0+) -->
<button v-bind:[key]="value"></button>

<!-- 缩写 -->
<img :src="imageSrc">

<!-- 动态 attribute 名缩写 (2.6.0+) -->
<button :[key]="value"></button>

<!-- 内联字符串拼接 -->
<img :src="'/path/to/images/' + fileName">

<!-- class 绑定 -->
<div :class="{ red: isRed }"></div>
<div :class="[classA, classB]"></div>
<div :class="[classA, { classB: isB, classC: isC }]">

<!-- style 绑定 -->
<div :style="{ fontSize: size + 'px' }"></div>
<div :style="[styleObjectA, styleObjectB]"></div>

<!-- 绑定一个全是 attribute 的对象 -->
<div v-bind="{ id: someProp, 'other-attr': otherProp }"></div>

<!-- 通过 prop 修饰符绑定 DOM attribute -->
<div v-bind:text-content.prop="text"></div>

<!-- prop 绑定。“prop”必须在 my-component 中声明。-->
<my-component :prop="someThing"></my-component>

<!-- 通过 $props 将父组件的 props 一起传给子组件 -->
<child-component v-bind="$props"></child-component>

<!-- XLink -->
<svg><a :xlink:special="foo"></a></svg>

```

`.camel` 修饰符允许在使用 DOM 模板时将 `v-bind property` 名称驼峰化，例如 SVG 的 `viewBox property`：

```html
<svg :view-box.camel="viewBox"></svg>
```

在使用字符串模板或通过 vue-loader/vueify 编译时，无需使用 .camel。

## 10、v-model

- 预期：随表单控件类型不同而不同。
- 限制：
  - `<input>`
  - `<select>`
  - `<textarea>`
  - `components`
- 修饰符：
  - `.lazy`   - 取代 `input` 监听 `change` 事件
  - `.number` - 输入字符串转为有效的数字
  - `.trim`   - 输入首尾空格过滤
- 语法：

```js
v-model："name"
//name 是数据的键 | ？
```

- 用法：
在表单控件或者组件上创建双向绑定。细节请看下面的教程链接。

- 作用：主要是给表单元素绑定的指令，不能绑定普通元素,
表单元素会忽略value属性，把vue实例上的数据作为初始数据

给表单元素添加的指令，用来做双向数据绑定的
表单： text password textarea radio checkbox select
会忽略表单元素的value属性，把data中的数据作为初始来源数据

## 11、v-slot

- 缩写：`#`
- 预期：可放置在函数参数位置的 JavaScript 表达式 (在支持的环境下可使用解构)。可选，即只需要在为插槽传入 prop 的时候使用。
- 参数：插槽名 (可选，默认值是 default)
- 限用于
  - `<template>`
  - 组件 (对于一个单独的带 `prop` 的默认插槽)
- 用法：
提供具名插槽或需要接收 prop 的插槽。
- 示例：

```html
<!-- 具名插槽 -->
<base-layout>
  <template v-slot:header>
    Header content
  </template>

  Default slot content

  <template v-slot:footer>
    Footer content
  </template>
</base-layout>

<!-- 接收 prop 的具名插槽 -->
<infinite-scroll>
  <template v-slot:item="slotProps">
    <div class="item">
      {{ slotProps.item.text }}
    </div>
  </template>
</infinite-scroll>

<!-- 接收 prop 的默认插槽，使用了解构 -->
<mouse-position v-slot="{ x, y }">
  Mouse position: {{ x }}, {{ y }}
</mouse-position>
```

更多细节请查阅[组件 - 插槽](https://cn.vuejs.org/v2/guide/components-slots.html)

## 12、v-pre

- 不需要表达式

- 用法：

跳过这个元素和它的子元素的编译过程。可以用来显示原始 Mustache 标签。跳过大量没有指令的节点会加快编译。

- 示例：

```html
<span v-pre>{{ this will not be compiled }}</span>
```

## 13、v-cloak

- 不需要表达式

- 用法：

这个指令保持在元素上直到关联实例结束编译。和 CSS 规则如 [v-cloak] { display: none } 一起用时，这个指令可以隐藏未编译的 Mustache 标签直到实例准备完毕。

- 示例：

```css
[v-cloak] {
  display: none;
}
```

```html
<div v-cloak>
  {{ message }}
</div>
```

不会显示，直到编译结束。

## 14、v-once

- 不需要表达式

- 详细：

只渲染元素和组件一次。随后的重新渲染，元素/组件及其所有的子节点将被视为静态内容并跳过。这可以用于优化更新性能。

```html
<!-- 单个元素 -->
<span v-once>This will never change: {{msg}}</span>
<!-- 有子元素 -->
<div v-once>
  <h1>comment</h1>
  <p>{{msg}}</p>
</div>
<!-- 组件 -->
<my-component v-once :comment="msg"></my-component>
<!-- `v-for` 指令-->
<ul>
  <li v-for="i in list" v-once>{{i}}</li>
</ul>
```
