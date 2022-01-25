import { Builder } from "selenium-webdriver"
let driver;

class CommonDriver {

    async openBrowser(url) {

        driver = await new Builder()
            .forBrowser('chrome')
            .build();

        await driver.manage().setTimeouts({ implicit: 5000 });

        await driver.manage().setTimeouts({ pageLoad: 5000 });

        await driver.manage().window().maximize();

        await driver.get(url);

        return driver;

    }

    async closeBrowser(){
        await driver.quit();
    }
}

export const commonDriver = new CommonDriver();