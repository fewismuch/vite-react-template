import { useNavigate } from 'react-router-dom'
//import { prefetchPageModule } from '@/layout/routes'
import { Button } from 'antd'

const Page = () => {
  //prefetchPageModule(['/about', '/user/setting'])
  const navigate = useNavigate()

  return (
    <div className='w-full'>
      <Button onClick={() => navigate('/about', { state: { id: 1 } })}>about</Button>
      <Button onClick={() => navigate('/user/setting')}>user/setting</Button>
      <Button onClick={() => navigate('/user/setting2')}>setting2</Button>
      <div className='ty'>tianyu</div>
    </div>
  )
}
export default Page
