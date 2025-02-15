import {
  List as JoyList,
  ListDivider as JoyListDivider,
  ListItem as JoyListItem,
  ListItemButton as JoyListItemButton,
} from '@mui/joy';
import Home from '@mui/icons-material/Home';
import Person from '@mui/icons-material/Person';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListHorizontalList() {
  return (
    <DisplayStand>
      <Box className="flex w-full justify-center">
        <Box component="nav" className="grow">
          <JoyList role="menubar" orientation="horizontal">
            <JoyListItem role="none">
              <JoyListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
                aria-label="Home"
              >
                <Home />
              </JoyListItemButton>
            </JoyListItem>
            <JoyListDivider />
            <JoyListItem role="none">
              <JoyListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
              >
                Products
              </JoyListItemButton>
            </JoyListItem>
            <JoyListDivider />
            <JoyListItem role="none">
              <JoyListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
              >
                Blog
              </JoyListItemButton>
            </JoyListItem>
            <JoyListItem role="none" sx={{ marginInlineStart: 'auto' }}>
              <JoyListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
                aria-label="Profile"
              >
                <Person />
              </JoyListItemButton>
            </JoyListItem>
          </JoyList>
        </Box>
      </Box>
    </DisplayStand>
  );
}
