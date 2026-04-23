import { test, expect } from '@playwright/test';

test('home loads and shows hero', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle(/Force Sports/i);
  await expect(page.locator('h1', { hasText: 'FORCE SPORTS' })).toBeVisible();
});

test('products page loads and opens customize modal (mobile)', async ({ page, isMobile }) => {
  test.skip(!isMobile, 'This check is intended for mobile viewport');
  await page.goto('/products');

  // Open first Customize button
  const customize = page.getByRole('button', { name: /^customize$/i }).first();
  await expect(customize).toBeVisible();
  await customize.click();

  // Modal should appear and "Add to Inquiry" should be reachable
  await expect(page.getByRole('button', { name: /add to inquiry/i })).toBeVisible();
});

test('inquiry page blocks submit when required fields empty', async ({ page }) => {
  await page.goto('/inquiry');
  await page.getByRole('button', { name: /submit inquiry/i }).click();

  // The page uses native "required" attributes, so the browser blocks submission.
  const msg = await page.locator('input[name="fullName"]').evaluate((el: HTMLInputElement) => el.validationMessage);
  expect(msg).toBeTruthy();
});

test('product detail shows front/back labels and consistent ordering', async ({ page }) => {
  await page.goto('/products/force-tn-5111');

  // Main badge defaults to Front
  await expect(page.getByTestId('view-badge')).toHaveText(/front/i);

  // Click the Back thumbnail badge and confirm badge flips to Back
  const backBadge = page.getByTestId('thumb-badge-back').first();
  await expect(backBadge).toBeVisible();
  await backBadge.click();
  await expect(page.getByTestId('view-badge')).toHaveText(/back/i);

  // Zoom modal should open and still show labels
  await page.getByRole('button', { name: /zoom image/i }).click();
  await expect(page.getByRole('button', { name: /close zoom/i })).toBeVisible();
  await expect(page.getByTestId('zoom-thumb-badge-back').first()).toBeVisible();
  await page.getByRole('button', { name: /close zoom/i }).click();
});

