import { defineConfig } from '@playwright/test'

export default defineConfig({
  testDir: './e2e',
  timeout: 20000,
  use: {
    headless: false, // 👈 会弹出浏览器！你能看到它在跑！
    viewport: { width: 1200, height: 700 }
  },
  projects: [
    { name: 'chromium', use: { browserName: 'chromium' } }
  ]
})