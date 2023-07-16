import { useNavigate } from 'react-router-dom'
import { Button } from 'antd'
const Page = () => {
  const navigate = useNavigate()
  return (
    <div>
      <Button onClick={() => navigate('/')}>home</Button>
      <h2>setting2</h2>
    </div>
  )
}
Page.displayName = 'setting2Page'

export const Component = Page
