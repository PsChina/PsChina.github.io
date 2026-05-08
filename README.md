# PsChina.github.io

潘杉杉（Pan Shanshan）的个人主页 —— 11 年前端工程师作品集与 Web 产品合作入口，部署于 [pschina.github.io](https://pschina.github.io)。

技术栈：**Vue 3 + Vite 5 + TypeScript（strict）**，Pinia、vue-i18n、three.js（懒加载）、Vitest。
设计：原生 CSS + design tokens（无 UI 库），中英双语切换，深浅主题，响应式 + 编辑设计风格的版面。

---

## 本地开发

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm typecheck    # vue-tsc --noEmit
pnpm test         # vitest run
pnpm lint         # eslint flat config
pnpm build        # 输出 dist/
pnpm preview      # 预览生产构建
```

需要 Node 20+。`pnpm` 推荐版本 9（CI 走 9）。如果只装了 npm，可用 `npx pnpm@9 ...` 临时跑。

## 工程亮点（可作为代码 sample）

- **设计系统**：`src/assets/styles/tokens.css` 单源 CSS 变量，明暗主题、字体、间距、动效曲线全部 token 化。
- **主题系统**：`useTheme()` + Pinia store，`prefers-color-scheme` 与显式选择并存，刷新无 FOUC（`index.html` boot script 同步应用）。
- **滚动监听**：`useScrollSpy` 用 IntersectionObserver，**不**用 scroll + throttle —— 事件驱动思维。
- **i18n**：vue-i18n composable 模式，双语 key + 数据级 `Bilingual` 结构，`<html lang>` 自动同步。
- **打字机**：`useTypewriter` 状态机驱动，自动响应 `prefers-reduced-motion`。
- **3D Hero**：`ThreeHero.vue` 用 `defineAsyncComponent` 懒加载 + Vite manual chunk，three.js 不进首屏 bundle。
- **Bento 项目区**：CSS Grid `auto-flow: dense` + featured 卡片跨行跨列。
- **可访问性**：语义 HTML、可见焦点、键盘可达、`aria-label`、reduced-motion 全局降级、对比度 ≥ AA。
- **测试**：Vitest 覆盖 `useTheme` / `useScrollSpy` 关键逻辑（matchMedia / IntersectionObserver mock）。
- **CI**：GitHub Actions `actions/deploy-pages@v4` 流程：install → typecheck → test → build → upload → deploy。

## 目录速览

```
src/
├── assets/styles/   设计 token + reset + 全局样式
├── components/
│   ├── layout/      AppHeader / AppFooter
│   ├── sections/    Hero / About / Skills / Experience / Projects / Contact
│   └── ui/          复用基础组件（cursor / cover / monogram / marquee …）
├── composables/     useTheme / useScrollSpy / useTypewriter / useReducedMotion / useReveal
├── data/            profile / skills / experiences / projects（数据驱动渲染）
├── i18n/            zh-CN / en-US
├── stores/          Pinia preferences（theme + locale）
└── types/           Bilingual / Project / Experience …
```

## 部署到 GitHub Pages

仓库名是 `PsChina.github.io`（用户站点 → 默认根路径 `/`，已在 `vite.config.ts` 设置）。

首次启用一次性手动操作：

1. 推送到 `main`（GitHub Actions 会自动构建）
2. 进入 GitHub 仓库 **Settings → Pages**
3. **Source** 选择 **GitHub Actions**
4. 等首次工作流跑完（约 1–2 分钟）
5. 访问 [https://pschina.github.io](https://pschina.github.io)

之后任何 `main` 分支的推送都会触发自动部署，不再需要任何手动步骤。

## 不做的事

- 不引入 UI 框架（Tailwind / Element / Naive）—— 手写 CSS 才能体现设计与工程素养
- 不放电话号码 —— 联系方式仅邮箱 + GitHub
- 不放真实项目截图（NDA / 截图过期）—— 改为每个项目一个抽象几何 SVG 封面

## License

源码 © 2026 Pan Shanshan。文案与简历内容仅作展示用途。
