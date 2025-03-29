// @ts-check
import { Command } from 'commander';
import { writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const program = new Command();

program
  .name('pnpm make')
  .description('Creates a component template with the given name.')
  .option(
    '--name <string>',
    'name of the component (camelCase or PascalCase is recommended)',
  );

program.parse();

/**
 * @type {{ name?: string }}
 */
const options = program.opts();

/**
 * @param {string} input
 */
function capitalize(input) {
  return `${input[0].toUpperCase()}${input.slice(1)}`;
}

/**
 * @param {{ name?: string }} arg
 */
async function main({ name }) {
  if (!name) {
    throw new Error('Component name is required.');
  }

  const matchResult = name.match(/[A-Z]?[a-z]*/g);

  if (!matchResult) {
    throw new Error('Unexpected error.');
  }

  const words = matchResult.filter(Boolean);

  const kebabCaseName = words.map((word) => word.toLowerCase()).join('-');
  const pascalCaseName = words.map(capitalize).join('');
  const camelCaseName = `${pascalCaseName[0].toLowerCase()}${pascalCaseName.slice(1)}`;

  const outputPath = resolve(
    process.cwd(),
    `src/components/${pascalCaseName}.tsx`,
  );

  const template = `
import { clsx } from 'clsx';
import type { ComponentProps, ForwardedRef, ReactNode } from 'react';
import {
  forwardRef,
  createContext,
  createElement,
  cloneElement,
  isValidElement,
  Children,
  useRef,
  useContext,
  useState,
  useMemo,
  useEffect,
} from 'react';
import { r, twMerge, useUniqueId } from '../base/alias';
import {
  marginBlock,
  marginInline,
  paddingBlock,
  paddingInline,
} from '../base/conditional';
import {
  addPrefix,
  hover,
  focus,
  active,
  disabled,
  toColorClass,
  backgroundColor,
  borderColor,
  textColor,
  toVariableClass,
} from '../base/modifier';
import { theme } from '../base/theme';
import { baseTokens, colorTokens } from '../base/tokens';
import type {
  ReactTags,
  DynamicComponentProps,
  Difference,
  BaseVariants,
  GeneratorInput,
} from '../base/types';
import { isTailwindVersion4, excludeClassName } from '../base/utils';

function ${camelCaseName}RootVariants(
  props?: BaseVariants & {
    //
  },
) {
  const {
    color,
    size,
    variant,
    //
  } = props ?? {};

  return twMerge(
    clsx([
      'tj-${kebabCaseName}-root group/tj-${kebabCaseName}',
      //
    ]),
  );
}

type ${pascalCaseName}RootVariants = BaseVariants & {
  //
} & {
  slotProps?: {
    root?: ComponentProps<'div'>;
  };
};

type ${pascalCaseName}RootProps<T extends ReactTags> = Difference<
  DynamicComponentProps<T>,
  ${pascalCaseName}RootVariants
> &
  ${pascalCaseName}RootVariants;

function ${pascalCaseName}Root<
  T extends ReactTags = 'div',
>(
  {
    // ---- passing props ----
    // -----------------------

    // ---- non-passing props ----
    // base variants
    color,
    size,
    variant,

    // non-base variants
    className,

    // slot props
    slotProps = {},

    // others
    component = 'div',
    children,
    ...otherProps
    // ---------------------------
  }: ${pascalCaseName}RootProps<T>,
  ref: ForwardedRef<unknown>,
) {
  const slotPropsWithoutClassName = useMemo(
    () => excludeClassName(slotProps),
    [slotProps],
  );

  return createElement(
    component,
    {
      ref,
    },
    children,
  );
}

export const ${pascalCaseName} = forwardRef(${pascalCaseName}Root) as <
  T extends ReactTags = 'div',
>(
  props: ${pascalCaseName}RootProps<T> & { ref?: ForwardedRef<unknown> },
) => JSX.Element;

export const generatorInputs: GeneratorInput[] = [
  {
    generatorFn: ${camelCaseName}RootVariants,
    variants: {},
  },
];
`.trimStart();

  await writeFile(outputPath, template);
}

main(options);
