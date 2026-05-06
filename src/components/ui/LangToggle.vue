<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { usePreferencesStore } from '@/stores/preferences'

const store = usePreferencesStore()
const { locale } = storeToRefs(store)
const { t } = useI18n()
</script>

<template>
  <button
    class="lang-toggle mono-label"
    type="button"
    :aria-label="t('toggle.lang')"
    @click="store.toggleLocale()"
  >
    <span :class="{ 'is-active': locale === 'zh' }">中</span>
    <span
      class="lang-toggle__sep"
      aria-hidden="true"
    >·</span>
    <span :class="{ 'is-active': locale === 'en' }">EN</span>
  </button>
</template>

<style scoped>
.lang-toggle {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 36px;
  padding: 0 10px;
  border-radius: var(--r-sm);
  color: var(--fg-muted);
  transition: color var(--dur-fast), background var(--dur-fast);
}

.lang-toggle:hover {
  background: var(--accent-soft);
  color: var(--fg);
}

.lang-toggle span {
  transition: color var(--dur-fast);
}

.lang-toggle span.is-active {
  color: var(--accent);
}

.lang-toggle__sep {
  color: var(--border-strong);
}
</style>
