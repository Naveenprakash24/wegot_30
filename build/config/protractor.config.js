"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var constants_1 = require("./constants");
var allureReporter = require('jasmine-allure-reporter');
exports.config = {
    allScriptsTimeout: 50000,
    getPageTimeout: 50000,
    seleniumServerJar: '../../node_modules/webdriver-manager/selenium/selenium-server-standalone-3.141.59.jar',
    seleniumServerStartTimeout: 20000,
    specs: ['../specs/Profilepagedemo.spec.js'],
    /* suites: {
        smoke: ['../specs/Loginpage.spec.js',
                '../specs/Profile.spec.js']
      },  */
    SELENIUM_PROMISE_MANAGER: false,
    onPrepare: function () {
        protractor_1.browser.get("http://w2dev3.venaqua.com/new/#/login");
        protractor_1.browser.manage().window().maximize();
        protractor_1.browser.manage().timeouts().implicitlyWait(constants_1.timeout.SHORT);
        protractor_1.browser.waitForAngularEnabled(true);
        protractor_1.browser.ignoreSynchronization = true;
        jasmine.getEnv().addReporter(new allureReporter({
            resultsDir: 'reports/allure-results'
        }));
        jasmine.getEnv().afterEach(function (done) {
            console.log('Status' + done);
            protractor_1.browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64');
                }, 'image/png')();
                done();
            });
        });
    },
    jasmineNodeOpts: {
        showColors: true,
        includeStackTrace: true,
        isVerbose: true,
        defaultTimeoutInterval: 3000000
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvdHJhY3Rvci5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9jb25maWcvcHJvdHJhY3Rvci5jb25maWcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx5Q0FBNkM7QUFDN0MseUNBQXNDO0FBR3RDLElBQUksY0FBYyxHQUFHLE9BQU8sQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDO0FBRTdDLFFBQUEsTUFBTSxHQUFZO0lBQ3pCLGlCQUFpQixFQUFFLEtBQUs7SUFDeEIsY0FBYyxFQUFFLEtBQUs7SUFDckIsaUJBQWlCLEVBQUcsdUZBQXVGO0lBQzNHLDBCQUEwQixFQUFDLEtBQUs7SUFDaEMsS0FBSyxFQUFFLENBQUMsa0NBQWtDLENBQUM7SUFDM0M7OztZQUdRO0lBQ1Isd0JBQXdCLEVBQUUsS0FBSztJQUMvQixTQUFTLEVBQUU7UUFDUCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyx1Q0FBdUMsQ0FBQyxDQUFDO1FBQ3JELG9CQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDckMsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxjQUFjLENBQUMsbUJBQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ3BDLG9CQUFPLENBQUMscUJBQXFCLEdBQUMsSUFBSSxDQUFDO1FBQ25DLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxjQUFjLENBQUM7WUFDaEQsVUFBVSxFQUFFLHdCQUF3QjtTQUN2QyxDQUFDLENBQUMsQ0FBQztRQUVKLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxTQUFTLENBQUMsVUFBQyxJQUFJO1lBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBQzdCLG9CQUFPLENBQUMsY0FBYyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsR0FBRztnQkFDaEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLFlBQVksRUFBRTtvQkFDbEMsT0FBQSxJQUFJLE1BQU0sQ0FBQyxHQUFHLEVBQUUsUUFBUSxDQUFDO2dCQUF6QixDQUF5QixFQUFDLFdBQVcsQ0FBQyxFQUFFLENBQUM7Z0JBQzdDLElBQUksRUFBRSxDQUFDO1lBQ1gsQ0FBQyxDQUFDLENBQUM7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUVULENBQUM7SUFDRyxlQUFlLEVBQUU7UUFDYixVQUFVLEVBQUUsSUFBSTtRQUNoQixpQkFBaUIsRUFBRyxJQUFJO1FBQ3hCLFNBQVMsRUFBRyxJQUFJO1FBQ2hCLHNCQUFzQixFQUFFLE9BQU87S0FDbEM7Q0FFSixDQUFDIn0=