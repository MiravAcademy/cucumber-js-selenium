//Hooks in Cucumber
import { BeforeAll, AfterAll, Before, After, BeforeStep, AfterStep } from "@cucumber/cucumber"
import { commonDriver } from "../utils/commonDriver.js";

let driver;

BeforeAll(function (){
    console.log("First method to execute");
    
})

AfterAll(function (){
    console.log("Last method to execute");
})

Before(async function (){
    console.log("Before each scenario");

    driver = await commonDriver.openBrowser("http://localhost:3000");

})

After(async function (){
    console.log("After each scenario");

  //  await commonDriver.closeBrowser();
})

BeforeStep(function (){
    console.log("Before each step");
})

AfterStep(function (){
    console.log("After every step");
})

export {driver};

