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
var ProfilePage = /** @class */ (function () {
    function ProfilePage() {
        this.XPATH_FLOATING_LIST_OPTIONS = "//div[@id='mat-autocomplete-2']//mat-option/span[contains(., '$OPTION')]";
        this.addProfile = protractor_1.element(protractor_1.by.xpath("//mat-sidenav-content//button//mat-icon[contains(text(),'add')]"));
        //this.profilePag = element(by.xpath('//button[@routerlink="/profile"]'));
        this.profilePag = protractor_1.element(protractor_1.by.xpath('//mat-list-item//span[@class="icon icon-profile"]'));
        this.getProfileTitle = protractor_1.element(protractor_1.by.xpath('//mat-card/mat-card-title'));
        this.getAddUserProfile = protractor_1.element(protractor_1.by.xpath("//app-add-user-dialog//h1[contains(@id,'mat-dialog-title')]"));
        //Add user elements
        this.txtChooseBlock = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Choose Block']"));
        this.txtChooseApart = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Choose Apartment']"));
        this.txtEnterUserName = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter UserName']"));
        this.txtEnterEmail = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter Email']"));
        this.txtEnterPhoneNo = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter PhoneNo']"));
        this.txtEnterSqft = protractor_1.element(protractor_1.by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter Sq.ft']"));
        this.btnAdd = protractor_1.element(protractor_1.by.xpath("//mat-dialog-actions/button[@type='submit']"));
        this.addSearchFilter = protractor_1.element(protractor_1.by.xpath("//mat-form-field//input[@placeholder='Filter']"));
        //user 1st row elements
        this.verifyBlock = protractor_1.element(protractor_1.by.xpath("//mat-card-content//table//tbody//tr//td)[1]"));
        this.verifyApart = protractor_1.element(protractor_1.by.xpath("//mat-card-content//table//tbody//tr//td)[2]"));
        this.verifyUserName = protractor_1.element(protractor_1.by.xpath("//mat-card-content//table//tbody//tr//td)[3]"));
        this.verifyEmail = protractor_1.element(protractor_1.by.xpath("//mat-card-content//table//tbody//tr//td)[4]"));
        this.verifyPhone = protractor_1.element(protractor_1.by.xpath("//mat-card-content//table//tbody//tr//td)[5]"));
        this.verifySqft = protractor_1.element(protractor_1.by.xpath("//mat-card-content//table//tbody//tr//td)[6]"));
        this.selectIconRow = protractor_1.element(protractor_1.by.xpath("//mat-card-content//table//tbody//tr//td)[7]//button"));
        this.lstColTabUser = protractor_1.element(protractor_1.by.xpath("//mat-card-content//table/thead/tr/th)[1]//button"));
        this.snackBarClose = protractor_1.element(protractor_1.by.xpath("//snack-bar-container//simple-snack-bar//button"));
        this.snackBarGetTxt = protractor_1.element(protractor_1.by.xpath("//snack-bar-container//simple-snack-bar//span)[1]"));
        this.cdkPaneEdit = protractor_1.element(protractor_1.by.xpath("//div[@class='cdk-overlay-pane']//button)[1]"));
        this.cdkPaneEdit1 = protractor_1.element(protractor_1.by.xpath("//div[@class='cdk-overlay-pane']//button)[1]/mat-icon"));
        this.cdkPaneDel = protractor_1.element(protractor_1.by.xpath("//div[@class='cdk-overlay-pane']//button)[2]"));
        this.EC = protractor_1.protractor.ExpectedConditions;
    }
    ProfilePage.prototype.openProfilepage = function () {
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
    ProfilePage.prototype.clickAddButtonAndVerifyAddUserPopup = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                //return browser.wait(this.EC.visibilityOf(this.addProfile), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
                return [2 /*return*/, this.addProfile.click()
                        .then(function () {
                        return _this.addProfile.click();
                    })
                        .then(function () {
                        return protractor_1.browser.wait(_this.EC.visibilityOf(_this.getAddUserProfile), constants_1.timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible');
                    })
                        .then(function () {
                        return _this.getAddUserProfile.getText();
                    })
                        .then(function (actualValue) {
                        console.info("Actual Value: " + actualValue);
                        return expect(actualValue).toBe('Add User');
                    })
                        .catch(function (err) {
                        console.log('Error Value...' + err);
                        return Promise.reject(err);
                    })];
            });
        });
    };
    ProfilePage.prototype.pickOptionFromFloatingList = function (option) {
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
    ProfilePage.prototype.fieldAllUserDetailsAndClickOnAdd = function (addBlock, addApart, addUserName, addEmail, addPhone, addSqft) {
        return __awaiter(this, void 0, void 0, function () {
            var elmOption, elmOption1;
            var _this = this;
            return __generator(this, function (_a) {
                elmOption = protractor_1.element(protractor_1.by.xpath(this.XPATH_FLOATING_LIST_OPTIONS.replace("$OPTION", "A Block")));
                elmOption1 = protractor_1.element(protractor_1.by.xpath(this.XPATH_FLOATING_LIST_OPTIONS.replace("$OPTION", "101")));
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
    ProfilePage.prototype.searchFilterFunc = function (addPhone) {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                protractor_1.browser.sleep(3000);
                return [2 /*return*/, protractor_1.browser.wait(this.EC.elementToBeClickable(this.snackBarClose), constants_1.timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
                        .then(function () {
                        return _this.snackBarClose.click();
                    })
                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    protractor_1.browser.sleep(5000);
                                    _a = expect;
                                    return [4 /*yield*/, this.addSearchFilter.isPresent()];
                                case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()]).toBe(true)];
                            }
                        });
                    }); })
                        .then(function () {
                        return _this.addSearchFilter.clear();
                    })
                        .then(function () {
                        protractor_1.browser.sleep(10000);
                        return _this.addSearchFilter.sendKeys(addPhone)
                            .then(function () {
                            protractor_1.browser.sleep(2000);
                            return _this.addSearchFilter.sendKeys(protractor_1.protractor.Key.chord(protractor_1.protractor.Key.CONTROL, "a"));
                        });
                    })];
            });
        });
    };
    ProfilePage.prototype.editUserNameEmailPhone = function (editUserName, editEmail, editPhone) {
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
    ProfilePage.prototype.addedUserShouldBeDeleted = function () {
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
                            return [2 /*return*/, protractor_1.browser.wait(this.EC.elementToBeClickable(this.cdkPaneDel), constants_1.timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')];
                        });
                    }); })
                        .then(function () {
                        protractor_1.browser.sleep(2000);
                        return _this.cdkPaneDel.click();
                    })
                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                        return __generator(this, function (_a) {
                            protractor_1.browser.sleep(40000);
                            return [2 /*return*/, protractor_1.browser.wait(this.EC.elementToBeClickable(this.snackBarClose), constants_1.timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')];
                        });
                    }); })
                        .then(function () { return __awaiter(_this, void 0, void 0, function () {
                        var _a;
                        return __generator(this, function (_b) {
                            switch (_b.label) {
                                case 0:
                                    protractor_1.browser.sleep(40000);
                                    _a = expect;
                                    return [4 /*yield*/, this.snackBarClose.isPresent()];
                                case 1: return [2 /*return*/, _a.apply(void 0, [_b.sent()]).toBe(true)];
                            }
                        });
                    }); })];
            });
        });
    };
    return ProfilePage;
}());
exports.ProfilePage = ProfilePage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlLm9iamVjdC5Nb2RlbC9Qcm9maWxlcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTZFO0FBQzdFLGlEQUE4QztBQUU5QztJQStCSTtRQUZpQixnQ0FBMkIsR0FBRywwRUFBMEUsQ0FBQztRQUl0SCxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpRUFBaUUsQ0FBQyxDQUFDLENBQUM7UUFDdkcsMEVBQTBFO1FBQzFFLElBQUksQ0FBQyxVQUFVLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsZUFBZSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywyQkFBMkIsQ0FBQyxDQUFDLENBQUM7UUFDdEUsSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDLENBQUM7UUFDMUcsbUJBQW1CO1FBQ25CLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDZFQUE2RSxDQUFDLENBQUMsQ0FBQztRQUN2SCxJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpRkFBaUYsQ0FBQyxDQUFDLENBQUM7UUFDM0gsSUFBSSxDQUFDLGdCQUFnQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDLENBQUM7UUFDM0gsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEVBQTRFLENBQUMsQ0FBQyxDQUFDO1FBQ3JILElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhFQUE4RSxDQUFDLENBQUMsQ0FBQztRQUN6SCxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw0RUFBNEUsQ0FBQyxDQUFDLENBQUM7UUFDcEgsSUFBSSxDQUFDLE1BQU0sR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNkNBQTZDLENBQUMsQ0FBQyxDQUFDO1FBQy9FLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUMsQ0FBQztRQUMzRix1QkFBdUI7UUFDdkIsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsY0FBYyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7UUFDeEYsSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQyxDQUFDO1FBQ3JGLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsc0RBQXNELENBQUMsQ0FBQyxDQUFDO1FBQy9GLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG1EQUFtRCxDQUFDLENBQUMsQ0FBQztRQUM1RixJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxpREFBaUQsQ0FBQyxDQUFDLENBQUM7UUFDMUYsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbURBQW1ELENBQUMsQ0FBQyxDQUFDO1FBQzdGLElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLDhDQUE4QyxDQUFDLENBQUMsQ0FBQztRQUNyRixJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7UUFDL0YsSUFBSSxDQUFDLFVBQVUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOENBQThDLENBQUMsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxFQUFFLEdBQUcsdUJBQVUsQ0FBQyxrQkFBa0IsQ0FBQztJQUM1QyxDQUFDO0lBQ2EscUNBQWUsR0FBNUI7Ozs7NEJBQ0sscUJBQU0sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQTdCLFNBQTZCLENBQUM7Ozs7O0tBQ25DO0lBRVkseURBQW1DLEdBQWhEOzs7O2dCQUNJLG9JQUFvSTtnQkFDcEksc0JBQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUU7eUJBQzdCLElBQUksQ0FBQzt3QkFDRixPQUFPLEtBQUksQ0FBQyxVQUFVLENBQUMsS0FBSyxFQUFFLENBQUM7b0JBQ25DLENBQUMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0YsT0FBTyxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxLQUFJLENBQUMsaUJBQWlCLENBQUMsRUFBRSxtQkFBTyxDQUFDLG9CQUFvQixFQUFFLHdDQUF3QyxDQUFDLENBQUE7b0JBQzdJLENBQUMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0YsT0FBTyxLQUFJLENBQUMsaUJBQWlCLENBQUMsT0FBTyxFQUFFLENBQUE7b0JBQzNDLENBQUMsQ0FBQzt5QkFDRCxJQUFJLENBQUMsVUFBQyxXQUFXO3dCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLENBQUM7d0JBQzdDLE9BQU8sTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztvQkFDaEQsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7d0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDcEMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUFFWSxnREFBMEIsR0FBdkMsVUFBd0MsTUFBYzs7Ozs7Z0JBQzlDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQyxNQUFNLENBQUMsVUFBQyxHQUFHO29CQUNwRyxPQUFPLEdBQUcsQ0FBQyxPQUFPLEVBQUU7eUJBQ25CLElBQUksQ0FBQyxVQUFDLEtBQUs7d0JBQ1IsT0FBTyxLQUFLLEtBQUssTUFBTSxDQUFDO29CQUM1QixDQUFDLENBQUMsQ0FBQTtnQkFDTixDQUFDLENBQUMsQ0FBQyxLQUFLLEVBQUUsQ0FBQTtnQkFDVixzQkFBTyxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsRUFBRSxtQkFBTyxDQUFDLG9CQUFvQixFQUFFLDZDQUE2QyxDQUFDO3lCQUNoSSxJQUFJLENBQUM7d0JBQ0YsT0FBTyxvQkFBTyxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxFQUFFLG1CQUFPLENBQUMsb0JBQW9CLEVBQUUsZ0RBQWdELENBQUMsQ0FBQTtvQkFDaEosQ0FBQyxDQUFDO3lCQUNELElBQUksQ0FBQzt3QkFDRix1QkFBdUI7d0JBQ3ZCLE9BQU8sU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUM3QixDQUFDLENBQUM7eUJBQ0QsSUFBSSxDQUFDO3dCQUNGLE9BQU8sQ0FBQyxJQUFJLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxHQUFHLHdCQUF3QixDQUFDLENBQUM7d0JBQzNFLE9BQU8sT0FBTyxDQUFDLE9BQU8sRUFBRSxDQUFDO29CQUM3QixDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUFFWSxzREFBZ0MsR0FBN0MsVUFBOEMsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLFdBQW1CLEVBQUUsUUFBZ0IsRUFBRSxRQUFnQixFQUFFLE9BQWU7Ozs7O2dCQUNsSixTQUFTLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQywyQkFBMkIsQ0FBQyxPQUFPLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUYsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsMkJBQTJCLENBQUMsT0FBTyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQy9GLHNCQUFPLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxFQUFFLG1CQUFPLENBQUMsb0JBQW9CLEVBQUUsd0NBQXdDLENBQUM7eUJBQ3hJLElBQUksQ0FBQzt3QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsNEJBQTRCO3dCQUM1QixPQUFPLEtBQUksQ0FBQywwQkFBMEIsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDckQsQ0FBQyxDQUFDO3lCQUNELElBQUksQ0FBQzt3QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsS0FBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsQ0FBQzt3QkFDNUIsT0FBTyxLQUFJLENBQUMsMEJBQTBCLENBQUMsUUFBUSxDQUFDLENBQUM7b0JBQ3JELENBQUMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7d0JBQ3BCLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQztvQkFDdkQsQ0FBQyxDQUFDO3lCQUNELElBQUksQ0FBQzt3QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDakQsQ0FBQyxDQUFDO3lCQUNELElBQUksQ0FBQzt3QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztvQkFDbkQsQ0FBQyxDQUFDO3lCQUNELElBQUksQ0FBQzt3QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDL0MsQ0FBQyxDQUFDO3lCQUNELElBQUksQ0FBQzt3QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDcEIsT0FBTyxLQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUMvQixDQUFDLENBQUMsRUFBQTs7O0tBRUw7SUFFWSxzQ0FBZ0IsR0FBN0IsVUFBOEIsUUFBZ0I7Ozs7Z0JBQzFDLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNwQixzQkFBTyxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxtQkFBTyxDQUFDLG9CQUFvQixFQUFFLHdDQUF3QyxDQUFDO3lCQUM1SSxJQUFJLENBQUM7d0JBQ0YsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN0QyxDQUFDLENBQUM7eUJBQ0QsSUFBSSxDQUFDOzs7OztvQ0FDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztvQ0FDYixLQUFBLE1BQU0sQ0FBQTtvQ0FBQyxxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLFNBQVMsRUFBRSxFQUFBO3dDQUFwRCxzQkFBTyxrQkFBTyxTQUFzQyxFQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDOzs7eUJBQ3BFLENBQUM7eUJBQ0QsSUFBSSxDQUFDO3dCQUNGLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDeEMsQ0FBQyxDQUFDO3lCQUNELElBQUksQ0FBQzt3QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckIsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7NkJBQzdDLElBQUksQ0FBQzs0QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs0QkFDbkIsT0FBTyxLQUFJLENBQUMsZUFBZSxDQUFDLFFBQVEsQ0FBQyx1QkFBVSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsdUJBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUE7d0JBQzNGLENBQUMsQ0FBQyxDQUFBO29CQUNOLENBQUMsQ0FBQyxFQUFDOzs7S0FDTjtJQUVZLDRDQUFzQixHQUFuQyxVQUFvQyxZQUFvQixFQUFFLFNBQWlCLEVBQUUsU0FBaUI7Ozs7Z0JBQzFGLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuQixzQkFBTyxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxtQkFBTyxDQUFDLG9CQUFvQixFQUFFLHdDQUF3QyxDQUFDO3lCQUM1SSxJQUFJLENBQUM7d0JBQ0YsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN0QyxDQUFDLENBQUM7eUJBQ0QsSUFBSSxDQUFDOzs0QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTs0QkFDcEIsc0JBQU8sb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLEVBQUUsS0FBSyxDQUFDLEVBQUM7O3lCQUMvRSxDQUFDO3lCQUNELElBQUksQ0FBQzt3QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTt3QkFDbkIsT0FBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxDQUFDO3dCQUNqQyx5RUFBeUU7b0JBQzdFLENBQUMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLEtBQUssRUFBRTs2QkFDbkMsSUFBSSxDQUFDOzRCQUNGLE9BQU8sS0FBSSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQzt3QkFDeEQsQ0FBQyxDQUFDLENBQUE7b0JBQ04sQ0FBQyxDQUFDO3lCQUNELElBQUksQ0FBQzt3QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQzt3QkFDckIsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRTs2QkFDaEMsSUFBSSxDQUFDOzRCQUNGLE9BQU8sS0FBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLENBQUM7d0JBQ2xELENBQUMsQ0FBQyxDQUFBO29CQUNOLENBQUMsQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7d0JBQ3JCLE9BQU8sS0FBSSxDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUU7NkJBQ2xDLElBQUksQ0FBQzs0QkFDRixPQUFPLEtBQUksQ0FBQyxlQUFlLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNwRCxDQUFDLENBQUMsQ0FBQTtvQkFDTixDQUFDLENBQUM7eUJBQ0QsSUFBSSxDQUFDO3dCQUNGLE9BQU8sS0FBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDL0IsQ0FBQyxDQUFDLEVBQUE7OztLQUVMO0lBRVksOENBQXdCLEdBQXJDOzs7O2dCQUNJLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFBO2dCQUNuQixzQkFBTyxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxhQUFhLENBQUMsRUFBRSxtQkFBTyxDQUFDLG9CQUFvQixFQUFFLHdDQUF3QyxDQUFDO3lCQUM1SSxJQUFJLENBQUM7d0JBQ0YsT0FBTyxLQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxDQUFDO29CQUN0QyxDQUFDLENBQUM7eUJBQ0QsSUFBSSxDQUFDOzs0QkFDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQTs0QkFDcEIsc0JBQU8sb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQUUsbUJBQU8sQ0FBQyxvQkFBb0IsRUFBRSx3Q0FBd0MsQ0FBQyxFQUFBOzt5QkFDN0ksQ0FBQzt5QkFDRCxJQUFJLENBQUM7d0JBQ0Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQ25CLE9BQU8sS0FBSSxDQUFDLFVBQVUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDbkMsQ0FBQyxDQUFDO3lCQUNELElBQUksQ0FBQzs7NEJBQ0Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUE7NEJBQ3BCLHNCQUFPLG9CQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxFQUFFLG1CQUFPLENBQUMsb0JBQW9CLEVBQUUsd0NBQXdDLENBQUMsRUFBQTs7eUJBQ2hKLENBQUM7eUJBQ0QsSUFBSSxDQUFDOzs7OztvQ0FDRixvQkFBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztvQ0FDZCxLQUFBLE1BQU0sQ0FBQTtvQ0FBQyxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLFNBQVMsRUFBRSxFQUFBO3dDQUFsRCxzQkFBTyxrQkFBTyxTQUFvQyxFQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFDOzs7eUJBQ2xFLENBQUMsRUFBQTs7O0tBQ0w7SUFDTCxrQkFBQztBQUFELENBQUMsQUEzT0QsSUEyT0M7QUEzT1ksa0NBQVcifQ==