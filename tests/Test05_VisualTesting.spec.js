const {test, expect} = require('@playwright/test');

test('screenshot test', async ({page})=>
{

    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.screenshot({path: 'screenshot.png'});//full page screenshot
    await page.locator('#opentab').screenshot({path:'screenshot.png'});//screenshot of a specific element 
})

test('visualTestingtest', async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    const image = await page.screenshot({path: 'screenshot.png'});
    expect(image).toMatchSnapshot('screenshot.png');
})