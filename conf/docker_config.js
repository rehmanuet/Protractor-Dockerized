let HtmlReporter = require('protractor-beautiful-reporter');
exports.config = {
 onPrepare: async () => {
  browser.driver.manage().window().maximize();
  jasmine.getEnv().addReporter(new HtmlReporter({
   baseDirectory: 'reports/',
   screenshotsSubfolder: 'images',
   preserveDirectory: false,
   docName: 'Result.html',
   gatherBrowserLogs: false,
   takeScreenshots: true,
   fileNameDateSuffix: true,
   consolidate: true,
   consolidateAll: true,
   cleanDestination: true
  }).getJasmine2Reporter());
 },

 framework: 'jasmine',
 seleniumAddress: 'http://localhost:4444/wd/hub',
 specs: ['../test/tc1.js'],
//  specs: ['../test/tc1.js','../test/tc2.js','../test/tc3.js','../test/tc4.js'],
 capabilities: {
  browserName: 'chrome',
  chromeOptions: {
   args: ['--no-sandbox'],
  },
 },
 jasmineNodeOpts: {
  showColors: true,
  includeStackTrace: true,
  defaultTimeoutInterval: 1440000
 }
}