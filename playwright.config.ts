import { defineConfig, devices } from '@playwright/test';
import dotenv from 'dotenv';
dotenv.config({ path: '.env' });

export default defineConfig({
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html', { open: 'never' }]],

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    {
      name: 'apiProject',
      testDir: './tests/api',
      use: {
        baseURL: process.env.API_URL ?? 'http://localhost:8000',
      },
    },
    {
      name: 'chromeProject',
      testDir: './tests/ui',
      use: {
        ...devices['Desktop Chrome'],
        baseURL: process.env.UI_URL ?? 'http://localhost:8000',
      },
    },
  ],
});
