---
sidebar_position: 5
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

```jsx
import { Divider } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

By default, props available for HTML `<hr>` are also available for Divider component.
Other props are as follows:

### `children`

The content of the component.

- Type: `ReactNode`

### `inset`

A class name is applied to the divider to shrink or stretch the line based on the orientation.

- Type: `'none' | 'context'`
- Default: `'none'`

### `orientation`

The component orientation.

- Type: `'horizontal' | 'vertical'`
- Default: `'horizontal'`
