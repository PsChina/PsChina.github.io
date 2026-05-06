<script setup lang="ts">
// Bento layout container — children supply their own grid spans.
</script>

<template>
  <div class="bento">
    <slot />
  </div>
</template>

<style scoped>
.bento {
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: 1fr;
  grid-auto-flow: dense;
}

@media (min-width: 640px) {
  .bento {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1024px) {
  .bento {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(220px, auto);
  }
}
</style>
