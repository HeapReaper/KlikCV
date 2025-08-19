import { test, expect } from '@playwright/test';

test('homepage has React text', async ({ page }) => {
  await page.goto('http://localhost:5173');
  await expect(page.locator('body')).toContainText('gratis CV');
});

test('Can click make cv button', async ({ page }) => {
  await page.goto('http://localhost:5173');

  await page.click('text=Maak je CV');

  await page.waitForURL('**/cv/bouw');

  expect(page.url()).toContain('/cv/bouw');
});
