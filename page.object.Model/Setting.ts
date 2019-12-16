import { ElementFinder } from "protractor";

export class Setting {

    public clickSettingPg = ElementFinder;
    public waterCharges = ElementFinder;
    public maintenance = ElementFinder;
    public venaquaCharges = ElementFinder;
    public taxes = ElementFinder;
    public notification = ElementFinder;


    constructor() {}

    public async settingspage() {
        await console.log('setting page');
    }


}