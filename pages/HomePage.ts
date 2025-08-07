import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly signInButton: Locator;
  readonly yahooLogo: Locator;
  readonly searchBar: Locator;
  readonly firstStory: Locator;

  

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#login-username');
    this.signInButton = page.locator('#login-container a');
    this.yahooLogo = page.locator('#ybar-logo')
    this.searchBar = page.getByRole('textbox', { name: 'Search query' })
    this.firstStory = page.getByTestId('hero-lead-story').getByRole('list')
  }

  async goto() {
    await this.page.goto('https://finance.yahoo.com/');
  }

  async login(username: string) {
    await this.usernameInput.fill(username);

  }

  getOptionValue(value: string){
    return this.page.getByRole('option', { name: value });
  }

  getSearchedStockName(stockName: string){
    return this.page.getByTestId('quote-hdr').locator('h1')
  }

  getTickerByName(tickerName: string){
    return this.page.getByTestId('ticker-list-item').filter({
        has: this.page.getByText(tickerName, {exact: true})}).locator('span.symbol');
  }
}