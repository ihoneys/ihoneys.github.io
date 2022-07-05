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
        "/Frontend/CSS/css0",
        "/Frontend/CSS/css1",
        "/Frontend/CSS/css2",
        "/Frontend/CSS/css3",
        "/Frontend/CSS/css5",
        "/Frontend/CSS/css6",
        "/Frontend/CSS/css7",
        "/Frontend/CSS/css8",
        "/Frontend/CSS/css9",
        "/Frontend/CSS/css12"
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
        "/Frontend/JS/js8",
        "/Frontend/JS/js9",
        "/Frontend/JS/js10",
        "/Frontend/JS/Array",
        "/Frontend/JS/Ajax"
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
        "/Frontend/ES6/ES05",
        "/Frontend/ES6/ES06",
        "/Frontend/ES6/ES07",
        "/Frontend/ES6/ES08",
        "/Frontend/ES6/ES09",
        "/Frontend/ES6/ES10",
        "/Frontend/ES6/ES11",
        "/Frontend/ES6/ES12",
        "/Frontend/ES6/ES13",
        "/Frontend/ES6/ES14",
        "/Frontend/ES6/ES16",
        "/Frontend/ES6/ES15",
        "/Frontend/ES6/handwriting_promise"
      ]
    },
    {
      text: "设计模式",
      collapsible: true,
      children: [
        "/Frontend/Design/design01",
        "/Frontend/Design/design02",
        "/Frontend/Design/design03",
        "/Frontend/Design/design04",
        "/Frontend/Design/design05",
        "/Frontend/Design/design06",
        "/Frontend/Design/design07",
        "/Frontend/Design/design08"
      ]
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
  "/Framework/Vue/": [
    {
      text: "Vue2相关",
      collapsible: true,
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
        "/Framework/Vue/vue2/fragment.md",
        "/Framework/Vue/vue2/vue-skill.md",
        "/Framework/Vue/vue2/vue-perf.md"
        // "/Framework/Vue/vue2/improvement.md",
      ]
    },
    {
      text: "Vue2 与 Vue3 全面对比",
      collapsible: true,
      children: ["/Framework/Vue/vue2-compare-3/index.md"]
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
    },
    {
      text: "React Hook API",
      collapsible: true,
      children: ["/Framework/React/Hook/useMemo"]
    },
    {
      text: "React 进阶",
      collapsible: true,
      children: [
        "/Framework/React/react16",
        "/Framework/React/react17",
        "/Framework/React/react18",
        "/Framework/React/react19"
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
  // linux系统
  "/Linux/": ["debian", "centos", "screen", "baota", "vim"],
  // 工具
  "/Tools/": ["git", "yarn", "markdown", "vite", "eslint", "vscode"],
  // 其他
  "/Other/": [
    "errorSummarize",
    "knowledgePoint",
    "URIandURL",
    "browserKernel",
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
    "build-perf",
    "Engineering",
    "ComputerBase",
    "TypeScript",
    "Git",
    "Coding",
    "Mobile",
    "Other"
  ]
};

export default sidebar;
