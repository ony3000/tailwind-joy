import { Avatar as JoyAvatar, AvatarGroup as JoyAvatarGroup } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarGroupOverlappingOrder() {
  return (
    <DisplayStand>
      <JoyAvatarGroup sx={{ flexDirection: 'row-reverse' }}>
        <JoyAvatar>+3</JoyAvatar>
        <JoyAvatar alt="Travis Howard" src="/img/avatar/3.jpg" />
        <JoyAvatar alt="Cindy Baker" src="/img/avatar/2.jpg" />
        <JoyAvatar alt="Remy Sharp" src="/img/avatar/1.jpg" />
      </JoyAvatarGroup>
    </DisplayStand>
  );
}
