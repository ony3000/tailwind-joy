import InfoOutlined from '@mui/icons-material/InfoOutlined';
import { MdInfoOutline } from 'react-icons/md';
import { Typography as JoyTypography, Chip as JoyChip } from '@mui/joy';
import { Typography as TJTypography } from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[400px] w-[400px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'levels',
    alterSizes: ['md'],
    alterVariants: [
      // @ts-expect-error
      undefined,
      'solid',
      'soft',
      'outlined',
      'plain',
    ],
    alterColors: [
      // @ts-expect-error
      undefined,
      'primary',
      'neutral',
      'danger',
      'success',
      'warning',
    ],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <div data-testid={testId}>
          <JoyTypography variant={variant} color={color} level="h1">
            h1
          </JoyTypography>
          <JoyTypography variant={variant} color={color} level="h2">
            h2
          </JoyTypography>
          <JoyTypography variant={variant} color={color} level="h3">
            h3
          </JoyTypography>
          <JoyTypography variant={variant} color={color} level="h4">
            h4
          </JoyTypography>
          <JoyTypography variant={variant} color={color} level="title-lg">
            title-lg
          </JoyTypography>
          <JoyTypography variant={variant} color={color} level="title-md">
            title-md
          </JoyTypography>
          <JoyTypography variant={variant} color={color} level="title-sm">
            title-sm
          </JoyTypography>
          <JoyTypography variant={variant} color={color} level="body-lg">
            body-lg
          </JoyTypography>
          <JoyTypography variant={variant} color={color} level="body-md">
            body-md
          </JoyTypography>
          <JoyTypography variant={variant} color={color} level="body-sm">
            body-sm
          </JoyTypography>
          <JoyTypography variant={variant} color={color} level="body-xs">
            body-xs
          </JoyTypography>
        </div>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <div data-testid={testId}>
          <TJTypography variant={variant} color={color} level="h1">
            h1
          </TJTypography>
          <TJTypography variant={variant} color={color} level="h2">
            h2
          </TJTypography>
          <TJTypography variant={variant} color={color} level="h3">
            h3
          </TJTypography>
          <TJTypography variant={variant} color={color} level="h4">
            h4
          </TJTypography>
          <TJTypography variant={variant} color={color} level="title-lg">
            title-lg
          </TJTypography>
          <TJTypography variant={variant} color={color} level="title-md">
            title-md
          </TJTypography>
          <TJTypography variant={variant} color={color} level="title-sm">
            title-sm
          </TJTypography>
          <TJTypography variant={variant} color={color} level="body-lg">
            body-lg
          </TJTypography>
          <TJTypography variant={variant} color={color} level="body-md">
            body-md
          </TJTypography>
          <TJTypography variant={variant} color={color} level="body-sm">
            body-sm
          </TJTypography>
          <TJTypography variant={variant} color={color} level="body-xs">
            body-xs
          </TJTypography>
        </div>
      );
    },
  },
  {
    title: 'decorators',
    alterSizes: ['md'],
    alterVariants: [
      // @ts-expect-error
      undefined,
      'solid',
      'soft',
      'outlined',
      'plain',
    ],
    alterColors: [
      // @ts-expect-error
      undefined,
      'primary',
      'neutral',
      'danger',
      'success',
      'warning',
    ],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <div data-testid={testId}>
          <JoyTypography
            variant={variant}
            color={color}
            level="h1"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
          <JoyTypography
            variant={variant}
            color={color}
            level="h2"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
          <JoyTypography
            variant={variant}
            color={color}
            level="h3"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
          <JoyTypography
            variant={variant}
            color={color}
            level="h4"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
          <JoyTypography
            variant={variant}
            color={color}
            level="title-lg"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
          <JoyTypography
            variant={variant}
            color={color}
            level="title-md"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
          <JoyTypography
            variant={variant}
            color={color}
            level="title-sm"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
          <JoyTypography
            variant={variant}
            color={color}
            level="body-lg"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
          <JoyTypography
            variant={variant}
            color={color}
            level="body-md"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
          <JoyTypography
            variant={variant}
            color={color}
            level="body-sm"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
          <JoyTypography
            variant={variant}
            color={color}
            level="body-xs"
            startDecorator={<InfoOutlined />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </JoyTypography>
        </div>
      );
    },
    renderTjElement({ testId, size, variant, color, iconClassName }) {
      return (
        <div data-testid={testId}>
          <TJTypography
            variant={variant}
            color={color}
            level="h1"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
          <TJTypography
            variant={variant}
            color={color}
            level="h2"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
          <TJTypography
            variant={variant}
            color={color}
            level="h3"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
          <TJTypography
            variant={variant}
            color={color}
            level="h4"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
          <TJTypography
            variant={variant}
            color={color}
            level="title-lg"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
          <TJTypography
            variant={variant}
            color={color}
            level="title-md"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
          <TJTypography
            variant={variant}
            color={color}
            level="title-sm"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
          <TJTypography
            variant={variant}
            color={color}
            level="body-lg"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
          <TJTypography
            variant={variant}
            color={color}
            level="body-md"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
          <TJTypography
            variant={variant}
            color={color}
            level="body-sm"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
          <TJTypography
            variant={variant}
            color={color}
            level="body-xs"
            startDecorator={<MdInfoOutline className={iconClassName} />}
            endDecorator={
              <JoyChip component="span" size="sm">
                123
              </JoyChip>
            }
          >
            Lorem ipsum
          </TJTypography>
        </div>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
