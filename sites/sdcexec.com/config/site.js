const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const events = require('./events');

const sectionSearchIds = [
  57712, // Warehousing
  57713, // Transportation
  57715, // Risk/Compliance
  57714, // Sourcing & Procurement
  57718, // Sustainability
  57719, // Professional Development
  57716, // Software & Technology
  63981, // SCN Summit
];

module.exports = {
  gam,
  nativeX,
  dragonForms,
  navigation,
  events,
  company: 'AC Business Media, LLC',
  logos: {
    navbar: {
      src: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'http://www.facebook.com/sdcexec', target: '_blank' },
    { provider: 'twitter', href: 'http://www.twitter.com/sdcexec', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/supply-demand-chain-executive/', target: '_blank' },
    { provider: 'flipboard', href: 'https://flipboard.com/@SDCExec', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/channel/UCr_15DiCMiM_HkL-ujXzuvw', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/sdcexec', target: '_blank' },
  ],
  radix: {
    enabled: true,
    url: 'https://radix.base.parameter1.com',
    appId: '8d348e1f-b6d0-4065-8260-e1ffd63c7ab9',
    submissionFieldIds: [
      { name: 'comments', id: '5a0dccab3bab46eb316cd352' },
    ],
  },
  gtm: {
    containerId: 'GTM-KK6K97N',
  },
  mediaFuse: {
    id: 6064,
  },
  gcse: {
    id: '017383739850048358259:xbexltkrwbk',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#ec131c',
      logo: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60&auto=format,compress&q=70',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'Supply & Demand Chain Executive <noreply@baseplatform.io>',
    logo: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/logo/site_logo_og.png?h=60&auto=format,compress&q=70',
    bgColor: '#ec131c',
  },
  leaders: {
    enabled: true,
    title: 'Supply Chain Leaders',
    alias: 'leaders/2020',
    calloutValue: 'Leading Companies',
    header: {
      imgSrc: 'https://img.sdcexec.com/files/base/acbm/sdce/image/static/sdc-leaders.png?h=85&auto=format,compress&q=70',
    },
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
