---
sidebar_position: 13
title: <Box />
---

# Box API

<AvailableFrom version="0.4.0" />

API reference docs for the React Box component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Box](../components/box)

:::

## Import

```jsx
import { Box } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

By default, props available for HTML `<div>` are also available for Box component.
Other props are as follows:

### `component`

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'div'`
