import { ListItem as JoyListItem, List as JoyList } from '@mui/joy';
import {
  ListItem as TJListItem,
  List as TJList,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[300px] w-[300px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterSizes: ['md'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyList>
          <JoyListItem variant={variant} color={color}>
            Lorem ipsum
          </JoyListItem>
          <JoyListItem>dolor sit amet</JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJList>
          <TJListItem variant={variant} color={color}>
            Lorem ipsum
          </TJListItem>
          <TJListItem>dolor sit amet</TJListItem>
        </TJList>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
