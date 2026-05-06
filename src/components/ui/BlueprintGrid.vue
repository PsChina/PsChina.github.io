<script setup lang="ts">
// Renders a subtle dot pattern as a Hero background.
// Pure SVG via background-image — no DOM cost beyond one element.
</script>

<template>
  <div
    class="blueprint"
    aria-hidden="true"
  />
</template>

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.blueprint {
  position: absolute;
  inset: 0;
  pointer-events: none;
  background-image: radial-gradient(circle at center, var(--fg-subtle) 1px, transparent 1.5px);
  background-size: 18px 18px;
  background-position: 0 0;
  opacity: 0.14;
  -webkit-mask-image: radial-gradient(70% 70% at 50% 30%, #000 30%, transparent 80%);
  mask-image: radial-gradient(70% 70% at 50% 30%, #000 30%, transparent 80%);

  @include bp.respond-to(tablet) {
    background-size: 24px 24px;
    opacity: 0.18;
    -webkit-mask-image: radial-gradient(60% 70% at 50% 30%, #000 30%, transparent 80%);
    mask-image: radial-gradient(60% 70% at 50% 30%, #000 30%, transparent 80%);
  }
}
</style>
