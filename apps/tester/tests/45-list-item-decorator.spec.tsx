import Info from '@mui/icons-material/Info';
import { MdInfo } from 'react-icons/md';
import {
  ListItemDecorator as JoyListItemDecorator,
  List as JoyList,
  ListItem as JoyListItem,
  ListItemButton as JoyListItemButton,
} from '@mui/joy';
import {
  ListItemDecorator as TJListItemDecorator,
  List as TJList,
  ListItem as TJListItem,
  ListItemButton as TJListItemButton,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

const containerClassName =
  'flex h-[300px] w-[300px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    alterSizes: ['md'],
    alterVariants: ['plain'],
    alterColors: ['neutral'],
    renderJoyElement({ testId, size, variant, color, state }) {
      return (
        <JoyList>
          <JoyListItem>
            <JoyListItemDecorator>❤</JoyListItemDecorator> Favorite
          </JoyListItem>
          <JoyListItem>
            <JoyListItemButton>
              <JoyListItemDecorator>
                <Info />
              </JoyListItemDecorator>
              Lorem ipsum
            </JoyListItemButton>
          </JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJList>
          <TJListItem>
            <TJListItemDecorator>❤</TJListItemDecorator> Favorite
          </TJListItem>
          <TJListItem>
            <TJListItemButton>
              <TJListItemDecorator>
                <MdInfo />
              </TJListItemDecorator>
              Lorem ipsum
            </TJListItemButton>
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
