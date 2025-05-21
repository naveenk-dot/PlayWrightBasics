const {test, expect}=require('@playwright/test');
const {LoginPage}= require('../PageObjects/LoginPage');
const {POmanager} = require('../PageObjects/POmanager');
const dataset=JSON.parse(JSON.stringify(require('../Utils/LoginTestData.json')));

test.describe.configure({mode:'parallel'})
test('framWorkTest01',async({page})=>
{
    
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");

    const loginPage = await new LoginPage(page);
    await loginPage.login('rahulshettyacademy','leaning');

})

for(const data of dataset)
{
test.only(`frameTest02 ${data.username}`,async({page,baseURL})=>
{
    //await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    await page.goto(baseURL)
    const manager = await new POmanager(page);
    const loginPage= await manager.getLoginPage();
    await loginPage.login(data.username ,data.password);
})
}