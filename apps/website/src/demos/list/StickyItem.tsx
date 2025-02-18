import {
  List as JoyList,
  ListItem as JoyListItem,
  ListItemButton as JoyListItemButton,
  ListSubheader as JoyListSubheader,
} from '@mui/joy';
import { Sheet } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListStickyItem() {
  return (
    <DisplayStand>
      <Sheet
        variant="outlined"
        className="max-h-[300px] w-80 overflow-auto rounded-[6px]"
      >
        <JoyList>
          {[...Array(5)].map((_, categoryIndex) => (
            <JoyListItem nested key={categoryIndex}>
              <JoyListSubheader sticky>
                Category {categoryIndex + 1}
              </JoyListSubheader>
              <JoyList>
                {[...Array(10)].map((_, index) => (
                  <JoyListItem key={index}>
                    <JoyListItemButton>Subitem {index + 1}</JoyListItemButton>
                  </JoyListItem>
                ))}
              </JoyList>
            </JoyListItem>
          ))}
        </JoyList>
      </Sheet>
    </DisplayStand>
  );
}
