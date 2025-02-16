import { Avatar, Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarBasics() {
  return (
    <DisplayStand>
      <Box className="flex gap-4">
        <Avatar />
        <Avatar>JG</Avatar>
        <Avatar alt="Remy Sharp" src="/img/avatar/1.jpg" />
      </Box>
    </DisplayStand>
  );
}
