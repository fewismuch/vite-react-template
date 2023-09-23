import { useEffect, useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useMenus } from '../models/useMenus'

export const useMenus = () => {
  const { menus, loading } = useMenus()
  const [tabsItems, setTabsItems] = useState<any>([])
  const [activeTabsItem, setActiveTabsItem] = useState('')

  const navigate = useNavigate()
  const location = useLocation()

  const routeToTab = (route: any) => {
    return {
      key: route.path,
      label: route.name
    }
  }

  const addTab = (path: string, toPath = true) => {}

  const deleteTab = (path: string) => {}

  return {
    tabsItems,
    activeTabsItem,
    addTab
  }
}
