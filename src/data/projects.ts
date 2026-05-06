import type { Project } from '@/types'

export const projects: Project[] = [
  {
    id: 'icc',
    title: { zh: 'ICC 智慧接处警 + 音视频插件', en: 'ICC Dispatch + RTC Plugin' },
    role: { zh: '独立负责', en: 'Tech lead' },
    period: '2023.07 — Present',
    desc: {
      zh: '智慧接处警平台聚合多种报警入口，生成警单并分配到指挥调度系统。同时负责音视频通信插件 —— 抽象 WebRTC / 友商震有等多源能力为统一 API，支持配置化切换内核与跨 Vue 2 / 3 复用。',
      en: 'Police dispatch platform aggregating multiple alert intake channels. Also led the in-house RTC plugin — abstracting WebRTC and multi-vendor stacks into a single, swappable API reusable across Vue 2 / 3.',
    },
    highlights: [
      { zh: '抽离话务组件为 vue-demi 通用组件', en: 'Extracted dispatch console into a vue-demi shared component' },
      { zh: '统一音视频 API，可配置切换厂商', en: 'Unified RTC API with vendor switching by config' },
      { zh: 'WebSocket / WebWorker / Pinia 实战', en: 'WebSocket / WebWorker / Pinia in production' },
    ],
    tags: ['vue3', 'vue2', 'vue-demi', 'typescript', 'webrtc', 'websocket', 'pinia'],
    featured: true,
    cover: 'rings',
  },
  {
    id: 'vcs',
    title: { zh: 'VCS 可视化指挥调度系统', en: 'VCS Command & Dispatch' },
    role: { zh: '独立负责', en: 'Owner' },
    period: '2022.09 — Present',
    desc: {
      zh: '指挥中心案件全流程跟踪：警单调派、设备 / 警员上图、群组呼叫、AI 辅助关键词填单。设计并实现了支持现场动态调整颜色的换肤系统。',
      en: 'End-to-end case tracking for command centers — dispatch, device & officer mapping, group calls, AI-assisted intake. Designed a runtime theming system with on-site color tuning.',
    },
    highlights: [
      { zh: '换肤方案设计 + 现场动态颜色调整', en: 'Runtime theming system, color-tunable on site' },
      { zh: '列表内存优化，提升交互响应', en: 'Memory-optimized lists, smoother interaction' },
      { zh: 'three.js 实现指挥大屏', en: 'three.js for the command-center wall' },
    ],
    tags: ['vue3', 'typescript', 'webrtc', 'websocket', 'three.js'],
    cover: 'grid',
  },
  {
    id: 'luzhou-110',
    title: { zh: '泸州 110 微信小程序', en: 'Luzhou 110 WeChat Mini-Program' },
    role: { zh: '架构与主导', en: 'Architecture lead' },
    period: '2023.07 — 2023.09',
    desc: {
      zh: '微信无声报警小程序：文字 / 图片 / 视频报警 + 电话报警 + 实时通信、附件上传、地图定位、身份证识别。',
      en: 'Silent-alert WeChat mini-program — text / photo / video reports, voice calls, attachment upload, geolocation and ID-card recognition.',
    },
    tags: ['taro', 'vue3', 'typescript', 'websocket', 'pinia'],
    cover: 'wave',
  },
  {
    id: 'ins-rvs',
    title: { zh: 'INS 智能通知 + RVS 警情回访', en: 'INS Notify + RVS Callback' },
    role: { zh: '主要负责', en: 'Core contributor' },
    period: '2023.01 — 2023.09',
    desc: {
      zh: '成都大运会安保 INS 智能通知（任务新建 / 文字转语音 / 催促）与 RVS 警情回访（人工 / 电话 / 短信回访展示与处理）。同期主导前端表单业务低代码平台。',
      en: 'INS notification platform for Chengdu Universiade security (task creation, TTS, follow-up) and RVS callback (manual, phone, SMS). Led the form-business low-code platform.',
    },
    tags: ['vue3', 'typescript', 'low-code'],
    cover: 'branch',
  },
  {
    id: 'wayki-meeting',
    title: { zh: '维基会议', en: 'WaykiMeeting' },
    role: { zh: '前端开发', en: 'Frontend Engineer' },
    period: '2021.03 — 2022.06',
    desc: {
      zh: 'Vite + TSX + Vue Router + Vue 3 完成直播 / 会议小视频展示 / 16 路流切换 / 多人语音实时同步翻译 / 主持人切换。',
      en: 'Vite + TSX + Vue 3 — live streaming, 16-stream switching, real-time multi-speaker translation, host switching.',
    },
    tags: ['vue3', 'typescript', 'vite', 'webrtc'],
    cover: 'panels',
  },
  {
    id: 'wayki-era',
    title: { zh: '维基时代 DeFi', en: 'WaykiEra DeFi' },
    role: { zh: '前端开发', en: 'Frontend Engineer' },
    period: '2019.08 — 2022.06',
    desc: {
      zh: 'waykix 抵押 ROG 铸造 xusd / ROG 挖矿 / 超级节点竞选 / 内嵌 H5 维护，支持数万用户的数字资产管理。',
      en: 'waykix collateral & xusd minting, ROG mining, super-node election and embedded H5. Served tens of thousands of users.',
    },
    tags: ['react', 'typescript', 'mobx'],
    cover: 'orbit',
  },
  {
    id: 'exhk',
    title: { zh: 'EXHK 中心化交易所', en: 'EXHK Centralized Exchange' },
    role: { zh: '独立开发', en: 'Solo build' },
    period: '2019.08 — 2021.05',
    desc: {
      zh: '集成 TradingView 完成 K 线绘制；独立开发 1.0、完全重构 2.0、Vue 2 → Vue 3 升级；上线后活跃用户提升 300%。',
      en: 'TradingView K-line integration. Built 1.0, refactored 2.0, then upgraded Vue 2 → 3. Active users +300% after launch.',
    },
    tags: ['vue3', 'vue2', 'typescript', 'tradingview', 'websocket'],
    cover: 'kline',
  },
  {
    id: 'jdy-v5',
    title: { zh: '精斗云 v5', en: 'Kingdee JDY v5' },
    role: { zh: '云零售 / 商品中心', en: 'Retail / Product Center' },
    period: '2018.07 — 2019.01',
    desc: {
      zh: 'Vue + Vuex + Element-UI 编写 WebPOS（远程打印 / 设置异地同步）、M 站轻应用、商品中心、小程序商品价格策略与下单流程。',
      en: 'Vue + Vuex + Element-UI — WebPOS (remote print, cross-device settings sync), M-site lite app, product center, mini-program pricing and ordering.',
    },
    tags: ['vue2', 'vuex', 'element-ui', 'webpack'],
    cover: 'mosaic',
  },
  {
    id: 'quantum-weicha',
    title: { zh: '量子微查 Hybrid App', en: 'Quantum WeiCha Hybrid App' },
    role: { zh: 'iOS + Web 前端', en: 'iOS + Web Frontend' },
    period: '2016.08 — 2017.04',
    desc: {
      zh: 'Object-C 编写原生 App，WebView 内嵌 Vue SPA，兼容 iOS / Android 双端，发布并多次迭代。',
      en: 'Native iOS in Obj-C with embedded Vue SPA via WebView. Cross-platform consistency across multiple releases.',
    },
    tags: ['ios', 'objective-c', 'vue2'],
    cover: 'prism',
  },
]

/** Aggregated tag list, in stable order for the chip filter. */
export const projectTags: string[] = Array.from(
  new Set(projects.flatMap((p) => p.tags)),
)
