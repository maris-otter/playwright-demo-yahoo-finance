import { Page, Locator } from '@playwright/test';

export class StockPage {
    readonly page: Page
    readonly stockHeader: Locator;

    constructor(page: Page) {
        this.page = page
        this.stockHeader = page.getByTestId('quote-hdr').locator('h1')

    }
}