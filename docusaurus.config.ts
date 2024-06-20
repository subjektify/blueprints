import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Subjektify Blueprints',
  tagline: 'Build dApps in minutes, not months',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://blueprints.subjektify.dev',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'subjektify', // Usually your GitHub org/user name.
  projectName: 'blueprints', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
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
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-card.jpg',
    navbar: {
      title: 'Blueprints',
      logo: {
        alt: 'Subjektify Blueprints Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: 'namespaces', label: 'Namespaces', position: 'left'},
        {to: 'compositions', label: 'Compositions', position: 'left'},
        {to: 'subjects', label: 'Subjects', position: 'left'},
        {
          href: 'https://github.com/subjektify/blueprints',
          position: 'right',
          className: "header-github-link",
          "aria-label": "GitHub"
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Blueprints',
          items: [
            {
              label: 'Namespaces',
              to: '/namespaces',
            },
            {
              label: 'Compositions',
              to: '/compositions',
            },
            {
              label: 'Subjects',
              to: '/subjects',
            },
          ],
        },
        {
          title: 'Documentation',
          items: [
            {
              label: 'Learn',
              href: 'https://subjektify.dev/docs/learn',
            },
            {
              label: 'Reference',
              href: 'https://subjektify.dev/docs/reference',
            },
            {
              label: 'Blog',
              href: 'https://subjektify.dev/blog',
            },
          ],
        },
        {
          title: 'Quick Links',
          items: [
            {
              label: 'Subjektify',
              href: 'https://subjektify.dev',
            },
            {
              label: 'Plugins',
              href: 'https://plugins.subjektify.dev',
            },
            {
              label: 'Subject Universe',
              href: 'https://universe.subjektify.dev',
            },
            {
              label: 'Subject Composer',
              href: 'https://composer.subjektify.dev',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/subjektify',
            },
            {
              label: 'Reddit',
              href: 'https://www.reddit.com/r/Subjektify',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/subjektify/plugins',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Subjektify Labs.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
