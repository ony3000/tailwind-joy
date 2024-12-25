---
sidebar_position: 77
title: <ToggleButtonGroup />
---

# ToggleButtonGroup API

<AvailableFrom version="0.6.0" />

API reference docs for the React ToggleButtonGroup component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [ToggleButtonGroup](../components/toggle-button-group)

:::

## Import

```tsx
import { ToggleButtonGroup } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

### `buttonFlex`

The flex value of the button.

- Type: `number | string`

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
- Default: `'div'`

### `disabled`

If `true`, all the buttons will be disabled.

- Type: `boolean`
- Default: `false`

### `onChange`

Callback fired when the value changes.
The type of the value is inferred based on the type of `value` passed to this component.

- Type: `(event: MouseEvent, value: string[] | string | null | unknown) => void`

### `orientation`

The component orientation.

- Type: `'horizontal' | 'vertical'`
- Default: `'horizontal'`

### `size`

The size of the component.

- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'div'>;
  }
  ```
- Default: `{}`

### `spacing`

Defines the space between the type `item` components.
It can only be used on a type `container` component.

- Type: `string`
- Default: `'0'`

### `value`

The currently selected value within the group or an array of selected values.
The value must have reference equality with the option in order to be selected.

- Type: `string[] | string | null`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'outlined'`
