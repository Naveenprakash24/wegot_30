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
var PageBase = /** @class */ (function () {
    function PageBase() {
        //this.menupg = element(by.xpath("//mat-icon[@class='mat-icon material-icons mat-icon-no-color']"));
        this.menupg = protractor_1.element(protractor_1.by.xpath("//button[@class='mat-icon-button']"));
        this.pageHeader = protractor_1.element(protractor_1.by.xpath("(//mat-drawer-content/app-header/mat-toolbar/mat-toolbar-row/span)[1]"));
        this.EC = protractor_1.protractor.ExpectedConditions;
    }
    /* public async headerPageToBeVerify(selectOption: ElementFinder, verifyHeader: string) {
        return browser.wait(this.EC.elementToBeClickable(this.menupg), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        .then(()=>{
            return this.menupg.click();
        })
        .then(()=>{
            return browser.wait(this.EC.elementToBeClickable(selectOption), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        })
        .then(()=>{
            return selectOption.click();
        })
        .then(()=>{
            return browser.wait(this.EC.visibilityOf(this.pageHeader), timeout.TIMEOUT_ELEMENT_LOAD, 'Page Header takes long time to be visible')
        })
        .then(()=>{
            browser.sleep(5000);
            return this.pageHeader.getText()
        })
        .then((actualValue) => {
            console.info("Actual Value: " + actualValue);
            return expect(actualValue).toBe(verifyHeader);
        })
        .catch((err)=>{
            console.log('Error Value...' + err)
            return Promise.reject(err);
        })
    }
 */
    PageBase.prototype.verifyElementString = function (expectedValue, element) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                // return this.scrollToElement(element)
                return [2 /*return*/, protractor_1.browser.wait(this.EC.visibilityOf(element), constants_1.timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
                        .then(function () {
                        return element.getText()
                            .then(function (actualValue) {
                            console.info("Actual Value: " + actualValue);
                            // return expect(actualValue).toBe(expectedValue);
                            return expect(actualValue.indexOf(expectedValue) !== -1).toBe(true);
                        });
                    })
                        .catch(function (err) {
                        console.log('Error Value...' + err);
                        return Promise.reject(err);
                    })];
            });
        });
    };
    return PageBase;
}());
exports.PageBase = PageBase;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZUJhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlLm9iamVjdC5Nb2RlbC9wYWdlQmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEseUNBQTZFO0FBQzdFLGlEQUE4QztBQUU5QztJQU1JO1FBQ0ksb0dBQW9HO1FBQ3JHLElBQUksQ0FBQyxNQUFNLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLG9DQUFvQyxDQUFDLENBQUMsQ0FBQztRQUNyRSxJQUFJLENBQUMsVUFBVSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1RUFBdUUsQ0FBQyxDQUFDLENBQUM7UUFDN0csSUFBSSxDQUFDLEVBQUUsR0FBRyx1QkFBVSxDQUFDLGtCQUFrQixDQUFDO0lBQzVDLENBQUM7SUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBMkJEO0lBQ2Msc0NBQW1CLEdBQWhDLFVBQWlDLGFBQXFCLEVBQUUsT0FBc0I7OztnQkFDMUUsdUNBQXVDO2dCQUN2QyxzQkFBTyxvQkFBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxtQkFBTyxDQUFDLG9CQUFvQixFQUFFLHdDQUF3QyxDQUFDO3lCQUN6SCxJQUFJLENBQUM7d0JBQ0YsT0FBTyxPQUFPLENBQUMsT0FBTyxFQUFFOzZCQUN2QixJQUFJLENBQUMsVUFBQyxXQUFXOzRCQUNkLE9BQU8sQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsV0FBVyxDQUFDLENBQUM7NEJBQzdDLGtEQUFrRDs0QkFDbEQsT0FBTyxNQUFNLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzt3QkFDeEUsQ0FBQyxDQUFDLENBQUM7b0JBQ1AsQ0FBQyxDQUFDO3lCQUNELEtBQUssQ0FBQyxVQUFDLEdBQUc7d0JBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsR0FBRyxHQUFHLENBQUMsQ0FBQTt3QkFDbkMsT0FBTyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUMvQixDQUFDLENBQUMsRUFBQTs7O0tBQ0w7SUFFTCxlQUFDO0FBQUQsQ0FBQyxBQTFERCxJQTBEQztBQTFEWSw0QkFBUSJ9