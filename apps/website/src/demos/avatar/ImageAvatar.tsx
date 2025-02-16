import { Avatar, Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarImageAvatar() {
  return (
    <DisplayStand>
      <Box className="flex gap-4">
        <Avatar alt="Remy Sharp" src="/img/avatar/1.jpg" />
        <Avatar alt="Cindy Baker" src="/img/avatar/2.jpg" />
        <Avatar alt="Travis Howard" src="/img/avatar/3.jpg" />
      </Box>
    </DisplayStand>
  );
}
