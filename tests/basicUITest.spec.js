const {test,expect} = require('@playwright/test');

test('first playwright test', async ({browser})=>
{
    const context= await browser.newContext();
    const page=await context.newPage();
    await page.goto('https://rahulshettyacademy.com/');
    
});

test('second test', async({page})=>
{
    await page.goto("https://google.com/");
    console.log(await page.title());
    await expect(page).toHaveTitle("Google");

});
 