---
sidebar_position: 56
title: <Radio />
---

# Radio API

<AvailableFrom version="0.2.0" />

API reference docs for the React Radio component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Radio](../components/radio)

:::

## Import

```tsx
import { Radio } from 'tailwind-joy/components';
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

### `label`

The label element next to the radio.

- Type: `ReactNode`

### `overlay`

If `true`, the root element's position is set to initial which allows the `action` element to fill the nearest positioned parent.
This prop is useful for composing Radio with ListItem component.

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
    radio?: ComponentProps<'span'>;
    icon?: ComponentProps<'span'>;
    action?: ComponentProps<'span'>;
    input?: ComponentProps<'input'>;
    label?: ComponentProps<'label'>;
  }
  ```
- Default: `{}`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'outlined'`
