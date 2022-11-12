---
title: Vue 基础（总结复习）
date: 2019-12-08
sidebar: 'auto'
tags:
 - vue
publish: true
# 打赏
showSponsor: true
---
1. `vue`是什么

- 单页面应用框架，数据驱动视图，特性,数据的双向绑定，

2. `vue` 核心的底层封装：数据双向绑定

- `2.x`用`object.defineProperty`封装，`3.x`用`es6`里的`proxy`封装

3. `vue`的数据流是什么（`reach`---单项数据流）

- 单向数据流

4. vue常用指令

- `v-model` ：数据双向绑定
- `v-once`：只绑定一次
- `v-if,v-else-if,v-else` : 控制元素的加载与销毁
- `v-show`：控制元素的显示和隐藏，控制display：none
- `v-html` ：解析`DOM`元素标签
- `v-text` ：解析文本，
- `v-for` ：使用`v-for`必须加`key`，
- `v-bind`：绑定属性，传入变量，简写`:`
- `v-on` ：绑定事件，简写 `@`
- `v-slot` ：插槽 ，配合`template`使用

5. v-for循环一个对象/数组

- 对象`（value,key,index）in obj`，`in`的前面是三个变量，分别是属性值，属性名，下标
- 数组`（value,index) in arr` ，`in`的前面是两个变量，分别是值和下标

6. `v-for` 里除了`in`还有哪种写法

- of

7. 事件修饰符
`@click.stop`:【阻止冒泡】，
`@click.prevent`:【阻止默认事件】
`@click.once`:【只执行一次】，
`@click.left`:【点击鼠标左键时触发】
`@click.right`:【点击鼠标右键时触发】

8. 按键修饰符
`@keyUp.13`===`@keyUp.enter`【回车键弹起】，

9. 动态加载组件

- 使用`vue`内置组件`components`，用`is`属性来动态加载组件
实例代码：

```html
<component :is='ishome'  />
&
<home/>
```

```js
import home from './home'
components:{
    home
}
```

10. 组件缓存

使用 `<keep-alive></keep-alive>`,
在`keep-alive`上使用 `include`，来缓存匹配到的组件
在`keep-alive`上使用 `exclude`，来不缓存匹配到的组件

11. 生命周期
`beforeCreate`
`Created`
`beforeMount`
`mounted`
`beforeupdate`
`updated`
`beforeDestroy`
`destroyed`
发起请求在mounted里
清除定时器 ？？

12. 懒加载

```js
const Home = ()=>import('./home.vue')
```

13. 组件通信

- 父传子 用`props`【属性】传递
- 子传父 用自定义事件，在父组件给子组件绑定一个自定义事件`@【v-on】`，子组件用`@emit`去调用自定义事件，并把参数传给父组件
- `$bus` 是一个第三方插件，中央事件广播，不受层级的限制

- **第一种方法  props父组件向子组件传递**
    **主要传值，可以传方法，但不常用**
    父组件使用`v-bind` 动态绑定数据 :自定义属性名="值"
    子组件使用`props` 接收数据 `props`：["自定义属性名"]
            或者 props：{
                "自定义属性名"：{
                    type：Array，
                    default：默认值，
                    required：是否必填
                }
            }

- **第二种方法  @emit子组件向父组件传递**
    **可以传方法或值**
    子组件调用@emit()方法，这个方法接收两个参数
    $emit("自定义事件名称"（必写）,传递的值（可选）)
    父组件使用v-on 简写 @自定义事件名=""

- **第三种方法  $attrs 可以批量向下传递数据**
    **attributes属性的缩写，只传属性**
    attributes属性，只传属性
    $attrs 是组件（vue实例上）固有的用来描述该组件身上的所有属性集合的对象
    如果继续向下传递，在中间组件中 v-bind = "$attrs"

- **第四种方法  $listeners 批量向下传递方法**
    **只传方法**
    $listeners 是组件上的属性，用来保存组件身上的方法
    如果继续向下传递，使用v-on="$listeners"

- **第五种方法  Provide 和 Inject**
    **只传属性 ？**
    依赖注入，强制注入，可以扩展更深层的数据传递，在任何组件中都可以使用数据
    优点：可以跨组件获取数据（只能从上到下）,任何后代组件都能使用
    缺点：只能从上到下
    使用Provide 和 Inje ct实例选项，注入过来的数据，成为接收组件的属性，

- **第六种方法  ref的使用**
    **属性和方法**
    ref：是string类型，主要用来给dom元素或子组件注册引用信息，引用信息会注册在父组件的$refs对象上
    $refs :类型是object对象，持有已注册过的ref的所有子组件，（保存了所有注册过的子组件）
    ①如果在普通的DOM元素上使用，那么引用的注册信息指向DOM元素，
    ②如果在组件上使用，引用指向的是组件实例对象，那么可以获取到组件上的属性或者方法

- **第七种方法  EventBus**
    **？**
    原理：创建一个vue实例，调用实例上的方法，
    1、发送：$emit("自定义事件名称",要传的值),发送事件
    2、接收：$on("自定义事件名称",function（接收的值）{ 函数的参数是发送时的值}),接收/监听事件
    能实现各个组件之间的通信，（父子，兄弟，跨组件）
    在main.js中创建一个全新的vue实例，
    Vue.prototype.$bus = new Vue()

- **第八种方法  $parents  $children**
    **属性和方法**
    $parents:当前组件的直接父组件，
    $children:组件的直接子组件（如果有子组件），子组件会被展示成数组，没有子组件是空数组

- **第九种方法  vuex**

14. vue的递归组件

- 一个组件接收父组件传递过来的数据，进行自我调用，需要一个结束的判断，另外该组件还必须要有name属性

15. 作用域
在style标签上加scoped，使css只对当前组件生效

16. vue组件的实例组成部分

- `name`:组件名字
- `data`:数据
- `components`:局部组件
- `computed`:计算
- `watch`:监听
- `methods`:方法的集合
- `filter`:自定义过滤函数
- `directives`:自定义指令
- `minxins` :混入 将公共的一些实例上的配置做成一个单独的`mixins`文件，引进来之后，和我们实例上的配置做一个合并，说白了，就是给组件功能的扩展
- 自定义指令
- 生命周期

17. `computed` 【计算】`watch` 【监听】的区别
    1. `computed`计算属性有缓存，`watch`没有缓存，
    因为`computed` 有缓存，当`computed`监听的数据发生改变时，会对比缓存值，如果新值和旧值一样，则不会触发更新
    2. `watch`执行是只要被监听的数据发生了改变，就会执行
    3. `computed`监听一个数据还要返回一个数据，`watch`只是监听

18. `watch`的深度监听 加 `deep:true`
