import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import { Stack } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectColors() {
  return (
    <DisplayStand>
      <Stack spacing="16px">
        <JoySelect defaultValue="dog" color="primary">
          <JoyOption value="dog">Dog</JoyOption>
          <JoyOption value="cat">Cat</JoyOption>
          <JoyOption value="fish">Fish</JoyOption>
          <JoyOption value="bird">Bird</JoyOption>
        </JoySelect>
        <JoySelect defaultValue="dog" color="neutral">
          <JoyOption value="dog">Dog</JoyOption>
          <JoyOption value="cat">Cat</JoyOption>
          <JoyOption value="fish">Fish</JoyOption>
          <JoyOption value="bird">Bird</JoyOption>
        </JoySelect>
        <JoySelect defaultValue="dog" color="danger">
          <JoyOption value="dog">Dog</JoyOption>
          <JoyOption value="cat">Cat</JoyOption>
          <JoyOption value="fish">Fish</JoyOption>
          <JoyOption value="bird">Bird</JoyOption>
        </JoySelect>
        <JoySelect defaultValue="dog" color="success">
          <JoyOption value="dog">Dog</JoyOption>
          <JoyOption value="cat">Cat</JoyOption>
          <JoyOption value="fish">Fish</JoyOption>
          <JoyOption value="bird">Bird</JoyOption>
        </JoySelect>
        <JoySelect defaultValue="dog" color="warning">
          <JoyOption value="dog">Dog</JoyOption>
          <JoyOption value="cat">Cat</JoyOption>
          <JoyOption value="fish">Fish</JoyOption>
          <JoyOption value="bird">Bird</JoyOption>
        </JoySelect>
      </Stack>
    </DisplayStand>
  );
}
