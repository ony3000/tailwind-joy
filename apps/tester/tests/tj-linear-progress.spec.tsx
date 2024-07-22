import { resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';
import { test, expect } from '@playwright/experimental-ct-react';

import { LinearProgress as JoyLinearProgress } from '@mui/joy';
import { LinearProgress as TJLinearProgress } from 'tailwind-joy/components';

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

const customs: {
  title: string;
  props: {
    size?: (typeof sizes)[number];
    variant?: (typeof variants)[number];
    color?: (typeof colors)[number];
    [key: string]: any;
  };
  joyProps?: Record<string, any>;
  tjProps?: Record<string, any>;
}[] = [
  {
    title: 'default',
    props: {
      // Assume the animation is stopped at 0%.
      determinate: true,
      value: 12.5,
    },
  },
  {
    title: 'thickness: 1',
    props: {
      thickness: 1,
      // Assume the animation is stopped at 0%.
      determinate: true,
      value: 12.5,
    },
  },
  {
    title: 'thickness: 3',
    props: {
      thickness: 3,
      // Assume the animation is stopped at 0%.
      determinate: true,
      value: 12.5,
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
];

for (const { title, props, joyProps, tjProps } of customs) {
  const testIdSuffix = uuid();

  const customColors = props.color ? [props.color] : colors;
  const customVariants = props.variant ? [props.variant] : variants;
  const customSizes = props.size ? [props.size] : sizes;
  const cartesianProduct = customColors.flatMap((color) =>
    customVariants
      .flatMap((variant) => customSizes.map((size) => ({ variant, size })))
      .map(({ variant, size }) => ({ color, variant, size })),
  );

  test.describe(title, () => {
    for (const { color, variant, size } of cartesianProduct) {
      const hyphenatedVariants = `${color}-${variant}-${size}`;
      const testIdBase = `${hyphenatedVariants}-${testIdSuffix}`;

      test.describe(`light:${hyphenatedVariants}`, () => {
        test('default', async ({ page, mount }) => {
          const containerTestId = `light-container-${testIdBase}-default`;
          const elementTestId = `light-element-${testIdBase}-default`;

          const joyComponent = await mount(
            <App>
              <div data-testid={containerTestId} className={containerClassName}>
                <JoyLinearProgress
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
              <div data-testid={containerTestId} className={containerClassName}>
                <TJLinearProgress
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
              <div data-testid={containerTestId} className={containerClassName}>
                <JoyLinearProgress
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
              <div data-testid={containerTestId} className={containerClassName}>
                <TJLinearProgress
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
    }
  });
}
