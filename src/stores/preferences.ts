import { defineStore } from 'pinia'
import { ref, watch } from 'vue'
import type { Locale, Theme } from '@/types'

const THEME_KEY = 'preferences:theme'
const LOCALE_KEY = 'preferences:locale'

function readStored<T extends string>(key: string, allowed: readonly T[], fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    if (raw && (allowed as readonly string[]).includes(raw)) return raw as T
  } catch {
    // localStorage unavailable (private mode, SSR) — fall through.
  }
  return fallback
}

function detectInitialTheme(): Theme {
  try {
    const raw = localStorage.getItem(THEME_KEY)
    if (raw === 'dark' || raw === 'light') return raw
  } catch {
    // localStorage unavailable — fall through to system preference.
  }
  if (typeof window !== 'undefined' && typeof window.matchMedia === 'function') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'dark'
}

function detectInitialLocale(): Locale {
  const stored = readStored<Locale>(LOCALE_KEY, ['zh', 'en'] as const, 'zh')
  return stored
}

export const usePreferencesStore = defineStore('preferences', () => {
  const theme = ref<Theme>(detectInitialTheme())
  const locale = ref<Locale>(detectInitialLocale())

  function setTheme(next: Theme) {
    theme.value = next
  }

  function toggleTheme() {
    theme.value = theme.value === 'dark' ? 'light' : 'dark'
  }

  function setLocale(next: Locale) {
    locale.value = next
  }

  function toggleLocale() {
    locale.value = locale.value === 'zh' ? 'en' : 'zh'
  }

  // Reflect initial values to <html> without persisting the implicit default —
  // useTheme uses the presence of a stored value to detect user-explicit choices.
  if (typeof document !== 'undefined') {
    document.documentElement.setAttribute('data-theme', theme.value)
    document.documentElement.setAttribute('lang', locale.value === 'en' ? 'en' : 'zh-CN')
  }

  // Persist + reflect on subsequent changes only.
  watch(theme, (value) => {
    try {
      localStorage.setItem(THEME_KEY, value)
    } catch {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('data-theme', value)
    }
  })

  watch(locale, (value) => {
    try {
      localStorage.setItem(LOCALE_KEY, value)
    } catch {
      // ignore
    }
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', value === 'en' ? 'en' : 'zh-CN')
    }
  })

  return {
    theme,
    locale,
    setTheme,
    toggleTheme,
    setLocale,
    toggleLocale,
  }
})
