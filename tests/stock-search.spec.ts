import { test, expect } from '@playwright/test';
import { STOCKS } from '../test-data/test-data';

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
  //await expect(page.getByRole('link', { name: new RegExp(DEFAULT_TICKER) }).getByTestId('sparkline')).toBeVisible();
  await expect(page.getByRole('link', { name: /S&P/ }).getByTestId('sparkline')).toBeVisible();
});