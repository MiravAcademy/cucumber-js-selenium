import { By } from "selenium-webdriver"

import {driver} from "../step_definition/hooks.js"

class ConduitApp {

    signInLink = By.xpath("//a[text()='Sign in']");

    usernameTextbox = By.css("input[placeholder='Email']");

    passwordTextbox = By.css("input[placeholder='Password']");

    submitButton = By.css("button[type='submit']")
    
    async navigateToSignInPage(){

        await driver.findElement(this.signInLink).click();

        return 1;

    }

    async loginToApplication( username, password){

        await driver.findElement(this.usernameTextbox).sendKeys(username);

        await driver.findElement(this.passwordTextbox).sendKeys(password)
    
        await driver.findElement(this.submitButton).click()
        return 1;
    }

    async getTextFromProfileLink(){

        let  profileText;

        await driver.findElement(By.xpath("//a[contains(@href, '/profile')]")).getText().then(function (value){

        console.log(value);

        profileText = value;


        })

        return profileText;

    }

}

export const conduitApp = new ConduitApp();