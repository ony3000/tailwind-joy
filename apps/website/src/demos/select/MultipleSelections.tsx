import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectMultipleSelections() {
  return (
    <DisplayStand>
      <JoySelect
        multiple
        defaultValue={['dog']}
        onChange={(_, newValue) => {
          console.log(`You chose "${newValue}"`);
        }}
        sx={{ minWidth: '13rem' }}
        slotProps={{
          listbox: {
            sx: {
              width: '100%',
            },
          },
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
