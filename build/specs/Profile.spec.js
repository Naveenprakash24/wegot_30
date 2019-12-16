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
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var Loginpage_1 = require("../page.object.Model/Loginpage");
var Profilepage_1 = require("../page.object.Model/Profilepage");
var PageBase_1 = require("../page.object.Model/PageBase");
var loginData = require("../../data/authentication.json");
var protractor_1 = require("protractor");
var email = loginData.validUserNameAndPassword.validemail;
var password = loginData.validUserNameAndPassword.validpassword;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;
var fs = require('fs');
var userData = fs.readFileSync('data/profile_data.json');
var ProfileData = JSON.parse(userData);
describe('Profiles page', function () {
    var homepage = new Loginpage_1.LoginPage();
    var clickProfilepg = new Profilepage_1.ProfilePage();
    var pgBase = new PageBase_1.PageBase();
    beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, homepage.loginpage(email, password)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    var addBlock = ProfileData.addUser.addBlock;
    var addApart = ProfileData.addUser.addApart;
    var addUserName = ProfileData.addUser.addUserName;
    var addEmail = ProfileData.addUser.addEmail;
    var addPhone = ProfileData.addUser.addPhone;
    var addSqft = ProfileData.addUser.addSqft;
    it('Click on Profiles tab an verify profile header', function () { return __awaiter(_this, void 0, void 0, function () {
        var verifyHeader;
        return __generator(this, function (_a) {
            verifyHeader = ProfileData.profileHeader.verifyHeader;
            protractor_1.browser.sleep(40000);
            return [2 /*return*/, pgBase.headerPageToBeVerify(clickProfilepg.profilePag, verifyHeader)];
        });
    }); });
    it('Verify that add user popup should be opened', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, clickProfilepg.clickAddButtonAndVerifyAddUserPopup()];
        });
    }); });
    it('Verify that user should be added to the user details table', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, clickProfilepg.fieldAllUserDetailsAndClickOnAdd(addBlock, addApart, addUserName, addEmail, addPhone, addSqft)
                    .then(function () {
                    // browser.sleep(40000);
                    return clickProfilepg.searchFilterFunc(addPhone);
                })];
        });
    }); });
    it('Verify that Added User details should be same', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            protractor_1.browser.sleep(10000);
            return [2 /*return*/, pgBase.verifyElementString(addBlock, clickProfilepg.verifyBlock)
                    .then(function () {
                    return pgBase.verifyElementString(addApart, clickProfilepg.verifyApart);
                })
                    .then(function () {
                    return pgBase.verifyElementString(addUserName, clickProfilepg.verifyUserName);
                })
                    .then(function () {
                    return pgBase.verifyElementString(addEmail, clickProfilepg.verifyEmail);
                })
                    .then(function () {
                    return pgBase.verifyElementString(addPhone, clickProfilepg.verifyPhone);
                })
                    .then(function () {
                    return pgBase.verifyElementString(addSqft, clickProfilepg.verifySqft);
                })];
        });
    }); });
    it('Edit username, email &phone and verify the same', function () { return __awaiter(_this, void 0, void 0, function () {
        var editUserName, editEmail, editPhone;
        return __generator(this, function (_a) {
            editUserName = ProfileData.EditUser.editUserName;
            editEmail = ProfileData.EditUser.editEmail;
            editPhone = ProfileData.EditUser.editPhone;
            return [2 /*return*/, clickProfilepg.editUserNameEmailPhone(editUserName, editEmail, editPhone)
                    .then(function () {
                    protractor_1.browser.sleep(10000);
                    return clickProfilepg.searchFilterFunc(editPhone);
                })
                    .then(function () {
                    protractor_1.browser.sleep(20000);
                    return pgBase.verifyElementString(editUserName, clickProfilepg.verifyUserName);
                })
                    .then(function () {
                    return pgBase.verifyElementString(editEmail, clickProfilepg.verifyEmail);
                })
                    .then(function () {
                    return pgBase.verifyElementString(editPhone, clickProfilepg.verifyPhone);
                })];
        });
    }); });
    it("Delete added user from profile page", function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, clickProfilepg.addedUserShouldBeDeleted()];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZS5zcGVjLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3BlY3MvUHJvZmlsZS5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLGlCQStGRzs7QUEvRkgsNERBQTJEO0FBQzNELGdFQUErRDtBQUMvRCwwREFBeUQ7QUFDekQsMERBQTREO0FBQzVELHlDQUFxQztBQUVyQyxJQUFNLEtBQUssR0FBUyxTQUFVLENBQUMsd0JBQXdCLENBQUMsVUFBVSxDQUFDO0FBQ25FLElBQU0sUUFBUSxHQUFTLFNBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxhQUFhLENBQUM7QUFDekUsT0FBTyxDQUFDLHdCQUF3QixHQUFHLE1BQU0sQ0FBQztBQUUxQyxJQUFNLEVBQUUsR0FBRyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7QUFFekIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDO0FBQ3pELElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUE7QUFFdEMsUUFBUSxDQUFDLGVBQWUsRUFBQztJQUVyQixJQUFJLFFBQVEsR0FBYyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQUMxQyxJQUFJLGNBQWMsR0FBZ0IsSUFBSSx5QkFBVyxFQUFFLENBQUM7SUFDcEQsSUFBSSxNQUFNLEdBQWEsSUFBSSxtQkFBUSxFQUFFLENBQUM7SUFFdEMsU0FBUyxDQUFFOzs7d0JBQ1AscUJBQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUF6QixTQUF5QixDQUFDO29CQUMxQixxQkFBTSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsRUFBQTs7b0JBQXhDLFNBQXdDLENBQUM7b0JBQ3pDLHFCQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFB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