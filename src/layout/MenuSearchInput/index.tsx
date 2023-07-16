import { Input } from 'antd'
import { SearchOutlined } from '@ant-design/icons'

export const MenuSearchInput = () => {
  return (
    <div
      key='SearchOutlined'
      aria-hidden
      style={{
        display: 'flex',
        alignItems: 'center',
        marginInlineEnd: 24
      }}
      onMouseDown={e => {
        e.stopPropagation()
        e.preventDefault()
      }}
    >
      <Input
        prefix={
          <SearchOutlined
            style={{
              color: '#dfdfdf'
            }}
          />
        }
        placeholder='搜索方案'
      />
    </div>
  )
}
