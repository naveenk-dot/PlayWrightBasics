const {test, expect}= require('@playwright/test');

test('mousehover', async({page})=>
{
    
    const button= await page.getByRole('button',{name:'Mouse hover'});
    await button.scrollIntoViewIfNeeded(); //scroll to specific element
    //await page.evaluate(() => window.scrollBy(0, 500));
    //await page.mouse.wheel(0, 500);
    await expect(button).toBeVisible();
    await button.hover();
})

test.skip('Basic Actions',async({page})=>
{
    
    await page.click('#buttonID');//normal click
    await page.dblclick('#element');//double click
    await page.click('#element', { button: 'right' });//right click
    await page.hover('#menuItem');//mouse hover
})

test.skip('KeyBoard Actions',async({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    await page.fill('#buttonID');//add text
    await page.getByPlaceholder("Select Country").pressSequentially("ind");
    await page.press('#inputField', 'Enter');//pressing key
    await page.keyboard.press('Control+A');//pressing keys from KeyBoard
    await page.hover('#menuItem');//mouse hover
})

test.skip('mouse Actions',async({page})=>
{
    
    await page.mouse.move(100, 200);//moving mouse
    await page.mouse.down()
    await page.mouse.up();
})

test.skip('handling forms',async({page})=>
{
    
    await page.selectOption('#dropdown', 'optionValue');//select option
    await page.check('#checkbox');//select checkbox
    await page.uncheck('#checkbox');//unselect checkbox
})

test.skip('File Uploads',async({page})=>
{
    
    await page.setInputFiles('#fileUpload', 'path/to/file.txt');// upload file only if input type is file
})