---
sidebar_position: 57
title: <RadioGroup />
---

# RadioGroup API

<AvailableFrom version="0.3.0" />

API reference docs for the React RadioGroup component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Radio](../components/radio)

:::

## Import

```tsx
import { RadioGroup } from 'tailwind-joy/components';
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

<AvailableFrom version="0.4.0" />

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'div'`

### `defaultValue`

The default value.
Use when the component is not controlled.

- Type: `string | number | string[]`

### `disableIcon`

The radio's `disabledIcon` prop.
If specified, the value is passed down to every radios under this element.

- Type: `boolean`
- Default: `false`

### `name`

The name used to reference the value of the control.
If you don't provide this prop, it falls back to a randomly generated name.

- Type: `string`

### `onChange`

Callback fired when a radio button is selected.

- Type: `ChangeEventHandler<HTMLInputElement>`

### `orientation`

The component orientation.

- Type: `'horizontal' | 'vertical'`
- Default: `'vertical'`

### `overlay`

The radio's `overlay` prop.
If specified, the value is passed down to every radios under this element.

- Type: `boolean`
- Default: `false`

### `size`

The size of the component.

- Type: `'sm' | 'md' | 'lg'`
- Default: `'md'`

### `slotProps`

<AvailableFrom version="0.4.0" />

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'div'>;
  }
  ```
- Default: `{}`

### `value`

Value of the selected radio button.
The DOM API casts this to a string.

- Type: `string | number | string[]`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'plain'`
