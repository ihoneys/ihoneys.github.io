import type { SidebarConfig } from "vuepress";

const sidebar: SidebarConfig = {
  // 侧边导航栏内容
  // 前端基础
  "/Frontend/": [
    {
      text: "HTML",
      collapsible: true, //是否折叠侧边栏
      children: [
        "/Frontend/HTML/HTML",
        "/Frontend/HTML/HTML_meta",
        "/Frontend/HTML/HTML_emmet",
        "/Frontend/HTML/HTML_render"
      ]
    },
    {
      text: "CSS",
      collapsible: true, //是否折叠侧边栏
      children: [
        "/Frontend/CSS/css1",
        "/Frontend/CSS/css2",
        "/Frontend/CSS/css3",
        // "/Frontend/CSS/css4",
        "/Frontend/CSS/css5",
        "/Frontend/CSS/css6",
        "/Frontend/CSS/css7",
        "/Frontend/CSS/css8",
        "/Frontend/CSS/css9",
        // "/Frontend/CSS/css10",
        // "/Frontend/CSS/css11",
        "/Frontend/CSS/css12"
      ]
    },
    {
      text: "CSS教程",
      collapsible: true, //是否折叠侧边栏
      children: [
        "/Frontend/CSS2/css0",
        "/Frontend/CSS2/css1",
        // "/Frontend/CSS2/css3",
        // "/Frontend/CSS2/css4",
        // "/Frontend/CSS2/css5",
        // "/Frontend/CSS2/css6",
        "/Frontend/CSS2/css7",
        // "/Frontend/CSS2/css8",
        "/Frontend/CSS2/css9",
        "/Frontend/CSS2/css10",
        "/Frontend/CSS2/css11",
        "/Frontend/CSS2/css12"
      ]
    },
    {
      text: "JavaScript",
      collapsible: true,
      children: [
        "/Frontend/JS/js1",
        "/Frontend/JS/js2",
        "/Frontend/JS/js3",
        "/Frontend/JS/js4",
        "/Frontend/JS/js5",
        "/Frontend/JS/js6",
        "/Frontend/JS/js7",
        "/Frontend/JS/js8",
        "/Frontend/JS/js9",
        "/Frontend/JS/js10",
        "/Frontend/JS/Array"
      ]
    },
    {
      text: "ES6",
      collapsible: true,
      children: [
        "/Frontend/ES6/ES01",
        "/Frontend/ES6/ES02",
        "/Frontend/ES6/ES03",
        "/Frontend/ES6/ES04",
        "/Frontend/ES6/ES05"
      ]
    },
    {
      text: "Promise",
      collapsible: true,
      children: [
        "/Frontend/Promise/promise",
        "/Frontend/Promise/promise2",
        "/Frontend/Promise/promise3",
        "/Frontend/Promise/promise4",
        "/Frontend/Promise/async"
      ]
    },
    {
      text: "Ajax",
      collapsible: true,
      children: ["/Frontend/Ajax/Ajax"]
    },
    {
      text: "Axios",
      collapsible: true,
      children: [
        "/Frontend/Axios/axios",
        "/Frontend/Axios/axios2",
        "/Frontend/Axios/axios3",
        "/Frontend/Axios/axios4",
        "/Frontend/Axios/axios5"
      ]
    },
    {
      text: "Class",
      collapsible: true,
      children: ["/Frontend/Class/class01"]
    },
    {
      text: "跨越",
      collapsible: true,
      children: ["/Frontend/cross_Domain/cross_domain01"]
    },
    {
      text: "TypeScript",
      collapsible: true,
      children: [
        "/Frontend/TS/ts1",
        "/Frontend/TS/ts2",
        "/Frontend/TS/ts3",
        "/Frontend/TS/ts4"
      ]
    },
    {
      text: "Webpack 4",
      collapsible: true,
      children: [
        "/Frontend/Webpack/webpack1",
        "/Frontend/Webpack/webpack2",
        "/Frontend/Webpack/webpack3",
        "/Frontend/Webpack/webpack4",
        "/Frontend/Webpack/webpackconfigjs"
      ]
    },
    {
      text: "常用代码片段",
      collapsible: true,
      children: [
        "/Frontend/Piece/css",
        "/Frontend/Piece/html",
        "/Frontend/Piece/js0",
        "/Frontend/Piece/js1",
        "/Frontend/Piece/js2",
        "/Frontend/Piece/compatibility",
        "/Frontend/Piece/example",
        "/Frontend/Piece/namespace",
        "/Frontend/Piece/namespace2",
        "/Frontend/Piece/html_string"
      ]
    }
  ],
  "/Framework/Vue/vue2/": [
    {
      text: "Vue2相关",
      children: [
        "/Framework/Vue/vue2/vue01.md",
        "/Framework/Vue/vue2/vue02.md",
        "/Framework/Vue/vue2/vue03.md",
        "/Framework/Vue/vue2/vue04.md",
        "/Framework/Vue/vue2/vue05.md",
        "/Framework/Vue/vue2/vue06.md",
        "/Framework/Vue/vue2/vue07.md",
        "/Framework/Vue/vue2/vue08.md",
        "/Framework/Vue/vue2/vue09.md",
        "/Framework/Vue/vue2/vue10.md",
        "/Framework/Vue/vue2/vue11.md",
        "/Framework/Vue/vue2/vue12.md",
        "/Framework/Vue/vue2/vue13.md",
        "/Framework/Vue/vue2/vue14.md",
        "/Framework/Vue/vue2/vue15.md",
        "/Framework/Vue/vue2/vue16.md",
        "/Framework/Vue/vue2/vue17.md",
        "/Framework/Vue/vue2/vue18.md",
        "/Framework/Vue/vue2/vuers-1.md",
        "/Framework/Vue/vue2/vuers-2.md",
        "/Framework/Vue/vue2/vuers-3.md",
        "/Framework/Vue/vue2/vuers-4.md",
        "/Framework/Vue/vue2/fragment.md"
      ]
    }
  ],
  "/Framework/Vue/vue3/": [
    {
      text: "Vue3",
      collapsible: true,
      children: ["/Framework/Vue/vue3/vue3-1"]
    }
  ],
  "/Framework/React/": [
    {
      text: "React",
      collapsible: true, //是否折叠侧边栏
      children: [
        "/Framework/React/react01",
        "/Framework/React/react02",
        "/Framework/React/react03",
        "/Framework/React/react04",
        "/Framework/React/react05",
        "/Framework/React/react06",
        "/Framework/React/react07",
        "/Framework/React/react08",
        "/Framework/React/react09",
        "/Framework/React/react10",
        "/Framework/React/react11",
        "/Framework/React/react12",
        "/Framework/React/react13",
        "/Framework/React/react14",
        "/Framework/React/react15",
        "/Framework/React/reactandvue",
        "/Framework/React/react",
        "/Framework/React/router_doc"
      ]
    }
  ],
  "/Framework/Wechat/": [
    {
      text: "微信小程序",
      collapsible: true, //是否折叠侧边栏
      children: [
        "/Framework/Wechat/wechat",
        "/Framework/Wechat/wechat2",
        "/Framework/Wechat/wechat3",
        "/Framework/Wechat/wechat4",
        "/Framework/Wechat/wechat5",
        "/Framework/Wechat/wechat6",
        "/Framework/Wechat/wechat7",
        "/Framework/Wechat/wechat8",
        "/Framework/Wechat/wechat9",
        "/Framework/Wechat/wechat10",
        "/Framework/Wechat/wechat11",
        "/Framework/Wechat/wechat12"
      ]
    }
  ],
  // 后端
  "/Backend/Node/": ["node1", "node2", "package", "exports"],
  "/Backend/Mongodb/": [
    "mongodb1",
    "mongodb2",
    "mongodb3",
    "mongodb4",
    "mongodb5",
    "mongodb6"
  ],
  "/Backend/Mysql/": ["mysql01", "mysql02", "mysql03", "mysql04"],
  "/Backend/": ["express", "docker", "api"],
  // 项目
  "/Project/": ["shopingapp", "admin", "project", "todolist"],
  // linux系统
  "/Linux/": ["debian", "centos", "screen", "baota", "vim"],
  // 工具
  "/Tools/": [
    "git",
    "yarn",
    "npm",
    "npm_modules",
    "node",
    "cmd",
    "nrm",
    "nvm",
    "pm2",
    "serve",
    "markdown",
    "svg",
    "terminal",
    "Trojan",
    "vite",
    "eslint",
    "vuepress",
    "upgrade",
    "typecho",
    "vscode",
    "wsl"
  ],
  // 其他
  "/Other/": [
    "errorSummarize",
    "knowledgePoint",
    "algorithm",
    "dict",
    "token",
    "verificationCode",
    "Chrome",
    "URIandURL",
    "browserKernel",
    "Apache",
    "nginx",
    "getJira"
  ],

  // 面试题
  "/Interview/": [
    "CSS",
    "JavaScript",
    "React",
    "Vue",
    "Vue-and-React-diff",
    "HTTP",
    "Perf",
    "Webpack",
    "Engineering",
    "ComputerBase",
    "TypeScript",
    "Git",
    "算法",
    "Mobile",
    "Other"
  ]
};

export default sidebar;
