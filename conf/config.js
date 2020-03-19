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
    // baseUrl: 'http://seleniumhub:4444',

    // directConnect: false, //[@author AR: If enabled, Native machine's chrome will used for the automation]
  seleniumAddress: "http://localhost:4444/wd/hub", // [@author AR: Need to start Selenium-Server]


//   port:4444,
    specs: ['../test/assignment1.js'],
//   specs: ['../test/assignment1.js','../test/assignment2.js','../test/assignment3.js','../test/assignment4.js'],
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