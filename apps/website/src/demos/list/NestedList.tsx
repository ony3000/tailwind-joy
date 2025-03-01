import {
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListNestedList() {
  return (
    <DisplayStand>
      <div>
        <List variant="outlined" className="w-[200px] rounded-md">
          <ListItem nested>
            <ListSubheader>Category 1</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Subitem 1</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Subitem 2</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
          <ListItem nested>
            <ListSubheader>Category 2</ListSubheader>
            <List>
              <ListItem>
                <ListItemButton>Subitem 1</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Subitem 2</ListItemButton>
              </ListItem>
            </List>
          </ListItem>
        </List>
      </div>
    </DisplayStand>
  );
}
