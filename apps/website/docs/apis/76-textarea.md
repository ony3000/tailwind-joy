---
sidebar_position: 76
title: <Textarea />
---

# Textarea API

<AvailableFrom version="0.6.0" />

API reference docs for the React Textarea component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Textarea](../components/textarea)

:::

## Import

```tsx
import { Textarea } from 'tailwind-joy/components';
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

Trailing adornment for this textarea.

- Type: `ReactNode`

### `error`

If `true`, the textarea will indicate an error.

- Type: `boolean`
- Default: `false`

### `maxRows`

Maximum number of rows to display.

- Type: `number`

### `minRows`

Minimum number of rows to display.

- Type: `number`
- Default: `1`

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
    textarea?: ComponentProps<'textarea'>;
    startDecorator?: ComponentProps<'div'>;
    endDecorator?: ComponentProps<'div'>;
  }
  ```
- Default: `{}`

### `startDecorator`

Leading adornment for this textarea.

- Type: `ReactNode`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'outlined'`
