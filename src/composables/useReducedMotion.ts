import { onBeforeUnmount, onMounted, ref } from 'vue'

export function useReducedMotion() {
  const prefersReduced = ref(false)
  let media: MediaQueryList | null = null

  function update(e: MediaQueryList | MediaQueryListEvent) {
    prefersReduced.value = e.matches
  }

  onMounted(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') return
    media = window.matchMedia('(prefers-reduced-motion: reduce)')
    update(media)
    media.addEventListener('change', update)
  })

  onBeforeUnmount(() => {
    if (media) media.removeEventListener('change', update)
    media = null
  })

  return { prefersReduced }
}
