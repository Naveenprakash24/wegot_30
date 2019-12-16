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
var ChangePassword_1 = require("../page.object.Model/ChangePassword");
var loginData = require("../../data/authentication.json");
var newpwd = require("../../data/profile_data.json");
var protractor_1 = require("protractor");
var email = loginData.validUserNameAndPassword.validemail;
var password = loginData.validUserNameAndPassword.validpassword;
var password2 = newpwd.Changepassword.password2;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;
var validemail = loginData.validUserNameAndPassword.validemail;
var fs = require('fs');
var userData = fs.readFileSync('data/profile_data.json');
var ProfileData = JSON.parse(userData);
describe('ChangePassword', function () {
    var homepage = new Loginpage_1.LoginPage();
    var ChangePwd = new ChangePassword_1.changePassword();
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
    it('Click change password and navigate to the page', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, ChangePwd.ClickchangePassword()];
        });
    }); });
    it('Again login with new password', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, ChangePwd.Newlogin(validemail, password2)];
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ2hhbmdlUGFzc3dvcmQuc3BlYy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NwZWNzL0NoYW5nZVBhc3N3b3JkLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsaUJBc0NNOztBQXRDTiw0REFBMkQ7QUFDM0Qsc0VBQXFFO0FBQ3JFLDBEQUE0RDtBQUM1RCxxREFBdUQ7QUFDdkQseUNBQXFDO0FBRXJDLElBQU0sS0FBSyxHQUFTLFNBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUM7QUFDbkUsSUFBTSxRQUFRLEdBQVMsU0FBVSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztBQUN6RSxJQUFNLFNBQVMsR0FBUyxNQUFPLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQztBQUN6RCxPQUFPLENBQUMsd0JBQXdCLEdBQUcsTUFBTSxDQUFDO0FBQzFDLElBQU0sVUFBVSxHQUFTLFNBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUM7QUFFeEUsSUFBTSxFQUFFLEdBQUcsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO0FBRXpCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsd0JBQXdCLENBQUMsQ0FBQztBQUN6RCxJQUFJLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFBO0FBR3RDLFFBQVEsQ0FBQyxnQkFBZ0IsRUFBRTtJQUN6QixJQUFJLFFBQVEsR0FBYyxJQUFJLHFCQUFTLEVBQUUsQ0FBQztJQUMxQyxJQUFJLFNBQVMsR0FBbUIsSUFBSSwrQkFBYyxFQUFFLENBQUM7SUFFckQsU0FBUyxDQUFFOzs7d0JBQ1QscUJBQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUF6QixTQUF5QixDQUFDO29CQUMxQixxQkFBTSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsRUFBQTs7b0JBQXhDLFNBQXdDLENBQUM7b0JBQ3pDLHFCQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFBOztvQkFBekIsU0FBeUIsQ0FBQzs7OztTQUM3QixDQUFDLENBQUM7SUFFRyxFQUFFLENBQUMsZ0RBQWdELEVBQUM7O1lBQ2xELHNCQUFPLFNBQVMsQ0FBQyxtQkFBbUIsRUFBRSxFQUFDOztTQUN4QyxDQUFDLENBQUM7SUFHSCxFQUFFLENBQUMsK0JBQStCLEVBQUM7O1lBRWpDLHNCQUFPLFNBQVMsQ0FBQyxRQUFRLENBQUMsVUFBVSxFQUFDLFNBQVMsQ0FBQyxFQUFDOztTQUNqRCxDQUFDLENBQUM7QUFFTCxDQUFDLENBQUMsQ0FBQSJ9