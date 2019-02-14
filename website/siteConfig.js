// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.

const users = [
  { caption: 'William Quan, Co-Chair (JPM)', pinned: true },
  { caption: 'Hammad Akbar, Co-Chair (Citi)', pinned: true },
  { caption: 'Ayaz Haji, Participant (GS)' },
  { caption: 'Oli Bage, Participant (MS)' },
  { caption: 'Nilesh Bhattad, Participant (JPM)' },
  { caption: 'Peter Smulovic, Participant (MS)' },
  { caption: 'Johan Sandersson, Participant (FactSet)' },
  { caption: 'Hershal Shah, Participant (IHS Markit)' },
  { caption: 'Frank Tarsillo, Participant (IHS Markit)' },
  { caption: 'Bruce Skingle, Participant (Symphony)' },
  { caption: 'Mario Orphanou, Participant (Symphony)' },
  { caption: 'Lawrence Miller, Participant	(Symphony)' },
  { caption: 'Mike Harmon, Participant (Symphony)' },
  { caption: 'Aaron Williamson, Participant (FINOS)' },
  { caption: 'Rob Underwood, Facilitator (FINOS)' },
  { caption: 'Maurizio Pillitu, Facilitator (FINOS)' },
  { caption: 'Gabriele Columbro,Facilitator (FINOS)' },
  { caption: 'Nick Kolba, Participant (OpenFin)' },
  { caption: 'Espen Overbye, Participant (OpenFin)' },
  { caption: 'Jerry Savoretti, Participant	(Portware - FactSet)' },
  { caption: 'David Landisman, Participant	(Portware - FactSet)' },
  { caption: 'Justin Peterson, Participant	(TradeWeb)' },
  { caption: 'Svyatoslav (Slava) Kryukov, Participant (DB)' },
  { caption: 'Tim Kolecke, Participant	(Citadel)' },
  { caption: 'Mirjana Pantic, Participant (UBS)' },
  { caption: 'Aadi Thayyar, Participant (AllianceBernstein)' },
  { caption: 'John Lin, Participant (AllianceBernstein)' },
  { caption: 'Kiran Jawal, Participante (AllianceBernstein)' },
  { caption: 'Katia Banina, Participant (Refinitiv)' }
];

const siteConfig = {
  title: 'FINOS Financial Objects', // Title for your website.
  tagline: 'Drive adoption of new and existing Financial Objects Standards that support common industry workflows and use cases',
  url: 'https://fo.finos.org',
  cname: 'fo.finos.org',
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

  // If you have users set above, you add it here:
  users,

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

  twitterUsername: 'finos',
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
