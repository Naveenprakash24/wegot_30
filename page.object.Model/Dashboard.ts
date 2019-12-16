import { ElementFinder, element, by } from "protractor";

export class Dashboard {

    public usageTredsReport : ElementFinder;
    public alarmReport: ElementFinder;
    public blockReport: ElementFinder;
    public individualHouseReport: ElementFinder;
    public bubbleChartReport: ElementFinder;
    public fromDateUsageTreds: ElementFinder;
    public formDateMonth: ElementFinder;
    public selectfromDate: ElementFinder;
    public toDateUsageTreds: ElementFinder;
    public toDateMonth: ElementFinder;
    public selectToDate: ElementFinder;
    public downloadReport: ElementFinder;

    constructor() {
        this.usageTredsReport = element(by.css(''));
        this.fromDateUsageTreds = element(by.css(''));
        this.formDateMonth = element(by.xpath('//button[@class="mat-calendar-previous-button mat-icon-button"]'));
        this.selectfromDate = element(by.xpath(' //div[@class="mat-calendar-body-cell-content"][contains(text(),"10")]'));
        this.toDateUsageTreds = element(by.xpath('//div[@class="mat-form-field-suffix ng-tns-c5-19 ng-star-inserted"]//button[@class="mat-icon-button"]'));
        this.toDateMonth = element(by.xpath('//button[@class="mat-calendar-next-button mat-icon-button"]'));
        this.selectToDate = element(by.xpath('//div[@class="mat-calendar-body-cell-content mat-calendar-body-today"][contains(text(),"19")]'));
        this.downloadReport = element(by.xpath('//span[@class="mat-button-wrapper"][contains(text(),"Download")]'));
        this.alarmReport = element(by.xpath('/html/body/app-root/app-home/mat-drawer-container/mat-drawer-content/app-dashboard/main/div[1]/div[3]/div[3]/div/button'));
        this.blockReport = element(by.xpath('/html/body/app-root/app-home/mat-drawer-container/mat-drawer-content/app-dashboard/main/div[2]/div[1]/div[3]/div[2]/button'));
        this.individualHouseReport = element(by.xpath('/html/body/app-root/app-home/mat-drawer-container/mat-drawer-content/app-dashboard/main/div[2]/div[2]/div[4]/div/button'));
        this.bubbleChartReport = element(by.xpath('/html/body/app-root/app-home/mat-drawer-container/mat-drawer-content/app-dashboard/main/div[3]/div[2]/div[3]/div/a[2]'));
    }

    public async usageTreds() {
        await this.usageTredsReport.click();
        await this.fromDateUsageTreds.click();
        await this.formDateMonth.click();
        await this.selectfromDate.click();
        await this.toDateUsageTreds.click();
        await this.toDateMonth.click();
        await this.selectToDate.click();
    }

    public async activealarm() {
        await this.alarmReport.click();
    }

    public async blockWiseReport() {
        await this.blockReport.click();
    }

    public async individualHouse() {
        await this.individualHouseReport.click();
    }

    public async waterMap() {

    }

    public async bubbleChart() {
        await this.bubbleChartReport.click();
    }
}