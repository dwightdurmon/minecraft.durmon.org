module.exports = {
  title: 'Durmon Minecraft',
  tagline: 'A minecraft network',
  url: 'https://www.durmon.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'DurmonMC',
      logo: {
        alt: 'Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'news/', label: 'News', position: 'left'},
        {
          href: 'https://github.com/dwightdurmon/minecraft.durmon.org',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Style Guide',
              to: 'docs/',
            },
            {
              label: 'Second Doc',
              to: 'docs/doc2/',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'News',
              to: 'news/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/dwightdurmon/minecraft.durmon.org',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Durmon Minecraft. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/dwightdurmon/minecraft.durmon.org',
        },
        news: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/dwightdurmon/minecraft.durmon.org',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
