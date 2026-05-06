<script setup lang="ts">
defineProps<{
  num: string
  label: string
  eyebrow?: string
}>()
</script>

<template>
  <header class="section-header">
    <div class="section-header__top">
      <span class="mono-label">{{ num }} / {{ label }}</span>
      <span
        class="section-header__rule"
        aria-hidden="true"
      />
    </div>
    <p
      v-if="eyebrow"
      class="section-header__eyebrow"
    >
      {{ eyebrow }}
    </p>
  </header>
</template>

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.section-header {
  margin-bottom: clamp(2rem, 6vh, 4rem);

  &__top {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  &__rule {
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--accent), transparent);
    max-width: 40%;
    opacity: 0;
    transform: scaleX(0.4);
    transform-origin: left;
    animation: rule-grow 600ms var(--ease-out) 100ms forwards;

    @include bp.respond-to(tablet) {
      max-width: 30%;
    }

    @include bp.reduced-motion {
      animation: none;
      opacity: 1;
      transform: none;
    }
  }

  &__eyebrow {
    font-family: var(--font-display);
    font-size: clamp(1.35rem, 4vw, 2.25rem);
    margin-top: 0.75rem;
    color: var(--fg);
    font-weight: 400;
    letter-spacing: -0.01em;
    line-height: var(--lh-tight);
  }
}

.reveal.is-in .section-header__rule {
  opacity: 1;
  transform: none;
}

@keyframes rule-grow {
  from { opacity: 0; transform: scaleX(0.4); }
  to   { opacity: 1; transform: scaleX(1); }
}
</style>
