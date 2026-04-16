import { ref, onMounted, onUnmounted, type Ref } from 'vue'

export function useSystemTheme(): Ref<'dark' | 'light'> {
  const theme = ref<'dark' | 'light'>(
    typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
  )

  let mediaQuery: MediaQueryList | undefined
  let handler: ((e: MediaQueryListEvent) => void) | undefined

  onMounted(() => {
    if (typeof window === 'undefined') return

    mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    handler = (e: MediaQueryListEvent) => {
      theme.value = e.matches ? 'dark' : 'light'
    }
    mediaQuery.addEventListener('change', handler)
  })

  onUnmounted(() => {
    if (mediaQuery && handler) {
      mediaQuery.removeEventListener('change', handler)
    }
  })

  return theme
}
