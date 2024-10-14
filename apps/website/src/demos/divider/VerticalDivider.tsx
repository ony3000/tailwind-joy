import {
  MdFormatAlignCenter,
  MdFormatAlignLeft,
  MdFormatAlignRight,
  MdFormatBold,
  MdFormatItalic,
} from 'react-icons/md';
import { Box, Divider } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function DividerVerticalDivider() {
  return (
    <DisplayStand>
      <Box
        className="
          bg-joy-neutral-50 dark:bg-joy-neutral-900 text-joy-neutral-700 dark:text-joy-neutral-300
          border-joy-neutral-500/20 dark:border-joy-neutral-400/20 flex w-fit items-center
          rounded-md border border-solid [&_hr]:mx-1 [&_svg]:m-3
        "
      >
        <MdFormatAlignLeft className={iconClass()} />
        <MdFormatAlignCenter className={iconClass()} />
        <MdFormatAlignRight className={iconClass()} />
        <Divider orientation="vertical" />
        <MdFormatBold className={iconClass()} />
        <MdFormatItalic className={iconClass()} />
      </Box>
    </DisplayStand>
  );
}
