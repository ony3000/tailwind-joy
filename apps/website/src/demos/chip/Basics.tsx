import { Chip as JoyChip } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipBasics() {
  return (
    <DisplayStand>
      <CssVarsProvider modeStorageKey="theme">
        <div>
          <JoyChip>This is a chip</JoyChip>
        </div>
      </CssVarsProvider>
    </DisplayStand>
  );
}
