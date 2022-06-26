---
title: pm2
date: 2020-12-23
 
categories:
 - 工具
tags:
 - pm2
publish: true
# 置顶
sticky: 10
# 打赏
showSponsor: true
---
## 安装

```js
npm i -g pm2
//or
yarn global add pm2
```

- 安装最新版

```js
npm install pm2 @ latest -g
```

- 启动`app.js`应用程序

```js
pm2 start app.js
```

- 启动`vue`项目

```js
pm2 start npm -- run serve

```

- 添加变量启动程序(`esay-mock`，生产模式启动)

```js
NODE_ENV=production pm2 start app.js
```

- 启动(4个应用程序会自动进行负载均衡)

```js
pm2 start app.js -i 4  //后台运行pm2，启动4个app.js
```

>启动时的参数介绍
>
>```js
>// 指定应用名称
>--name <app_name>
>// 热更新 文件更改时监听并重新启动应用
>--watch
>// 设置应用重新加载的内存阈值
>--max-memory-restart <200MB>
>// 指定日志文件
>--log <log_path>
>// 将额外的参数传递给脚本
>-- arg1 arg2 arg3
>// 自动重启之间的延迟
>--restart-delay <delay in ms>
>// 带时间的前缀日志
>--time
>// 不要自动重启应用
>--no-autorestart
>// 指定cron以强制重启
>--cron <cron_pattern>
>// 附加到应用程序日志
>--no-daemon
>// 进程数/集群数
>-i 2
>```

- 监视每个 `node` 进程的 `CPU` 和内存的使用情况

```js
pm2 monit
```

- 当文件变化时自动重启应用

```js
pm2 start app.js –watch
```

- `pm2` 启动的所有的应用程序列表

```js
pm2 list
```

- 显示应用程序的所有信息

```js
pm2 show [app-name]
```

- 停止

```js
pm2 stop     <app_name|namespace|id|'all'|json_conf>
```

- 停止所有的应用程序

```js
pm2 stop all
```

- 重启

```js
pm2 restart  <app_name|namespace|id|'all'|json_conf>
```

- 重启所有应用

```js
pm2 restart all
```

- 关闭

```js
pm2 del  <app_name|namespace|id|'all'|json_conf>
```

- 零停机重载

热重装允许更新应用程序而不会造成任何停机：

```js
pm2 reload all
```

- 更新后，保存进程列表，退出旧的`pm2`并恢复所有进程

`pm2`更新是无缝的

```js
pm2 update
```
