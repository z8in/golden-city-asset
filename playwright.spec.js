// @ts-check
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',          // folder with your tests
  retries: process.env.CI ? 2 : 0, // retry failed tests on CI only
  workers: process.env.CI ? 2 : undefined, // reduce workers in CI
  timeout: 30 * 1000,          // 30 seconds per test
  reporter: [['list'], ['html']], // list in console + html report
  use: {
    headless: true,            // default run headless
    trace: 'retain-on-failure',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
  projects: [
    {
      name: 'chromium',
      use: { browserName: 'chromium' },
    },
    // {
    //   name: 'firefox',
    //   use: { browserName: 'firefox' },
    // },
    // {
    //   name: 'webkit',
    //   use: { browserName: 'webkit' },
    // },
  ],
});
