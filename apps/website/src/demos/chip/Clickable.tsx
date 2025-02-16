import { MdCheck } from 'react-icons/md';
import { Avatar, Box, Chip } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipClickable() {
  return (
    <DisplayStand>
      <Box className="flex items-center gap-2">
        <Chip
          size="lg"
          variant="outlined"
          startDecorator={<Avatar size="sm" src="/img/avatar/1.jpg" />}
          endDecorator={<MdCheck className={iconClass()} />}
          onClick={() => alert('You clicked the Tailwind Joy Chip!')}
        >
          Mark
        </Chip>
      </Box>
    </DisplayStand>
  );
}
