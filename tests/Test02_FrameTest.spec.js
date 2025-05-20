const {test, expect}= require('@playwright/test')

test('frameTest01',async({page})=>
{

    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const frame=await page.frameLocator("#courses-iframe");
    const data =await frame.getByText("Register").textContent();
    await expect(data).toBe("Register");
    await frame.getByText("Register").click();
}
)