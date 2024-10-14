import { useState } from 'react';
import { Box, Button, ButtonGroup } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

declare module 'react' {
  interface CSSProperties {
    '--ButtonGroup-separatorColor'?: string;
  }
}

export function ButtonGroupSeparatorColor() {
  const [hue, setHue] = useState('0');

  return (
    <DisplayStand>
      <Box className="flex flex-col items-center justify-center gap-4">
        <Box className="flex items-center gap-2">
          <span className="w-10 text-right">Hue:</span>
          <input
            type="range"
            name="hue-range"
            min="0"
            max="360"
            defaultValue="0"
            onChange={(e) => setHue(e.currentTarget.value)}
          />
          <span className="w-10 text-left">{hue}</span>
        </Box>
        <ButtonGroup
          variant="soft"
          style={{ '--ButtonGroup-separatorColor': `hsl(${hue} 100% 50%)` }}
        >
          <Button>One</Button>
          <Button>Two</Button>
          <Button>Three</Button>
        </ButtonGroup>
      </Box>
    </DisplayStand>
  );
}
