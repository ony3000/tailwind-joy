import {
  List as JoyList,
  ListDivider as JoyListDivider,
  ListItem as JoyListItem,
  ListItemDecorator as JoyListItemDecorator,
} from '@mui/joy';
import { Avatar } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListDivider2() {
  return (
    <DisplayStand>
      <JoyList
        orientation="horizontal"
        variant="outlined"
        sx={{
          flexGrow: 0,
          mx: 'auto',
          '--ListItemDecorator-size': '48px',
          '--ListItem-paddingY': '1rem',
          borderRadius: 'sm',
        }}
      >
        <JoyListItem>
          <JoyListItemDecorator>
            <Avatar size="sm" src="/img/avatar/1.jpg" />
          </JoyListItemDecorator>
          Mabel Boyle
        </JoyListItem>
        <JoyListDivider inset="gutter" />
        <JoyListItem>
          <JoyListItemDecorator>
            <Avatar size="sm" src="/img/avatar/2.jpg" />
          </JoyListItemDecorator>
          Adam Tris
        </JoyListItem>
        <JoyListDivider inset="gutter" />
        <JoyListItem>
          <JoyListItemDecorator>
            <Avatar size="sm" src="/img/avatar/3.jpg" />
          </JoyListItemDecorator>
          Boyd Burt
        </JoyListItem>
      </JoyList>
    </DisplayStand>
  );
}
