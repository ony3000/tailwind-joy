import { Avatar as JoyAvatar, AvatarGroup as JoyAvatarGroup } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarGroupVerticalStacking() {
  return (
    <DisplayStand>
      <JoyAvatarGroup sx={{ writingMode: 'vertical-rl' }}>
        <JoyAvatar alt="Remy Sharp" src="/img/avatar/1.jpg" />
        <JoyAvatar alt="Cindy Baker" src="/img/avatar/2.jpg" />
        <JoyAvatar alt="Travis Howard" src="/img/avatar/3.jpg" />
        <JoyAvatar sx={{ transform: 'rotate(-90deg)' }}>+3</JoyAvatar>
      </JoyAvatarGroup>
    </DisplayStand>
  );
}
