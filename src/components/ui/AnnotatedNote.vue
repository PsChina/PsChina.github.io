<script setup lang="ts">
defineProps<{ text: string }>()
</script>

<template>
  <aside
    class="note desktop-only"
    aria-hidden="true"
  >
    <span class="note__star">*</span>
    <span class="note__text">{{ text }}</span>
  </aside>
</template>

<style scoped>
.note {
  font-family: var(--font-mono);
  font-size: 0.7rem;
  letter-spacing: 0.04em;
  color: var(--fg-subtle);
  line-height: 1.6;
  display: flex;
  gap: 0.5rem;
  max-width: 14rem;
}

.note__star {
  color: var(--accent);
}
</style>
