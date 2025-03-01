import {
  Avatar,
  Box,
  List,
  ListDivider,
  ListItem,
  ListItemDecorator,
  Typography,
} from 'tailwind-joy/components';
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
              <List variant="outlined" className="min-w-[240px] rounded-md">
                <ListItem>
                  <ListItemDecorator>
                    <Avatar size="sm" src="/img/avatar/1.jpg" />
                  </ListItemDecorator>
                  Mabel Boyle
                </ListItem>
                <ListDivider inset={inset} />
                <ListItem>
                  <ListItemDecorator>
                    <Avatar size="sm" src="/img/avatar/3.jpg" />
                  </ListItemDecorator>
                  Boyd Burt
                </ListItem>
              </List>
            </div>
          ),
        )}
      </Box>
    </DisplayStand>
  );
}
