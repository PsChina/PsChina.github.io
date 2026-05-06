<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { projects, projectTags } from '@/data/projects'
import SectionNumber from '@/components/ui/SectionNumber.vue'
import SectionHeader from '@/components/ui/SectionHeader.vue'
import BentoGrid from '@/components/ui/BentoGrid.vue'
import ProjectCard from '@/components/ui/ProjectCard.vue'

const { t } = useI18n()

const FILTER_KEY = 'filter'
const activeTag = ref<string>('')

function readHash(): string {
  if (typeof window === 'undefined') return ''
  const hash = window.location.hash.slice(1)
  if (!hash.includes('?')) return ''
  const query = hash.split('?')[1]
  if (!query) return ''
  const params = new URLSearchParams(query)
  return params.get(FILTER_KEY) ?? ''
}

function writeHash(tag: string) {
  const base = '#projects'
  const next = tag ? `${base}?${FILTER_KEY}=${encodeURIComponent(tag)}` : base
  if (window.location.hash !== next) {
    history.replaceState(null, '', next)
  }
}

function onHashChange() {
  activeTag.value = readHash()
}

onMounted(() => {
  activeTag.value = readHash()
  window.addEventListener('hashchange', onHashChange)
})

onBeforeUnmount(() => {
  window.removeEventListener('hashchange', onHashChange)
})

watch(activeTag, (tag) => writeHash(tag))

function setTag(tag: string) {
  activeTag.value = activeTag.value === tag ? '' : tag
}

const filtered = computed(() => {
  const tag = activeTag.value
  if (!tag) return projects
  return projects.filter((p) => p.tags.includes(tag))
})
</script>

<template>
  <section
    id="projects"
    v-reveal
    class="section reveal"
  >
    <div class="container section__inner projects">
      <SectionNumber :value="t('section.projects.num')" />
      <SectionHeader
        :num="t('section.projects.num')"
        :label="t('section.projects.label')"
        :eyebrow="t('projects.eyebrow')"
      />

      <div
        class="projects__filter"
        role="toolbar"
        aria-label="filter projects by tag"
      >
        <button
          class="chip"
          type="button"
          :class="{ 'is-active': !activeTag }"
          @click="activeTag = ''"
        >
          {{ t('projects.filterAll') }}
        </button>
        <button
          v-for="tag in projectTags"
          :key="tag"
          class="chip"
          type="button"
          :class="{ 'is-active': activeTag === tag }"
          @click="setTag(tag)"
        >
          {{ tag }}
        </button>
      </div>

      <BentoGrid class="projects__grid">
        <ProjectCard
          v-for="p in filtered"
          :key="p.id"
          :project="p"
        />
      </BentoGrid>
    </div>
  </section>
</template>

<style scoped>
.projects__filter {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 2rem;
}

.projects__grid {
  margin-top: 1rem;
}
</style>
