---
title: Nginx 是什么
date: 2019-05-04
 
categories:
 - 小知识
tags:
 - Nginx

---

[Nginx英文官网](http://nginx.org/)  [Nginx中文官网](https://www.nginx.cn/)

:::tip
Nginx 同 Apache 一样都是一种 Web 服务器。基于 REST 架构风格，以统一资源描述符（Uniform Resources Identifier）URI 或者统一资源定位符（Uniform Resources Locator）URL 作为沟通依据，通过 HTTP 协议提供各种网络服务。
:::

然而，这些服务器在设计之初受到当时环境的局限，例如当时的用户规模，网络带宽，产品特点等局限并且各自的定位和发展都不尽相同。这也使得各个 Web 服务器有着各自鲜明的特点。

Apache 的发展时期很长，而且是毫无争议的世界第一大服务器。它有着很多优点：稳定、开源、跨平台等等。

它出现的时间太长了，它兴起的年代，互联网产业远远比不上现在。所以它被设计为一个重量级的。

**但是它不支持高并发的服务器。在 Apache 上运行数以万计的并发访问，会导致服务器消耗大量内存。**

操作系统对其进行进程或线程间的切换也消耗了大量的 CPU 资源，导致 HTTP 请求的平均响应速度降低。

这些都决定了 Apache 不可能成为高性能 Web 服务器，**轻量级高并发服务器 Nginx 就应运而生了。**

俄罗斯的工程师 Igor Sysoev，他在为 Rambler Media 工作期间，使用 C 语言开发了 Nginx。

Nginx 作为 Web 服务器一直为 Rambler Media 提供出色而又稳定的服务。然后呢，Igor Sysoev 将 Nginx 代码开源，并且赋予自由软件许可证。

- 基于以下几点：Nginx火了

1. Nginx 使用基于事件驱动架构，使得其可以支持数以百万级别的 TCP 连接。
2. 高度的模块化和自由软件许可证使得第三方模块层出不穷（这是个开源的时代啊）。
3. Nginx 是一个跨平台服务器，可以运行在 Linux、Windows、FreeBSD、Solaris、AIX、Mac OS 等操作系统上。
4. 这些优秀的设计带来的极大的稳定性。

## Nginx 的用武之地

关于代理

1. 说到代理，首先我们要明确一个概念，所谓代理就是一个代表、一个渠道；此时就涉及到两个角色，一个是2. 被代理角色，一个是目标角色。
3. 被代理角色通过这个代理访问目标角色完成一些任务的过程称为代理操作过程；如同生活中的专卖店，客人到 adidas 专卖店买了一双鞋，这个专卖店就是代理，被代理角色就是 adidas 厂家，目标角色就是用户。
4. 简而言之，就是adidas老板找来专卖店这个代理来卖鞋子给客人这个目标角色。

- 正向代理：传说中的“翻墙”

说反向代理之前，我们先看看正向代理，正向代理也是大家最常接触到的代理模式，我们会从两个方面来说关于正向代理的处理模式，分别从软件方面和生活方面来解释一下什么叫正向代理。

在如今的网络环境下，我们如果由于技术需要要去访问国外的某些网站，此时你会发现位于国外的某网站我们通过浏览器是没有办法访问的。

此时大家可能都会用一个操作 FQ 进行访问，FQ 的方式主要是找到一个可以访问国外网站的代理服务器，我们将请求发送给代理服务器，代理服务器去访问国外的网站，然后将访问到的数据传递给我们！

上述这样的代理模式称为正向代理，正向代理最大的特点是客户端非常明确要访问的服务器地址；**服务器只清楚请求来自哪个代理服务器，而不清楚来自哪个具体的客户端；**正向代理模式屏蔽或者隐藏了真实客户端信息。

摘自知乎[看完这篇文章，还不懂nginx，算我输](https://zhuanlan.zhihu.com/p/152526491)

- Nginx 配置

```js
user  www www;
worker_processes auto;
error_log  /www/wwwlogs/nginx_error.log  crit;
pid        /www/server/nginx/logs/nginx.pid;
worker_rlimit_nofile 51200;

events
    {
        use epoll;
        worker_connections 51200;
        multi_accept on;
    }

# 原装配置
http


    {
        include       mime.types;
  #include luawaf.conf;

  include proxy.conf;

        default_type  application/octet-stream;

        server_names_hash_bucket_size 512;
        client_header_buffer_size 32k;
        large_client_header_buffers 4 32k;
        client_max_body_size 50m;

        sendfile   on;
        tcp_nopush on;

        keepalive_timeout 60;

        tcp_nodelay on;

        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
        fastcgi_buffer_size 64k;
        fastcgi_buffers 4 64k;
        fastcgi_busy_buffers_size 128k;
        fastcgi_temp_file_write_size 256k;
  fastcgi_intercept_errors on;

        gzip on;
        gzip_min_length  1k;
        gzip_buffers     4 16k;
        gzip_http_version 1.1;
        gzip_comp_level 2;
        gzip_types     text/plain application/javascript application/x-javascript text/javascript text/css application/xml;
        gzip_vary on;
        gzip_proxied   expired no-cache no-store private auth;
        gzip_disable   "MSIE [1-6]\.";

        limit_conn_zone $binary_remote_addr zone=perip:10m;
  limit_conn_zone $server_name zone=perserver:10m;

        server_tokens off;
        access_log off;

server
    {
        listen 888;
        server_name phpmyadmin;
        index index.html index.htm index.php;
        root  /www/server/phpmyadmin;
            location ~ /tmp/ {
                return 403;
            }

        #error_page   404   /404.html;
        include enable-php.conf;

        location ~ .*\.(gif|jpg|jpeg|png|bmp|swf)$
        {
            expires      30d;
        }

        location ~ .*\.(js|css)?$
        {
            expires      12h;
        }

        location ~ /\.
        {
            deny all;
        }

        access_log  /www/wwwlogs/access.log;
    }
include /www/server/panel/vhost/nginx/*.conf;
}


外网面板地址: http://149.28.28.126:8888/98867b04
内网面板地址: http://149.28.28.126:8888/98867b04
username: whmd9xsj
password: cbc9fd20

```
