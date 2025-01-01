import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectPlacement() {
  return (
    <DisplayStand>
      <JoySelect
        placeholder="Select address"
        sx={{ width: 240 }}
        slotProps={{
          listbox: {
            placement: 'bottom-start',
          },
        }}
      >
        <JoyOption value="1">
          Flat 5, 24 Bhlenheiman Avenue, South Kensington, EW13 9SD
        </JoyOption>
        <JoyOption value="2">
          Flat 6, 24 Bhlenheiman Avenue, South Kensington, EW13 9SD
        </JoyOption>
        <JoyOption value="3">
          Flat 6b, 24 Bhlenheiman Avenue, South Kensington, EW13 9SD
        </JoyOption>
      </JoySelect>
    </DisplayStand>
  );
}
