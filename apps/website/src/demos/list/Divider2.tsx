import {
  Avatar,
  List,
  ListDivider,
  ListItem,
  ListItemDecorator,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListDivider2() {
  return (
    <DisplayStand>
      <List
        orientation="horizontal"
        variant="outlined"
        className="mx-auto grow-0 rounded-md [--ListItem-paddingY:1rem] [--ListItemDecorator-size:48px]"
      >
        <ListItem>
          <ListItemDecorator>
            <Avatar size="sm" src="/img/avatar/1.jpg" />
          </ListItemDecorator>
          Mabel Boyle
        </ListItem>
        <ListDivider inset="gutter" />
        <ListItem>
          <ListItemDecorator>
            <Avatar size="sm" src="/img/avatar/2.jpg" />
          </ListItemDecorator>
          Adam Tris
        </ListItem>
        <ListDivider inset="gutter" />
        <ListItem>
          <ListItemDecorator>
            <Avatar size="sm" src="/img/avatar/3.jpg" />
          </ListItemDecorator>
          Boyd Burt
        </ListItem>
      </List>
    </DisplayStand>
  );
}
