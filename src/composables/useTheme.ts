import { computed, onBeforeUnmount, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { usePreferencesStore } from '@/stores/preferences'
import type { Theme } from '@/types'

const THEME_KEY = 'preferences:theme'

/**
 * Theme composable backed by the preferences Pinia store.
 *
 * Adds a side-effect not in the store: when the user has NOT explicitly
 * chosen a theme yet, follow `prefers-color-scheme` changes live.
 */
export function useTheme() {
  const store = usePreferencesStore()
  const { theme } = storeToRefs(store)

  const isDark = computed(() => theme.value === 'dark')

  let media: MediaQueryList | null = null

  function onSystemChange(e: MediaQueryListEvent) {
    // Only follow system if the user has not explicitly chosen.
    let userExplicit = false
    try {
      userExplicit = localStorage.getItem(THEME_KEY) !== null
    } catch {
      userExplicit = false
    }
    if (userExplicit) return
    store.setTheme(e.matches ? 'dark' : 'light')
  }

  onMounted(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
    media = window.matchMedia('(prefers-color-scheme: dark)')
    media.addEventListener('change', onSystemChange)
  })

  onBeforeUnmount(() => {
    if (media) media.removeEventListener('change', onSystemChange)
    media = null
  })

  function setTheme(next: Theme) {
    store.setTheme(next)
  }

  function toggle() {
    store.toggleTheme()
  }

  return {
    theme,
    isDark,
    setTheme,
    toggle,
  }
}
