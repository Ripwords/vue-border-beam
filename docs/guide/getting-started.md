# Getting Started

## Installation

::: code-group

```bash [bun]
bun add vue-border-beam
```

```bash [pnpm]
pnpm add vue-border-beam
```

```bash [npm]
npm install vue-border-beam
```

```bash [yarn]
yarn add vue-border-beam
```

:::

## Basic Usage

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

## Requirements

- Vue 3.3+
- Modern browser with CSS `@property` support (Chrome 85+, Safari 15.4+, Firefox 128+)
