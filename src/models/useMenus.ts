import { useRequest } from 'ahooks'
import { fetchMenus } from '@/services'

export const useMenus = () => {
  const { data: menus, loading: loading } = useRequest(async () => {
    const res = await fetchMenus()
    if (res) {
      return res
    }
    return {}
  })

  return {
    menus,
    loading
  }
}
