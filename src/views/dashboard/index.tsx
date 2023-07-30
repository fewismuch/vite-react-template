import {ProForm, ProFormText} from '@ant-design/pro-components'

const Page = () => {

    return (
        <div className='h-[200vh]'>
            <ProForm
                onFinish={async values => {
                    console.log(values)
                }}
            >
                <ProFormText name='name' label='姓名'/>
            </ProForm>

            <div className='absolute bottom-0'>
                dsss
            </div>
        </div>
    )
}

export default Page
