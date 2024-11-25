import { MdDeleteForever } from 'react-icons/md';
import { Box, Chip, ChipDelete } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ChipClickableAndDeletable() {
  return (
    <DisplayStand>
      <Box className="flex items-center gap-2">
        <Chip
          variant="outlined"
          color="danger"
          onClick={() => alert('You clicked the chip!')}
          endDecorator={
            <ChipDelete
              variant="plain"
              color="danger"
              onClick={() => alert('You clicked the delete button!')}
            >
              <MdDeleteForever className={iconClass()} />
            </ChipDelete>
          }
        >
          Clear
        </Chip>
      </Box>
    </DisplayStand>
  );
}
