---
sidebar_position: 37
title: <Input />
---

# Input API

<AvailableFrom version="0.4.0" />

API reference docs for the React Input component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Input](../components/input)

:::

## Import

```jsx
import { Input } from 'tailwind-joy/components';
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

### `endDecorator`

Trailing adornment for this input.

- Type: `ReactNode`

### `error`

If `true`, the input will indicate an error.

- Type: `boolean`
- Default: `false`

### `fullWidth`

If `true`, the input will take up the full width of its container.

- Type: `boolean`
- Default: `false`

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
    input?: ComponentProps<'input'>;
    startDecorator?: ComponentProps<'div'>;
    endDecorator?: ComponentProps<'div'>;
  }
  ```
- Default: `{}`

### `startDecorator`

Leading adornment for this input.

- Type: `ReactNode`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'outlined'`
