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

```jsx
import { RadioGroup } from 'tailwind-joy/components';
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

### `value`

Value of the selected radio button.
The DOM API casts this to a string.

- Type: `string | number | string[]`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'plain'`
