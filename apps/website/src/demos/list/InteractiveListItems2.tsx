import { MdAdd, MdDelete } from 'react-icons/md';
import {
  IconButton,
  List,
  ListItem,
  ListItemButton,
} from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListInteractiveListItems2() {
  return (
    <DisplayStand>
      <List className="max-w-[300px]">
        <ListItem
          startAction={
            <IconButton size="sm" color="neutral">
              <MdAdd className={iconClass({ color: 'neutral' })} />
            </IconButton>
          }
        >
          <ListItemButton>Item 1</ListItemButton>
        </ListItem>
        <ListItem
          endAction={
            <IconButton size="sm" color="danger">
              <MdDelete className={iconClass({ color: 'danger' })} />
            </IconButton>
          }
        >
          <ListItemButton>Item 2</ListItemButton>
        </ListItem>
      </List>
    </DisplayStand>
  );
}
