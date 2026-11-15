import { test, expect } from '@playwright/test';

test.describe('EPAM client work navigation', () => {
  test('navigate from Services to Client Work', async ({ page }) => {
    // Open the EPAM homepage using the baseURL configured in playwright.config.ts.
    await page.goto('/');

    // Open the Services section from the header navigation.
    // TODO: The live site's header navigation exposes Services as both a link and a menu control;
    // the exact menu interaction varies by viewport, so this uses the accessible Services link.
    await page.getByRole('link', { name: 'Services', exact: true }).first().click();

    // Follow the client work link from the Services page.
    await page.getByRole('link', { name: 'Explore Our Client Work' }).click();

    // Confirm the Client Work page heading is visible.
    await expect(page.getByText('Client Work', { exact: true }).first()).toBeVisible();
  });
});
