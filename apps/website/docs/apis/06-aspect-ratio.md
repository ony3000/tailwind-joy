---
sidebar_position: 6
title: <AspectRatio />
---

# AspectRatio API

<AvailableFrom version="0.5.0" />

API reference docs for the React AspectRatio component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [AspectRatio](../components/aspect-ratio)

:::

## Import

```tsx
import { AspectRatio } from 'tailwind-joy/components';
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

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'div'`

### `flex`

By default, the AspectRatio will maintain the aspect ratio of its content.
Set this prop to `true` when the container is a flex row and you want the AspectRatio to fill the height of its container.

- Type: `boolean`
- Default: `false`

### `maxHeight`

The maximum calculated height of the element (not the CSS height).

- Type: `number | string`

### `minHeight`

The minimum calculated height of the element (not the CSS height).

- Type: `number | string`

### `objectFit`

The CSS object-fit value of the first-child.

- Type: `'-moz-initial' | 'contain' | 'cover' | 'fill' | 'inherit' | 'initial' | 'none' | 'revert-layer' | 'revert' | 'scale-down' | 'unset'`
- Default: `'cover'`

### `ratio`

The aspect-ratio of the element.
The current implementation uses padding instead of the CSS aspect-ratio.

- Type: `number | string`
- Default: `'16/9'`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'div'>;
    content?: ComponentProps<'div'>;
  }
  ```
- Default: `{}`

### `variant`

The variant of the component.

- Type: `'solid' | 'soft' | 'outlined' | 'plain'`
- Default: `'soft'`
