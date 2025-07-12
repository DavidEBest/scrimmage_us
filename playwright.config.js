import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: '.',
  timeout: 30000,
  use: {
    headless: false,
    viewport: { width: 1280, height: 720 },
    screenshot: 'only-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { 
        browserName: 'chromium',
        launchOptions: {
          slowMo: 1000, // Slow down actions for better visibility
        }
      },
    },
  ],
});