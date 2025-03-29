---
sidebar_position: 41
title: <ListDivider />
---

# ListDivider API

<AvailableFrom version="0.7.0" />

API reference docs for the React ListDivider component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [List](../components/list)

:::

## Import

```tsx
import { ListDivider } from 'tailwind-joy/components';
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
- Default: `'li'`

### `inset`

The empty space on the side(s) of the divider in a vertical list.
For horizontal list (the nearest parent List has `row` prop set to `true`), only `inset="gutter"` affects the list divider.

- Type: `'context' | 'gutter' | 'startDecorator' | 'startContent'`
- Default: `'context'`

### `orientation`

The component orientation.

- Type: `'horizontal' | 'vertical'`
- Default: `'horizontal'`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'li'>;
  }
  ```
- Default: `{}`
