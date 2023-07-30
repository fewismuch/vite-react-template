import { createHashRouter, RouteObject } from 'react-router-dom'
import Layout from '@/layout/index.tsx'
import NoMatch from '@/views/NoMatch.tsx'
import { ComponentType, lazy, Suspense } from 'react'
import { PageLoading } from '@/components/PageLoading.tsx'

//生成约定式路由
export const PageModules = import.meta.glob(['../views/**/*.tsx', '../views/**/*.jsx'])

function retry(componentImport: any, retryLeft: any) {
  return new Promise(resolve => {
    componentImport()
      .then(resolve)
      .catch((e: any) => {
        if (retryLeft > 1) {
          // 尝试重新加载
          retry(componentImport, retryLeft - 1).then(resolve)
        } else {
          // 上报错误日志
          console.error('资源加载失败', e)
          return
        }
      })
  }) as Promise<{ default: ComponentType } | any>
}

function lazyRetry(componentImport: any, retryLeft = 3) {
  return lazy(() => retry(componentImport, retryLeft))
}

// TODO 缺少路由层级
export const routes = Object.keys(PageModules)
  .map(item => {
    const paths = item.replace('../views', '').replace('/index.tsx', '').split('/')
    function wrapSuspense(importer: () => Promise<{ default: ComponentType } | any>) {
      if (!importer()) return undefined
      const Component = lazyRetry(importer)
      return (
        <Suspense fallback={<PageLoading />}>
          <Component />
        </Suspense>
      )
    }
    return {
      //name: last(paths),
      path: paths.join('/') || '/',
      //lazy: PageModules[item],
      element: wrapSuspense(PageModules[item])
      // errorElement: <ErrorBoundary />
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

const router = createHashRouter([
  {
    path: '/',
    Component: Layout,
    children: [
      ...routes,
      {
        path: '*',
        element: <NoMatch />
      }
    ]
  }
])
export default router
