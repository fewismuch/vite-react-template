import { useNavigate } from 'react-router-dom'
import { prefetchPageModule } from '@/layout/routes'
import { useTranslation } from 'react-i18next'
import { changeLanguage } from '@/locales'
import { useAccess, Access } from '@/hooks/useAccess'
import { Button } from 'antd'

const Page = () => {
  //prefetchPageModule(['/about', '/user/setting'])
  const navigate = useNavigate()
  const { t } = useTranslation('index')
  const access = useAccess()

  return (
    <div className='w-full h-[100vh]'>
      index {t('welcome')}
      <Button onClick={() => navigate('/about', { state: { id: 1 } })}>about</Button>
      <Button onClick={() => navigate('/user/setting')}>user/setting</Button>
      <Button onClick={() => navigate('/user/setting2')}>setting2</Button>
      <Access accessible={access.canChangeLanguage} fallback='no auth'>
        <Button onClick={() => changeLanguage('en-US')}>changeLanguage en</Button>
      </Access>
      <div className='ty'>tianyu</div>
    </div>
  )
}
export default Page
