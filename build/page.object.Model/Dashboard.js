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
var Dashboard = /** @class */ (function () {
    function Dashboard() {
        this.usageTredsReport = protractor_1.element(protractor_1.by.css(''));
        this.fromDateUsageTreds = protractor_1.element(protractor_1.by.css(''));
        this.formDateMonth = protractor_1.element(protractor_1.by.xpath('//button[@class="mat-calendar-previous-button mat-icon-button"]'));
        this.selectfromDate = protractor_1.element(protractor_1.by.xpath(' //div[@class="mat-calendar-body-cell-content"][contains(text(),"10")]'));
        this.toDateUsageTreds = protractor_1.element(protractor_1.by.xpath('//div[@class="mat-form-field-suffix ng-tns-c5-19 ng-star-inserted"]//button[@class="mat-icon-button"]'));
        this.toDateMonth = protractor_1.element(protractor_1.by.xpath('//button[@class="mat-calendar-next-button mat-icon-button"]'));
        this.selectToDate = protractor_1.element(protractor_1.by.xpath('//div[@class="mat-calendar-body-cell-content mat-calendar-body-today"][contains(text(),"19")]'));
        this.downloadReport = protractor_1.element(protractor_1.by.xpath('//span[@class="mat-button-wrapper"][contains(text(),"Download")]'));
        this.alarmReport = protractor_1.element(protractor_1.by.xpath('/html/body/app-root/app-home/mat-drawer-container/mat-drawer-content/app-dashboard/main/div[1]/div[3]/div[3]/div/button'));
        this.blockReport = protractor_1.element(protractor_1.by.xpath('/html/body/app-root/app-home/mat-drawer-container/mat-drawer-content/app-dashboard/main/div[2]/div[1]/div[3]/div[2]/button'));
        this.individualHouseReport = protractor_1.element(protractor_1.by.xpath('/html/body/app-root/app-home/mat-drawer-container/mat-drawer-content/app-dashboard/main/div[2]/div[2]/div[4]/div/button'));
        this.bubbleChartReport = protractor_1.element(protractor_1.by.xpath('/html/body/app-root/app-home/mat-drawer-container/mat-drawer-content/app-dashboard/main/div[3]/div[2]/div[3]/div/a[2]'));
    }
    Dashboard.prototype.usageTreds = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.usageTredsReport.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.fromDateUsageTreds.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.formDateMonth.click()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, this.selectfromDate.click()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, this.toDateUsageTreds.click()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, this.toDateMonth.click()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, this.selectToDate.click()];
                    case 7:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.activealarm = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alarmReport.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.blockWiseReport = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.blockReport.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.individualHouse = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.individualHouseReport.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dashboard.prototype.waterMap = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/];
            });
        });
    };
    Dashboard.prototype.bubbleChart = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.bubbleChartReport.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Dashboard;
}());
exports.Dashboard = Dashboard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGFzaGJvYXJkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS5vYmplY3QuTW9kZWwvRGFzaGJvYXJkLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBd0Q7QUFFeEQ7SUFlSTtRQUNJLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztRQUM1QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsaUVBQWlFLENBQUMsQ0FBQyxDQUFDO1FBQzFHLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHdFQUF3RSxDQUFDLENBQUMsQ0FBQztRQUNsSCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHVHQUF1RyxDQUFDLENBQUMsQ0FBQztRQUNuSixJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2REFBNkQsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLFlBQVksR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsK0ZBQStGLENBQUMsQ0FBQyxDQUFDO1FBQ3ZJLElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQztRQUM1RyxJQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx5SEFBeUgsQ0FBQyxDQUFDLENBQUM7UUFDaEssSUFBSSxDQUFDLFdBQVcsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNEhBQTRILENBQUMsQ0FBQyxDQUFDO1FBQ25LLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMseUhBQXlILENBQUMsQ0FBQyxDQUFDO1FBQzFLLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUhBQXVILENBQUMsQ0FBQyxDQUFDO0lBQ3hLLENBQUM7SUFFWSw4QkFBVSxHQUF2Qjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFuQyxTQUFtQyxDQUFDO3dCQUNwQyxxQkFBTSxJQUFJLENBQUMsa0JBQWtCLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFyQyxTQUFxQyxDQUFDO3dCQUN0QyxxQkFBTSxJQUFJLENBQUMsYUFBYSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBaEMsU0FBZ0MsQ0FBQzt3QkFDakMscUJBQU0sSUFBSSxDQUFDLGNBQWMsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQWpDLFNBQWlDLENBQUM7d0JBQ2xDLHFCQUFNLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQW5DLFNBQW1DLENBQUM7d0JBQ3BDLHFCQUFNLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUE5QixTQUE4QixDQUFDO3dCQUMvQixxQkFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBL0IsU0FBK0IsQ0FBQzs7Ozs7S0FDbkM7SUFFWSwrQkFBVyxHQUF4Qjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzs7Ozs7S0FDbEM7SUFFWSxtQ0FBZSxHQUE1Qjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBOUIsU0FBOEIsQ0FBQzs7Ozs7S0FDbEM7SUFFWSxtQ0FBZSxHQUE1Qjs7Ozs0QkFDSSxxQkFBTSxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUF4QyxTQUF3QyxDQUFDOzs7OztLQUM1QztJQUVZLDRCQUFRLEdBQXJCOzs7Ozs7S0FFQztJQUVZLCtCQUFXLEdBQXhCOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQXBDLFNBQW9DLENBQUM7Ozs7O0tBQ3hDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDLEFBM0RELElBMkRDO0FBM0RZLDhCQUFTIn0=