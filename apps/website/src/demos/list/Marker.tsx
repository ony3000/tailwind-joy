import { useState } from 'react';
import {
  Button,
  List,
  ListItem,
  Stack,
  ToggleButtonGroup,
} from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ListMarker() {
  const [marker, setMarker] = useState('disc');

  return (
    <DisplayStand>
      <Stack spacing="16px">
        <ToggleButtonGroup
          value={marker}
          onChange={(_, newValue) => {
            setMarker(newValue);
          }}
        >
          <Button value="disc">disc</Button>
          <Button value="circle">circle</Button>
          <Button value="decimal">decimal</Button>
          <Button value="upper-roman">upper-roman</Button>
        </ToggleButtonGroup>
        <List marker={marker}>
          <ListItem>The Shawshank Redemption</ListItem>
          <ListItem nested>
            <ListItem>Star Wars</ListItem>
            <List marker="circle">
              <ListItem>Episode I &ndash; The Phantom Menace</ListItem>
              <ListItem>Episode II &ndash; Attack of the Clones</ListItem>
              <ListItem>Episode III &ndash; Revenge of the Sith</ListItem>
            </List>
          </ListItem>
          <ListItem>The Lord of the Rings: The Two Towers</ListItem>
        </List>
      </Stack>
    </DisplayStand>
  );
}
