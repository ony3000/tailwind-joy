import type { GeneratorInput } from '../base/types';
import { generatorInputs as boxClassNameGeneratorInputs } from '../components/Box';
import { generatorInputs as buttonClassNameGeneratorInputs } from '../components/Button';
import { generatorInputs as buttonGroupClassNameGeneratorInputs } from '../components/ButtonGroup';
import { generatorInputs as checkboxClassNameGeneratorInputs } from '../components/Checkbox';
import { generatorInputs as circularProgressClassNameGeneratorInputs } from '../components/CircularProgress';
import { generatorInputs as dividerClassNameGeneratorInputs } from '../components/Divider';
import { generatorInputs as iconAdapterClassNameGeneratorInputs } from '../components/IconAdapter';
import { generatorInputs as iconButtonClassNameGeneratorInputs } from '../components/IconButton';
import { generatorInputs as linearProgressClassNameGeneratorInputs } from '../components/LinearProgress';
import { generatorInputs as radioClassNameGeneratorInputs } from '../components/Radio';
import { generatorInputs as radioGroupClassNameGeneratorInputs } from '../components/RadioGroup';
import { generatorInputs as sheetClassNameGeneratorInputs } from '../components/Sheet';
import { generatorInputs as switchClassNameGeneratorInputs } from '../components/Switch';
import { generatorInputs as adaptedIconClassNameGeneratorInputs } from '../components/internal/class-adapter';

const SPACE = ' ';

const inputs: GeneratorInput[] = [
  ...boxClassNameGeneratorInputs,
  ...buttonClassNameGeneratorInputs,
  ...buttonGroupClassNameGeneratorInputs,
  ...checkboxClassNameGeneratorInputs,
  ...circularProgressClassNameGeneratorInputs,
  ...dividerClassNameGeneratorInputs,
  ...iconAdapterClassNameGeneratorInputs,
  ...iconButtonClassNameGeneratorInputs,
  ...linearProgressClassNameGeneratorInputs,
  ...radioClassNameGeneratorInputs,
  ...radioGroupClassNameGeneratorInputs,
  ...sheetClassNameGeneratorInputs,
  ...switchClassNameGeneratorInputs,
  ...adaptedIconClassNameGeneratorInputs,
];

function generate() {
  const classNames: string[] = [];

  for (const { generatorFn, variants } of inputs) {
    const variantEntries = Object.entries(variants);
    const variantCombinations = [
      {},
      ...(variantEntries.length === 0
        ? []
        : variantEntries.reduce<Record<string, string | boolean | undefined>[]>(
            (prevCombinations, [variantName, values]) =>
              values.flatMap((value) =>
                prevCombinations.map((combination) => ({
                  ...combination,
                  [variantName]: value,
                })),
              ),
            [{}],
          )),
    ];

    for (const combination of variantCombinations) {
      classNames.push(generatorFn(combination));
    }
  }

  const deduplicatedClassName = [
    ...new Set(classNames.join(SPACE).split(SPACE)),
  ].join(SPACE);

  return deduplicatedClassName;
}

export function safelistGenerator() {
  return {
    name: 'safelist-generator',
    transform(code: string, id: string) {
      if (/src\/tw-extension/.test(id)) {
        const content = generate();

        return {
          code: code.replace('"__REPLACE_ME__"', `String.raw\`${content}\``),
          map: null,
        };
      }
    },
  };
}
