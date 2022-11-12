---
title: Vue3 新特性
date: 2021-08-11
sidebar: 'auto'
categories:
 - 前端框架
tags:
 - vue3
---

## 写在开头

Vue2.x 已经发展了很久，周边的生态也都非常的完善了，使用 Vue.js 几乎满足开发我们的日常所有需求，在我们看来 Vue.js 框架已经足够优秀，而尤大看来还不够完美，仍然还有许多痛点值得让他去优化， 所以后续有了 Vue3.0 的升级，这篇文章主要对 Vue3 新特性的一些知识点使用分享。

## 创建 Vue3 项目

下面我们工程化方式创建 Vue3 项目，可以使用 Vite 工具创建项目或者使用官方最新版 Vue-cli 脚手架搭建。

Vite 搭建项目如下：

运行命令：

```shell
// npm 安装
npm init vite@latest my-vue3-app --template vue-ts

// ts 安装
npm init vite@latest my-vue3-app --template vue-ts

// yarn 安装
yarn create vite my-vue3-app --template vue
```

这里我选择 yarn 安装，安装速度更快一些。


![image-20210803213912292.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/ab67260cda5a4943a181b893e46ffcf1~tplv-k3u1fbpfcp-watermark.image)


安装完毕，依次运行提示命令即可，就创建成功了：

```js
|-- my-vue3-app
    |-- public                  -- 公共文件夹
    |   |-- favicon.ico         -- 网站的显示图标
    |-- src                     -- 源文件目录，编写的代码基本都在这个目录下
        |-- App.vue             -- 根组件
        |-- main.ts             -- 入口页面
        |-- shims-vue.d.ts      -- 定义文件，因为.vue结尾的文件在ts中不认可，所以要有定义文件				
        |-- vite-env.d.ts	    -- 客户端类型等说明文件（可看官网https://cn.vitejs.dev/guide/features.html#hot-module-replacement）
        |-- assets              -- 静态资源文件，比如图片
        |   |-- logo.png
        |-- components          -- Vue的组件文件，自定的组件可以写在这
            |-- HelloWorld.vue 
    |-- index.html              -- 入口的html文件
    |-- package-lock.json      
    |-- package.json            -- 命令配置和包管理文件
    |-- README.md               -- 项目的说明文件
    |-- tsconfig.json           -- TypeScript
    |-- vite.config.ts          -- vite 相关配置
```

这里项目目录结构生成 我们使用  `mddir` 生成。

启动成功：

![image-20210803221515421.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/96267d9c068e4364957df2cf55a9423f~tplv-k3u1fbpfcp-watermark.image)

也可以使用 vue-cli 官方最新版，升级之后创建项目之前会让你选择 Vue.js 的框架版本，选择 Vue3 版本即可，如图：

使用 Vue-cli 创建：

```shell
yarn global add @vue/cli
```

创建项目：

```shell
vue create my-vue3-app
```

选择 Vue3 版本即可：


![image-20210803214840860.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/42e23fda80c54a118d96c24d0092fd95~tplv-k3u1fbpfcp-watermark.image)

安装完毕后就可以使用 Vue3 模式 编写了。

## setup() 入口函数

**setup 是什么**

setup 它将接受两个参数：props、context。可以返回一个对象，对象的属性如果被响应式定义，将在模板上进行响应式渲染。它会在 Vue2.x 中的 beforeCreate 之后 created 之前执行，也就是在 beforeMount 之前执行。

- props

props 是响应式的，当传入新的 prop时，它将被更新。

> 官网：因为 props 是响应式的，我们不能使用 ES6 解构，因为它会消除 prop 的响应性。

如果需要解构，可以使用  `toRefs` 完成安全操作。

```js
// example.vue

import { toRefs } from 'vue'

setup(props) {
    const { number } = toRefs(props)

    console.log(number.value)
}
```

- context

  context 会暴露三个组件的 property

  - attrs：组件属性
  - slots：插槽
  - emit：向组件外暴露属性，同 vue2.x 的 `this.$emit`

```js
setup(props, context) {
    const {attrs, slots, emit} = context
}
```

> setup 中没有 this，会输出为 undefined

## createApp

调用 createApp 会返回一个实例

```typescript
import { createApp } from "vue";
import App from "./App.vue";
const app = createApp(App);

```

这个 app 实例上挂载全局相关方法

- 注册全局组件

  ```typescript
  // ...省略 createApp 引入
  
  import Header from '@/components/Header/Index.vue'
  // 注册一个名为 Header 的组件
  app.component('Header', Header)
  ```

- 注册自定义指令

  ```typescript
  app.directive('focus', {
    mounted(el) {
      el.focus()
    }
  })
  ```

- 全局 mixin

  ```typescript
  app.mixin({
    created() {
       console.log('全局mixin')
    }
  })
  ```

- 挂载全局属性和方法

  ```typescript
  app.config.globalProperties.$filters = {
     decrypt(value) {
         return sm4Decrypt(value);
     },
  };
  
  ```

  模板使用：

  ```vue
  <template>
      <div>
          {{$filters(value)}}
      </div>
  </template>
  ```

  - setup 入口函数中使用 `$filters`

  ```typescript
   setup() {
      const { appContext: { config: { globalProperties: { $filters } } } } = getCurrentInstance()
      console.log($filters,'filters')
   }
  ```
  

![image-20210810164347748.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/fd22041434994dc08eecee2dbb0fca16~tplv-k3u1fbpfcp-watermark.image)

## 生命周期

Vue3.x 中去掉了 `beforeCreate`和 `created` 改为`setup`代替。

| **Vue2**      | **Vue3**          |
| ------------- | ----------------- |
| beforeCreate  | **setup**代替     |
| created       | **setup**代替     |
| beforeMount   | onBeforeMount     |
| mounted       | onMounted         |
| beforeUpdate  | onBeforeUpdate    |
| updated       | onUpdated         |
| beforeDestroy | onBeforeUnmount   |
| destroyed     | onUnmounted       |
| activated     | onActivated       |
| deactivated   | onDeactivated     |
| errorCaptured | onErrorCaptured   |
|               | onRenderTracked   |
|               | onRenderTriggered |

总的来说 Vue3 的声明周期没有太大变化，名称相比较 Vue2.x 的名称开头多了 `on`，以及新增的调试函数。

## Methods 

Vue2 事件方法 通常定义在 methods 中，Vue3 通过定义方法在 `setup` 入口函数内，并返回它即可。

```vue
<template>
  <button @click="handleClick">+1</button>
</template>
// ..
setup(props, ctx) {
    const handleClick = (e) => {
        console.log('+1')
    }
    return {
      handleClick,
    };
},
```

从子组件触发自定义事件：

```vue
// 子组件
<template>
  <button @click="handleClick">+1</button>
</template>
// ..
setup(props, ctx) {
    const handleClick = (e) => {
        ctx.emit("handleClick")
    }
    return {
      handleClick,
    };
},

// 父组件
<Parent @handleClick="count"/>
```

Vue3.x 中自定义事件，只需要从 setup 的第二个参数中 context 中拿到 emit，不再 `this.$emit()`

## ref ,reactive,toRef,toRefs

### ref

ref 函数接受一个内部值（可以是基本类型中的 string、boolean、array、object、null、undefined等）并返回一个响应式且可变的 ref 对象。ref 对象具有指向内部值的单个 `property .value`。

```js
<template>
  <div>{{ number }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  name: 'example',
  setup(props, ctx) {
    const number = ref(0); // 响应式number
    // 赋值
    number.value = 1;
    return {
      number,
    };
  },
});
</script>
```

### **reactive**

 与 reactive 同 ref 一样返回一个响应式，但是不会存在 `.value` 属性，与 Vue2 中的 Vue.observable() 一个概念。只能接收引用数据类型！

如： 

```js
<template>
  <div>{{ observable.number }}</div>
</template>
setup(props, ctx) {
    const observable = reactive({
      number: 0,
    });
    // number 赋值
    observable.number = 1;
    return {
      observable,
    };
},
```

### **toRefs**

通俗来说就是帮助我们解构响应式对象属性。

> 上面说到，props 是响应式的，所以无法使用 ES6 结构，因为会消除响应性。

```js
<template>
  <button @click="handleClick">+1</button>
  <div>{{ number }}</div>
</template>
// ...
props: {
    number: {
      type: Number,
      default: 0,
    },
},
setup(props, ctx) {
    let { number } = props;
    const handleClick = () => {
      console.log('number': number)
    };
    return {
      handleClick,
    };
},
```

点击页面内容我们输出的是：

![image-20210803235151962.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f6b9f5c39b57423580a144da72503da3~tplv-k3u1fbpfcp-watermark.image)

此时输出变成了一个普通值。

**注意：props 不需要需通过 setup 函数 return，也可以在 template 进行绑定对应的值**

使用 toRefs 

```js
<template>
  <button @click="handleClick">+1</button>
  <div>{{ number }}</div>
</template>
// ... 导入
props: {
    number: {
      type: Number,
      default: 0,
    },
},
setup(props, ctx) {
    let { number } = toRefs(props);
    const handleClick = () => {
        console.log('number': number)
    };
    return {
      handleClick,
    };
},
```

 再次输出： 


![image-20210803235614177.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/7b3b4412639a42d7a71338bffbbf2a27~tplv-k3u1fbpfcp-watermark.image)

这样可以不用破坏原本的 props

重要用途来了，之前我们定义一个 reactive 响应式对象，模板取值中需要 observable.number , 如果有多个每一个都需要 observable.x 获取，不能像定义 ref 一样直接拿到，这时候我们可以使用 toRefs 在不丢失响应性的情况下对返回的对象进行分解/扩散： 

```js
<template>
  <div>{{ number }}</div>
</template>
// ...
setup(props, ctx) {
    const observable = reactive({
      number: 0,
    });
    return {
      ...toRefs(observable),
    };
},
```

**toRef**

toRef 的用法，就是多了一个参数，允许针对某个 key 进行包装

```js
// ...
const number = toRef(props,'number');
console.log('number:', number.value);
```


![image-20210803235614177.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/62927403987347cfb3c9c529091cc233~tplv-k3u1fbpfcp-watermark.image)

也可以用来为源响应式对象上的 property 性创建一个 `ref`。

```js
setup(props, ctx) {
    const observable = reactive({
      number: 0,
    });

    const number = toRef(observable, 'number');

    console.log(number.value) // 0
    return {
      number,
    };
},
```

## watchEffect & watch 监听器

### **watchEffect**

他接收一个回调函数，不需要指定监听谁，只要在回调函数中使用了定义的响应式属性，它会自动收集依赖，并在其依赖变更时重新运行该函数。

```js
setup() {
    const number = ref(0);
    watchEffect(() => console.log(number.value)); // 0

    setTimeout(() => {
      number.value = 2; // 一秒后number改变再次执行 watchEffect ，输出为 2
    }, 1000);
},
```


![image-20210805114339085.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9bdb5590420e4c47b79ab734b21c925d~tplv-k3u1fbpfcp-watermark.image)

直白的意思就是，再 `watchEffect` 接收的函数内使用到了响应式值，发生改变就会重新运行该函数。

**停止监听**

watchEffect 会返回一个停止函数，调用它会停止监听。

```js
setup(props) {
    const number = ref(0);
    const stop = watchEffect(() => console.log(number.value));
    setInterval(() => {
      number.value++;
    }, 1000);
    setTimeout(stop, 2000);
    return {
      number,
    };
},
```

在两秒后会听见监听 number 值的变化。

**清除副作用**

传入的函数可以接收一个 `onInvalidate` 函数作入参， 用来注册清理失效时的回调。

注意：onInvalidate() 执行时机只有在依赖了响应式属性注册的时候才会执行回调。

执行失效回调时机：

- 副作用即将重新执行时，也就是依赖发生改变时，默认注册时就会执行。
- 组件卸载时

```js
watchEffect((onInvalidate) => {
    // do something...
    onInvalidate(() => {
        // 注册/组件卸载时
    });
});
```



通常我们用 `watchEffect `解决子组件 props 属性改变，子组件不会重新渲染问题：

```js
// example.vue
<template>
  <div>{{ number }}</div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, watchEffect } from "vue";
export default defineComponent({
  name: "example",
  props: {
    number: { type: Number, default: 0 },
  },
  setup(props) {
    const state = reactive({
      number: 0,
    });
    watchEffect(() => {
      state.number = props.number;
    });
    return {
      ...toRefs(state),
    };
  },
});
</script>
```

### **watch**

Vue3  的 watch 与 Vue2 的概念差不多，监听针对某一个值的变化。而且注册时并不会立即执行，只有来指定依赖发生改变是才会执行回调函数，看看它的基础用法：

```js
// 监听单个
const number = ref(0)
watch(number, (newVal, oldVal) => {
	console.log(newVal,oldVal)
});

// 对象深度监听 
const obj = ref({ name: "watch" });
watch(
    obj,
    (newVal, oldVal) => {
        console.log(newVal, oldVal);
    },
    {
        deep: true,
    }
);

// 监听多个
watch([a, b], ([newValA, newValB], [oldValA, oldValB]) => {
	console.log(newValA, newValB, '——————————', oldValA, oldValB)
})
```

使用 reactive 定义响应式数据，并想侦听单个的时候：

```js
// 侦听一个 getter
const state = reactive({ count: 0 })
// 直接 state.count 会报错
watch(
  () => state.count,
  (count, prevCount) => {
    /* ... */
  }
)
```

## computed 计算属性

与 Vue2 用法相同差不多，Vue3 中删除了 filters 过滤器，我们可以使用 computed 代替它。

```js
<template>
  <div>{{ fullName }}</div>
  <div>{{ accept("Foo") }}</div>
</template>

<script lang="ts">
import {
  computed,
  defineComponent,
  ref,
} from "vue";

export default defineComponent({
  setup(props) {
    const firstName = ref("Foo");
    const lastName = ref("Bar");
    // 基础用法
    const fullName = computed(() => {
      return firstName.value + lastName.value;
    });
      
    // 传递参数
    const accept = computed(() => {
      return (fullName: string) => {
        return fullName === "Foo" ? firstName.value : lastName.value;
      };
    });
    return {
      fullName,
      accept  
    };
  },
});
</script>
```

## fragments（片段）

片段的意思是 Vue2.x 组件中，并不支持多个根节点，在 Vue3.x 组件中可以包含多个根节点。

```js
<template>
  <div class="fragments">...</div>
  <div>...</div>
</template>
```

从父组件传递 class 给子组件 ，当子组件的如果只有一个根组件的时候，默认会将 class 放入根的节点上，如果有多个，默认不会添加，需要 `v-bind="$attrs"`指定添加到父节点上

```js
// 子组件
<template>
  <div class="children">children</div>
  <div v-bind="$attrs">2222</div>
</template>
```

```js
// 父组件
<template>
  <div class="fragments"></div>
  <Childern class="parant"/>
</template>
```

效果：


![image-20210806161151729.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/c144043973514973874143e3c648912d~tplv-k3u1fbpfcp-watermark.image)

## 瞬间移动组件 Teleport

teleport 翻译过来就是传送的意思，怎么理解这个瞬间移动组件呢？就是将组件内的节点放入指定DOM位置上。

在 **Vue**或者React 项目中都会有一个根节点，页面内容也是挂载在这个根节点下 `<div id='app'></div>`，在写一些弹窗组件或者全局提示状态组件，我们希望独立组件外，放在与根组件同级兄弟节点下，这样更容易受控制，不会被根节点一些 css 属性影响。 `Teleport`的作用就是让我们可以将 Dom 移动到一个哪个干净的父节点下渲染 HTML，来看看用法

我们在 `index.html` 再添加一个 `<div>id="app2"</div>`节点：


![image-20210809213925150.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/9ade9ff1d53443bda2c294a41cacab25~tplv-k3u1fbpfcp-watermark.image)

```js
<template>
  <div>
    <div class="example">example</div>
    <teleport to="#app2">
      <div class="teleport">teleport</div>
    </teleport>
  </div>
</template>
```

效果：


![image-20210809214417172.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1f17e18815934aa2a76c3036c9f6a49b~tplv-k3u1fbpfcp-watermark.image)

`<div class="teleport">teleport</div>`Dom 被移动到了 `id="app2"`节点下，来看看基础语法：

通过选择器移动到父节点下位置：

```js
// id
<teleport to="#app2">

// class
<teleport to=".teleport-class">

// data selector
<teleport to="[data-app]">
// data selector 父节点
<div data-app/>

// 动态更新
<teleport :to="currentRef">
```

## 异步组件 Suspense

在渲染组件之前会进行一些异步请求，在异步请求成功数据完全渲染之前比如做一些 Loading、骨架屏（Skeleton）等一些方案，`<Suspense >` 组件能够更好的帮助实现这样的需求。该组件有两个插槽，一个是完全请求成功之后等待组件树处理完毕显示，一个是未请求成功返回数据时候显示该内容。我们来简单写个列子，看看实际操作。

Async.vue


![image-20210810155716528.png](https://p1-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/1282cf84087d4fd395643efdc58d30ba~tplv-k3u1fbpfcp-watermark.image)

 Suspense.vue

请求返回一张签名图片：


![image-20210810155815161.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/2617d0d8b684499d939a25d61fc50ca0~tplv-k3u1fbpfcp-watermark.image)

来看看效果：

为了让效果更明显 可以自定网络加载速度 `Network` → `No throtting` 选择 `Add`



![GIF 2021-8-10 16-07-58.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/19d9c1bddab8405c9f9dccf9ef410b70~tplv-k3u1fbpfcp-watermark.image)


gif 生成工具我使用的是 [gitcam](http://blog.bahraniapps.com/gifcam/#download) 很好用！~

> 但是官方说明：Suspense 是一个试验性的新特性并且其 API 可能随时更改。特此声明以便社区能够为当前的实现提供反馈。
>
> 它不应该被用在生产环境。

控制台也有提示


![image-20210810163905069.png](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/5f03efbb1a90496dbdb1d91ff560ff75~tplv-k3u1fbpfcp-watermark.image)

## 关于模块化使用

对于模块化的理解，通俗的说逻辑抽离，让代码能够复用，优化代码结构，好的代码可读性，更有利于后期的维护性。Vue3.x 的 CompositionAPI 让我们这样使用的理由也在此，也可以看看这篇文章 [不要再用vue2的思维写vue3了](https://juejin.cn/post/6946387745208172558#heading-0)。写一个简单的例子。

就是加 1，减1

通常我们都会这样写：

```js
<template>
  <div class="module">
    <div>{{ number }}</div>
    <van-button @click="increase">加加</van-button>
    <van-button @click="reduce">减减</van-button>
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const number = ref(0)
    const increase = () => {
      number.value++
    }
    const reduce = () => {
      number.value--
    }
    return {
      number,
      increase,
      reduce
    }
  }
})
</script>
```

没有毛病，这只是其中一个例子，如果有更多更多的逻辑功能，我们肯定也会继续往`setup`入口函数内继续添加逻辑，这样就变成拉面条，以前通常的思维就是能复用的就抽离，没有复用的就一起写，发现慢慢一个组件功能多起来，变得难以查找很混乱。

我们修改一下利用CompositionAPI给我们的特性使用模块化的方式重新优化一下，也是我们常常提到的 hooks 怎么写。

useCount.ts

```typescript
import { ref } from "vue";
export default () => {
  const number = ref(0);
  const increase = () => {
    number.value++;
  };
  const reduce = () => {
    number.value--;
  };
  return {
    number,
    increase,
    reduce,
  };
};
```

```vue
<template>
  <div class="module">
    <div>{{ number }}</div>
    <van-button @click="increase">加加</van-button>
    <van-button @click="reduce">减减</van-button>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import useCount from './useCount'
export default defineComponent({
  setup() {
    // 计算逻辑  
    const { number, increase, reduce } = useCount()
    // 其他逻辑
    return {
      // ...useCount(),
      number,
      increase,
      reduce
    }
  }
})
</>
```

可以看到我们只需要引入拿到相关的值 `return` 即可，遇到其他页面有相同逻辑的，我们同样引入返回即可使用。这样写可以让代码可读性也更高，更利于代码后期维护。也可以看看这篇文章业务 [hooks使用](https://juejin.cn/post/6991441703979171871#heading-11)。

## 总结

Vue3 的版本升级改进，在性能优化，源码优化等等有了很大的提升，CompositionAPI 代码编写也更加的函数式，使得逻辑抽离更加灵活，不用被 OptionsAPI 限制思维。

项目用起来，感受 Vue3 的快乐~


