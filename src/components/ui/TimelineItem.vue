<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { usePreferencesStore } from '@/stores/preferences'
import type { Experience } from '@/types'

const props = defineProps<{ entry: Experience }>()
const { locale } = storeToRefs(usePreferencesStore())
const { t } = useI18n()

const company = computed(() => props.entry.company[locale.value])
const role = computed(() => props.entry.role[locale.value])
const highlights = computed(() => props.entry.highlights.map((h) => h[locale.value]))
const isPresent = computed(() => /(present|至今|2026)/i.test(props.entry.end))
</script>

<template>
  <li class="timeline-item">
    <div
      class="timeline-item__marker"
      aria-hidden="true"
    >
      <span class="timeline-item__dot" />
    </div>
    <div class="timeline-item__body">
      <div class="timeline-item__period mono-label">
        {{ entry.start }} —
        <span :class="{ 'is-present': isPresent }">
          {{ entry.end === '2026.02' || entry.end.toLowerCase() === 'present' ? t('work.present') : entry.end }}
        </span>
      </div>
      <h3 class="timeline-item__company">
        {{ company }}
      </h3>
      <div class="timeline-item__role">
        {{ role }}
      </div>
      <ul class="timeline-item__highlights">
        <li
          v-for="(h, i) in highlights"
          :key="i"
        >
          {{ h }}
        </li>
      </ul>
    </div>
  </li>
</template>

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.timeline-item {
  position: relative;
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 0.875rem;
  padding-bottom: 2rem;

  @include bp.respond-to(tablet) {
    grid-template-columns: 24px 1fr;
    gap: 1.25rem;
    padding-bottom: 2.5rem;
  }

  &:last-child {
    padding-bottom: 0;

    .timeline-item__marker::before {
      display: none;
    }
  }

  &__marker {
    position: relative;
    display: flex;
    justify-content: center;

    &::before {
      content: '';
      position: absolute;
      top: 0.6rem;
      bottom: -2rem;
      width: 1px;
      background: var(--border-strong);

      @include bp.respond-to(tablet) {
        bottom: -2.5rem;
      }
    }
  }

  &__dot {
    position: relative;
    display: block;
    width: 10px;
    height: 10px;
    margin-top: 0.4rem;
    border-radius: 50%;
    background: var(--bg);
    border: 1.5px solid var(--accent);
  }

  &__period {
    margin-bottom: 0.4rem;
    color: var(--fg-muted);

    .is-present {
      color: var(--accent);
    }
  }

  &__company {
    font-family: var(--font-display);
    font-weight: 400;
    font-size: 1.25rem;
    letter-spacing: -0.01em;
    color: var(--fg);
    line-height: var(--lh-tight);

    @include bp.respond-to(tablet) {
      font-size: 1.5rem;
    }
  }

  &__role {
    margin-top: 0.15rem;
    margin-bottom: 0.65rem;
    color: var(--fg-muted);
    font-size: 0.95rem;
  }

  &__highlights {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;

    li {
      position: relative;
      padding-left: 1.1rem;
      color: var(--fg-muted);
      line-height: 1.65;
      font-size: 0.95rem;

      &::before {
        content: '—';
        position: absolute;
        left: 0;
        color: var(--accent);
      }
    }
  }
}
</style>
