import type { Directive } from 'vue'

/**
 * v-reveal — adds `is-in` class once an element scrolls into view.
 * Pair with the `.reveal` class in main.css.
 */
export const vReveal: Directive<HTMLElement> = {
  mounted(el) {
    if (typeof IntersectionObserver === 'undefined') {
      el.classList.add('is-in')
      return
    }

    const observer = new IntersectionObserver(
      (entries, obs) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            obs.unobserve(entry.target)
          }
        }
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 },
    )
    observer.observe(el)
    ;(el as HTMLElement & { __revealObserver?: IntersectionObserver }).__revealObserver = observer
  },
  unmounted(el) {
    const node = el as HTMLElement & { __revealObserver?: IntersectionObserver }
    node.__revealObserver?.disconnect()
    delete node.__revealObserver
  },
}
