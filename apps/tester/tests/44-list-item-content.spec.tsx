import {
  ListItemContent as JoyListItemContent,
  Avatar as JoyAvatar,
  Box as JoyBox,
  List as JoyList,
  ListItem as JoyListItem,
  ListItemDecorator as JoyListItemDecorator,
  Typography as JoyTypography,
} from '@mui/joy';
import {
  ListItemContent as TJListItemContent,
  Avatar as TJAvatar,
  Box as TJBox,
  List as TJList,
  ListItem as TJListItem,
  ListItemDecorator as TJListItemDecorator,
  Typography as TJTypography,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

// @ts-expect-error
import avatar1 from '../../website/static/img/avatar/1.jpg';

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
        <JoyBox sx={{ width: 240 }}>
          <JoyList>
            <JoyListItem>
              <JoyListItemDecorator>
                <JoyAvatar src={avatar1} />
              </JoyListItemDecorator>
              <JoyListItemContent>
                <JoyTypography level="title-sm">
                  Brunch this weekend?
                </JoyTypography>
                <JoyTypography level="body-sm" noWrap>
                  I&apos;ll be in your neighborhood doing errands this Tuesday.
                </JoyTypography>
              </JoyListItemContent>
            </JoyListItem>
          </JoyList>
        </JoyBox>
      );
    },
    renderTjElement({ testId, size, variant, color, state }) {
      return (
        <TJBox className="w-60">
          <TJList>
            <TJListItem>
              <TJListItemDecorator>
                <TJAvatar src={avatar1} />
              </TJListItemDecorator>
              <TJListItemContent>
                <TJTypography level="title-sm">
                  Brunch this weekend?
                </TJTypography>
                <TJTypography level="body-sm" noWrap>
                  I&apos;ll be in your neighborhood doing errands this Tuesday.
                </TJTypography>
              </TJListItemContent>
            </TJListItem>
          </TJList>
        </TJBox>
      );
    },
  },
];

testEach(fixtures, {
  containerClassName,
  viewport: { width: 500, height: 500 },
});
