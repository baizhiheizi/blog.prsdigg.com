module.exports = {
  title: 'PRSDigg Blog',
  tagline: 'PRSDigg 官方博客站',
  url: 'https://baizhiheizi.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'baizhiheizi', // Usually your GitHub org/user name.
  projectName: 'blog.prsdigg.com', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'PRSDigg Blog',
      logo: {
        alt: 'PRSDigg Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: '文档',
          position: 'left',
        },
        {to: 'blog', label: '公告', position: 'left'},
        {
          href: 'https://github.com/baizhiheizi/blog.prsdigg.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '文档',
          items: [
            {
              label: '规则',
              to: 'docs/rules/',
            },
            {
              label: 'FAQ',
              to: 'docs/faq/',
            },
          ],
        },
        {
          title: '社区',
          items: [
            {
              label: 'Mixin Group',
              href: 'https://mixin-www.zeromesh.net/codes/d9c39065-5021-454b-b2f5-bd95116e906d',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/prsdigg',
            },
          ],
        },
        {
          title: '更多',
          items: [
            {
              label: '公告',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/baizhiheizi/prsdigg',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} PRSDigg Blog, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/baizhiheizi/blog.prsdigg.com/edit/master/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/baizhiheizi/blog.prsdigg.com/edit/master/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
