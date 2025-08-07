import { test, expect } from '@playwright/test';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('Login Test', async ({ page }) => { // Currently not working due to captcha on yahoo page
  const homePage = new HomePage(page);
  await page.goto('/', {waitUntil: "commit"});
  //await homePage.goto();
  const loginPage = new LoginPage(page);
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  await homePage.signInButton.click();

  if (!username || !password) {
    // Fail the test early with a clear error message
    throw new Error("Test failed: username or password env variable is not set.");
  }
  await loginPage.login(username, password);

});