import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ca.finance.yahoo.com/');
  //await expect(page.getByRole('link', { name: 'Yahoo Finance', exact: true })).toBeVisible();
  await expect(page.locator('#ybar-logo')).toBeVisible();
  await page.getByRole('textbox', { name: 'Search query' }).fill('Reddit');
  await page.getByRole('option', { name: 'RDDT Reddit, Inc. Equity NYQ' }).click();
  await expect(page.getByTestId('quote-hdr').locator('h1')).toContainText('Reddit, Inc. (RDDT)');

});