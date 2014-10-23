// Karma configuration
// Generated on Mon Nov 18 2013 20:21:59 GMT+0000 (GMT)

module.exports = function(config) {
  config.set({

    // base path, that will be used to resolve files and exclude
    basePath: '',


    // frameworks to use
    frameworks: ['mocha', 'chai', 'browserify'],


    // list of files / patterns to load in the browser
    files: [
      'test/unit/**/*.js',
      'test/fixtures/*.html',
      'test/helpers.js',
      { pattern: 'lib/**/*.js', included: false, served: false }
    ],

    preprocessors: {
      'index.js': ['browserify'],
      'test/*.js': ['browserify'],
      'test/unit/**/*.js': ['browserify'],
      '**/*.html': ['html2js']
    },

    // list of files to exclude
    exclude: [

    ],

    sauceLabs: {
      username: process.env.SAUCE_USERNAME,
      accessKey: process.env.SAUCE_ACCESS_KEY,
      testName: 'mailto',
      build: process.env.TRAVIS_BUILD_NUMBER,
      recordVideo: false,
      recordScreenshots: false,
      startConnect: true
    },

    browserify: {

    },


    // test results reporter to use
    // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
    reporters: ['progress'],


    // web server port
    port: 9876,


    // enable / disable colors in the output (reporters and logs)
    colors: true,


    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,


    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,


    // Start these browsers, currently available:
    // - Chrome
    // - ChromeCanary
    // - Firefox
    // - Opera (has to be installed with `npm install karma-opera-launcher`)
    // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
    // - PhantomJS
    // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
    browsers: ['PhantomJS', 'SauceIE9', 'SauceAndroid'],

    customLaunchers: {
      SauceIE9: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 7',
        version: 9
      },
      SauceAndroid: {
        base: 'SauceLabs',
        browserName: 'android',
        platform: 'Linux',
        version: '4.0'
      }
    },


    // If browser does not capture in given timeout [ms], kill it
    captureTimeout: 60000,


    // Continuous Integration mode
    // if true, it capture browsers, run tests and exit
    singleRun: false
  });
};
