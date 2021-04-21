const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const specGuides = require('./spec-guides');
const dragonForms = require('./dragon-forms');
const events = require('./events');

const sectionSearchIds = [
  57144, // Drivetrains
  57181, // Electronics
  57225, // Engineering & Manufacturing
  57121, // Engines
  57167, // Fluid Power
  57212, // Operator Cab
  57240, // Trends
];

module.exports = {
  gam,
  nativeX,
  dragonForms,
  navigation,
  specGuides,
  events,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/OEMOffHighway', target: '_blank' },
    { provider: 'twitter', href: 'https://twitter.com/OEMOffHighway', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/oem-off-highway/', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCuAwQzKyZOqJolRTNYa0ZyA', target: '_blank' },
    { provider: 'flipboard', href: 'https://flipboard.com/@OEMOffHighway', target: '_blank' },
  ],
  radix: {
    enabled: true,
    url: 'https://radix.base.parameter1.com',
    appId: '3415bd29-da4c-463a-8c3f-fce02de88347',
    submissionFieldIds: [
      { name: 'comments', id: '580f6cc935ab46ff40b015b7' },
    ],
  },
  gtm: {
    containerId: 'GTM-KFFMFV4',
  },
  mediaFuse: {
    id: 6063,
  },
  gcse: {
    id: '017383739850048358259:aj4j1qbs7ai',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#ed1c24',
      logo: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60&auto=format,compress&q=70',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'OEM Off-Highway <noreply@baseplatform.io>',
    logo: 'https://img.oemoffhighway.com/files/base/acbm/static/OEM_Logo2019_Reversed_NoTag.png?h=60&auto=format,compress&q=70',
    bgColor: '#ed1c24',
  },
  // add back in to enable content page search inputs
  // sectionSearchIds,
  algoliaSearch: {
    // set to true to enable simple algolia search
    enabled: true,
    filters: {
      // set to true to enable algolia search with filters
      enabled: false,
      sectionIds: sectionSearchIds,
      contentTypes: {
        Article: 'Articles',
        Blog: 'Blogs',
        Company: 'Companies',
        Document: 'Documents',
        MediaGallery: 'Media Galleries',
        News: 'News',
        PressRelease: 'Press Releases',
        Podcast: 'Podcasts',
        Product: 'Products',
        Video: 'Videos',
        Webinar: 'Webinars',
        Whitepaper: 'White Papers',
      },
    },
  },
};
