import { Distribution } from "../page.object.Model/Distribution"
import { LoginPage } from "../page.object.Model/Loginpage";
import { Connection } from "../utility/Connection"
import * as loginData from '../../data/authentication.json';
import { browser } from "protractor";
import { month ,today,overallBathRoom,overallKitchen,overallTotal } from "../utility/Dbquery";

const email = (<any>loginData).validUserNameAndPassword.validemail;
const password = (<any>loginData).validUserNameAndPassword.validpassword;

describe('Distribution page', () => {

    let clickdistributpage: Distribution = new Distribution();
    let homepage: LoginPage = new LoginPage();
    let connect: Connection = new Connection();

    beforeAll(async () => {
        await browser.sleep(5000);
        await homepage.loginpage(email,password);
        await browser.sleep(10000);
    });

    it('Verify the Distribution page', async () => {
        await browser.sleep(5000);
        await clickdistributpage.distributionpage();
        await browser.sleep(5000);
    });

    it('Verify currtMonth usage data should be displayed ', async () => {
        await clickdistributpage.selectapartment();
        let monthUsage: any = await connect.Get(month);
        let expectedCurrtMonth = (monthUsage[0].day_total);
        let actualCurrtMonth = await clickdistributpage.expectedthisMonth.getText();
        await expect(actualCurrtMonth).toContain(expectedCurrtMonth);  
    });

    it('Verify today usage data should be displayed ',async()=> {
        let todayusage: any = await connect.Get(today);
        let expectedCurrtdayusage = (todayusage[0].day_total);
        let actualCurrtdayusage = await clickdistributpage.expectedToday.getText();
        await expect(actualCurrtdayusage).toContain(expectedCurrtdayusage);
    });

    it('Verify overall reading of current day usage  ',async () => {
        let ovrTotal: any = await connect.Get(overallTotal);
        let expectedOverAllTotal = (ovrTotal[0].cum);
        let actualOverAllTotal = await clickdistributpage.overallTotal.getText();
        await expect(actualOverAllTotal).toContain(expectedOverAllTotal);
        await clickdistributpage.closeUsageSummary();
    });

    xit('Verfiy Cumulative reading of each inlet and total should be displayed',async ()=> {
        let bathroomUsage: any = await connect.Get(overallBathRoom);
        let bathRoom = (bathroomUsage[1].cum_value);
        let currtBathroomUsage = await clickdistributpage.overallBathroom.getText();
        await expect(currtBathroomUsage).toContain(bathRoom);
        
        let kitchenUsage: any = await connect.Get(overallKitchen);
        let kitchen = (kitchenUsage[0].cum_value);
        let currtKitchenusage = await clickdistributpage.overallKitchen.getText();
        await expect(currtKitchenusage).toContain(kitchen);
        await clickdistributpage.closeUsageSummary();
    });

});
