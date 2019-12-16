import { LoginPage } from "../page.object.Model/Loginpage";
import * as loginData from '../../data/authentication.json';

const email = (<any>loginData).validUserNameAndPassword.validemail;
const password = (<any>loginData).validUserNameAndPassword.validpassword;
const incorrentName = (<any>loginData).invalidNameAndPassword.invalidName;
const incorrectPassword = (<any>loginData).invalidNameAndPassword.invalidPassword;

describe('Login page ', () => {

  let homepage : LoginPage = new LoginPage();

  beforeAll( async ()=> {
    await homepage.getHomePage();
  });

    xit('Enter the incorrect username and right password and Click sigin',async ()=> {
      await homepage.incorrentUserName(incorrentName,password);
    });

    xit('Click on Sigin without username and password',async ()=> {
      await homepage.withoutUserNameAndPassword();
      await expect(homepage.usernameReqMessage).toBeTruthy();
      await expect(homepage.passwordReqMessage).toBeTruthy();
    });

    xit('Enter the right username and incorrect password and Click sigin',async()=> {
      await homepage.incorrentUserName(email,incorrectPassword);
    });

    xit('Click on Sigin only with username',async ()=> {
      await homepage.onlyWithUsername(email);
    });

    xit('Click On Sigin only with Password',async() => {
      await homepage.onlyWithPassword(password);
    });

    it('Enter the correct username and password',async ()=> { 
      await homepage.loginpage(email,password);
    });

});