<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'

const { t } = useI18n()
const year = new Date().getFullYear()
</script>

<template>
  <footer class="app-footer">
    <div class="container app-footer__inner">
      <p class="app-footer__edu mono-label">
        {{ t('footer.education') }}
      </p>
      <p class="app-footer__source">
        {{ t('footer.builtWith') }}
        <a
          class="link"
          :href="profile.githubUrl + '/PsChina.github.io'"
          target="_blank"
          rel="noopener"
        >
          {{ t('footer.sourceLink') }} ↗
        </a>
      </p>
      <p class="app-footer__copy mono-label">
        © {{ year }} · {{ profile.nameZh }} · {{ profile.nameEn }}
      </p>
    </div>
  </footer>
</template>

<style scoped>
.app-footer {
  border-top: 1px solid var(--border);
  padding-block: 3rem;
  background: var(--bg-subtle);
}

.app-footer__inner {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  align-items: flex-start;
}

.app-footer__source {
  color: var(--fg-muted);
  font-size: 0.95rem;
}

.app-footer__copy {
  color: var(--fg-subtle);
}

@media (min-width: 768px) {
  .app-footer__inner {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
