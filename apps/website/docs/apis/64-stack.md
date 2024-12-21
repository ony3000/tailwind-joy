---
sidebar_position: 64
title: <Stack />
---

# Stack API

<AvailableFrom version="0.6.0" />

API reference docs for the React Stack component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Stack](../components/stack)

:::

## Import

```tsx
import { Stack } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

### `className`

Class name applied to the root element.

- Type: `string`

### `component`

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'div'`

### `direction`

Defines the `flex-direction` style property.

- Type: `'row' | 'row-reverse' | 'column' | 'column-reverse'`
- Default: `'column'`

### `divider`

Add an element between each child.

- Type: `ReactNode`

### `spacing`

Defines the space between immediate children.

- Type: `string`
- Default: `'0'`

### `useFlexGap`

If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.

- Type: `boolean`
- Default: `false`
