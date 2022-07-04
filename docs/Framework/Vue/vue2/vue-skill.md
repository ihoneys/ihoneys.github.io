---
title: Vue2.x 开发技巧
date: 2020-12-06

categories:
  - 前端框架
tags:
  - vue
---

### 1.函数组件

```vue
<template functional>
  <div class="book">{{ props.book.name }} {{ props.book.price }}</div>
</template>

<script>
Vue.component("book", {
  functional: true, // 开启函数式组件
  props: {
    book: {
      type: () => ({}),
      required: true,
    },
  },
  render: function (createElement, context) {
    return createElement(
      "div",
      {
        attrs: {
          class: "book",
        },
      },
      [context.props.book]
    );
  },
});
</script>
```

### 2.深层选择器

```html
<style scoped>
  >>> .scoped-third-party-class {
    color: gray;
  }
</style>

<style scoped>
  /deep/ .scoped-third-party-class {
    color: gray;
  }
</style>

<style scoped>
  ::v-deep .scoped-third-party-class {
    color: gray;
  }
</style>
```

### 3. watcher

当被监控的 prop 发生突变时，watch handler 就会触发。但有时，它是在组件被创建后才出现的。

可以向观察者添加 immediate 属性

```vue
watch: { value: { handler: 'printValue', immediate: true } }, methods : {
printValue () { console.log(this.value) } }
```

#### 深度监听

使用 deep：true 属性

```vue
data () { return { value: { one: { two: { three: 3 } } } } }, watch: { value: {
handler: 'printValue', deep: true } }, methods : { printValue () {
console.log(this.value) } }
```

#### 多个 handler

```javascript
watch: {
  value: [
    'printValue',
    function (val, oldVal) {
      console.log(val)
    },
    {
      handler: 'printValue',
      deep: true
    }
  ]
},
methods : {
  printValue () {
    console.log(this.value)
  }
}
```

#### watch 监听多个值

`watcher` 不能监听多个变量，但可以将目标组合在一起作为一个新的 `computed`，并监视这个新的 “变量”。

```js
  computed: { // 在computed定义
    watchObj() {
      const { hospitals, noData } = this
      return { hospitals, noData }
    }
  },
```

再监听`watchObj`计算方法

```js
watchObj: {
    handler(newVal, oldVal) {
        console.log(newVal, oldVal, '99999999999999999999999')
    },
},
```

#### 卸载 watch 观察

```js
data() {
    return {
        count: 1
    }
},

let unwatchFn = this.$watch('count', function(){
    console.log('count 新值：'+newVal)
})
this.count = 2 // log: count 新值：2
unwatchFn()
this.count = 3 // 什么都没有发生...
```

### 4.事件参数

```html
<template>
  <input type="text" @input="handleInput('hello', $event)" />
</template>
methods: { handleInput(value,e){ console.log(e.target.value) //
获取监听到输入的值 }, }
```

#### 自定义事件

```html
<!-- Child -->
<template>
  <input type="text" @input="$emit('custom-event', 'hello')" />
</template>

<!-- Parent -->
<template>
  <Child @custom-event="handleCustomevent" />
</template>

<script>
  export default {
    methods: {
      handleCustomevent(value) {
        console.log(value); // hello
      },
    },
  };
</script>
```

### 5.路由器参数解耦

通常处理组件中路由器参数的方式使用 query

```js
this.$router.push({
  name: "MyInquiry",
  query: {
    fromCenter: true,
  },
});

// MyInquiry组件中
this.$route.query.fromCenter; // true
```

在组件内部使用`$route`会对某个 URL 产生强耦合，限制了组件的灵活性。

正确 解决方案是向路由器添加 props，下面来修改的写法：

首先在路由定义`path`上添加参数

```js
{
    path: 'MyInquiry/:fromCenter', // 添加参数名称
    // 如果多个参数则:依次在后面添加  /:（name）
    name: 'MyInquiry',
    component: () => import("@/views/MyInquiry"),
    props: true, // 并且props值设置为true
    meta: { title: "我的挂号" }
},
```

push 传递参数使用 params 属性

```js
this.$router.push({
  name: "MyInquiry",
  params: {
    fromCenter: true,
  },
});
```

`MyInquiry`组件中

```js
props: ['fromCenter'],

mounted(){
    console.log(this.fromCenter)  // true
}
```

此外还可以传入函数返回自定义`props`。

```javascript
const router = new VueRouter({
  routes: [
    {
      path: "/:id",
      component: Component,
      props: (router) => ({ id: route.query.id }),
    },
  ],
});
```

### 6.自定义组件的双向绑定

> 允许自定义组件在使用 `v-model` 时自定义使 props 和 event。默认情况下，组件上的 v-model 使用 value 作为属性，Input 作为事件，但一些输入类型，如复选框和单选按钮可能希望使用 value 属性来实现不同的目的。在这种情况下，使用 model 选项可以避免冲突。

`v-model` 是众所周知的双向绑定。`input` 是默认的更新事件。可以通过 `$emit` 更新该值。唯一的限制是该组件需要`<input>` 标记才能与 `value` 属性绑定。

```html
<my-checkbox v-model="val"></my-checkbox>

<template>
  <input type="checkbox" :value="value" @input="handleInputChange(value)" />
</template>

<script>
  export default {
    props: {
      value: {
        type: Boolean,
        default: false,
      },
    },
    methods: {
      handleInputChange(val) {
        console.log(val);
      },
    },
  };
</script>
```

双向绑定还有另一种解决方案，即 `sync` 修饰符。与 `v-model` 不同的是，它不需要你的组件有一个 `<input>` 标签并将值绑定到它上面。它仅触发 `update:<your_prop>` 通过事件系统对属性进行突变。

```html
<custom-component :value.sync="value" />
```

### 7.组件声明周期 Hook

通常，你可以像这样监听子组件的生命周期（例如 `mounted`）

```html
<!-- Child -->
<script>
  export default {
    mounted() {
      this.$emit("onMounted");
    },
  };
</script>

<!-- Parent -->
<template>
  <Child @onMounted="handleOnMounted" />
</template>
```

还有另一种简单的解决方案，你可以改用 `@hook:mount` 在 Vue 内部系统中使用。

```html
<!-- Parent -->
<template>
  <Child @hook:mounted="handleOnMounted" />
</template>
```

### 8. 事件监听 API

比如，页面挂载时增加一个定时器，但销毁时需要清除定时器，可以在 beforeDestroy 中清除定义的定时器。

```javascript
export default {
  data() {
    return {
      timer: null,
    };
  },
  mounted() {
    this.timer = setInterval(() => {
      console.log(Date.now());
    }, 1000);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  },
};
```

还有一种可以使用 `$once`来放弃不必要的东西。

```javascript
export default {
  mounted() {
    let timer = null;
    timer = setInterval(() => {
      console.log(Date.now());
    }, 1000);
    this.$once("hook:beforeDestroy", () => {
      clearInterval(timer);
    });
  },
};
```

### 9.编程方式挂载组件。

```javascript
import Vue from "vue";
import Popup from "./popup";

const PopupCtor = Vue.extend(Popup);

const PopupIns = new PopupCtr();

PopupIns.$mount();

document.body.append(PopupIns.$el);

Vue.prototype.$popup = Vue.$popup = function () {
  PopupIns.open();
};
```

### 10.provid/inject

`provid/inject`这两个需要一起使用，允许一个祖先组件向其所有子孙后代注入一个依赖，不论组件层次有多深，并在其上下游关系成立的时间里始终生效。

简单来说，一个组件将自己的属性通过 `provide` 暴露出去，其下面的子孙组件 `inject` 即可接收到暴露的属性。

APP.vue

```js
export default {
  data() {
    return {
      title: "title",
    };
  },
  provide() {
    return {
      title: this.title,
    };
  },
};
```

Child.vue:

```js
export default {
  inject: ["title"],
  created() {
    console.log(this.title); // title
  },
};
```

可以通过设置默认值使其变成可选项:

```js
export default {
  inject: {
    title: {
      default: () => ({}),
    },
  },
  created() {
    console.log(this.title);
  },
};
```

如果你想为 `inject` 的属性变更名称，可以使用 `from` 来表示其来源：

```js
export default {
  inject: {
    myApp: {
      // from的值和provide的属性名保持一致
      from: "app",
      default: () => ({}),
    },
  },
  created() {
    console.log(this.myApp);
  },
};
```

需要注意的是 `provide` 和 `inject` 主要在开发高阶插件/组件库时使用。并不推荐用于普通应用程序代码中。但是某些时候，或许它能帮助到。

### 11.小型状态管理器

在大型项目中数据状态比较复杂，一般都会使用 `Vuex`，但在一些小项目或状态简单的项目中，为了管理几个状态而引入一个库，显得有些笨重。

在 2.6.0+ 版本中，新增的 `Vue.observable` 可以帮助解决这个尴尬的问题，它能让一个对象变成响应式数据

```js
// store.js
import Vue from "vue";

export const state = Vue.observable({
  count: 0,
});
```

使用：

```html
<div @click="setCount">{{ count }}</div>
```

```js
import { state } from "../store.js";

export default {
  computed: {
    count() {
      return state.count;
    },
  },
  methods: {
    setCount() {
      state.count++;
    },
  },
};
```

当然你也可以自定义 `mutation` 来复用更改状态的方法：

```js
import Vue from "vue";

export const state = Vue.observable({
  count: 0,
});

export const mutations = {
  SET_COUNT(payload) {
    if (payload > 0) {
      state.count = payload;
    }
  },
};
```

使用：

```js
import { state, mutations } from "../store.js";

export default {
  computed: {
    count() {
      return state.count;
    },
  },
  methods: {
    setCount() {
      mutations.SET_COUNT(100);
    },
  },
};
```

#### 也可以使用 Vue.observable 进行组件通信

### 12.巧用 template

`v-if`在开发中是用得最多的指令，那么你一定遇到过这样的场景，多个元素需要切换，而且切换条件都一样，一般都会使用一个元素包裹起来，在这个元素上做切换。

```html
<div v-if="status==='ok'">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</div>
```

如果像上面的 div 只是为了切换条件而存在，还导致元素层级嵌套多一层，那么它没有“存在的意义”。

都知道在声明页面模板时，所有元素需要放在 `<template>` 元素内。除此之外，它还能在模板内使用，`<template>` 元素作为不可见的包裹元素，只是在运行时做处理，最终的渲染结果并不包含它。

```vue
<template>
  <div>
    <template v-if="status === 'ok'">
      <h1>Title</h1>
      <p>Paragraph 1</p>
      <p>Paragraph 2</p>
    </template>
  </div>
</template>
```

同样的，也可以在 `<template>` 上使用 `v-for` 指令，这种方式还能解决 `v-for` 和 `v-if` 同时使用报出的警告问题。

```vue
<template v-for="item in 10">
  <div v-if="item % 2 == 0" :key="item">{{ item }}</div>
</template>
```

### 13 过滤器复用

试想一个场景，不仅模板内用到这个函数，在 `method` 里也需要同样功能的函数。但过滤器无法通过 `this` 直接引用，难道要在 `methods` 再定义一个同样的函数吗？

要知道，选项配置都会被存储在实例的 `$options` 中，所以只需要获取 `this.$options.filters` 就可以拿到实例中的过滤器。

```js
export default {
  methods: {
    getDetail() {
      this.$api
        .getDetail({
          id: this.id,
        })
        .then((res) => {
          let capitalize = this.$options.filters.capitalize;
          this.title = capitalize(res.data.title);
        });
    },
  },
};
```

除了能获取到实例的过滤器外，还能获取到全局的过滤器，因为 `this.$options.filters` 会顺着 `__proto__` 向上查找，全局过滤器就存在原型中。

#### 多个过滤器全局注册

```js
import * as filters from "./filters";
Object.keys(filters).forEach((key) => {
  Vue.filter(key, filters[key]);
});
```

### 14.优先注册插件

插件通常用来为 `Vue` 添加全局功能。像常用的 `vue-router`、`vuex` 在使用时都是通过 `Vue.use` 来注册的。`Vue.use` 内部会自动寻找 `install` 方法进行调用，接受的第一个参数是 `Vue` 构造函数。

一般在使用组件库时，为了减小包体积，都是采用按需加载的方式。如果在入口文件内逐个引入组件会让 `main.js` 越来越庞大，基于模块化开发的思想，最好是单独封装到一个配置文件中。配合上 `Vue.use`，在入口文件使用能让人一目了然。

vant.config.js：

```js
import { Toast, Button } from "vant";

const components = {
  Toast,
  Button,
};

const componentsHandler = {
  install(Vue) {
    Object.keys(components).forEach((key) => Vue.use(components[key]));
  },
};

export default componentsHandler;
```

main.js

```js
import Vue from "vue";
import vantCompoents from "@/config/vant.config";

Vue.config.productionTip = false;

Vue.use(vantCompoents);

new Vue({
  render: (h) => h(App),
}).$mount("#app");
```

### 15 自动化引入模块

在开发中大型项目时，会将一个大功能拆分成一个个小功能，除了能便于模块的复用，也让模块条理清晰，后期项目更好维护。

像 api 文件一般按功能划分模块，在组合时可以使用 `require.context` 一次引入文件夹所有的模块文件，而不需要逐个模块文件去引入。每当新增模块文件时，就只需要关注逻辑的编写和模块暴露，`require.context` 会帮助自动引入。

需要注意 `require.context` 并不是天生的，而是由 `webpack` 提供。在构建时，`webpack` 在代码中解析它。

```js
let importAll = require.context("./modules", false, /\.js$/);

class Api extends Request {
  constructor() {
    super();
    //importAll.keys()为模块路径数组
    importAll.keys().map((path) => {
      //兼容处理：.default获取ES6规范暴露的内容; 后者获取commonJS规范暴露的内容
      let api = importAll(path).default || importAll(path);
      Object.keys(api).forEach((key) => (this[key] = api[key]));
    });
  }
}

export default new Api();
```

`require.context` 参数:

1. 读取文件的路径
2. 是否遍历文件的子目录
3. 匹配文件的正则

只要是需要批量引入的场景，都可以使用这种方法。包括一些公用的全局组件。

引入组件

通常引入组件的做法：

```js
import likeView from "@/components/detail/like-view.vue";
import hoverView from "@/components/detail/hover.vue";
import animationView from "@/components/detail/animation.vue";

components: {
  likeView, hoverView, animationView;
}
```

随着组件文件越来越来，为了避免大量重复代码，也可以使用`require.context()`,无论有多少组件都不需要手动再次添加了。

```js
const path = require("path");
const files = require.context("@/components/home", false, /\.vue$/);

const modules = {};
files.keys().forEach((key) => {
  const name = path.basename(key, ".vue");
  modules[name] = files(key).default || files(key);
});
components: modules;
```

### 16. 路由懒加载（动态 chunkName）

路由懒加载作为性能优化的一种手段，它能让路由组件延迟加载。通常还会为延迟加载的路由添加“魔法注释”(webpackChunkName)来自定义包名，在打包时，该路由组件会被单独打包出来。

```js
let router = new Router({
  routes: [
    {
      path: "/login",
      name: "login",
      component: import(/* webpackChunkName: "login" */ `@/views/login.vue`),
    },
    {
      path: "/index",
      name: "index",
      component: import(/* webpackChunkName: "index" */ `@/views/index.vue`),
    },
    {
      path: "/detail",
      name: "detail",
      component: import(/* webpackChunkName: "detail" */ `@/views/detail.vue`),
    },
  ],
});
```

上面写写法没有任务问题，但仔细一看他们的结构都相似，作为一名出色的开发者，可以使用`map`循环来解决这种重复性的工作。

```js
const routes = routeOptions.map((route) => {
  if (!route.component) {
    route = {
      ...route,
      component: () => import(`@/views/${route.name}.vue`),
    };
  }
  return route;
});

let router = new Router({
  routes,
});
```

好家伙，代码又少了~。

在书写更少代码的同时，也把“魔法注释”给牺牲掉了。总所周知，代码中没办法编写动态注释。这个问题很尴尬，难道就没有两全其美的办法了吗？

强大的 `webpack` 来救场了，从 webpack 2.6.0 开始，占位符 [index] 和 [request] 被支持为递增的数字或实际解析的文件名。可以这样使用“魔法注释”：

```js
const routes = routeOptions.map((route) => {
  if (!route.component) {
    route = {
      ...route,
      component: () =>
        import(/* webpackChunkName: "[request]" */ `@/views/${route.name}.vue`),
    };
  }
  return route;
});
```

### 17.组件传递 CSS 样式

```js
<template>
  <div class="box" :style="styleVar">
  </div>
</template>
<script>
export default {
  props: {
    height: {
      type: Number,
      default: 54,
    },
  },
  computed: {
    styleVar() {
      return {
        '--box-height': this.height + 'px'
      }
    }
  },
}
</script>
<style scoped>
.box {
  height: var(--box-height);
}
</style>
```

### 18.组件插槽

通常插槽用法：

```js
// 封装组件
<template>
  <div class="child">
    <h3>子组件：具名插槽</h3>
    <slot name="child"></slot>
  </div>
</template>
```

```html
<!--组件调用页面-->
<template>
  <div class="parent">
    <child>
      <template v-slot:child>
        <p>插入具名插槽</p>
      </template>
    </child>
  </div>
</template>
```

新写法

组件调用页面：

<!--组件调用页面-->

```vue
<template>
  <div class="parent">
    <child>
      <template #child>
        <p>插入具名插槽</p>
      </template>
    </child>
  </div>
</template>
```

### 19 动态指令参数

指令参数现在可以接受动态 JavaScript 表达式 动态参数值应该是字符串，但允许`null`作为一个明确指示应该删除绑定的特殊值，那将会很方便。任何其他非字符串值都可能出错，并会触发警告。（仅适用于`v-bind和v-on`）

```html
<div v-bind:[attr]="attributeName"></div>
```

//简写

```html
<div v-bind:[attr]="attributeName"></div>
//简写
<div :[attr]="attributeName"></div>
```

这里的 `attributeName` 会被作为一个 JavaScript 表达式进行动态求值，求得的值将会作为最终的参数来使用。例如，如果你的 Vue 实例有一个 data 属性 `attributeName`，其值为 `href`，那么这个绑定将等价于 `v-bind:href`

同样地，你可以使用动态参数为一个动态的事件名绑定处理函数：

```html
<button v-on:[eventName]="handler"></button>
//简写
<button @[eventName]="handler"></button>
```

```html
<my-component>
  <template v-slot:[slotName]> Dynamic slot name </template>
</my-component>

//简写
<foo>
  <template #[name]> Default slot </template>
</foo>
```

### 20.动态组件

通过 Vue 的 元素加一个特殊的 is attribute 可以实现动态组件的效果

如图，这是一个 v-for 渲染的列表(只是目前这个版块才刚开始做，目前只有一个)，圆圈内的就是一个组件，也就是要 v-for 动态组件

![img](https://user-gold-cdn.xitu.io/2020/7/23/173797600bfc43f0?imageslim)

实际使用

一开始就是基本的组件引入了

```js
import ColorIn from "@/components/Magic/ColorIn.vue";
import LineIn from "@/components/Magic/LineIn.vue";
import Header from "@/components/Magic/Header.vue";
import Footer from "@/components/Magic/Footer.vue";

export default {
  components: {
    ColorIn,
    LineIn,
    Header,
    Footer,
  },
};
```

接下来就是动态 v-for 动态组件的使用，`componentList:['ColorIn','LineIn','Header','Footer']`使用下面的代码即可将代码依次循环

```html
<component
  v-for="(item,index) in componentList"
  :key="index"
  :is="item"
></component>
```

### 21.Object.frezz 提升性能

当需要渲染一个非常大的数组对象，例如用户列表，文章列表等等。

通常的写法：

```js
export default {
  data: () => ({
    users: {},
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = users;
  },
};
```

vue 会将 data 对象中的所有的属性加入到 vue 的响应式系统中，当这些属性的值发生改变时，视图将会产生 响应，若对象的体积比较大，会消耗很多浏览器解析时间。

所以可以通过减少数据的响应式转换来提供前端的性能。

```js
export default {
  data: () => ({
    users: {},
  }),
  async created() {
    const users = await axios.get("/api/users");
    this.users = Object.freeze(users);
  },
};
```

### 22.computed 计算属性传递参数

```js
computed: {
    isQueuenum() {
        return function (status, num) {
            return status == 0 ? '未排队' : `排队号${num}`
        }
    }
},
```

```html
<div class="up-no">
  {{ isQueuenum(item.queueStatus, item.queuenum) }} // 参数
</div>
```

### 23. 重用相同路由的组件

有时候会遇到多个路由解析为同一个 Vue 组件。Vue 出于性能原因 ，默认情况下共享组件将不会重新渲染，如果尝试使用相同组件的路由之前进行切换，则不会发生任何变化。

```js
const routrs = [
  {
    path: "a",
    component: MyComponent,
  },
  {
    path: "b",
    component: MyComponent,
  },
];
```

如果仍然希望重新渲染这些组件，则可以通过 `router-view`组件中提供`:key`属性来实现。

```html
<template>
  <router-view :key="$route.path"></router-view>
</template>
```

### 24.属性事件传递

写过高阶组件的童鞋可能都会碰到过将加工过的属性向下传递的情况，如果碰到属性较多时，需要一个个去传递，非常不友好并且费时，有没有一次性传递的呢（比如 react 里面的`{...this.props}`）？答案就是`v-bind`和`v-on`。

举个例子，假如有一个基础组件`BaseList`，只有基础的列表展示功能，现在想在这基础上增加排序功能，这个时候就可以创建一个高阶组件`SortList`。

```js
<!-- SortList  -->
    <template>
    <BaseList v-bind="$props" v-on="$listeners"> <!-- ... --> </BaseList>
</template>

<script>
        import BaseList from "./BaseList";
// 包含了基础的属性定义
import BaseListMixin from "./BaseListMixin";
// 封装了排序的逻辑
import sort from "./sort.js";

export default {
    props: BaseListMixin.props,
    components: {
        BaseList
    }
};
</script>
```

### 25.优雅更新 props 属性值

正常通过子组件定义 prop 属性，子组件外部触发方法，父组件操作 prop 值传递给子组件

child.vue：

```vue
<script>
    export defalut {
    props: {
        title: String
    },
    methods: {
        changeTitle(){
            this.$emit('change-title', 'hello')
        }
    }
}
</script>
```

parent.vue:

```vue
<child :title="title" @change-title="changeTitle"></child>
```

```vue
<script>
export default {
  data() {
    return {
      title: "title",
    };
  },
  methods: {
    changeTitle(title) {
      this.title = title;
    },
  },
};
</script>
```

都知道这种做法，但还有更简单的做法

parent.vue:

```vue
<child :title.sync="title"></child>
```

child.vue:

```vue
<script>
    export defalut {
    props: {
        title: String
    },
    methods: {
        changeTitle(){
            this.$emit('update:title', 'hello')
        }
    }
}
</script>
```

### 26.巧用 template

一般情况下使用`v-if`做条件判断

```html
<div v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</div>
```

如果只单单的想显示`div`标签中包裹的元素，最终`div`标签是会显示在 dom 中的

此时可以把一个`<template>`元素当做不可见的包裹元素，并在上面使用`v-if`。最终渲染结果将不包含`<template>`元素

```html
<template v-if="ok">
  <h1>Title</h1>
  <p>Paragraph 1</p>
  <p>Paragraph 2</p>
</template>
```

在`<template>`上使用`v-for`

类似于 `v-if`，你也可以利用带有 `v-for` 的 `<template>` 来循环渲染一段包含多个元素的内容。比如：

```html
<ul>
  <template v-for="item in items">
    <li>{{ item.msg }}</li>
    <li class="divider" role="presentation"></li>
  </template>
</ul>
```

### 27.异步组件

场景：项目过大就会导致加载缓慢，所以异步组件实现按需加载就是必须要做的事情

```vue
<template>
  <div>
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-list></detail-list>
  </div>
</template>

<script>
//import DetailBanner from "./components/Banner"
//import DetailHeader from "./components/Header"
//import DetailList from "./components/List"

export default {
  name: "List",
  components: {
    DetailBanner: () => import("./components/Banner"),
    DetailHeader: () => import("./components/Header"),
    DetailList: () => import("./components/List"),
  },
};
</script>
```

**require**写法：

```vue
<script>
components: {
    DetailBanner: function (resolve) {
        //异步组件写法
        require(['./components/Banner.vue'], resolve)
    }
}
</script>
```

[异步组件](https://cn.vuejs.org/v2/guide/components-dynamic-async.html#%E5%BC%82%E6%AD%A5%E7%BB%84%E4%BB%B6)

### 28. Vue.nextTick

场景：页面加载时需要让文本框获取焦点，在下次 DOM 更新循环结束之后执行延迟回调。在修改数据之后立即使用这个方法，获取更新后的 DOM

```js
mounted(){ //因为 mounted 阶段 dom 并未渲染完毕,所以需要$nextTick
  this.$nextTick(() => {
    this.$refs.inputs.focus() //通过 $refs 获取dom 并绑定 focus 方法
  })
}
```

### 29. Vue.directive

指令简单使用：

```vue
// 全局定义 Vue.directive("change-color",function(el,binding,vnode){
el.style["color"]= binding.value; }) // 使用
<template>
  <div v-change-color="“color”">{{ message }}</div>
</template>
<script>
export default {
  data() {
    return {
      color: "green",
    };
  },
};
</script>
```

#### 生命周期钩子函数

- `bind`：只调用一次，指令第一次绑定到元素时候调用，用这个钩子定义一个绑定时执行一次的初始化动作。
- `inserted`：被绑定元素插入父节点时调用 (仅保证父节点存在，但不一定已被插入文档中)。
- update: 被绑定与元素所在模板更新时调用，而且无论绑定值是否有变化，通过比较更新前后的绑定值，忽略不必要的模板更新
- `componentUpdate` ：被绑定的元素所在模板完成一次更新更新周期的时候调用
- `unbind`: 只调用一次，指令月元素解绑的时候调用

[钩子函数](https://cn.vuejs.org/v2/guide/custom-directive.html#ad)

[定义指令，根据权限是否显示操作按钮](https://juejin.cn/post/6949453195987025927)

### 30.调式 template

场景：Vue 开发过程中，经常遇到 template 模板渲染时 javascript 变量出错，此时也许你会通过 console.log 来进行调试 这时可以在开发环境挂载一个 log 函数

```
// main.js
Vue.prototype.$log = window.console.log;

// 组件内部
<div>{{$log(info)}}</div>
```

[技巧篇](https://segmentfault.com/a/1190000022341733)
