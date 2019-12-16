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
var Distribution = /** @class */ (function () {
    function Distribution() {
        this.menuIcon = protractor_1.element(protractor_1.by.xpath("//mat-icon[@class='mat-icon material-icons mat-icon-no-color']"));
        this.distributedpg = protractor_1.element(protractor_1.by.xpath("//button[@routerlink='/distribution']"));
        this.selectblockHeader = protractor_1.element(protractor_1.by.xpath("//div[contains(text(),'A Block')]"));
        this.selectapartmentdoorNo = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'101')]"));
        this.expectedthisMonth = protractor_1.element(protractor_1.by.css('.usage > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)'));
        this.expectedToday = protractor_1.element(protractor_1.by.css('.usage > div:nth-child(2) > div:nth-child(2) > span:nth-child(1)'));
        this.overallTotal = protractor_1.element(protractor_1.by.css('.cummulative > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)'));
        this.overallBathroom = protractor_1.element(protractor_1.by.css('.cummulative > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)'));
        this.overallKitchen = protractor_1.element(protractor_1.by.css('div.usage-text:nth-child(3) > span:nth-child(2)'));
        this.inletStatusKitchen = protractor_1.element(protractor_1.by.css('div.current-usage:nth-child(3) > div:nth-child(1) > span:nth-child(2)'));
        this.inletStatusBathroom = protractor_1.element(protractor_1.by.xpath('//*[@id="mat-dialog-0"]/app-dist-dialog/form/mat-dialog-content/div/div[2]/div[2]/div[2]/span[2]'));
        this.close = protractor_1.element(protractor_1.by.xpath("//span[contains(text(),'Close')]"));
        this.EC = protractor_1.protractor.ExpectedConditions;
    }
    Distribution.prototype.distributionpage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.menuIcon.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.distributedpg.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(this.EC.visibilityOf(this.distributedpg), constants_1.timeout.POLLING)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Distribution.prototype.selectapartment = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.selectblockHeader.click()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, this.selectapartmentdoorNo.click()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, protractor_1.browser.wait(this.EC.visibilityOf(this.selectapartmentdoorNo), constants_1.timeout.POLLING)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Distribution.prototype.closeUsageSummary = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.close.click()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Distribution;
}());
exports.Distribution = Distribution;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRGlzdHJpYnV0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vcGFnZS5vYmplY3QuTW9kZWwvRGlzdHJpYnV0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx5Q0FBNkU7QUFDN0UsaURBQThDO0FBRTlDO0lBZUk7UUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxnRUFBZ0UsQ0FBQyxDQUFDLENBQUM7UUFDcEcsSUFBSSxDQUFDLGFBQWEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsdUNBQXVDLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxDQUFDO1FBQ2hGLElBQUksQ0FBQyxxQkFBcUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQyxDQUFDO1FBQ2pGLElBQUksQ0FBQyxpQkFBaUIsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxDQUFDO1FBQzdHLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGtFQUFrRSxDQUFDLENBQUMsQ0FBQztRQUN6RyxJQUFJLENBQUMsWUFBWSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyx3RUFBd0UsQ0FBQyxDQUFDLENBQUM7UUFDOUcsSUFBSSxDQUFDLGVBQWUsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxHQUFHLENBQUMsd0VBQXdFLENBQUMsQ0FBQyxDQUFDO1FBQ2pILElBQUksQ0FBQyxjQUFjLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLGlEQUFpRCxDQUFDLENBQUMsQ0FBQztRQUN6RixJQUFJLENBQUMsa0JBQWtCLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsR0FBRyxDQUFDLHVFQUF1RSxDQUFDLENBQUMsQ0FBQztRQUNuSCxJQUFJLENBQUMsbUJBQW1CLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLGtHQUFrRyxDQUFDLENBQUMsQ0FBQztRQUNqSixJQUFJLENBQUMsS0FBSyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxrQ0FBa0MsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0lBQzVDLENBQUM7SUFFWSx1Q0FBZ0IsR0FBN0I7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLFFBQVEsQ0FBQyxLQUFLLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7d0JBQzVCLHFCQUFNLElBQUksQ0FBQyxhQUFhLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUFoQyxTQUFnQyxDQUFDO3dCQUNqQyxxQkFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLEVBQUUsbUJBQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQTdFLFNBQTZFLENBQUM7Ozs7O0tBQ2pGO0lBRVksc0NBQWUsR0FBNUI7Ozs7NEJBQ0kscUJBQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBcEMsU0FBb0MsQ0FBQzt3QkFDckMscUJBQU0sSUFBSSxDQUFDLHFCQUFxQixDQUFDLEtBQUssRUFBRSxFQUFBOzt3QkFBeEMsU0FBd0MsQ0FBQzt3QkFDekMscUJBQU0sb0JBQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLEVBQUUsbUJBQU8sQ0FBQyxPQUFPLENBQUMsRUFBQTs7d0JBQXJGLFNBQXFGLENBQUM7Ozs7O0tBQ3pGO0lBRVksd0NBQWlCLEdBQTlCOzs7OzRCQUNJLHFCQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUE7O3dCQUF4QixTQUF3QixDQUFDOzs7OztLQUM1QjtJQUNMLG1CQUFDO0FBQUQsQ0FBQyxBQTlDRCxJQThDQztBQTlDWSxvQ0FBWSJ9