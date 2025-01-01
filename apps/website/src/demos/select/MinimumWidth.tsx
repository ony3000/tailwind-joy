import { Option as JoyOption, Select as JoySelect } from '@mui/joy';
import { Box, Typography } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function SelectMinimumWidth() {
  return (
    <DisplayStand>
      <Box className="w-[100px]">
        <JoySelect
          defaultValue="German Shepherd"
          slotProps={{
            listbox: {
              placement: 'bottom-start',
              sx: { minWidth: 160 },
            },
          }}
        >
          <JoyOption value="German Shepherd">German Shepherd</JoyOption>
          <JoyOption value="Anatolian Shepherd Dog">
            Anatolian Shepherd Dog
          </JoyOption>
          <JoyOption value="West Highland White Terrier">
            West Highland White Terrier
          </JoyOption>
          <JoyOption value="Maltese dog">Maltese dog</JoyOption>
        </JoySelect>
        <Typography level="body-xs" className="mt-2 text-center">
          Width is fixed at 100px
        </Typography>
      </Box>
    </DisplayStand>
  );
}
