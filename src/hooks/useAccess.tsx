import { useEffect, useState } from 'react'

export const useAccess = () => {
  const [can, setCan] = useState({
    canChangeLanguage: false
  })
  useEffect(() => {
    setTimeout(() => {
      setCan({ ...can, canChangeLanguage: true })
    }, 1000)
  }, [])
  return can
}

interface Props {
  accessible: boolean
  fallback?: React.ReactNode
  children?: React.ReactNode
}
export const Access: React.FC<Props> = props => {
  const { accessible = false, fallback, children } = props
  if (!accessible) {
    return <>{fallback}</>
  }
  return <>{children}</>
}
