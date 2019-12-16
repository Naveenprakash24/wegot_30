"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var loginData = require("../../data/profile_data.json");
var constants_js_1 = require("../config/constants.js");
var password1 = loginData.Changepassword.password1;
var password2 = loginData.Changepassword.password2;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;
var changePassword = /** @class */ (function () {
    function changePassword() {
        this.homeIcon = protractor_1.element(protractor_1.by.xpath("//button[@class='mat-button']"));
        this.changePassword = protractor_1.element(protractor_1.by.xpath("//a//span[contains(text(),'Change Password')]"));
        this.oldPassword = protractor_1.element(protractor_1.by.xpath("//div//input[@placeholder='Enter Your Existing Password']"));
        this.newPassword = protractor_1.element(protractor_1.by.xpath("//div//input[@placeholder='Enter Your New Password']"));
        this.confirmPassword = protractor_1.element(protractor_1.by.xpath("//div//input[@placeholder='Confirm Your New Password']"));
        this.submitButton = protractor_1.element(protractor_1.by.xpath('//div//button//span[contains(text(),"Submit")]'));
        this.username = protractor_1.element(protractor_1.by.xpath("//div//input[@placeholder='Username']"));
        this.password = protractor_1.element(protractor_1.by.xpath("//div//input[@placeholder='Password']"));
        this.SignIn = protractor_1.element(protractor_1.by.xpath("//button[@class='login-button mat-raised-button']"));
        this.EC = protractor_1.protractor.ExpectedConditions;
    }
    changePassword.prototype.ClickchangePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.homeIcon.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(constants_js_1.timeout.POLLING)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(this.EC.visibilityOf(this.changePassword), constants_js_1.timeout.POLLING)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.changePassword.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(constants_js_1.timeout.POLLING)];
                    case 5:
                        _a.sent();
                        this.oldPassword.sendKeys(password1);
                        return [4 /*yield*/, protractor_1.browser.sleep(constants_js_1.timeout.POLLING)];
                    case 6:
                        _a.sent();
                        this.newPassword.sendKeys(password2);
                        return [4 /*yield*/, protractor_1.browser.sleep(constants_js_1.timeout.POLLING)];
                    case 7:
                        _a.sent();
                        this.confirmPassword.sendKeys(password2);
                        return [4 /*yield*/, protractor_1.browser.sleep(constants_js_1.timeout.POLLING)];
                    case 8:
                        _a.sent();
                        this.submitButton.click();
                        return [2 /*return*/];
                }
            });
        });
    };
    changePassword.prototype.Newlogin = function (validemail, password2) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(constants_js_1.timeout.POLLING)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.username.sendKeys(validemail)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(constants_js_1.timeout.POLLING)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(password2)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(constants_js_1.timeout.POLLING)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.SignIn.click()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return changePassword;
}());
exports.changePassword = changePassword;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbmdlUGFzc3dvcmQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlLm9iamVjdC5Nb2RlbC9DaGFuZ2VQYXNzd29yZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTZFO0FBQzdFLHdEQUEwRDtBQUUxRCx1REFBaUQ7QUFDakQsSUFBTSxTQUFTLEdBQVMsU0FBVSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDNUQsSUFBTSxTQUFTLEdBQVMsU0FBVSxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUM7QUFDNUQsT0FBTyxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztBQUUxQztJQVlJO1FBQ0ksSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0JBQStCLENBQUMsQ0FBQyxDQUFBO1FBQ2xFLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLCtDQUErQyxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyREFBMkQsQ0FBQyxDQUFDLENBQUM7UUFDbEcsSUFBSSxDQUFDLFdBQVcsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQyxDQUFDO1FBQzNGLElBQUksQ0FBQyxlQUFlLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdEQUF3RCxDQUFDLENBQUMsQ0FBQztRQUNsRyxJQUFJLENBQUMsWUFBWSxHQUFDLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDLENBQUM7UUFDdEYsSUFBSSxDQUFDLFFBQVEsR0FBQyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENB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