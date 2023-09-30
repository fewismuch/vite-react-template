import { Avatar, Dropdown, MenuProps } from 'antd'
import { UserOutlined } from '@ant-design/icons'

const avatarUrl =
  'https://gw.alipayobjects.com/zos/antfincdn/efFD%24IOql2/weixintupian_20170331104822.jpg'

export const AvatarButton = () => {
  const items: MenuProps['items'] = [
    {
      key: '1',
      label: '个人中心'
    },
    {
      key: '2',
      label: '退出登录'
    }
  ]

  return (
    <Dropdown menu={{ items }}>
      <div className=' flex items-center ml-4'>
        <Avatar src={avatarUrl} size='small' icon={<UserOutlined />} />
        <span className='text-sm ml-2'>张三</span>
      </div>
    </Dropdown>
  )
}
