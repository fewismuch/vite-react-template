import { createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from '@/layout/index'
import NoMatch from '@/views/NoMatch'
import { routes } from '@/layout/routes'

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
