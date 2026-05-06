<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <span class="skill">
    <span
      class="skill__dot"
      aria-hidden="true"
    >▢</span>
    <span class="skill__label">{{ label }}</span>
  </span>
</template>

<style scoped>
.skill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.35rem 0.6rem;
  font-size: 0.875rem;
  border-radius: var(--r-sm);
  border: 1px solid var(--border);
  background: var(--bg-elev);
  color: var(--fg);
  transition: border-color var(--dur-fast), color var(--dur-fast);
}

.skill:hover {
  border-color: var(--accent);
  color: var(--accent);
}

.skill__dot {
  font-family: var(--font-mono);
  color: var(--accent);
  font-size: 0.75rem;
}
</style>
