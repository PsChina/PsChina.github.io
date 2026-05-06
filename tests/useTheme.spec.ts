import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'
import { createPinia, setActivePinia } from 'pinia'
import { defineComponent, h, nextTick } from 'vue'
import { mount } from '@vue/test-utils'
import { useTheme } from '@/composables/useTheme'

const THEME_KEY = 'preferences:theme'

function makeMatchMedia(matches: boolean) {
  const listeners = new Set<EventListener>()
  const mq = {
    matches,
    media: '(prefers-color-scheme: dark)',
    onchange: null as ((this: MediaQueryList, ev: MediaQueryListEvent) => unknown) | null,
    addEventListener: (_type: string, cb: EventListenerOrEventListenerObject) => {
      if (typeof cb === 'function') listeners.add(cb)
    },
    removeEventListener: (_type: string, cb: EventListenerOrEventListenerObject) => {
      if (typeof cb === 'function') listeners.delete(cb)
    },
    addListener: () => {},
    removeListener: () => {},
    dispatchEvent: () => true,
  } as unknown as MediaQueryList
  return {
    mq,
    fire(next: boolean) {
      ;(mq as unknown as { matches: boolean }).matches = next
      const event = { matches: next } as unknown as Event
      for (const cb of listeners) cb(event)
    },
  }
}

describe('useTheme', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    localStorage.clear()
    document.documentElement.removeAttribute('data-theme')
  })

  afterEach(() => {
    vi.restoreAllMocks()
    vi.unstubAllGlobals()
  })

  function mountWith() {
    let api!: ReturnType<typeof useTheme>
    const Comp = defineComponent({
      setup() {
        api = useTheme()
        return () => h('div')
      },
    })
    const wrapper = mount(Comp)
    return { wrapper, api }
  }

  it('falls back to dark when no preference is stored and matchMedia is missing', async () => {
    vi.stubGlobal('matchMedia', undefined)
    const { api } = mountWith()
    await nextTick()
    expect(api.theme.value).toBe('dark')
  })

  it('persists toggled theme to localStorage and reflects on <html>', async () => {
    const { mq } = makeMatchMedia(true)
    vi.stubGlobal('matchMedia', () => mq)
    const { api } = mountWith()
    await nextTick()
    // Initial: matchMedia matches dark → theme should be dark.
    expect(api.theme.value).toBe('dark')

    api.toggle()
    await nextTick()
    expect(api.theme.value).toBe('light')
    expect(localStorage.getItem(THEME_KEY)).toBe('light')
    expect(document.documentElement.getAttribute('data-theme')).toBe('light')
  })

  it('reads stored value over system preference', async () => {
    localStorage.setItem(THEME_KEY, 'light')
    const { mq } = makeMatchMedia(true) // system says dark
    vi.stubGlobal('matchMedia', () => mq)
    const { api } = mountWith()
    await nextTick()
    expect(api.theme.value).toBe('light')
  })

  it('follows system change only when user has not explicitly chosen', async () => {
    const { mq, fire } = makeMatchMedia(false) // system says light
    vi.stubGlobal('matchMedia', () => mq)
    const { api } = mountWith()
    await nextTick()
    expect(api.theme.value).toBe('light')

    fire(true) // system flips to dark
    await nextTick()
    expect(api.theme.value).toBe('dark')

    // Explicit choice should disable system-following.
    api.setTheme('light')
    await nextTick()
    fire(false)
    await nextTick()
    expect(api.theme.value).toBe('light')
  })
})
