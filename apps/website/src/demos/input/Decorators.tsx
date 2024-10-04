import { Input as JoyInput } from '@mui/joy';
import { MdLocationOn } from 'react-icons/md';
import { Box, Button, Divider } from 'tailwind-joy/components';
import { iconClass } from 'tailwind-joy/utils';
import { DemoContainer } from '../DemoContainer';

export function InputDecorators() {
  return (
    <DemoContainer>
      <Box className="grid flex-wrap items-center gap-3">
        <JoyInput
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
        <JoyInput
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
    </DemoContainer>
  );
}
