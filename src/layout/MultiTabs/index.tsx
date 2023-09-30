import { Button, Dropdown, MenuProps, Tabs } from 'antd'
import { MoreOutlined } from '@ant-design/icons'
import React, { useState, useMemo, useEffect } from 'react'
import { useAliveController } from 'react-activation'
import { RedoOutlined } from '@ant-design/icons'
import { MenusStore } from '@/layout/MenusStore'
import { useSnapshot } from 'valtio'
import { useNavigate } from '@/hooks/useNavigate'

// TODO tab和菜单也要国际化
export const MultiTabs: React.FC = () => {
  const { menus, activedMenu, activedMenus, fetchMenus } = useSnapshot(MenusStore)
  const { refreshScope } = useAliveController()
  const navigate = useNavigate()

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

  const tabsItems = useMemo(
    (tabs: any) => {
      return activedMenus.map((item: any) => {
        return {
          ...item,
          label: (
            <>
              <Dropdown menu={{ items: dropdownMenus }} trigger={['contextMenu']}>
                <span>{item.label || item.name}</span>
              </Dropdown>
              {activedMenu === item.key && <RedoOutlined onClick={() => refreshScope(item.key)} />}
            </>
          ),
          closable: item.key !== '/'
        }
      })
    },
    [activedMenus]
  )

  const onEdit = (
    targetKey: React.MouseEvent | React.KeyboardEvent | string,
    action: 'add' | 'remove'
  ) => {
    if (action === 'add') {
      //add()
    } else {
      console.log('targetKey', targetKey)
      //remove(targetKey)
    }
  }

  const onChange = path => {
    navigate(path)
  }

  useEffect(() => {
    fetchMenus()
  }, [])

  return (
    <Tabs
      hideAdd
      onChange={onChange}
      onEdit={onEdit}
      activeKey={activedMenu}
      type='editable-card'
      items={tabsItems}
      className='multi-tabs'
      tabBarExtraContent={tabBarExtraContent}
    />
  )
}
