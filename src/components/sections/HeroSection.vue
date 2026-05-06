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

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.hero {
  position: relative;
  min-height: min(85vh, 760px);
  display: flex;
  align-items: center;
  padding-block: clamp(3rem, 12vh, 8rem);
  overflow: hidden;

  &__inner {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    gap: 2rem;
    position: relative;

    @include bp.respond-to(tablet) {
      grid-template-columns: 1.2fr 1fr;
      gap: 3rem;
    }
  }

  &__copy {
    display: flex;
    flex-direction: column;
    gap: 0.875rem;
    max-width: 32rem;

    @include bp.respond-to(tablet) {
      gap: 1rem;
    }
  }

  &__eyebrow {
    color: var(--accent);
  }

  &__name {
    font-family: var(--font-display);
    font-size: var(--fs-hero-cn);
    line-height: 0.95;
    letter-spacing: -0.04em;
    font-weight: 400;
    color: var(--fg);
  }

  &__name-en {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.25rem;
  }

  &__rule {
    width: 2.25rem;
    height: 1px;
    background: var(--accent);
  }

  &__name-en-text {
    color: var(--fg-muted);
    letter-spacing: 0.18em;
    font-size: 0.85rem;
  }

  &__role {
    margin-top: 0.5rem;
    font-family: var(--font-mono);
    font-size: 0.95rem;
    color: var(--fg);
    display: inline-flex;
    align-items: baseline;
    gap: 2px;
    min-height: 1.5em;

    @include bp.respond-to(tablet) {
      margin-top: 0.75rem;
      font-size: 1rem;
    }
  }

  &__role-text {
    color: var(--fg);
  }

  &__cursor {
    color: var(--accent);
    animation: blink 900ms steps(1) infinite;

    @include bp.reduced-motion {
      animation: none;
    }
  }

  &__intro {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    letter-spacing: 0.04em;
    color: var(--fg-subtle);
    margin-top: -0.15rem;

    @include bp.respond-to(tablet) {
      font-size: 0.85rem;
    }
  }

  &__summary {
    margin-top: 0.5rem;
    color: var(--fg-muted);
    font-size: 1rem;
    max-width: 28rem;

    @include bp.respond-to(tablet) {
      font-size: 1.05rem;
    }
  }

  &__cta {
    margin-top: 0.75rem;
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;

    @include bp.respond-to(tablet) {
      margin-top: 1rem;
    }
  }

  // 3D visual hidden on phones to keep load light + give copy room.
  &__visual {
    position: relative;
    width: 100%;
    height: 320px;
    display: none;

    @include bp.respond-to(tablet) {
      display: block;
      height: 420px;
    }

    @include bp.respond-to(wide) {
      height: 480px;
    }
  }

  &__available {
    position: absolute;
    right: var(--container-pad);
    bottom: -1.25rem;
    color: var(--accent);
    letter-spacing: 0.08em;
    font-size: 0.7rem;

    @include bp.respond-to(tablet) {
      bottom: 0;
      font-size: var(--fs-mono-label);
    }
  }
}

@keyframes blink {
  50% { opacity: 0; }
}
</style>
