(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[8383],{2122:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},9756:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}t.d(n,{Z:function(){return r}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return f}});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function u(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),d=c(t),f=i,v=d["".concat(l,".").concat(f)]||d[f]||p[f]||o;return t?r.createElement(v,a(a({ref:n},s),{},{components:t})):r.createElement(v,a({ref:n},s))}));function f(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=d;var u={};for(var l in n)hasOwnProperty.call(n,l)&&(u[l]=n[l]);u.originalType=e,u.mdxType="string"==typeof e?e:i,a[1]=u;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},85:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return a},contentTitle:function(){return u},metadata:function(){return l},toc:function(){return c},default:function(){return p}});var r=t(2122),i=t(9756),o=(t(7294),t(3905)),a={title:"Vue \u5e38\u7528\u529f\u80fd\u5b9e\u73b0",date:new Date("2020-12-12T00:00:00.000Z"),sidebar:"auto",tags:["vue"]},u=void 0,l={unversionedId:"skill/vue/vue2/vue15",id:"skill/vue/vue2/vue15",isDocsHomePage:!1,title:"Vue \u5e38\u7528\u529f\u80fd\u5b9e\u73b0",description:"Vue\u4e2d\u83b7\u53d6input\u8f93\u5165\u6846\u503c\u7684\u4e24\u79cd\u65b9\u5f0f",source:"@site/docs/skill/vue/vue2/vue15.md",sourceDirName:"skill/vue/vue2",slug:"/skill/vue/vue2/vue15",permalink:"/docs/skill/vue/vue2/vue15",version:"current",frontMatter:{title:"Vue \u5e38\u7528\u529f\u80fd\u5b9e\u73b0",date:"2020-12-12T00:00:00.000Z",sidebar:"auto",tags:["vue"]},sidebar:"skill",previous:{title:"Vue \u6253\u5305\u90e8\u7f72",permalink:"/docs/skill/vue/vue2/vue14"},next:{title:"Vue vue.config.js",permalink:"/docs/skill/vue/vue2/vue16"}},c=[{value:"Vue\u4e2d\u83b7\u53d6input\u8f93\u5165\u6846\u503c\u7684\u4e24\u79cd\u65b9\u5f0f",id:"vue\u4e2d\u83b7\u53d6input\u8f93\u5165\u6846\u503c\u7684\u4e24\u79cd\u65b9\u5f0f",children:[{value:"1. \u4f7f\u7528<code>ref</code>\u83b7\u53d6<code>input</code>\u6846\u7684\u503c",id:"1-\u4f7f\u7528ref\u83b7\u53d6input\u6846\u7684\u503c",children:[]},{value:"2. \u901a\u8fc7<code>v-model</code>\u53cc\u5411\u7ed1\u5b9a\uff0c\u5b8c\u6210<code>input</code>\u6846\u503c\u83b7\u53d6\u3002",id:"2-\u901a\u8fc7v-model\u53cc\u5411\u7ed1\u5b9a\uff0c\u5b8c\u6210input\u6846\u503c\u83b7\u53d6\u3002",children:[]}]}],s={toc:c};function p(e){var n=e.components,t=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"vue\u4e2d\u83b7\u53d6input\u8f93\u5165\u6846\u503c\u7684\u4e24\u79cd\u65b9\u5f0f"},"Vue\u4e2d\u83b7\u53d6input\u8f93\u5165\u6846\u503c\u7684\u4e24\u79cd\u65b9\u5f0f"),(0,o.kt)("h3",{id:"1-\u4f7f\u7528ref\u83b7\u53d6input\u6846\u7684\u503c"},"1. \u4f7f\u7528",(0,o.kt)("inlineCode",{parentName:"h3"},"ref"),"\u83b7\u53d6",(0,o.kt)("inlineCode",{parentName:"h3"},"input"),"\u6846\u7684\u503c"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n   <div>\n       <div class="logininfor">\n           <input type="text" placeholder="\u624b\u673a\u53f7\u7801" ref="userphone">\n           <input type="text" placeholder="\u5bc6\u7801" ref="userpass">\n           <span @click="register()">\u6ce8\u518c</span>\n       </div>\n       <p>\u5df2\u6709\u8d26\u53f7\uff1f\u53bb<span class="zhuce" @click="login()">\u767b\u5f55</span></p>\n   </div>\n   <script>\n\nexport default {\n    methods: {\n            register(){\n                window.console.log(this.$refs.userphone.value)\n                window.console.log(this.$refs.userpass.value)\n            }\n        },\n    }\n<\/script>\n</template>\n')),(0,o.kt)("h3",{id:"2-\u901a\u8fc7v-model\u53cc\u5411\u7ed1\u5b9a\uff0c\u5b8c\u6210input\u6846\u503c\u83b7\u53d6\u3002"},"2. \u901a\u8fc7",(0,o.kt)("inlineCode",{parentName:"h3"},"v-model"),"\u53cc\u5411\u7ed1\u5b9a\uff0c\u5b8c\u6210",(0,o.kt)("inlineCode",{parentName:"h3"},"input"),"\u6846\u503c\u83b7\u53d6\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n   <div>\n       <div class="logininfor">\n           <input type="text" placeholder="\u624b\u673a\u53f7\u7801" v-model="userphone">\n           <input type="text" placeholder="\u5bc6\u7801" v-model="userpass">\n           <span @click="register()">\u6ce8\u518c</span>\n       </div>\n       <p>\u5df2\u6709\u8d26\u53f7\uff1f\u53bb<span class="zhuce" @click="login()">\u767b\u5f55</span></p>\n   </div>\n</template>\n<script>\n\nexport default {\n     data(){\n        return{\n            userphone:"",\n            userpass:""\n        }\n    },\n    methods: {\n            register(){\n                window.console.log(this.userphone,this.userpass)\n            }\n        },\n    }\n<\/script>\n')),(0,o.kt)("span",null,"\n    ",(0,o.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"1964508460"}),"\n  ",(0,o.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")))}p.isMDXComponent=!0}}]);