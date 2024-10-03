import { Input as JoyInput } from '@mui/joy';
import { Box } from 'tailwind-joy/components';
import { DemoContainer } from '../DemoContainer';

export function InputColors() {
  return (
    <DemoContainer>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <JoyInput placeholder="Type in here..." color="primary" />
        <JoyInput placeholder="Type in here..." color="neutral" />
        <JoyInput placeholder="Type in here..." color="danger" />
        <JoyInput placeholder="Type in here..." color="success" />
        <JoyInput placeholder="Type in here..." color="warning" />
      </Box>
    </DemoContainer>
  );
}
