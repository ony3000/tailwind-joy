import {
  List as JoyList,
  ListItem as JoyListItem,
  ListItemContent as JoyListItemContent,
  ListItemDecorator as JoyListItemDecorator,
} from '@mui/joy';
import { Box, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListEllipsisContent() {
  return (
    <DisplayStand>
      <Box className="w-80">
        <Typography level="body-xs" className="uppercase tracking-[0.15rem]">
          Inbox
        </Typography>
        <JoyList>
          <JoyListItem>
            <JoyListItemDecorator>
              {/* // TODO: Replace div with Avatar. */}
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                <img
                  src="/img/avatar/octocat-avatar.png"
                  className="h-full w-full object-cover"
                  alt="Octocat"
                />
              </div>
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
              {/* // TODO: Replace div with Avatar. */}
              <div className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full">
                <img
                  src="/img/avatar/octocat-avatar.png"
                  className="h-full w-full object-cover"
                  alt="Octocat"
                />
              </div>
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
