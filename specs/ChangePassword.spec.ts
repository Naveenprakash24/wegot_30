import { LoginPage } from "../page.object.Model/Loginpage";
import { changePassword } from "../page.object.Model/ChangePassword";
import * as loginData from '../../data/authentication.json';
import * as newpwd from '../../data/profile_data.json';
import { browser } from "protractor";

const email = (<any>loginData).validUserNameAndPassword.validemail;
const password = (<any>loginData).validUserNameAndPassword.validpassword;
const password2 = (<any>newpwd).Changepassword.password2;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;
const validemail = (<any>loginData).validUserNameAndPassword.validemail;

const fs = require('fs');

let userData = fs.readFileSync('data/profile_data.json');
let ProfileData = JSON.parse(userData)


describe('ChangePassword', () => {
  let homepage: LoginPage = new LoginPage();
  let ChangePwd: changePassword = new changePassword();

  beforeAll( async ()=> {
    await browser.sleep(5000);
    await homepage.loginpage(email,password);
    await browser.sleep(5000);
});
  
      it('Click change password and navigate to the page',async ()=> {
        return ChangePwd.ClickchangePassword();
      });
      
  
      it('Again login with new password',async ()=> {

        return ChangePwd.Newlogin(validemail,password2);
      });
  
    })