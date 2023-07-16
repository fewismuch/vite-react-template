import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
import router from '@/router'
import { initI18n } from '@/locales'
import { PageLoading } from '@/components/PageLoading'
import './global.less'

initI18n()

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <RouterProvider router={router} fallbackElement={<PageLoading />} />
)
