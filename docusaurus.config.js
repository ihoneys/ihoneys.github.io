const path = require("path");
const math = require("remark-math");
const katex = require("rehype-katex");
const adsense = require("./src/plugin/remark-adsense");

module.exports = {
  title: "🍉一枚小前端",
  // tagline: "",
  titleDelimiter: "-",
  url: "https://ihoneys.github.io",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  organizationName: "ihoneys", // Usually your GitHub org/user name.
  projectName: "ihoneys.github.io", // Usually your repo name.
  onBrokenLinks: "ignore",
  themeConfig: {
    image: "img/ihoneys.png",
    hideableSidebar: true,
    navbar: {
      title: "Lucas",
      logo: {
        alt: "Lucas",
        src: "img/ihoneys.png",
        srcDark: "img/ihoneys.png",
      },
      items: [
        {
          label: "随记",
          position: "right",
          to: "docs/skill/",
        },
        {
          label: "面经",
          position: "right",
          to: "docs/interview/",
        },
        {
          label: "日常开发工具",
          position: "right",
          to: "docs/tools/",
        },
      ],
    },
    algolia: {
      apiKey: "28928b88d121c0cff858bc122f43bff7",
      indexName: "lucas-blog",
      appId: "W5C57B27UD",
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: require("prism-react-renderer/themes/github"),
      darkTheme: require("prism-react-renderer/themes/oceanicNext"),
      defaultLanguage: "javascript",
    },
    // googleAnalytics: {
    //   trackingID: "xxx",
    //   anonymizeIP: true, // Should IPs be anonymized?
    // },
    // gtag: {
    //   trackingID: "xxx",
    //   // Optional fields.
    //   anonymizeIP: true, // Should IPs be anonymized?
    // },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // editUrl: "https://github.com/ihoneys",
          remarkPlugins: [math, adsense],
          rehypePlugins: [katex],
          // showLastUpdateTime: true,
        },
        blog: {
          path: "./blog",
          routeBasePath: "/",
          blogSidebarTitle: "近期文章",
          remarkPlugins: [math],
          rehypePlugins: [katex],
          feedOptions: {
            type: "all",
            title: "一枚小前端",
            copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
          },
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
        sitemap: {
          changefreq: "daily",
          priority: 0.5,
        },
      },
    ],
  ],
  // themes: ["@docusaurus/theme-live-codeblock"],
  plugins: [
    // "@docusaurus/plugin-ideal-image",
    path.resolve(__dirname, "./src/plugin/plugin-latest-docs"),
    "docusaurus2-dotenv",
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "secret-garden",
        routeBasePath: "lifestyle",
        path: "./lifestyle",
        feedOptions: {
          type: "all",
          title: "",
          copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
        },
      },
    ],
    // [
    //   "@easyops-cn/docusaurus-search-local",
    //   {
    //     hashed: true,
    //     // indexPages: true,
    //     blogRouteBasePath: "/",
    //     language: ["en", "zh"],
    //   },
    // ],
  ],
  stylesheets: [
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      type: "text/css",
    },
    {
      href: "/katex/katex.min.css",
      type: "text/css",
      integrity:
        "sha384-AfEj0r4/OFrOo5t7NnNe46zW/tFgW6x/bCJG8FqQCEo3+Aro6EYUG4+cU+KJWu/X",
      crossorigin: "anonymous",
    },
    {
      href: "https://fonts.font.im/css?family=Raleway:500,700&display=swap",
      type: "text/css",
      rel: "stylesheet",
    },
    // {
    //   href: "https://fonts.googleapis.com/css2?family=Fira+Code&display=swap",
    //   type: "text/css",
    //   rel: "stylesheet",
    // },
  ],
  i18n: {
    defaultLocale: "zh-CN",
    locales: ["zh-CN"],
    // locales: ["zh-CN", "en"],
    // localeConfigs: {
    //   "zh-CN": {
    //     label: "中文",
    //   },
    //   en: {
    //     label: "English",
    //   },
    // },
  },
};
