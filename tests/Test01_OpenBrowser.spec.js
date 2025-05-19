const {test,expect} = require('@playwright/test');

test('firstTest', async ({browser})=>
{
    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
})

test('secondTest', async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const title= await page.title();
    await expect(page).toHaveTitle("Practice Page");
})