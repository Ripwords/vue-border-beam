# vue-border-beam

Animated border beam effect for Vue 3. Pure CSS animations — zero runtime dependencies.

[![npm version](https://img.shields.io/npm/v/vue-border-beam)](https://www.npmjs.com/package/vue-border-beam)
[![npm downloads](https://img.shields.io/npm/dm/vue-border-beam)](https://www.npmjs.com/package/vue-border-beam)
[![license](https://img.shields.io/npm/l/vue-border-beam)](./LICENSE)

[Documentation](https://ripwords.github.io/vue-border-beam/) | [Examples](https://ripwords.github.io/vue-border-beam/examples/basic)

## Features

- **3 Size Modes** — Full border glow (`md`), compact button glow (`sm`), and traveling bottom-edge glow (`line`)
- **4 Color Variants** — Colorful rainbow, monochrome, ocean blues, and sunset warm tones
- **Theme Aware** — Dark, light, and auto (system preference) theme support
- **Zero Dependencies** — Pure CSS animations using conic gradients, `@property`, and mask compositing
- **TypeScript** — Full type definitions included

## Installation

```bash
npm install vue-border-beam
```

## Usage

```vue
<script setup>
import { BorderBeam } from "vue-border-beam";
</script>

<template>
  <BorderBeam>
    <div style="padding: 2rem; background: #1a1a1a; border-radius: 16px;">
      <h3>Hello World</h3>
      <p>This card has an animated border beam.</p>
    </div>
  </BorderBeam>
</template>
```

## Props

| Prop            | Type                                          | Default        | Description                            |
| --------------- | --------------------------------------------- | -------------- | -------------------------------------- |
| `size`          | `'sm' \| 'md' \| 'line'`                      | `'md'`         | Size/type preset                       |
| `color-variant` | `'colorful' \| 'mono' \| 'ocean' \| 'sunset'` | `'colorful'`   | Color palette                          |
| `theme`         | `'dark' \| 'light' \| 'auto'`                 | `'dark'`       | Background adaptation                  |
| `static-colors` | `boolean`                                     | `false`        | Disable hue-shift animation            |
| `duration`      | `number`                                      | `1.96` / `2.4` | Animation cycle in seconds             |
| `active`        | `boolean`                                     | `true`         | Whether animation is playing           |
| `border-radius` | `number`                                      | Auto-detected  | Custom border radius in px             |
| `brightness`    | `number`                                      | `1.3`          | Glow brightness multiplier             |
| `saturation`    | `number`                                      | Theme default  | Glow saturation multiplier             |
| `hue-range`     | `number`                                      | `30`           | Hue rotation range in degrees          |
| `strength`      | `number`                                      | `1`            | Effect opacity (0-1), beam layers only |

## Requirements

- Vue 3.3+
- Modern browser with CSS `@property` support (Chrome 85+, Safari 15.4+, Firefox 128+)

## License

[MIT](./LICENSE)
