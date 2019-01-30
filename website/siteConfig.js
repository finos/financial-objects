// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const siteConfig = {
  title: 'FINOS Financial Objects', // Title for your website.
  tagline: 'Drive adoption of new and existing Financial Objects Standards that support common industry workflows and use cases',
  url: 'https://fo-test.finos.org',
  cname: 'fo-test.finos.org',
  baseUrl: '/',
  projectName: 'finos-fo',
  organizationName: 'finos-fo',
  headerLinks: [
    {doc: 'fo-intro', label: 'Intro'},    
    {doc: 'fo-library', label: 'Object Library'},
    {page: 'getinvolved', label: 'Get Involved'}
  ],
  headerIcon: 'img/finos-white.png',
  footerIcon: 'img/finos.png',
  favicon: 'img/favicon/favicon.ico',
  colors: {
    primaryColor: '#00b5e2',
    secondaryColor: '#205C3B',
  },

  copyright: `Copyright © ${new Date().getFullYear()} FINOS - The Fintech Opensource Foundation`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  wrapPagesHTML: true,
  docsSideNavCollapsible: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/fo-logo-white.gif',
  twitterImage: 'img/fo-logo-white.gif',

  // Show documentation's last contributor's name.
  enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,

  // You may provide arbitrary config keys to be used as needed by your
  // template. For example, if you need your repo's URL...
  repoUrl: 'https://github.com/finos-fo/finos-fo'
};

module.exports = siteConfig;
