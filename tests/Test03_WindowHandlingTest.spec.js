const {test,expect} =require('@playwright/test');

// if we want to open new tab 
test('WindowHandle01',async({browser})=>
{
    const Context = await browser.newContext();
    const page= await Context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const newPage= await Context.newPage();
    await newPage.goto('https://google.com');
})

//if we want to click on link if that link is opening window 
test('windowHandle02',async({browser})=>
{
    const context= await browser.newContext();
    const page= await context.newPage();
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const link=await page.locator('a[class=blinkingText]')
    const [newPage]=await Promise.all([

        context.waitForEvent('page'),
        link.click()
    ]);
})

test.skip('windowHandle03', async({browser})=>
{
    const context= await browser.newContext();
    const pages=await context.pages();
    await pages[1].bringToFront();//switching to different tabs
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
})