---
sidebar_position: 10
title: <Sheet />
---

# Sheet API

<AvailableFrom version="0.3.0" />

API reference docs for the React Sheet component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Sheet](../components/sheet)

:::

## Import

```jsx
import { Sheet } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

By default, props available for HTML `<div>` are also available for RadioGroup component.
Other props are as follows:

### `color`

The color of the component.

- Type: `'primary' | 'neutral' | 'danger' | 'success' | 'warning'`
- Default: `'neutral'`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'plain'`
