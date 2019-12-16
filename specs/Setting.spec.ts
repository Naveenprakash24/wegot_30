import { Setting } from "../page.object.Model/Setting";


describe('verify setting page',() => {

    let settingpg: Setting = new Setting();

    it('Click on setting page then nevigate to setting page',async ()=> {
        console.log("verify the setting page");
        await settingpg.settingspage();
    });

});