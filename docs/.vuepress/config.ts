import { defineUserConfig } from "vuepress";
import { gungnirTheme } from "vuepress-theme-gungnir";

import navbar from "./configs/navbar";
import sidebar from "./configs/sidebar";

const { searchPlugin } = require("@vuepress/plugin-search");

export default defineUserConfig({
  plugins: [
    searchPlugin({
      locales: {
        "/": {
          placeholder: "Search"
        },
        "/zh/": {
          placeholder: "搜索"
        }
      }
    })
  ],
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo.jpg`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo.jpg`
      }
    ],
    ["meta", { name: "application-name", content: "Lucas Notebook" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "Lucas Notebook" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" }
    ],
    ["link", { rel: "apple-touch-icon", href: `/img/logo.jpg` }],
    ["meta", { name: "theme-color", content: "#377bb5" }],
    ["meta", { name: "msapplication-TileColor", content: "#377bb5" }]
  ],

  theme: gungnirTheme({
    catalog: true,
    navbar: navbar, // 头部nav
    sidebar: sidebar, // 子 nav
    hitokoto: "https://v1.hitokoto.cn/?c=i", // 只返回诗词
    navbarTitle: "Lucas NoteBook",
    themePlugins: {
      mdPlus: {
        all: true
      },
      search: false, // 关闭默认主题的搜索
      giscus: {
        repo: "ihoneys/ihoneys.github.io",
        repoId: "R_kgDOHHPx8Q",
        category: "Q&A",
        categoryId: "DIC_kwDOHHPx8c4CP47P"
      }
    },
    pages: {
      tags: {
        subtitle: "",
        bgImage: {
          path: "/img/tags/tags.jpeg"
        }
      }
      // // 链接页配置
      // links: {
      //   // 可选：链接页副标题
      //   subtitle: "吼哇朋友们，这是链接页",

      //   // 可选：链接页封面图路径和蒙版
      //   bgImage: {
      //     path: "/img/tags/tags.jpeg",
      //     mask: "rgba(64, 118, 190, 0.5)"
      //   }
      // }
    },
    lastUpdated: true,
    // 首页个人信息配置
    personalInfo: {
      // 必须：名称，将在首页、移动端侧边栏和文章作者信息处显示
      name: "Lucas",

      // 必须：头像，将在首页和移动端侧边栏显示
      avatar: "/img/logo.jpg",

      // 必须：个人简介，将在首页显示
      description: "Hello World!",

      // 可选：社交平台账号，将在首页和移动端侧边栏显示
      sns: {
        github: "ihoneys", // Github
        // linkedin: "", // 领英
        // facebook: "", // Facebook
        twitter: "Leslie_moogg", // 推特
        zhihu: "abcdefg-5-23", // 知乎
        // weibo: "", // 新浪微博
        email: "ihoneys98987@gmail.com", // 邮箱
        juejin: {
          // 添加其他的社交平台
          icon: "juejin", // 社交平台的图标
          link: "https://juejin.cn/user/1433418895458343" // 主页链接
        }
      }
    },
    // 可选：首页本地封面图路径和蒙版
    homeHeaderImages: [
      {
        path: "/img/home-bg/1.jpg",
        mask: "rgba(40, 57, 101, .4)"
      },
      {
        path: "/img/home-bg/2.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/3.jpg",
        mask: "rgb(251, 170, 152, .2)"
      },
      {
        path: "/img/home-bg/4.jpg",
        mask: "rgb(251, 170, 152, .2)"
      }
    ],
    // 底部
    footer: `
    &copy; <a href="https://github.com/ihoneys" target="_blank">Lucas</a> 2022
    <br>
    Powered by <a href="https://vuepress.vuejs.org" target="_blank">VuePress</a> &
    <a href="https://github.com/Renovamen/vuepress-theme-gungnir" target="_blank">Gungnir</a>
  `
  })
});
