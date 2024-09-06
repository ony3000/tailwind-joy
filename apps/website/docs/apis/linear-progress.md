---
sidebar_position: 8
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

```jsx
import { LinearProgress } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

By default, props available for HTML `<div>` are also available for LinearProgress component.
Other props are as follows:

### `color`

The color of the component.

- Type: `'primary' | 'neutral' | 'danger' | 'success' | 'warning'`
- Default: `'primary'`

### `determinate`

The boolean to select a variant.
Use indeterminate when there is no progress value.

- Type: `boolean`
- Default: `false`

### `size`

The size of the component.

- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`

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
