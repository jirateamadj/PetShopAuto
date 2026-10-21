import type { Page } from '@playwright/test'

export abstract class BasePage {
    readonly page : Page;

    constructor (page : Page) {
        this.page = page;
    }

    async goTo (path : string = '/') {
        await this.page.goto(path);
    }
}