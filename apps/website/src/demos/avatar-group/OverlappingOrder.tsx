import { Avatar, AvatarGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarGroupOverlappingOrder() {
  return (
    <DisplayStand>
      <AvatarGroup className="flex-row-reverse">
        <Avatar>+3</Avatar>
        <Avatar alt="Travis Howard" src="/img/avatar/3.jpg" />
        <Avatar alt="Cindy Baker" src="/img/avatar/2.jpg" />
        <Avatar alt="Remy Sharp" src="/img/avatar/1.jpg" />
      </AvatarGroup>
    </DisplayStand>
  );
}
