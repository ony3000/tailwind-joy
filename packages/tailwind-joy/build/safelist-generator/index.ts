import type { GeneratorInput } from '../../src/base/types';
import { generatorInputs as aspectRatioClassNameGeneratorInputs } from '../../src/components/AspectRatio';
import { generatorInputs as avatarClassNameGeneratorInputs } from '../../src/components/Avatar';
import { generatorInputs as avatarGroupClassNameGeneratorInputs } from '../../src/components/AvatarGroup';
import { generatorInputs as boxClassNameGeneratorInputs } from '../../src/components/Box';
import { generatorInputs as buttonClassNameGeneratorInputs } from '../../src/components/Button';
import { generatorInputs as buttonGroupClassNameGeneratorInputs } from '../../src/components/ButtonGroup';
import { generatorInputs as checkboxClassNameGeneratorInputs } from '../../src/components/Checkbox';
import { generatorInputs as chipClassNameGeneratorInputs } from '../../src/components/Chip';
import { generatorInputs as chipDeleteClassNameGeneratorInputs } from '../../src/components/ChipDelete';
import { generatorInputs as circularProgressClassNameGeneratorInputs } from '../../src/components/CircularProgress';
import { generatorInputs as dividerClassNameGeneratorInputs } from '../../src/components/Divider';
import { generatorInputs as iconAdapterClassNameGeneratorInputs } from '../../src/components/IconAdapter';
import { generatorInputs as iconButtonClassNameGeneratorInputs } from '../../src/components/IconButton';
import { generatorInputs as inputClassNameGeneratorInputs } from '../../src/components/Input';
import { generatorInputs as linearProgressClassNameGeneratorInputs } from '../../src/components/LinearProgress';
import { generatorInputs as listClassNameGeneratorInputs } from '../../src/components/List';
import { generatorInputs as listDividerClassNameGeneratorInputs } from '../../src/components/ListDivider';
import { generatorInputs as listItemClassNameGeneratorInputs } from '../../src/components/ListItem';
import { generatorInputs as listItemButtonClassNameGeneratorInputs } from '../../src/components/ListItemButton';
import { generatorInputs as listItemContentClassNameGeneratorInputs } from '../../src/components/ListItemContent';
import { generatorInputs as listItemDecoratorClassNameGeneratorInputs } from '../../src/components/ListItemDecorator';
import { generatorInputs as listSubheaderClassNameGeneratorInputs } from '../../src/components/ListSubheader';
import { generatorInputs as radioClassNameGeneratorInputs } from '../../src/components/Radio';
import { generatorInputs as radioGroupClassNameGeneratorInputs } from '../../src/components/RadioGroup';
import { generatorInputs as sheetClassNameGeneratorInputs } from '../../src/components/Sheet';
import { generatorInputs as skeletonClassNameGeneratorInputs } from '../../src/components/Skeleton';
import { generatorInputs as stackClassNameGeneratorInputs } from '../../src/components/Stack';
import { generatorInputs as switchClassNameGeneratorInputs } from '../../src/components/Switch';
import { generatorInputs as textareaClassNameGeneratorInputs } from '../../src/components/Textarea';
import { generatorInputs as toggleButtonGroupClassNameGeneratorInputs } from '../../src/components/ToggleButtonGroup';
import { generatorInputs as typographyClassNameGeneratorInputs } from '../../src/components/Typography';
import { generatorInputs as adaptedIconClassNameGeneratorInputs } from '../../src/components/internal/class-adapter';
import { generatorInputs } from './inputs';

const BACKSLASH = '\\';

const DOUBLE_QUOTE = '"';

const EOL = '\n';

const SPACE = ' ';

const inputs: GeneratorInput[] = [
  ...aspectRatioClassNameGeneratorInputs,
  ...avatarClassNameGeneratorInputs,
  ...avatarGroupClassNameGeneratorInputs,
  ...boxClassNameGeneratorInputs,
  ...buttonClassNameGeneratorInputs,
  ...buttonGroupClassNameGeneratorInputs,
  ...checkboxClassNameGeneratorInputs,
  ...chipClassNameGeneratorInputs,
  ...chipDeleteClassNameGeneratorInputs,
  ...circularProgressClassNameGeneratorInputs,
  ...dividerClassNameGeneratorInputs,
  ...iconAdapterClassNameGeneratorInputs,
  ...iconButtonClassNameGeneratorInputs,
  ...inputClassNameGeneratorInputs,
  ...linearProgressClassNameGeneratorInputs,
  ...listClassNameGeneratorInputs,
  ...listDividerClassNameGeneratorInputs,
  ...listItemClassNameGeneratorInputs,
  ...listItemButtonClassNameGeneratorInputs,
  ...listItemContentClassNameGeneratorInputs,
  ...listItemDecoratorClassNameGeneratorInputs,
  ...listSubheaderClassNameGeneratorInputs,
  ...radioClassNameGeneratorInputs,
  ...radioGroupClassNameGeneratorInputs,
  ...sheetClassNameGeneratorInputs,
  ...skeletonClassNameGeneratorInputs,
  ...stackClassNameGeneratorInputs,
  ...switchClassNameGeneratorInputs,
  ...textareaClassNameGeneratorInputs,
  ...toggleButtonGroupClassNameGeneratorInputs,
  ...typographyClassNameGeneratorInputs,
  ...adaptedIconClassNameGeneratorInputs,
  ...generatorInputs,
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
      if (/src\/safelist/.test(id)) {
        const content = generate();

        return {
          code: code.replace(
            '"__REPLACE_ME__"',
            `${EOL}${content
              .split(SPACE)
              .sort()
              .map((className) =>
                className.includes(BACKSLASH) ||
                className.includes(DOUBLE_QUOTE)
                  ? `String.raw\`${className}\``
                  : `"${className}"`,
              )
              .join(',')}`,
          ),
          map: null,
        };
      }
    },
  };
}
