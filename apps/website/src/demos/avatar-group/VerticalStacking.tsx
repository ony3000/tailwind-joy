import { Avatar, AvatarGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarGroupVerticalStacking() {
  return (
    <DisplayStand>
      <AvatarGroup className="[writing-mode:vertical-rl]">
        <Avatar alt="Remy Sharp" src="/img/avatar/1.jpg" />
        <Avatar alt="Cindy Baker" src="/img/avatar/2.jpg" />
        <Avatar alt="Travis Howard" src="/img/avatar/3.jpg" />
        <Avatar className="-rotate-90">+3</Avatar>
      </AvatarGroup>
    </DisplayStand>
  );
}
