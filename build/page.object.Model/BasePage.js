"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.goto = function (url) {
        protractor_1.browser.get(url);
    };
    BasePage.prototype.quitBrowser = function () {
        if (protractor_1.browser != null) {
            protractor_1.browser.quit();
        }
    };
    BasePage.prototype.getPageTitle = function () {
        return protractor_1.browser.getTitle();
    };
    BasePage.prototype.getCurrentUrl = function () {
        return protractor_1.browser.getCurrentUrl();
    };
    BasePage.prototype.get = function () {
        protractor_1.browser.get('/');
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZVBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlLm9iamVjdC5Nb2RlbC9CYXNlUGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHlDQUFxQztBQUVyQztJQUFBO0lBd0JBLENBQUM7SUFyQkcsdUJBQUksR0FBSixVQUFNLEdBQVk7UUFDZCxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNyQixDQUFDO0lBRUQsOEJBQVcsR0FBWDtRQUNJLElBQUksb0JBQU8sSUFBSSxJQUFJLEVBQUU7WUFDakIsb0JBQU8sQ0FBQyxJQUFJLEVBQUUsQ0FBQztTQUNsQjtJQUNMLENBQUM7SUFFRCwrQkFBWSxHQUFaO1FBQ0ksT0FBTyxvQkFBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQ0FBYSxHQUFiO1FBQ0ksT0FBTyxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ25DLENBQUM7SUFFRCxzQkFBRyxHQUFIO1FBQ0ksb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUNMLGVBQUM7QUFBRCxDQUFDLEFBeEJELElBd0JDO0FBeEJxQiw0QkFBUSJ9