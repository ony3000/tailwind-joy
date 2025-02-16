---
sidebar_position: 10
title: <Avatar />
---

# Avatar API

<AvailableFrom version="0.7.0" />

API reference docs for the React Avatar component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Avatar](../components/avatar)

:::

## Import

```tsx
import { Avatar } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

### `alt`

Used in combination with `src` or `srcSet` to provide an alt attribute for the rendered `img` element.

- Type: `string`

### `className`

Class name applied to the root element.

- Type: `string`

### `color`

The color of the component.

- Type: `'primary' | 'neutral' | 'danger' | 'success' | 'warning'`
- Default: `'neutral'`

### `component`

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'div'`

### `size`

The size of the component.

- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'div'>;
    img?: ComponentProps<'img'>;
    fallback?: ComponentProps<'svg'>;
  }
  ```
- Default: `{}`

### `src`

The `src` attribute for the `img` element.

- Type: `string`

### `srcSet`

The `srcSet` attribute for the `img` element.
Use this attribute for responsive image display.

- Type: `string`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'soft'`
