import {
  List,
  ListItem,
  ListItemDecorator,
  Typography,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListDecorators() {
  return (
    <DisplayStand>
      <div>
        <Typography level="body-xs" className="mb-2 font-semibold uppercase">
          Ingredients
        </Typography>
        <List>
          <ListItem>
            <ListItemDecorator>🧅</ListItemDecorator> 1 red onion
          </ListItem>
          <ListItem>
            <ListItemDecorator>🍤</ListItemDecorator> 2 Shrimps
          </ListItem>
          <ListItem>
            <ListItemDecorator>🥓</ListItemDecorator> 120g bacon
          </ListItem>
        </List>
      </div>
    </DisplayStand>
  );
}
