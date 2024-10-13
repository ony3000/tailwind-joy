---
sidebar_position: 70
title: <Switch />
---

# Switch API

<AvailableFrom version="0.3.0" />

API reference docs for the React Switch component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Switch](../components/switch)

:::

## Import

```tsx
import { Switch } from 'tailwind-joy/components';
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
- Default: `'neutral'` when the component is unchecked, `'primary'` when the component is checked.

### `component`

<AvailableFrom version="0.4.0" />

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'div'`

### `endDecorator`

The element that appears at the end of the switch.

- Type: `ReactNode`

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
    action?: ComponentProps<'div'>;
    input?: ComponentProps<'input'>;
    track?: ComponentProps<'span'>;
    thumb?: ComponentProps<'span'>;
    startDecorator?: ComponentProps<'span'>;
    endDecorator?: ComponentProps<'span'>;
  }
  ```
- Default: `{}`

### `startDecorator`

The element that appears at the end of the switch.

- Type: `ReactNode`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'solid'`
