import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectIndicator() {
  return (
    <DisplayStand>
      <JoySelect
        placeholder="Select a pet"
        indicator={<KeyboardArrowDownIcon />}
        sx={{
          width: 240,
          [`& .MuiSelect-indicator`]: {
            transition: '0.2s',
            [`&.Mui-expanded`]: {
              transform: 'rotate(-180deg)',
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
