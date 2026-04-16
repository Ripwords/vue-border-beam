<script setup lang="ts">
import { ref } from 'vue'
import { BorderBeam } from 'vue-border-beam'
import type { BorderBeamSize, BorderBeamColorVariant, BorderBeamTheme } from 'vue-border-beam'

const size = ref<BorderBeamSize>('md')
const colorVariant = ref<BorderBeamColorVariant>('colorful')
const theme = ref<BorderBeamTheme>('dark')
const active = ref(true)
const strength = ref(1)
const duration = ref(1.96)

const sizes: BorderBeamSize[] = ['sm', 'md', 'line']
const colors: BorderBeamColorVariant[] = ['colorful', 'mono', 'ocean', 'sunset']
const themes: BorderBeamTheme[] = ['dark', 'light', 'auto']
</script>

<template>
  <div :class="['app', { light: theme === 'light' }]">
    <h1>vue-border-beam playground</h1>

    <div class="controls">
      <label>
        Size:
        <select v-model="size">
          <option v-for="s in sizes" :key="s" :value="s">{{ s }}</option>
        </select>
      </label>

      <label>
        Color:
        <select v-model="colorVariant">
          <option v-for="c in colors" :key="c" :value="c">{{ c }}</option>
        </select>
      </label>

      <label>
        Theme:
        <select v-model="theme">
          <option v-for="t in themes" :key="t" :value="t">{{ t }}</option>
        </select>
      </label>

      <label>
        Active:
        <input type="checkbox" v-model="active" />
      </label>

      <label>
        Strength: {{ strength.toFixed(2) }}
        <input type="range" v-model.number="strength" min="0" max="1" step="0.05" />
      </label>

      <label>
        Duration: {{ duration.toFixed(2) }}s
        <input type="range" v-model.number="duration" min="0.5" max="5" step="0.1" />
      </label>
    </div>

    <div class="demos">
      <div class="demo-section">
        <h2>Interactive</h2>
        <BorderBeam
          :size="size"
          :color-variant="colorVariant"
          :theme="theme"
          :active="active"
          :strength="strength"
          :duration="duration"
          @activate="() => console.log('activated')"
          @deactivate="() => console.log('deactivated')"
        >
          <div class="card">
            <h3>Border Beam</h3>
            <p>Animated border effect for Vue 3</p>
          </div>
        </BorderBeam>
      </div>

      <div class="demo-section">
        <h2>All Sizes</h2>
        <div class="grid">
          <div v-for="s in sizes" :key="s">
            <p>{{ s }}</p>
            <BorderBeam :size="s" :color-variant="colorVariant" :theme="theme">
              <div :class="['card', { 'card-sm': s === 'sm' }]">
                <span>{{ s }}</span>
              </div>
            </BorderBeam>
          </div>
        </div>
      </div>

      <div class="demo-section">
        <h2>All Colors</h2>
        <div class="grid">
          <div v-for="c in colors" :key="c">
            <p>{{ c }}</p>
            <BorderBeam :size="size" :color-variant="c" :theme="theme">
              <div class="card">
                <span>{{ c }}</span>
              </div>
            </BorderBeam>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
}

.app {
  min-height: 100vh;
  padding: 2rem;
  background: #0a0a0a;
  color: #fff;
}

.app.light {
  background: #f5f5f5;
  color: #111;
}

h1 {
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
}

h2 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
  opacity: 0.7;
}

.controls {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 2rem;
  padding: 1rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 8px;
}

.app.light .controls {
  background: rgba(0, 0, 0, 0.05);
}

label {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.875rem;
}

select, input[type="range"] {
  cursor: pointer;
}

.demos {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.demo-section {
  padding: 1.5rem;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
}

.app.light .demo-section {
  background: rgba(0, 0, 0, 0.02);
}

.grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1.5rem;
  align-items: center;
}

.grid p {
  font-size: 0.75rem;
  opacity: 0.5;
  margin-bottom: 0.5rem;
}

.card {
  padding: 2rem;
  background: #1a1a1a;
  border-radius: 16px;
  min-width: 200px;
}

.app.light .card {
  background: #fff;
}

.card-sm {
  padding: 0.5rem 1rem;
  min-width: auto;
  border-radius: 18px;
}

.card h3 {
  margin-bottom: 0.5rem;
}

.card p, .card span {
  opacity: 0.6;
  font-size: 0.875rem;
}
</style>
