---
title: JS Event
date: 2019-12-21
sidebar: 'auto'
categories:
- 前端基础
tags:
- JavaScript
publish: true
# 打赏
showSponsor: true
---

| 事件         |                    | 浏览器支持 | 解说                                                                                       |
| :----------- | :----------------- | :--------- | :----------------------------------------------------------------------------------------- |
| 一般事件     | onclick            | IE3、N2    | 鼠标点击时触发此事件                                                                       |
|              | ondblclick         | IE4、N4    | 鼠标双击时触发此事件                                                                       |
|              | onmousedown        | IE4、N4    | 按下鼠标时触发此事件                                                                       |
|              | onmouseup          | IE4、N4    | 鼠标按下后松开鼠标时触发此事件                                                             |
|              | onmouseover        | IE3、N2    | 当鼠标移动到某对象范围的上方时触发此事件                                                   |
|              | onmousemove        | IE4、N4    | 鼠标移动时触发此事件                                                                       |
|              | onmouseout         | IE4、N3    | 当鼠标离开某对象范围时触发此事件                                                           |
|              | onkeypress         | IE4、N4    | 当键盘上的某个键被按下并且释放时触发此事件.                                                |
|              | onkeydown          | IE4、N4    | 当键盘上某个按键被按下时触发此事件                                                         |
|              | onkeyup            | IE4、N4    | 当键盘上某个按键被放开时触发此事件                                                         |
| 页面相关事件 | onabort            | IE4、N3    | 图片在下载时被用户中断                                                                     |
|              | onbeforeunload     | IE4、N     | 当前页面的内容将要被改变时触发此事件                                                       |
|              | onerror            | IE4、N3    | 出现错误时触发此事件                                                                       |
|              | onload             | IE3、N2    | 页面内容完成时触发此事件                                                                   |
|              | onmove             | IE、N4     | 浏览器的窗口被移动时触发此事件                                                             |
|              | onresize           | IE4、N4    | 当浏览器的窗口大小被改变时触发此事件                                                       |
|              | onscroll           | IE4、N     | 浏览器的滚动条位置发生变化时触发此事件                                                     |
|              | onstop             | IE5、N     | 浏览器的停止按钮被按下时触发此事件或者正在下载的文件被中断                                 |
|              | onunload           | IE3、N2    | 当前页面将被改变时触发此事件(页面关闭)                                                     |
|              | onreadystatechange | IE3、N2    | 当前页面状态改变时触发                                                                     |
| 表单相关事件 | onblur             | IE3、N2    | 当前元素失去焦点时触发此事件                                                               |
|              | onchange           | IE3、N2    | 当前元素失去焦点并且元素的内容发生改变而触发此事件                                         |
|              | onfocus            | IE3 、N2   | 当某个元素获得焦点时触发此事件                                                             |
|              | onreset            | IE4 、N3   | 当表单中RESET的属性被激发时触发此事件                                                      |
|              | onsubmit           | IE3 、N2   | 一个表单被递交时触发此事件                                                                 |
| 滚动字幕事件 | onbounce           | IE4、N     | 在Marquee内的内容移动至Marquee显示范围之外时触发此事件                                     |
|              | onfinish           | IE4、N     | 当Marquee元素完成需要显示的内容后触发此事件                                                |
|              | onstart            | IE4、 N    | 当Marquee元素开始显示内容时触发此事件                                                      |
| 编辑事件     | onbeforecopy       | IE5、N     | 当页面当前的被选择内容将要复制到浏览者系统的剪贴板前触发此事件                             |
|              | onbeforecut        | IE5、 N    | 当页面中的一部分或者全部的内容将被移离当前页面[剪贴]并移动到浏览者的系统剪贴板时触发此事件 |
|              | onbeforeeditfocus  | IE5、N     | 当前元素将要进入编辑状态                                                                   |
|              | onbeforepaste      | IE5、 N    | 内容将要从浏览者的系统剪贴板传送[粘贴]到页面中时触发此事件                                 |
|              | onbeforeupdate     | IE5、 N    | 当浏览者粘贴系统剪贴板中的内容时通知目标对象                                               |
|              | oncontextmenu      | IE5、N     | 当浏览者按下鼠标右键出现菜单时或者通过键盘的按键触发页面菜单时触发的事件                   |
|              | oncopy             | IE5、N     | 当页面当前的被选择内容被复制后触发此事件                                                   |
|              | oncut              | IE5、N     | 当页面当前的被选择内容被剪切时触发此事件                                                   |
|              | ondrag             | IE5、N     | 当某个对象被拖动时触发此事件 [活动事件]                                                    |
|              | ondragdrop         | IE、N4     | 一个外部对象被鼠标拖进当前窗口或者帧                                                       |
|              | ondragend          | IE5、N     | 当鼠标拖动结束时触发此事件，即鼠标的按钮被释放了                                           |
|              | ondragenter        | IE5、N     | 当对象被鼠标拖动的对象进入其容器范围内时触发此事件                                         |
|              | ondragleave        | IE5、N     | 当对象被鼠标拖动的对象离开其容器范围内时触发此事件                                         |
|              | ondragover         | IE5、N     | 当某被拖动的对象在另一对象容器范围内拖动时触发此事件                                       |
|              | ondragstart        | IE4、N     | 当某对象将被拖动时触发此事件                                                               |
|              | ondrop             | IE5、N     | 在一个拖动过程中，释放鼠标键时触发此事件                                                   |
|              | onlosecapture      | IE5、N     | 当元素失去鼠标移动所形成的选择焦点时触发此事件                                             |
|              | onpaste            | IE5、N     | 当内容被粘贴时触发此事件                                                                   |
|              | onselect           | IE4、N     | 当文本内容被选择时的事件                                                                   |
|              | onselectstart      | IE4、N     | 当文本内容选择将开始发生时触发的事件                                                       |
| 数据绑定     | onafterupdate      | IE4、N     | 当数据完成由数据源到对象的传送时触发此事件                                                 |
|              | oncellchange       | IE5、N     | 当数据来源发生变化时                                                                       |
|              | ondataavailable    | IE4、N     | 当数据接收完成时触发事件                                                                   |
|              | ondatasetchanged   | IE4、N     | 数据在数据源发生变化时触发的事件                                                           |
|              | ondatasetcomplete  | IE4、N     | 当来子数据源的全部有效数据读取完毕时触发此事件                                             |
|              | onerrorupdate      | IE4、N     | 当使用onBeforeUpdate事件触发取消了数据传送时，代替onAfterUpdate事件                        |
|              | onrowenter         | IE5、N     | 当前数据源的数据发生变化并且有新的有效数据时触发的事件                                     |
|              | onrowexit          | IE5、N     | 当前数据源的数据将要发生变化时触发的事件                                                   |
|              | onrowsdelete       | IE5、N     | 当前数据记录将被删除时触发此事件                                                           |
|              | onrowsinserted     | IE5、N     | 当前数据源将要插入新数据记录时触发此事件                                                   |
| 外部事件     | onafterprint       | IE5、N     | 当文档被打印后触发此事件                                                                   |
|              | onbeforeprint      | IE5、N     | 当文档即将打印时触发此事件                                                                 |
|              | onfilterchange     | IE4、N     | 当某个对象的滤镜效果发生变化时触发的事件                                                   |
|              | onhelp             | IE4、N     | 当浏览者按下F1或者浏览器的帮助选择时触发此事件                                             |
|              | onpropertychange   | IE5、N     | 当对象的属性之一发生变化时触发此事件                                                       |
|              | onreadystatechange | IE4、N     | 当对象的初始化属性值发生变化时触发此事件                                                   |

## js绑定事件的方式有三种

- 直接在 `dom` 元素上进行绑定。
- 用 `on` 绑定。
- 用 `addEventListener`、`attachEvent` 绑定。

1. 直接在 `dom` 元素上进行绑定

```js
<input id="btn1" type="button" onclick="test();" />
```

2. 用 `on` 绑定

兼容性：在`IE，FF，Chrome，Safari，Mozilla，Opera`下都适用。

```js
// onclick绑定
document.body.onclick = () => {
  console.log(111)
}
// 解绑
document.body.onclick = null;
```

但是，同一个 `dom` 元素上，`on` 只能绑定一个同类型事件，后者会覆盖前者，不同类型的事件可以绑定多个。

3. 事件监听 用 `addEventListener`、`attachEvent` 绑定

同一个 `dom` 元素上，用 `addEventListener`、`attachEvent` 可以绑定多个同类型事件。

但是，`addEventListener` 事件执行顺序按照事件绑定的先后顺序执行；`attachEvent` 事件执行顺序则是随机的。

```js
// 绑定
document.body.addEventListener('click', bodyClick, false);
// 解绑
document.body.removeEventListener('click', bodyClick, false);
```

\* 注意：`removeEventListener` 第二个参数要和 `addEventListener` 指向同一个函数才能解绑成功

`addEventListener` 的第三个参数若为 `false`，函数在冒泡阶段执行；若为 `true`，函数在捕获阶段执行。默认为 `false`

```js
<div id="box">
   <div id="child"></div>
</div>
```

```js
box.addEventListener("click", function(){
  console.log("box");
}, false);
child.addEventListener("click", function(){
  console.log("child");
});
// 执行顺序为 child => box
```

```js
box.addEventListener("click", function(){
  console.log("box");
}, true);
child.addEventListener("click", function(){
  console.log("child");
});
// 执行顺序为 box => child
```

- 兼容性
`Chrome` 和 `FireFox` 只支持 `addEventListener`；`IE` 只支持 `attachEvent`（`IE11`开始不支持了）。

所以必须对`2`种方法做兼容处理。原理是先判断 `attachEvent` 是否为真，如果为真则用 `attachEvent` 绑定事件，否则用 `addEventListener` 绑定事件。

可以封装一个函数做兼容性处理：

```js
//dom绑定事件的元素，ev事件名，fn执行函数
function myAddEvent(dom, ev, fn){
  if(dom.attachEvent){
    dom.attachEvent("on"+ev, fn);
  }else {
    dom.addEventListener(ev, fn, false);
  }
}
myAddEvent(d1, "click", ()=>{
  console.log(1111)
});
```

- 另外

以上三种方式绑定的点击事件都可以用下面这条语句触发

```js
document.getElementById("btn").click();
```

## 事件委托

对“事件处理程序过多”问题的解决方案就是事件委托。事件委托利用了事件冒泡，只制定一个事件处理程序，就可以管理某一类型的所有事件。例如`click`事件一直会冒泡到`document`层。也就是我们可以只指定`onclick`事件处理程序，而不必给每个事件分别添加处理程序。
下面我们来看一个阿里巴巴笔试题的例子。

通过原生js实现删除功能

| 序号 | 性别 | 姓名 | 电话号码    | 省份 | 操作 |
| :--- | :--- | :--- | :---------- | :--- | :--- |
| 1    | 张三 | 男   | 13788888888 | 浙江 | 删除 |
| 2    | 李四 | 女   | 13788887777 | 四川 | 删除 |
| 3    | 王二 | 男   | 13788889999 | 广东 | 删除 |

- 样式以及`DOM`结构

```html
 <style>
   * {
     padding: 0;
     margin: 0;
   }
   .head, li div {
     display: inline-block;
     width: 70px;
     text-align: center;
   }
   li .id, li .sex, .id, .sex {
     width: 15px;
   }
   li .name, .name {
     width: 40px;
   }
   li .tel, .tel {
     width: 90px;
   }
   li .del, .del {
     width: 15px;
   }
   ul {
     list-style: none;
   }
   .user-delete {
     cursor: pointer;
   }
 </style>
</head>
<body>
<div id="J_container">
 <div class="record-head">
   <div class="head id">序号</div><div class="head name">姓名</div><div class="head sex">性别</div><div class="head tel">电话号码</div><div class="head province">省份</div><div class="head">操作</div>
 </div>
   <ul id="J_List">
     <li><div class="id">1</div><div class="name">张三</div><div class="sex">男</div><div class="tel">13788888888</div><div class="province">浙江</div><div class="user-delete">删除</div></li>
     <li><div class="id">2</div><div class="name">李四</div><div class="sex">女</div><div class="tel">13788887777</div><div class="province">四川</div><div class="user-delete">删除</div></li>
     <li><div class="id">3</div><div class="name">王二</div><div class="sex">男</div><div class="tel">13788889999</div><div class="province">广东</div><div class="user-delete">删除</div></li>
   </ul>
 </div>
 </body>
```

**不用事件委托**。而这种方法造成的代价是，性能的大量浪费。如果是成千上万条数据，页面将会严重卡顿，甚至崩溃。

```js
function Contact(){
    this.init();
}
Contact.prototype.init = function(){
 var userdel = document.querySelectorAll('.user-delete');
 for(var i=0;i<lis.length;i++){
  (function(j){
   userdel[j].onclick = function(){
 userdel[j].parentNode.parentNode.removeChild(userdel[j].parentNode);
   }
  })(i);
 }
}
new Contact();
```

**使用事件委托**，只绑定一次事件，大大减少了性能的损耗。也是在需要大量事件处理程序中一种非常好的解决方式。

```js
function Contact(){
    this.init();
}
Contact.prototype.init = function(){
 var lis = document.querySelector('#J_List');
 lis.addEventListener('click', function(e){
  var target = e.target || e.srcElement;
  if (!!target && target.className.toLowerCase()==='user-delete') {    target.parentNode.parentNode.removeChild(target.parentNode);
  }
 })
}
new Contact();
```

## 事件级别

### HTML0

在标签中添加事件，没有兼容问题

### DOM0

`DOM0`级事件，是在`html0`的基础上扩展的新的试验性质的新功能，没有制定标准。具有极好的跨浏览器优势，会以最快的速度绑定。

### DOM1

`DOM1`是一种标准，只是设计规范没有具体的体现，所以一般跳过。

### DOM2

- 非IE 中`addEventListener`,`removeEventListener`

- IE `attachEvent`,`detachEvent`

### DOM3

`DOM3`进一步扩展了`DOM`，在`DOM3`中引入了以下模块：

- `DOM`加载和保存模块（`DOM Load and Save`）：引入了以统一方式加载和保存文档的方法
- `DOM`验证模块（`DOM Validation`）：定义了验证文档的方法
- `DOM`核心的扩展（`DOM Style`）：支持`XML 1.0`规范，涉及`XML Infoset`、`XPath`和`XML Base`.

`DOM3` 级还定义了自定义事件，自定义事件不是由`DOM`原生触发的，它的目的是让开发人员创建自己的事件。

## 自定义事件

### 方法创建

1. 事件的创建

`JS`中，最简单的创建事件方法，是使用`Event`构造器：

```js
var myEvent = new Event('event_name');
```

但是为了能够传递数据，就需要使用 `CustomEvent` 构造器：

```js
var myEvent = new CustomEvent('event_name', {
    detail:{
        // 将需要传递的数据写在detail中，以便在EventListener中获取
        // 数据将会在event.detail中得到
    },
});
```

2. 事件的监听

`JS`的`EventListener`是根据事件的名称来进行监听的，比如我们在上文中已经创建了一个名称为`‘event_name’` 的事件，那么当某个元素需要监听它的时候，就需要创建相应的监听器：

```js
//假设listener注册在window对象上
window.addEventListener('event_name', function(event){
    // 如果是CustomEvent，传入的数据在event.detail中
    console.log('得到数据为：', event.detail);

    // ...后续相关操作
});
```

至此，`window`对象上就有了对`‘event_name’` 这个事件的监听器，当`window`上触发这个事件的时候，相关的`callback`就会执行。

3. 事件的触发

对于一些内置（`built-in`）的事件，通常都是有一些操作去做触发，比如鼠标单击对应`MouseEvent`的`click`事件，利用鼠标（`ctrl` + 滚轮上下）去放大缩小页面对应`WheelEvent`的`resize`事件。
然而，自定义的事件由于不是`JS`内置的事件，所以我们需要在`JS`代码中去显式地触发它。方法是使用 `dispatchEvent` 去触发（`IE8`低版本兼容，使用`fireEvent`）：

```js
// 首先需要提前定义好事件，并且注册相关的EventListener
var myEvent = new CustomEvent('event_name', {
    detail: { title: 'This is title!'},
    bubbles: true,    //是否冒泡
    cancelable: false //是否取消默认事件
});
window.addEventListener('event_name', function(event){
    console.log('得到标题为：', event.detail.title);
});
// 随后在对应的元素上触发该事件
if(window.dispatchEvent) {
    window.dispatchEvent(myEvent);
} else {
    window.fireEvent(myEvent);
}
// 根据listener中的callback函数定义，应当会在console中输出 "得到标题为： This is title!"
```

\* 需要特别注意的是，当一个事件触发的时候，如果相应的`element`及其上级元素没有对应的`EventListener`，就不会有任何回调操作。
对于子元素的监听，可以对父元素添加事件托管，让事件在事件冒泡阶段被监听器捕获并执行。这时候，使用`event.target`就可以获取到具体触发事件的元素。

- 移出事件

```js
dom.detachEvent("onpropertychange", evt);

var fireEvent = function(element,event){
   if (document.createEventObject){
       // IE浏览器支持fireEvent方法
       var evt = document.createEventObject();
       return element.fireEvent('on'+event,evt)
   }
   else{
       // 其他标准浏览器使用dispatchEvent方法
       var evt = document.createEvent( 'HTMLEvents' );
       evt.initEvent(event, true, true);
       return !element.dispatchEvent(evt);
   }
};
```

[应用场景](https://zhuanlan.zhihu.com/p/108447200)

### document 方式

`DOM3` 级还定义了自定义事件，自定义事件不是由DOM原生触发的，它的目的是让开发人员创建自己的事件。要创建的自定义事件可以由`createEvent("CustomEvent");` 返回的对象有一个`initCustomEvent（）`方法接收如下四个参数。

- 1 `type`：字符串，触发的事件类型，自定义。例如`“keyDown”`，`“selectedChange”`;
- 2 `bubble`（布尔值）：标示事件是否应该冒泡；
- 3 `cancelable`(布尔值)：标示事件是否可以取消；
- 4 `detail`（对象）：任意值，保存在`event`对象的`detail`属性中；

可以像分配其他事件一样在`DOM`中分派创建的自定义事件对象。如：

```js
var  div = document.getElementById("myDiv");
　　EventUtil.addEventHandler(div,"myEvent", function () {
　　　　alert("div myEvent!");
　　});
　　EventUtil.addEventHandler(document,"myEvent",function(){
　　　　alert("document myEvent!");
　　});
　　if(document.implementation.hasFeature("CustomEvents","3.0")){
　　　　var e = document.createEvent("CustomEvent");
　　　　e.initCustomEvent("myEvent",true,false,"hello world!");
　　　　div.dispatchEvent(e);
　　}
```

这个例子中创建了一个冒泡事件`“myEvent”`。而`event.detail`的值被设置成了一个简单的字符串，然后在`div`和`document`上侦听该事件，因为在`initCustomEvent`中设置了事件冒泡。所以当div激发该事件时，浏览器会将该事件冒泡到`document`。
`IE`中的事件模拟(`IE8`及之前版本中)：
与`DOM`中事件模拟的思路类似，先创建`event`对象，再为其指定相应信息，然后再使用该对象来触发事件。当然`IE`在实现以下每个步骤都不太一样。

例如：

```js
var btn = document.getElementById("myBtn");
//创建事件对象,不接受任何参数，结果会返回一个通用的event对象，你必须为该event对象指定所有必要的信息。
var event  = document.createEventObject();
//初始化事件对象
event.screenX = 100；
event.screenY = 0;
event.clientX = 0;
event.clientY =0;
event.ctrlKey = false;
event.altKey = false;
event.shiftKey = false;
event.button = 0;
//触发事件
btn.fireEvent("onclick",event);
```
