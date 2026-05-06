export type Theme = 'dark' | 'light'
export type Locale = 'zh' | 'en'

export interface Bilingual {
  zh: string
  en: string
}

export interface Profile {
  nameZh: string
  nameEn: string
  initials: string
  yearsOfExperience: number
  location: Bilingual
  summary: Bilingual
  taglineRoles: Bilingual[]
  available: string
  email: string
  github: string
  githubUrl: string
}

export interface SkillGroup {
  id: string
  label: Bilingual
  items: string[]
}

export interface Experience {
  id: string
  company: Bilingual
  role: Bilingual
  start: string
  end: string
  highlights: Bilingual[]
}

export interface Project {
  id: string
  title: Bilingual
  role: Bilingual
  period: string
  desc: Bilingual
  highlights?: Bilingual[]
  tags: string[]
  featured?: boolean
  /** SVG cover identifier — maps to ProjectCover variant */
  cover: ProjectCoverVariant
}

export type ProjectCoverVariant =
  | 'rings'
  | 'grid'
  | 'wave'
  | 'branch'
  | 'prism'
  | 'kline'
  | 'orbit'
  | 'panels'
  | 'mosaic'

export interface AboutPillar {
  id: string
  title: Bilingual
  body: Bilingual
}
