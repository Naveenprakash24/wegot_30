import { ElementFinder, element, by, browser, protractor } from "protractor";
import * as loginData from '../../data/profile_data.json';
import * as logiData from '../../data/authentication.json';
import { timeout } from "../config/constants.js";
const password1 = (<any>loginData).Changepassword.password1;
const password2 = (<any>loginData).Changepassword.password2;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;

export class changePassword {
    public homeIcon: ElementFinder;
    public changePassword : ElementFinder;
    public oldPassword : ElementFinder;
    public newPassword : ElementFinder;
    public confirmPassword : ElementFinder;
    public submitButton : ElementFinder;
    public EC: any;
    public username: ElementFinder;
    public password : ElementFinder;
    public SignIn : ElementFinder;

    constructor(){
        this.homeIcon = element(by.xpath("//button[@class='mat-button']"))
        this.changePassword = element(by.xpath("//a//span[contains(text(),'Change Password')]"));
        this.oldPassword = element(by.xpath("//div//input[@placeholder='Enter Your Existing Password']"));
        this.newPassword=element(by.xpath("//div//input[@placeholder='Enter Your New Password']"));
        this.confirmPassword =element(by.xpath("//div//input[@placeholder='Confirm Your New Password']"));
        this.submitButton=element(by.xpath('//div//button//span[contains(text(),"Submit")]'));
        this.username=element(by.xpath("//div//input[@placeholder='Username']"));
        this.password=element(by.xpath("//div//input[@placeholder='Password']"));
        this.SignIn=element(by.xpath("//button[@class='login-button mat-raised-button']"));
        this.EC = protractor.ExpectedConditions;

    }
    public async ClickchangePassword() {
        await this.homeIcon.click();
        await browser.sleep(timeout.POLLING);
        await browser.wait(this.EC.visibilityOf(this.changePassword),timeout.POLLING);
        await this.changePassword.click()
        await browser.sleep(timeout.POLLING);
        this.oldPassword.sendKeys(password1);
        await browser.sleep(timeout.POLLING);
        this.newPassword.sendKeys(password2);
        await browser.sleep(timeout.POLLING);
        this.confirmPassword.sendKeys(password2);
        await  browser.sleep(timeout.POLLING);
        this.submitButton.click();
      
    }
    public async Newlogin(validemail,password2){
        await browser.sleep(timeout.POLLING);
        await this.username.sendKeys(validemail);
        await browser.sleep(timeout.POLLING);
        await this.password.sendKeys(password2);
        await browser.sleep(timeout.POLLING);
        await this.SignIn.click();

}}