import { resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';
import { test, expect } from '@playwright/experimental-ct-react';
import { Button as JoyButton } from '@mui/joy';
import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { Button as TJButton } from 'tailwind-joy/components';
import { App } from '@/App';
import { sleep } from '@/utils';

const basename = sep === '/' ? pathPosix.basename : pathWin32.basename;
const filename = basename(__filename);
const screenshotPath = resolve(__dirname, `../__screenshots__/${filename}`);

test.use({ viewport: { width: 500, height: 500 } });

const containerClassName =
  'flex h-[100px] w-[200px] items-center justify-center p-2';

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
    title: 'startDecorator',
    props: {
      startDecorator: <AddIcon />,
    },
  },
  {
    title: 'endDecorator',
    props: {
      endDecorator: <KeyboardArrowRightIcon />,
    },
  },
  {
    title: 'fullWidth',
    props: {
      fullWidth: true,
    },
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
      loadingIndicator: 'Loading...',
    },
  },
  {
    title: 'loadingPosition: start',
    props: {
      loading: true,
      loadingPosition: 'start',
    },
  },
  {
    title: 'loadingPosition: end',
    props: {
      loading: true,
      loadingPosition: 'end',
      endDecorator: <KeyboardArrowRightIcon />,
    },
  },
];

customs.forEach(({ title, props }) => {
  const hyphenatedPropName = Object.keys(props).join('-');
  const testIdSuffix = hyphenatedPropName ? `-${hyphenatedPropName}` : '';

  test.describe(title, () => {
    cartesianProduct.forEach(({ color, variant, size }) => {
      const testIdBase = `${color}-${variant}-${size}`;
      const containerTestId = `container-${testIdBase}${testIdSuffix}`;
      const elementTestId = `element-${testIdBase}${testIdSuffix}`;

      test.describe(testIdBase, () => {
        test('default', async ({ page, mount }) => {
          const joyComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  Button
                </JoyButton>
              </div>
            </App>,
          );
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(
              screenshotPath,
              `${testIdBase}${testIdSuffix}-default.png`,
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  Button
                </TJButton>
              </div>
            </App>,
          );
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`${testIdBase}${testIdSuffix}-default.png`);
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
                <JoyButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  Button
                </JoyButton>
              </div>
            </App>,
          );
          await page.getByTestId(elementTestId).hover();
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(
              screenshotPath,
              `${testIdBase}${testIdSuffix}-hover.png`,
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  Button
                </TJButton>
              </div>
            </App>,
          );
          await page.getByTestId(elementTestId).hover();
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`${testIdBase}${testIdSuffix}-hover.png`);
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
                <JoyButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  Button
                </JoyButton>
              </div>
            </App>,
          );
          await page.getByTestId(containerTestId).press('Tab');
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(
              screenshotPath,
              `${testIdBase}${testIdSuffix}-focus-visible.png`,
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  Button
                </TJButton>
              </div>
            </App>,
          );
          await page.getByTestId(containerTestId).press('Tab');
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`${testIdBase}${testIdSuffix}-focus-visible.png`);
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
                <JoyButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  Button
                </JoyButton>
              </div>
            </App>,
          );
          page.getByTestId(elementTestId).click({
            delay: 100,
          });
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(
              screenshotPath,
              `${testIdBase}${testIdSuffix}-active.png`,
            ),
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                >
                  Button
                </TJButton>
              </div>
            </App>,
          );
          page.getByTestId(elementTestId).click({
            delay: 100,
          });
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`${testIdBase}${testIdSuffix}-active.png`);
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
                <JoyButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  disabled
                >
                  Button
                </JoyButton>
              </div>
            </App>,
          );
          await page.getByTestId(containerTestId).screenshot({
            animations: 'disabled',
            path: resolve(
              screenshotPath,
              `${testIdBase}${testIdSuffix}-disabled.png`,
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  disabled
                >
                  Button
                </TJButton>
              </div>
            </App>,
          );
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`${testIdBase}${testIdSuffix}-disabled.png`);
          await tjComponent.unmount();
        });
      });
    });
  });
});
