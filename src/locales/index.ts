import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import en_index from '@/locales/en-US/index.json'
import en_about from '@/locales/en-US/about.json'
import zh_index from '@/locales/zh-CN/index.json'
import zh_about from '@/locales/zh-CN/about.json'

type Language = 'en-US' | 'zh-CN'

const resources = {
  // 按页面引入
  'en-US': {
    index: en_index,
    about: en_about
  },
  'zh-CN': {
    index: zh_index,
    about: zh_about
  }
  // 全部引入
  // 'zh-CN': await import('@/locales/zh-CN/index.json')
}

export const initI18n = () => {
  i18n.use(initReactI18next).init({
    fallbackLng: 'zh-CN',
    resources
  })
}

export const changeLanguage = (lang: Language) => {
  i18n.changeLanguage(lang)
}

export const setLocal = changeLanguage

export const getAllLocales = () => {
  return []
}

export const getLocale = () => {
  return ''
}
