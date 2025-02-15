import {
  List as JoyList,
  ListItem as JoyListItem,
  ListItemDecorator as JoyListItemDecorator,
} from '@mui/joy';
import { Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListDecorators() {
  return (
    <DisplayStand>
      <div>
        <Typography level="body-xs" className="mb-2 font-semibold uppercase">
          Ingredients
        </Typography>
        <JoyList>
          <JoyListItem>
            <JoyListItemDecorator>🧅</JoyListItemDecorator> 1 red onion
          </JoyListItem>
          <JoyListItem>
            <JoyListItemDecorator>🍤</JoyListItemDecorator> 2 Shrimps
          </JoyListItem>
          <JoyListItem>
            <JoyListItemDecorator>🥓</JoyListItemDecorator> 120g bacon
          </JoyListItem>
        </JoyList>
      </div>
    </DisplayStand>
  );
}
