import { Typography as JoyTypography } from '@mui/joy';
import { MdInfoOutline } from 'react-icons/md';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function TypographyDecorators() {
  return (
    <DisplayStand>
      <div>
        <JoyTypography
          startDecorator={<MdInfoOutline className={iconClass()} />}
          className="mb-4"
        >
          The icon automatically adjusts to the scale
        </JoyTypography>
        <JoyTypography
          level="body-lg"
          endDecorator={
            // TODO: Replace span with Chip.
            <span
              className="
                bg-joy-neutral-100 dark:bg-joy-neutral-800 text-joy-neutral-700 dark:text-joy-neutral-200
                relative inline-flex min-h-[1.25rem] max-w-max items-center justify-center whitespace-nowrap
                rounded-3xl px-1.5 align-middle text-[0.75rem] font-medium leading-normal no-underline
              "
            >
              <span className="order-1 inline-block grow overflow-hidden text-ellipsis">
                123
              </span>
            </span>
          }
          className="justify-center"
        >
          The display also changes to flexbox
        </JoyTypography>
      </div>
    </DisplayStand>
  );
}
