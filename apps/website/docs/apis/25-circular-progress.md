---
sidebar_position: 25
title: <CircularProgress />
---

# CircularProgress API

API reference docs for the React CircularProgress component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Circular Progress](../components/circular-progress)

:::

## Import

```tsx
import { CircularProgress } from 'tailwind-joy/components';
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
- Default: `'span'`

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
    root?: ComponentProps<'span'>;
    svg?: ComponentProps<'svg'>;
    track?: ComponentProps<'circle'>;
    progress?: ComponentProps<'circle'>;
  }
  ```
- Default: `{}`

### `thickness`

The thickness of the circle.

- Type: `number`
- Default: When the `size` is `sm`, `md`, or `lg`, it will have `3`, `6`, or `8` respectively.

### `value`

The value of the progress indicator for the determinate variant.
Value between 0 and 100.

- Type: `number`
- Default: `determinate ? 0 : 25`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'soft'`
