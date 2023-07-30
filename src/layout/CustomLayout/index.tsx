import {
  GithubFilled,
  InfoCircleFilled,
  QuestionCircleFilled,
  RedoOutlined
} from '@ant-design/icons'
import type { ProSettings } from '@ant-design/pro-components'
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components'
import React from 'react'
import defaultProps from './_defaultProps'
import { AvatarButton } from '@/layout/Avatar'
import { MenuSearchInput } from '@/layout/MenuSearchInput'
import { MultiTabs } from '../MultiTabs'
import { useMenus } from '@/hooks/useMenus'
import { KeepAlive, AliveScope, useAliveController } from 'react-activation'
import { Dropdown, MenuProps } from 'antd'

interface Props {
  children?: React.ReactNode
}

const settings: Partial<ProSettings> = {
  fixSiderbar: true,
  layout: 'mix',
  footerRender: false,
  fixedHeader: true
}

export const CustomLayout = (props: Props) => {
  const { children } = props
  //const [pathname, setPathname] = useState('/')
  const { tabsItems, addTab, activeTabsItem } = useMenus()
  const { refreshScope } = useAliveController()

  const items: MenuProps['items'] = [
    {
      label: '1st menu item',
      key: '1'
    },
    {
      label: '2nd menu item',
      key: '2'
    },
    {
      label: '3rd menu item',
      key: '3'
    }
  ]

  const newTabsItems = (tabs: any) => {
    return tabs.map((item: any) => {
      return {
        ...item,
        label: (
          <>
            <Dropdown menu={{ items }} trigger={['contextMenu']}>
              <span>{item.label}</span>
            </Dropdown>
            {activeTabsItem === item.key && <RedoOutlined onClick={() => refreshScope(item.key)} />}
          </>
        ),
        closable: item.key !== '/'
      }
    })
  }

  return (
    <div className='h-[100vh]'>
      <ProConfigProvider dark={false}>
        <ProLayout
          {...defaultProps}
          location={{
            pathname: activeTabsItem
          }}
          menu={{
            type: undefined
          }}
          actionsRender={props => {
            if (props.isMobile) return []
            return [
              props.layout !== 'side' && document.body.clientWidth > 1400 ? (
                <MenuSearchInput />
              ) : undefined,
              <InfoCircleFilled key='InfoCircleFilled' />,
              <QuestionCircleFilled key='QuestionCircleFilled' />,
              <GithubFilled key='GithubFilled' />,
              <AvatarButton />
            ]
          }}
          menuFooterRender={props => {
            return props?.collapsed ? null : <MenuFooter />
          }}
          onMenuHeaderClick={e => console.log(e)}
          menuItemRender={(item, dom) => (
            <a
              onClick={() => {
                //setPathname(item.path || '/')
                //navigate(item.path||'/')
                // 向multiTabs中添加记录
                addTab(item.path || '/')
              }}
            >
              {dom}
            </a>
          )}
          {...settings}
        >
          <MultiTabs
            items={newTabsItems(tabsItems)}
            activeKey={activeTabsItem}
            onChange={path => addTab(path)}
          ></MultiTabs>
          {JSON.stringify(newTabsItems)}
          <AliveScope>
            <KeepAlive
              when={true}
              name={activeTabsItem}
              id={activeTabsItem}
              saveScrollPosition='screen'
            >
              {children}
            </KeepAlive>
          </AliveScope>
        </ProLayout>
      </ProConfigProvider>
    </div>
  )
}

const MenuFooter = () => (
  <div
    style={{
      textAlign: 'center',
      paddingBlockStart: 12
    }}
  >
    <div>© 2023 Made with love</div>
    <div>by Ant Design</div>
  </div>
)
