const navigation = require('./navigation');
const gam = require('./gam');
const nativeX = require('./native-x');
const dragonForms = require('./dragon-forms');
const events = require('./events');

const sectionSearchIds = [
  57737, // Risk/Compliance
  57733, // Safety & Security
  63980, // SCN Summit
  57732, // Software & Technology
  57734, // Sustainability
  57731, // Transportation
  57730, // Warehousing
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
      src: 'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=45&auto=format,compress&q=70',
      srcset: [
        'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=90&auto=format,compress&q=70 2x',
      ],
    },
    footer: {
      src: 'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=60&auto=format,compress&q=70',
      srcset: [
        'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=120&auto=format,compress&q=70 2x',
      ],
    },
  },
  socialMediaLinks: [
    { provider: 'facebook', href: 'https://www.facebook.com/FoodLogistics', target: '_blank' },
    { provider: 'twitter', href: 'https://www.twitter.com/FoodLogistics', target: '_blank' },
    { provider: 'linkedin', href: 'https://www.linkedin.com/company/food-logistics-magazine/', target: '_blank' },
    { provider: 'flipboard', href: 'https://flipboard.com/@FoodLogistics', target: '_blank' },
    { provider: 'youtube', href: 'https://www.youtube.com/user/FoodLogistics', target: '_blank' },
    { provider: 'instagram', href: 'https://www.instagram.com/foodlogisticsmag', target: '_blank' },
  ],
  radix: {
    enabled: true,
    url: 'https://radix.base.parameter1.com',
    appId: 'e81ec2b6-d2c7-496f-8923-c2f7e2cd05e7',
    submissionFieldIds: [
      { name: 'comments', id: '5a0db6553bab46b3436cd382' },
    ],
  },
  gtm: {
    containerId: 'GTM-MQ68SRH',
  },
  mediaFuse: {
    id: 6061,
  },
  gcse: {
    id: '017383739850048358259:-mlkn4aclei',
  },
  wufoo: {
    userName: 'acbm',
  },
  magazines: {
    description: '',
  },
  contactUs: {
    branding: {
      bgColor: '#1a93f9',
      logo: 'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=60&auto=format,compress&q=70',
    },
    to: 'jsage@acbusinessmedia.com',
  },
  inquiry: {
    enabled: true,
    directSend: true,
    sendTo: 'requestmoreinfo@acbusinessmedia.com',
    sendFrom: 'Food Logistics <noreply@baseplatform.io>',
    logo: 'https://img.foodlogistics.com/files/base/acbm/fl/image/static/logo/site_logo_large.png?h=60&auto=format,compress&q=70',
    bgColor: '#1a93f9',
  },
  leaders: {
    enabled: true,
    title: 'Food Logistics Leaders',
    alias: 'leaders/2020',
    calloutValue: 'Leading Providers',
    header: {
      imgSrc: 'https://img.foodlogistics.com/files/base/acbm/sdce/image/static/sdc-leaders.png?h=85&auto=format,compress&q=70',
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
