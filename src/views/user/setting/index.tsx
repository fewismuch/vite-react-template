import { PlusOutlined } from '@ant-design/icons'
import type { ProColumns } from '@ant-design/pro-components'
import { ProTable, TableDropdown } from '@ant-design/pro-components'
import { Button, Space, Tag } from 'antd'

type GithubIssueItem = {
  url: string
  id: number
  number: number
  title: string
  labels: {
    name: string
    color: string
  }[]
  state: string
  comments: number
  created_at: string
  updated_at: string
  closed_at?: string
}

const columns: ProColumns<GithubIssueItem>[] = [
  {
    dataIndex: 'index',
    valueType: 'index',
    width: 48
  },
  {
    title: '标题',
    dataIndex: 'title',
    copyable: true,
    ellipsis: true,
    tip: '标题过长会自动收缩',
    formItemProps: {
      rules: [
        {
          required: true,
          message: '此项为必填项'
        }
      ]
    }
  },
  {
    disable: true,
    title: '状态',
    dataIndex: 'state',
    filters: true,
    onFilter: true,
    ellipsis: true,
    valueType: 'select',
    valueEnum: {
      all: { text: '超长'.repeat(50) },
      open: {
        text: '未解决',
        status: 'Error'
      },
      closed: {
        text: '已解决',
        status: 'Success',
        disabled: true
      },
      processing: {
        text: '解决中',
        status: 'Processing'
      }
    }
  },
  {
    disable: true,
    title: '标签',
    dataIndex: 'labels',
    search: false,
    renderFormItem: (_, { defaultRender }) => {
      return defaultRender(_)
    },
    render: (_, record) => (
      <Space>
        {record.labels.map(({ name, color }) => (
          <Tag color={color} key={name}>
            {name}
          </Tag>
        ))}
      </Space>
    )
  },
  {
    title: '创建时间',
    key: 'showTime',
    dataIndex: 'created_at',
    valueType: 'date',
    hideInSearch: true
  },
  {
    title: '创建时间',
    dataIndex: 'created_at',
    valueType: 'dateRange',
    hideInTable: true
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text: any, record, _, action) => [
      <a
        key='editable'
        onClick={() => {
          action?.startEditable?.(record.id)
        }}
      >
        编辑 {text}
      </a>,
      <a href={record.url} target='_blank' rel='noopener noreferrer' key='view'>
        查看
      </a>,
      <TableDropdown
        key='actionGroup'
        onSelect={() => action?.reload()}
        menus={[
          { key: 'copy', name: '复制' },
          { key: 'delete', name: '删除' }
        ]}
      />
    ]
  }
]

const fetchList = (params: any) => {
  console.log(params)
  return new Promise<any>(resolve => {
    resolve({
      data: [
        {
          id: 624748504,
          number: 6689,
          title: '🐛 [BUG]yarn install命令 antd2.4.5会报错',
          labels: [
            {
              name: 'bug',
              color: 'error'
            }
          ],
          state: 'open',
          locked: false,
          comments: 1,
          created_at: '2020-05-26T09:42:56Z',
          updated_at: '2020-05-26T10:03:02Z',
          closed_at: null,
          author_association: 'NONE',
          user: 'chenshuai2144',
          avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
        },
        {
          id: 624691229,
          number: 6688,
          title: '🐛 [BUG]无法创建工程npm create umi',
          labels: [
            {
              name: 'bug',
              color: 'error'
            }
          ],
          state: 'open',
          locked: false,
          comments: 0,
          created_at: '2020-05-26T08:19:22Z',
          updated_at: '2020-05-26T08:19:22Z',
          closed_at: null,
          author_association: 'NONE',
          user: 'chenshuai2144',
          avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
        },
        {
          id: 624674790,
          number: 6685,
          title: '🧐 [问题] build 后还存在 es6 的代码（Umi@2.13.13）',
          labels: [
            {
              name: 'question',
              color: 'success'
            }
          ],
          state: 'open',
          locked: false,
          comments: 0,
          created_at: '2020-05-26T07:54:25Z',
          updated_at: '2020-05-26T07:54:25Z',
          closed_at: null,
          author_association: 'NONE',
          user: 'chenshuai2144',
          avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
        },
        {
          id: 624620220,
          number: 6683,
          title: '2.3.1版本如何在业务页面修改头部状态',
          labels: [
            {
              name: 'question',
              color: 'success'
            }
          ],
          state: 'open',
          locked: false,
          comments: 2,
          created_at: '2020-05-26T05:58:24Z',
          updated_at: '2020-05-26T07:17:39Z',
          closed_at: null,
          author_association: 'NONE',
          user: 'chenshuai2144',
          avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
        },
        {
          id: 624592471,
          number: 6682,
          title: 'hideChildrenInMenu设置后，子路由找不到了',
          labels: [
            {
              name: 'bug',
              color: 'error'
            }
          ],
          state: 'open',
          locked: false,
          comments: 2,
          created_at: '2020-05-26T04:25:59Z',
          updated_at: '2020-05-26T08:00:51Z',
          closed_at: null,
          author_association: 'NONE',
          user: 'chenshuai2144',
          avatar: 'https://gw.alipayobjects.com/zos/antfincdn/XAosXuNZyF/BiazfanxmamNRoxxVxka.png'
        }
      ]
    })
  })
}

const Page = () => {
  return (
    <ProTable
      columns={columns}
      request={fetchList}
      rowKey='id'
      search={{
        labelWidth: 'auto'
      }}
      pagination={{
        pageSize: 5,
        onChange: page => console.log(page)
      }}
      headerTitle='高级表格'
      toolBarRender={() => [
        <Button key='button' icon={<PlusOutlined />} type='primary'>
          新建
        </Button>
      ]}
    />
  )
}

export default Page
