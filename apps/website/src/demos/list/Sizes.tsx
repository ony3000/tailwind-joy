import {
  List as JoyList,
  ListItem as JoyListItem,
  ListItemButton as JoyListItemButton,
  ListItemContent as JoyListItemContent,
} from '@mui/joy';
import { useState } from 'react';
import { Box, Divider, Radio, RadioGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

type Size = 'sm' | 'md' | 'lg';

export function ListSizes() {
  const [size, setSize] = useState<Size>('md');

  return (
    <DisplayStand>
      <Box className="flex items-center gap-6">
        <Box>
          <JoyList size={size} sx={{ width: 180 }}>
            <JoyListItem>
              <JoyListItemButton>
                <JoyListItemContent>Item 1</JoyListItemContent>
              </JoyListItemButton>
            </JoyListItem>
            <JoyListItem>
              <JoyListItemButton>
                <JoyListItemContent>Item 2</JoyListItemContent>
              </JoyListItemButton>
            </JoyListItem>
          </JoyList>
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
