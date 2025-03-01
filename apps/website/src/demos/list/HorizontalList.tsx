import { MdHome, MdPerson } from 'react-icons/md';
import {
  Box,
  List,
  ListDivider,
  ListItem,
  ListItemButton,
} from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListHorizontalList() {
  return (
    <DisplayStand>
      <Box className="flex w-full justify-center">
        <Box component="nav" className="grow">
          <List role="menubar" orientation="horizontal">
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
                aria-label="Home"
              >
                <MdHome className={iconClass()} />
              </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
              >
                Products
              </ListItemButton>
            </ListItem>
            <ListDivider />
            <ListItem role="none">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
              >
                Blog
              </ListItemButton>
            </ListItem>
            <ListItem role="none" className="!ms-auto">
              <ListItemButton
                role="menuitem"
                component="a"
                href="#horizontal-list"
                aria-label="Profile"
              >
                <MdPerson className={iconClass()} />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Box>
    </DisplayStand>
  );
}
