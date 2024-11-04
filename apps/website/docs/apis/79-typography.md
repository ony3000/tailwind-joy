---
sidebar_position: 79
title: <Typography />
---

# Typography API

<AvailableFrom version="0.5.0" />

API reference docs for the React Typography component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Typography](../components/typography)

:::

## Import

```tsx
import { Typography } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

### `className`

Class name applied to the root element.

- Type: `string`

### `color`

The color of the component.

- Type: `'primary' | 'neutral' | 'danger' | 'success' | 'warning'`
- Default: `variant ? 'neutral' : undefined`

### `component`

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'span'` if the component is nested, otherwise it respects `levelMapping[level]`.

### `endDecorator`

Element placed after the children.

- Type: `ReactNode`

### `gutterBottom`

If `true`, the text will have a bottom margin.

- Type: `boolean`
- Default: `false`

### `level`

Applies the theme typography styles.

- Type: `'h1' | 'h2' | 'h3' | 'h4' | 'title-lg' | 'title-md' | 'title-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'body-xs' | 'inherit'`
- Default: `'body-md'`

### `levelMapping`

The component maps the variant prop to a range of different HTML element types.
If you wish to change that mapping, you can provide your own.
Alternatively, you can use the `component` prop.

- Type: `Partial<Record<typeof level, keyof JSX.IntrinsicElements>>`
- Default:
  ```tsx
  {
    h1: 'h1',
    h2: 'h2',
    h3: 'h3',
    h4: 'h4',
    'title-lg': 'p',
    'title-md': 'p',
    'title-sm': 'p',
    'body-lg': 'p',
    'body-md': 'p',
    'body-sm': 'p',
    'body-xs': 'span',
    inherit: 'p',
  }
  ```

### `noWrap`

If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.

- Type: `boolean`
- Default: `false`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'a'>;
    startDecorator?: ComponentProps<'span'>;
    endDecorator?: ComponentProps<'span'>;
  }
  ```
- Default: `{}`

### `startDecorator`

Element placed before the children.

- Type: `ReactNode`

### `textColor`

Arbitrary text color.

- Type: `string`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
