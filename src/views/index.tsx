//import { prefetchPage } from '@/layout/routes'
import { Button, Select } from 'antd'
import { useNavigate } from '@/hooks/useNavigate'

const Page = () => {
  //prefetchPage(['/about', '/user/setting'])
  const navigate = useNavigate()

  return (
    <div className='w-full'>
      <Button onClick={() => navigate('/about', { state: { id: 1 } })}>about</Button>
      <Button onClick={() => navigate('/user/setting')}>user/setting</Button>
      <Button onClick={() => navigate('/user/setting2')}>setting2</Button>
      <Button onClick={() => navigate('/user/abc')}>dync</Button>
      <Select options={[{ label: 'a', value: 1 }]} />
    </div>
  )
}
export default Page
