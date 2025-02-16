import { Avatar, AvatarGroup } from 'tailwind-joy/components';
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
      <AvatarGroup>
        {avatars.map((avatar) => (
          <Avatar key={avatar.alt} {...avatar} />
        ))}
        {surplus && <Avatar>+{surplus}</Avatar>}
      </AvatarGroup>
    </DisplayStand>
  );
}
