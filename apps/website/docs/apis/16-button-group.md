---
sidebar_position: 16
title: <ButtonGroup />
---

# ButtonGroup API

<AvailableFrom version="0.2.0" />

API reference docs for the React ButtonGroup component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Button Group](../components/button-group)

:::

## Import

```jsx
import { ButtonGroup } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

By default, props available for HTML `<div>` are also available for ButtonGroup component.
Other props are as follows:

### `buttonFlex`

The flex value of the button.

- Type: `number | string`

### `color`

The color of the component.

- Type: `'primary' | 'neutral' | 'danger' | 'success' | 'warning'`
- Default: `'neutral'`

### `disabled`

If `true`, all the buttons will be disabled.

- Type: `boolean`
- Default: `false`

### `orientation`

The component orientation.

- Type: `'horizontal' | 'vertical'`
- Default: `'horizontal'`

### `size`

The size of the component.

- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`

### `spacing`

Defines the space between the type `item` components.
It can only be used on a type `container` component.

- Type: `string`
- Default: `'0'`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'outlined'`
