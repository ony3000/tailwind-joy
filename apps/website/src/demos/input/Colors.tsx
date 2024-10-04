import { Box, Input } from 'tailwind-joy/components';
import { DemoContainer } from '../DemoContainer';

export function InputColors() {
  return (
    <DemoContainer>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <Input placeholder="Type in here..." color="primary" />
        <Input placeholder="Type in here..." color="neutral" />
        <Input placeholder="Type in here..." color="danger" />
        <Input placeholder="Type in here..." color="success" />
        <Input placeholder="Type in here..." color="warning" />
      </Box>
    </DemoContainer>
  );
}
