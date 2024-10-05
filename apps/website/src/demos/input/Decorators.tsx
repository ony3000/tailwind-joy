import { MdLocationOn } from 'react-icons/md';
import { Box, Button, Divider, Input } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function InputDecorators() {
  return (
    <DisplayStand>
      <Box className="grid flex-wrap items-center gap-3">
        <Input
          placeholder="Amount"
          startDecorator="$"
          endDecorator={
            <>
              <Divider orientation="vertical" />
              <span className="text-joy-neutral-700 dark:text-joy-neutral-300 ml-3 text-[1rem]">
                US dollar
              </span>
            </>
          }
          className="w-[300px]"
        />
        <Input
          placeholder="Your location"
          startDecorator={
            <Button
              variant="soft"
              color="neutral"
              startDecorator={<MdLocationOn className={iconClass()} />}
            >
              Locate
            </Button>
          }
          className="w-[300px]"
        />
      </Box>
    </DisplayStand>
  );
}
