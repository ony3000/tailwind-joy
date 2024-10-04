import { Box, Input } from 'tailwind-joy/components';
import { DemoContainer } from '../DemoContainer';

export function InputVariants() {
  return (
    <DemoContainer>
      <Box className="grid flex-wrap items-center gap-4 py-4">
        <Input placeholder="Type in here..." variant="solid" />
        <Input placeholder="Type in here..." variant="soft" />
        <Input placeholder="Type in here..." variant="outlined" />
        <Input placeholder="Type in here..." variant="plain" />
      </Box>
    </DemoContainer>
  );
}
