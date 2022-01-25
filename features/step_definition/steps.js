import { Given, When, Then } from "@cucumber/cucumber"
import { Builder, By } from "selenium-webdriver"
import { setDefaultTimeout } from "@cucumber/cucumber"
import { commonDriver } from "../utils/commonDriver.js";
import { conduitApp } from "../application/conduitApp.js";

import { strict as assert } from "assert";

import {driver} from "./hooks.js"

setDefaultTimeout(60 * 1000);

Given('Saurabh is a writer', async function () {

    await conduitApp.navigateToSignInPage();

});

When('Saurabh uses his credentials as map', async function (datatable) {

    let data = datatable.raw();
    let username;
    let userpassword

    //Approach 1 - To get the rowHash() and then get the key-value pair
    // let rowHash = datatable.rowsHash();
    // console.log(rowHash);

    // username = rowHash.username;
    // userpassword = rowHash.password;

    // 2nd Approach -- To get the hashes() and then get key value pair
    datatable.transpose().hashes().map(function (value) {

        username = value.username;
        userpassword = value.password;
    })


   await conduitApp.loginToApplication( username, userpassword);


});

When('Saurabh uses his credentials as multiple map', async function (datatable) {

    let data = datatable.raw();
    let username;
    let userpassword;
    let name;

    datatable.hashes().map(function (value) {

        username = value.username;
        userpassword = value.password;
        name = value.name;
    })

    await conduitApp.loginToApplication( username, userpassword);

});

When('Saurabh uses his credentials as', async function (datatable) {


    console.log("Here I am !!")

    let data = datatable.raw();

    let username = data[0][0];
    let userpassword = data[1][0];

    await conduitApp.loginToApplication( username, userpassword);
});

When('Saurabh uses his credentials as {string} and {string} to login', async function (username, userpassword) {

    await conduitApp.loginToApplication( username, userpassword);

});

Then('he should have access to the application', async function () {

    await conduitApp.getTextFromProfileLink().then(function (value) {

        console.log(value);
        
        assert.equal("saurabhnobleprog", value);
    })
    
});