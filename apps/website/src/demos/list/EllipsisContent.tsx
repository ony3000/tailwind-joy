import {
  Avatar,
  Box,
  List,
  ListItem,
  ListItemContent,
  ListItemDecorator,
  Typography,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListEllipsisContent() {
  return (
    <DisplayStand>
      <Box className="w-80">
        <Typography level="body-xs" className="uppercase tracking-[0.15rem]">
          Inbox
        </Typography>
        <List className="[--ListItemDecorator-size:56px]">
          <ListItem>
            <ListItemDecorator>
              <Avatar src="/img/avatar/1.jpg" />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-sm">Brunch this weekend?</Typography>
              <Typography level="body-sm" noWrap>
                I'll be in your neighborhood doing errands this Tuesday.
              </Typography>
            </ListItemContent>
          </ListItem>
          <ListItem>
            <ListItemDecorator>
              <Avatar src="/img/avatar/2.jpg" />
            </ListItemDecorator>
            <ListItemContent>
              <Typography level="title-sm">Summer BBQ</Typography>
              <Typography level="body-sm" noWrap>
                Wish I could come, but I'm out of town this Friday.
              </Typography>
            </ListItemContent>
          </ListItem>
        </List>
      </Box>
    </DisplayStand>
  );
}
