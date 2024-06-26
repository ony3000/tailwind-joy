import { dirname, resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';
import { fileURLToPath } from 'node:url';
import { test, expect } from '@playwright/test';

const __dirname = dirname(fileURLToPath(import.meta.url));
const basename = sep === '/' ? pathPosix.basename : pathWin32.basename;
const __filename = basename(fileURLToPath(import.meta.url));

const sizes = ['sm', 'md', 'lg'] as const;

const variants = [
  'solid',
  // 'soft', 'outlined', 'plain'
] as const;

const colors = [
  'primary',
  // 'neutral', 'danger', 'success', 'warning'
] as const;

const cartesianProduct = colors.flatMap((color) =>
  variants
    .flatMap((variant) => sizes.map((size) => ({ variant, size })))
    .map(({ variant, size }) => ({ color, variant, size })),
);

cartesianProduct.forEach(({ color, variant, size }) => {
  const testIdBase = `${color}-${variant}-${size}`;

  test.describe(testIdBase, () => {
    const containerTestId = `container-${testIdBase}`;
    const elementTestId = `element-${testIdBase}`;

    test.beforeEach(async ({ page }) => {
      await page.goto('/joy/button');

      await page.getByTestId(containerTestId).screenshot({
        animations: 'disabled',
        path: resolve(
          __dirname,
          '__screenshots__/',
          `${__filename}/${testIdBase}-default.png`,
        ),
      });

      await page.getByTestId(elementTestId).hover();
      await page.getByTestId(containerTestId).screenshot({
        animations: 'disabled',
        path: resolve(
          __dirname,
          '__screenshots__/',
          `${__filename}/${testIdBase}-hover.png`,
        ),
      });

      await page.getByTestId(containerTestId).press('Tab');
      await page.getByTestId(containerTestId).screenshot({
        animations: 'disabled',
        path: resolve(
          __dirname,
          '__screenshots__/',
          `${__filename}/${testIdBase}-focus-visible.png`,
        ),
      });

      page.getByTestId(elementTestId).click({
        delay: 1000,
      });
      await page.getByTestId(containerTestId).screenshot({
        animations: 'disabled',
        path: resolve(
          __dirname,
          '__screenshots__/',
          `${__filename}/${testIdBase}-active.png`,
        ),
      });
    });

    test(`visual comparison (${testIdBase})`, async ({ page }) => {
      await page.goto('/tj/button');
      await expect(await page.getByTestId(containerTestId)).toHaveScreenshot(
        `${testIdBase}-default.png`,
      );
    });

    test(`visual comparison (${testIdBase}:hover)`, async ({ page }) => {
      await page.goto('/tj/button');
      await page.getByTestId(elementTestId).hover();
      await expect(await page.getByTestId(containerTestId)).toHaveScreenshot(
        `${testIdBase}-hover.png`,
      );
    });

    test(`visual comparison (${testIdBase}:focus-visible)`, async ({
      page,
    }) => {
      await page.goto('/tj/button');
      await page.getByTestId(containerTestId).press('Tab');
      await expect(await page.getByTestId(containerTestId)).toHaveScreenshot(
        `${testIdBase}-focus-visible.png`,
      );
    });

    test(`visual comparison (${testIdBase}:active)`, async ({ page }) => {
      await page.goto('/tj/button');
      page.getByTestId(elementTestId).click({
        delay: 1000,
      });
      await expect(await page.getByTestId(containerTestId)).toHaveScreenshot(
        `${testIdBase}-active.png`,
      );
    });
  });
});
