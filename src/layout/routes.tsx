import Index from '@/views/index'
import {RouteObject} from 'react-router-dom'
import {last} from 'lodash'

//生成约定式路由
export const PageModules = import.meta.glob(['../views/**/*.tsx', '../views/**/*.jsx'])

// TODO 缺少路由层级
export const routes = Object.keys(PageModules)
    .map(item => {
        const paths = item.replace('../views', '').replace('/index.tsx', '').split('/')
        if (paths.join('/') === '') {
            return {
                path: '/',
                element: <Index/>
            }
        }
        return {
            name: last(paths),
            path: paths.join('/') || '/',
            lazy: PageModules[item],
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
