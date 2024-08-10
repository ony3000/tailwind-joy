---
sidebar_position: 6
title: <IconButton />
---

# IconButton API

API reference docs for the React IconButton component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Button](../components/button)

:::

## Import

```jsx
import { IconButton } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

By default, props available for HTML `<button>` are also available for IconButton component.
Other props are as follows:

### `color`

The color of the component.

- Type: `'primary' | 'neutral' | 'danger' | 'success' | 'warning'`
- Default: `'neutral'`

### `loading`

If `true`, the loading indicator is shown and the button becomes disabled.

- Type: `boolean`
- Default: `false`

### `loadingIndicator`

Element that appears while the button is loading.

- Type: `ReactNode`
- Default: `<CircularProgress />`

### `size`

The size of the component.

- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'plain'`
