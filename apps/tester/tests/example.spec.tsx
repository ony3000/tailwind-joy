import { test, expect } from '@playwright/experimental-ct-react';

test.use({ viewport: { width: 500, height: 500 } });

test('should work', async ({ mount }) => {
  const component = await mount(
    <div>
      <button>Button</button>
    </div>,
  );

  await expect(component).toContainText('Button');
});
