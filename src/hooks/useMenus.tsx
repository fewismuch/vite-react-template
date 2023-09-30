import { MenusStore } from '@/layout/MenusStore'
import { useSnapshot } from 'valtio'

export const useMenus = () => {
  const { menus, addMenu } = useSnapshot(MenusStore)

  return {
    menus,
    addMenu
  }
}
