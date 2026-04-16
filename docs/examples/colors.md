# Color Variants

<div style="display: flex; flex-wrap: wrap; gap: 1.5rem; padding: 2rem; background: #0a0a0a; border-radius: 12px;">
  <div v-for="color in ['colorful', 'mono', 'ocean', 'sunset']" :key="color">
    <p style="color: #fff; opacity: 0.5; margin-bottom: 0.5rem; font-size: 0.875rem;">{{ color }}</p>
    <BorderBeam :color-variant="color">
      <div style="padding: 1.5rem; background: #1a1a1a; border-radius: 16px; color: #fff; min-width: 160px;">
        {{ color }}
      </div>
    </BorderBeam>
  </div>
</div>
