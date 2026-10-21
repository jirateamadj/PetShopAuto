import type { Page, Locator } from '@playwright/test';
import { BasePage } from '../basePage.js';

// The SUT has no frontend; its Swagger UI (/docs) is the only page.
export class DocsPage extends BasePage {
  readonly titleLocator: Locator;
  readonly petsSectionLocator: Locator;

  constructor(page: Page) {
    super(page);
    this.titleLocator = page.locator('.swagger-ui .info .title');
    this.petsSectionLocator = page.locator('#operations-tag-Pets');
  }
}
