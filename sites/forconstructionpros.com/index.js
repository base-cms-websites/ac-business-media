const { set } = require('@parameter1/base-cms-object-path');
const startServer = require('@ac-business-media/refresh-theme/start-server');
const cufv1 = require('@ac-business-media/refresh-theme/redirect-handler-cufv1');
const algolia = require('@ac-business-media/refresh-theme/middleware/algolia');

const routes = require('./server/routes');
const siteConfig = require('./config/site');
const coreConfig = require('./config/core');
// reset head to before algolia

const { env } = process;
const { log } = console;

const algoliaConfig = {
  appId: env.ALGOLIA_APP_ID,
  apiKey: env.ALGOLIA_API_KEY,
  defaultIndex: env.ALGOLIA_DEFAULT_INDEX,
};

module.exports = startServer({
  rootDir: __dirname,
  coreConfig,
  siteConfig,
  routes,
  onStart: (app) => {
    set(app.locals, 'algoliaConfig', algoliaConfig);
    app.use(algolia(algoliaConfig));
  },
  redirectHandler: cufv1('update.forconstructionpros.com'),
}).then(() => log('Website started!')).catch(e => setImmediate(() => { throw e; }));
