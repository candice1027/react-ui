import React,{useState, Fragment} from 'react'
import Form from './form'
const FormExample:React.FunctionComponent = () =>{
    const [formData] = useState({
        username:'请输入用户名',
        password: '请输入密码',
        telephone:'请输入手机号'
    })
    const [fields] = useState([
        {name: 'username', label: '用户名', input: {type:'text'}},
        {name: 'password', label: '密码', input: {type:'password'}},
        {name: 'telephone', label: '手机号', input: {type:'tel'}}

    ])
    return (
        <Form value={formData} fields={fields} buttons={
            <Fragment>
                <button type="submit">提交</button>
                <button >返回</button>
            </Fragment>
        }>   
        </Form>
    )
}
export default FormExample