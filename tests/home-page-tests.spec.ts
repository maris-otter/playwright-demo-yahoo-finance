import { test, expect } from '@playwright/test';
import { STOCKS } from '../test-data/test-data';
import { HomePage } from '../pages/HomePage';
import { LoginPage } from '../pages/LoginPage';

test('Stock Search', async ({ page }) => {
  const stock = STOCKS.REDDIT;
  await page.goto('/', {waitUntil: "commit"});
  //await expect(page.getByRole('link', { name: 'Yahoo Finance', exact: true })).toBeVisible();
  await expect(page.locator('#ybar-logo')).toBeVisible();
  await page.getByRole('textbox', { name: 'Search query' }).fill(stock.searchTerm); // Pulled from test-data file
  await page.getByRole('option', { name: stock.optionBarValue }).click();
  await expect(page.getByTestId('quote-hdr').locator('h1')).toContainText(stock.expectedResult);

});

test('Home Page Smoke', async ({ page }) => {
  await page.goto('/', {waitUntil: "commit"});
  await expect(page.getByTestId('hero-lead-story').getByRole('list')).toBeVisible();
  const spTsxLocator = page.getByTestId('ticker-list-item').filter({
        has: page.getByText('S&P/TSX', { exact: true })
    }).locator('span.symbol');
  await expect(spTsxLocator).toBeVisible();

});

test('Login Test', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('/', {waitUntil: "commit"});
  //await homePage.goto();
  const loginPage = new LoginPage(page);
  const username = process.env.USERNAME;
  const password = process.env.PASSWORD;

  await homePage.signInButton.click();

  if (!username || !password) {
    // Fail the test early with a clear error message
    throw new Error("Test failed: TEST_USERNAME environment variable is not set.");
  }

  await loginPage.login(username, password);

});