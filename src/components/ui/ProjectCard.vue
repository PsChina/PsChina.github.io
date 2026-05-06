<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { usePreferencesStore } from '@/stores/preferences'
import type { Project } from '@/types'
import ProjectCover from './ProjectCover.vue'

const props = defineProps<{ project: Project }>()
const { locale } = storeToRefs(usePreferencesStore())
const { t } = useI18n()

const title = computed(() => props.project.title[locale.value])
const role = computed(() => props.project.role[locale.value])
const desc = computed(() => props.project.desc[locale.value])
const highlights = computed(
  () => props.project.highlights?.map((h) => h[locale.value]) ?? [],
)
</script>

<template>
  <article
    class="project card is-interactive"
    :class="[`project--span-${project.featured ? 'hero' : 'normal'}`]"
  >
    <div class="project__cover">
      <ProjectCover :variant="project.cover" />
      <span
        v-if="project.featured"
        class="project__featured mono-label"
      >
        ✦ {{ t('projects.featured') }}
      </span>
    </div>

    <div class="project__body">
      <div class="project__meta">
        <span class="project__period mono-label">{{ project.period }}</span>
        <span class="project__role mono-label">— {{ role }}</span>
      </div>

      <h3 class="project__title">
        {{ title }}
      </h3>

      <p class="project__desc">
        {{ desc }}
      </p>

      <ul
        v-if="project.featured && highlights.length"
        class="project__highlights"
      >
        <li
          v-for="(h, i) in highlights"
          :key="i"
        >
          {{ h }}
        </li>
      </ul>

      <ul class="project__tags">
        <li
          v-for="tag in project.tags"
          :key="tag"
          class="chip"
        >
          {{ tag }}
        </li>
      </ul>
    </div>
  </article>
</template>

<style scoped>
.project {
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.project__cover {
  position: relative;
  aspect-ratio: 16 / 9;
  background: var(--bg-subtle);
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

.project__featured {
  position: absolute;
  top: 0.75rem;
  right: 0.75rem;
  color: var(--accent);
  background: color-mix(in srgb, var(--bg) 80%, transparent);
  border: 1px solid var(--accent);
  border-radius: var(--r-sm);
  padding: 2px 8px;
  letter-spacing: 0.08em;
}

.project__body {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  padding: 1.5rem;
  flex: 1;
}

.project__meta {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem 0.75rem;
  align-items: baseline;
}

.project__title {
  font-family: var(--font-display);
  font-weight: 400;
  font-size: 1.5rem;
  line-height: var(--lh-tight);
  letter-spacing: -0.01em;
  color: var(--fg);
}

.project__desc {
  color: var(--fg-muted);
  font-size: 0.95rem;
  line-height: 1.6;
}

.project__highlights {
  display: flex;
  flex-direction: column;
  gap: 0.35rem;
  margin-top: 0.25rem;
}

.project__highlights li {
  position: relative;
  padding-left: 1rem;
  color: var(--fg-muted);
  font-size: 0.9rem;
  line-height: 1.5;
}

.project__highlights li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--accent);
  font-family: var(--font-mono);
}

.project__tags {
  margin-top: auto;
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
}

/* Featured card spans 2x on bento grid (≥1024px). */
@media (min-width: 1024px) {
  .project--span-hero {
    grid-column: span 2;
    grid-row: span 2;
  }
  .project--span-hero .project__title {
    font-size: 2rem;
  }
}
</style>
