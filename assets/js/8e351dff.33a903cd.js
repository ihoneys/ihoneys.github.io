(self.webpackChunkzxuqian_cn=self.webpackChunkzxuqian_cn||[]).push([[993],{2122:function(e,n,t){"use strict";function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}t.d(n,{Z:function(){return r}})},9756:function(e,n,t){"use strict";function r(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}t.d(n,{Z:function(){return r}})},3905:function(e,n,t){"use strict";t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var i=r.createContext({}),p=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=p(e.components);return r.createElement(i.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),d=l,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||a;return t?r.createElement(f,o(o({ref:n},u),{},{components:t})):r.createElement(f,o({ref:n},u))}));function d(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,o=new Array(a);o[0]=s;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=e,c.mdxType="string"==typeof e?e:l,o[1]=c;for(var p=2;p<a;p++)o[p]=t[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}s.displayName="MDXCreateElement"},69:function(e,n,t){"use strict";t.r(n),t.d(n,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return i},toc:function(){return p},default:function(){return m}});var r=t(2122),l=t(9756),a=(t(7294),t(3905)),o={slug:"/react-api",layout:"Post",title:"React \u4e2d createElement \u548c cloneElement \u4e24\u4e2a API \u7684\u7528\u6cd5\u548c\u533a\u522b",subtitle:"\u5b66\u4e60 TS \u77e5\u8bc6\u4e4b\u540e\u505a\u9898\u5de9\u56fa",date:new Date("2021-04-28T00:00:00.000Z"),author:"Lucas",author_title:"\u4e00\u679a\u5c0f\u524d\u7aef",author_url:"https://github.com/ihoneys",author_image_url:"img/ihoneys.png",catalog:!0,tags:["React"]},c=void 0,i={permalink:"/react-api",source:"@site/blog/2021-04-28-createElement \u548c cloneElement.md",title:"React \u4e2d createElement \u548c cloneElement \u4e24\u4e2a API \u7684\u7528\u6cd5\u548c\u533a\u522b",description:"\u9996\u5148\u6211\u4eec\u6765\u770b\u770b\u8fd9\u4e24\u4e2a api \u7684\u8bed\u6cd5",date:"2021-04-28T00:00:00.000Z",formattedDate:"2021\u5e744\u670828\u65e5",tags:[{label:"React",permalink:"/tags/react"}],readingTime:.935,truncated:!0,prevItem:{title:"Vite + Vue3 \u9879\u76ee\u57fa\u64cd",permalink:"/vite-vue3"},nextItem:{title:"\u8bb0\u5f55\u4e00\u6b21\u6b63\u5219\u4f7f\u7528\u53d8\u91cf",permalink:"/js-regExp"}},p=[{value:"createElement",id:"createelement",children:[]},{value:"cloneElement",id:"cloneelement",children:[]},{value:"\u603b\u7ed3\uff08\u533a\u522b\uff09",id:"\u603b\u7ed3\uff08\u533a\u522b\uff09",children:[]}],u={toc:p};function m(e){var n=e.components,t=(0,l.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u9996\u5148\u6211\u4eec\u6765\u770b\u770b\u8fd9\u4e24\u4e2a api \u7684\u8bed\u6cd5"),(0,a.kt)("h3",{id:"createelement"},"createElement"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"React.createElement(type, [props], [...children]);\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"craeteElement"),"\u53c2\u6570\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e00\u4e2a\u53c2\u6570\uff1a\u5982\u679c\u662f\u7ec4\u4ef6\u7c7b\u578b\uff0c\u4f1a\u4f20\u5165\u5bf9\u5e94\u7684\u7c7b\u6216\u8005\u51fd\u6570\uff1b\u5982\u679c\u662f dom \u7c7b\u578b\uff0c\u4f20\u5165 div \u6216\u8005 span \u4e4b\u7c7b\u7684\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff1a\u4e00\u4e2a\u5bf9\u8c61\uff0c\u5728 dom \u7c7b\u578b\u4e2d\u4e3a\u6807\u7b7e\u5c5e\u6027\uff0c\u5728\u7ec4\u4ef6\u4e2d\u4e3a props\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5176\u4ed6\u53c2\u6570\uff1a\u4f9d\u6b21\u4e3a children\uff0c\u6839\u636e\u987a\u5e8f\u6392\u5217\u3002")),(0,a.kt)("p",null,"\u4e3e\u4e2a\u5217\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<div>\n    <TextComponent />\n    <div> createElement </div>\n    hello world!\n</div>\n")),(0,a.kt)("p",null,"\u4e0a\u9762\u7684\u4ee3\u7801\u4f1a\u88ab\u7f16\u8bd1\u4e3a\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'React.createElement(\n  "div",\n  null,\n  React.createElement(\n    TextComponent,\n    null,\n    React.createElement("div", null, "createElement"),\n    "hello world!"\n  )\n);\n')),(0,a.kt)("p",null,"\u4f7f\u7528 createElement \u521b\u5efa\u4e00\u4e2a dom \u5143\u7d20\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'React.createElement("div", null, "c");\n// \u4f1a\u5f97\u5230 -> <div>hello world!</div>\n')),(0,a.kt)("h3",{id:"cloneelement"},"cloneElement"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u662f React \u63d0\u4f9b\u7684\u4e00\u4e2a\u514b\u9686 API\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"React.createElement(element, [props], [...children]);\n")),(0,a.kt)("p",null,"\u4e3e\u4e2a\u4f8b\u5b50,\u4e0b\u9762 ",(0,a.kt)("inlineCode",{parentName:"p"},"MyContianer")," \u7236\u7ec4\u4ef6\u7ed9\u5b50\u7ec4\u4ef6\u6dfb\u52a0 ",(0,a.kt)("inlineCode",{parentName:"p"},"ParentState")," \uff0c\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"handleClick")," \u5c5e\u6027\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'function MyContianer(props) {\n  const [count, setCount] = useState(1);\n  const handleClick = () => {\n    console.log("\u5b50\u5143\u7d20\u7684\u70b9\u51fb\u4e8b\u4ef6");\n  };\n  // \u8fd9\u91cc\u662f\u7ed9\u5b50\u7ec4\u4ef6\u6dfb\u52a0 ParentState \u548c handleClick \u5c5e\u6027\n  const childrenProps = React.Children.map(props.children, (child) => {\n    console.log(child);\n    return React.cloneElement(child, {\n      ParentState: count,\n      handleClick,\n    });\n  });\n  return <div>{childrenProps}</div>;\n}\n\nfunction MySub(props) {\n  return (\n    <div onClick={props.handleClick}>\n      MySub \u7236\u7ec4\u4ef6\u7ed9\u6211\u7684 props\uff1a {props.ParentState}\n    </div>\n  );\n}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'export default function App() {\n  return (\n    <div className="App">\n      <h1>Hello CodeSandbox</h1>\n      <h2>Start editing to see some magic happen!</h2>\n      <MyContianer>\n        <MySub />\n      </MyContianer>\n    </div>\n  );\n}\n')),(0,a.kt)("p",null,"\u5176\u5b9e\u8fd9\u6837\u7684\u5199\u6cd5\u5c31\u662f\u8fd4\u56de\u5143\u7d20\u7684 props \u662f\u5c06\u65b0\u7684 props \u4e0e\u539f\u59cb\u5143\u7d20\u7684 props \u6d45\u5c42\u5408\u5e76\u540e\u7684\u7ed3\u679c\u3002"),(0,a.kt)("h3",{id:"\u603b\u7ed3\uff08\u533a\u522b\uff09"},"\u603b\u7ed3\uff08\u533a\u522b\uff09"),(0,a.kt)("p",null,"\u53ef\u4ee5\u5b8c\u5168\u7406\u89e3\u4e3a\uff0c\u4e00\u4e2a\u662f\u7528\u6765\u521b\u5efa element\uff0c\u53e6\u4e00\u4e2a\u662f\u7528\u6765\u4fee\u6539 element\uff0c\u5e76\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 React.element \u5bf9\u8c61\u3002"))}m.isMDXComponent=!0}}]);