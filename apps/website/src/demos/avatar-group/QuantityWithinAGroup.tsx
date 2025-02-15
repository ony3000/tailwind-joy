import { Avatar as JoyAvatar, AvatarGroup as JoyAvatarGroup } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

const avatars = [
  {
    alt: 'Remy Sharp',
    src: '/img/avatar/1.jpg',
  },
  {
    alt: 'Cindy Baker',
    src: '/img/avatar/2.jpg',
  },
  {
    alt: 'Travis Howard',
    src: '/img/avatar/3.jpg',
  },
  {
    alt: 'Agnes Walker',
    src: '/img/avatar/4.jpg',
  },
];
const surplus = 2;

export function AvatarGroupQuantityWithinAGroup() {
  return (
    <DisplayStand>
      <JoyAvatarGroup>
        {avatars.map((avatar) => (
          <JoyAvatar key={avatar.alt} {...avatar} />
        ))}
        {surplus && <JoyAvatar>+{surplus}</JoyAvatar>}
      </JoyAvatarGroup>
    </DisplayStand>
  );
}
