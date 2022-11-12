---
title: Vue 路由模式
date: 2019-03-18
sidebar: 'auto'
tags:
 - vue
publish: true
# 打赏
showSponsor: true
---

众所周知，`vue-router`有两种模式，`hash`模式和`history`模式.

## hash 模式

```js
const router = new VueRouter({
  routes
})
```

hash模式背后的原理是`onhashchange`事件,可以在`window`对象上监听这个事件,可以在`window`监听`hash`的变化。

```js
 window.onhashchange = function(event){
    console.log(event);
  }
```

我们在url后面随便添加一个`#xx`触发这个事件。可以看到：

里边有两个属性`newURL`和`oldURL`。可以通过模拟改变`hash`的值，动态页面数据。

```html
<div id="test" style="height: 500px;width: 500px;margin: 0 auto"></div>
<script>
  window.onhashchange = function(event){
    let hash = location.hash.slice(1);
    document.body.style.color = hash;
    document.getElementById('test').style.backgroundColor = hash
  }
</script>
```

或者

```js
window.onhashchange = function(event){
    console.log(event.oldURL, event.newURL);
    let hash = location.hash.slice(1);
    document.body.style.color = hash;
}
```

上面的代码可以通过改变`hash`来改变页面字体颜色，虽然没什么用，但是一定程度上说明了原理。

因为`hash`发生变化的`url`都会被浏览器记录下来，从而你会发现浏览器的前进后退都可以用了，同时点击后退时，页面字体颜色也会发生变化。这样一来，尽管浏览器没有请求服务器，但是页面状态和`url`一一关联起来，后来人们给它起了一个霸气的名字叫前端路由，成为了单页应用标配。

网易云音乐，百度网盘就采用了hash路由，看起来就是这个样子:

```js
http://music.163.com/#/friend
https://pan.baidu.com/disk/home#list/vmode=list
```

## history 模式

```js

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})
```

随着 `history api` 的到来，前端路由开始进化了,前面的 `hashchange`，你只能改变#后面的 `url` 片段，而 `history api` 则给了前端完全的自由

- `history api`可以分为两大部分，切换和修改，参考`MDN`等官网。

把 `window.history` 对象打印出来可以看到里边提供的方法和记录长度,`go`、`back`、`forward` 这三个

切换历史状态

包括`back`,`forward`,`go`三个方法，对应浏览器的前进，后退，跳转操作，(谷歌)浏览器只有前进和后退，没有跳转，在前进后退上长按鼠标，会出来所有当前窗口的历史记录，从而可以跳转

```js
  history.go(-3);//后退3次
  history.go(2);//前进2次
  history.go(0);//刷新当前页面
  history.back(); //后退
  history.forward(); //前进
```

> HTML5新增的API
> A)history.pushState(data, title [, url])：往历史记录堆栈顶部添加一条记录； data会在onpopstate事件触发时作为
> 参数传递过去；title为页面标题，当前所有浏览器都会 忽略此参数；url为页面地址，可选，缺省为当前页地址；
> B)history.replaceState(data, title [, url]) ：更改当前的历史记录，参数同上；
> C)history.state：用于存储以上方法的data数据，不同浏览器的读写权限不一样；
> D)window.onpopstate：响应pushState或replaceState的调用；有了这几个新的API，针对支持的浏览器，
> 我们可以构建用户体验更好的应用了。就像刚提到的Facebook相册，虽然是AJAX的方式，但用户可以直接复 制页面地址分享给好友，
> 如果不想要很丑的 hash，我们可以用路由的 history 模式，这种模式充分利用 history.pushState API 来完成 URL 跳转而无须重新加载页面。

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

当你使用 `history` 模式时，`URL`就像正常的 `url`，例如 `http://www.yongcun.wang/tclass`，比 `hash` 的方式好看

so 这种模式要玩好，还需要后台配置支持。因为我们的应用是个单页客户端应用，如果后台没有正确的配置，当用户在浏览器直接访问<http://www.xxxxx.com/tclass>就会返回 404，这就不好看了。

所以呢，你要在服务端增加一个覆盖所有情况的候选资源：如果 `URL` 匹配不到任何静态资源，则应该返回同一个 `index.html` 页面，这个页面就是你 `app`依赖的页面。

给个警告，因为这么做以后，你的服务器就不再返回 `404` 错误页面，因为对于所有路径都会返回 `index.html` 文件。为了避免这种情况，你应该在 `Vue` 应用里面覆盖所有的路由情况，然后在给出一个 `404` 页面。

```js
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '*', component: NotFoundComponent }
  ]
})
```

- 修改历史状态

包括了`pushState`,`replaceState`两个方法,这两个方法接收三个参数:`stateObj`,`title`,`url`

```js
history.pushState({color:'red'}, 'red', 'red'})

window.onpopstate = function(event){
    console.log(event.state)
    if(event.state && event.state.color === 'red'){
        document.body.style.color = 'red';
    }
}

history.back();

history.forward();
```

通过 `pushstate` 把页面的状态保存在 `state` 对象中，当页面的 `url` 再变回这个 `url` 时，可以通过 `event.state` 取到这个 `state` 对象，从而可以对页面状态进行还原，这里的页面状态就是页面字体颜色，其实滚动条的位置，阅读进度，组件的开关的这些页面状态都可以存储到 `state`的里面。

history的缺点

通过`history api`，我们丢掉了丑陋的`#`，但是它也有个毛病：
不怕前进，不怕后退，就怕刷新，`f5`，（如果后端没有准备的话）,因为刷新是实实在在地去请求服务器的,不玩虚的。

在`hash`模式下，前端路由修改的是 `#` 中的信息，而浏览器请求时是不带它玩的，所以没有问题.但是在`history`下，你可以自由的修改 `path` ，当刷新时，如果服务器中没有相应的响应或者资源，会分分钟刷出一个`404`来。

所以，如果你想在`github.io`上搭一个单页博客，就应该选择`hash`模式。比如本博客。

