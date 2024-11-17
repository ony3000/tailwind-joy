// @ts-check
import { readdir, readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

async function main() {
  const rootDirPath = resolve(process.cwd(), '.cache/types');
  const files = await readdir(rootDirPath, { recursive: true });

  for (const relativeFilePath of files) {
    if (relativeFilePath.endsWith('.d.ts')) {
      const inputFilePath = resolve(rootDirPath, relativeFilePath);
      const code = await readFile(inputFilePath, {
        encoding: 'utf8',
      });

      const outputFilePath = inputFilePath.replace(/\.d\.ts$/, '.d.cts');
      const extensionAddedCode = code.replace(
        /(from '\.?\.(?:\/[^/;]+)*\/[^/;.]+)(';)/g,
        '$1.cjs$2',
      );

      writeFile(outputFilePath, extensionAddedCode);
    }
  }
}

main();
