import type { SkillGroup } from '@/types'

export const skillGroups: SkillGroup[] = [
  {
    id: 'languages',
    label: { zh: '语言', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Sass', 'Swift', 'Objective-C'],
  },
  {
    id: 'frameworks',
    label: { zh: '框架', en: 'Frameworks' },
    items: ['Vue 3', 'Vue 2', 'React', 'Pinia', 'Vuex', 'Vue Router', 'vue-demi', 'MobX'],
  },
  {
    id: 'build',
    label: { zh: '构建与工程化', en: 'Build & Tooling' },
    items: ['Vite', 'Webpack', 'ESLint', 'Vitest', 'Git', 'pnpm'],
  },
  {
    id: 'realtime',
    label: { zh: '实时通信', en: 'Real-time' },
    items: ['WebRTC', 'WebSocket', 'video.js', 'WebWorker'],
  },
  {
    id: 'cross',
    label: { zh: '跨端', en: 'Cross-platform' },
    items: ['Taro', 'WeChat Mini-Program', 'iOS Native', 'WebView Hybrid'],
  },
  {
    id: 'visualization',
    label: { zh: '可视化', en: 'Visualization' },
    items: ['three.js', 'TradingView', 'SVG'],
  },
]

/** Flat keyword list used by the marquee band. */
export const marqueeKeywords: string[] = [
  'Vue 3',
  'TypeScript',
  'WebRTC',
  'Pinia',
  'Vite',
  'three.js',
  'Taro',
  'WebSocket',
  'Low-code',
  'React',
  'iOS',
  'vue-demi',
  'video.js',
  'Webpack',
  'Sass',
]
