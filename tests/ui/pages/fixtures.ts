import { test as base } from '@playwright/test';
import { FactoryPage } from './pageFactory.js';
import type { DocsPage } from './docs/docsPage.js';

type PageFixtures = {
  docsPage: DocsPage;
};

export const test = base.extend<PageFixtures>({
  docsPage: async ({ page }, use) => {
    const docsPage = new FactoryPage().createPage('docs', page);
    await use(docsPage);
  },
});
