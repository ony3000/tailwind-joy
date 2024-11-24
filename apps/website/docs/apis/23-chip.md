---
sidebar_position: 23
title: <Chip />
---

# Chip API

<AvailableFrom version="0.5.0" />

API reference docs for the React Chip component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Chip](../components/chip)

:::

## Import

```tsx
import { Chip } from 'tailwind-joy/components';
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

### `endDecorator`

Element placed after the children.

- Type: `ReactNode`

### `onClick`

Element action click handler.

- Type: `MouseEventHandler`

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
    label?: ComponentProps<'span'>;
    action?: ComponentProps<'button'>;
    startDecorator?: ComponentProps<'span'>;
    endDecorator?: ComponentProps<'span'>;
  }
  ```
- Default: `{}`

### `startDecorator`

Element placed before the children.

- Type: `ReactNode`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'soft'`
