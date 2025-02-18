import {
  List as JoyList,
  ListItem as JoyListItem,
  ListItemButton as JoyListItemButton,
  ListItemDecorator as JoyListItemDecorator,
} from '@mui/joy';
import Info from '@mui/icons-material/Info';
import OpenInNew from '@mui/icons-material/OpenInNew';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListInteractiveListItems1() {
  return (
    <DisplayStand>
      <JoyList sx={{ maxWidth: 320 }}>
        <JoyListItem>
          <JoyListItemButton onClick={() => alert('You clicked')}>
            <JoyListItemDecorator>
              <Info />
            </JoyListItemDecorator>
            Clickable item
          </JoyListItemButton>
        </JoyListItem>
        <JoyListItem>
          <JoyListItemButton component="a" href="#interactive-list-items">
            <JoyListItemDecorator>
              <OpenInNew />
            </JoyListItemDecorator>
            Open a new tab
          </JoyListItemButton>
        </JoyListItem>
      </JoyList>
    </DisplayStand>
  );
}
