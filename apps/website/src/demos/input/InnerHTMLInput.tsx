import { useRef } from 'react';
import { Box, Input } from 'tailwind-joy/components';
import { DemoContainer } from '../DemoContainer';

export function InputInnerHTMLInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <DemoContainer>
      <Box className="grid min-w-[300px] flex-wrap items-center gap-3">
        <Input
          type="number"
          defaultValue={2.5}
          slotProps={{
            input: {
              ref: inputRef,
              min: 1,
              max: 5,
              step: 0.1,
            },
          }}
        />
        <Input
          type="date"
          slotProps={{
            input: {
              min: '2024-10-03',
              max: '2024-10-10',
            },
          }}
        />
      </Box>
    </DemoContainer>
  );
}
