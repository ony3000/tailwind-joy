---
sidebar_position: 43
title: <ListItemButton />
---

# ListItemButton API

<AvailableFrom version="0.7.0" />

API reference docs for the React ListItemButton component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [List](../components/list)

:::

## Import

```tsx
import { ListItemButton } from 'tailwind-joy/components';
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

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'div'`

### `disabled`

If `true`, the component is disabled.

- Type: `boolean`
- Default: `false`

### `orientation`

The component orientation.

- Type: `'horizontal' | 'vertical'`
- Default: `'horizontal'`

### `selected`

If `true`, the component is selected.

- Type: `boolean`
- Default: `false`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'div'>;
  }
  ```
- Default: `{}`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'plain'`
