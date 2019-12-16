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
var Profilepagedemo_1 = require("../page.object.Model/Profilepagedemo");
var PageBase_1 = require("../page.object.Model/PageBase");
var loginData = require("../../data/authentication.json");
var protractor_1 = require("protractor");
var email = loginData.validUserNameAndPassword.validemail;
var password = loginData.validUserNameAndPassword.validpassword;
var fs = require('fs');
var userData = fs.readFileSync('data/profile_data.json');
var ProfileData = JSON.parse(userData);
describe('Profiles page', function () {
    var homepage = new Loginpage_1.LoginPage();
    var clickProfilepg = new Profilepagedemo_1.Profilepagedemo();
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
    it('Click on Profiles tab', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, clickProfilepg.profilePage()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    xit('click add user icon', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, clickProfilepg.clickadduser()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    xit('Click on Add profile', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, clickProfilepg.fieldAllUserDetailsAndClickOnAdd(addBlock, addApart, addUserName, addEmail, addPhone, addSqft)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('search and Edit', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, clickProfilepg.SearchandEditUser(addUserName)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    /* xit('Edit username, email &phone and verify the same',async ()=> {

        let editUserName: string = ProfileData.EditUser.editUserName;
        let editEmail: string = ProfileData.EditUser.editEmail;
        let editPhone: string = ProfileData.EditUser.editPhone;
        return clickProfilepg.editUserNameEmailPhone(editUserName, editEmail, editPhone)
        .then(()=>{
            browser.sleep(10000);
            return clickProfilepg.searchFilterFunc(editPhone);
        })
        .then(()=>{
            browser.sleep(20000);
            return pgBase.verifyElementString(editUserName, clickProfilepg.verifyUserName);
        })
        .then(()=>{
            return pgBase.verifyElementString(editEmail, clickProfilepg.verifyEmail);
        })
        .then(()=>{
            return pgBase.verifyElementString(editPhone, clickProfilepg.verifyPhone);
        })
    }); */
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHJvZmlsZXBhZ2VkZW1vLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9Qcm9maWxlcGFnZWRlbW8uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFrRUc7O0FBbEVILDREQUEyRDtBQUMzRCx3RUFBdUU7QUFDdkUsMERBQXlEO0FBQ3pELDBEQUE0RDtBQUM1RCx5Q0FBcUM7QUFHckMsSUFBTSxLQUFLLEdBQVMsU0FBVSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQztBQUNuRSxJQUFNLFFBQVEsR0FBUyxTQUFVLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQ3pFLElBQU0sRUFBRSxHQUFHLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztBQUV6QixJQUFJLFFBQVEsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLHdCQUF3QixDQUFDLENBQUM7QUFDekQsSUFBSSxXQUFXLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQTtBQUV0QyxRQUFRLENBQUMsZUFBZSxFQUFDO0lBRXJCLElBQUksUUFBUSxHQUFjLElBQUkscUJBQVMsRUFBRSxDQUFDO0lBQzFDLElBQUksY0FBYyxHQUFvQixJQUFJLGlDQUFlLEVBQUUsQ0FBQztJQUM1RCxJQUFJLE1BQU0sR0FBYSxJQUFJLG1CQUFRLEVBQUUsQ0FBQztJQUV0QyxTQUFTLENBQUU7Ozt3QkFDUCxxQkFBTSxvQkFBTyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBQTs7b0JBQXpCLFNBQXlCLENBQUM7b0JBQzFCLHFCQUFNLFFBQVEsQ0FBQyxTQUFTLENBQUMsS0FBSyxFQUFDLFFBQVEsQ0FBQyxFQUFBOztvQkFBeEMsU0FBd0MsQ0FBQztvQkFDekMscUJBQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUF6QixTQUF5QixDQUFDOzs7O1NBQzdCLENBQUMsQ0FBQztJQUNILElBQUksUUFBUSxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3BELElBQUksUUFBUSxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3BELElBQUksV0FBVyxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUMsV0FBVyxDQUFDO0lBQzFELElBQUksUUFBUSxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3BELElBQUksUUFBUSxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDO0lBQ3BELElBQUksT0FBTyxHQUFXLFdBQVcsQ0FBQyxPQUFPLENBQUMsT0FBTyxDQUFDO0lBRWxELEVBQUUsQ0FBQyx1QkFBdUIsRUFBQzs7O3dCQUN2QixxQkFBTSxjQUFjLENBQUMsV0FBVyxFQUFFLEVBQUE7O29CQUFsQyxTQUFrQyxDQUFDOzs7O1NBQ3RDLENBQUMsQ0FBQztJQUNILEdBQUcsQ0FBQyxxQkFBcUIsRUFBQzs7O3dCQUV0QixxQkFBTSxjQUFjLENBQUMsWUFBWSxFQUFFLEVBQUE7O29CQUFuQyxTQUFtQyxDQUFDOzs7O1NBQ3ZDLENBQUMsQ0FBQTtJQUNFLEdBQUcsQ0FBQyxzQkFBc0IsRUFBQzs7O3dCQUMzQixxQkFBTSxjQUFjLENBQUMsZ0NBQWdDLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxXQUFXLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxPQUFPLENBQUMsRUFBQTs7b0JBQW5ILFNBQW1ILENBQUM7Ozs7U0FDdkgsQ0FBQyxDQUFDO0lBQ0gsRUFBRSxDQUFDLGlCQUFpQixFQUFDOzs7d0JBQ2pCLHFCQUFNLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxXQUFXLENBQUMsRUFBQTs7b0JBQW5ELFNBQW1ELENBQUM7Ozs7U0FDdkQsQ0FBQyxDQUFBO0lBQ0Y7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VBb0JNO0FBQ1YsQ0FBQyxDQUFDLENBQUMifQ==