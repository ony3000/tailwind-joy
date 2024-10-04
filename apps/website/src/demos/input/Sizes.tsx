import { Box, Input } from 'tailwind-joy/components';
import { DemoContainer } from '../DemoContainer';

export function InputSizes() {
  return (
    <DemoContainer>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <Input size="sm" placeholder="Small" />
        <Input size="md" placeholder="Medium" />
        <Input size="lg" placeholder="Large" />
      </Box>
    </DemoContainer>
  );
}
