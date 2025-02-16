import { Avatar, Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarColors() {
  return (
    <DisplayStand>
      <Box className="flex items-center gap-4">
        <Avatar color="primary" />
        <Avatar color="neutral" />
        <Avatar color="danger" />
        <Avatar color="success" />
        <Avatar color="warning" />
      </Box>
    </DisplayStand>
  );
}
