import { Avatar as JoyAvatar } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarBasics() {
  return (
    <DisplayStand>
      <Box className="flex gap-4">
        <JoyAvatar />
        <JoyAvatar>JG</JoyAvatar>
        <JoyAvatar alt="Remy Sharp" src="/img/avatar/1.jpg" />
      </Box>
    </DisplayStand>
  );
}
