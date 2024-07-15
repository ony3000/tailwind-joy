import { resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';
import { test, expect } from '@playwright/experimental-ct-react';

import ReportIcon from '@mui/icons-material/Report';
import WarningIcon from '@mui/icons-material/Warning';
import { CircularProgress as JoyCircularProgress } from '@mui/joy';
import { CircularProgress as TJCircularProgress } from 'tailwind-joy/components';

import { App, DarkModeApp } from '@/App';
import { uuid } from '@/utils';

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

const customs: {
  title: string;
  props: Record<string, any>;
  joyProps?: Record<string, any>;
  tjProps?: Record<string, any>;
}[] = [
  {
    title: 'default',
    props: {},
  },
  {
    title: 'thickness: 1',
    props: {
      thickness: 1,
    },
  },
  {
    title: 'thickness: 3',
    props: {
      thickness: 3,
    },
  },
  {
    title: 'determinate (value: 25)',
    props: {
      determinate: true,
      value: 25,
    },
  },
  {
    title: 'determinate (value: 50)',
    props: {
      determinate: true,
      value: 50,
    },
  },
  {
    title: 'determinate (value: 75)',
    props: {
      determinate: true,
      value: 75,
    },
  },
  {
    title: 'determinate (value: 100)',
    props: {
      determinate: true,
      value: 100,
    },
  },
  {
    title: 'children (icon)',
    props: {
      color: 'warning',
      children: <WarningIcon color="warning" />,
    },
  },
  {
    title: 'children (string)',
    props: {
      size: 'lg',
      determinate: true,
      value: 66.67,
      children: '2 / 3',
    },
  },
  {
    title: 'children (icon w/sx)',
    props: {
      color: 'danger',
      // @ts-ignore
      children: <ReportIcon color="danger" />,
    },
    joyProps: {
      sx: { '--CircularProgress-size': '80px' },
    },
    tjProps: {
      className: '[--CircularProgress-size:80px]',
    },
  },
];

customs.forEach(({ title, props, joyProps, tjProps }) => {
  const testIdSuffix = uuid();

  test.describe(title, () => {
    cartesianProduct.forEach(({ color, variant, size }) => {
      const hyphenatedVariants = `${color}-${variant}-${size}`;
      const testIdBase = `${hyphenatedVariants}-${testIdSuffix}`;

      test.describe(`light:${hyphenatedVariants}`, () => {
        test('default', async ({ page, mount }) => {
          const containerTestId = `light-container-${testIdBase}-default`;
          const elementTestId = `light-element-${testIdBase}-default`;

          const joyComponent = await mount(
            <App>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyCircularProgress
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...joyProps}
                />
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
                <TJCircularProgress
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                />
              </div>
            </App>,
          );
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`light-${testIdBase}-default.png`);
          await tjComponent.unmount();
        });
      });

      test.describe(`dark:${hyphenatedVariants}`, () => {
        test('default', async ({ page, mount }) => {
          const containerTestId = `dark-container-${testIdBase}-default`;
          const elementTestId = `dark-element-${testIdBase}-default`;

          const joyComponent = await mount(
            <DarkModeApp>
              <div
                data-testid={containerTestId}
                tabIndex={0}
                className={containerClassName}
              >
                <JoyCircularProgress
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...joyProps}
                />
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
                <TJCircularProgress
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                />
              </div>
            </DarkModeApp>,
          );
          await expect(
            await page.getByTestId(containerTestId),
          ).toHaveScreenshot(`dark-${testIdBase}-default.png`);
          await tjComponent.unmount();
        });
      });
    });
  });
});
