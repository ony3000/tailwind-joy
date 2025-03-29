import {
  ListItemButton as JoyListItemButton,
  List as JoyList,
  ListItem as JoyListItem,
} from '@mui/joy';
import {
  ListItemButton as TJListItemButton,
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
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyList>
          <JoyListItem>
            <JoyListItemButton
              data-testid={testId}
              variant={variant}
              color={color}
              disabled={state === 'disabled'}
            >
              Lorem ipsum
            </JoyListItemButton>
          </JoyListItem>
          <JoyListItem>dolor sit amet</JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJList>
          <TJListItem>
            <TJListItemButton
              data-testid={testId}
              variant={variant}
              color={color}
              disabled={state === 'disabled'}
            >
              Lorem ipsum
            </TJListItemButton>
          </TJListItem>
          <TJListItem>dolor sit amet</TJListItem>
        </TJList>
      );
    },
  },
  {
    title: 'selected',
    alterSizes: ['md'],
    alterStates: ['default', 'hover', 'focus-visible', 'active', 'disabled'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyList>
          <JoyListItem>
            <JoyListItemButton
              data-testid={testId}
              variant={variant}
              color={color}
              disabled={state === 'disabled'}
              selected
            >
              Lorem ipsum
            </JoyListItemButton>
          </JoyListItem>
          <JoyListItem>dolor sit amet</JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJList>
          <TJListItem>
            <TJListItemButton
              data-testid={testId}
              variant={variant}
              color={color}
              disabled={state === 'disabled'}
              selected
            >
              Lorem ipsum
            </TJListItemButton>
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
