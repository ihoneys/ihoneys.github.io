---
title: JS 常用数据操作(高级)
date: 2019-12-21
 
categories:
- 前端基础
tags:
- JavaScript
publish: true
sticky: 2
# 打赏
showSponsor: true
---

## js原生或实现某项功能的代码片段

### 避免闭包引起的内存泄漏：避免变量的循环赋值和引用

```js
//这段代码会导致内存泄露
    window.onload = function(){
        var el = document.getElementById("id");
        el.onclick = function(){
            alert(el.id);
        }
    }

//解决方法为
    window.onload = function(){
        var el = document.getElementById("id");
        var id = el.id; //解除循环引用
        el.onclick = function(){
            alert(id);
        }
        el = null; // 将闭包引用的外部函数中活动对象清除
    }
```

### loaclStorage 存储 读取

```js
 // 定义存储的空间名
    let namespace = "mall"
    function saveItem(key, val) { // 关键字和值
      // 存储前，先获取命名空间
      let storage = window.localStorage.getItem(namespace)
      if (!storage) {
        // 如果没有命名空间 就初始化一个
        storage = {}
      } else {
        // 如果有命名空间 就转成对象格式
        storage = JSON.parse(storage)
      }
      // 转成对象后，将数据以键值对的方式暂存
      storage[key] = val
      // 存储到window
      window.localStorage.setItem(namespace, JSON.stringify(storage))
    }
    // 页面中调用方法，存储数据
    // saveItem("a", "1")
    function readItem(key, def) {  // 获取的关键字和默认值
      // 获取 localStorage
      let storage = window.localStorage.getItem(namespace)
      if (!storage) {
        // 如果没有存储 ，返回 默认值
        return def
      }
      // 如果有，读取并转换为对象
      storage = JSON.parse(storage)
      let result = storage[key]
      // 最后返回读取到的 值 或者 默认值
      return result || def
    }
    console.log(readItem("a", "0")); // 调用读取的方法
```

### 三级联动

- js - 1

:::details

```js
<!DOCTYPE html>
<html>

<head lang="en">
    <meta charset="UTF-8">
    <title>三级联动</title>
</head>

<body>
    <select id="sheng">
        <option value=""></option>
        <!--先创建三个下拉栏，分别对应 省 市 县-->
    </select>

    <select id="shi">
        <option value=""></option>
    </select>

    <select id="xian">
        <option value=""></option>
    </select>
    <script>
        var osheng = document.getElementById("sheng");
        var oshi = document.getElementById("shi");
        var oxian = document.getElementById("xian");

        var arr_sheng = ["陕西省", "云南省", "四川省", "山西省"];//创建一个一维数组，存入省的值
        // 创建一个二维数组，最外层每一个元素对应省
        var arr_shi = [
            ["西安市", "咸阳市", "宝鸡市", "渭南市"],//数组中的第一个元素内又定义一个数组存的市的值
            ["昆明市", "大理市", "丽江市", "西双版纳市"],
            ["乐山市", "成都市", "大同市", "高新市"],
            ["太原市", "屏显市", "乐宝市", "李伟市"]
        ];
        // 创建一个三维数组，最外层每一个元素（对应省）
        // 数组中定义四个数组（对应市）
        var arr_xian = [
            [
                ["西安县1", "西安县2"], ["咸阳市1", "咸阳市2"], ["宝鸡市1", "宝鸡市2"], ["渭南市1", "渭南市2"]
            ],
            // 数组中定义两个元素（对应县）
            [
                ["昆明市1", "昆明市2"], ["大理市1", "大理市2"], ["丽江市1", "丽江市2"], ["西双版纳市1", "西双版纳市2"]
            ],
            [
                ["乐山市1", "乐山市2"], ["成都市1", "成都市2"], ["大同市1", "大同市2"], ["高新市1", "高新市2"]
            ],
            [
                ["太原市1", "太原市2"], ["屏显市1", "屏显市2"], ["乐宝市1", "乐宝市2"], ["李伟市1", "李伟市2"]
            ]
        ];

        var quanju_arr;//创建一个全局对象，用于存储一个中间数组

        function input_arr(arr, event) {//封装一个函数，用于向下拉栏中添加元素
            for (var i = 0; i < arr.length; i++) {//下拉栏内的元素来源于数组中的元素，遍历数组
                var option = new Option(arr[i], i);//创建Option对象（这个O要大写），存入值
                event.appendChild(option);//把option添加到event对象的末尾
            }
        }

        input_arr(arr_sheng, osheng);//调用,给省下拉栏添元素

        osheng.onchange = function () {//给下拉栏绑定事件（当下拉栏元素改变时执行）
            oshi.options.length = 1;//当省下拉栏改变时，清空市的下拉栏内元素
            oxian.options.length = 1;//当省下拉栏改变时，清空县的下拉栏内元素
            var index = this.value;//每一个option标签都有一个value值索引，获取索引，用于数组中元素的选择
            var arr_shi_next = arr_shi[index];//获取当前选择省的市元素并赋给一个数组
            quanju_arr = arr_xian[index];//获取当前选择省中市的县元素并赋给定义的中间数组
            input_arr(arr_shi_next, oshi);//调用,给市下拉栏添元素
        }

        oshi.onchange = function () {
            oxian.options.length = 1;
            var index = this.value;
            var arr_xian_next = quanju_arr[index];
            input_arr(arr_xian_next, oxian);//调用,给县下拉栏添元素
        }
    </script>
</body>

</html>
```

:::

- js - 2

:::details

```js
<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
           <title></title>
</head>

<body>
       省：
       <select style="width: 100px;" id="pre" onchange="chg(this);">
           <option value="-1">请选择</option>
              </select>
       市：
       <select style="width: 100px;" id="city" onchange="chg2(this)" ;></select>
       区：
       <select style="width: 100px;" id="area"></select>
       </body>
<script>

    //声明省
    var pres = ["北京", "上海", "山东"]; //直接声明Array
    //声明市
    var cities = [
        ["东城", "昌平", "海淀"],

        ["浦东", "高区"],

        ["济南", "青岛"]
    ];
    var areas = [
        [
            ["东城1", "东城2", "东城3"],
            ["昌平1", "昌平2", "昌平3"],
            ["海淀1", "海淀2", "海淀3"]

        ],
        [
            ["浦东1", "浦东2", "浦东3"],
            ["高区1", "高区2", "高区3"]
        ],
        [
            ["济南1", "济南2"],
            ["青岛1", "青岛2"]
        ]

    ]
    //设置一个省的公共下标
    var pIndex = -1;
    var preEle = document.getElementById("pre");
    var cityEle = document.getElementById("city");
    var areaEle = document.getElementById("area");
    //先设置省的值
    for (var i = 0; i < pres.length; i++) {
        //声明option.<option value="pres[i]">Pres[i]</option>
        var op = new Option(pres[i], i);
        //添加
        preEle.options.add(op);
    }
    function chg(obj) {
        if (obj.value == -1) {
            cityEle.options.length = 0;
            areaEle.options.length = 0;
        }
        //获取值
        var val = obj.value;
        pIndex = obj.value;
        //获取ctiry
        var cs = cities[val];
        //获取默认区
        var as = areas[val][0];
        //先清空市
        cityEle.options.length = 0;
        areaEle.options.length = 0;
        for (var i = 0; i < cs.length; i++) {
            var op = new Option(cs[i], i);
            cityEle.options.add(op);
        }
        for (var i = 0; i < as.length; i++) {
            var op = new Option(as[i], i);
            areaEle.options.add(op);
        }
    }
    function chg2(obj) {
        var val = obj.selectedIndex;
        var as = areas[pIndex][val];
        areaEle.options.length = 0;
        for (var i = 0; i < as.length; i++) {
            var op = new Option(as[i], i);
            areaEle.options.add(op);
        }
    }

</script>

</html>
```

:::

### 跨域 1 (`window.name iframe` )

通过window.name 和iframe

```js
// 页面 a 中存储数据
  window.name = "var a = 12"
```

```js
// 页面 b 中通过 iframe 读取数据
    window.onload = function () {
        var iframe = document.createElement('iframe');
        iframe.src = "test3.html"//项目地址不能是本地地址，要 http：xxx
        iframe.style.display = 'none'
        document.body.appendChild(iframe);
        iframe.onload = function () {
            var vname = iframe.contentWindow.name
            eval(vname)
            console.log(a);
        }
    }
```

### 跨域 2 (`jsonp`)

```js
// 本机代码
    <script>
            window.callback = function (data) {
                console.log(data, "data"); // 使用参数
            }
    </script>
    <script type="text/javascript" src="http://127.0.0.1:5500/test/js.js"></script>
```

```js
// 远程服务器调用，并传参
callback("我的数据")
```

### 检测当前浏览器所在的环境

```js
    var os = function (){
    var ua = navigator.userAgent,
        isWindowsPhone = /(?:Windows Phone)/.test(ua),
        isSymbian = /(?:SymbianOS)/.test(ua) || isWindowsPhone,
        isAndroid = /(?:Android)/.test(ua),
        isFireFox = /(?:Firefox)/.test(ua),
        isChrome = /(?:Chrome|CriOS)/.test(ua),
        isTablet = /(?:iPad|PlayBook)/.test(ua) || (isAndroid && !/(?:Mobile)/.test(ua)) || (isFireFox && /(?:Tablet)/.test(ua)),
        isPhone = /(?:iPhone)/.test(ua) && !isTablet,
        isPc = !isPhone && !isAndroid && !isSymbian;
    return {
        isTablet: isTablet,
        isPhone: isPhone,
        isAndroid: isAndroid,
        isPc: isPc
    };
    }();

   if (os.isAndroid || os.isPhone) {
            alert("手机");
        } else if (os.isTablet) {
            alert("平板");
        } else if (os.isPc) {
            alert("电脑");
        } else {
            alert("其他类型 或 error")
        }
// 或
    //  switch (true) {
    //         case os.isAndroid:
    //         case os.isPhone:
    //             alert("手机");
    //             break;
    //         case os.isTablet:
    //             alert("平板");
    //             break;
    //         case os.isPc:
    //             alert("电脑");
    //             break;
    //         default:
    //             alert("其他 或 error")
    //             break;
    //     }
```

### 使用原生javascript给下面列表中的li节点绑定点击事件,点击时创建一个Object对象,兼容IE和标准浏览器

:::details

```js
<ul id="nav">
    <li><a href="http://11111">111</a></li>
    <li><a href="http://2222">222</a></li>
    <li><a href="http://333">333</a></li>
    <li><a href="http://444">444</a></li>
</ul>

Object:
{
    "index": 1,
    "name": "111",
    "link": "http://1111"
}
```

script:

```js
var EventUtil = {
    getEvent: function (event) {
        return event || window.event;
    },
    getTarget: function (event) {
        return event.target || event.srcElement;
    },
    // 返回注册成功的监听器，IE中需要使用返回值来移除监听器
    on: function (elem, type, handler) {
        if (elem.addEventListener) {
            elem.addEventListener(type, handler, false);
            return handler;
        } else if (elem.attachEvent) {
            function wrapper(event) {
                return handler.call(elem, event);
            };
            elem.attachEvent('on' + type, wrapper);
            return wrapper;
        }
    },
    off: function (elem, type, handler) {
        if (elem.removeEventListener) {
            elem.removeEventListener(type, handler, false);
        } else if (elem.detachEvent) {
            elem.detachEvent('on' + type, handler);
        }
    },
    preventDefault: function (event) {
        if (event.preventDefault) {
            event.preventDefault();
        } else if ('returnValue' in event) {
            event.returnValue = false;
        }
    },
    stopPropagation: function (event) {
        if (event.stopPropagation) {
            event.stopPropagation();
        } else if ('cancelBubble' in event) {
            event.cancelBubble = true;
        }
    }
};
var DOMUtil = {
    text: function (elem) {
        if ('textContent' in elem) {
            return elem.textContent;
        } else if ('innerText' in elem) {
            return elem.innerText;
        }
    },
    prop: function (elem, propName) {
        return elem.getAttribute(propName);
    }
};

var nav = document.getElementById('nav');

EventUtil.on(nav, 'click', function (event) {
    var event = EventUtil.getEvent(event);
    var target = EventUtil.getTarget(event);

    var children = this.children;
    var i, len;
    var anchor;
    var obj = {};

    for (i = 0, len = children.length; i < len; ++i) {
        if (children[i] === target) {
            obj.index = i + 1;
            anchor = target.getElementsByTagName('a')[0];
            obj.name = DOMUtil.text(anchor);
            obj.link = DOMUtil.prop(anchor, 'href');
        }
    }

    alert('index: ' + obj.index + ' name: ' + obj.name +
        ' link: ' + obj.link);
});
```

:::

### 编写一个函数实现form的序列化(即将一个表单中的键值序列化为可提交的字符串)

:::details

```html
    <form id="target">
        <select name="age">
            <option value="aaa">aaa</option>
            <option value="bbb" selected>bbb</option>
        </select>
        <select name="friends" multiple>
            <option value="qiu" selected>qiu</option>
            <option value="de">de</option>
            <option value="qing" selected>qing</option>
        </select>
        <input name="name" value="qiudeqing">
        <input type="password" name="password" value="11111">
        <input type="hidden" name="salery" value="3333">
        <textarea name="description">description</textarea>
        <input type="checkbox" name="hobby" checked value="football">Football
        <input type="checkbox" name="hobby" value="basketball">Basketball
        <input type="radio" name="sex" checked value="Female">Female
        <input type="radio" name="sex" value="Male">Male
    </form>


    <script>

    /**
     * 将一个表单元素序列化为可提交的字符串
     *
     * @param {FormElement} form 需要序列化的表单元素
     * @return {string} 表单序列化后的字符串
     */
    function serializeForm(form) {
      if (!form || form.nodeName.toUpperCase() !== 'FORM') {
        return;
      }

      var result = [];

      var i, len;
      var field, fieldName, fieldType;

      for (i = 0, len = form.length; i < len; ++i) {
        field = form.elements[i];
        fieldName = field.name;
        fieldType = field.type;

        if (field.disabled || !fieldName) {
          continue;
        } // enf if

        switch (fieldType) {
          case 'text':
          case 'password':
          case 'hidden':
          case 'textarea':
            result.push(encodeURIComponent(fieldName) + '=' +
                encodeURIComponent(field.value));
            break;

          case 'radio':
          case 'checkbox':
            if (field.checked) {
              result.push(encodeURIComponent(fieldName) + '=' +
                encodeURIComponent(field.value));
            }
            break;

          case 'select-one':
          case 'select-multiple':
            for (var j = 0, jLen = field.options.length; j < jLen; ++j) {
              if (field.options[j].selected) {
                result.push(encodeURIComponent(fieldName) + '=' +
                  encodeURIComponent(field.options[j].value || field.options[j].text));
              }
            } // end for
            break;

          case 'file':
          case 'submit':
            break; // 是否处理？

          default:
            break;
        } // end switch
      } // end for

        return result.join('&');
    }

    var form = document.getElementById('target');
    console.log(serializeForm(form));
    </script>
```

:::

## 编写一个函数将列表子元素顺序反转

:::details

```js
<ul id="target">
    <li>1</li>
    <li>2</li>
    <li>3</li>
    <li>4</li>
</ul>

<script>
    var target = document.getElementById('target');
    var i;
    var frag = document.createDocumentFragment();

    for (i = target.children.length - 1; i &gt;= 0; --i) {
        frag.appendChild(target.children[i]);
    }
    target.appendChild(frag);
</script>
```

:::

## 请实现一个Event类,继承自此类的对象都会拥有两个方法on,off,once和trigger

:::details

```js
    function Event() {
        if (!(this instanceof Event)) {
            return new Event();
        }
        this._callbacks = {};
    }
    Event.prototype.on = function (type, handler) {
        this_callbacks = this._callbacks || {};
        this._callbacks[type] = this.callbacks[type] || [];
        this._callbacks[type].push(handler);

        return this;
    };

    Event.prototype.off = function (type, handler) {
        var list = this._callbacks[type];

        if (list) {
            for (var i = list.length; i >= 0; --i) {
                if (list[i] === handler) {
                    list.splice(i, 1);
                }
            }
        }

        return this;
    };

    Event.prototype.trigger = function (type, data) {
        var list = this._callbacks[type];

        if (list) {
            for (var i = 0, len = list.length; i < len; ++i) {
                list[i].call(this, data);
            }
        }
    };

    Event.prototype.once = function (type, handler) {
        var self = this;

        function wrapper() {
            handler.apply(self, arguments);
            self.off(type, wrapper);
        }
        this.on(type, wrapper);
        return this;
    };
```

:::

## 请评价以下事件监听器代码并给出改进意见

:::details

```js
if (window.addEventListener) {
  var addListener = function (el, type, listener, useCapture) {
    el.addEventListener(type, listener, useCapture);
  };
}
else if (document.all) {
  addListener = function (el, type, listener) {
    el.attachEvent('on' + type, function () {
      listener.apply(el);
    });
  };
}
```

作用：浏览器功能检测实现跨浏览器DOM事件绑定

优点：

1. 测试代码只运行一次，根据浏览器确定绑定方法
2. 通过``listener.apply(el)``解决IE下监听器this与标准不一致的地方
3. 在浏览器不支持的情况下提供简单的功能，在标准浏览器中提供捕获功能

缺点：

1. document.all作为IE检测不可靠，应该使用if(el.attachEvent)
2. addListener在不同浏览器下API不一样
3. ``listener.apply``使this与标准一致但监听器无法移除
4. 未解决IE下listener参数event。 target问题

改进:

```js
var addListener;

if (window.addEventListener) {
  addListener = function (el, type, listener, useCapture) {
    el.addEventListener(type, listener, useCapture);
    return listener;
  };
}
else if (window.attachEvent) {
  addListener = function (el, type, listener) {
    // 标准化this，event，target
    var wrapper = function () {
      var event = window.event;
      event.target = event.srcElement;
      listener.call(el, event);
    };

    el.attachEvent('on' + type, wrapper);
    return wrapper;
    // 返回wrapper。调用者可以保存，以后remove
  };
}
```

:::

## 编写一个函数接受url中query string为参数

编写一个函数接受url中query string为参数,返回解析后的Object,query string使用application/x-www-form-urlencoded编码

:::details

```js
/**
 * 解析query string转换为对象，一个key有多个值时生成数组
 *
 * @param {String} query 需要解析的query字符串，开头可以是?，
 * 按照application/x-www-form-urlencoded编码
 * @return {Object} 参数解析后的对象
 */
function parseQuery(query) {
    var result = {};

    // 如果不是字符串返回空对象
    if (typeof query !== 'string') {
        return result;
    }

    // 去掉字符串开头可能带的?
    if (query.charAt(0) === '?') {
        query = query.substring(1);
    }

    var pairs = query.split('&');
    var pair;
    var key, value;
    var i, len;

    for (i = 0, len = pairs.length; i < len; ++i) {
        pair = pairs[i].split('=');
        // application/x-www-form-urlencoded编码会将' '转换为+
        key = decodeURIComponent(pair[0]).replace(/\+/g, ' ');
        value = decodeURIComponent(pair[1]).replace(/\+/g, ' ');

        // 如果是新key，直接添加
        if (!(key in result)) {
            result[key] = value;
        }
        // 如果key已经出现一次以上，直接向数组添加value
        else if (isArray(result[key])) {
            result[key].push(value);
        }
        // key第二次出现，将结果改为数组
        else {
            var arr = [result[key]];
            arr.push(value);
            result[key] = arr;
        } // end if-else
    } // end for

    return result;
}

function isArray(arg) {
    if (arg && typeof arg === 'object') {
        return Object.prototype.toString.call(arg) === '[object Array]';
    }
    return false;
}
/**
console.log(parseQuery('sourceid=chrome-instant&ion=1&espv=2&ie=UTF-8'));
 */
```

:::

## 解析一个完整的url,返回Object包含域与window.location相同

:::details

```js
/**
 * 解析一个url并生成window.location对象中包含的域
 * location:
 * {
 *      href: '包含完整的url',
 *      origin: '包含协议到pathname之前的内容',
 *      protocol: 'url使用的协议，包含末尾的:',
 *      username: '用户名', // 暂时不支持
 *      password: '密码',  // 暂时不支持
 *      host: '完整主机名，包含:和端口',
 *      hostname: '主机名，不包含端口'
 *      port: '端口号',
 *      pathname: '服务器上访问资源的路径/开头',
 *      search: 'query string，?开头',
 *      hash: '#开头的fragment identifier'
 * }
 *
 * @param {string} url 需要解析的url
 * @return {Object} 包含url信息的对象
 */
function parseUrl(url) {
    var result = {};
    var keys = ['href', 'origin', 'protocol', 'host',
                'hostname', 'port', 'pathname', 'search', 'hash'];
    var i, len;
    var regexp = /(([^:]+:)\/\/(([^:\/\?#]+)(:\d+)?))(\/[^?#]*)?(\?[^#]*)?(#.*)?/;

    var match = regexp.exec(url);

    if (match) {
        for (i = keys.length - 1; i >= 0; --i) {
            result[keys[i]] = match[i] ? match[i] : '';
        }
    }

    return result;
}
```

:::

## 完成函数getViewportSize返回指定窗口的视口尺寸

:::details

```js
/**
* 查询指定窗口的视口尺寸，如果不指定窗口，查询当前窗口尺寸
**/
function getViewportSize(w) {
    w = w || window;

    // IE9及标准浏览器中可使用此标准方法
    if ('innerHeight' in w) {
        return {
            width: w.innerWidth,
            height: w.innerHeight
        };
    }

    var d = w.document;
    // IE 8及以下浏览器在标准模式下
    if (document.compatMode === 'CSS1Compat') {
        return {
            width: d.documentElement.clientWidth,
            height: d.documentElement.clientHeight
        };
    }

    // IE8及以下浏览器在怪癖模式下
    return {
        width: d.body.clientWidth,
        height: d.body.clientHeight
    };
}
```

:::

## 完成函数getScrollOffset返回窗口滚动条偏移量

:::details

```js
    /**
     * 获取指定window中滚动条的偏移量，如未指定则获取当前window
     * 滚动条偏移量
     *
     * @param {window} w 需要获取滚动条偏移量的窗口
     * @return {Object} obj.x为水平滚动条偏移量,obj.y为竖直滚动条偏移量
     */
    function getScrollOffset(w) {
        w =  w || window;
        // 如果是标准浏览器
        if (w.pageXOffset != null) {
            return {
                x: w.pageXOffset,
                y: w.pageYOffset
            };
        }

        // 老版本IE，根据兼容性不同访问不同元素
        var d = w.document;
        if (d.compatMode === 'CSS1Compat') {
            return {
                x: d.documentElement.scrollLeft,
                y: d.documentElement.scrollTop
            }
        }

        return {
            x: d.body.scrollLeft,
            y: d.body.scrollTop
        };
    }

```

:::

## 现有一个字符串richText,是一段富文本

现有一个字符串richText,是一段富文本,需要显示在页面上.有个要求,需要给其中只包含一个img元素的p标签增加一个叫pic的class.请编写代码实现.可以使用jQuery或KISSY

:::details

```js
    function richText(text) {
        var div = document.createElement('div');
        div.innerHTML = text;
        var p = div.getElementsByTagName('p');
        var i, len;

        for (i = 0, len = p.length; i < len; ++i) {
            if (p[i].getElementsByTagName('img').length === 1) {
                p[i].classList.add('pic');
            }
        }

        return div.innerHTML;
    }
```

:::

## zhongzi

### 定时轮询下载接口

```js
import { CommonExport } from "../common.js";
export function handleExport(_this, params, ApiUrl) {
  let taskId;
  ApiUrl(params)
    .then((res) => {
      //从后端获取taskid
      taskId = res.data.taskId;
    })
    .then((res) => {
      let goto = function () {
        CommonExport().then((res) => {
          console.log(res.data.responseStatus); // 后台 给的状态
          if (res.data.responseStatus === 0) {
            setTimeout(() => {
              goto();
            }, 1000);
          } else if (res.data.responseStatus === 1) {
            _this.$message("下载成功");
            //下载公共方法
            _this.download(res.data.responseName);
          }
        });
      };
      goto();
    });
}
```

### 其他方法

```js
const baseUrl = process.env.VUE_APP_BASE_API;

// 日期格式化 1
export function parseTime(time, pattern) {
  if (arguments.length === 0 || !time) {
    return null;
  }
  const format = pattern || "{y}-{m}-{d} {h}-{i}-{s}";
  let date;
  if (typeof time === "object") {
    date = time;
  } else {
    if (typeof time === "string" && /^[0-9]+$/.test(time)) {
      time = parseInt(time);
    } else if (typeof time === "string") {
      time = time.replace(new RegExp(/-/gm), "/");
    }
    if (typeof time === "string" && time.toString().length === 10) {
      time = time * 1000;
    }
    date = new Date(time);
  }
  const formatObj = {
    y: date.getFullYear(),
    m: date.getMonth(),
    d: date.getDate(),
    h: date.getHours(),
    i: date.getMinutes(),
    s: date.getSeconds(),
    a: date.getDay(),
  };
  const time_str = format.replace(/{(y|m|d|h|i|s|a)+}/g, (result, key) => {
    let value = formatObj[key];
    //NOTE getDay() returns 0 on sunday
    if (key === "a") {
      return ["日", "一", "二", "三", "四", "五", "六"][vlaue];
    }
    if (result.length > 0 && value > 10) {
      value = "0" + value;
    }
    return value || 0;
  });
  return time_str;
}

// 日期格式化2


function parseTime(time, fm) {
        // 解析时间  time: 时间戳或者实践对象 fm: 格式 默认是{y}-{m}-{d} {h}:{i}:{s}
        if (arguments.length === 0) {
          return null;
        }
        const format = fm || "{y}-{m}-{d} {h}:{i}:{s}";
        let date;
        if (typeof time === "object") {
          date = time;
        } else {
          if (("" + time).length === 10) time = parseInt(time) * 1000;
          date = new Date(time);
        }
        const formatObj = {
          y: date.getFullYear(),
          m: date.getMonth() + 1,
          d: date.getDate(),
          h: date.getHours(),
          i: date.getMinutes(),
          s: date.getSeconds(),
          a: date.getDay(),
        };
        const time_str = format.replace(
          /{(y|m|d|h|i|s|a)+}/g,
          (result, key) => {
            let value = formatObj[key];
            if (key === "a")
              return ["一", "二", "三", "四", "五", "六", "日"][value - 1];
            if (result.length > 0 && value < 10) {
              value = "0" + value;
            }
            return value || 0;
          }
        );
        return time_str;
      }

      console.log(parseTime(new Date(), "{y}-{m}-{d}")); // 2021-05-12
      console.log(parseTime(new Date().getTime())); // 2021-05-12 17:30:21
      console.log(parseTime(new Date("2020-01-01"))); // 2020-01-01 08:00:00

//表单重置
export function restFrom(refName) {
  if (this.$refs[refName]) {
    this.$refs[refName] = resetFields();
  }
}

// 下载方法 通用(后端生成文件)
export function download(fileName) {
  window.location.href =
    baseUrl +
    "/common/download?fileName=" +
    encodeURI(fileName) +
    "&delete" +
    true;
}

// 字符串格式化 (%s)
export function sprintf(str) {
  var args = arguments,
    flag = true,
    i = 1;
  str = str.replace(/%s/g, function () {
    var arg = args[i++];
    if (typeof arg == "undefined") {
      flag = false;
      return "";
    }
    return arg;
  });
  return flag ? str : "";
}

// 转换字符串 undefined null 转换为 ''
export function praseStrEmpty(str) {
  if (!str || str === "undefined" || str === "null") {
    return "";
  }
  return str;
}

// 生成数字的随机数 @params e   @returns {string}
export function randomString(e) {
  e = e || 32;
  let t = "1234567890";
  a = t.length;
  n = "";
  for (let i = 0; i < e; i++) n += t.charAt(Math.floor(Math.random() * a));
  return n;
}
```

`element`的`table` 鼠标移入变色(修改颜色)

```css
    // 固定列背景色
    .el-table__fixed-body-wrapper tr.el-table__row td{
        background-color: #fff;
    }
    // 鼠标移入颜色
    .el-table__fixed-body-wrapper tr.el-table__row td,.el-table__body tbody tr.el-table__row.hover-row >td{
        background-color: #fff;
    }
```

### 自适应表格高度

本页面使用

```vue
<template id="temp">
  <!-- vue实例外创建 -->
  <div>
    <el-table :data="data" style="width: 100%" :max-height="tableHeight">
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
        // 初始表格高度
      tableHeight: 400,
    //   设置适应表格高度
      tableH: 450,
    };
  },

  created() {
    this.resetHeight();
  },
  mounted() {
    // 重置表格高度
    let _this = this;
    window.onresize = () => {
      if (_this.resizeFlag) {
        clearTimeout(_this.resizeFlag);
      }
      _this.resizeFlag = setTimeout(() => {
        _this.resetHeight();
        _this.resizeFlag = null;
      }, 100);
    };
  },
  methods: {
    // 重置方法
    resetHeight() {
      let tableH = 200;
      if (this.tableH) {
        tableH = ths.tableH;
      }
      let tableHeightDetail = window.innerHeight - tableH;
      if (tableHeightDetail <= 100 && this.tableH) {
        this.tableHeight = 100;
      } else if (tableHeightDetail <= 100) {
        this.tableHeight = window.innerHeight;
        console.log(this.tableHeight);
      } else {
        this.tableHeight = window.innerHeight - tableH;
        console.log(this.tableHeight);
      }
    },
  },
};
</script>
```

### 表格组件传参使用

父组件

```s
 <Editortable :tableOption="tableOption"></Editortable>
// ...
data() {
    return {
      tableOption: {
        tableH: 450, //设置适应表格高度
      },
    };
  },
```

子组件

```vue
<template id="temp">
  <!-- vue实例外创建 -->
  <div>
    <el-table :data="data" style="width: 100%" :max-height="tableHeight">
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {

    };
  },
  props() {
    tableOption: {
      type: Object;
    }
  },
  created() {
    this.resetHeight();
  },
  mounted() {
    // 重置表格高度
    let _this = this;
    window.onresize = () => {
      if (_this.resizeFlag) {
        clearTimeout(_this.resizeFlag);
      }
      _this.resizeFlag = setTimeout(() => {
        _this.resetHeight();
        _this.resizeFlag = null;
      }, 100);
    };
  },
  methods: {
    // 重置方法
    resetHeight() {
      let tableH = 200;
      if (this.tableOption.tableH) {
        tableH = this.tableOption.tableH;
      }
      let tableHeightDetail = window.innerHeight - tableH;
      if (tableHeightDetail <= 100 && this.tableOption.tableH) {
        this.tableHeight = 100;
      } else if (tableHeightDetail <= 100) {
        this.tableHeight = window.innerHeight;
        console.log(this.tableHeight);
      } else {
        this.tableHeight = window.innerHeight - tableH;
        console.log(this.tableHeight);
      }
    },
  },
};
</script>
```

## lenovo

- 获取当前日期

```js
    // 默认显示当前日期
      let date = new Date();
      state.currentDate = new Date(
        date.getFullYear(),
        date.getMonth(),
        date.getDate()
      );
```

## isstech

### 公共方法

- 过滤空参数并转为字符串

```js
//
function filterParams(obj) {
      let paramsObj = {};
      for (let i in obj) {
        if (obj[i] != "") {
          paramsObj[i] = obj[i];
        }
      }
      return JSON.stringify(paramsObj);
    }
```

### vue中公共方法挂载到Vue对象

1. 创建公共方法文件 `common.js`

```js
// common.js
export default {
  install(Vue) {
    // 公共方法 过滤空参数并转为字符串
    Vue.prototype.filterParams = function (obj) {
      let paramsObj = {};
      for (let i in obj) {
        if (obj[i] != "") {
          paramsObj[i] = obj[i];
        }
      }
      return JSON.stringify(paramsObj);
    }
  }
}
```

2. 在`main.js`中引入并实例化

```js
// main.js
import common from './utils/common.js' // 引入公共方法
Vue.use(common) // 将公共方法实例化
```

3. 在项目任意位置使用方法

```js
// index.vue
this.filterParams(this.screenForm)
```

### elementui + FormData 上传组件使用

- 基础版 手动上传文件

```html
    <el-upload
    class="upload"
    ref="upload"
    action="#"
    :accept="fileType"
    :file-list="fileList"
    :auto-upload="false"
    :on-change="handleChange"
    :on-exceed="handleExceed"
    :on-remove="handleRemove"
    multiple="multiple"
    :limit="4"
  >
    <el-button slot="trigger" size="small" type="primary"
      >选择文件</el-button
    >
    <div slot="tip" class="el-upload__tip">
      仅支持xlsx,docx,pdf,jpg,jpeg,png格式的最多4个文件，且单文件不超过10M
    </div>
    <!-- 手动上传 使用以下按钮或者在表单提交时调用上传附件事件 -->
    <el-button
      style="margin-left: 10px"
      size="small"
      type="success"
      @click="submitUpload"
      >上传到服务器</el-button
    >
  </el-upload>
```

```js
export default {
  name: "myhanderPage",
  data() {
    return {

      limitNum: 4, //上传个数
      fileType: ".xlsx,.xls,.doc,.docx,.jpg,.jpeg,.png,.pdf", //上传文件类型
      // 上传文件列表
      fileList: [],
      // 附件上传
      accessory: false,
      // 督办工单分页
    }
  },

  methods: {
    // 上传文件添加到 this.fileList （类似暂存数组里）
    handleChange(file, fileList) {
      this.fileList = fileList;
      //   // 这里限制不大于10M
      const FileSize = file.size / 1024 / 1024 < 10;
      // 判断上传的文件类型
      const testMsgArr = [
        "doc",
        "docx",
        "DOC",
        "DOCX",
        "pdf",
        "PDF",
        "xlsx",
        "XLSX",
        "xls",
        "XLS",
        "jpg",
        "JPG",
        "jpeg",
        "JPEG",
        "png",
        "PNG",
      ];
      let keys = file.name.substring(file.name.lastIndexOf(".") + 1);
      let testMsg = testMsgArr.some((item) => {
        return item == keys;
      });
      if (testMsg && FileSize) {
        this.$message({
          type: "success",
          message: `已选择 ${fileList.length} 个文件，最多选择 4 个附件！`,
        });
      } else {
        this.$message({
          type: "warning",
          message: "文件类型不支持或文件大小超出10M",
        });
        this.fileList.splice(this.fileList.length - 1, 1);
      }
    },
    // 删除某上传文件
    handleRemove(file, fileList) {
    // 删除后的列表的列表数据重新赋值给暂存数组
      this.fileList = fileList;
    },
    // 超出上传文件个数
    handleExceed() {
      this.$message.warning(
        `当前限制选择 4 个文件，已选择了 ${this.fileList.length} 个附件！`
      );
    },
    // 手动上传
    submitUpload() {
      let formData = new FormData();
      // 上传文件时的其他参数 id 用户名 ...
      formData.append("superviseTaskCode", this.taskForm.code);
      // 将上传列表中的文件挨个添加到 FormData 对象中
      for (let i = 0; i < this.fileList.length; i++) {
        formData.append("files", this.fileList[i].raw);
      }
      superviseUpload(formData)
        .then((res) => {
          // 根据后端返回的值判断是否上传成功
          if (res == true) {
            this.$message({
              type: "success",
              message: "提交成功！",
            });
          } else {
            this.$message({
              type: "error",
              message: "提交失败！",
            });
          }
        })
        .catch(() => {
          this.$message({
            type: "error",
            message: "提交或附件上传失败！",
          });
        });
    },
    // 督办任务提交按钮
    submitTaskForm(formName) {
      this.$refs[formName].validate((valid) => {
          // 上传附件
          this.submitUpload();
          // 提交表单
          this.$nextTick(() => {
            addTaskSupervise(params)
              .then((res) => {
              })
              .catch(() => {
                this.$message({
                  type: "error",
                  message: "失败！",
                });
              });
          });
      });
    },
  },
};
```

### FormData 简单使用(方法)

文件上传`formData`上传之前查看对象里的值

- 获取一个`form`表单对象

```js
let form = document.getElementById("form");
let formData = new FormData(form);
```

- 添加数据 `formdata.append(key,value)`

```js
formdata.append("a","a");
formdata.append("a","b");
formdata.append("a","c");
formdata.append("b","c");
```

- 删除数据 `formdata.delete(key);`

```js
formdata.delete("a");
```

- 设置/修改数据 `formdata.set(key,value)` 如果`key`不存在则新增一条数据，如果存在，则会修改对应的`value`值。

```js
formdata.set("a","b2");
```

- 获取(查看)数据 `formdata.get(key)`

```js
var formData = new FormData();
formData.append("a",'a');
formData.append("a",'b');
formData.append("a",'c');
formData.append("b",'b');
formData.append('c','c');
console.log(formData.getAll('a'));// ['a','b','c']
console.log(formData.get('b'));// b
console.log(formData.get('c'));// c
```

- 判断是否存在某条数据 `formdata.has(key)`,存在返回`true`，不存在返回`false`。

```js
formdata.append("a","b");
formdata.has("a");  // true
formdata.has("b");  // false
```
