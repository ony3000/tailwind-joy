import { resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';
import { test, expect } from '@playwright/experimental-ct-react';

import SettingsIcon from '@mui/icons-material/Settings';
import { MdSettings } from 'react-icons/md';
import {
  ButtonGroup as JoyButtonGroup,
  Button as JoyButton,
  IconButton as JoyIconButton,
} from '@mui/joy';
import {
  ButtonGroup as TJButtonGroup,
  Button as TJButton,
  IconButton as TJIconButton,
  IconAdapter,
} from 'tailwind-joy/components';

import { App, DarkModeApp } from '@/App';
import { uuid } from '@/utils';

const basename = sep === '/' ? pathPosix.basename : pathWin32.basename;
const filename = basename(__filename);
const screenshotPath = resolve(__dirname, `../__screenshots__/${filename}`);

test.use({ viewport: { width: 500, height: 500 } });

const containerClassName =
  'flex h-[200px] w-[400px] items-center justify-center p-2';

type UISize = 'sm' | 'md' | 'lg';
type UIVariant = 'solid' | 'soft' | 'outlined' | 'plain';
type UIColor = 'primary' | 'neutral' | 'danger' | 'success' | 'warning';
type ElementRenderer = (
  testId: string,
  size: UISize,
  variant: UIVariant,
  color: UIColor,
) => JSX.Element;

const sizes: UISize[] = ['sm', 'md', 'lg'];
const variants: UIVariant[] = ['solid', 'soft', 'outlined', 'plain'];
const colors: UIColor[] = [
  'primary',
  'neutral',
  'danger',
  'success',
  'warning',
];

const customs: {
  title: string;
  narrowedProps: {
    sizes?: UISize[];
    variants?: UIVariant[];
    colors?: UIColor[];
  };
  renderJoyDefault: ElementRenderer;
  renderTjDefault: ElementRenderer;
}[] = [
  {
    title: 'default',
    narrowedProps: {},
    renderJoyDefault: (testId, size, variant, color) => (
      <JoyButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
      >
        <JoyButton>One</JoyButton>
        <JoyButton>Two</JoyButton>
        <JoyButton>Three</JoyButton>
        <JoyIconButton>
          <SettingsIcon />
        </JoyIconButton>
      </JoyButtonGroup>
    ),
    renderTjDefault: (testId, size, variant, color) => (
      <TJButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
      >
        <TJButton>One</TJButton>
        <TJButton>Two</TJButton>
        <TJButton>Three</TJButton>
        <TJIconButton>
          <IconAdapter>
            <MdSettings />
          </IconAdapter>
        </TJIconButton>
      </TJButtonGroup>
    ),
  },
  {
    title: 'disabled',
    narrowedProps: {},
    renderJoyDefault: (testId, size, variant, color) => (
      <JoyButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        disabled
      >
        <JoyButton>One</JoyButton>
        <JoyButton>Two</JoyButton>
        <JoyButton>Three</JoyButton>
        <JoyIconButton>
          <SettingsIcon />
        </JoyIconButton>
      </JoyButtonGroup>
    ),
    renderTjDefault: (testId, size, variant, color) => (
      <TJButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        disabled
      >
        <TJButton>One</TJButton>
        <TJButton>Two</TJButton>
        <TJButton>Three</TJButton>
        <TJIconButton>
          <IconAdapter>
            <MdSettings />
          </IconAdapter>
        </TJIconButton>
      </TJButtonGroup>
    ),
  },
  {
    title: 'disabled (override by children)',
    narrowedProps: {},
    renderJoyDefault: (testId, size, variant, color) => (
      <JoyButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        disabled
      >
        <JoyButton>One</JoyButton>
        <JoyButton>Two</JoyButton>
        <JoyButton>Three</JoyButton>
        <JoyIconButton disabled={false}>
          <SettingsIcon />
        </JoyIconButton>
      </JoyButtonGroup>
    ),
    renderTjDefault: (testId, size, variant, color) => (
      <TJButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        disabled
      >
        <TJButton>One</TJButton>
        <TJButton>Two</TJButton>
        <TJButton>Three</TJButton>
        <TJIconButton disabled={false}>
          <IconAdapter>
            <MdSettings />
          </IconAdapter>
        </TJIconButton>
      </TJButtonGroup>
    ),
  },
  {
    title: 'spacing',
    narrowedProps: {},
    renderJoyDefault: (testId, size, variant, color) => (
      <JoyButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        spacing="0.5rem"
      >
        <JoyButton>One</JoyButton>
        <JoyButton>Two</JoyButton>
        <JoyButton>Three</JoyButton>
        <JoyIconButton>
          <SettingsIcon />
        </JoyIconButton>
      </JoyButtonGroup>
    ),
    renderTjDefault: (testId, size, variant, color) => (
      <TJButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        spacing="0.5rem"
      >
        <TJButton>One</TJButton>
        <TJButton>Two</TJButton>
        <TJButton>Three</TJButton>
        <TJIconButton>
          <IconAdapter>
            <MdSettings />
          </IconAdapter>
        </TJIconButton>
      </TJButtonGroup>
    ),
  },
  {
    title: 'vertical group',
    narrowedProps: {},
    renderJoyDefault: (testId, size, variant, color) => (
      <JoyButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        orientation="vertical"
      >
        <JoyButton>One</JoyButton>
        <JoyButton disabled>Two</JoyButton>
        <JoyButton>Three</JoyButton>
      </JoyButtonGroup>
    ),
    renderTjDefault: (testId, size, variant, color) => (
      <TJButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        orientation="vertical"
      >
        <TJButton>One</TJButton>
        <TJButton disabled>Two</TJButton>
        <TJButton>Three</TJButton>
      </TJButtonGroup>
    ),
  },
  {
    title: 'buttonFlex: 1',
    narrowedProps: {},
    renderJoyDefault: (testId, size, variant, color) => (
      <JoyButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        buttonFlex={1}
      >
        <JoyButton>One</JoyButton>
        <JoyButton>Two</JoyButton>
        <JoyButton>Three</JoyButton>
        <JoyIconButton>
          <SettingsIcon />
        </JoyIconButton>
      </JoyButtonGroup>
    ),
    renderTjDefault: (testId, size, variant, color) => (
      <TJButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        buttonFlex={1}
      >
        <TJButton>One</TJButton>
        <TJButton>Two</TJButton>
        <TJButton>Three</TJButton>
        <TJIconButton>
          <IconAdapter>
            <MdSettings />
          </IconAdapter>
        </TJIconButton>
      </TJButtonGroup>
    ),
  },
  {
    title: 'buttonFlex: 0 1 80px',
    narrowedProps: {},
    renderJoyDefault: (testId, size, variant, color) => (
      <JoyButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        buttonFlex="0 1 80px"
      >
        <JoyButton>One</JoyButton>
        <JoyButton>Two</JoyButton>
        <JoyButton>Three</JoyButton>
        <JoyIconButton>
          <SettingsIcon />
        </JoyIconButton>
      </JoyButtonGroup>
    ),
    renderTjDefault: (testId, size, variant, color) => (
      <TJButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        buttonFlex="0 1 80px"
      >
        <TJButton>One</TJButton>
        <TJButton>Two</TJButton>
        <TJButton>Three</TJButton>
        <TJIconButton>
          <IconAdapter>
            <MdSettings />
          </IconAdapter>
        </TJIconButton>
      </TJButtonGroup>
    ),
  },
  {
    title: 'separator color',
    narrowedProps: {
      variants: ['solid', 'soft', 'plain'],
    },
    renderJoyDefault: (testId, size, variant, color) => (
      <JoyButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        sx={{ '--ButtonGroup-separatorColor': '#4f46e5' }}
      >
        <JoyButton>One</JoyButton>
        <JoyButton>Two</JoyButton>
        <JoyButton>Three</JoyButton>
        <JoyIconButton>
          <SettingsIcon />
        </JoyIconButton>
      </JoyButtonGroup>
    ),
    renderTjDefault: (testId, size, variant, color) => (
      <TJButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        style={{
          // @ts-ignore
          '--ButtonGroup-separatorColor': '#4f46e5',
        }}
      >
        <TJButton>One</TJButton>
        <TJButton>Two</TJButton>
        <TJButton>Three</TJButton>
        <TJIconButton>
          <IconAdapter>
            <MdSettings />
          </IconAdapter>
        </TJIconButton>
      </TJButtonGroup>
    ),
  },
  {
    title: 'pill button group',
    narrowedProps: {
      variants: ['outlined'],
    },
    renderJoyDefault: (testId, size, variant, color) => (
      <JoyButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        sx={{ '--ButtonGroup-radius': '40px' }}
      >
        <JoyButton>One</JoyButton>
        <JoyButton>Two</JoyButton>
        <JoyButton>Three</JoyButton>
        <JoyIconButton>
          <SettingsIcon />
        </JoyIconButton>
      </JoyButtonGroup>
    ),
    renderTjDefault: (testId, size, variant, color) => (
      <TJButtonGroup
        data-testid={testId}
        size={size}
        variant={variant}
        color={color}
        style={{
          // @ts-ignore
          '--ButtonGroup-radius': '40px',
        }}
      >
        <TJButton>One</TJButton>
        <TJButton>Two</TJButton>
        <TJButton>Three</TJButton>
        <TJIconButton>
          <IconAdapter>
            <MdSettings />
          </IconAdapter>
        </TJIconButton>
      </TJButtonGroup>
    ),
  },
];

for (const {
  title,
  narrowedProps,
  renderJoyDefault,
  renderTjDefault,
} of customs) {
  const testIdSuffix = uuid();

  const customColors = narrowedProps.colors ?? colors;
  const customVariants = narrowedProps.variants ?? variants;
  const customSizes = narrowedProps.sizes ?? sizes;
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
                {renderJoyDefault(elementTestId, size, variant, color)}
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
                {renderTjDefault(elementTestId, size, variant, color)}
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
                {renderJoyDefault(elementTestId, size, variant, color)}
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
                {renderTjDefault(elementTestId, size, variant, color)}
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
