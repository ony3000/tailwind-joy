import { Box, Divider } from 'tailwind-joy/components';
import { DisplayStand } from '@site/src/components/docs/DisplayStand';

export function DividerVerticalWithText() {
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
      <Box className="flex flex-row gap-4">
        {content}
        <Divider orientation="vertical">Visual indicator</Divider>
        {content}
      </Box>
    </DisplayStand>
  );
}
