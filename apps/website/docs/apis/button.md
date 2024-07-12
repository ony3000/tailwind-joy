---
sidebar_position: 1
title: <Button />
---

# Button API

API reference docs for the React Button component. Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Button](../components/button)

:::

## Import

```jsx
import { Button } from 'tailwind-joy/components';
```

## Props

The `ref` is forwarded to the root element.

### `color`

The color of the component.

- Type: `'primary' | 'neutral' | 'danger' | 'success' | 'warning'`
- Default: `'primary'`

### `endDecorator`

Element placed after the children.

- Type: `ReactNode`

### `fullWidth`

If `true`, the button will take up the full width of its container.

- Type: `boolean`
- Default: `false`

### `loading`

If `true`, the loading indicator is shown and the button becomes disabled.

- Type: `boolean`
- Default: `false`

### `loadingIndicator`

Element that appears while the button is loading.

- Type: `ReactNode`
- Default: `<CircularProgress />`

### `loadingPosition`

The loading indicator can be positioned on the start, end, or the center of the button.

- Type: `'start' | 'center' | 'end'`
- Default: `'center'`

### `size`

The size of the component.

- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`

### `startDecorator`

Element placed before the children.

- Type: `ReactNode`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'solid'`
