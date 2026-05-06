import { createI18n } from 'vue-i18n'
import zhCN from './locales/zh-CN'
import enUS from './locales/en-US'
import type { Locale } from '@/types'

export const SUPPORTED_LOCALES: Locale[] = ['zh', 'en']

const messages = {
  zh: zhCN,
  en: enUS,
} as const

export type Messages = typeof messages.zh

export function createAppI18n(initial: Locale) {
  return createI18n<[Messages], Locale>({
    legacy: false,
    locale: initial,
    fallbackLocale: 'en',
    messages,
    missingWarn: false,
    fallbackWarn: false,
  })
}
