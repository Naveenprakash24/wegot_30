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
var Distribution_1 = require("../page.object.Model/Distribution");
var Loginpage_1 = require("../page.object.Model/Loginpage");
var Connection_1 = require("../utility/Connection");
var loginData = require("../../data/authentication.json");
var protractor_1 = require("protractor");
var Dbquery_1 = require("../utility/Dbquery");
var email = loginData.validUserNameAndPassword.validemail;
var password = loginData.validUserNameAndPassword.validpassword;
describe('Distribution page', function () {
    var clickdistributpage = new Distribution_1.Distribution();
    var homepage = new Loginpage_1.LoginPage();
    var connect = new Connection_1.Connection();
    beforeAll(function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, homepage.loginpage(email, password)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(10000)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Verify the Distribution page', function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, clickdistributpage.distributionpage()];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Verify currtMonth usage data should be displayed ', function () { return __awaiter(_this, void 0, void 0, function () {
        var monthUsage, expectedCurrtMonth, actualCurrtMonth;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, clickdistributpage.selectapartment()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, connect.Get(Dbquery_1.month)];
                case 2:
                    monthUsage = _a.sent();
                    expectedCurrtMonth = (monthUsage[0].day_total);
                    return [4 /*yield*/, clickdistributpage.expectedthisMonth.getText()];
                case 3:
                    actualCurrtMonth = _a.sent();
                    return [4 /*yield*/, expect(actualCurrtMonth).toContain(expectedCurrtMonth)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Verify today usage data should be displayed ', function () { return __awaiter(_this, void 0, void 0, function () {
        var todayusage, expectedCurrtdayusage, actualCurrtdayusage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connect.Get(Dbquery_1.today)];
                case 1:
                    todayusage = _a.sent();
                    expectedCurrtdayusage = (todayusage[0].day_total);
                    return [4 /*yield*/, clickdistributpage.expectedToday.getText()];
                case 2:
                    actualCurrtdayusage = _a.sent();
                    return [4 /*yield*/, expect(actualCurrtdayusage).toContain(expectedCurrtdayusage)];
                case 3:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    it('Verify overall reading of current day usage  ', function () { return __awaiter(_this, void 0, void 0, function () {
        var ovrTotal, expectedOverAllTotal, actualOverAllTotal;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connect.Get(Dbquery_1.overallTotal)];
                case 1:
                    ovrTotal = _a.sent();
                    expectedOverAllTotal = (ovrTotal[0].cum);
                    return [4 /*yield*/, clickdistributpage.overallTotal.getText()];
                case 2:
                    actualOverAllTotal = _a.sent();
                    return [4 /*yield*/, expect(actualOverAllTotal).toContain(expectedOverAllTotal)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, clickdistributpage.closeUsageSummary()];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
    xit('Verfiy Cumulative reading of each inlet and total should be displayed', function () { return __awaiter(_this, void 0, void 0, function () {
        var bathroomUsage, bathRoom, currtBathroomUsage, kitchenUsage, kitchen, currtKitchenusage;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, connect.Get(Dbquery_1.overallBathRoom)];
                case 1:
                    bathroomUsage = _a.sent();
                    bathRoom = (bathroomUsage[1].cum_value);
                    return [4 /*yield*/, clickdistributpage.overallBathroom.getText()];
                case 2:
                    currtBathroomUsage = _a.sent();
                    return [4 /*yield*/, expect(currtBathroomUsage).toContain(bathRoom)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, connect.Get(Dbquery_1.overallKitchen)];
                case 4:
                    kitchenUsage = _a.sent();
                    kitchen = (kitchenUsage[0].cum_value);
                    return [4 /*yield*/, clickdistributpage.overallKitchen.getText()];
                case 5:
                    currtKitchenusage = _a.sent();
                    return [4 /*yield*/, expect(currtKitchenusage).toContain(kitchen)];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, clickdistributpage.closeUsageSummary()];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    }); });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uLnNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9EaXN0cmlidXRpb24uc3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQkFpRUE7O0FBakVBLGtFQUFnRTtBQUNoRSw0REFBMkQ7QUFDM0Qsb0RBQWtEO0FBQ2xELDBEQUE0RDtBQUM1RCx5Q0FBcUM7QUFDckMsOENBQThGO0FBRTlGLElBQU0sS0FBSyxHQUFTLFNBQVUsQ0FBQyx3QkFBd0IsQ0FBQyxVQUFVLENBQUM7QUFDbkUsSUFBTSxRQUFRLEdBQVMsU0FBVSxDQUFDLHdCQUF3QixDQUFDLGFBQWEsQ0FBQztBQUV6RSxRQUFRLENBQUMsbUJBQW1CLEVBQUU7SUFFMUIsSUFBSSxrQkFBa0IsR0FBaUIsSUFBSSwyQkFBWSxFQUFFLENBQUM7SUFDMUQsSUFBSSxRQUFRLEdBQWMsSUFBSSxxQkFBUyxFQUFFLENBQUM7SUFDMUMsSUFBSSxPQUFPLEdBQWUsSUFBSSx1QkFBVSxFQUFFLENBQUM7SUFFM0MsU0FBUyxDQUFDOzs7d0JBQ04scUJBQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUF6QixTQUF5QixDQUFDO29CQUMxQixxQkFBTSxRQUFRLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBQyxRQUFRLENBQUMsRUFBQTs7b0JBQXhDLFNBQXdDLENBQUM7b0JBQ3pDLHFCQUFNLG9CQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFBOztvQkFBMUIsU0FBMEIsQ0FBQzs7OztTQUM5QixDQUFDLENBQUM7SUFFSCxFQUFFLENBQUMsOEJBQThCLEVBQUU7Ozt3QkFDL0IscUJBQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUE7O29CQUF6QixTQUF5QixDQUFDO29CQUMxQixxQkFBTSxrQkFBa0IsQ0FBQyxnQkFBZ0IsRUFB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