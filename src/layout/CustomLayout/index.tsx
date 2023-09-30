import React, { useEffect } from 'react'
import { GithubFilled, InfoCircleFilled, QuestionCircleFilled } from '@ant-design/icons'
import type { ProSettings } from '@ant-design/pro-components'
import { ProConfigProvider, ProLayout } from '@ant-design/pro-components'
import defaultProps from './_defaultProps'
import { AvatarButton } from '@/layout/Avatar'
import { MenuSearchInput } from '@/layout/MenuSearchInput'
import { MultiTabs } from '../MultiTabs'
import { KeepAlive, AliveScope, useAliveController } from 'react-activation'
import { useNavigate } from '@/hooks/useNavigate'
import { MenusStore } from '@/layout/MenusStore'
import { useSnapshot } from 'valtio'

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
  const { menus, activedMenu } = useSnapshot(MenusStore)
  const navigate = useNavigate()

  return (
    <div className='h-[100vh]'>
      <ProConfigProvider dark={false}>
        <ProLayout
          {...defaultProps}
          route={{
            path: '/',
            routes: menus
          }}
          location={{
            pathname: activedMenu
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
                navigate(item.path || '/')
              }}
            >
              {dom}
            </a>
          )}
          {...settings}
        >
          <MultiTabs />

          <AliveScope>
            <KeepAlive when={true} name={activedMenu} id={activedMenu} saveScrollPosition='screen'>
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
