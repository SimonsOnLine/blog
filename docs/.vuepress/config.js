module.exports = {
  title: "Ean的前端日志",
  description: "欢迎访问我的前端日志",
  ga: "UA-121061441-1",
  markdown: {
    lineNumbers: true
  },
  head: [
    ['link', { rel: 'icon', href: '/avatar.jpeg' }]
  ],
  base: "/blog/",
  themeConfig: {
    repo: "Ean-Liu/blog",
    nav: [
      {
        text: "博客",
        link: "/blog/"
      },
      {
        text: "面试题",
        link: "/interview/"
      },
      {
        text: "阅读",
        link: "/book/"
      },
    ],
    sidebar: {
      "/blog/": [
        {
          title: 'DevOps',
          collapsable: false,
          children: [
            "./dev/dev-webpack",
          ]
        },
        {
          title: 'Framework',
          collapsable: false,
          children: [
            
          ]
        },
        {
          title: '数据结构和算法',
          collapsable: false,
          children: [
            
          ]
        },
        {
          title: '源码',
          collapsable: false,
          children: [
            
          ]
        },
        {
          title: '网络协议',
          collapsable: false,
          children: [
            
          ]
        },
        {
          title: 'JavaScript',
          collapsable: false,
          children: [
            
          ]
        },
        {
          title: '总结思考',
          collapsable: false,
          children: [
            
          ]
        },
        {
          title: '其它',
          collapsable: false,
          children: [
            
          ]
        },
      ],
      "/interview/": [
        {
          title: '前端',
          collapsable: false,
          children: [
            "2019-9-1",
            "js",
            "css",
            "html",
            "framework"
          ]
        },
        {
          title: '编程基础',
          collapsable: false,
          children: [
            "base",
            "structure",
            "suanfa"
          ]
        },
      ],
      "/book/": [
        {
          title: '技术相关',
          collapsable: false,
          children: [
            
          ]
        },
        {
          title: '其他',
          collapsable: false,
          children: [
            "atomic-habits"
          ]
        },
      ],
    },
    lastUpdated: "更新时间",
    docsDir: "docs",
    editLinks: true,
    editLinkText: "本文源码地址"
  },
  plugins: {
    '@vuepress/medium-zoom': {
      selector: 'img',
      options: {
          margin: 16
      }
    },
    '@vuepress/back-to-top':true
  }
};
