import {
  List as JoyList,
  ListItem as JoyListItem,
  ListItemContent as JoyListItemContent,
  ListItemDecorator as JoyListItemDecorator,
} from '@mui/joy';
import { Avatar, Box, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListEllipsisContent() {
  return (
    <DisplayStand>
      <Box className="w-80">
        <Typography level="body-xs" className="uppercase tracking-[0.15rem]">
          Inbox
        </Typography>
        <JoyList sx={{ '--ListItemDecorator-size': '56px' }}>
          <JoyListItem>
            <JoyListItemDecorator>
              <Avatar src="/img/avatar/1.jpg" />
            </JoyListItemDecorator>
            <JoyListItemContent>
              <Typography level="title-sm">Brunch this weekend?</Typography>
              <Typography level="body-sm" noWrap>
                I'll be in your neighborhood doing errands this Tuesday.
              </Typography>
            </JoyListItemContent>
          </JoyListItem>
          <JoyListItem>
            <JoyListItemDecorator>
              <Avatar src="/img/avatar/2.jpg" />
            </JoyListItemDecorator>
            <JoyListItemContent>
              <Typography level="title-sm">Summer BBQ</Typography>
              <Typography level="body-sm" noWrap>
                Wish I could come, but I'm out of town this Friday.
              </Typography>
            </JoyListItemContent>
          </JoyListItem>
        </JoyList>
      </Box>
    </DisplayStand>
  );
}
