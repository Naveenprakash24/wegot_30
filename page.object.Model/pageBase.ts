import { ElementFinder, element, by, protractor, browser } from "protractor";
import { timeout } from "../config/constants";

export class PageBase {

    public menupg: ElementFinder;
    public pageHeader: ElementFinder;
    public EC: any;

    constructor() {
        //this.menupg = element(by.xpath("//mat-icon[@class='mat-icon material-icons mat-icon-no-color']"));
       this.menupg = element(by.xpath("//button[@class='mat-icon-button']"));
        this.pageHeader = element(by.xpath("(//mat-drawer-content/app-header/mat-toolbar/mat-toolbar-row/span)[1]"));
        this.EC = protractor.ExpectedConditions;
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
    public async verifyElementString(expectedValue: string, element: ElementFinder) {
        // return this.scrollToElement(element)
        return browser.wait(this.EC.visibilityOf(element), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        .then(()=>{
            return element.getText()
            .then((actualValue) => {
                console.info("Actual Value: " + actualValue);
                // return expect(actualValue).toBe(expectedValue);
                return expect(actualValue.indexOf(expectedValue) !== -1).toBe(true);
            });
        })
        .catch((err)=>{
            console.log('Error Value...' + err)
            return Promise.reject(err);
        })
    }

}
