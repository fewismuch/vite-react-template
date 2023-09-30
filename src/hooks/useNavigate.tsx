import { MenusStore } from '@/layout/MenusStore'
import { useSnapshot } from 'valtio'
import { useNavigate as useOriginNavigate } from 'react-router-dom'

export const useNavigate = () => {
  const { addMenu } = useSnapshot(MenusStore)
  const originNavigate = useOriginNavigate()

  const navigate = (path, options) => {
    addMenu(path)
    originNavigate(path, options)
  }
  return navigate
}
