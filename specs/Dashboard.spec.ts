import { Dashboard } from "../page.object.Model/Dashboard";
import { LoginPage } from "../page.object.Model/Loginpage";
import * as loginData from '../../data/authentication.json';

const email = (<any>loginData).validUserNameAndPassword.validemail;
const password = (<any>loginData).validUserNameAndPassword.validpassword;

describe('DashBoard page ',function(){

    let clickdistributpage: Dashboard = new Dashboard();
    let homepage: LoginPage = new LoginPage();

    beforeAll(async () => {
        await homepage.loginpage(email,password);
    });

    it('Verify Usage treads chart', async ()=> {
        await clickdistributpage.usageTreds();
    });
});