import { Avatar as JoyAvatar, AvatarGroup as JoyAvatarGroup } from '@mui/joy';
import { MdMoreVert } from 'react-icons/md';
import { IconButton } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function AvatarGroupConsistentAppearance() {
  return (
    <DisplayStand>
      <JoyAvatarGroup>
        <JoyAvatar alt="Remy Sharp" src="/img/avatar/1.jpg" />
        <JoyAvatar alt="Cindy Baker" src="/img/avatar/2.jpg" />
        <JoyAvatar alt="Travis Howard" src="/img/avatar/3.jpg" />
        <IconButton
          color="neutral"
          variant="soft"
          onClick={() => alert('You clicked!')}
          className="ms-[var(--Avatar-marginInlineStart)] rounded-[50%] [box-shadow:var(--Avatar-ring)]"
        >
          <MdMoreVert className={iconClass()} />
        </IconButton>
      </JoyAvatarGroup>
    </DisplayStand>
  );
}
