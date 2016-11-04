/**
 * @author: @AngularClass
 */

require('ts-node/register');

var HtmlReporter = require('protractor-jasmine2-html-reporter')


module.exports.config = {
  baseUrl: 'http://localhost:3000/',

  // use `npm run test-e2e`
  specs: [
    'test/**/**.e2e.ts',
    'test/**/*.e2e.ts'
  ],
  exclude: [],

  framework: 'jasmine2',

  allScriptsTimeout: 110000,

  jasmineNodeOpts: {
    showTiming: true,
    showColors: true,
    isVerbose: false,
    includeStackTrace: false,
    defaultTimeoutInterval: 400000
  },
  directConnect: true,

  capabilities: {
    'browserName': 'chrome',
    'chromeOptions': {
      'args': ['show-fps-counter=true']
    }
  },

  onPrepare: function() {
    browser.ignoreSynchronization = true;

    jasmine.getEnv().addReporter(new HtmlReporter({
      savePath: 'reporters/e2e/',
      screenshotsFolder: 'screenshots',
      filePrefix: 'index'
    }));
  }
};
