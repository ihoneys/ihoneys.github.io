---
title: Vue 常用功能实现
date: 2020-12-12
sidebar: 'auto'
tags:
 - vue
---

## Vue中获取input输入框值的两种方式

### 1. 使用`ref`获取`input`框的值

```html
<template>
   <div>
       <div class="logininfor">
           <input type="text" placeholder="手机号码" ref="userphone">
           <input type="text" placeholder="密码" ref="userpass">
           <span @click="register()">注册</span>
       </div>
       <p>已有账号？去<span class="zhuce" @click="login()">登录</span></p>
   </div>
   <script>

export default {
    methods: {
            register(){
                window.console.log(this.$refs.userphone.value)
                window.console.log(this.$refs.userpass.value)
            }
        },
    }
</script>
</template>
```

### 2. 通过`v-model`双向绑定，完成`input`框值获取。

```html
<template>
   <div>
       <div class="logininfor">
           <input type="text" placeholder="手机号码" v-model="userphone">
           <input type="text" placeholder="密码" v-model="userpass">
           <span @click="register()">注册</span>
       </div>
       <p>已有账号？去<span class="zhuce" @click="login()">登录</span></p>
   </div>
</template>
<script>

export default {
     data(){
        return{
            userphone:"",
            userpass:""
        }
    },
    methods: {
            register(){
                window.console.log(this.userphone,this.userpass)
            }
        },
    }
</script>
```
