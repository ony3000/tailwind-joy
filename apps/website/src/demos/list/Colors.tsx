import { useState } from 'react';
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemContent,
  Radio,
  RadioGroup,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

type Color = 'primary' | 'neutral' | 'danger' | 'success' | 'warning';

export function ListColors() {
  const [color, setColor] = useState<Color>('neutral');

  return (
    <DisplayStand>
      <Box className="flex items-center gap-6">
        <Box>
          <List className="w-[180px]">
            <ListItem>
              <ListItemButton color={color}>
                <ListItemContent>Item 1</ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton color={color}>
                <ListItemContent>Item 2</ListItemContent>
              </ListItemButton>
            </ListItem>
          </List>
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
