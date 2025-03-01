import { List as JoyList, ListItem as JoyListItem } from '@mui/joy';
import {
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
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyList size={size} variant={variant} color={color}>
          <JoyListItem>Lorem ipsum</JoyListItem>
          <JoyListItem>dolor sit amet</JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJList size={size} variant={variant} color={color}>
          <TJListItem>Lorem ipsum</TJListItem>
          <TJListItem>dolor sit amet</TJListItem>
        </TJList>
      );
    },
  },
  {
    title: 'orientation: horizontal',
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyList
          size={size}
          variant={variant}
          color={color}
          orientation="horizontal"
        >
          <JoyListItem>Lorem</JoyListItem>
          <JoyListItem>ipsum</JoyListItem>
          <JoyListItem>dolor</JoyListItem>
          <JoyListItem>sit</JoyListItem>
          <JoyListItem>amet</JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJList
          size={size}
          variant={variant}
          color={color}
          orientation="horizontal"
        >
          <TJListItem>Lorem</TJListItem>
          <TJListItem>ipsum</TJListItem>
          <TJListItem>dolor</TJListItem>
          <TJListItem>sit</TJListItem>
          <TJListItem>amet</TJListItem>
        </TJList>
      );
    },
  },
  {
    title: 'wrap',
    alterSizes: ['md'],
    alterVariants: ['plain'],
    alterColors: ['neutral'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyList
          size={size}
          variant={variant}
          color={color}
          orientation="horizontal"
          wrap
        >
          <JoyListItem>Lorem</JoyListItem>
          <JoyListItem>ipsum</JoyListItem>
          <JoyListItem>dolor</JoyListItem>
          <JoyListItem>sit</JoyListItem>
          <JoyListItem>amet</JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJList
          size={size}
          variant={variant}
          color={color}
          orientation="horizontal"
          wrap
        >
          <TJListItem>Lorem</TJListItem>
          <TJListItem>ipsum</TJListItem>
          <TJListItem>dolor</TJListItem>
          <TJListItem>sit</TJListItem>
          <TJListItem>amet</TJListItem>
        </TJList>
      );
    },
  },
  {
    title: 'marker',
    // @ts-expect-error
    alterVariants: ['disc', 'circle', 'decimal', 'upper-roman'],
    renderJoyElement({ testId, size, variant, color }) {
      return (
        <JoyList size={size} color={color} marker={variant}>
          <JoyListItem>Lorem ipsum</JoyListItem>
          <JoyListItem>dolor sit amet</JoyListItem>
        </JoyList>
      );
    },
    renderTjElement({ testId, size, variant, color }) {
      return (
        <TJList size={size} color={color} marker={variant}>
          <TJListItem>Lorem ipsum</TJListItem>
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
