<script setup lang="ts">
// Decorative section frame: 4 corner brackets — editorial design "register marks".
</script>

<template>
  <div
    class="frame"
    aria-hidden="true"
  >
    <span class="frame__corner frame__corner--tl" />
    <span class="frame__corner frame__corner--tr" />
    <span class="frame__corner frame__corner--bl" />
    <span class="frame__corner frame__corner--br" />
  </div>
</template>

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.frame {
  position: absolute;
  inset: 0.75rem;
  pointer-events: none;

  @include bp.respond-to(tablet) {
    inset: 1.5rem;
  }

  &__corner {
    position: absolute;
    width: 12px;
    height: 12px;
    border: 1px solid var(--border-strong);

    &--tl {
      top: 0;
      left: 0;
      border-right: none;
      border-bottom: none;
    }
    &--tr {
      top: 0;
      right: 0;
      border-left: none;
      border-bottom: none;
    }
    &--bl {
      bottom: 0;
      left: 0;
      border-right: none;
      border-top: none;
    }
    &--br {
      bottom: 0;
      right: 0;
      border-left: none;
      border-top: none;
    }
  }
}
</style>
