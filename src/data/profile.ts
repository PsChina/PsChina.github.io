import type { Profile, AboutPillar } from '@/types'

export const profile: Profile = {
  nameZh: '潘杉杉',
  nameEn: 'Pan Shanshan',
  initials: 'PS',
  yearsOfExperience: 11,
  location: {
    zh: '深圳',
    en: 'Shenzhen',
  },
  summary: {
    zh: '11 年前端工程师。专注实时音视频、跨端协作、低代码平台与可视化指挥调度系统的工程落地。',
    en: '11 years building real-time, multi-platform web for police dispatch, finance and meeting products.',
  },
  taglineRoles: [
    { zh: '前端工程师', en: 'Frontend Engineer' },
    { zh: '音视频通信', en: 'Real-time Audio / Video' },
    { zh: '低代码平台', en: 'Low-code Platform' },
    { zh: 'WebRTC · WebSocket', en: 'WebRTC · WebSocket' },
    { zh: '可视化与 three.js', en: 'Visualization · three.js' },
  ],
  available: '~ available 2026 →',
  email: 'panshanzxcv.love@163.com',
  github: 'PsChina',
  githubUrl: 'https://github.com/PsChina',
}

export const aboutPillars: AboutPillar[] = [
  {
    id: 'fundamentals',
    title: { zh: '基础扎实', en: 'Strong Fundamentals' },
    body: {
      zh: '深入理解 JavaScript 核心 —— 事件循环、原型链、闭包、ES6+；TypeScript、HTML5、CSS3、Sass / Less。',
      en: 'Deep grasp of JS core — event loop, prototype chain, closures, ES6+. TypeScript, HTML5, CSS3, Sass / Less.',
    },
  },
  {
    id: 'frameworks',
    title: { zh: '框架与工程化', en: 'Frameworks & Tooling' },
    body: {
      zh: '精通 Vue 3（响应式 / 编译渲染原理）、React、Pinia / Vuex；熟练 Vite、Webpack、ESLint、Git。',
      en: 'Vue 3 (reactivity & compiler internals), React, Pinia / Vuex. Vite, Webpack, ESLint, Git in daily use.',
    },
  },
  {
    id: 'cross-platform',
    title: { zh: '跨端与扩展', en: 'Cross-platform' },
    body: {
      zh: 'iOS Native（Objective-C / Swift）开发经验，熟悉小程序生态（Taro），WebRTC、WebSocket、three.js 实战。',
      en: 'iOS native (Obj-C / Swift) experience, Taro mini-programs, WebRTC / WebSocket / three.js in production.',
    },
  },
  {
    id: 'architecture',
    title: { zh: '算法与架构', en: 'Algorithms & Architecture' },
    body: {
      zh: '了解常见算法与数据结构，从零搭建 Web 低代码平台；抽象跨厂商音视频统一 API，支持配置化切换。',
      en: 'Built a Web low-code platform from scratch; abstracted multi-vendor audio/video into a unified, swappable API.',
    },
  },
]
