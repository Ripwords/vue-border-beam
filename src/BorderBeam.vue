<script lang="ts">
// Module-level counter — persists across component instances
let idCounter = 0
</script>

<script setup lang="ts">
import { ref, computed, watch, onMounted, onUnmounted, type StyleValue } from 'vue'
import type { BorderBeamProps, BorderBeamTheme } from './types'
import { sizePresets, sizeThemePresets, generateBeamCSS } from './styles'
import { useSystemTheme } from './useSystemTheme'

const props = withDefaults(defineProps<BorderBeamProps>(), {
  size: 'md',
  colorVariant: 'colorful',
  theme: 'dark',
  staticColors: false,
  active: true,
  brightness: 1.3,
  hueRange: 30,
  strength: 1,
})

const emit = defineEmits<{
  activate: []
  deactivate: []
}>()

// Unique ID per instance (counter is module-scoped, increments across instances)
const id = `beam-${++idCounter}`

const systemTheme = useSystemTheme()
const wrapperRef = ref<HTMLElement | null>(null)
const isActive = ref(props.active)
const isFading = ref(false)
const detectedRadius = ref<number | null>(null)

// Expose wrapper element for template ref access
defineExpose({ el: wrapperRef })

// Auto-detect child border radius
let observer: MutationObserver | undefined

onMounted(() => {
  if (props.borderRadius != null) return
  detectChildRadius()
  if (wrapperRef.value) {
    observer = new MutationObserver(detectChildRadius)
    observer.observe(wrapperRef.value, { childList: true, subtree: false })
  }
})

onUnmounted(() => {
  observer?.disconnect()
})

function detectChildRadius() {
  const el = wrapperRef.value
  if (!el) return
  const child = el.firstElementChild as HTMLElement | null
  if (!child) return
  const computed = getComputedStyle(child)
  const raw = parseFloat(computed.borderTopLeftRadius)
  if (!isNaN(raw) && raw > 0) {
    detectedRadius.value = raw
  }
}

// Watch active prop changes
watch(() => props.active, (newActive) => {
  if (newActive && !isActive.value && !isFading.value) {
    isActive.value = true
  } else if (!newActive && isActive.value && !isFading.value) {
    isFading.value = true
  }
})

function resolveTheme(theme: BorderBeamTheme, system: 'dark' | 'light'): 'dark' | 'light' {
  return theme === 'auto' ? system : theme
}

const resolvedTheme = computed(() => resolveTheme(props.theme, systemTheme.value))
const themeConfig = computed(() => sizeThemePresets[props.size][resolvedTheme.value])
const sizeConfig = computed(() => sizePresets[props.size])

const finalBorderRadius = computed(() => props.borderRadius ?? detectedRadius.value ?? sizeConfig.value.borderRadius)
const finalDuration = computed(() => props.duration ?? (props.size === 'line' ? 2.4 : 1.96))
const finalSaturation = computed(() => props.saturation ?? themeConfig.value.saturation)
const finalHueRange = computed(() => props.size === 'line' ? Math.min(props.hueRange, 13) : props.hueRange)
const finalStaticColors = computed(() => props.colorVariant === 'mono' ? true : props.staticColors)

const cssStyles = computed(() =>
  generateBeamCSS({
    id,
    borderRadius: finalBorderRadius.value,
    borderWidth: sizeConfig.value.borderWidth,
    duration: finalDuration.value,
    strokeOpacity: themeConfig.value.strokeOpacity,
    innerOpacity: themeConfig.value.innerOpacity,
    bloomOpacity: themeConfig.value.bloomOpacity,
    innerShadow: themeConfig.value.innerShadow,
    size: props.size,
    colorVariant: props.colorVariant,
    staticColors: finalStaticColors.value,
    brightness: props.brightness,
    saturation: finalSaturation.value,
    hueRange: finalHueRange.value,
    theme: resolvedTheme.value,
  })
)

const clampedStrength = computed(() => Math.max(0, Math.min(1, props.strength)))

const wrapperStyle = computed<StyleValue>(() => ({
  '--beam-strength': clampedStrength.value,
}))

function handleAnimationEnd(e: AnimationEvent) {
  const animationName = e.animationName

  if (animationName.includes('fade-out')) {
    isActive.value = false
    isFading.value = false
    emit('deactivate')
  } else if (animationName.includes('fade-in')) {
    emit('activate')
  }
}

defineOptions({
  inheritAttrs: false,
})
</script>

<template>
  <component :is="'style'">{{ cssStyles }}</component>
  <div
    ref="wrapperRef"
    v-bind="$attrs"
    :data-beam="id"
    :data-active="isActive && !isFading ? '' : undefined"
    :data-fading="isFading ? '' : undefined"
    :style="wrapperStyle"
    @animationend="handleAnimationEnd"
  >
    <slot />
    <div data-beam-bloom />
  </div>
</template>
