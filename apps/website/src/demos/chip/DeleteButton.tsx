import { Chip as JoyChip, ChipDelete as JoyChipDelete } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipDeleteButton() {
  return (
    <DisplayStand>
      <CssVarsProvider modeStorageKey="theme">
        <Box className="flex items-center gap-2">
          <JoyChip
            size="sm"
            variant="outlined"
            color="danger"
            endDecorator={<JoyChipDelete onDelete={() => alert('Delete')} />}
          >
            Delete
          </JoyChip>
          <JoyChip
            color="danger"
            endDecorator={<JoyChipDelete onDelete={() => alert('Delete')} />}
          >
            Delete
          </JoyChip>
          <JoyChip
            size="lg"
            variant="solid"
            color="danger"
            endDecorator={<JoyChipDelete onDelete={() => alert('Delete')} />}
          >
            Delete
          </JoyChip>
        </Box>
      </CssVarsProvider>
    </DisplayStand>
  );
}
