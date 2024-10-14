import { useState } from 'react';
import { Box, Divider } from 'tailwind-joy/components';
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
            {/* TODO: Replace div with Chip. */}
            <div
              className="
                bg-joy-neutral-100 dark:bg-joy-neutral-800 text-joy-neutral-700 dark:text-joy-neutral-200
                relative inline-flex min-h-[1.25rem] max-w-max items-center justify-center whitespace-nowrap
                rounded-3xl px-1.5 align-middle text-[0.75rem] font-medium leading-normal no-underline
              "
            >
              <span className="order-1 inline-block grow overflow-hidden text-ellipsis">
                Visual indicator
              </span>
            </div>
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
