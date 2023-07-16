import Index from '@/views/index'
import { RouteObject } from 'react-router-dom'

//生成约定式路由
export const PageModules = import.meta.glob(['../views/**/*.tsx', '../views/**/*.jsx'])

export const routes = Object.keys(PageModules)
  .map(item => {
    const paths = item.replace('../views', '').replace('/index.tsx', '').split('/')
    if (paths.join('/') === '') {
      return {
        path: '/',
        element: <Index />
      }
    }
    return {
      path: paths.join('/') || '/',
      lazy: PageModules[item]
    }
  })
  .filter(
    item =>
      !item.path.includes('.tsx') &&
      !item.path.includes('/components/') &&
      !item.path.includes('/component/')
  ) as RouteObject[]

export const prefetchPageModule = (prefetchPath: string | string[]) => {
  const pathModules: Record<string, any> = routes

  pathModules.forEach((item: { path: string; lazy: any }) => {
    if (Array.isArray(prefetchPath)) {
      if (prefetchPath.includes(item.path)) item.lazy?.()
    } else if (item.path === prefetchPath) {
      item.lazy?.()
    }
  })
}
