import {
  ListDivider as JoyListDivider,
  Avatar as JoyAvatar,
  List as JoyList,
  ListItem as JoyListItem,
  ListItemDecorator as JoyListItemDecorator,
} from '@mui/joy';
import {
  ListDivider as TJListDivider,
  Avatar as TJAvatar,
  List as TJList,
  ListItem as TJListItem,
  ListItemDecorator as TJListItemDecorator,
} from 'tailwind-joy/components';

import type { Fixture } from '@/settings';
import { testEach } from '@/settings';

// @ts-expect-error
import avatar1 from '../../website/static/img/avatar/1.jpg';
// @ts-expect-error
import avatar2 from '../../website/static/img/avatar/2.jpg';

const containerClassName =
  'flex h-[300px] w-[300px] items-center justify-center p-2';

const fixtures: Fixture[] = [
  {
    title: 'basics',
    // @ts-expect-error
    alterVariants: [undefined, 'gutter', 'startDecorator', 'startContent'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyList size={size} variant="outlined" color={color}>
          <JoyListItem>
            <JoyListItemDecorator>
              <JoyAvatar size="sm" src={avatar1} />
            </JoyListItemDecorator>
            Lorem ipsum
          </JoyListItem>
          <JoyListDivider
            // @ts-expect-error
            inset={variant}
          />
          <JoyListItem>
            <JoyListItemDecorator>
              <JoyAvatar size="sm" src={avatar2} />
            </JoyListItemDecorator>
            dolor sit amet
          </JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJList size={size} variant="outlined" color={color}>
          <TJListItem>
            <TJListItemDecorator>
              <TJAvatar size="sm" src={avatar1} />
            </TJListItemDecorator>
            Lorem ipsum
          </TJListItem>
          <TJListDivider
            // @ts-expect-error
            inset={variant}
          />
          <TJListItem>
            <TJListItemDecorator>
              <TJAvatar size="sm" src={avatar2} />
            </TJListItemDecorator>
            dolor sit amet
          </TJListItem>
        </TJList>
      );
    },
  },
  {
    title: 'horizontal list',
    // @ts-expect-error
    alterVariants: [undefined, 'gutter'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyList
          size={size}
          variant="outlined"
          color={color}
          orientation="horizontal"
        >
          <JoyListItem>
            <JoyListItemDecorator>
              <JoyAvatar size="sm" src={avatar1} />
            </JoyListItemDecorator>
            Lorem ipsum
          </JoyListItem>
          <JoyListDivider
            // @ts-expect-error
            inset={variant}
          />
          <JoyListItem>
            <JoyListItemDecorator>
              <JoyAvatar size="sm" src={avatar2} />
            </JoyListItemDecorator>
            dolor sit amet
          </JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJList
          size={size}
          variant="outlined"
          color={color}
          orientation="horizontal"
        >
          <TJListItem>
            <TJListItemDecorator>
              <TJAvatar size="sm" src={avatar1} />
            </TJListItemDecorator>
            Lorem ipsum
          </TJListItem>
          <TJListDivider
            // @ts-expect-error
            inset={variant}
          />
          <TJListItem>
            <TJListItemDecorator>
              <TJAvatar size="sm" src={avatar2} />
            </TJListItemDecorator>
            dolor sit amet
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
