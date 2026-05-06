<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const progress = ref(0)
const visible = ref(false)
const { t } = useI18n()

let frame = 0

function onScroll() {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    const doc = document.documentElement
    const max = doc.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
    visible.value = window.scrollY > 200
  })
}

function backToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' })
}

onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  onScroll()
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (frame) cancelAnimationFrame(frame)
})

const radius = 16
const circumference = 2 * Math.PI * radius
</script>

<template>
  <button
    class="scroll-progress"
    :class="{ 'is-visible': visible }"
    type="button"
    :aria-label="t('toggle.backToTop')"
    @click="backToTop"
  >
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      aria-hidden="true"
    >
      <circle
        cx="20"
        cy="20"
        :r="radius"
        fill="none"
        stroke="var(--border)"
        stroke-width="1.5"
      />
      <circle
        cx="20"
        cy="20"
        :r="radius"
        fill="none"
        stroke="var(--accent)"
        stroke-width="1.5"
        stroke-linecap="round"
        :stroke-dasharray="circumference"
        :stroke-dashoffset="circumference - circumference * progress"
        transform="rotate(-90 20 20)"
        style="transition: stroke-dashoffset 100ms linear"
      />
      <path
        d="M20 14 L14 20 M20 14 L26 20 M20 14 L20 26"
        stroke="currentColor"
        stroke-width="1.5"
        stroke-linecap="round"
        fill="none"
      />
    </svg>
  </button>
</template>

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.scroll-progress {
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: color-mix(in srgb, var(--bg-elev) 80%, transparent);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid var(--border);
  color: var(--fg-muted);
  display: grid;
  place-items: center;
  cursor: pointer;
  opacity: 0;
  transform: translateY(8px);
  transition:
    opacity var(--dur-base) var(--ease-out),
    transform var(--dur-base) var(--ease-out),
    color var(--dur-fast);
  z-index: var(--z-progress);
  pointer-events: none;

  // Honor iOS safe area on phones with home indicator.
  bottom: max(1rem, env(safe-area-inset-bottom));

  @include bp.respond-to(tablet) {
    right: 1.5rem;
    bottom: 1.5rem;
  }

  &.is-visible {
    opacity: 1;
    transform: none;
    pointer-events: auto;
  }

  @include bp.hover {
    color: var(--accent);
  }
}
</style>
