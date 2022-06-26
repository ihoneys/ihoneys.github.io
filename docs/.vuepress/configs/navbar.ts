import type { NavbarGroup } from "vuepress-theme-gungnir";

const navbar = [
  //   // 同上，但是还可以设置成有下拉功能的子选项
  // {
  //   text: "Home",
  //   link: "/",
  //   icon: "fa-fort-awesome"
  // },
  {
    text: "前端基础",
    icon: "fa-paw",
    link: "/Frontend/",
    children: [
      { text: "HTML & H5", link: "/Frontend/HTML/HTML", icon: "co-html5" },
      {
        text: "CSS & C3",
        link: "/Frontend/CSS/css1",
        icon: "fa-css3-alt"
      },
      {
        text: "CSS 教程",
        link: "/Frontend/CSS2/css1",
        icon: "co-csswizardry"
      },
      {
        text: "JavaScript",
        link: "/Frontend/JS/js2",
        icon: "co-javascript"
      },
      { text: "ES6", link: "/Frontend/ES6/ES01", icon: "co-javascript" },
      {
        text: "Promise",
        link: "/Frontend/Promise/promise",
        icon: "co-javascript"
      },
      { text: "Ajax", link: "/Frontend/Ajax/Ajax", icon: "md-http-sharp" },
      {
        text: "Axios",
        link: "/Frontend/Axios/axios",
        icon: "md-http-sharp"
      },
      { text: "Class", link: "/Frontend/Class/class01" },
      { text: "跨域", link: "/Frontend/cross_Domain/cross_domain01" },
      {
        text: "TypeScript",
        link: "/Frontend/TS/ts1",
        icon: "co-typescript"
      },
      {
        text: "Webpack 4",
        link: "/Frontend/Webpack/webpack1",
        icon: "co-webpack"
      },
      { text: "HTTP", link: "/Frontend/http", icon: "md-http-sharp" },
      { text: "正则", link: "/Frontend/regex" },
      { text: "算法", link: "/Frontend/algorithm" },
      { text: "storage", link: "/Frontend/storage" },
      { text: "less", link: "/Frontend/less", icon: "co-less" },
      { text: "常用代码", link: "/Frontend/Piece/js2" }
    ]
  },
  {
    text: "前端框架",
    icon: "co-angular",
    children: [
      { text: "Vue2", link: "/Framework/Vue/vue2/vue01" },
      { text: "Vue3", link: "/Framework/Vue/vue3/vue3-1" },
      { text: "React", link: "/Framework/React/react01" },
      { text: "Wechat", link: "/Framework/Wechat/wechat" },
      { text: "项目", link: "/Project/project" }
    ]
  },
  //后端，暂未启用
  {
    text: "后端",
    children: [
      // { text: 'JAVA 的了解', link: '/Backend/JAVA' },
      { text: "Linux", link: "/Linux/debian" },
      { text: "MongoDB", link: "/Backend/Mongodb/mongodb1" },
      { text: "MySQL", link: "/Backend/Mysql/mysql01" },
      { text: "Node.js", link: "/Backend/Node/node2" },
      { text: "Express", link: "/Backend/express" },
      { text: "Docker", link: "/Backend/docker" },
      { text: "Api", link: "/Backend/api" }
    ]
  },
  {
    text: "工具",
    icon: "fa-tools",
    children: [
      { text: "git", link: "/Tools/git" },
      { text: "yarn", link: "/Tools/yarn" },
      { text: "npm", link: "/Tools/npm" },
      { text: "npm模块", link: "/Tools/npm_modules" },
      { text: "Node", link: "/Tools/node" },
      { text: "cmd", link: "/Tools/cmd" },
      { text: "nrm", link: "/Tools/nrm" },
      { text: "nvm", link: "/Tools/nvm" },
      { text: "pm2", link: "/Tools/pm2" },
      { text: "serve", link: "/Tools/serve" },
      { text: "MarkDown", link: "/Tools/markdown" },
      { text: "Svg", link: "/Tools/svg" },
      { text: "Terminal", link: "/Tools/terminal" },
      { text: "Trojan", link: "/Tools/Trojan" },
      { text: "vite", link: "/Tools/vite" },
      { text: "Eslint", link: "/Tools/eslint" },
      { text: "vuepress", link: "/Tools/vuepress" },
      { text: "升级依赖包", link: "/Tools/upgrade" },
      { text: "Typecho 安装建站", link: "/Tools/typecho" },
      { text: "VScode等配置文件", link: "/Tools/vscode" },
      { text: "Win子系统", link: "/Tools/wsl" }
    ]
  },
  {
    text: "其他",
    icon: "io-partly-sunny-sharp",
    children: [
      { text: "报错总结", link: "/Other/errorSummarize" },
      { text: "知识点", link: "/Other/knowledgePoint" },
      { text: "算法", link: "/Other/algorithm" },
      { text: "字典", link: "/Other/dict" },
      { text: "token 是什么", link: "/Other/token" },
      { text: "验证码 是什么", link: "/Other/verificationCode" },
      { text: "Chrome 使用", link: "/Other/Chrome" },
      { text: "浏览器和内核", link: "/Other/browserKernel" },
      { text: "URI & URL", link: "/Other/URIandURL" },
      { text: "Apache 是什么", link: "/Other/Apache" },
      { text: "Nginx 是什么", link: "/Other/nginx" },
      { text: "Jira 项目总结", link: "/Other/getJira" }
    ]
  },
  {
    text: "面试题",
    icon: "io-sunny-sharp",
    children: [
      { text: "CSS", link: "/Interview/CSS" },
      { text: "JavaScript", link: "/Interview/JavaScript" },
      { text: "React", link: "/Interview/React" },
      { text: "Vue", link: "/Interview/Vue" },
      { text: "Vue和React的区别", link: "/Interview/Vue-and-React-diff" },
      { text: "HTTP", link: "/Interview/HTTP" },
      { text: "性能优化", link: "/Interview/Perf" },
      { text: "Webpack", link: "/Interview/Webpack" },
      { text: "前端工程化", link: "/Interview/Engineering" },
      { text: "计算机基础知识", link: "/Interview/ComputerBase" },
      { text: "TypeScript", link: "/Interview/TypeScript" },
      { text: "Git", link: "/Interview/Git" },
      { text: "算法", link: "/Interview/算法" },
      { text: "移动端开发问题", link: "/Interview/Mobile" },
      { text: "前端其他问题", link: "/Interview/Other" }
    ]
  },
  {
    text: "Tags",
    link: "/tags/",
    icon: "fa-tag"
  },
  // {
  //   text: '留言',
  //   link: '/messages/',
  //   icon: 'reco-suggestion'
  // },
  {
    text: "关于",
    link: "/About/",
    icon: "co-about-me"
  },
  {
    text: "Github",
    link: "https://github.com/ihoneys",
    icon: "co-github"
  }
];

export default navbar;
