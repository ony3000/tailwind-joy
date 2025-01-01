import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import { Box, Chip } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectSelectedValueAppearance() {
  return (
    <DisplayStand>
      <JoySelect
        multiple
        defaultValue={['dog', 'cat']}
        renderValue={(selected) => (
          <Box className="flex gap-1">
            {selected.map((selectedOption) => (
              <Chip variant="soft" color="primary">
                {selectedOption.label}
              </Chip>
            ))}
          </Box>
        )}
        sx={{ minWidth: '15rem' }}
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
