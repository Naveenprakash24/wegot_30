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
var loginData = require("../../data/authentication.json");
var email = loginData.validUserNameAndPassword.validemail;
var password = loginData.validUserNameAndPassword.validpassword;
var incorrentName = loginData.invalidNameAndPassword.invalidName;
var incorrectPassword = loginData.invalidNameAndPassword.invalidPassword;
describe('Login page ', function () {
    var homepage = new Loginpage_1.LoginPage();
    beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homepage.getHomePage()];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    xit('Enter the incorrect username and right password and Click sigin', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homepage.incorrentUserName(incorrentName, password)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    xit('Click on Sigin without username and password', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homepage.withoutUserNameAndPassword()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, expect(homepage.usernameReqMessage).toBeTruthy()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, expect(homepage.passwordReqMessage).toBeTruthy()];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    xit('Enter the right username and incorrect password and Click sigin', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homepage.incorrentUserName(email, incorrectPassword)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    xit('Click on Sigin only with username', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homepage.onlyWithUsername(email)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    xit('Click On Sigin only with Password', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homepage.onlyWithPassword(password)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Enter the correct username and password', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, homepage.loginpage(email, password)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiTG9naW5wYWdlLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9Mb2dpbnBhZ2Uuc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkEwQ0c7O0FBMUNILDREQUEyRDtBQUMzRCwwREFBNEQ7QUFFNUQsSUFBTSxLQUFLLEdBQVMsU0FBVSxDQUFDLHdCQUF3QixDQUFDLFVBQVUsQ0FBQztBQUNuRSxJQUFNLFFBQVEsR0FBUyxTQUFVLENBQUMsd0JBQXdCLENBQUMsYUFBYSxDQUFDO0FBQ3pFLElBQU0sYUFBYSxHQUFTLFNBQVUsQ0FBQyxzQkFBc0IsQ0FBQyxXQUFXLENBQUM7QUFDMUUsSUFBTSxpQkFBaUIsR0FBUyxTQUFVLENBQUMsc0JBQXNCLENBQUMsZUFBZSxDQUFDO0FBRWxGLFFBQVEsQ0FBQyxhQUFhLEVBQUU7SUFFdEIsSUFBSSxRQUFRLEdBQWUsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFFM0MsU0FBUyxDQUFFOzs7d0JBQ1QscUJBQU0sUUFBUSxDQUFDLFdBQVcsRUFBRSxFQUFBOztvQkFBNUIsU0FBNEIsQ0FBQzs7OztTQUM5QixDQUFDLENBQUM7SUFFRCxHQUFHLENBQUMsaUVBQWlFLEVBQUM7Ozt3QkFDcEUscUJBQU0sUUFBUSxDQUFDLGlCQUFpQixDQUFDLGFBQWEsRUFBQyxRQUFRLENBQUMsRUFBQTs7b0JBQXhELFNBQXdELENBQUM7Ozs7U0FDMUQsQ0FBQyxDQUFDO0lBRUgsR0FBRyxDQUFDLDhDQUE4QyxFQUFDOzs7d0JBQ2pELHFCQUFNLFFBQVEsQ0FBQywwQkFBMEIsRUFBRSxFQUFBOztvQkFBM0MsU0FBMkMsQ0FBQztvQkFDNUMscUJBQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFBOztvQkFBdEQsU0FBc0QsQ0FBQztvQkFDdkQscUJBQU0sTUFBTSxDQUFDLFFBQVEsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLFVBQVUsRUFBRSxFQUFBOztvQkFBdEQsU0FBc0QsQ0FBQzs7OztTQUN4RCxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsaUVBQWlFLEVBQUM7Ozt3QkFDcEUscUJBQU0sUUFBUSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBQyxpQkFBaUIsQ0FBQyxFQUFBOztvQkFBekQsU0FBeUQsQ0FBQzs7OztTQUMzRCxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsbUNBQW1DLEVBQUM7Ozt3QkFDdEMscUJBQU0sUUFBUSxDQUFDLGdCQUFnQixDQUFDLEtBQUssQ0FBQyxFQUFBOztvQkFBdEMsU0FBc0MsQ0FBQzs7OztTQUN4QyxDQUFDLENBQUM7SUFFSCxHQUFHLENBQUMsbUNBQW1DLEVBQUM7Ozt3QkFDdEMscUJBQU0sUUFBUSxDQUFDLGdCQUFnQixDQUFDLFFBQVEsQ0FBQyxFQUFBOztvQkFBekMsU0FBeUMsQ0FBQzs7OztTQUMzQyxDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMseUNBQXlDLEVBQUM7Ozt3QkFDM0MscUJBQU0sUUFBUSxDQUFDLFNBQVMsQ0FBQyxLQUFLLEVBQUMsUUFBUSxDQUFDLEVBQUE7O29CQUF4QyxTQUF3QyxDQUFDOzs7O1NBQzFDLENBQUMsQ0FBQztBQUVQLENBQUMsQ0FBQyxDQUFDIn0=