import { useNavigate as useOriginNavigate } from 'react-router-dom'

export const useNavigate = () => {
  const originNavigate = useOriginNavigate()
  const navigate = (path, options) => {
    // 设置tab
    originNavigate(path, options)
  }
  return navigate
}
