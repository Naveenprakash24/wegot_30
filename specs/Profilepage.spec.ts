import { LoginPage } from "../page.object.Model/Loginpage";
import { ProfilePage } from "../page.object.Model/Profilepage";
import { PageBase } from "../page.object.Model/PageBase";
import * as loginData from '../../data/authentication.json';
import { browser } from "protractor";
import { async } from "q";

const email = (<any>loginData).validUserNameAndPassword.validemail;
const password = (<any>loginData).validUserNameAndPassword.validpassword;
jasmine.DEFAULT_TIMEOUT_INTERVAL = 240000;

const fs = require('fs');

let userData = fs.readFileSync('data/profile_data.json');
let ProfileData = JSON.parse(userData)

describe('Profiles page',()=> {

    let homepage: LoginPage = new LoginPage();
    let clickProfilepg: ProfilePage = new ProfilePage();
    let pgBase: PageBase = new PageBase();

    beforeAll( async ()=> {
        await browser.sleep(5000);
        await homepage.loginpage(email,password);
        await browser.sleep(5000);
    });
    let addBlock: string = ProfileData.addUser.addBlock;
    let addApart: string = ProfileData.addUser.addApart;
    let addUserName: string = ProfileData.addUser.addUserName;
    let addEmail: string = ProfileData.addUser.addEmail;
    let addPhone: string = ProfileData.addUser.addPhone;
    let addSqft: string = ProfileData.addUser.addSqft;

    /* xit('Click on Profiles tab an verify profile header',async ()=> {
        let verifyHeader: string = ProfileData.profileHeader.verifyHeader;
        return pgBase.headerPageToBeVerify(clickProfilepg.profilePag, verifyHeader);
    }); */
    it('open profile page',async()=>{
        return clickProfilepg.openProfilepage();

    })

    it('Verify that add user popup should be opened',async ()=> {
        return clickProfilepg.clickAddButtonAndVerifyAddUserPopup();
    });

    it('Verify that user should be added to the user details table',async ()=> {
        return clickProfilepg.fieldAllUserDetailsAndClickOnAdd(addBlock, addApart, addUserName, addEmail, addPhone, addSqft)
        .then(()=>{
            // browser.sleep(40000);
            return clickProfilepg.searchFilterFunc(addPhone);
        })
    });

    it('Verify that Added User details should be same',async ()=> {
        browser.sleep(10000);
        return pgBase.verifyElementString(addBlock, clickProfilepg.verifyBlock)
        .then(()=>{
            return pgBase.verifyElementString(addApart, clickProfilepg.verifyApart);
        })
        .then(()=>{
            return pgBase.verifyElementString(addUserName, clickProfilepg.verifyUserName);
        })
        .then(()=>{
            return pgBase.verifyElementString(addEmail, clickProfilepg.verifyEmail);
        })
        .then(()=>{
            return pgBase.verifyElementString(addPhone, clickProfilepg.verifyPhone);
        })
        .then(()=>{
            return pgBase.verifyElementString(addSqft, clickProfilepg.verifySqft);
        })
    });

    it('Edit username, email &phone and verify the same',async ()=> {
        let editUserName: string = ProfileData.EditUser.editUserName;
        let editEmail: string = ProfileData.EditUser.editEmail;
        let editPhone: string = ProfileData.EditUser.editPhone;
        return clickProfilepg.editUserNameEmailPhone(editUserName, editEmail, editPhone)
        .then(()=>{
            browser.sleep(10000);
            return clickProfilepg.searchFilterFunc(editPhone);
        })
        .then(()=>{
            browser.sleep(20000);
            return pgBase.verifyElementString(editUserName, clickProfilepg.verifyUserName);
        })
        .then(()=>{
            return pgBase.verifyElementString(editEmail, clickProfilepg.verifyEmail);
        })
        .then(()=>{
            return pgBase.verifyElementString(editPhone, clickProfilepg.verifyPhone);
        })
    });

    it("Delete added user from profile page", async()=>{
        return clickProfilepg.addedUserShouldBeDeleted();
    })
});