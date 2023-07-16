import { useNavigate, useLocation, useSearchParams } from 'react-router-dom'
import { Header } from './components/Header'
import { Button } from 'antd'

const Page = () => {
  const navigate = useNavigate()
  const { state } = useLocation()
  const [searchParams] = useSearchParams()
  console.log(searchParams.get('id'))
  console.log('1111')
  return (
    <div>
      <Header />
      <Button onClick={() => navigate('/')}>home</Button>
      <Button onClick={() => navigate('/dashboard')}>dashboard</Button>
      <h2>About</h2>
      id:{state.id}
    </div>
  )
}
Page.displayName = 'AboutPage'

export const Component = Page
