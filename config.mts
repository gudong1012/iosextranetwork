import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "咕咚",
  description: "苹果上外网小教程",
  base: '/iosextranetwork/',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '教程开始', link: '/markdown-examples' }
    ],

    sidebar: [
      {
        text: '教程开始',
        items: [
          { text: '获取一个外区苹果🍎ID', link: '/markdown-examples' },
          { text: '在App Store里登录外区🍎ID', link: '/api-examples' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
