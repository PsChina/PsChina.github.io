<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
import { profile } from '@/data/profile'
import SectionNumber from '@/components/ui/SectionNumber.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'

const { t } = useI18n()
const justCopied = ref(false)
let resetTimer: ReturnType<typeof setTimeout> | null = null

async function copyEmail() {
  try {
    await navigator.clipboard.writeText(profile.email)
    justCopied.value = true
    if (resetTimer) clearTimeout(resetTimer)
    resetTimer = setTimeout(() => (justCopied.value = false), 1600)
  } catch {
    // Clipboard unavailable — let the mailto link fall through naturally.
  }
}
</script>

<template>
  <section
    id="contact"
    v-reveal
    class="section contact reveal"
  >
    <div class="container section__inner">
      <SectionNumber :value="t('section.contact.num')" />
      <SectionHeader
        :num="t('section.contact.num')"
        :label="t('section.contact.label')"
        :eyebrow="t('contact.eyebrow')"
      />

      <p class="contact__body">
        {{ t('contact.body') }}
      </p>

      <div class="contact__rows">
        <div class="contact__row">
          <span class="mono-label contact__row-label">{{ t('contact.emailLabel') }}</span>
          <a
            class="contact__row-value link"
            :href="`mailto:${profile.email}`"
          >{{ profile.email }}</a>
          <button
            class="chip contact__row-action"
            type="button"
            @click="copyEmail"
          >
            {{ justCopied ? t('contact.copied') : t('contact.copyEmail') }}
          </button>
        </div>

        <div class="contact__row">
          <span class="mono-label contact__row-label">{{ t('contact.githubLabel') }}</span>
          <a
            class="contact__row-value link"
            :href="profile.githubUrl"
            target="_blank"
            rel="noopener"
          >
            github.com/{{ profile.github }} ↗
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.contact {
  &__body {
    color: var(--fg-muted);
    font-size: 1rem;
    max-width: 32rem;
    margin-bottom: 1.5rem;

    @include bp.respond-to(tablet) {
      font-size: 1.1rem;
      margin-bottom: 2rem;
    }
  }

  &__rows {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    max-width: 38rem;

    @include bp.respond-to(tablet) {
      gap: 1rem;
    }
  }

  // Mobile-first stacked layout; promote to grid at tablet+.
  &__row {
    display: grid;
    grid-template-columns: 1fr;
    gap: 0.5rem;
    align-items: start;
    padding-block: 0.875rem;
    border-bottom: 1px dashed var(--border);

    @include bp.respond-to(tablet) {
      grid-template-columns: 6rem 1fr auto;
      gap: 0.75rem 1rem;
      align-items: center;
      padding-block: 1rem;
    }
  }

  &__row-label {
    color: var(--fg-subtle);
  }

  &__row-value {
    color: var(--fg);
    font-size: 1rem;
    overflow-wrap: anywhere;

    @include bp.respond-to(tablet) {
      font-size: 1.05rem;
    }
  }

  &__row-action {
    justify-self: start;
    min-height: var(--tap-min);

    @include bp.respond-to(tablet) {
      justify-self: end;
      min-height: 0;
    }
  }
}
</style>
