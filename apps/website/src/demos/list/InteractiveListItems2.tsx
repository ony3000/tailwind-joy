import {
  List as JoyList,
  ListItem as JoyListItem,
  ListItemButton as JoyListItemButton,
} from '@mui/joy';
import Add from '@mui/icons-material/Add';
import Delete from '@mui/icons-material/Delete';
import { IconButton } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListInteractiveListItems2() {
  return (
    <DisplayStand>
      <JoyList sx={{ maxWidth: 300 }}>
        <JoyListItem
          startAction={
            <IconButton size="sm" color="neutral">
              <Add />
            </IconButton>
          }
        >
          <JoyListItemButton>Item 1</JoyListItemButton>
        </JoyListItem>
        <JoyListItem
          endAction={
            <IconButton size="sm" color="danger">
              <Delete />
            </IconButton>
          }
        >
          <JoyListItemButton>Item 2</JoyListItemButton>
        </JoyListItem>
      </JoyList>
    </DisplayStand>
  );
}
