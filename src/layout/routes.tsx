import { createHashRouter, RouteObject } from 'react-router-dom'
import Layout from '@/layout/index.tsx'
import Page404 from '@/views/_404.tsx'
import { ComponentType, lazy, Suspense } from 'react'
import { PageLoading } from '@/components/PageLoading.tsx'
import { set } from 'lodash'

function wrapSuspense(importer: () => Promise<{ default: ComponentType } | any>) {
  if (!importer) return undefined
  const Component = lazy(importer)
  return (
    <Suspense fallback={<PageLoading />}>
      <Component />
    </Suspense>
  )
}

const generatePathConfig = () => {
  //生成约定式路由
  const PageModules = import.meta.glob(['/src/views/**/*.tsx', '/src/views/**/*.jsx'])
  const pathConfig = {}
  Object.keys(PageModules).forEach(item => {
    const tempPaths = item
      .replace('/src/views', '')
      .replace('/index.tsx', '')
      .replace('/index.jsx', '')
      // $id文件名转成 :id动态路由
      .replace('$', ':')
    const paths = tempPaths ? tempPaths.split('/').filter(p => p) : '/'

    if (
      (item.includes('.tsx') || item.includes('.jsx')) &&
      !item.includes('/components/') &&
      !item.includes('/component/')
    ) {
      set(pathConfig, paths, PageModules[item])
    }
  })
  return pathConfig
}

const mapPathConfigToRoute = cfg => {
  // route 的子节点为数组
  return Object.entries(cfg).map(([routePath, child]) => {
    // () => import() 语法判断
    if (typeof child === 'function') {
      return {
        // 等于 index 则映射为当前根路由
        path: routePath === 'index' ? '/' : routePath,
        // 转换为组件
        element: wrapSuspense(child)
        //errorElement: <ErrorBoundary />
      }
    }
    // 否则为目录，则查找下一层级
    return {
      path: routePath,
      // 递归 children
      children: mapPathConfigToRoute(child)
    }
  })
}

const generateRouteConfig = () => {
  const pathConfig = generatePathConfig()
  return mapPathConfigToRoute(pathConfig)
}

export const routes = generateRouteConfig()

export const prefetchPage = (prefetchPath: string | string[]) => {
  const pathModules: Record<string, any> = routes
  // 嵌套路由的路径没处理
  pathModules.forEach((item: { path: string; lazy: any }) => {
    if (Array.isArray(prefetchPath)) {
      if (prefetchPath.includes(item.path)) item.lazy?.()
    } else if (item.path === prefetchPath) {
      item.lazy?.()
    }
  })
}

const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      ...routes,
      {
        path: '*',
        element: <Page404 />
      }
    ]
  }
])
export default router
