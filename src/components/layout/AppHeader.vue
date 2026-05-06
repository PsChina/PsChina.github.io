<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useI18n } from 'vue-i18n'
import { useScrollSpy } from '@/composables/useScrollSpy'
import Monogram from '@/components/ui/Monogram.vue'
import ThemeToggle from '@/components/ui/ThemeToggle.vue'
import LangToggle from '@/components/ui/LangToggle.vue'

const { t } = useI18n()

const sections = ['about', 'skills', 'work', 'projects', 'contact'] as const
const { active } = useScrollSpy({ ids: [...sections] })

const navItems = computed(() =>
  sections.map((id) => ({ id, label: t(`nav.${id}`) })),
)

// Mobile menu open state.
const menuOpen = ref(false)
function toggleMenu() {
  menuOpen.value = !menuOpen.value
}
function closeMenu() {
  menuOpen.value = false
}

// Close on Escape.
function onKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape') closeMenu()
}

// Lock body scroll when menu open.
watch(menuOpen, (open) => {
  if (typeof document === 'undefined') return
  document.body.style.overflow = open ? 'hidden' : ''
})

// Top scroll progress bar.
const progress = ref(0)
let raf = 0
function onScroll() {
  if (raf) return
  raf = requestAnimationFrame(() => {
    raf = 0
    const max = document.documentElement.scrollHeight - window.innerHeight
    progress.value = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 0
  })
}
onMounted(() => {
  window.addEventListener('scroll', onScroll, { passive: true })
  window.addEventListener('keydown', onKeydown)
  onScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  window.removeEventListener('keydown', onKeydown)
  if (raf) cancelAnimationFrame(raf)
  if (typeof document !== 'undefined') document.body.style.overflow = ''
})
</script>

<template>
  <header class="app-header" :class="{ 'is-menu-open': menuOpen }">
    <div class="app-header__inner container">
      <a
        class="app-header__brand"
        href="#top"
        aria-label="Pan Shanshan — home"
        @click="closeMenu"
      >
        <Monogram :size="32" />
        <span class="mono-label app-header__brand-label">PsChina</span>
      </a>

      <nav
        class="app-header__nav app-header__nav--desktop"
        :aria-label="t('nav.about')"
      >
        <ul>
          <li
            v-for="item in navItems"
            :key="item.id"
          >
            <a
              :href="`#${item.id}`"
              :class="['app-header__link', { 'is-active': active === item.id }]"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>

      <div class="app-header__tools">
        <LangToggle />
        <ThemeToggle />
        <button
          type="button"
          class="app-header__menu-btn"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="toggleMenu"
        >
          <span class="app-header__menu-icon" aria-hidden="true">
            <span /><span /><span />
          </span>
        </button>
      </div>
    </div>

    <div
      id="mobile-nav"
      class="app-header__mobile-panel"
      :class="{ 'is-open': menuOpen }"
      :aria-hidden="!menuOpen"
    >
      <nav :aria-label="t('nav.about')">
        <ul>
          <li
            v-for="item in navItems"
            :key="item.id"
          >
            <a
              :href="`#${item.id}`"
              :class="['app-header__mobile-link', { 'is-active': active === item.id }]"
              @click="closeMenu"
            >
              {{ item.label }}
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <span
      class="app-header__progress"
      :style="{ transform: `scaleX(${progress})` }"
      aria-hidden="true"
    />
  </header>
</template>

<style lang="scss" scoped>
@use 'breakpoints' as bp;

.app-header {
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);

  &__inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 0.5rem;
    height: 56px;

    @include bp.respond-to(tablet) {
      gap: 1rem;
      height: 64px;
    }
  }

  &__brand {
    display: inline-flex;
    align-items: center;
    gap: 0.625rem;
    color: var(--fg);
  }

  &__brand-label {
    color: var(--fg-muted);
  }

  &__nav--desktop {
    display: none;

    @include bp.respond-to(tablet) {
      display: block;
    }

    ul {
      display: flex;
      gap: 1.25rem;
    }
  }

  &__link {
    position: relative;
    display: inline-block;
    padding: 0.25rem 0.1rem;
    font-size: 0.95rem;
    color: var(--fg-muted);
    transition: color var(--dur-fast);

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -2px;
      width: 0;
      height: 2px;
      background: var(--accent);
      transition: width var(--dur-base) var(--ease-out);
    }

    @include bp.hover {
      color: var(--fg);
    }

    &.is-active {
      color: var(--accent);

      &::after {
        width: 100%;
      }
    }
  }

  &__tools {
    display: flex;
    align-items: center;
    gap: 0.25rem;
  }

  // Hamburger button — visible only below tablet breakpoint.
  &__menu-btn {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--tap-min);
    height: var(--tap-min);
    color: var(--fg);
    border-radius: var(--r-md);

    @include bp.respond-to(tablet) {
      display: none;
    }
  }

  &__menu-icon {
    position: relative;
    display: block;
    width: 22px;
    height: 14px;

    > span {
      position: absolute;
      left: 0;
      width: 100%;
      height: 1.5px;
      background: currentColor;
      transition: transform var(--dur-base) var(--ease-out),
        opacity var(--dur-fast) var(--ease-out),
        top var(--dur-base) var(--ease-out);
    }

    > span:nth-child(1) { top: 0; }
    > span:nth-child(2) { top: 50%; transform: translateY(-50%); }
    > span:nth-child(3) { top: 100%; transform: translateY(-100%); }
  }

  &.is-menu-open &__menu-icon {
    > span:nth-child(1) { top: 50%; transform: translateY(-50%) rotate(45deg); }
    > span:nth-child(2) { opacity: 0; }
    > span:nth-child(3) { top: 50%; transform: translateY(-50%) rotate(-45deg); }
  }

  // Mobile drawer panel — slides down below the header.
  &__mobile-panel {
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background: var(--bg);
    border-bottom: 1px solid var(--border);
    max-height: 0;
    overflow: hidden;
    transition: max-height var(--dur-slow) var(--ease-out);

    &.is-open {
      max-height: 70vh;
    }

    @include bp.respond-to(tablet) {
      display: none;
    }

    nav {
      padding: 0.5rem var(--container-pad) 1.25rem;
    }

    ul {
      display: flex;
      flex-direction: column;
    }
  }

  &__mobile-link {
    display: block;
    min-height: var(--tap-min);
    line-height: var(--tap-min);
    padding-inline: 0.25rem;
    font-size: 1.05rem;
    color: var(--fg-muted);
    border-bottom: 1px solid var(--border);
    transition: color var(--dur-fast);

    &.is-active {
      color: var(--accent);
    }

    &:last-child {
      border-bottom: 0;
    }
  }

  &__progress {
    position: absolute;
    left: 0;
    bottom: -1px;
    width: 100%;
    height: 1px;
    background: var(--accent);
    transform-origin: left;
    transform: scaleX(0);
    transition: transform 80ms linear;
  }
}
</style>
