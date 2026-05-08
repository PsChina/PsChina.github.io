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
    zh: '11 年前端工程师。把想法做成稳定、好用的 Web 产品 —— 官网、管理后台、数据看板与轻量 SaaS MVP。',
    en: 'Frontend engineer with 11 years of experience turning ideas into polished web products — websites, dashboards and lightweight SaaS MVPs.',
  },
  taglineRoles: [
    { zh: '前端工程师', en: 'Frontend Engineer' },
    { zh: '产品型 Web 开发', en: 'Product-minded Web Development' },
    { zh: '官网与落地页', en: 'Websites & Landing Pages' },
    { zh: '管理后台与数据看板', en: 'Dashboards & Internal Tools' },
    { zh: '轻量 SaaS MVP', en: 'Lightweight SaaS MVPs' },
  ],
  available: '~ weekend projects open →',
  email: 'panshanzxcv.love@163.com',
  github: 'PsChina',
  githubUrl: 'https://github.com/PsChina',
}

export const aboutPillars: AboutPillar[] = [
  {
    id: 'websites',
    title: { zh: '官网与落地页', en: 'Websites & Landing Pages' },
    body: {
      zh: '从一份 Figma 或一段想法开始，交付加载快、移动端稳、SEO 友好的官网或产品落地页。包含基础埋点与可维护的内容结构。',
      en: 'From a Figma file or a rough idea — fast-loading, mobile-stable, SEO-friendly sites with basic analytics and a content structure you can keep editing.',
    },
  },
  {
    id: 'dashboards',
    title: { zh: '后台与数据看板', en: 'Dashboards & Admin Tools' },
    body: {
      zh: '面向运营、客服、内部团队的管理后台与数据看板。表格、表单、权限、图表四件套，做到信息密度高但仍然好读。',
      en: 'Admin panels and analytics dashboards for ops, support and internal teams. Tables, forms, roles and charts — dense, but still easy to read.',
    },
  },
  {
    id: 'saas-mvp',
    title: { zh: '轻量 SaaS MVP', en: 'Lightweight SaaS MVPs' },
    body: {
      zh: '帮独立开发者和早期团队把第一版 SaaS 跑起来：登录、付费、核心流程、必要的可观测性。先能上线，再谈打磨。',
      en: 'Helping solo founders and early teams ship a first SaaS version — auth, billing, core flow and just enough observability. Live first, polish later.',
    },
  },
  {
    id: 'complex-systems',
    title: { zh: '复杂前端系统', en: 'Complex Frontend Systems' },
    body: {
      zh: '低代码平台、实时音视频、three.js 可视化与指挥调度类系统。十一年的边界 case 沉淀，落地可控、不踩同样的坑。',
      en: 'Low-code platforms, real-time A/V, three.js visualization and dispatch-style systems. Eleven years of edge cases — predictable delivery, no repeat pitfalls.',
    },
  },
]
