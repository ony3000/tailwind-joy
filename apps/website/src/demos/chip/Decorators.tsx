import { Chip as JoyChip } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import CloudIcon from '@mui/icons-material/Cloud';
import SunIcon from '@mui/icons-material/LightMode';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipDecorators() {
  return (
    <DisplayStand>
      <CssVarsProvider modeStorageKey="theme">
        <Box className="flex items-center gap-2">
          <JoyChip startDecorator={<SunIcon />}>Today is sunny</JoyChip>
          <JoyChip startDecorator={<CloudIcon />}>Tomorrow is cloudy</JoyChip>
        </Box>
      </CssVarsProvider>
    </DisplayStand>
  );
}
