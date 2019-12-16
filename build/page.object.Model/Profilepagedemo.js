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
var constants_1 = require("../config/constants");
var Profilepagedemo = /** @class */ (function () {
    function Profilepagedemo() {
        this.XPATH_FLOATING_LIST_OPTIONS = "//div[@id='mat-autocomplete-2']//mat-option/span[contains(., '$OPTION')]";
        this.profilePag = protractor_1.element(protractor_1.by.xpath('//mat-list-item//span[@class="icon icon-profile"]'));
        this.addProfile = protractor_1.element(protractor_1.by.xpath("//mat-sidenav-content//button//mat-icon[contains(text(),'add')]"));
        this.AddUserProfile = protractor_1.element(protractor_1.by.xpath("//app-add-user-dialog//h1[contains(@id,'mat-dialog-title')]"));
        this.txtChooseBlock = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Choose Block']"));
        this.txtChooseApart = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Choose Apartment']"));
        this.txtEnterUserName = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter Name']"));
        this.txtEnterEmail = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter Email']"));
        this.txtEnterPhoneNo = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter PhoneNo']"));
        this.txtEnterSqft = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter Sq.ft']"));
        this.btnAdd = protractor_1.element(protractor_1.by.xpath("//mat-dialog-actions/button[@type='submit']"));
        this.getAddUserProfile = protractor_1.element(protractor_1.by.xpath("//app-add-user-dialog//h1[contains(@id,'mat-dialog-title')]"));
        this.selectIconRow = protractor_1.element(protractor_1.by.xpath("//mat-card-content//table//tbody//tr//td)[7]//button"));
        this.lstColTabUser = protractor_1.element(protractor_1.by.xpath("//mat-card-content//table/thead/tr/th)[1]//button"));
        this.snackBarClose = protractor_1.element(protractor_1.by.id("mat-input-2"));
        this.snackBarGetTxt = protractor_1.element(protractor_1.by.xpath("//snack-bar-container//simple-snack-bar//span)[1]"));
        //span//mat-icon[contains(text(),'more_vert')]"
        this.PaneEditbtn = protractor_1.element(protractor_1.by.xpath("//div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']"));
        this.PaneEditoptn = protractor_1.element(protractor_1.by.xpath("//div//button//mat-icon[contains(text(),'edit')]"));
        this.cdkPaneDel = protractor_1.element(protractor_1.by.xpath("//div//mat-icon[contains(text(),'delete')]"));
        this.addSearchFilter = protractor_1.element(protractor_1.by.id("mat-input-2"));
        this.cdkPaneEdit1 = protractor_1.element(protractor_1.by.xpath("//div[@class='cdk-overlay-pane']//button)[1]/mat-icon"));
        this.EC = protractor_1.protractor.ExpectedConditions;
    }
    Profilepagedemo.prototype.profilePage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.profilePag.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Profilepagedemo.prototype.clickadduser = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.addProfile.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Profilepagedemo.prototype.pickOptionFromFloatingList = function (option) {
        return __awaiter(this, void 0, void 0, function () {
            var elmOption;
            var _this = this;
            return __generator(this, function (_a) {
                elmOption = protractor_1.element.all(protractor_1.by.xpath("//div[contains(@id,'mat-autocomplete')]//mat-option")).filter(function (ele) {
                    return ele.getText()
                        .then(function (elTxt) {
                        return elTxt === option;
                    });
                }).first();
                return [2 /*return*/, protractor_1.browser.wait(this.EC.visibilityOf(elmOption), constants_1.timeout.TIMEOUT_ELEMENT_LOAD, 'Floating list takes long time to be visible')
                        .then(function () {
                        return protractor_1.browser.wait(_this.EC.elementToBeClickable(elmOption), constants_1.timeout.TIMEOUT_ELEMENT_LOAD, 'Floating list takes long time to be clickable.');
                    })
                        .then(function () {
                        // browser.sleep(1000);
                        return elmOption.click();
                    })
                        .then(function () {
                        console.info("Selected the option \'" + option + "\' from floating list.");
                        return Promise.resolve();
                    })];
            });
        });
    };
    Profilepagedemo.prototype.fieldAllUserDetailsAndClickOnAdd = function (addBlock, addApart, addUserName, addEmail, addPhone, addSqft) {
        return __awaiter(this, void 0, void 0, function () {
            var elmOption, elmOption1;
            var _this = this;
            return __generator(this, function (_a) {
                elmOption = protractor_1.element(protractor_1.by.xpath(this.XPATH_FLOATING_LIST_OPTIONS.replace("$OPTION", "D Block")));
                elmOption1 = protractor_1.element(protractor_1.by.xpath(this.XPATH_FLOATING_LIST_OPTIONS.replace("$OPTION", "225")));
                return [2 /*return*/, protractor_1.browser.wait(this.EC.visibilityOf(this.getAddUserProfile), constants_1.timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
                        .then(function () {
                        protractor_1.browser.sleep(3000);
                        // return elmOption.click();
                        return _this.pickOptionFromFloatingList(addBlock);
                    })
                        .then(function () {
                        protractor_1.browser.sleep(3000);
                        _this.txtChooseApart.click();
                        return _this.pickOptionFromFloatingList(addApart);
                    })
                        .then(function () {
                        protractor_1.browser.sleep(2000);
                        return _this.txtEnterUserName.sendKeys(addUserName);
                    })
                        .then(function () {
                        protractor_1.browser.sleep(2000);
                        return _this.txtEnterEmail.sendKeys(addEmail);
                    })
                        .then(function () {
                        protractor_1.browser.sleep(2000);
                        return _this.txtEnterPhoneNo.sendKeys(addPhone);
                    })
                        .then(function () {
                        protractor_1.browser.sleep(2000);
                        return _this.txtEnterSqft.sendKeys(addSqft);
                    })
                        .then(function () {
                        protractor_1.browser.sleep(2000);
                        return _this.btnAdd.click();
                    })];
            });
        });
    };
    Profilepagedemo.prototype.SearchandEditUser = function (EditUserName) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                protractor_1.browser.sleep(3000);
                return [2 /*return*/, protractor_1.browser.wait(this.EC.elementToBeClickable(this.snackBarClose), constants_1.timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
                        .then(function () {
                        _this.addSearchFilter.sendKeys(EditUserName);
                        protractor_1.browser.sleep(1000);
                        _this.PaneEditbtn.click();
                        protractor_1.browser.sleep(1000);
                        _this.PaneEditoptn.click();
                        //})
                        //  .then(()=>{
                        // this.PaneEditbtn.click();
                        //  })
                        // .then(()=>{
                        //      this.PaneEditoptn.click();
                    })
                    /* .then(()=>{
                        return this.snackBarClose.click();
                    })
                    .then(async()=>{
                        browser.sleep(5000);
                        return expect(await this.addSearchFilter.isPresent()).toBe(true);
                    })
                    .then(()=>{
                        return this.addSearchFilter.clear();
                    })
                    .then(()=>{
                        browser.sleep(10000);
                        return this.addSearchFilter.sendKeys(addPhone)
                        .then(()=>{
                            browser.sleep(2000)
                            return this.addSearchFilter.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"))
                        })
                    }); */
                ];
            });
        });
    };
    Profilepagedemo.prototype.editUserNameEmailPhone = function (editUserName, editEmail, editPhone) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                protractor_1.browser.sleep(5000);
                return [2 /*return*/, protractor_1.browser.wait(this.EC.elementToBeClickable(this.selectIconRow), constants_1.timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
                        .then(function () {
                        return _this.selectIconRow.click();
                    })
                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            protractor_1.browser.sleep(40000);
                            return [2 /*return*/, protractor_1.browser.wait(this.EC.elementToBeClickable(this.cdkPaneEdit1), 50000)];
                        });
                    }); })
                        .then(function () {
                        protractor_1.browser.sleep(2000);
                        return _this.cdkPaneEdit1.click();
                        // return browser.actions().mouseMove(this.cdkPaneEdit).click().perform()
                    })
                        .then(function () {
                        protractor_1.browser.sleep(10000);
                        return _this.txtEnterUserName.clear()
                            .then(function () {
                            return _this.txtEnterUserName.sendKeys(editUserName);
                        });
                    })
                        .then(function () {
                        protractor_1.browser.sleep(10000);
                        return _this.txtEnterEmail.clear()
                            .then(function () {
                            return _this.txtEnterEmail.sendKeys(editEmail);
                        });
                    })
                        .then(function () {
                        protractor_1.browser.sleep(10000);
                        return _this.txtEnterPhoneNo.clear()
                            .then(function () {
                            return _this.txtEnterPhoneNo.sendKeys(editPhone);
                        });
                    })
                        .then(function () {
                        return _this.btnAdd.click();
                    })];
            });
        });
    };
    return Profilepagedemo;
}());
exports.Profilepagedemo = Profilepagedemo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZXBhZ2VkZW1vLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS5vYmplY3QuTW9kZWwvUHJvZmlsZXBhZ2VkZW1vLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBc0Y7QUFDdEYsaURBQThDO0FBRTlDO0lBeUJJO1FBSmlCLGdDQUEyQixHQUFHLDBFQUEwRSxDQUFDO1FBS3RILElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLENBQUM7UUFDdkcsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkRBQTZELENBQUMsQ0FBQyxDQUFDO1FBQ3ZHLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUMsQ0FBQztRQUN2SCxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDLENBQUM7UUFDM0gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyRUFBMkUsQ0FBQyxDQUFDLENBQUM7UUFDdkgsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQyxDQUFDO1FBQ3JILElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUMsQ0FBQztRQUN6SCxJQUFJLENBQUMsWUFBWSxHQUFH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