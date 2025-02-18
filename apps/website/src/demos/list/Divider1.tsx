import {
  List as JoyList,
  ListDivider as JoyListDivider,
  ListItem as JoyListItem,
  ListItemDecorator as JoyListItemDecorator,
} from '@mui/joy';
import { Avatar, Box, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListDivider1() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-8">
        {([undefined, 'gutter', 'startDecorator', 'startContent'] as const).map(
          (inset) => (
            <div key={inset || 'default'}>
              <Typography level="body-xs" className="mb-4">
                <code>{inset ? `inset="${inset}"` : '(default)'}</code>
              </Typography>
              <JoyList
                variant="outlined"
                sx={{ minWidth: 240, borderRadius: 'sm' }}
              >
                <JoyListItem>
                  <JoyListItemDecorator>
                    <Avatar size="sm" src="/img/avatar/1.jpg" />
                  </JoyListItemDecorator>
                  Mabel Boyle
                </JoyListItem>
                <JoyListDivider inset={inset} />
                <JoyListItem>
                  <JoyListItemDecorator>
                    <Avatar size="sm" src="/img/avatar/3.jpg" />
                  </JoyListItemDecorator>
                  Boyd Burt
                </JoyListItem>
              </JoyList>
            </div>
          ),
        )}
      </Box>
    </DisplayStand>
  );
}
