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

type Variant = 'solid' | 'soft' | 'outlined' | 'plain';

export function ListVariants() {
  const [variant, setVariant] = useState<Variant>('plain');

  return (
    <DisplayStand>
      <Box className="flex items-center gap-6">
        <Box>
          <List className="w-[180px]">
            <ListItem>
              <ListItemButton variant={variant}>
                <ListItemContent>Item 1</ListItemContent>
              </ListItemButton>
            </ListItem>
            <ListItem>
              <ListItemButton variant={variant}>
                <ListItemContent>Item 2</ListItemContent>
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
        <Divider orientation="vertical" />
        <RadioGroup
          name="list-variants"
          value={variant}
          onChange={(e) => setVariant(e.currentTarget.value as Variant)}
        >
          <Radio value="solid" label="Solid" />
          <Radio value="soft" label="Soft" />
          <Radio value="outlined" label="Outlined" />
          <Radio value="plain" label="Plain" />
        </RadioGroup>
      </Box>
    </DisplayStand>
  );
}
