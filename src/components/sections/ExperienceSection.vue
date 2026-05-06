<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { experiences } from '@/data/experiences'
import SectionNumber from '@/components/ui/SectionNumber.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import TimelineItem from '@/components/ui/TimelineItem.vue'

const { t } = useI18n()
</script>

<template>
  <section
    id="work"
    v-reveal
    class="section reveal"
  >
    <div class="container section__inner experience">
      <SectionNumber :value="t('section.work.num')" />
      <SectionHeader
        :num="t('section.work.num')"
        :label="t('section.work.label')"
        :eyebrow="t('work.eyebrow')"
      />

      <ul class="experience__list">
        <TimelineItem
          v-for="entry in experiences"
          :key="entry.id"
          :entry="entry"
        />
      </ul>
    </div>
  </section>
</template>

<style scoped>
.experience__list {
  max-width: 44rem;
}
</style>
