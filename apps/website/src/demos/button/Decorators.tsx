import { MdAdd, MdKeyboardArrowRight } from 'react-icons/md';
import { Box, Button } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function ButtonDecorators() {
  return (
    <DisplayStand>
      <Box className="flex flex-wrap justify-center gap-4">
        <Button
          color="primary"
          startDecorator={<MdAdd className={iconClass()} />}
        >
          Add to cart
        </Button>
        <Button
          color="success"
          endDecorator={<MdKeyboardArrowRight className={iconClass()} />}
        >
          Go to checkout
        </Button>
      </Box>
    </DisplayStand>
  );
}
