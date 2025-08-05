//https://login.yahoo.com/

import { Page, Locator } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly passwordInput: Locator;
  readonly nextButton: Locator;
  readonly accountMenuButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#login-username');
    this.passwordInput = page.locator('#login-passwd');
    this.nextButton = page.locator("#login-signin");
    this.accountMenuButton = page.locator('#ybarAccountMenuOpener')
  }

  async goto() {
    await this.page.goto('https://login.yahoo.com/');
  }


  async login(username: string, password: string) {
    await this.usernameInput.fill(username);
    await this.nextButton.click();
    await this.passwordInput.fill(password);
    await this.nextButton.click();
    await this.accountMenuButton.click();
  }
}
