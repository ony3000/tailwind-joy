import {
  List as JoyList,
  ListItem as JoyListItem,
  ListItemButton as JoyListItemButton,
  ListSubheader as JoyListSubheader,
} from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListNestedList() {
  return (
    <DisplayStand>
      <div>
        <JoyList variant="outlined" sx={{ width: 200, borderRadius: 'sm' }}>
          <JoyListItem nested>
            <JoyListSubheader>Category 1</JoyListSubheader>
            <JoyList>
              <JoyListItem>
                <JoyListItemButton>Subitem 1</JoyListItemButton>
              </JoyListItem>
              <JoyListItem>
                <JoyListItemButton>Subitem 2</JoyListItemButton>
              </JoyListItem>
            </JoyList>
          </JoyListItem>
          <JoyListItem nested>
            <JoyListSubheader>Category 2</JoyListSubheader>
            <JoyList>
              <JoyListItem>
                <JoyListItemButton>Subitem 1</JoyListItemButton>
              </JoyListItem>
              <JoyListItem>
                <JoyListItemButton>Subitem 2</JoyListItemButton>
              </JoyListItem>
            </JoyList>
          </JoyListItem>
        </JoyList>
      </div>
    </DisplayStand>
  );
}
