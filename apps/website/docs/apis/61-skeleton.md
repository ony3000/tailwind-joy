---
sidebar_position: 61
title: <Skeleton />
---

# Skeleton API

<AvailableFrom version="0.5.0" />

API reference docs for the React Skeleton component.
Learn about the props of this exported module.

## Demos

:::tip

For examples and details on the usage of this React component, visit the component demo pages:

- [Skeleton](../components/skeleton)

:::

## Import

```tsx
import { Skeleton } from 'tailwind-joy/components';
```

## Props

:::info

The `ref` is forwarded to the root element.

:::

### `animation`

The animation.
If `false` the animation effect is disabled.

- Type: `'pulse' | 'wave' | false`
- Default: `'pulse'`

### `className`

Class name applied to the root element.

- Type: `string`

### `component`

The component used for the root node.

- Type: `keyof JSX.IntrinsicElements`
- Default: `'span'`

### `height`

Height of the skeleton.
Useful when you don't want to adapt the skeleton to a text element but for instance a card.

- Type: `number | string`

### `level`

Applies the theme typography styles.

- Type: `'h1' | 'h2' | 'h3' | 'h4' | 'title-lg' | 'title-md' | 'title-sm' | 'body-lg' | 'body-md' | 'body-sm' | 'body-xs' | 'inherit'`
- Default: `variant === 'text' ? 'body-md' : 'inherit'`

### `loading`

If `true`, the skeleton appears.

- Type: `boolean`
- Default: `true`

### `slotProps`

The props used for each slot inside.

- Type:
  ```tsx
  {
    root?: ComponentProps<'span'>;
  }
  ```
- Default: `{}`

### `variant`

The type of content that will be rendered.

- Type: `'circular' | 'inline' | 'overlay' | 'rectangular' | 'text'`
- Default: `'overlay'`

### `width`

Width of the skeleton.
Useful when the skeleton is inside an inline element with no width of its own.

- Type: `number | string`
