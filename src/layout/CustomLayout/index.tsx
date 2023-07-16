import { GithubFilled, InfoCircleFilled, QuestionCircleFilled } from '@ant-design/icons'
import type { ProSettings } from '@ant-design/pro-components'
import { ProLayout } from '@ant-design/pro-components'
import React, { useState } from 'react'
import defaultProps from './_defaultProps'
import { AvatarButton } from '@/layout/Avatar'
import { MenuSearchInput } from '@/layout/MenuSearchInput'

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
  const [pathname, setPathname] = useState('/')

  return (
    <div className='h-[100vh]'>
      <ProLayout
        {...defaultProps}
        location={{
          pathname
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
              setPathname(item.path || '/')
            }}
          >
            {dom}
          </a>
        )}
        {...settings}
      >
        {children}
      </ProLayout>
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
