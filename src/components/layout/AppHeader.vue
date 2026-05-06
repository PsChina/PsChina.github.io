<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
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
  onScroll()
})
onBeforeUnmount(() => {
  window.removeEventListener('scroll', onScroll)
  if (raf) cancelAnimationFrame(raf)
})
</script>

<template>
  <header class="app-header">
    <div class="app-header__inner container">
      <a
        class="app-header__brand"
        href="#top"
        aria-label="Pan Shanshan — home"
      >
        <Monogram :size="32" />
        <span class="mono-label app-header__brand-label">PsChina</span>
      </a>

      <nav
        class="app-header__nav"
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
      </div>
    </div>
    <span
      class="app-header__progress"
      :style="{ transform: `scaleX(${progress})` }"
      aria-hidden="true"
    />
  </header>
</template>

<style scoped>
.app-header {
  position: sticky;
  top: 0;
  z-index: var(--z-header);
  background: color-mix(in srgb, var(--bg) 78%, transparent);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border-bottom: 1px solid var(--border);
}

.app-header__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  height: 64px;
}

.app-header__brand {
  display: inline-flex;
  align-items: center;
  gap: 0.625rem;
  color: var(--fg);
}

.app-header__brand-label {
  color: var(--fg-muted);
}

.app-header__nav ul {
  display: none;
  gap: 1.25rem;
}

.app-header__link {
  position: relative;
  display: inline-block;
  padding: 0.25rem 0.1rem;
  font-size: 0.95rem;
  color: var(--fg-muted);
  transition: color var(--dur-fast);
}

.app-header__link::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width var(--dur-base) var(--ease-out);
}

.app-header__link:hover {
  color: var(--fg);
}

.app-header__link.is-active {
  color: var(--accent);
}

.app-header__link.is-active::after {
  width: 100%;
}

.app-header__tools {
  display: flex;
  align-items: center;
  gap: 0.25rem;
}

.app-header__progress {
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

@media (min-width: 768px) {
  .app-header__nav ul {
    display: flex;
  }
}
</style>
