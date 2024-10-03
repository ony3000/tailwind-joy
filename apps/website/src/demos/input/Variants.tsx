import { Input as JoyInput } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DemoContainer } from '../DemoContainer';

export function InputVariants() {
  return (
    <DemoContainer>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <JoyInput placeholder="Type in here..." variant="solid" />
        <JoyInput placeholder="Type in here..." variant="soft" />
        <JoyInput placeholder="Type in here..." variant="outlined" />
        <JoyInput placeholder="Type in here..." variant="plain" />
      </Box>
    </DemoContainer>
  );
}
