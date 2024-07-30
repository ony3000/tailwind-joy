import { resolve } from 'node:path';
import { test, expect } from '@playwright/experimental-ct-react';

import { App } from '@/App';
import { sleep, uuid } from '@/utils';

type UISize = 'sm' | 'md' | 'lg';
type UIVariant = 'solid' | 'soft' | 'outlined' | 'plain';
type UIColor = 'primary' | 'neutral' | 'danger' | 'success' | 'warning';
type UIState = 'default' | 'hover' | 'focus-visible' | 'active' | 'disabled';

type ElementRenderer = (props: {
  testId: string;
  size: UISize;
  variant: UIVariant;
  color: UIColor;
  state: UIState;
}) => JSX.Element;

export type Fixture = {
  title: string;
  alterSizes?: UISize[];
  alterVariants?: UIVariant[];
  alterColors?: UIColor[];
  alterStates?: UIState[];
  renderJoyElement: ElementRenderer;
  renderTjElement: ElementRenderer;
};

const sizes: UISize[] = ['sm', 'md', 'lg'];
const variants: UIVariant[] = ['solid', 'soft', 'outlined', 'plain'];
const colors: UIColor[] = [
  'primary',
  'neutral',
  'danger',
  'success',
  'warning',
];
const states: UIState[] = ['default'];

export function testEach(
  fixtures: Fixture[],
  options: {
    containerClassName: string;
    screenshotPath: string;
    viewport: {
      width: number;
      height: number;
    };
  },
) {
  const { containerClassName, screenshotPath, viewport } = options;

  test.use({ viewport });

  for (const {
    title,
    alterSizes,
    alterVariants,
    alterColors,
    alterStates,
    renderJoyElement,
    renderTjElement,
  } of fixtures) {
    const testIdSuffix = uuid();

    const testingSizes = alterSizes ?? sizes;
    const testingVariants = alterVariants ?? variants;
    const testingColors = alterColors ?? colors;
    const testingStates = alterStates ?? states;

    const cartesianProduct = testingColors.flatMap((color) =>
      testingVariants
        .flatMap((variant) => testingSizes.map((size) => ({ variant, size })))
        .map(({ variant, size }) => ({ color, variant, size })),
    );

    test.describe(title, () => {
      for (const { color, variant, size } of cartesianProduct) {
        const hyphenatedVariants = `${color}-${variant}-${size}`;
        const testIdBase = `${hyphenatedVariants}-${testIdSuffix}`;

        for (const state of testingStates) {
          test.describe(`${state} state`, () => {
            for (const scheme of ['light', 'dark'] as const) {
              test(`${scheme}-${hyphenatedVariants}`, async ({
                page,
                mount,
              }) => {
                const containerTestId = `${scheme}-${state}-container-${testIdBase}`;
                const elementTestId = `${scheme}-${state}-element-${testIdBase}`;

                const joyComponent = await mount(
                  <App mode={scheme}>
                    <div
                      data-testid={containerTestId}
                      tabIndex={0}
                      className={containerClassName}
                    >
                      {renderJoyElement({
                        testId: elementTestId,
                        state,
                        size,
                        variant,
                        color,
                      })}
                    </div>
                  </App>,
                );
                if (state === 'hover') {
                  await page.getByTestId(elementTestId).hover();
                } else if (state === 'focus-visible') {
                  await page.getByTestId(containerTestId).press('Tab');
                } else if (state === 'active') {
                  page.getByTestId(elementTestId).click({
                    delay: 100,
                  });
                }
                await page.getByTestId(containerTestId).screenshot({
                  animations: 'disabled',
                  path: resolve(
                    screenshotPath,
                    `${scheme}-${testIdBase}-${state}.png`,
                  ),
                });
                if (state === 'active') {
                  await sleep(100);
                }
                await joyComponent.unmount();

                const tjComponent = await mount(
                  <App mode={scheme}>
                    <div
                      data-testid={containerTestId}
                      tabIndex={0}
                      className={containerClassName}
                    >
                      {renderTjElement({
                        testId: elementTestId,
                        state,
                        size,
                        variant,
                        color,
                      })}
                    </div>
                  </App>,
                );
                if (state === 'hover') {
                  await page.getByTestId(elementTestId).hover();
                } else if (state === 'focus-visible') {
                  await page.getByTestId(containerTestId).press('Tab');
                } else if (state === 'active') {
                  page.getByTestId(elementTestId).click({
                    delay: 100,
                  });
                }
                await expect(
                  await page.getByTestId(containerTestId),
                ).toHaveScreenshot(`${scheme}-${testIdBase}-${state}.png`);
                if (state === 'active') {
                  await sleep(100);
                }
                await tjComponent.unmount();
              });
            }
          });
        }
      }
    });
  }
}
