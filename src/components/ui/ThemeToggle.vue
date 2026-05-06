<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useTheme } from '@/composables/useTheme'

const { isDark, toggle } = useTheme()
const { t } = useI18n()
</script>

<template>
  <button
    class="theme-toggle"
    type="button"
    :aria-label="t('toggle.theme')"
    :aria-pressed="isDark"
    @click="toggle"
  >
    <svg
      class="theme-toggle__icon"
      :class="{ 'is-dark': isDark }"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      stroke-width="1.5"
      stroke-linecap="round"
      stroke-linejoin="round"
      aria-hidden="true"
    >
      <!-- Moon (dark mode) -->
      <path
        v-if="isDark"
        d="M14.5 11.5A6 6 0 0 1 8.5 5.5c0-.6.1-1.2.2-1.7A6.5 6.5 0 1 0 16.2 11.3c-.5.1-1.1.2-1.7.2Z"
      />
      <!-- Sun (light mode) -->
      <g v-else>
        <circle
          cx="10"
          cy="10"
          r="3.5"
        />
        <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.2 4.2 5.6 5.6M14.4 14.4 15.8 15.8M4.2 15.8 5.6 14.4M14.4 5.6 15.8 4.2" />
      </g>
    </svg>
  </button>
</template>

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.theme-toggle {
  width: var(--tap-min);
  height: var(--tap-min);
  display: grid;
  place-items: center;
  border-radius: var(--r-sm);
  color: var(--fg-muted);
  transition: color var(--dur-fast), background var(--dur-fast);

  @include bp.respond-to(tablet) {
    width: 36px;
    height: 36px;
  }

  @include bp.hover {
    color: var(--accent);
    background: var(--accent-soft);
  }

  &__icon {
    transition: transform var(--dur-slow) var(--ease-out);

    &.is-dark {
      transform: rotate(-180deg);
    }

    @include bp.reduced-motion {
      transition: none;
    }
  }
}
</style>
