import { MdHome, MdApps } from 'react-icons/md';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
} from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListSelected() {
  return (
    <DisplayStand>
      <List className="max-w-[320px]">
        <ListItem>
          <ListItemButton selected>
            <ListItemDecorator>
              <MdHome className={iconClass()} />
            </ListItemDecorator>
            Home
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator>
              <MdApps className={iconClass()} />
            </ListItemDecorator>
            Apps
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton>
            <ListItemDecorator />
            Settings
          </ListItemButton>
        </ListItem>
      </List>
    </DisplayStand>
  );
}
