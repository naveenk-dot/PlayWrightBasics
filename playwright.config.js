// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  retries :0,
  workers: 3,
  timeout: 30 * 1000,
  expect: 
  {
    timeout: 5000,
  },
  reporter: [['line'], ['allure-playwright', { resultsDir: 'allure-results' }]],
  //reporter:'html',
  
    use: {

    browserName: 'chromium',
    baseURL:"https://rahulshettyacademy.com/loginpagePractise/",
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure',
    video: 'on-first-retry',
    ignoreHttpsErrors:true,
    permissions:['geolocation'],
  },


});
module.exports= config

