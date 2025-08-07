import { test, expect } from '@playwright/test';
import { STOCKS } from '../test-data/test-data';
import { HomePage } from '../pages/HomePage';
import { StockPage } from '../pages/StockPage';

test('Stock Search', async ({ page }) => {
  const homePage = new HomePage(page);
  const stockPage = new StockPage(page);
  const stock = STOCKS.REDDIT;
  await page.goto('/', {waitUntil: "commit"});
  await expect(homePage.yahooLogo).toBeVisible();
  await homePage.searchBar.fill(stock.searchTerm); // Pulled from test-data file
  const searchOption = homePage.getOptionValue(stock.optionBarValue);
  await searchOption.click();
  await expect(stockPage.stockHeader).toContainText(stock.expectedResult);
});

test('Home Page Smoke', async ({ page }) => {
  const homePage = new HomePage(page);
  await page.goto('/', {waitUntil: "commit"});
  await expect(homePage.firstStory).toBeVisible();
  await expect(homePage.getTickerByName('S&P/TSX')).toBeVisible();

});

