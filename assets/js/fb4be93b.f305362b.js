(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[654],{2122:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},9756:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}t.d(n,{Z:function(){return r}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function p(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?p(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)t=p[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),i=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},s=function(e){var n=i(e.components);return r.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,p=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=i(t),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||p;return t?r.createElement(g,o(o({ref:n},s),{},{components:t})):r.createElement(g,o({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var p=t.length,o=new Array(p);o[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<p;i++)o[i]=t[i];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},4805:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var r=t(2122),a=t(9756),p=(t(7294),t(3905)),o={title:"React propTypes/\u9ad8\u9636\u7ec4\u4ef6",date:new Date("2021-04-09T00:00:00.000Z"),tags:["react","propTypes","\u9ad8\u9636\u7ec4\u4ef6"]},l=void 0,c={unversionedId:"skill/react/react10",id:"skill/react/react10",isDocsHomePage:!1,title:"React propTypes/\u9ad8\u9636\u7ec4\u4ef6",description:"propTypes",source:"@site/docs/skill/react/react10.md",sourceDirName:"skill/react",slug:"/skill/react/react10",permalink:"/docs/skill/react/react10",version:"current",frontMatter:{title:"React propTypes/\u9ad8\u9636\u7ec4\u4ef6",date:"2021-04-09T00:00:00.000Z",tags:["react","propTypes","\u9ad8\u9636\u7ec4\u4ef6"]},sidebar:"skill",previous:{title:"React createContext \u4e0a\u4e0b\u6587",permalink:"/docs/skill/react/react09"},next:{title:"React \u4f18\u5316",permalink:"/docs/skill/react/react"}},i=[{value:"propTypes",id:"proptypes",children:[]},{value:"\u9ad8\u9636\u7ec4\u4ef6",id:"\u9ad8\u9636\u7ec4\u4ef6",children:[]}],s={toc:i};function u(e){var n=e.components,t=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("h2",{id:"proptypes"},"propTypes"),(0,p.kt)("p",null,"\u5c5e\u6027\u9a8c\u8bc1"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5f15\u5165")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"import PropTypes from 'prop-types';\n\n")),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},"\u4f7f\u7528")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"App.propTypes = { name: PropTypes.string }\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { Component } from 'react';\nimport { render } from 'react-dom';\nimport PropTypes from 'prop-types';\n\nclass App extends Component {\n    render() {\n        return <div>\n            1{this.props.n}\n        </div>\n\n    }\n}\nApp.propTypes = { name: PropTypes.string }\nrender(<App name='lilei' />, document.getElementById('root'))\n")),(0,p.kt)("h2",{id:"\u9ad8\u9636\u7ec4\u4ef6"},"\u9ad8\u9636\u7ec4\u4ef6"),(0,p.kt)("p",null,"\u5c31\u662f\u4e00\u79cd\u8bbe\u8ba1\u6a21\u5f0f\u3002"),(0,p.kt)("span",null,"\n    ",(0,p.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"3539166782"}),"\n  ",(0,p.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u6982\u5ff5\uff1a\u7ec4\u4ef6\u4f5c\u4e3a\u51fd\u6570\u7684\u53c2\u6570\u6216\u8005\u8fd4\u56de\u503c"),(0,p.kt)("li",{parentName:"ul"},"\u7279\u70b9\uff1a\u53ef\u4ee5\u5c01\u88c5\u516c\u7528\u903b\u8f91")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"class App1 extends React.Component {\n    render() {\n        return (\n            <div>\n                App1\n            </div>\n        );\n    }\n}\nlet LoggerApp = Logger(App1)\n\nclass App2 extends React.Component {\n    render() {\n        return (\n            <div>\n                App2\n            </div>\n        );\n    }\n}\nlet LoggerApp1 = Logger(App2)\n")),(0,p.kt)("p",null,"\u5c06",(0,p.kt)("inlineCode",{parentName:"p"},"App1"),"\u548c",(0,p.kt)("inlineCode",{parentName:"p"},"App2"),"\u5f53\u4f5c\u53c2\u6570\u4f20\u9012\u7ed9",(0,p.kt)("inlineCode",{parentName:"p"},"Logger()"),"\u7ec4\u4ef6\uff0c\u518d\u901a\u8fc7",(0,p.kt)("inlineCode",{parentName:"p"},"logger()"),"\u7ec4\u4ef6\u6e32\u67d3\u51fa\u6765"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u6848\u4f8b")),(0,p.kt)("span",null,"\n    ",(0,p.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-3487507367729662","data-ad-slot":"1964508460"}),"\n  ",(0,p.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { render } from 'react-dom';\n\nfunction Logger(OldCom) {\n    //\u53c2\u6570\u662f\u8001\u7684\u7ec4\u4ef6\uff08App1,App\uff09\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684\u7ec4\u4ef6\uff0c\u4f46\u662f\u6e32\u67d3\u7684\u8fd8\u662f\u8001\u7684\u7ec4\u4ef6\n    return class extends React.Component {\n        constructor() {\n            super();\n            this.start = Date.now()\n        }\n        componentDidMount() {\n            console.log(Date.now() - this.start + \"ms\");\n        }\n        render() {\n            // return React.createElement(OldCom, { ...this.props })\n            return <OldCom {...this.props} />\n        }\n    }\n\n}\nclass App1 extends React.Component {\n\n    render() {\n        return (\n            <div>\n                App1\n            </div>\n        );\n    }\n}\nlet LoggerApp = Logger(App1)\n\nclass App2 extends React.Component {\n\n    render() {\n        return (\n            <div>\n                App2\n            </div>\n        );\n    }\n}\nlet LoggerApp1 = Logger(App2)\n\nrender(<><LoggerApp /><LoggerApp1 /></>, window.root)\n")))}u.isMDXComponent=!0}}]);