import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'FallenDrops.com',
  tagline: 'Data Drops Leaked from the Lowerarchy',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://fallendrops.com',
  baseUrl: '/',

  organizationName: 'codexcommunion',
  projectName: 'fallendrops.com',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          editUrl:
            'https://github.com/codexcommunion/fallendrops.com/edit/main/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          editUrl:
            'https://github.com/codexcommunion/fallendrops.com/edit/main/',
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/social-card.jpg',
    navbar: {
      title: 'FallenDrops.com',
      logo: {
        alt: 'FallenDrops.com Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/drops', label: 'Drops', position: 'left' },
        { to: '/blog', label: 'News', position: 'left' },
        
        { to: '/about', label: 'About', position: 'left' },
        {
          type: 'search',
          position: 'right',
        },
        {
          href: 'https://github.com/codexcommunion/fallendrops.com',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Site',
          items: [
            { to: '/docs/drops', label: 'Drops', position: 'left' },
            { label: 'News', to: '/blog' },
            { label: 'Submit', to: '/submit' },
            { label: 'Donate', to: '/donate' },
            { label: 'Shop', to: '/shop' },
          ],
        },
        {
          title: 'Organization',
          items: [
            { label: 'About', to: '/about' },
            { label: 'Partners', to: '/partners' },
            { label: 'Codex Communion', href: 'https://github.com/codexcommunion' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'GitHub', href: 'https://github.com/codexcommunion/fallendrops.com' },
            { label: 'Discord (Coming Soon)', href: '#' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Codex Communion. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.nightOwl,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
