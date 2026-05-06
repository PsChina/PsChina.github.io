import type { Experience } from '@/types'

export const experiences: Experience[] = [
  {
    id: 'hytera',
    company: { zh: '海能达通信股份有限公司', en: 'Hytera Communications' },
    role: { zh: '前端开发工程师', en: 'Frontend Engineer' },
    start: '2022.09',
    end: '2026.02',
    highlights: [
      {
        zh: '主导音视频通信模块 npm 包的架构、编写与维护，整合多家友商音视频能力为统一 API，可配置切换底层内核。',
        en: 'Led the in-house audio/video npm package — abstracted multi-vendor backends into a unified, swappable API.',
      },
      {
        zh: '抽离 ICC 智慧接处警话务组件为 vue-demi 通用组件，同时支持 Vue 2 / Vue 3 项目。',
        en: 'Extracted the ICC dispatch console into a vue-demi component compatible with both Vue 2 and Vue 3.',
      },
      {
        zh: '负责 VCS 可视化指挥调度（换肤、列表内存优化、three.js 大屏）、INS 智能通知（成都大运会安保）、RVS 警情回访等业务。',
        en: 'Owned VCS dispatch console (theming, memory optimization, three.js dashboards), INS notifications and RVS callback platform.',
      },
      {
        zh: '主导 6 场技术分享，规范统一前端组的代码风格与编码规则。',
        en: 'Led 6 technical talks; standardized the frontend team’s code style and review rules.',
      },
    ],
  },
  {
    id: 'tianhang',
    company: { zh: '深圳市天杭科技有限公司', en: 'Shenzhen Tianhang Technology' },
    role: { zh: 'Web 前端工程师', en: 'Web Frontend Engineer' },
    start: '2019.08',
    end: '2022.08',
    highlights: [
      {
        zh: '负责维基链 webApp、维基会议（实时翻译 / 16 路视频流切换）、维基时代 DeFi（waykix、ROG 挖矿）等产品的前端开发。',
        en: 'Built WaykiChain webApp, WaykiMeeting (live translation, 16-stream switching), WaykiEra DeFi (waykix, ROG mining).',
      },
      {
        zh: '主要技术栈 React / Vue / TypeScript / mobx / Swift，与后端协作完成接口优化与代码重构。',
        en: 'React / Vue / TypeScript / mobx / Swift; collaborated with backend on API optimization and refactoring.',
      },
      {
        zh: '搭建表单业务低代码平台（数据建模 + 业务建模），覆盖增删改查与查询场景。',
        en: 'Built a form-business low-code platform covering data modeling, CRUD and query scenarios.',
      },
    ],
  },
  {
    id: 'kingdee',
    company: { zh: '金蝶蝶金云计算有限公司', en: 'Kingdee Diejin Cloud' },
    role: { zh: 'Web 前端', en: 'Web Frontend' },
    start: '2018.07',
    end: '2019.08',
    highlights: [
      {
        zh: '负责精斗云 v5 云零售 / 商品中心 / WebPOS（远程打印、设置同步），M 站轻应用与精斗云小程序的开发。',
        en: 'Built JDY v5 retail / product center / WebPOS (remote print, settings sync), M-site lite app and mini-program flows.',
      },
      {
        zh: '轮岗 iOS 团队，参与精斗云 iOS App 的页面、第三方登录、支付与百度地图集成。',
        en: 'Rotated into iOS team — built JDY iOS app pages, social login, payment and Baidu Maps integration.',
      },
    ],
  },
  {
    id: 'bayi',
    company: { zh: '北京八维研修学院', en: 'Beijing Bayi Institute' },
    role: { zh: 'Web 前端高级讲师', en: 'Senior Frontend Instructor' },
    start: '2017.04',
    end: '2018.04',
    highlights: [
      {
        zh: '讲授单页应用开发（git / gulp / AngularJS）与渐进式开发（ES6 / Vue / Vuex / Vue Router）课程。',
        en: 'Taught SPA development (git / gulp / AngularJS) and progressive development (ES6 / Vue / Vuex / Vue Router).',
      },
      {
        zh: '约 1200 名学员通过课程完成完整技术栈实战。',
        en: 'Coached ~1,200 students through full-stack frontend practice.',
      },
    ],
  },
  {
    id: 'sanyuan',
    company: { zh: '深圳三元色数码科技', en: 'Shenzhen Sanyuanse Digital' },
    role: { zh: 'Web 前端 / iOS', en: 'Web Frontend / iOS' },
    start: '2015.07',
    end: '2017.04',
    highlights: [
      {
        zh: '负责公司主页、量子微查 webview 内嵌页面、后台管理系统的技术选型与实现。',
        en: 'Owned company homepage, Quantum WeiCha webview embeds and admin console — selection and delivery.',
      },
      {
        zh: '使用 Object-C + Vue 实现量子微查混合 App，发布并迭代多个 iOS 版本。',
        en: 'Shipped Quantum WeiCha hybrid iOS app (Obj-C + Vue) across multiple release cycles.',
      },
    ],
  },
]
