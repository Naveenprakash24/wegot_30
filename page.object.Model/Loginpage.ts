import { ElementFinder, element, by, protractor ,browser } from "protractor";
import {BasePage} from './BasePage';
import { timeout } from "../config/constants";

export class LoginPage extends BasePage {

    public email : ElementFinder;
    public password : ElementFinder;
    public button : ElementFinder;
    public loginform: ElementFinder;
    public usernameReqMessage : ElementFinder;
    public passwordReqMessage : ElementFinder;
    public EC: any;
      
    constructor () {
        super();
        this.email= element(by.id('mat-input-0'));
        this.password= element(by.id('mat-input-1'));
        this.button= element(by.xpath('//span[@class="mat-button-wrapper"]'));
        this.loginform= element(by.css('body > app-root > app-login > div > div.login-content > div > div.login-form'));
        this.usernameReqMessage= element(by.cssContainingText('.text text-danger ng-star-inserted', 'Username is required'));   
        this.passwordReqMessage= element(by.cssContainingText('.text text-danger ng-star-inserted', 'Password is required'));   
        this.EC = protractor.ExpectedConditions;           
    }

    public async loginpage (email : string,password : any){ 
        await browser.wait(this.EC.visibilityOf(this.email),timeout.POLLING);
        // await this.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        // await this.email.sendKeys(protractor.Key.DELETE);
        await this.email.sendKeys(email);
        // await this.password.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        // await this.password.sendKeys(protractor.Key.DELETE);    
        await this.password.sendKeys(password);
        await this.button.click();
        await browser.wait(this.EC.visibilityOf(this.button),timeout.POLLING);
        console.log('Login Sucessfull...');
    }

    public async incorrentUserName(incorrentName: string,password : any) {
        await browser.sleep(5000);    
        await this.email.sendKeys(incorrentName);
        await this.password.sendKeys(password);
        await this.button.click();
        await browser.sleep(5000);    
    }

    public async incorrentPassword(userEmail: string,password : any) {   
        await browser.sleep(5000);    
        await this.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.email.sendKeys(protractor.Key.DELETE);
        await this.email.sendKeys(userEmail);
        await this.password.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.password.sendKeys(protractor.Key.DELETE);
        await this.password.sendKeys(password);
        await this.button.click();
    }

    public async withoutUserNameAndPassword() {
        await this.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.email.sendKeys(protractor.Key.DELETE);
        await this.email.click();
        await this.password.click();
        await this.password.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.password.sendKeys(protractor.Key.DELETE);
        await this.loginform.click();
        await this.button.click();
    }

    public async onlyWithUsername(email) {
        await this.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.email.sendKeys(protractor.Key.DELETE);
        await this.email.sendKeys(email);
        await this.password.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.password.sendKeys(protractor.Key.DELETE);
        await this.button.click();
    }

    public async onlyWithPassword(password) {
        await this.email.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.email.sendKeys(protractor.Key.DELETE);
        await this.password.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        await this.password.sendKeys(protractor.Key.DELETE);        
        await this.password.sendKeys(password);
        await this.button.click();
    }

    getHomePage(){
        this.goto("/")
        console.log("LoginPage");
    }

}