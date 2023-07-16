import { Outlet, useLocation, useNavigation } from 'react-router-dom'
import { PageLoading } from '@/components/PageLoading'
import { CustomLayout } from '@/layout/CustomLayout'
import { WaterMark } from '@ant-design/pro-components'

import { ConfigProvider } from 'antd'
import zhCN from 'antd/locale/zh_CN'

export default function Layout() {
  const location = useLocation()
  const navigation = useNavigation()

  // 不需要layout的时候根据path判断，应该也可以根据路由配置的属性判断
  if (location.pathname === '/user/setting2') {
    return <Outlet></Outlet>
  }

  return (
    <ConfigProvider locale={zhCN} direction='ltr'>
      <CustomLayout>
        <WaterMark content='tianyu@12345'>
          {navigation.state !== 'idle' ? <PageLoading /> : <Outlet></Outlet>}
        </WaterMark>
      </CustomLayout>
    </ConfigProvider>
  )
}
