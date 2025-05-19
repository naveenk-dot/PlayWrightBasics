const { test, expect }=require('@playwright/test');

test('@Frame popup', async ({page})=>
{
    await page.goto("https://rahulshettyacademy.com/AutomationPractice/");
    const frame = page.frameLocator("#courses-iframe");
    await frame.locator("li a[href*='mentorship']").click();
    const text = await frame.locator(".pricing-title").textContent();
    console.log(text);
    await expect(frame.locator(".pricing-title")).toHaveText("Mentorship");
})