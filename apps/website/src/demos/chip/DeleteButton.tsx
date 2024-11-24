import { Box, Chip, ChipDelete } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipDeleteButton() {
  return (
    <DisplayStand>
      <Box className="flex items-center gap-2">
        <Chip
          size="sm"
          variant="outlined"
          color="danger"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
        >
          Delete
        </Chip>
        <Chip
          color="danger"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
        >
          Delete
        </Chip>
        <Chip
          size="lg"
          variant="solid"
          color="danger"
          endDecorator={<ChipDelete onDelete={() => alert('Delete')} />}
        >
          Delete
        </Chip>
      </Box>
    </DisplayStand>
  );
}
