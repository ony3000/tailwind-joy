import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import { Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectVariants() {
  return (
    <DisplayStand>
      <Stack spacing="16px">
        <JoySelect defaultValue="dog" variant="solid">
          <JoyOption value="dog">Dog</JoyOption>
          <JoyOption value="cat">Cat</JoyOption>
          <JoyOption value="fish">Fish</JoyOption>
          <JoyOption value="bird">Bird</JoyOption>
        </JoySelect>
        <JoySelect defaultValue="dog" variant="soft">
          <JoyOption value="dog">Dog</JoyOption>
          <JoyOption value="cat">Cat</JoyOption>
          <JoyOption value="fish">Fish</JoyOption>
          <JoyOption value="bird">Bird</JoyOption>
        </JoySelect>
        <JoySelect defaultValue="dog" variant="outlined">
          <JoyOption value="dog">Dog</JoyOption>
          <JoyOption value="cat">Cat</JoyOption>
          <JoyOption value="fish">Fish</JoyOption>
          <JoyOption value="bird">Bird</JoyOption>
        </JoySelect>
        <JoySelect defaultValue="dog" variant="plain">
          <JoyOption value="dog">Dog</JoyOption>
          <JoyOption value="cat">Cat</JoyOption>
          <JoyOption value="fish">Fish</JoyOption>
          <JoyOption value="bird">Bird</JoyOption>
        </JoySelect>
      </Stack>
    </DisplayStand>
  );
}
