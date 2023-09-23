import { Button, Dropdown, MenuProps, Tabs } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import { useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import { useAliveController } from 'react-activation'
import { RedoOutlined } from '@ant-design/icons'

interface Props {
  onChange: (key: string) => void
}

// TODO tab和菜单也要国际化
export const MultiTabs: React.FC<Props> = props => {
  const { onChange } = props
  const [activeKey, setActiveKey] = useState('/')
  let location = useLocation()
  const { refreshScope } = useAliveController()

  React.useEffect(() => {
    setActiveKey(location.pathname)
  }, [location])

  const dropdownItems: MenuProps['items'] = [
    {
      key: '1',
      label: '关闭其他'
    },
    {
      key: '2',
      label: '刷新当前页'
    }
  ]

  const tabBarExtraContent = (
    <Dropdown menu={{ items: dropdownItems }}>
      <a onClick={e => e.preventDefault()} style={{ paddingRight: 10 }}>
        <Button type='text' icon={<MoreOutlined />} />
      </a>
    </Dropdown>
  )

  const dropdownMenus: MenuProps['items'] = [
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
            <Dropdown menu={{ items: dropdownMenus }} trigger={['contextMenu']}>
              <span>{item.label}</span>
            </Dropdown>
            {location.pathname === item.key && (
              <RedoOutlined onClick={() => refreshScope(item.key)} />
            )}
          </>
        ),
        closable: item.key !== '/'
      }
    })
  }

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      //add()
    } else {
      //remove(targetKey)
    }
  }

  return (
    <Tabs
      hideAdd
      onChange={onChange}
      onEdit={onEdit}
      activeKey={activeKey}
      type='editable-card'
      items={[]}
      className='multi-tabs'
      tabBarExtraContent={tabBarExtraContent}
    />
  )
}
