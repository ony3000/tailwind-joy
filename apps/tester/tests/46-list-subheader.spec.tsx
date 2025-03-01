import {
  ListSubheader as JoyListSubheader,
  List as JoyList,
  ListItem as JoyListItem,
} from '@mui/joy';
import {
  ListSubheader as TJListSubheader,
  List as TJList,
  ListItem as TJListItem,
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
          <JoyListItem nested>
            <JoyListSubheader variant={variant} color={color}>
              Lorem ipsum
            </JoyListSubheader>
            <JoyList>
              <JoyListItem>dolor</JoyListItem>
              <JoyListItem>sit</JoyListItem>
              <JoyListItem>amet</JoyListItem>
            </JoyList>
          </JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJList>
          <TJListItem nested>
            <TJListSubheader variant={variant} color={color}>
              Lorem ipsum
            </TJListSubheader>
            <TJList>
              <TJListItem>dolor</TJListItem>
              <TJListItem>sit</TJListItem>
              <TJListItem>amet</TJListItem>
            </TJList>
          </TJListItem>
        </TJList>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
