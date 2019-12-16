"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var BasePage_1 = require("./BasePage");
var constants_1 = require("../config/constants");
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        var _this = _super.call(this) || this;
        _this.email = protractor_1.element(protractor_1.by.id('mat-input-0'));
        _this.password = protractor_1.element(protractor_1.by.id('mat-input-1'));
        _this.button = protractor_1.element(protractor_1.by.xpath('//span[@class="mat-button-wrapper"]'));
        _this.loginform = protractor_1.element(protractor_1.by.css('body > app-root > app-login > div > div.login-content > div > div.login-form'));
        _this.usernameReqMessage = protractor_1.element(protractor_1.by.cssContainingText('.text text-danger ng-star-inserted', 'Username is required'));
        _this.passwordReqMessage = protractor_1.element(protractor_1.by.cssContainingText('.text text-danger ng-star-inserted', 'Password is required'));
        _this.EC = protractor_1.protractor.ExpectedConditions;
        return _this;
    }
    LoginPage.prototype.loginpage = function (email, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(this.EC.visibilityOf(this.email), constants_1.timeout.POLLING)];
                    case 1:
                        _a.sent();
                        // await this.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
                        // await this.email.sendKeys(protractor.Key.DELETE);
                        return [4 /*yield*/, this.email.sendKeys(email)];
                    case 2:
                        // await this.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
                        // await this.email.sendKeys(protractor.Key.DELETE);
                        _a.sent();
                        // await this.password.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
                        // await this.password.sendKeys(protractor.Key.DELETE);    
                        return [4 /*yield*/, this.password.sendKeys(password)];
                    case 3:
                        // await this.password.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
                        // await this.password.sendKeys(protractor.Key.DELETE);    
                        _a.sent();
                        return [4 /*yield*/, this.button.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(this.EC.visibilityOf(this.button), constants_1.timeout.POLLING)];
                    case 5:
                        _a.sent();
                        console.log('Login Sucessfull...');
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.incorrentUserName = function (incorrentName, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.email.sendKeys(incorrentName)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(password)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.button.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 5:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.incorrentPassword = function (userEmail, password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.email.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "a"))];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.email.sendKeys(protractor_1.protractor.Key.DELETE)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.email.sendKeys(userEmail)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "a"))];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(protractor_1.protractor.Key.DELETE)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(password)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.button.click()];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.withoutUserNameAndPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.email.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "a"))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.email.sendKeys(protractor_1.protractor.Key.DELETE)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.email.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.password.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "a"))];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(protractor_1.protractor.Key.DELETE)];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.loginform.click()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, this.button.click()];
                    case 8:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.onlyWithUsername = function (email) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.email.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "a"))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.email.sendKeys(protractor_1.protractor.Key.DELETE)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.email.sendKeys(email)];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "a"))];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(protractor_1.protractor.Key.DELETE)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.button.click()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.onlyWithPassword = function (password) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.email.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "a"))];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.email.sendKeys(protractor_1.protractor.Key.DELETE)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "a"))];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(protractor_1.protractor.Key.DELETE)];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.password.sendKeys(password)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.button.click()];
                    case 6:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.getHomePage = function () {
        this.goto("/");
        console.log("LoginPage");
    };
    return LoginPage;
}(BasePage_1.BasePage));
exports.LoginPage = LoginPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS5vYmplY3QuTW9kZWwvTG9naW5wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTZFO0FBQzdFLHVDQUFvQztBQUNwQyxpREFBOEM7QUFFOUM7SUFBK0IsNkJBQVE7SUFVbkM7UUFBQSxZQUNJLGlCQUFPLFNBUVY7UUFQRyxLQUFJLENBQUMsS0FBSyxHQUFFLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQzFDLEtBQUksQ0FBQyxRQUFRLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDN0MsS0FBSSxDQUFDLE1BQU0sR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMscUNBQXFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RFLEtBQUksQ0FBQyxTQUFTLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLDhFQUE4RSxDQUFDLENBQUMsQ0FBQztRQUNoSCxLQUFJLENBQUMsa0JBQWtCLEdBQUUsb0JBQU8sQ0FBQyxlQUFFLENBQUMsaUJBQWlCLENBQUMsb0NBQW9DLEVBQUUsc0JBQXNCLENBQUMsQ0FBQyxDQUFDO1FBQ3JILEtBQUksQ0FBQyxrQkFBa0IsR0FBRSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxpQkFBaUIsQ0FBQyxvQ0FBb0MsRUFBRSxzQkFBc0IsQ0FBQyxDQUFDLENBQUM7UUFDckgsS0FBSSxDQUFDLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDOztJQUM1QyxDQUFDO0lBRVksNkJBQVMsR0FBdEIsVUFBd0IsS0FBYyxFQUFDLFFBQWM7Ozs7NEJBQ2pELHFCQUFNLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUks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