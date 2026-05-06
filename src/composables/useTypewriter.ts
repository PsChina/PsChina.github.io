import { onBeforeUnmount, ref, watch, type Ref } from 'vue'
import { useReducedMotion } from './useReducedMotion'

export interface TypewriterOptions {
  /** Phrases to cycle through. */
  phrases: Ref<string[]> | string[]
  /** Per-character typing delay (ms). */
  typeDelay?: number
  /** Per-character deletion delay (ms). */
  deleteDelay?: number
  /** Pause after a phrase finishes typing (ms). */
  holdDelay?: number
  /** Pause before starting next phrase (ms). */
  gapDelay?: number
}

export function useTypewriter(options: TypewriterOptions) {
  const display = ref('')
  const { prefersReduced } = useReducedMotion()

  const phrasesRef = (Array.isArray(options.phrases)
    ? ref(options.phrases)
    : options.phrases) as Ref<string[]>

  const typeDelay = options.typeDelay ?? 60
  const deleteDelay = options.deleteDelay ?? 35
  const holdDelay = options.holdDelay ?? 1500
  const gapDelay = options.gapDelay ?? 250

  let timer: ReturnType<typeof setTimeout> | null = null
  let cursor = 0
  let phase: 'type' | 'hold' | 'delete' | 'gap' = 'type'
  let charIdx = 0

  function clear() {
    if (timer) {
      clearTimeout(timer)
      timer = null
    }
  }

  function tick() {
    const phrases = phrasesRef.value
    if (!phrases.length) return
    const phrase = phrases[cursor % phrases.length] ?? ''

    if (phase === 'type') {
      charIdx += 1
      display.value = phrase.slice(0, charIdx)
      if (charIdx >= phrase.length) {
        phase = 'hold'
        timer = setTimeout(tick, holdDelay)
      } else {
        timer = setTimeout(tick, typeDelay)
      }
      return
    }

    if (phase === 'hold') {
      phase = 'delete'
      timer = setTimeout(tick, deleteDelay)
      return
    }

    if (phase === 'delete') {
      charIdx -= 1
      display.value = phrase.slice(0, Math.max(0, charIdx))
      if (charIdx <= 0) {
        phase = 'gap'
        timer = setTimeout(tick, gapDelay)
      } else {
        timer = setTimeout(tick, deleteDelay)
      }
      return
    }

    // gap → next phrase
    cursor += 1
    charIdx = 0
    phase = 'type'
    timer = setTimeout(tick, typeDelay)
  }

  function start() {
    clear()
    cursor = 0
    charIdx = 0
    phase = 'type'
    if (prefersReduced.value) {
      display.value = phrasesRef.value[0] ?? ''
      return
    }
    timer = setTimeout(tick, typeDelay)
  }

  // Restart whenever phrases or motion preference changes.
  watch(
    [phrasesRef, prefersReduced],
    () => {
      start()
    },
    { immediate: true },
  )

  onBeforeUnmount(() => {
    clear()
  })

  return { display }
}
