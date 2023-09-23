import { useNavigate,useParams } from 'react-router-dom'

const Page = () => {
  const navigate = useNavigate()
  let { userId } = useParams();
  return (
    <div>
      <button onClick={() => navigate('/')}>home</button>
      Detail 动态参数 {userId}
    </div>
  )
}

export default Page
