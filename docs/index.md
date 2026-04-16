---
layout: home
hero:
  name: vue-border-beam
  text: Animated border effects for Vue 3
  tagline: Lightweight component for glowing, animated border beam effects
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: Examples
      link: /examples/basic
features:
  - title: 3 Size Modes
    details: Full border glow (md), compact button glow (sm), and traveling bottom-edge glow (line)
  - title: 4 Color Variants
    details: Colorful rainbow, monochrome, ocean blues, and sunset warm tones
  - title: Theme Aware
    details: Dark, light, and auto (system preference) theme support
  - title: Zero Dependencies
    details: Pure CSS animations using conic gradients, @property, and mask compositing
---

<div class="demo-section">

## See it in action

<div class="demo-grid">
  <BorderBeam>
    <div class="demo-card">
      <h3>Default</h3>
      <p>Colorful border beam with full glow</p>
    </div>
  </BorderBeam>
  <BorderBeam color-variant="ocean">
    <div class="demo-card">
      <h3>Ocean</h3>
      <p>Cool blue-purple tones</p>
    </div>
  </BorderBeam>
  <BorderBeam color-variant="sunset">
    <div class="demo-card">
      <h3>Sunset</h3>
      <p>Warm orange-red gradient</p>
    </div>
  </BorderBeam>
  <BorderBeam color-variant="mono">
    <div class="demo-card">
      <h3>Mono</h3>
      <p>Subtle monochrome glow</p>
    </div>
  </BorderBeam>
</div>

### Size Variants

<div class="demo-sizes">
  <div class="demo-size-row">
    <BorderBeam size="sm">
      <button class="demo-button">Button glow</button>
    </BorderBeam>
    <BorderBeam size="sm" color-variant="ocean">
      <button class="demo-button">Ocean</button>
    </BorderBeam>
    <BorderBeam size="sm" color-variant="sunset">
      <button class="demo-button">Sunset</button>
    </BorderBeam>
  </div>
  <BorderBeam size="line">
    <div class="demo-input">Search for something...</div>
  </BorderBeam>
</div>

### Installation

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

</div>

<style>
.demo-section {
  max-width: 960px;
  margin: 0 auto;
  padding: 2rem 1.5rem 4rem;
}

.demo-section h2 {
  text-align: center;
  font-size: 1.75rem;
  margin-bottom: 2rem;
}

.demo-section h3 {
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 1.5rem;
}

.demo-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

@media (max-width: 640px) {
  .demo-grid {
    grid-template-columns: 1fr;
  }
}

.demo-card {
  padding: 2rem;
  background: #1a1a1a;
  border-radius: 16px;
  color: #fff;
}

.demo-card h3 {
  text-align: left;
  margin: 0 0 0.5rem;
  font-size: 1.125rem;
}

.demo-card p {
  margin: 0;
  opacity: 0.6;
  font-size: 0.875rem;
}

.demo-sizes {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  align-items: center;
}

.demo-size-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
}

.demo-button {
  padding: 0.5rem 1.25rem;
  background: #1a1a1a;
  border: none;
  border-radius: 18px;
  color: #fff;
  font-size: 0.875rem;
  cursor: pointer;
}

.demo-input {
  padding: 0.75rem 1.25rem;
  background: #1a1a1a;
  border-radius: 12px;
  color: #fff;
  opacity: 0.5;
  font-size: 0.875rem;
  min-width: 320px;
}

.vp-doc .demo-section :deep(.vp-code-group) {
  max-width: 480px;
  margin: 0 auto;
}
</style>
