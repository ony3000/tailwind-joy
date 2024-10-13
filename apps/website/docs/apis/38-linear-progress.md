---
sidebar_position: 38
title: <LinearProgress />
---

# LinearProgress API

<AvailableFrom version="0.2.0" />

API reference docs for the React LinearProgress component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Linear Progress](../components/linear-progress)

:::

## Import

```tsx
import { LinearProgress } from 'tailwind-joy/components';
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
- Default: `'primary'`

### `component`

<AvailableFrom version="0.4.0" />

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'div'`

### `determinate`

The boolean to select a variant.
Use indeterminate when there is no progress value.

- Type: `boolean`
- Default: `false`

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
    root?: ComponentProps<'div'>;
  }
  ```
- Default: `{}`

### `thickness`

The thickness of the bar.

- Type: `number`
- Default: When the `size` is `sm`, `md`, or `lg`, it will have `4`, `6`, or `8` respectively.

### `value`

The value of the progress indicator for the determinate variant.
Value between 0 and 100.

- Type: `number`
- Default: `determinate ? 0 : 25`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'soft'`
