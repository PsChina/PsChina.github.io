<script setup lang="ts">
import { computed, defineAsyncComponent } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { usePreferencesStore } from '@/stores/preferences'
import { profile } from '@/data/profile'
import { useTypewriter } from '@/composables/useTypewriter'
import BlueprintGrid from '@/components/ui/BlueprintGrid.vue'

const ThreeHero = defineAsyncComponent(() => import('@/components/ui/ThreeHero.vue'))

const { t } = useI18n()
const { locale } = storeToRefs(usePreferencesStore())

const phrases = computed(() => profile.taglineRoles.map((p) => p[locale.value]))
const { display } = useTypewriter({ phrases })
</script>

<template>
  <section
    id="top"
    class="hero"
  >
    <BlueprintGrid />
    <div class="container hero__inner">
      <div class="hero__copy">
        <span class="hero__eyebrow mono-label">{{ t('hero.eyebrow') }}</span>

        <h1 class="hero__name">
          {{ profile.nameZh }}
        </h1>
        <div class="hero__name-en">
          <span
            class="hero__rule"
            aria-hidden="true"
          />
          <span class="hero__name-en-text mono-label">{{ profile.nameEn }}</span>
        </div>

        <p class="hero__role">
          <span class="hero__role-text">{{ display }}</span>
          <span
            class="hero__cursor"
            aria-hidden="true"
          >▌</span>
        </p>
        <p class="hero__intro">
          {{ t('hero.intro') }}
        </p>

        <p class="hero__summary">
          {{ profile.summary[locale] }}
        </p>

        <div class="hero__cta">
          <a
            class="btn btn-primary"
            href="#projects"
          >
            {{ t('hero.cta.work') }} <span aria-hidden="true">→</span>
          </a>
          <a
            class="btn btn-ghost"
            href="#contact"
          >{{ t('hero.cta.contact') }}</a>
        </div>
      </div>

      <div
        class="hero__visual"
        aria-hidden="true"
      >
        <ThreeHero />
      </div>

      <span class="hero__available mono-label">{{ profile.available }}</span>
    </div>
  </section>
</template>

<style scoped>
.hero {
  position: relative;
  min-height: min(85vh, 760px);
  display: flex;
  align-items: center;
  padding-block: clamp(4rem, 12vh, 8rem);
  overflow: hidden;
}

.hero__inner {
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  gap: 2.5rem;
  position: relative;
}

.hero__copy {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32rem;
}

.hero__eyebrow {
  color: var(--accent);
}

.hero__name {
  font-family: var(--font-display);
  font-size: var(--fs-hero-cn);
  line-height: 0.95;
  letter-spacing: -0.04em;
  font-weight: 400;
  color: var(--fg);
}

.hero__name-en {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  margin-top: 0.25rem;
}

.hero__rule {
  width: 2.25rem;
  height: 1px;
  background: var(--accent);
}

.hero__name-en-text {
  color: var(--fg-muted);
  letter-spacing: 0.18em;
  font-size: 0.85rem;
}

.hero__role {
  margin-top: 0.75rem;
  font-family: var(--font-mono);
  font-size: 1rem;
  color: var(--fg);
  display: inline-flex;
  align-items: baseline;
  gap: 2px;
  min-height: 1.5em;
}

.hero__role-text {
  color: var(--fg);
}

.hero__cursor {
  color: var(--accent);
  animation: blink 900ms steps(1) infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

@media (prefers-reduced-motion: reduce) {
  .hero__cursor {
    animation: none;
  }
}

.hero__intro {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  letter-spacing: 0.04em;
  color: var(--fg-subtle);
  margin-top: -0.15rem;
}

.hero__summary {
  margin-top: 0.5rem;
  color: var(--fg-muted);
  font-size: 1.05rem;
  max-width: 28rem;
}

.hero__cta {
  margin-top: 1rem;
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.hero__visual {
  position: relative;
  width: 100%;
  height: 320px;
  display: none;
}

.hero__available {
  position: absolute;
  right: var(--container-pad);
  bottom: 0;
  color: var(--accent);
  letter-spacing: 0.08em;
}

@media (min-width: 768px) {
  .hero__inner {
    grid-template-columns: 1.2fr 1fr;
    gap: 3rem;
  }
  .hero__visual {
    display: block;
    height: 420px;
  }
}

@media (min-width: 1280px) {
  .hero__visual {
    height: 480px;
  }
}
</style>
