import { by, ElementFinder, element, protractor, browser } from 'protractor';
import { timeout } from '../config/constants';

export class Distribution {
    public menuIcon: ElementFinder;
    public distributedpg: ElementFinder;
    public selectblockHeader: ElementFinder;
    public selectapartmentdoorNo: ElementFinder;
    public expectedthisMonth: ElementFinder;
    public expectedToday: ElementFinder;
    public overallTotal: ElementFinder;
    public overallBathroom: ElementFinder;
    public overallKitchen: ElementFinder;
    public inletStatusKitchen: ElementFinder;
    public inletStatusBathroom: ElementFinder;
    public close: ElementFinder;
    public EC: any;

    constructor() {
        this.menuIcon = element(by.xpath("//mat-icon[@class='mat-icon material-icons mat-icon-no-color']"));
        this.distributedpg = element(by.xpath("//button[@routerlink='/distribution']"));
        this.selectblockHeader = element(by.xpath("//div[contains(text(),'A Block')]"));
        this.selectapartmentdoorNo = element(by.xpath("//span[contains(text(),'101')]"));
        this.expectedthisMonth = element(by.css('.usage > div:nth-child(2) > div:nth-child(1) > span:nth-child(1)'));
        this.expectedToday = element(by.css('.usage > div:nth-child(2) > div:nth-child(2) > span:nth-child(1)'));
        this.overallTotal = element(by.css('.cummulative > div:nth-child(2) > div:nth-child(1) > span:nth-child(2)'));
        this.overallBathroom = element(by.css('.cummulative > div:nth-child(2) > div:nth-child(2) > span:nth-child(2)'));
        this.overallKitchen = element(by.css('div.usage-text:nth-child(3) > span:nth-child(2)'));
        this.inletStatusKitchen = element(by.css('div.current-usage:nth-child(3) > div:nth-child(1) > span:nth-child(2)'));
        this.inletStatusBathroom = element(by.xpath('//*[@id="mat-dialog-0"]/app-dist-dialog/form/mat-dialog-content/div/div[2]/div[2]/div[2]/span[2]'));
        this.close = element(by.xpath("//span[contains(text(),'Close')]"));
        this.EC = protractor.ExpectedConditions;
    }

    public async distributionpage() {
        await this.menuIcon.click();
        await this.distributedpg.click();
        await browser.wait(this.EC.visibilityOf(this.distributedpg), timeout.POLLING);      
    }

    public async selectapartment() {
        await this.selectblockHeader.click();
        await this.selectapartmentdoorNo.click();  
        await browser.wait(this.EC.visibilityOf(this.selectapartmentdoorNo), timeout.POLLING);   
    }

    public async closeUsageSummary() {
        await this.close.click();
    }
}
