---
sidebar_position: 22
title: <Checkbox />
---

# Checkbox API

<AvailableFrom version="0.2.0" />

API reference docs for the React Checkbox component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Checkbox](../components/checkbox)

:::

## Import

```tsx
import { Checkbox } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

### `checkedIcon`

The icon to display when the component is checked.

- Type: `ReactNode`
- Default: `<MdCheck />`, where `<MdCheck />` is an icon component imported from [react-icons](https://www.npmjs.com/package/react-icons).

### `className`

Class name applied to the root element.

- Type: `string`

### `color`

The color of the component.

- Type: `'primary' | 'neutral' | 'danger' | 'success' | 'warning'`
- Default: `'neutral'` when the component is unchecked, `'primary'` when the component is checked.

### `component`

<AvailableFrom version="0.4.0" />

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'span'`

### `disableIcon`

If `true`, the checked icon is removed and the selected variant is applied on the `action` element instead.

- Type: `boolean`
- Default: `false`

### `indeterminate`

If `true`, the component appears indeterminate.
This does not set the native input element to indeterminate due to inconsistent behavior across browsers.

- Type: `boolean`
- Default: `false`

### `indeterminateIcon`

The icon to display when the component is indeterminate.

- Type: `ReactNode`
- Default: `<MdHorizontalRule />`, where `<MdHorizontalRule />` is an icon component imported from [react-icons](https://www.npmjs.com/package/react-icons).

### `label`

The label element next to the checkbox.

- Type: `ReactNode`

### `overlay`

If `true`, the root element's position is set to initial which allows the `action` element to fill the nearest positioned parent.
This prop is useful for composing Checkbox with ListItem component.

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
    root?: ComponentProps<'span'>;
    checkbox?: ComponentProps<'span'>;
    action?: ComponentProps<'span'>;
    input?: ComponentProps<'input'>;
    label?: ComponentProps<'label'>;
  }
  ```
- Default: `{}`

### `uncheckedIcon`

The icon to display when the component is unchecked.

- Type: `ReactNode`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'outlined'` when the component is unchecked, `'solid'` when the component is checked.
