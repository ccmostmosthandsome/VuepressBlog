import { defaultTheme, defineUserConfig } from 'vuepress'
import { searchPlugin } from '@vuepress/plugin-search'
import { componentsPlugin } from "vuepress-plugin-components"
module.exports = {
  // 导航栏LOGO
  title: 'Hello World',
  description: 'Hello World',
  // 注入到当前页面的 HTML <head> 中的标签
  head: [
    ['link', { rel: 'icon', href: '/images/favicon.ico' }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  base: '/', // 这是部署到github相关的配置 下面会讲
  markdown: {
    // lineNumbers: false, // 代码块显示行号,
    highligh: true, //是否启用高亮功能
    // preWrapper: true, //是否启用外包装层，上面两个选项的依赖项，启用上面两项必须启用这一项

  },
  locales: {
    '/': {
      selectLanguageName: '简体中文',
      title: 'Hello World',
      description: '繁星似海 熠熠生辉',
    },
    '/en/': {
      selectLanguageName: 'English',
      title: 'Comet documents',
      description: 'my book',
    },
  },

  theme: defaultTheme({
    logo: '/assets/img/logo.jpg',
    locales: {
      '/': {
        selectLanguageName: '简体中文',
        selectLanguageText: '选择语言/ZH',
        smoothScroll: true,
        navbar: [
          { text: '首页', link: '/' },
          {
            text: '知识库',
            children: [
              { text: 'FAQ', link: '/KnowledgeBase/FAQ/1.AWTK' },
            ]
          },
          {
            text: '了解更多',
            children: [
              { text: 'AWTK 官网', link: 'https://www.zlg.cn/index/pub/awtk.html' },
              { text: 'AWTK 云平台', link: 'https://awtk.zlg.cn/' },
              { text: 'GitHub 仓库', link: 'https://github.com/zlgopen/awtk' },
              { text: 'Gitee 仓库', link: 'https://gitee.com/zlgopen/awtk' },
            ]
          }
        ],
        sidebar: [
          {
            text: '常见问题（FAQ）',
            // link: '/KnowledgeBase/FAQ/',
            children: [
              { text: 'AWTK', link: '/KnowledgeBase/FAQ/1.AWTK' },
            ]
          },
          '/Home/home'
        ],
        sidebarDepth: 2,
        notFound: ["你搞错了吧"],
        backToHome: "去主页看看吧",
      },
      '/en/': {
        selectLanguageName: 'English',
        selectLanguageText: 'Language/EN',
        notFound: ["你搞错了吧"],
        backToHome: "去主页看看吧",
      }
    },

  }),
  plugins: [
    searchPlugin({
      locales: {
        '/': {
          placeholder: '搜索',
        },
        '/en/': {
          placeholder: 'search',
        },
      },
    }),
    componentsPlugin({
      components: [
          "AudioPlayer",
          "Badge",
          "BiliBili",
          "VideoPlayer",
          "PDF",
      ],
  }),
  ],

};