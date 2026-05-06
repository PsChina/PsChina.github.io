<script setup lang="ts">
// Bento layout container — children supply their own grid spans.
</script>

<template>
  <div class="bento">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.bento {
  display: grid;
  gap: var(--grid-gap);
  grid-template-columns: 1fr;
  grid-auto-flow: dense;

  @include bp.respond-to(tablet) {
    grid-template-columns: repeat(2, 1fr);
  }

  @include bp.respond-to(desktop) {
    grid-template-columns: repeat(4, 1fr);
    grid-auto-rows: minmax(220px, auto);
  }
}
</style>
