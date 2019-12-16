import { ElementFinder, element, by, protractor, browser, promise } from "protractor";
import { timeout } from "../config/constants";

export class Profilepagedemo {
    public profilePag: ElementFinder;
    public addProfile: ElementFinder;
    public AddUserProfile : ElementFinder;
    public txtChooseBlock : ElementFinder;
    public txtChooseApart: ElementFinder;
    public txtEnterUserName: ElementFinder;
    public txtEnterEmail: ElementFinder;
    public txtEnterPhoneNo: ElementFinder;
    public txtEnterSqft: ElementFinder;
    public btnAdd: ElementFinder;
    public getAddUserProfile : ElementFinder;
    public selectIconRow: ElementFinder;
    public lstColTabUser: ElementFinder;
    public snackBarClose: ElementFinder;
    public PaneEditbtn: ElementFinder;
    public PaneEditoptn: ElementFinder;
    public cdkPaneDel: ElementFinder;
    public snackBarGetTxt: ElementFinder;
    public cdkPaneEdit1: ElementFinder;
    public addSearchFilter: ElementFinder;
    private readonly XPATH_FLOATING_LIST_OPTIONS = "//div[@id='mat-autocomplete-2']//mat-option/span[contains(., '$OPTION')]";
    public EC: any;


    constructor() {
        this.profilePag = element(by.xpath('//mat-list-item//span[@class="icon icon-profile"]'));
        this.addProfile = element(by.xpath("//mat-sidenav-content//button//mat-icon[contains(text(),'add')]"));
        this.AddUserProfile = element(by.xpath("//app-add-user-dialog//h1[contains(@id,'mat-dialog-title')]"));
        this.txtChooseBlock = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Choose Block']"));
        this.txtChooseApart = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Choose Apartment']"));
        this.txtEnterUserName = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter Name']"));
        this.txtEnterEmail = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter Email']"));
        this.txtEnterPhoneNo = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter PhoneNo']"));
        this.txtEnterSqft = element(by.xpath("//mat-dialog-content//p//mat-form-field//input[@placeholder='Enter Sq.ft']"));
        this.btnAdd = element(by.xpath("//mat-dialog-actions/button[@type='submit']"));
        this.getAddUserProfile =element(by.xpath("//app-add-user-dialog//h1[contains(@id,'mat-dialog-title')]"));
        this.selectIconRow = element(by.xpath("//mat-card-content//table//tbody//tr//td)[7]//button"));
        this.lstColTabUser = element(by.xpath("//mat-card-content//table/thead/tr/th)[1]//button"));
        this.snackBarClose = element(by.id("mat-input-2"));
        this.snackBarGetTxt = element(by.xpath("//snack-bar-container//simple-snack-bar//span)[1]"));
        //span//mat-icon[contains(text(),'more_vert')]"
        this.PaneEditbtn = element(by.xpath("//div[@class='cdk-overlay-backdrop cdk-overlay-transparent-backdrop cdk-overlay-backdrop-showing']"));
        this.PaneEditoptn = element(by.xpath("//div//button//mat-icon[contains(text(),'edit')]"));
        this.cdkPaneDel = element(by.xpath("//div//mat-icon[contains(text(),'delete')]"));
        this.addSearchFilter = element(by.id("mat-input-2"));
        this.cdkPaneEdit1 = element(by.xpath("//div[@class='cdk-overlay-pane']//button)[1]/mat-icon"));
        this.EC = protractor.ExpectedConditions;    
    }

    public async profilePage() {  
      await this.profilePag.click();
    }
    public async clickadduser(){
      await this.addProfile.click();
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
      let elmOption = element(by.xpath(this.XPATH_FLOATING_LIST_OPTIONS.replace("$OPTION", "D Block")));
      let elmOption1 = element(by.xpath(this.XPATH_FLOATING_LIST_OPTIONS.replace("$OPTION", "225")));
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
      public async SearchandEditUser(EditUserName: string){
        browser.sleep(3000);
        return browser.wait(this.EC.elementToBeClickable(this.snackBarClose), timeout.TIMEOUT_ELEMENT_LOAD, ' Loading takes long time to be visible')
        .then(()=>{
            this.addSearchFilter.sendKeys(EditUserName);
            browser.sleep(1000);
            this.PaneEditbtn.click();
            browser.sleep(1000);
            this.PaneEditoptn.click();
          
        //})
      //  .then(()=>{
         // this.PaneEditbtn.click();
      //  })
       // .then(()=>{
//      this.PaneEditoptn.click();
       })
        /* .then(()=>{
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
        }); */
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
}