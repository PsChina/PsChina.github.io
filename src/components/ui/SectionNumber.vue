<script setup lang="ts">
defineProps<{ value: string }>()
</script>

<template>
  <span
    class="section-number"
    aria-hidden="true"
  >{{ value }}</span>
</template>

<style scoped>
.section-number {
  position: absolute;
  top: -0.25em;
  left: -0.05em;
  font-family: var(--font-mono);
  font-size: clamp(8rem, 18vw, 16rem);
  font-weight: 500;
  line-height: 1;
  color: var(--fg);
  opacity: 0.045;
  user-select: none;
  pointer-events: none;
  letter-spacing: -0.04em;
}

:root[data-theme='light'] .section-number {
  opacity: 0.07;
}
</style>
