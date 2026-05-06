<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { usePreferencesStore } from '@/stores/preferences'
import { aboutPillars } from '@/data/profile'
import SectionNumber from '@/components/ui/SectionNumber.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import AnnotatedNote from '@/components/ui/AnnotatedNote.vue'

const { t } = useI18n()
const { locale } = storeToRefs(usePreferencesStore())
</script>

<template>
  <section
    id="about"
    v-reveal
    class="section about reveal"
  >
    <div class="container section__inner">
      <SectionNumber :value="t('section.about.num')" />
      <SectionHeader
        :num="t('section.about.num')"
        :label="t('section.about.label')"
        :eyebrow="t('about.eyebrow')"
      />

      <div class="about__grid">
        <div class="about__pillars">
          <article
            v-for="pillar in aboutPillars"
            :key="pillar.id"
            class="card pillar"
          >
            <span class="pillar__num mono-label">— {{ pillar.id }}</span>
            <h3 class="pillar__title">{{ pillar.title[locale] }}</h3>
            <p class="pillar__body">{{ pillar.body[locale] }}</p>
          </article>
        </div>
        <AnnotatedNote :text="t('about.margin')" />
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.about {
  &__grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: 1fr;

    @include bp.respond-to(tablet) {
      gap: 2rem;
    }

    @include bp.respond-to(desktop) {
      grid-template-columns: 1fr 12rem;
      align-items: start;
    }
  }

  &__pillars {
    display: grid;
    gap: var(--grid-gap);
    grid-template-columns: 1fr;

    @include bp.respond-to(tablet) {
      grid-template-columns: repeat(2, 1fr);
    }
  }
}

.pillar {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  &__num {
    color: var(--fg-subtle);
  }

  &__title {
    font-family: var(--font-display);
    font-size: 1.35rem;
    line-height: var(--lh-tight);
    letter-spacing: -0.01em;
    font-weight: 400;
    color: var(--fg);

    @include bp.respond-to(tablet) {
      font-size: 1.5rem;
    }
  }

  &__body {
    color: var(--fg-muted);
    font-size: 0.95rem;
    line-height: 1.65;
  }
}
</style>
