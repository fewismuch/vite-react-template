import {Button, Dropdown, MenuProps, Tabs} from 'antd'
import {MoreOutlined} from '@ant-design/icons'

interface Props {
    items: any[],
    activeKey?: string,
    onChange: (key: string) => void
}

export const MultiTabs: React.FC<Props> = (props) => {
    const {items, activeKey, onChange} = props

    const ditems: MenuProps['items'] = [
        {
            key: '1',
            label: '关闭其他',
        },
        {
            key: '2',
            label: '刷新当前页',
        },
    ];

    const tabBarExtraContent = <Dropdown menu={{items: ditems}}>
        <a onClick={(e) => e.preventDefault()} style={{paddingRight: 10}}>
            <Button type="text" icon={<MoreOutlined/>}/>
        </a>
    </Dropdown>

    return (
        <Tabs
            hideAdd
            onChange={onChange}
            activeKey={activeKey}
            type="editable-card"
            items={items}
            className='multi-tabs'
            tabBarExtraContent={tabBarExtraContent}
        />
    )
}
