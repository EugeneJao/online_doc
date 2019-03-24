module.exports = {
  base: '',
  title: 'online_doc',
  description: '给予vuepress的在线文档生成工具',
  theme: 'cool',
  markdown: {
    lineNumbers: true,
    anchor: { permalink: false },
    toc: { includeLevel: [1, 2, 3, 4] },
    config: md => {
      // 使用更多的 markdown-it 插件!
      md.use(require("markdown-it-katex"));
      md.use(require("markdown-it-plantuml"))
    }
  },
  themeConfig: {
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '示例',
        link: '/demo/'
      }
    ],
    sidebar: [
      {
        title: '首页',
        collapsable: false,
        children: [
          '/'
        ]
      },
      {
        title: '示例',
        collapsable: false,
        children: [
          '/demo/',
          '/demo/md_base',
          '/demo/graph',
          '/demo/charts',
          '/demo/math'
        ]
      },
    ],
  }
};
