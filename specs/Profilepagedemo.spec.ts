import { LoginPage } from "../page.object.Model/Loginpage";
import { Profilepagedemo } from "../page.object.Model/Profilepagedemo";
import { PageBase } from "../page.object.Model/PageBase";
import * as loginData from '../../data/authentication.json';
import { browser } from "protractor";
import { async } from "q";

const email = (<any>loginData).validUserNameAndPassword.validemail;
const password = (<any>loginData).validUserNameAndPassword.validpassword;
const fs = require('fs');

let userData = fs.readFileSync('data/profile_data.json');
let ProfileData = JSON.parse(userData)

describe('Profiles page',()=> {

    let homepage: LoginPage = new LoginPage();
    let clickProfilepg: Profilepagedemo = new Profilepagedemo();
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

    it('Click on Profiles tab',async ()=> {
        await clickProfilepg.profilePage();
    });
    xit('click add user icon',async()=>{

        await clickProfilepg.clickadduser();
    })
        xit('Click on Add profile',async ()=> {
        await clickProfilepg.fieldAllUserDetailsAndClickOnAdd(addBlock, addApart, addUserName, addEmail, addPhone, addSqft);
    });
    it('search and Edit',async()=>{
        await clickProfilepg.SearchandEditUser(addUserName);
    })
    /* xit('Edit username, email &phone and verify the same',async ()=> {

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
    }); */
});