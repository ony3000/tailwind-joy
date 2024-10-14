import { Box, Divider } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function DividerRenderedWithContent() {
  const content = (
    <Box className="text-joy-neutral-600 dark:text-joy-neutral-400 text-[0.875rem]">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ac erat et
      nibh fermentum facilisis at quis metus. Ut tempor tellus odio, vitae
      imperdiet arcu finibus posuere. Quisque sollicitudin faucibus rutrum.
    </Box>
  );

  return (
    <DisplayStand>
      {/* TODO: Replace Box with Stack. */}
      <Box className="space-y-2">
        {content}
        <Divider>Visual indicator</Divider>
        {content}
        <Divider>
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
    </DisplayStand>
  );
}
