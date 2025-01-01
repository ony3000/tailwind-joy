import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectBasics() {
  return (
    <DisplayStand>
      <JoySelect
        defaultValue="dog"
        onChange={(_, newValue) => {
          alert(`You chose "${newValue}"`);
        }}
      >
        <JoyOption value="dog">Dog</JoyOption>
        <JoyOption value="cat">Cat</JoyOption>
        <JoyOption value="fish">Fish</JoyOption>
        <JoyOption value="bird">Bird</JoyOption>
      </JoySelect>
    </DisplayStand>
  );
}
