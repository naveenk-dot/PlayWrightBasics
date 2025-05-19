// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
const config=({
  testDir: './tests',
  retries :1,
  workers: 3,
  timeout: 30 * 1000,
  expect: 
  {
    timeout: 5000,
  },
  reporter:'html',
  
    use: {
    browserName: 'chromium',
    headless: false,
    screenshot: 'on',
    trace: 'retain-on-failure',
    video: 'on-first-retry',
    ignoreHttpsErrors:true,
    permissions:['geolocation'],
  },

  
});
module.exports= config

