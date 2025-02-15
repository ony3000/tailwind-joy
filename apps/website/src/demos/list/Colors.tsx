import {
  List as JoyList,
  ListItem as JoyListItem,
  ListItemButton as JoyListItemButton,
  ListItemContent as JoyListItemContent,
} from '@mui/joy';
import { useState } from 'react';
import { Box, Divider, Radio, RadioGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

type Color = 'primary' | 'neutral' | 'danger' | 'success' | 'warning';

export function ListColors() {
  const [color, setColor] = useState<Color>('neutral');

  return (
    <DisplayStand>
      <Box className="flex items-center gap-6">
        <Box>
          <JoyList sx={{ width: 180 }}>
            <JoyListItem>
              <JoyListItemButton color={color}>
                <JoyListItemContent>Item 1</JoyListItemContent>
              </JoyListItemButton>
            </JoyListItem>
            <JoyListItem>
              <JoyListItemButton color={color}>
                <JoyListItemContent>Item 2</JoyListItemContent>
              </JoyListItemButton>
            </JoyListItem>
          </JoyList>
        </Box>
        <Divider orientation="vertical" />
        <RadioGroup
          name="list-colors"
          value={color}
          onChange={(e) => setColor(e.currentTarget.value as Color)}
        >
          <Radio value="primary" label="Primary" />
          <Radio value="neutral" label="Neutral" />
          <Radio value="danger" label="Danger" />
          <Radio value="success" label="Success" />
          <Radio value="warning" label="Warning" />
        </RadioGroup>
      </Box>
    </DisplayStand>
  );
}
