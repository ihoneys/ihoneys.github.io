---
title: Storage cookie
date: 2020-12-31
 
categories:
 - 前端基础
tags:
 - regex正则

---
## storage 本地存储

- 相同

`localStorage`和`sessionStorage`一样都是用来存储客户端临时信息的对象。

他们均只能存储字符串类型的对象（虽然规范中可以存储其他原生类型的对象，但是目前为止没有浏览器对其进行实现）。

- 大小
  - 一说都是 5 M
- 不同

`localStorage`生命周期是永久，这意味着除非用户显示在浏览器提供的UI上清除`localStorage`信息，否则这些信息将永远存在。

`sessionStorage`生命周期为当前窗口或标签页，一旦窗口或标签页被永久关闭了，那么所有通过`sessionStorage`存储的数据也就被清空了。

不同浏览器无法共享`localStorage`或`sessionStorage`中的信息。相同浏览器的不同页面间可以共享相同的 `localStorage`（页面属于相同域名和端口），但是不同页面或标签页间无法共享`sessionStorage`的信息。这里需要注意的是，页面及标 签页仅指顶级窗口，如果一个标签页包含多个`iframe`标签且他们属于同源页面，那么他们之间是可以共享`sessionStorage`的。

- `localStorage`

```js
 let obj = { a: 1, b: 2 }
    // 设置(添加localStorage)
    localStorage.setItem('b', JSON.stringify(obj))
    // 或
    localStorage.name = "{a:1}" // "name": "{a:1}"
    // localStorage['key'] = "{b:2}"

    // 获取localStorage 并转为对象
    console.log(JSON.parse(localStorage.getItem('key')));
    // 清除一条数据
    localStorage.removeItem("a1")
    // 清除所有数据
    localStorage.clear();
    // 遍历localStorage
    for (var i = 0; i < localStorage.length; i++) {
      var name = localStorage.key(i);
      var value = localStorage.getItem(name);
      console.log(name, value);
    }

```

通过`getItem`或直接使用`localStorage["key"]`获取到的信息均为实际存储的副本。

例如：

```js
localStorage.key = {value1:"value1"}​;
localStorage.key.value1='a'​;
```

这里是无法​对实际存储的值产生作用的，下面的写法也不可以：
`​localStorage.getItem("key").value1="a";`

- `sessionStorage`

```js
let obj = { a: 1, b: 2 }
    // 设置(添加localStorage)
    sessionStorage.setItem('b', JSON.stringify(obj))
    sessionStorage.name = "{c:3}"  // "name": "{c:3}"
    // sessionStorage["key"] = "4"

    // 获取sessionStorage 并转为对象
    console.log(JSON.parse(sessionStorage.getItem('key')));
    // 清除一条数据
    sessionStorage.removeItem("a1")
    // 清除所有数据
    sessionStorage.clear();
    // 遍历sessionStorage
    for (var i = 0; i < sessionStorage.length; i++) {
      var name = sessionStorage.key(i);
      var value = sessionStorage.getItem(name);
      console.log(name, value);
    }
```

## cookie

Cookie内存大小受限

| 空         | IE 6.0         | IE 7.0 8.0     | Opera        | Fire Fox     | Safari   | Chrome       |
| :--------- | :------------- | :------------- | :----------- | :----------- | :------- | :----------- |
| Cookie个数 | 每个域名下20个 | 每个域名下50个 | 每个域名30个 | 每个域名50个 | 没有限制 | 每个域名53个 |
| Cookie大小 | 4095字节       | 4095字节       | 4096字节     | 4097字节     | 4097字节 | 4097字节     |

### 前端cookie

- 获取 `cookie`(获取所有)

```js
document.cookie
```

读取所有该域能获取到的cookie；格式为`key1:value1;key2:value2;`

- 设置 `cookie` (添加/修改)

```js
  document.cookie = "name={a:1};max-age=20"
  document.cookie = "name={a:1};expires=20"
  document.cookie = 'company=eoitek;max-age=100;path=/;secure'
```

- `domain`是我们设置`cookie`存放的域，如果没有设置则为当前主机的域。
- `path`是指`cookie`存储的目录，默认为当前文件的存储目录。
- `secure`，加入此配置项，则指定该`cookie`只能通过`https`协议进行传输。
- `max-age`是`cookie`的过期时间,是一个相对时间，值的单位是秒，是相对于`cookie`创建后多少秒才过期。
  - 如果maxAge属性为正数，则表示该Cookie会在maxAge秒之后自动失效。浏览器会将maxAge为正数的Cookie持久化，即写到对应的Cookie文件中。无论客户关闭了浏览器还是电脑，只要还在maxAge秒之前，登录网站时该Cookie仍然有效。
  - 如果maxAge为负数，则表示该Cookie仅在本浏览器窗口以及本窗口打开的子窗口内有效，关闭窗口后该Cookie即失效。maxAge为负 数的Cookie，为临时性Cookie，不会被持久化，不会被写到Cookie文件中。Cookie信息保存在浏览器内存中，因此关闭浏览器该 Cookie就消失了。Cookie默认的maxAge值为-1。
  - 如果maxAge为0，则表示删除该Cookie。Cookie机制没有提供删除Cookie的方法，因此通过设置该Cookie即时失效实现删除Cookie的效果。失效的Cookie会被浏览器从Cookie文件或者内存中删除 。

- `expires`与`max-age`相似的配置属性，值为日期对象的`toUTCString()`格式，即`Thu, 21 Sep 2018 06:10:38 GMT`，是指`cookie`过期的绝对时间。如果`max-age`和`expires`都存在，则`max-age`的优先级更高。

> `esponse.cookies("cookiename").expires`中expires的属性如下:
>
> `response.cookies("cookiename").expires=-1` 表示网页显示之后过期
>
> `response.cookies("cookiename").expires=0` 立即过期
>
> `response.cookies("cookiename").expires=data +10` `当前时间+10天数`表示在10天> 以后过期了.
>
> `response.cookies("cookiename").expires=10` 表示10分钟后过期..
>
> 单独表示是以分钟来做单位的，session的单位也是的，但是和date + 10 就不一样了 ，因为> date是日期，日期的单位是天，10当然就变成天了。
>
> 以上就是设置过期时间的，但是单位是“天”，就是说这个cookie过一天才会无效，如果想让它在半小> 时或更短的时间就无效要怎么做呢？
>
> ```js
> response.cookie("cookiename").expires=dateadd("n",30,now())
> //"n"单位为“分钟”
> // 或者
> response.cookie("cookiename").expires=dateadd("s",1800,now())
> //"s"单位为“秒”
> response.cookies("cookiename").expires = DateTime.MaxValue   表示永不过期
> ```
>

- 封装方法一

```js
/**
 * 设置cookie
 */
export function setCookie(name, value, hours = 24){
  let str = name + "=" + value;
  const time = new Date(new Date().getTime() + hours * 3600 * 1000).toString();  // tostring将时间转换成字符串
  // const time = new Date(new Date().getTime() + minutes * 60 * 1000).toGMTString();  // 世界时 tostring将时间转换成字符串
  str += "; expires=" + time;
  // 写入Cookie
  document.cookie = str;
}
/**
 * 获取 cookie 单独一条 cookie
 */
export function getCookie(name){
  const reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)"),
    arr = document.cookie.match(reg);
  if (arr !== null) {
    return arr[2];
  } else {
    return null;
  }
}
/**
 * 清除cookie
 */
export function clearCookie(name){
  setCookie(name, '', -1)
}
// 函数中的参数为，要判断的cookie名称
 function checkCookie(c_name){
    username=getCookie(c_name);
    if (username!=null && username!=""){
        // 如果cookie值存在，执行下面的操作。
        alert('Welcome again '+username+'!');
    }else{
        username=prompt('Please enter your name:',"");
        if (username!=null && username!=""){
            //如果cookie不存在，执行下面的操作。
            setCookie('username',username,365)
        }
    }
}
```

封装二

```js
// 函数中的参数分别为 cookie 的名称、值以及过期天数
function setCookie(c_name,value,expiredays){
    var exdate=new Date();
    exdate.setDate(exdate.getDate()+expiredays);
    document.cookie=c_name+ "=" +escape(value)+
    ((expiredays==null) ? "" : ";expires="+exdate.toGMTString())
}
setCookie('name','zzyn',1); // cookie过期时间为1天。

// 如果要设置过期时间以秒为单位
function setCookie(c_name,value,expireseconds){
    var exdate=new Date();
    exdate.setTime(exdate.getTime()+expireseconds * 1000);
    document.cookie=c_name+ "=" +escape(value)+
    ((expireseconds==null) ? "" : ";expires="+exdate.toGMTString())
}
setCookie('name','zzyn',3600);  //cookie过期时间为一个小时

// 函数中的参数为 要获取的cookie键的名称。
function getCookie(c_name){
    if (document.cookie.length>0){
        c_start=document.cookie.indexOf(c_name + "=");
        if (c_start!=-1){
            c_start=c_start + c_name.length+1;
            c_end=document.cookie.indexOf(";",c_start);
            if (c_end==-1){
                c_end=document.cookie.length;
            }

            return unescape(document.cookie.substring(c_start,c_end));
        }
     }

    return "";
}
var uname= getCookie('name');
console.log(uname);
// 函数中的参数为，要判断的cookie名称
 function checkCookie(c_name){
    username=getCookie(c_name);
    if (username!=null && username!=""){
        // 如果cookie值存在，执行下面的操作。
        alert('Welcome again '+username+'!');
    }else{
        username=prompt('Please enter your name:',"");
        if (username!=null && username!=""){
            //如果cookie不存在，执行下面的操作。
            setCookie('username',username,365)
        }
    }
}
```

注意事项

1. 保存中文`cookie`
如果需要保存中文`cookie`，则需要对中文进行`UTF-8`编解码，即通过`encodeUriComponent()`和`decodeUriComponent()`方法。
2. 保存图片和安全证书
`cookie`中也可以保存二进制图片和安全证书，需要对文件进行`base64`编码才能保存。不过建议最好不要将这类文件保存在`cookie`中。
3. `cookie`的更新
只要将`key；path；domain`一致，则可以通过改变`key`对应的`value`来更新`cookie`的值。
4. `cookie`的删除
`cookie`只能更新不能删除，如果想要删除一个`cookie`，则通过更新设置该`cookie`的`max-age`=0即可。
5. `cookie`的安全性
设置`cookie`时添加`secure`。

`cookie`由于其设置和取值都是通过字符串的形式进行的。因此，在原生`cookie`的操作比较麻烦，可通过一些`js`库来方便我们的操作，包括`cookies.js`和`js-cookie`

### 创建cookie(后端)

```js
Cookie cookie = new Cookie(String-cookieName,String-cookieValue);
```

\* 尽量不要存储中文
