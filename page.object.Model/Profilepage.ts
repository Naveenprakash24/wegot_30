import { ElementFinder, element, by, protractor, browser } from "protractor";
import { timeout } from "../config/constants";

export class ProfilePage {
    
    
    public profilePag: ElementFinder;
    public getProfileTitle: ElementFinder;
    public addProfile: ElementFinder;
    public getAddUserProfile: ElementFinder;
    public txtChooseBlock: ElementFinder;
    public txtChooseApart: ElementFinder;
    public txtEnterUserName: ElementFinder;
    public txtEnterEmail: ElementFinder;
    public txtEnterPhoneNo: ElementFinder;
    public txtEnterSqft: ElementFinder;
    public btnAdd: ElementFinder;
    public addSearchFilter: ElementFinder;
    public verifyBlock: ElementFinder;
    public verifyApart: ElementFinder;
    public verifyUserName: ElementFinder;
    public verifyEmail: ElementFinder;
    public verifyPhone: ElementFinder;
    public verifySqft: ElementFinder;
    public selectIconRow: ElementFinder;
    public lstColTabUser: ElementFinder;
    public snackBarClose: ElementFinder;
    public cdkPaneEdit: ElementFinder;
    public cdkPaneEdit1: ElementFinder;
    public cdkPaneDel: ElementFinder;
    public snackBarGetTxt: ElementFinder;
    public EC: any;
    private readonly XPATH_FLOATING_LIST_OPTIONS = "//div[@id='mat-autocomplete-2']//mat-option/span[contains(., '$OPTION')]";
   
    constructor() {
        
        this.addProfile = element(by.xpath("//mat-sidenav-content//button//mat-icon[contains(text(),'add')]"));
        //this.profilePag = element(by.xpath('//button[@routerlink="/profile"]'));
        this.profilePag = element(by.xpath('//mat-list-item//span[@class="icon icon-profile"]'));
        this.getProfileTitle = element(by.xpath('//mat-card/mat-card-title'));
        this.getAddUserProfile = element(by.xpath("//app-add-user-dialog//h1[contains(@id,'mat-dialog-title')]"));
        //Add user elements
        this.txtChooseBlock = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Choose Block']"));
        this.txtChooseApart = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Choose Apartment']"));
        this.txtEnterUserName = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter UserName']"));
        this.txtEnterEmail = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter Email']"));
        this.txtEnterPhoneNo = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter PhoneNo']"));
        this.txtEnterSqft = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter Sq.ft']"));
        this.btnAdd = element(by.xpath("//mat-dialog-actions/button[@type='submit']"));
        this.addSearchFilter = element(by.xpath("//mat-form-field//input[@placeholder='Filter']"));
        //user 1st row elements
        this.verifyBlock = element(by.xpath("//mat-card-content//table//tbody//tr//td)[1]"));
        this.verifyApart = element(by.xpath("//mat-card-content//table//tbody//tr//td)[2]"));
        this.verifyUserName = element(by.xpath("//mat-card-content//table//tbody//tr//td)[3]"));
        this.verifyEmail = element(by.xpath("//mat-card-content//table//tbody//tr//td)[4]"));
        this.verifyPhone = element(by.xpath("//mat-card-content//table//tbody//tr//td)[5]"));
        this.verifySqft = element(by.xpath("//mat-card-content//table//tbody//tr//td)[6]"));
        this.selectIconRow = element(by.xpath("//mat-card-content//table//tbody//tr//td)[7]//button"));
        this.lstColTabUser = element(by.xpath("//mat-card-content//table/thead/tr/th)[1]//button"));
        this.snackBarClose = element(by.xpath("//snack-bar-container//simple-snack-bar//button"));
        this.snackBarGetTxt = element(by.xpath("//snack-bar-container//simple-snack-bar//span)[1]"));
        this.cdkPaneEdit = element(by.xpath("//div[@class='cdk-overlay-pane']//button)[1]"));
        this.cdkPaneEdit1 = element(by.xpath("//div[@class='cdk-overlay-pane']//button)[1]/mat-icon"));
        this.cdkPaneDel = element(by.xpath("//div[@class='cdk-overlay-pane']//button)[2]"));
        this.EC = protractor.ExpectedConditions;    
    }
     public async openProfilepage() {
          await this.profilePag.click();
    }
   
    public async clickAddButtonAndVerifyAddUserPopup() {
        //return browser.wait(this.EC.visibilityOf(this.addProfile), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        return this.addProfile.click()
        .then(()=>{
            return this.addProfile.click();
        }) 
        .then(()=>{
            return browser.wait(this.EC.visibilityOf(this.getAddUserProfile), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')   
        })
        .then(()=>{
            return this.getAddUserProfile.getText()
        })
        .then((actualValue) => {
            console.info("Actual Value: " + actualValue);
            return expect(actualValue).toBe('Add User');
        })
        .catch((err)=>{
            console.log('Error Value...' + err);
            return Promise.reject(err);
        })
    }

    public async pickOptionFromFloatingList(option: string) {
        let elmOption = element.all(by.xpath("//div[contains(@id,'mat-autocomplete')]//mat-option")).filter((ele) => {
            return ele.getText()
            .then((elTxt)=>{
                return elTxt === option;
            })
        }).first()        
        return browser.wait(this.EC.visibilityOf(elmOption), timeout.TIMEOUT_ELEMENT_LOAD, 'Floating list takes long time to be visible')
        .then(()=>{
            return browser.wait(this.EC.elementToBeClickable(elmOption), timeout.TIMEOUT_ELEMENT_LOAD, 'Floating list takes long time to be clickable.')
        })
        .then(()=>{
            // browser.sleep(1000);
            return elmOption.click();
        })
        .then(()=>{
            console.info("Selected the option \'" + option + "\' from floating list.");
            return Promise.resolve();
        })
    }

    public async fieldAllUserDetailsAndClickOnAdd(addBlock: string, addApart: string, addUserName: string, addEmail: string, addPhone: string, addSqft: string) {
        let elmOption = element(by.xpath(this.XPATH_FLOATING_LIST_OPTIONS.replace("$OPTION", "A Block")));
        let elmOption1 = element(by.xpath(this.XPATH_FLOATING_LIST_OPTIONS.replace("$OPTION", "101")));
        return browser.wait(this.EC.visibilityOf(this.getAddUserProfile), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        .then(()=>{
            browser.sleep(3000);
            // return elmOption.click();
            return this.pickOptionFromFloatingList(addBlock);
        })
        .then(()=>{
            browser.sleep(3000);
            this.txtChooseApart.click();
            return this.pickOptionFromFloatingList(addApart);
        })
        .then(()=>{
            browser.sleep(2000);
            return this.txtEnterUserName.sendKeys(addUserName);
        })
        .then(()=>{
            browser.sleep(2000);
            return this.txtEnterEmail.sendKeys(addEmail);
        })
        .then(()=>{
            browser.sleep(2000);
            return this.txtEnterPhoneNo.sendKeys(addPhone);
        })
        .then(()=>{
            browser.sleep(2000);
            return this.txtEnterSqft.sendKeys(addSqft);
        })
        .then(()=>{
            browser.sleep(2000);
            return this.btnAdd.click();
        })
        
    }

    public async searchFilterFunc(addPhone: string){
        browser.sleep(3000);
        return browser.wait(this.EC.elementToBeClickable(this.snackBarClose), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        .then(()=>{
            return this.snackBarClose.click();         
        })
        .then(async()=>{
            browser.sleep(5000);
            return expect(await this.addSearchFilter.isPresent()).toBe(true);
        })
        .then(()=>{
            return this.addSearchFilter.clear();
        })
        .then(()=>{
            browser.sleep(10000);
            return this.addSearchFilter.sendKeys(addPhone)            
            .then(()=>{
                browser.sleep(2000)
                return this.addSearchFilter.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"))
            })
        });
    }

    public async editUserNameEmailPhone(editUserName: string, editEmail: string, editPhone: string){
        browser.sleep(5000)
        return browser.wait(this.EC.elementToBeClickable(this.selectIconRow), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        .then(()=>{
            return this.selectIconRow.click();
        })
        .then(async()=>{
            browser.sleep(40000)
            return browser.wait(this.EC.elementToBeClickable(this.cdkPaneEdit1), 50000);
        })
        .then(()=>{
            browser.sleep(2000)
            return this.cdkPaneEdit1.click();
            // return browser.actions().mouseMove(this.cdkPaneEdit).click().perform()
        })
        .then(()=>{
            browser.sleep(10000);
            return this.txtEnterUserName.clear()
            .then(()=>{
                return this.txtEnterUserName.sendKeys(editUserName);
            })
        })
        .then(()=>{
            browser.sleep(10000);
            return this.txtEnterEmail.clear()
            .then(()=>{
                return this.txtEnterEmail.sendKeys(editEmail);
            })
        })
        .then(()=>{
            browser.sleep(10000);
            return this.txtEnterPhoneNo.clear()
            .then(()=>{
                return this.txtEnterPhoneNo.sendKeys(editPhone);
            })
        })
        .then(()=>{
            return this.btnAdd.click();
        })
        
    }

    public async addedUserShouldBeDeleted(){
        browser.sleep(5000)
        return browser.wait(this.EC.elementToBeClickable(this.selectIconRow), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        .then(()=>{
            return this.selectIconRow.click();
        })
        .then(async()=>{
            browser.sleep(40000)
            return browser.wait(this.EC.elementToBeClickable(this.cdkPaneDel), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        })
        .then(()=>{
            browser.sleep(2000)
            return this.cdkPaneDel.click();
        })
        .then(async()=>{
            browser.sleep(40000)
            return browser.wait(this.EC.elementToBeClickable(this.snackBarClose), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        })
        .then(async()=>{
            browser.sleep(40000);
            return expect(await this.snackBarClose.isPresent()).toBe(true);
        })
    }
}
