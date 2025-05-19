const {test, expect}=require('@playwright/test');

test('loginTest',async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('leaning');
    await page.locator('#signInBtn').click();
    const text=await page.locator('[style*="block"]').textContent();
    console.log(text);
    await expect(page.locator('[style*="block"]')).toContainText('Incorrect');
})

test('loginPage2',async({page})=>
{
    await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
    await page.locator('#username').fill('rahulshettyacademy');
    await page.locator('#password').fill('learning');
    await page.locator('#signInBtn').click();
    const b=await page.locator('.card-body a').first().textContent();
    const a=await page.locator('.card-body a').nth(1).textContent();
    console.log(b +''+ a);

})