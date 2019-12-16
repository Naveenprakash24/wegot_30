import { browser, Config } from 'protractor';
import { timeout } from './constants';

declare const allure: any;
let allureReporter = require('jasmine-allure-reporter');

export let config : Config = {
    allScriptsTimeout: 50000,
    getPageTimeout: 50000,
    seleniumServerJar:  '../../node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    seleniumServerStartTimeout:20000,
    specs: ['../specs/Profilepagedemo.spec.js'],
    /* suites: {
        smoke: ['../specs/Loginpage.spec.js',
                '../specs/Profile.spec.js']
      },  */
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: () => {
        browser.get("http://w2dev3.venaqua.com/new/#/login");
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(timeout.SHORT);
        browser.waitForAngularEnabled(true);
        browser.ignoreSynchronization=true;
        jasmine.getEnv().addReporter(new allureReporter({
        resultsDir: 'reports/allure-results'
    }));

    jasmine.getEnv().afterEach((done) =>{
        console.log('Status' + done);
        browser.takeScreenshot().then((png) =>{
          allure.createAttachment('Screenshot', () =>
              new Buffer(png, 'base64'),'image/png')();
          done();
      });
      });

},
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace : true,
        isVerbose : true,
        defaultTimeoutInterval: 3000000
    }
  
};


    
