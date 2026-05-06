<script setup lang="ts">
import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useReducedMotion } from '@/composables/useReducedMotion'

const x = ref(0)
const y = ref(0)
const visible = ref(false)
const hovering = ref(false)
const supported = ref(false)
const { prefersReduced } = useReducedMotion()

let raf = 0
let nextX = 0
let nextY = 0

function onMove(e: PointerEvent) {
  if (e.pointerType !== 'mouse') return
  nextX = e.clientX
  nextY = e.clientY
  visible.value = true
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    x.value = nextX
    y.value = nextY
  })
}

function onLeave() {
  visible.value = false
}

const interactiveSelector = 'a, button, [role="button"], input, textarea, select, label, .chip, .card.is-interactive'

function onPointerOver(e: PointerEvent) {
  if (e.pointerType !== 'mouse') return
  const target = e.target as Element | null
  hovering.value = !!target?.closest?.(interactiveSelector)
}

onMounted(() => {
  // Skip on touch-primary devices and on reduced-motion preference.
  const isFinePointer = window.matchMedia('(pointer: fine)').matches
  if (!isFinePointer || prefersReduced.value) return
  supported.value = true
  window.addEventListener('pointermove', onMove, { passive: true })
  window.addEventListener('pointerleave', onLeave)
  window.addEventListener('pointerover', onPointerOver, { passive: true })
})

onBeforeUnmount(() => {
  window.removeEventListener('pointermove', onMove)
  window.removeEventListener('pointerleave', onLeave)
  window.removeEventListener('pointerover', onPointerOver)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <div
    v-if="supported"
    class="cursor"
    :class="{ 'is-visible': visible, 'is-hovering': hovering }"
    :style="{ transform: `translate3d(${x}px, ${y}px, 0)` }"
    aria-hidden="true"
  />
</template>

<style lang="scss" scoped>
.cursor {
  position: fixed;
  top: 0;
  left: 0;
  width: 32px;
  height: 32px;
  margin-left: -16px;
  margin-top: -16px;
  border: 1px solid var(--accent);
  border-radius: 50%;
  pointer-events: none;
  z-index: var(--z-cursor);
  opacity: 0;
  mix-blend-mode: difference;
  transition:
    opacity 120ms var(--ease-out),
    width 120ms var(--ease-out),
    height 120ms var(--ease-out),
    margin 120ms var(--ease-out),
    border-color 120ms var(--ease-out);
  will-change: transform;

  &.is-visible {
    opacity: 0.7;
  }

  &.is-hovering {
    width: 48px;
    height: 48px;
    margin-left: -24px;
    margin-top: -24px;
    background: var(--accent-soft);
  }
}
</style>
