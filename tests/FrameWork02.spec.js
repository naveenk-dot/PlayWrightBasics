//const {test, expect}=require('@playwright/test');
const {expect}=require('@playwright/test');
const{test}=require("../Utils/testbase");
const {LoginPage}= require('../PageObjects/LoginPage');
const {POmanager} = require('../PageObjects/POmanager');


test.describe.configure({mode:'parallel'})
test.skip('framWorkTest01',async({page,testdataforOrder})=>
{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const loginPage = await new LoginPage(page);
    await loginPage.login(testdataforOrder.username,testdataforOrder.password);

})




