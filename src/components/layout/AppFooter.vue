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

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.app-footer {
  border-top: 1px solid var(--border);
  padding-block: 2.25rem;
  background: var(--bg-subtle);

  @include bp.respond-to(tablet) {
    padding-block: 3rem;
  }

  &__inner {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
    align-items: flex-start;

    @include bp.respond-to(tablet) {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
    }
  }

  &__source {
    color: var(--fg-muted);
    font-size: 0.95rem;
  }

  &__copy {
    color: var(--fg-subtle);
  }
}
</style>
