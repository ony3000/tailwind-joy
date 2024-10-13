---
sidebar_position: 30
title: <Divider />
---

# Divider API

<AvailableFrom version="0.3.0" />

API reference docs for the React Divider component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Divider](../components/divider)

:::

## Import

```tsx
import { Divider } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

### `children`

The content of the component.

- Type: `ReactNode`

### `className`

Class name applied to the root element.

- Type: `string`

### `component`

<AvailableFrom version="0.4.0" />

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'hr'`

### `inset`

A class name is applied to the divider to shrink or stretch the line based on the orientation.

- Type: `'none' | 'context'`
- Default: `'none'`

### `orientation`

The component orientation.

- Type: `'horizontal' | 'vertical'`
- Default: `'horizontal'`

### `slotProps`

<AvailableFrom version="0.4.0" />

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'hr'>;
  }
  ```
- Default: `{}`
