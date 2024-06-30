import { rm } from 'node:fs/promises';
import { resolve } from 'node:path';
import { test as teardown } from '@playwright/experimental-ct-react';

const screenshotPath = resolve(__dirname, '../__screenshots__');

teardown('cleanup screenshots', async ({}) => {
  await rm(screenshotPath, {
    force: true,
    recursive: true,
  });
});
