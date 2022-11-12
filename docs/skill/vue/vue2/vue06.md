---
title: Vue 生命周期
date: 2020-12-12
sidebar: 'auto'
tags:
 - vue
---

## Vue 生命周期

- 生命周期

生命周期： `Vue`是一个构造函数，当执行执行这个函数时，相当于初始化`vue`实例;

在创建实例过程中，需要设置数据监听，编译模板，将实例挂载到`DOM`上，数据更新能够让`DOM`也更新，在这个初始化，又会不同阶段默认调用一些函数执行，这些函数就是生命周期的钩子函数；

- 生命周期钩子函数

生命周期钩子函数，让够让我们在初始化实例时，添加自己的代码；

生命周期的钩子函数中的`this`，会默认指向`vue`的实例;

生命周期代码展示

```html
<!DOCTYPE html>
<html>

<head>
    <title>Vue父子组件生命周期</title>
</head>

<body>
    <div id="app"></div>
</body>
<script src="https://cdn.bootcss.com/vue/2.4.2/vue.js"></script>
<script type="text/javascript">
    Vue.component("counter", {
        props: {
            count: {
                type: Number,
                default: 0
            },
        },
        beforeCreate: function() {
            console.log("Child", "BeforeCreate");
        },
        created: function() {
            console.log("Child", "Created");
        },
        beforeMount: function() {
            console.log("Child", "BeforeMount");
        },
        mounted: function() {
            console.log("Child", "Mounted");
        },
        beforeUpdate: function() {
            console.log("Child", "BeforeUpdate");
        },
        updated: function() {
            console.log("Child", "Updated");
        },
        beforeDestroy: function() {
            console.log("Child", "BeforeDestroy");
        },
        destroyed: function() {
            console.log("Child", "Destroyed");
        },
        template: `
            <div>
                <div>{{count}}</div>
            </div>
        `
    })
    var vm = new Vue({
        el: '#app',
        data: function(){
            return {
                count: 1
            }
        },
        beforeCreate: function() {
            console.log("Parent", "BeforeCreate");
        },
        created: function() {
            console.log("Parent", "Created");
        },
        beforeMount: function() {
            console.log("Parent", "BeforeMount");
        },
        mounted: function() {
            console.log("Parent", "Mounted");
        },
        beforeUpdate: function() {
            console.log("Parent", "BeforeUpdate");
        },
        updated: function() {
            console.log("Parent", "Updated");
        },
        beforeDestroy: function() {
            console.log("Parent", "BeforeDestroy");
        },
        destroyed: function() {
            console.log("Parent", "Destroyed");
        },
        template:  `
            <div>
                <counter :count="count"></counter>
                <button @click="count++">++</button>
            </div>
       `
    })
</script>

</html>
```

`Vue`生命周期钩子函数功能示例，其中`this.msg`初始化赋值`Vue Lifecycle`，在更新过程中赋值为`Vue Update`。

- 钩子函数
  - `beforeCreate` `created` [可以获取数据及方法]
  - `beforeMount` `mounted` [可以获取到真实的DOM]
  - `beforeUpdate` `updated` [数据更新执行]
  - `beforeDestroy` `destroyed` [销毁vue实例，不再具有双向数据绑定的特点]

- 主要的八个生命周期钩子

1. `beforeCreate`:设置数据监听之前执行，此时没有 `data` ，`methods`

`Vue`实例开始创建到`beforeCreate`钩子执行的过程中主要进行了一些初始化操作，例如组件的事件与生命周期钩子的初始化。在此生命周期钩子执行时组件并未挂载，`data`、`methods`等也并未绑定，此时主要可以用来加载一些与`Vue`数据无关的操作，例如展示一个`loading`等。

每个vue组件实例化过程中，会在 beforeCreate 钩子前调用 vuexInit 方法。

```js
console.log("beforeCreate");
console.log(this.$el); //undefined
console.log(this.$data); //undefined
console.log(this.msg); // undefined
console.log("--------------------");
```

2. `created`:设置数据监听之后执行，此时可以使用 `data` 和 `methods` 但没有 `el`

从`beforeCreate`到`created`的过程中主要完成了数据绑定的配置、计算属性与方法的挂载、`watch/event`事件回调等。在此生命周期钩子执行时组件未挂载到到`DOM`，属性`$el`目前仍然为`undefined`，但此时已经可以开始操作`data`与`methods`等，只是页面还未渲染，在此阶段通常用来发起一个`XHR`请求。

```js
console.log("created");
console.log(this.$el); //undefined
console.log(this.$data); //{__ob__: Observer}
console.log(this.msg); // Vue Lifecycle
console.log("--------------------");
```

3. `beforeMount`: 编译模板之前执行， `template` 模版已经编译好，但还未挂载到页面，此时页面还是上一个状态

从`created`到`beforeMount`的过程中主要完成了页面模板的解析，在内存中将页面的数据与指令等进行解析，当页面解析完成，页面模板就存在于内存中。在此生命周期钩子执行时`$el`被创建，但是页面只是在内存中，并未作为`DOM`渲染。

```js
console.log("beforeMount");
console.log(this.$el); //<div id="app">...</div>
console.log(this.$data); // {__ob__: Observer}
console.log(this.msg); // Vue Lifecycle
console.log("--------------------");
```

4. `mounted`: 此时`Vue`实例初始化完成了，`DOM`挂载完毕，可以直接操作`dom`或者使用第三发`dom`库

从`beforeMount`到`mounted`的过程中执行的是将页面从内存中渲染到`DOM`的操作。在此生命周期钩子执行时页面已经渲染完成，组件正式完成创建阶段的最后一个钩子，即将进入运行中阶段。此外关于渲染的页面模板的优先级，是`render`函数 `>` `template`属性`>` 外部`HTML`。

```js
console.log("mounted");
console.log(this.$el); //<div id="app">...</div>
console.log(this.$data); //{__ob__: Observer}
console.log(this.msg); // Vue Lifecycle
console.log("--------------------");
```

5. `beforeUpdate`:数据变化时更新`DOM`之前执行，此时`data`已更新，但还未同步页面

当数据发生更新时`beforeUpdate`钩子便会被调用，此时`Vue`实例中数据已经是最新的，但是在页面中的数据还是旧的，在此时可以进一步地更改状态，这不会触发附加的重渲染过程。在上述例子中加入了`debugger`断点，可以观察到`Vue`实例中数据已经是最新的，但是在页面中的数据还是旧的。

```js
// this.msg = "Vue Update";
console.log("beforeUpdate");
console.log(this.$el); //<div id="app">...</div>
console.log(this.$data); //{__ob__: Observer}
console.log(this.msg); // Vue Update
console.log("--------------------");
```

6. `updated`: 数据变化时更新`DOM`之后执行，`data`和页面都已经更新完成

当数据发生更新并在`DOM`渲染完成后`updated`钩子便会被调用，在此时组件的`DOM`已经更新，可以执行依赖于`DOM`的操作

```js
// this.msg = "Vue Update";
console.log("updated");
console.log(this.$el); //<div id="app">...</div>
console.log(this.$data); //{__ob__: Observer}
console.log(this.msg); // Vue Update
console.log("--------------------");
```

7. `beforeDestroy`: 卸载实例之前执行，`Vue`实例进入销毁阶段，但所有的 `data` 和 `methods` ，指令， 过滤器等都处于可用状态

在`Vue`实例被销毁之前`beforeDestroy`钩子便会被调用，在此时实例仍然完全可用，定时器在这里清除

```js
// this.$destroy();
console.log("beforeDestroy");
console.log(this.$el); //<div id="app">...</div>
console.log(this.$data); //{__ob__: Observer}
console.log(this.msg); // Vue Update
console.log("--------------------");
```

8. `destroyed`:卸载实例之后执行，此时`data`仍可以修改，但视图无法更新

在Vue实例被销毁之后destroyed钩子便会被调用，在此时Vue实例绑定的所有东西都会解除绑定，所有的事件监听器会被移除，所有的子实例也会被销毁，组件无法使用，data和methods也都不可使用，即使更改了实例的属性，页面的DOM也不会重新渲染。

```js
// this.$destroy();
console.log("destroyed");
console.log(this.$el); //<div id="app">...</div>
console.log(this.$data); //{__ob__: Observer}
console.log(this.msg); // Vue Update
console.log("--------------------");
```

页面第一次加载时会执行 `beforeCreate`，`created`， `beforeMount`，`mounted`
`created`阶段一般用来处理`http`请求获取数据或者对`data`做一定的处理，
`mounted`阶段操作`dom`，比如使用`jquery`，或其他第三方`dom`库

![生命周期](https://s3.ax1x.com/2020/12/17/r38pe1.png)
![生命周期2](https://s3.ax1x.com/2020/12/17/r389dx.jpg)

9. `activated`

被 `keep-alive` 缓存的组件激活时调用。

该钩子在服务器端渲染期间不被调用。

作用类似 `mounted` 钩子

## 父子组件间的生命周期

10. `deactivated`

被 `keep-alive` 缓存的组件停用时调用。

该钩子在服务器端渲染期间不被调用。

11. `errorCaptured`

当捕获一个来自子孙组件的错误时被调用

### 创建过程

创建过程主要涉及`beforeCreate`、`created`、`beforeMount`、`mounted`四个钩子函数。

```js
Parent beforeCreate -> Parent Created -> Parent BeforeMount -> Child BeforeCreate -> Child Created -> Child BeforeMount -> Child Mounted -> Parent Mounted
```

### 更新过程

更新过程主要涉及`beforeUpdate`、`updated`两个钩子函数，当父子组件有数据传递时才会有生命周期的比较。

```js
Parent BeforeUpdate -> Child BeforeUpdate -> Child Updated -> Parent Updated
```

### 销毁过程

销毁过程主要涉及`beforeDestroy`、`destroyed`两个钩子函数，本例直接调用`vm.$destroy()`销毁整个实例以达到销毁父子组件的目的。

```js
Parent BeforeDestroy -> Child BeforeDestroy -> Child Destroyed -> Parent Destroyed
```
