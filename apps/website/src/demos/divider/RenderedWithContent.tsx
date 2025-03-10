import { Box, Chip, Divider, Stack } from 'tailwind-joy/components';
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
      <Stack spacing="8px">
        {content}
        <Divider>Visual indicator</Divider>
        {content}
        <Divider>
          <Chip size="sm">Visual indicator</Chip>
        </Divider>
        {content}
      </Stack>
    </DisplayStand>
  );
}
