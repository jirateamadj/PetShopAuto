import { expect } from '@playwright/test';
import { test } from '../pages/fixtures.js';

test('Swagger docs show the PetShop API title and the Pets section', async ({ docsPage }) => {
  await docsPage.goTo('/docs');
  await expect(docsPage.titleLocator).toContainText('PetShop API');
  await expect(docsPage.petsSectionLocator).toBeVisible();
});
