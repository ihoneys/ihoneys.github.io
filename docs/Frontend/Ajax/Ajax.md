---
title: Ajax
date: 2019-02-21
 
categories:
 - 前端基础
tags:
 - 前端基础
 - Ajax
sticky: 5
publish: true
---

### ajax步骤

1. 创建异步对象

创建`XMLHttpRequest()`对象

```js
//
var xmlHttpRequest;  //定义一个变量,用于存放XMLHttpRequest对象
createXMLHttpRequest();   //调用创建对象的方法
//创建XMLHttpRequest对象的方法-- 设置浏览器兼容
function createXMLHttpRequest(){
    if(window.ActiveXObject) {//判断是否是IE浏览器
        xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");//创建IE的XMLHttpRequest对象
    }else if(window.XMLHttpRequest){
        //判断是否是Netscape等其他支持XMLHttpRequest组件的浏览器
        xmlHttpRequest = new XMLHttpRequest();//创建其他浏览器上的XMLHttpRequest对象
    }
// 如果浏览器既不支持ActiveX控件,也不支持XMLHttpRequest组件,那么就不会对xmlHttpRequest变量赋值.
```

2. 给异步对象绑定事件

设置响应`HTTP`请求状态变化的回调函数

`xmlHttpRequest.onreadystatechange=function(){}`

:::details 设置获取服务器返回数据的语句

- 设置获取服务器返回数据的语句
创建完`HTTP`请求之后，应该就可以将`HTTP`请求发送给`Web`服务器了。然而，发送`HTTP`请求的目的是为了接收从服务器中返回的数据。从创建`XMLHttpRequest`对象开始，到发送数据、接收数据、`XMLHttpRequest`对象一共会经历以下`5`中状态。

>
>1. 未初始化状态--`0`。在创建完`XMLHttpRequest`对象时，该对象处于未初始化状态，此时`XMLHttpRequest`对象的`readyState`属性值为`0`。
>2. 初始化状态--`1`。在创建完`XMLHttpRequest`对象后使用`open()`方法创建了`HTTP`请求时，该对象处于初始化状态。此时`XMLHttpRequest`对象的`readyState`属性值为`1`。
>3. 发送数据状态--`2`。在初始化`XMLHttpRequest`对象后，使用``send()``方法发送数据时，该对象处于发送数据状态，此时`XMLHttpRequest`对象的`readyState`属性值为`2`。
>4. 接收数据状态--`3`。`Web`服务器接收完数据并进行处理完毕之后，向客户端传送返回的结果。此时，`XMLHttpRequest`对象处于接收数据状态，`XMLHttpRequest`对象的`readyState`属性值为`3`。
>5. 完成状态--`4`。`XMLHttpRequest`对象接收数据完毕后，进入完成状态，此时`XMLHttpRequest`对象的`readyState`属性值为`4`。此时接收完毕后的数据存入在客户端计算机的内存中，可以使用`responseText`属性或`responseXml`属性来获取数据。

只有在`XMLHttpRequest`对象完成了以上`5`个步骤之后，才可以获取从服务器端返回的数据。因此，如果要获得从服务器端返回的数据，就必须要先判断`XMLHttpRequest`对象的状态。

`XMLHttpRequest`对象可以响应`onreadystatechange`事件，该事件在`XMLHttpRequest`对象状态改变时（也就是`readyState`属性值改变时）激发。因此，可以通过该事件调用一个函数，并在该函数中判断`XMLHttpRequest`对象的`readyState`属性值。如果`XMLHttpRequest`对象的`readyState`属性值等于`4`，表示异步调用过程完毕，就可以通过`XMLHttpRequest`对象的`responseText`属性或`responseXml`属性来获取数据。

```js
function getData(){
    //判断XMLHttpRequest对象的readyState属性值是否为4，如果为4表示异步调用完成
    if(xmlHttpRequest.readyState == 4) {
        //设置获取数据的语句
    }
}
```

但是，异步调用过程完毕，并不代表异步调用成功了，如果要判断异步调用是否成功，还要判断`XMLHttpRequest`对象的`status`属性值，只有该属性值为`200`，才表示异步调用成功，因此，要获取服务器返回数据的语句，还必须要先判断`XMLHttpRequest`对象的`status`属性值是否等于`200`，如以下代码所示：

```js
 if(xmlHttpRequst.status == 200) {
    document.write(xmlHttpRequest.responseText);//将返回结果以字符串形式输出
    //document.write(xmlHttpRequest.responseXML);//或者将返回结果以XML形式输出
 }
```

注意：如果`HTML`文件不是在`Web`服务器上运行，而是在本地运行，则`xmlHttpRequest.status`的返回值为`0`。因此，如果该文件在本地运行，则应该加上`xmlHttpRequest.status == 0`的判断。

通常将以上代码放在响应`HTTP`请求状态变化的函数体内，如以下代码所示：

```js
//定义函数
function getData(){
    //判断XMLHttpRequest对象的readyState属性值是否为4，如果为4表示异步调用完成
    if(xmlHttpRequest.readyState==4){
        if(xmlHttpRequest.status == 200 || xmlHttpRequest.status == 0){//设置获取数据的语句
            document.write(xmlHttpRequest.responseText);//将返回结果以字符串形式输出
            //docunment.write(xmlHttpRequest.responseXML);//或者将返回结果以XML形式输出
        }
    }
}
```

:::

```js

//设置当XMLHttpRequest对象状态改变时调用的函数，注意函数名后面不要添加小括号
xmlHttpRequest.onreadystatechange = getData;

//定义函数
function getData(){
    //判断XMLHttpRequest对象的readyState属性值是否为4，如果为4表示异步调用完成
    if(xmlHttpRequest.readyState==4){
        if(xmlHttpRequest.status == 200 || xmlHttpRequest.status == 0){//设置获取数据的语句
            document.write(xmlHttpRequest.responseText);//将返回结果以字符串形式输出
            //docunment.write(xmlHttpRequest.responseXML);//或者将返回结果以XML形式输出
        }
    }
}
```

3. 初始化异步请求对象

`open()`创建`HTTP`请求

创建了`XMLHttpRequest`对象之后，必须为`XMLHttpRequest`对象创建`HTTP`请求，用于说明`XMLHttpRequest`对象要从哪里获取数据。通常可以是网站中的数据,也可以是本地中其他文件中的数据。

创建`HTTP`请求可以使用`XMLHttpRequest`对象的`open()`方法,其语法代码如下所示:

```js
XMLHttpRequest.open(method,URL,flag,name,password);
```

参数如下:

- `method`：该参数用于指定`HTTP`的请求方法，一共有`get`、`post`、`head`、`put`、`delete`五种方法，常用的方法为`get`和`post`。

- `URL：`该参数用于指定`HTTP`请求的`URL`地址，可以是绝对`URL`，也可以是相对`URL`。

- `flag：`该参数为可选，参数值为布尔型。该参数用于指定是否使用异步方式。`true`表示异步、`false`表示同步，默认为`true`。

- `name：`该参数为可选参数，用于输入用户名。如果服务器需要验证，则必须使用该参数。

- `password：`该参数为可选，用于输入密码。若服务器需要验证，则必须使用该参数。

通常可以使用以下代码来访问一个网站文件的内容。

```js
// 例如
xmlHttpRequest.open("get","http://www.aspxfans.com/BookSupport/JavaScript/ajax.htm",true);
```

或使用以下代码来访问一个本地文件内容：

```js
xmlHttpRequest.open("get","ajax.htm",true);
```

>注意
>如果`HTML`文件放在`Web`服务器上，在`Netscape`浏览器中的`JavaScript`安全机制不允许与本机之外的主机进行通信。也就是说，使用`open()`方>法只能打开与`HTML`文件在同一个服务器上的文件。而在`IE`浏览器中则无此限制（虽然可以打开其他服务器上的文件，但也会有警告提示）。

4. 发送`HTTP`请求

在经过以上几个步骤的设置之后，就可以将`HTTP`请求发送到`Web`服务器上去了。发送`HTTP`请求可以使用`XMLHttpRequest`对象的`send()`方法，其语法代码如下所示：

```js
XMLHttpRequest.send(data);
```

其中`data`是个可选参数，如果请求的数据不需要参数，即可以使用`null`来替代。`data`参数的格式与在`URL`中传递参数的格式类似，以下代码为一个`send()`方法中的`data`参数的示例：

```js
name=myName&value=myValue
```

只有在使用`send()`方法之后，`XMLHttpRequest`对象的`readyState`属性值才会开始改变，也才会激发`readystatechange`事件，并调用函数。

5. 局部更新(使用接收的数据)

在通过`Ajax`的异步调用获得服务器端数据之后，可以使用`JavaScript`或`DOM`来将网页中的数据进行局部更新。

完整实例：

```html
<html>
<head>
<title>AJAX实例</title>
<script language="javascript" type="text/javascript">
    // 第一步 初始化异步对象
    var xmlHttpRequest;  //定义一个变量用于存放XMLHttpRequest对象
    //定义一个用于创建XMLHttpRequest对象的函数
    function createXMLHttpRequest(){
        if(window.ActiveXObject){//IE浏览器的创建方式
            xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
        }else if(windew.XMLHttpRequest){//Netscape浏览器中的创建方式
            xmlHttpRequest = new XMLHttpRequest();
        }
    }
    //响应HTTP请求状态变化的回调函数
    function httpStateChange(){
        if(xmlHttpRequest.readyState == 4){//判断异步调用是否成功,若成功开始局部更新数据
            if(xmlHttpRequest.status == 200||xmlHttpRequest.status == 0) {
                var node = document.getElementById("myDIv");//查找节点
                node.firstChild.nodeValue = xmlHttpRequest .responseText;//更新数据
            } else {//如果异步调用未成功,弹出警告框,并显示出错信息
                alert("error:HTTP状态码为:"+xmlHttpRequest.status + ",HTTP状态信息为:" + xmlHttpRequest.statusText);
            }
        }
    }
    // 元素中的按钮执行调用本函数 -- 异步调用服务器段数据
    function getData(name,value){
        createXMLHttpRequest();//创建XMLHttpRequest对象
        if(xmlHttpRequest!=null){
            // 第三步 创建HTTP请求
            xmlHttpRequest.open("get","ajax.text",true);
            // 第二步 绑定事件执行回调函数
            xmlHttpRequest.onreadystatechange = httpStateChange;//HTTP请求状态变化的函数
            // 第四步 发送请求
            xmlHttpRequest.send(null);
        }
    }
</script>
</head>
<body>
    <div id="myDiv">原数据</div>
    <input type = "button" value = "更新数据" onclick = "getData()">
</body>
</html>
```
