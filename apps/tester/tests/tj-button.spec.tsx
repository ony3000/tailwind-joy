import { resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';
import { test, expect } from '@playwright/experimental-ct-react';

import AddIcon from '@mui/icons-material/Add';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { MdAdd, MdKeyboardArrowRight } from 'react-icons/md';
import { Button as JoyButton } from '@mui/joy';
import { Button as TJButton, IconAdapter } from 'tailwind-joy/components';

import { App, DarkModeApp } from '@/App';
import { sleep, uuid } from '@/utils';

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
    title: 'startDecorator',
    props: {},
    joyProps: {
      startDecorator: <AddIcon />,
    },
    tjProps: {
      dynamic: {
        startDecoratorFn: (color: (typeof colors)[number]) => (
          <IconAdapter color={color}>
            <MdAdd />
          </IconAdapter>
        ),
      },
    },
  },
  {
    title: 'endDecorator',
    props: {},
    joyProps: {
      endDecorator: <KeyboardArrowRightIcon />,
    },
    tjProps: {
      dynamic: {
        endDecoratorFn: (color: (typeof colors)[number]) => (
          <IconAdapter color={color}>
            <MdKeyboardArrowRight />
          </IconAdapter>
        ),
      },
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
    },
    joyProps: {
      endDecorator: <KeyboardArrowRightIcon />,
    },
    tjProps: {
      dynamic: {
        endDecoratorFn: (color: (typeof colors)[number]) => (
          <IconAdapter color={color}>
            <MdKeyboardArrowRight />
          </IconAdapter>
        ),
      },
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
                <JoyButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...joyProps}
                >
                  Button
                </JoyButton>
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                  startDecorator={
                    tjProps?.startDecorator ??
                    tjProps?.dynamic?.startDecoratorFn?.(color)
                  }
                  endDecorator={
                    tjProps?.endDecorator ??
                    tjProps?.dynamic?.endDecoratorFn?.(color)
                  }
                >
                  Button
                </TJButton>
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

          const containerTestId = `light-container-${testIdBase}-hover`;
          const elementTestId = `light-element-${testIdBase}-hover`;

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
                  {...joyProps}
                >
                  Button
                </JoyButton>
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                  startDecorator={
                    tjProps?.startDecorator ??
                    tjProps?.dynamic?.startDecoratorFn?.(color)
                  }
                  endDecorator={
                    tjProps?.endDecorator ??
                    tjProps?.dynamic?.endDecoratorFn?.(color)
                  }
                >
                  Button
                </TJButton>
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

          const containerTestId = `light-container-${testIdBase}-focus-visible`;
          const elementTestId = `light-element-${testIdBase}-focus-visible`;

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
                  {...joyProps}
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                  startDecorator={
                    tjProps?.startDecorator ??
                    tjProps?.dynamic?.startDecoratorFn?.(color)
                  }
                  endDecorator={
                    tjProps?.endDecorator ??
                    tjProps?.dynamic?.endDecoratorFn?.(color)
                  }
                >
                  Button
                </TJButton>
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

          const containerTestId = `light-container-${testIdBase}-active`;
          const elementTestId = `light-element-${testIdBase}-active`;

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
                  {...joyProps}
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                  startDecorator={
                    tjProps?.startDecorator ??
                    tjProps?.dynamic?.startDecoratorFn?.(color)
                  }
                  endDecorator={
                    tjProps?.endDecorator ??
                    tjProps?.dynamic?.endDecoratorFn?.(color)
                  }
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
          ).toHaveScreenshot(`light-${testIdBase}-active.png`);
          await sleep(100);
          await tjComponent.unmount();
        });

        test('disabled', async ({ page, mount }) => {
          test.skip(
            props.loading,
            'The button is disabled in the loading state',
          );

          const containerTestId = `light-container-${testIdBase}-disabled`;
          const elementTestId = `light-element-${testIdBase}-disabled`;

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
                  {...joyProps}
                  disabled
                >
                  Button
                </JoyButton>
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                  startDecorator={
                    tjProps?.startDecorator ??
                    tjProps?.dynamic?.startDecoratorFn?.(color)
                  }
                  endDecorator={
                    tjProps?.endDecorator ??
                    tjProps?.dynamic?.endDecoratorFn?.(color)
                  }
                  disabled
                >
                  Button
                </TJButton>
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
          const containerTestId = `dark-container-${testIdBase}-default`;
          const elementTestId = `dark-element-${testIdBase}-default`;

          const joyComponent = await mount(
            <DarkModeApp>
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
                  {...joyProps}
                >
                  Button
                </JoyButton>
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                  startDecorator={
                    tjProps?.startDecorator ??
                    tjProps?.dynamic?.startDecoratorFn?.(color)
                  }
                  endDecorator={
                    tjProps?.endDecorator ??
                    tjProps?.dynamic?.endDecoratorFn?.(color)
                  }
                >
                  Button
                </TJButton>
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

          const containerTestId = `dark-container-${testIdBase}-hover`;
          const elementTestId = `dark-element-${testIdBase}-hover`;

          const joyComponent = await mount(
            <DarkModeApp>
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
                  {...joyProps}
                >
                  Button
                </JoyButton>
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                  startDecorator={
                    tjProps?.startDecorator ??
                    tjProps?.dynamic?.startDecoratorFn?.(color)
                  }
                  endDecorator={
                    tjProps?.endDecorator ??
                    tjProps?.dynamic?.endDecoratorFn?.(color)
                  }
                >
                  Button
                </TJButton>
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

          const containerTestId = `dark-container-${testIdBase}-focus-visible`;
          const elementTestId = `dark-element-${testIdBase}-focus-visible`;

          const joyComponent = await mount(
            <DarkModeApp>
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
                  {...joyProps}
                >
                  Button
                </JoyButton>
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                  startDecorator={
                    tjProps?.startDecorator ??
                    tjProps?.dynamic?.startDecoratorFn?.(color)
                  }
                  endDecorator={
                    tjProps?.endDecorator ??
                    tjProps?.dynamic?.endDecoratorFn?.(color)
                  }
                >
                  Button
                </TJButton>
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

          const containerTestId = `dark-container-${testIdBase}-active`;
          const elementTestId = `dark-element-${testIdBase}-active`;

          const joyComponent = await mount(
            <DarkModeApp>
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
                  {...joyProps}
                >
                  Button
                </JoyButton>
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                  startDecorator={
                    tjProps?.startDecorator ??
                    tjProps?.dynamic?.startDecoratorFn?.(color)
                  }
                  endDecorator={
                    tjProps?.endDecorator ??
                    tjProps?.dynamic?.endDecoratorFn?.(color)
                  }
                >
                  Button
                </TJButton>
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

          const containerTestId = `dark-container-${testIdBase}-disabled`;
          const elementTestId = `dark-element-${testIdBase}-disabled`;

          const joyComponent = await mount(
            <DarkModeApp>
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
                  {...joyProps}
                  disabled
                >
                  Button
                </JoyButton>
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
                <TJButton
                  data-testid={elementTestId}
                  size={size}
                  variant={variant}
                  color={color}
                  {...props}
                  {...tjProps}
                  startDecorator={
                    tjProps?.startDecorator ??
                    tjProps?.dynamic?.startDecoratorFn?.(color)
                  }
                  endDecorator={
                    tjProps?.endDecorator ??
                    tjProps?.dynamic?.endDecoratorFn?.(color)
                  }
                  disabled
                >
                  Button
                </TJButton>
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
