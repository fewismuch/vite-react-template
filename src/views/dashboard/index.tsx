import { ProForm, ProFormText } from '@ant-design/pro-components'

const Page = () => {
  return (
    <ProForm
      onFinish={async values => {
        console.log(values)
      }}
    >
      <ProFormText name='name' label='姓名' />
    </ProForm>
  )
}

export const Component = Page
