import { MdImage, MdVideocam } from 'react-icons/md';
import {
  List,
  ListItemButton,
  ListItemDecorator,
} from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListSemanticElements() {
  return (
    <DisplayStand>
      <List component="nav" className="max-w-[240px]">
        <ListItemButton>
          <ListItemDecorator>
            <MdImage className={iconClass()} />
          </ListItemDecorator>
          Add another image
        </ListItemButton>
        <ListItemButton>
          <ListItemDecorator>
            <MdVideocam className={iconClass()} />
          </ListItemDecorator>
          Add another video
        </ListItemButton>
      </List>
    </DisplayStand>
  );
}
