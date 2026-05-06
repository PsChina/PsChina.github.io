import { onBeforeUnmount, onMounted, ref } from 'vue'

export interface ScrollSpyOptions {
  /** Section ids in document order. */
  ids: string[]
  /** Root margin used by the IntersectionObserver. */
  rootMargin?: string
  /** Threshold buckets for the IntersectionObserver. */
  threshold?: number | number[]
}

/**
 * Track which section is currently active using IntersectionObserver.
 *
 * Important: we deliberately do NOT use a scroll listener with throttling.
 * IntersectionObserver is the right primitive — it's event-driven, runs
 * off the main scroll path, and naturally handles resize / DOM swaps.
 */
export function useScrollSpy(options: ScrollSpyOptions) {
  const active = ref<string>(options.ids[0] ?? '')
  let observer: IntersectionObserver | null = null
  const visibility = new Map<string, number>()

  function pickActive() {
    let bestId = active.value
    let bestRatio = -1
    for (const [id, ratio] of visibility) {
      if (ratio > bestRatio) {
        bestRatio = ratio
        bestId = id
      }
    }
    if (bestId !== active.value) active.value = bestId
  }

  onMounted(() => {
    if (typeof IntersectionObserver === 'undefined') return

    observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = (entry.target as HTMLElement).id
          if (!id) continue
          visibility.set(id, entry.isIntersecting ? entry.intersectionRatio : 0)
        }
        pickActive()
      },
      {
        rootMargin: options.rootMargin ?? '-30% 0px -55% 0px',
        threshold: options.threshold ?? [0, 0.25, 0.5, 0.75, 1],
      },
    )

    for (const id of options.ids) {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    }
  })

  onBeforeUnmount(() => {
    observer?.disconnect()
    observer = null
    visibility.clear()
  })

  return { active }
}
