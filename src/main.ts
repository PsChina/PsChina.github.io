import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import { createAppI18n } from './i18n'
import { usePreferencesStore } from './stores/preferences'
import { vReveal } from './composables/useReveal'
import './assets/styles/main.scss'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)

// Read locale from store after Pinia is installed.
const prefs = usePreferencesStore()
const i18n = createAppI18n(prefs.locale)
app.use(i18n)

app.directive('reveal', vReveal)
app.mount('#app')
