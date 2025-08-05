import { Page, Locator } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly usernameInput: Locator;
  readonly signInButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.usernameInput = page.locator('#login-username');
    this.signInButton = page.locator('#login-container a');
  }

  async login(username: string) {
    await this.usernameInput.fill(username);

  }
}