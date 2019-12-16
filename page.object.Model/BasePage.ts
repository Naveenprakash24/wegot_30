import { browser } from 'protractor';

export abstract class BasePage {


    goto (url : string) {
        browser.get(url);
    }
    
    quitBrowser () {
        if (browser != null) {
            browser.quit();
        }
    }

    getPageTitle () {
        return browser.getTitle();
    }

    getCurrentUrl() {
        return browser.getCurrentUrl();
    }

    get() {
        browser.get('/');
    }
}

