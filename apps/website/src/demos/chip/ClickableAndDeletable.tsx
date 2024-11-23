import { Chip as JoyChip, ChipDelete as JoyChipDelete } from '@mui/joy';
import { CssVarsProvider } from '@mui/joy/styles';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Box } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipClickableAndDeletable() {
  return (
    <DisplayStand>
      <CssVarsProvider modeStorageKey="theme">
        <Box className="flex items-center gap-2">
          <JoyChip
            variant="outlined"
            color="danger"
            onClick={() => alert('You clicked the chip!')}
            endDecorator={
              <JoyChipDelete
                variant="plain"
                color="danger"
                onClick={() => alert('You clicked the delete button!')}
              >
                <DeleteForeverIcon />
              </JoyChipDelete>
            }
          >
            Clear
          </JoyChip>
        </Box>
      </CssVarsProvider>
    </DisplayStand>
  );
}
