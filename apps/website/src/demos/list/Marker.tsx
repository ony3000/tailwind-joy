import { List as JoyList, ListItem as JoyListItem } from '@mui/joy';
import { useState } from 'react';
import { Button, Stack, ToggleButtonGroup } from 'tailwind-joy/components';
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
        <JoyList marker={marker}>
          <JoyListItem>The Shawshank Redemption</JoyListItem>
          <JoyListItem nested>
            <JoyListItem>Star Wars</JoyListItem>
            <JoyList marker="circle">
              <JoyListItem>Episode I &ndash; The Phantom Menace</JoyListItem>
              <JoyListItem>Episode II &ndash; Attack of the Clones</JoyListItem>
              <JoyListItem>Episode III &ndash; Revenge of the Sith</JoyListItem>
            </JoyList>
          </JoyListItem>
          <JoyListItem>The Lord of the Rings: The Two Towers</JoyListItem>
        </JoyList>
      </Stack>
    </DisplayStand>
  );
}
