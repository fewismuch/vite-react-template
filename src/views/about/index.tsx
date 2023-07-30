import { useNavigate } from 'react-router-dom'
import { Header } from './components/Header'
import { Button } from 'antd'

const Page = () => {
  const navigate = useNavigate()

  return (
    <div>
      <Header />
      <Button onClick={() => navigate('/')}>home</Button>
      <Button onClick={() => navigate('/dashboard')}>dashboard</Button>
      <h2>About</h2>
      <input type='text' />
    </div>
  )
}
Page.displayName = 'AboutPage'

export default Page
