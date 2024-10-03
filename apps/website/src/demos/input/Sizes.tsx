import { Input as JoyInput } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DemoContainer } from '../DemoContainer';

export function InputSizes() {
  return (
    <DemoContainer>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <JoyInput size="sm" placeholder="Small" />
        <JoyInput size="md" placeholder="Medium" />
        <JoyInput size="lg" placeholder="Large" />
      </Box>
    </DemoContainer>
  );
}
