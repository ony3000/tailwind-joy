---
sidebar_position: 24
title: <ChipDelete />
---

# ChipDelete API

<AvailableFrom version="0.5.0" />

API reference docs for the React ChipDelete component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Chip](../components/chip)

:::

## Import

```tsx
import { ChipDelete } from 'tailwind-joy/components';
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
- Default: `'button'`

### `disabled`

If `true`, the component is disabled.
If `undefined`, the value inherits from the parent chip.

- Type: `boolean`

### `onDelete`

Callback fired when the component is not disabled and either:

- `Backspace`, `Enter` or `Delete` is pressed.
- The component is clicked.

* Type: `(event: KeyboardEvent | MouseEvent) => void`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'button'>;
  }
  ```
- Default: `{}`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'plain'`
