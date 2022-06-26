---
title: SVG图标使用-vue
date: 2021-06-06
 
categories:
 - 工具
tags:
 - svg

---
## 在vue项目中使用.svg图标，使用iconfont图标库

### 封装svg

1. 创建`SvgIcon`组件

在`SvgIcon`下创建`index.vue` 文件

```vue
// index.vue
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"></use>
  </svg>
</template>

<script>
export default {
  name: 'svg-icon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
```

2. `src`跟目录下创建`icons`文件夹，里面创建`svg`文件夹和`index.js`文件
    - `svg`文件夹中用来存放各种扩展的`.svg`图标。
    - `index.js`种写入以下代码：

```js
// index.js
import Vue from 'vue'
import SvgIcon from '@/components/SvgIcon'// svg组件

// register globally
Vue.component('svg-icon', SvgIcon)

const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', false, /\.svg$/)
requireAll(req)
```

3. `main.js`中引入

```js
import './icons'
```

4. 下载插件

```js
npm i svg-sprite-loader --save
```

5. 配置
在build/webpack.base.conf.js文件中，加入

```js
{
        test: /\.svg$/,
        loader: 'svg-sprite-loader',
        include: [resolve('src/icons')],
        options: {
          symbolId: 'icon-[name]'
        }
      }
```

并在以下设置中添加exclude: [resolve(‘src/icons’)],如下所示

```js
  {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        exclude: [resolve('src/icons')],
        options: {
          limit: 10000,
          name: utils.assetsPath('img/[name].[hash:7].[ext]')
        }
      },
```

\* 注意里面的icons文件夹的路径，路径错误，图标会显示不出来的。
6. 在项目中使用

```js
<svg-icon icon-class="user" />
```
