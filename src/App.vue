<script setup lang="ts">
import { watch } from 'vue'
import { storeToRefs } from 'pinia'
import { useI18n } from 'vue-i18n'
import { usePreferencesStore } from '@/stores/preferences'
import AppHeader from '@/components/layout/AppHeader.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import HeroSection from '@/components/sections/HeroSection.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import SkillsSection from '@/components/sections/SkillsSection.vue'
import ExperienceSection from '@/components/sections/ExperienceSection.vue'
import ProjectsSection from '@/components/sections/ProjectsSection.vue'
import ContactSection from '@/components/sections/ContactSection.vue'
import ScrollProgress from '@/components/ui/ScrollProgress.vue'
import CustomCursor from '@/components/ui/CustomCursor.vue'

const { locale: i18nLocale } = useI18n()
const { locale } = storeToRefs(usePreferencesStore())

// Bridge Pinia → vue-i18n.
watch(
  locale,
  (next) => {
    i18nLocale.value = next
  },
  { immediate: true },
)
</script>

<template>
  <AppHeader />
  <main>
    <HeroSection />
    <AboutSection />
    <SkillsSection />
    <ExperienceSection />
    <ProjectsSection />
    <ContactSection />
  </main>
  <AppFooter />
  <ScrollProgress />
  <CustomCursor />
</template>

<style scoped>
main {
  display: block;
}
</style>
