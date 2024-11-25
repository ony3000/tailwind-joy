import { useState } from 'react';
import { Box, Chip, Divider } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

declare module 'react' {
  interface CSSProperties {
    '--Divider-childPosition'?: string;
  }
}

export function DividerChildPosition() {
  const [position, setPosition] = useState('50');
  const content = (
    <Box className="text-joy-neutral-600 dark:text-joy-neutral-400 text-[0.875rem]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac erat et
      nibh fermentum facilisis at quis metus. Ut tempor tellus odio, vitae
      imperdiet arcu finibus posuere. Quisque sollicitudin faucibus rutrum.
    </Box>
  );

  return (
    <DisplayStand>
      <Box className="space-y-2">
        {/* TODO: Replace Box with Stack. */}
        <Box className="space-y-2">
          {content}
          <Divider style={{ '--Divider-childPosition': `${position}%` }}>
            <Chip size="sm">Visual indicator</Chip>
          </Divider>
          {content}
        </Box>
        <Box className="flex items-center justify-center gap-2">
          <span className="w-20 text-right">Position:</span>
          <input
            type="range"
            name="position-range"
            min="0"
            max="100"
            defaultValue="50"
            onChange={(e) => setPosition(e.currentTarget.value)}
          />
          <span className="w-20 text-left">{position}%</span>
        </Box>
      </Box>
    </DisplayStand>
  );
}
