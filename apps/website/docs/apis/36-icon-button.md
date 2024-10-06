---
sidebar_position: 36
title: <IconButton />
---

# IconButton API

API reference docs for the React IconButton component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Button](../components/button)

:::

## Import

```tsx
import { IconButton } from 'tailwind-joy/components';
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
- Default: `'neutral'`

### `component`

<AvailableFrom version="0.4.0" />

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'button'`

### `disabled`

If `true`, the component is disabled.

- Type: `boolean`
- Default: `false`

### `loading`

If `true`, the loading indicator is shown and the button becomes disabled.

- Type: `boolean`
- Default: `false`

### `loadingIndicator`

Element that appears while the button is loading.

- Type: `ReactNode`
- Default: `<CircularProgress />`

### `size`

The size of the component.

- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`

### `slotProps`

<AvailableFrom version="0.4.0" />

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'button'>;
    loadingIndicator?: ComponentProps<'span'>;
  }
  ```
- Default: `{}`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'plain'`
