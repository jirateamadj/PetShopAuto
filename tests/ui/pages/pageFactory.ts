import type { Page } from '@playwright/test';
import { DocsPage } from './docs/docsPage.js';

type PageMap = {
  docs: DocsPage;
};

export class FactoryPage {
  createPage<K extends keyof PageMap>(name: K, page: Page): PageMap[K] {
    switch (name) {
      case 'docs': return new DocsPage(page);
      default: throw new Error(`Page not found: ${String(name)}`);
    }
  }
}
