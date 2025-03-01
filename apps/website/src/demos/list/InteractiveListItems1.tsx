import { MdInfo, MdOpenInNew } from 'react-icons/md';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemDecorator,
} from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListInteractiveListItems1() {
  return (
    <DisplayStand>
      <List className="max-w-[320px]">
        <ListItem>
          <ListItemButton onClick={() => alert('You clicked')}>
            <ListItemDecorator>
              <MdInfo className={iconClass()} />
            </ListItemDecorator>
            Clickable item
          </ListItemButton>
        </ListItem>
        <ListItem>
          <ListItemButton component="a" href="#interactive-list-items">
            <ListItemDecorator>
              <MdOpenInNew className={iconClass()} />
            </ListItemDecorator>
            Open a new tab
          </ListItemButton>
        </ListItem>
      </List>
    </DisplayStand>
  );
}
