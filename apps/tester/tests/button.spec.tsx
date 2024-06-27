import { resolve, sep } from 'node:path';
import pathPosix from 'node:path/posix';
import pathWin32 from 'node:path/win32';
import { test, expect } from '@playwright/experimental-ct-react';
import { Button as JoyButton } from '@mui/joy';
import { Button as TJButton } from 'tailwind-joy/components';
import { App } from '@/App';

const basename = sep === '/' ? pathPosix.basename : pathWin32.basename;
const filename = basename(__filename);

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ page, mount }) => {
  const component = await mount(
    <App>
      <div
        data-testid="container-0"
        tabIndex={0}
        className="flex min-h-[100px] min-w-[200px] items-center justify-center p-2"
      >
        <JoyButton data-testid="element-0">Button</JoyButton>
      </div>
    </App>,
  );

  await page.getByTestId('container-0').screenshot({
    animations: 'disabled',
    path: resolve(
      __dirname,
      `../__screenshots__/${filename}/button-default.png`,
    ),
  });

  await component.unmount();
  await mount(
    <App>
      <div
        data-testid="container-0"
        tabIndex={0}
        className="flex min-h-[100px] min-w-[200px] items-center justify-center p-2"
      >
        <TJButton data-testid="element-0">Button</TJButton>
      </div>
    </App>,
  );

  await expect(await page.getByTestId('container-0')).toHaveScreenshot(
    'button-default.png',
  );
});
