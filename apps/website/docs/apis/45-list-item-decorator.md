---
sidebar_position: 45
title: <ListItemDecorator />
---

# ListItemDecorator API

<AvailableFrom version="0.7.0" />

API reference docs for the React ListItemDecorator component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [List](../components/list)

:::

## Import

```tsx
import { ListItemDecorator } from 'tailwind-joy/components';
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
- Default: `'span'`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'span'>;
  }
  ```
- Default: `{}`
