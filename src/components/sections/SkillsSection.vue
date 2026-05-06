<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { usePreferencesStore } from '@/stores/preferences'
import { marqueeKeywords, skillGroups } from '@/data/skills'
import SectionNumber from '@/components/ui/SectionNumber.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import MarqueeBand from '@/components/ui/MarqueeBand.vue'
import SkillBadge from '@/components/ui/SkillBadge.vue'
import AnnotatedNote from '@/components/ui/AnnotatedNote.vue'

const { t } = useI18n()
const { locale } = storeToRefs(usePreferencesStore())
</script>

<template>
  <section
    id="skills"
    v-reveal
    class="section reveal"
  >
    <MarqueeBand :items="marqueeKeywords" />
    <div class="container section__inner skills">
      <SectionNumber :value="t('section.skills.num')" />
      <SectionHeader
        :num="t('section.skills.num')"
        :label="t('section.skills.label')"
        :eyebrow="t('skills.eyebrow')"
      />

      <div class="skills__grid">
        <div class="skills__groups">
          <div
            v-for="group in skillGroups"
            :key="group.id"
            class="skills__group"
          >
            <span class="skills__group-label mono-label">
              {{ group.label[locale] }}
            </span>
            <div class="skills__items">
              <SkillBadge
                v-for="item in group.items"
                :key="item"
                :label="item"
              />
            </div>
          </div>
        </div>
        <AnnotatedNote :text="t('skills.margin')" />
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  padding-top: var(--section-gap);
}

.skills__grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: 1fr;
}

.skills__groups {
  display: grid;
  gap: 2rem;
}

.skills__group {
  display: grid;
  gap: 0.75rem;
  grid-template-columns: 1fr;
  align-items: baseline;
}

.skills__group-label {
  color: var(--fg-subtle);
  letter-spacing: 0.16em;
}

.skills__items {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

@media (min-width: 640px) {
  .skills__group {
    grid-template-columns: 9rem 1fr;
    gap: 1.5rem;
  }
}

@media (min-width: 1024px) {
  .skills__grid {
    grid-template-columns: 1fr 12rem;
    align-items: start;
  }
}

/* Compensate for the marquee that starts the section visually. */
:deep(.marquee + .container) {
  padding-top: 4rem;
}
</style>
