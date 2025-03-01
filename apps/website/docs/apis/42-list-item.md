---
sidebar_position: 42
title: <ListItem />
---

# ListItem API

<AvailableFrom version="0.7.0" />

API reference docs for the React ListItem component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [List](../components/list)

:::

## Import

```tsx
import { ListItem } from 'tailwind-joy/components';
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
- Default: `'li'`

### `endAction`

The element to display at the end of ListItem.

- Type: `ReactNode`

### `nested`

If `true`, the component can contain NestedList.

- Type: `boolean`
- Default: `false`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'li'>;
    startAction?: ComponentProps<'div'>;
    endAction?: ComponentProps<'div'>;
  }
  ```
- Default: `{}`

### `startAction`

The element to display at the start of ListItem.

- Type: `ReactNode`

### `sticky`

If `true`, the component has sticky position (with top = 0).

- Type: `boolean`
- Default: `false`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'plain'`
