---
sidebar_position: 40
title: <List />
---

# List API

<AvailableFrom version="0.7.0" />

API reference docs for the React List component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [List](../components/list)

:::

## Import

```tsx
import { List } from 'tailwind-joy/components';
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
- Default: `'ul'`

### `marker`

The marker (such as a disc, character, or custom counter style) of the list items.
When this prop is specified, the List Item changes the CSS display to `list-item` in order to apply the marker.

- Type: `string`

### `orientation`

The component orientation.

- Type: `'horizontal' | 'vertical'`
- Default: `'vertical'`

### `size`

The size of the component.

- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'ul'>;
  }
  ```
- Default: `{}`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'plain'`

### `wrap`

Only for horizontal list.
If `true`, the list sets the flex-wrap to "wrap" and adjust margin to have gap-like behavior (will move to `gap` in the future).

- Type: `boolean`
- Default: `false`
