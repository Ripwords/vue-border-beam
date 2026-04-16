import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { nextTick } from 'vue'
import { withSetup } from './helpers'
import { useSystemTheme } from '../src/useSystemTheme'

describe('useSystemTheme', () => {
  let matchMediaSpy: ReturnType<typeof vi.fn>
  let listeners: Map<string, (e: MediaQueryListEvent) => void>

  beforeEach(() => {
    listeners = new Map()
    matchMediaSpy = vi.fn().mockReturnValue({
      matches: true,
      addEventListener: (_event: string, handler: (e: MediaQueryListEvent) => void) => {
        listeners.set(_event, handler)
      },
      removeEventListener: vi.fn(),
    })
    vi.stubGlobal('matchMedia', matchMediaSpy)
  })

  afterEach(() => {
    vi.unstubAllGlobals()
  })

  it('returns dark when system prefers dark', () => {
    const { result, unmount } = withSetup(() => useSystemTheme())
    expect(result.value).toBe('dark')
    unmount()
  })

  it('returns light when system prefers light', () => {
    matchMediaSpy.mockReturnValue({
      matches: false,
      addEventListener: vi.fn(),
      removeEventListener: vi.fn(),
    })
    const { result, unmount } = withSetup(() => useSystemTheme())
    expect(result.value).toBe('light')
    unmount()
  })

  it('updates when system theme changes', async () => {
    const { result, unmount } = withSetup(() => useSystemTheme())
    expect(result.value).toBe('dark')

    const handler = listeners.get('change')
    handler?.({ matches: false } as MediaQueryListEvent)
    await nextTick()

    expect(result.value).toBe('light')
    unmount()
  })
})
