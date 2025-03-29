import {
  List,
  ListItem,
  ListItemButton,
  ListSubheader,
  Sheet,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListStickyItem() {
  return (
    <DisplayStand>
      <Sheet
        variant="outlined"
        className="max-h-[300px] w-80 overflow-auto rounded-[6px]"
      >
        <List>
          {[...Array(5)].map((_, categoryIndex) => (
            <ListItem nested key={categoryIndex}>
              <ListSubheader sticky>Category {categoryIndex + 1}</ListSubheader>
              <List>
                {[...Array(10)].map((_, index) => (
                  <ListItem key={index}>
                    <ListItemButton>Subitem {index + 1}</ListItemButton>
                  </ListItem>
                ))}
              </List>
            </ListItem>
          ))}
        </List>
      </Sheet>
    </DisplayStand>
  );
}
