import { MdCloud, MdLightMode } from 'react-icons/md';
import { Box, Chip } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipDecorators() {
  return (
    <DisplayStand>
      <Box className="flex items-center gap-2">
        <Chip startDecorator={<MdLightMode className={iconClass()} />}>
          Today is sunny
        </Chip>
        <Chip startDecorator={<MdCloud className={iconClass()} />}>
          Tomorrow is cloudy
        </Chip>
      </Box>
    </DisplayStand>
  );
}
