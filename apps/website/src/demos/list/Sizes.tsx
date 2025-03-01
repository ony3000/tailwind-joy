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

type Size = 'sm' | 'md' | 'lg';

export function ListSizes() {
  const [size, setSize] = useState<Size>('md');

  return (
    <DisplayStand>
      <Box className="flex items-center gap-6">
        <Box>
          <List size={size} className="w-[180px]">
            <ListItem>
              <ListItemButton>
                <ListItemContent>Item 1</ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton>
                <ListItemContent>Item 2</ListItemContent>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <RadioGroup
          name="list-sizes"
          value={size}
          onChange={(e) => setSize(e.currentTarget.value as Size)}
        >
          <Radio value="sm" label="Small" />
          <Radio value="md" label="Medium" />
          <Radio value="lg" label="Large" />
        </RadioGroup>
      </Box>
    </DisplayStand>
  );
}
