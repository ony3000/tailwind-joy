import {
  List as JoyList,
  ListItem as JoyListItem,
  ListItemButton as JoyListItemButton,
  ListItemDecorator as JoyListItemDecorator,
} from '@mui/joy';
import Home from '@mui/icons-material/Home';
import Apps from '@mui/icons-material/Apps';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListSelected() {
  return (
    <DisplayStand>
      <JoyList sx={{ maxWidth: 320 }}>
        <JoyListItem>
          <JoyListItemButton selected>
            <JoyListItemDecorator>
              <Home />
            </JoyListItemDecorator>
            Home
          </JoyListItemButton>
        </JoyListItem>
        <JoyListItem>
          <JoyListItemButton>
            <JoyListItemDecorator>
              <Apps />
            </JoyListItemDecorator>
            Apps
          </JoyListItemButton>
        </JoyListItem>
        <JoyListItem>
          <JoyListItemButton>
            <JoyListItemDecorator />
            Settings
          </JoyListItemButton>
        </JoyListItem>
      </JoyList>
    </DisplayStand>
  );
}
