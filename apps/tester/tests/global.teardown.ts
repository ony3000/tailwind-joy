import { rm } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { test as teardown } from '@playwright/test';

const __dirname = dirname(fileURLToPath(import.meta.url));

teardown('cleanup screenshots', async ({}) => {
  await rm(resolve(__dirname, './__screenshots__/'), {
    force: true,
    recursive: true,
  });
});
