import { resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';
import { test, expect } from '@playwright/experimental-ct-react';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PendingOutlinedIcon from '@mui/icons-material/PendingOutlined';
import { IconButton as JoyIconButton } from '@mui/joy';
import { IconButton as TJIconButton } from 'tailwind-joy/components';

import { App, DarkModeApp } from '@/App';
import { sleep } from '@/utils';

const basename = sep === '/' ? pathPosix.basename : pathWin32.basename;
const filename = basename(__filename);
const screenshotPath = resolve(__dirname, `../__screenshots__/${filename}`);

test.use({ viewport: { width: 500, height: 500 } });

const containerClassName =
  'flex h-[100px] w-[100px] items-center justify-center p-2';

const sizes = ['sm', 'md', 'lg'] as const;
const variants = ['solid', 'soft', 'outlined', 'plain'] as const;
const colors = ['primary', 'neutral', 'danger', 'success', 'warning'] as const;
const cartesianProduct = colors.flatMap((color) =>
  variants
    .flatMap((variant) => sizes.map((size) => ({ variant, size })))
    .map(({ variant, size }) => ({ color, variant, size })),
);

const customs: { title: string; props: Record<string, any> }[] = [
  {
    title: 'default',
    props: {},
  },
  {
    title: 'loading',
    props: {
      loading: true,
    },
  },
  {
    title: 'loadingIndicator',
    props: {
      loading: true,
      loadingIndicator: <PendingOutlinedIcon />,
    },
  },
];

customs.forEach(({ title, props }) => {
  const hyphenatedPropName = Object.keys(props).join('-');
  const testIdSuffix = hyphenatedPropName ? `-${hyphenatedPropName}` : '';

  test.describe(title, () => {
    cartesianProduct.forEach(({ color, variant, size }) => {
      const hyphenatedVariants = `${color}-${variant}-${size}`;
      const testIdBase = `${hyphenatedVariants}${testIdSuffix}`;
      const containerTestId = `container-${testIdBase}`;
      const elementTestId = `element-${testIdBase}`;

      test.describe(`light:${hyphenatedVariants}`, () => {
        test('default', async ({ page, mount }) => {
          const joyComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </JoyIconButton>
              </div>
            </App>,
          );
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(screenshotPath, `light-${testIdBase}-default.png`),
          });
          await joyComponent.unmount();

          const tjComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <TJIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </TJIconButton>
              </div>
            </App>,
          );
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`light-${testIdBase}-default.png`);
          await tjComponent.unmount();
        });

        test('hover', async ({ page, mount }) => {
          test.skip(
            props.loading,
            'The button is disabled in the loading state',
          );

          const joyComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </JoyIconButton>
              </div>
            </App>,
          );
          await page.getByTestId(elementTestId).hover();
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(screenshotPath, `light-${testIdBase}-hover.png`),
          });
          await joyComponent.unmount();

          const tjComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <TJIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </TJIconButton>
              </div>
            </App>,
          );
          await page.getByTestId(elementTestId).hover();
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`light-${testIdBase}-hover.png`);
          await tjComponent.unmount();
        });

        test('focus-visible', async ({ page, mount }) => {
          test.skip(
            props.loading,
            'The button is disabled in the loading state',
          );

          const joyComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </JoyIconButton>
              </div>
            </App>,
          );
          await page.getByTestId(containerTestId).press('Tab');
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(
              screenshotPath,
              `light-${testIdBase}-focus-visible.png`,
            ),
          });
          await joyComponent.unmount();

          const tjComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <TJIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </TJIconButton>
              </div>
            </App>,
          );
          await page.getByTestId(containerTestId).press('Tab');
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`light-${testIdBase}-focus-visible.png`);
          await tjComponent.unmount();
        });

        test('active', async ({ page, mount }) => {
          test.skip(
            props.loading,
            'The button is disabled in the loading state',
          );

          const joyComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </JoyIconButton>
              </div>
            </App>,
          );
          page.getByTestId(elementTestId).click({
            delay: 100,
          });
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(screenshotPath, `light-${testIdBase}-active.png`),
          });
          await sleep(100);
          await joyComponent.unmount();

          const tjComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <TJIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </TJIconButton>
              </div>
            </App>,
          );
          page.getByTestId(elementTestId).click({
            delay: 100,
          });
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`light-${testIdBase}-active.png`);
          await sleep(100);
          await tjComponent.unmount();
        });

        test('disabled', async ({ page, mount }) => {
          test.skip(
            props.loading,
            'The button is disabled in the loading state',
          );

          const joyComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  disabled
                >
                  <FavoriteBorderIcon />
                </JoyIconButton>
              </div>
            </App>,
          );
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(screenshotPath, `light-${testIdBase}-disabled.png`),
          });
          await joyComponent.unmount();

          const tjComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <TJIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  disabled
                >
                  <FavoriteBorderIcon />
                </TJIconButton>
              </div>
            </App>,
          );
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`light-${testIdBase}-disabled.png`);
          await tjComponent.unmount();
        });
      });

      test.describe(`dark:${hyphenatedVariants}`, () => {
        test('default', async ({ page, mount }) => {
          const joyComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </JoyIconButton>
              </div>
            </DarkModeApp>,
          );
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(screenshotPath, `dark-${testIdBase}-default.png`),
          });
          await joyComponent.unmount();

          const tjComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <TJIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </TJIconButton>
              </div>
            </DarkModeApp>,
          );
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`dark-${testIdBase}-default.png`);
          await tjComponent.unmount();
        });

        test('hover', async ({ page, mount }) => {
          test.skip(
            props.loading,
            'The button is disabled in the loading state',
          );

          const joyComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </JoyIconButton>
              </div>
            </DarkModeApp>,
          );
          await page.getByTestId(elementTestId).hover();
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(screenshotPath, `dark-${testIdBase}-hover.png`),
          });
          await joyComponent.unmount();

          const tjComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <TJIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </TJIconButton>
              </div>
            </DarkModeApp>,
          );
          await page.getByTestId(elementTestId).hover();
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`dark-${testIdBase}-hover.png`);
          await tjComponent.unmount();
        });

        test('focus-visible', async ({ page, mount }) => {
          test.skip(
            props.loading,
            'The button is disabled in the loading state',
          );

          const joyComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </JoyIconButton>
              </div>
            </DarkModeApp>,
          );
          await page.getByTestId(containerTestId).press('Tab');
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(
              screenshotPath,
              `dark-${testIdBase}-focus-visible.png`,
            ),
          });
          await joyComponent.unmount();

          const tjComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <TJIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </TJIconButton>
              </div>
            </DarkModeApp>,
          );
          await page.getByTestId(containerTestId).press('Tab');
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`dark-${testIdBase}-focus-visible.png`);
          await tjComponent.unmount();
        });

        test('active', async ({ page, mount }) => {
          test.skip(
            props.loading,
            'The button is disabled in the loading state',
          );

          const joyComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </JoyIconButton>
              </div>
            </DarkModeApp>,
          );
          page.getByTestId(elementTestId).click({
            delay: 100,
          });
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(screenshotPath, `dark-${testIdBase}-active.png`),
          });
          await sleep(100);
          await joyComponent.unmount();

          const tjComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <TJIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  <FavoriteBorderIcon />
                </TJIconButton>
              </div>
            </DarkModeApp>,
          );
          page.getByTestId(elementTestId).click({
            delay: 100,
          });
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`dark-${testIdBase}-active.png`);
          await sleep(100);
          await tjComponent.unmount();
        });

        test('disabled', async ({ page, mount }) => {
          test.skip(
            props.loading,
            'The button is disabled in the loading state',
          );

          const joyComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  disabled
                >
                  <FavoriteBorderIcon />
                </JoyIconButton>
              </div>
            </DarkModeApp>,
          );
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(screenshotPath, `dark-${testIdBase}-disabled.png`),
          });
          await joyComponent.unmount();

          const tjComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <TJIconButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  disabled
                >
                  <FavoriteBorderIcon />
                </TJIconButton>
              </div>
            </DarkModeApp>,
          );
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`dark-${testIdBase}-disabled.png`);
          await tjComponent.unmount();
        });
      });
    });
  });
});
